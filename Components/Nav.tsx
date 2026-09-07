import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { nav, site } from "./content";

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Progress rule that fills across the top of the page as you read.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile sheet.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink/70"
        style={{ scaleX: progress }}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-rule transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto flex h-[var(--nav-h)] max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-serif text-2xl italic tracking-tight"
          onClick={() => setOpen(false)}
        >
          {site.firstName}.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {nav
              .filter((item) => item.href !== "#contact")
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="font-mono text-[0.62rem] text-accent/80 transition-colors group-hover:text-accent">
                    {item.num}
                  </span>
                  <span className="link-underline">{item.label}</span>
                </a>
              ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-ink/30 px-5 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span
            className="block h-px w-6 bg-ink"
            animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-px w-6 bg-ink"
            animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={
          open
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-0 z-40 bg-paper md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          {nav.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              initial={false}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: open ? 0.15 + i * 0.06 : 0, duration: 0.5 }}
              className="flex items-baseline gap-4 border-b border-rule py-4"
            >
              <span className="font-mono text-xs text-faint">{item.num}</span>
              <span className="font-serif text-4xl">{item.label}</span>
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}

export default Nav;
