import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

/**
 * Contact form endpoint — our own backend, no third-party form service.
 *
 * The message is sent over SMTP with nodemailer and delivered to
 * CONTACT_TO_EMAIL. Nothing is written to disk or to a database: the email in
 * that inbox is the only copy. If enquiries ever need to be searchable, add a
 * store here — it's the single place a submission passes through.
 */

type Data = { ok: true } | { ok: false; error: string };

const MAX = { name: 100, email: 200, subject: 200, message: 5000 };

// Deliberately loose: catches typos like "a@b" while rejecting obvious junk.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Best-effort rate limit. Serverless instances are recycled, so this only
 * blunts repeated bursts hitting the same warm instance — it is not a
 * guarantee. For a hard limit, put a store like Upstash behind this.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Stop the map growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t > WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

function clientIp(req: NextApiRequest) {
  const fwd = req.headers["x-forwarded-for"];
  const raw = Array.isArray(fwd) ? fwd[0] : fwd;
  return raw?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/** Header injection guard — strip CR/LF from anything reaching a header. */
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? user;

  // An untouched .env.local still holds placeholders; treat that as unconfigured
  // so the failure is explained here rather than deep inside the SMTP client.
  const configured =
    !!host &&
    !!user &&
    !!pass &&
    !!to &&
    !pass.includes("xxx") &&
    !user.includes("xxx");

  if (!configured) {
    console.error(
      "Contact form is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS " +
        "and CONTACT_TO_EMAIL in .env.local, then restart the dev server. " +
        "For Gmail, SMTP_PASS must be a 16-character App Password " +
        "(https://myaccount.google.com/apppasswords), not your login password."
    );
    return res
      .status(500)
      .json({ ok: false, error: "The form isn't configured yet." });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // Honeypot: a field hidden from people but often filled in by bots.
  if (asString(body.company)) return res.status(200).json({ ok: true });

  const name = asString(body.name);
  const email = asString(body.email);
  const subject = asString(body.subject);
  const message = asString(body.message);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Name, email and message are required." });
  }
  if (!EMAIL_RE.test(email)) {
    return res
      .status(400)
      .json({ ok: false, error: "That email address doesn't look right." });
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return res.status(400).json({ ok: false, error: "That's a bit too long." });
  }

  if (rateLimited(clientIp(req))) {
    return res
      .status(429)
      .json({ ok: false, error: "Too many messages — try again in a minute." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
      auth: { user, pass },
    });

    await transporter.sendMail({
      // The envelope sender must be the authenticated mailbox, or providers
      // reject it as spoofing. The visitor goes in replyTo instead.
      from: `"Portfolio — ${singleLine(name)}" <${user}>`,
      to,
      replyTo: `"${singleLine(name)}" <${singleLine(email)}>`,
      subject: singleLine(subject || `New message from ${name}`),
      text: [
        message,
        "",
        "—",
        `Name: ${name}`,
        `Email: ${email}`,
        subject && `Subject: ${subject}`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Surface the real reason in the server log; keep it vague for the visitor.
    console.error("Contact form failed to send:", err);
    return res.status(502).json({
      ok: false,
      error: "Couldn't send that. Please email directly.",
    });
  }
}
