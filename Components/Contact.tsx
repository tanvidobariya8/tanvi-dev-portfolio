import * as React from "react";
import { contact, site, socials } from "./content";
import { Magnetic, Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Posts to /api/contact, which sends the message over SMTP to Tanvi's inbox.
 * Nothing is stored — the email is the only copy. If the request fails for any
 * reason the visitor is offered a mailto: fallback so the message isn't lost.
 */
export function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot — hidden from people, tempting to bots
  });
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  function update(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function mailtoFallback() {
    const subject = form.subject.trim() || `Message from ${form.name}`;
    const body = [form.message, "", "—", `Name: ${form.name}`, form.email]
      .filter(Boolean)
      .join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (!res.ok || !data.ok) {
        setError(data.error || "Couldn't send that message.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setError("Network error — check your connection.");
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (insecure context, permissions) — the address
      // is visible on the button itself, so there's nothing to recover from.
    }
  }

  const field =
    "w-full border-0 border-b border-rule bg-transparent py-3 text-base text-ink placeholder:text-faint focus:border-ink focus:outline-none focus:ring-0 transition-colors disabled:opacity-50";

  return (
    <Section id="contact" eyebrow={contact.eyebrow}>
      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 className="font-serif text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] tracking-tight">
            <SplitText text={contact.title} />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
              {contact.body}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 space-y-5">
              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-baseline gap-3 text-left"
              >
                <span className="font-serif text-xl tracking-tight underline decoration-rule underline-offset-4 transition-colors group-hover:decoration-accent md:text-2xl">
                  {site.email}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-faint">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>

              <div className="space-y-1.5">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="link-underline block font-mono text-sm tracking-[0.06em] text-muted hover:text-ink"
                >
                  {site.phone}
                </a>
                <p className="font-mono text-xs leading-relaxed tracking-[0.06em] text-faint">
                  {site.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={status === "sending"}
                    value={form.name}
                    onChange={update}
                    placeholder="Jane Doe"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={status === "sending"}
                    value={form.email}
                    onChange={update}
                    placeholder="jane@company.com"
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  disabled={status === "sending"}
                  value={form.subject}
                  onChange={update}
                  placeholder="A frontend role / a project / a question"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={status === "sending"}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell me what you're working on."
                  className={`${field} resize-none`}
                />
              </div>

              {/* Honeypot. Hidden from people; bots fill it and get silently dropped. */}
              <div aria-hidden className="hidden">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update}
                />
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </Magnetic>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-xs ${
                    status === "error" ? "text-accent" : "text-faint"
                  }`}
                >
                  {status === "sent" && "Thanks — your message is on its way."}
                  {status === "error" && error}
                  {status === "idle" && "I'll reply to the address you give."}
                </p>
              </div>

              {status === "error" && (
                <p className="text-xs text-muted">
                  Still stuck?{" "}
                  <a
                    href={mailtoFallback()}
                    className="link-underline text-ink"
                  >
                    Open this in your mail app instead
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
