import { site, socials } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex flex-wrap gap-6">
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

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="link-underline self-start font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink sm:self-auto"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
