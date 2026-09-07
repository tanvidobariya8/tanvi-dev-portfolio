import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE, MaskWords, RotatingRole } from "./Common/Motion";
import { hero, site } from "./content";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  // The whole block drifts slightly slower than the page as you scroll away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.3]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[92vh] flex-col justify-center pt-[var(--nav-h)]"
    >
      <motion.div style={{ y, opacity: fade }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {site.availability}
        </motion.p>

        {/* The headline: one sentence, name included. Large, but set at the
            regular weight so the Didone strokes stay fine. */}
        <h1 className="font-serif text-[clamp(2.5rem,7.6vw,6rem)] font-normal leading-[1.06] tracking-[-0.015em]">
          <MaskWords
            delay={0.18}
            segments={[
              { text: hero.headlineLead },
              {
                text: hero.headlineAccent,
                className: "italic",
                // Sweeps ink → terracotta continuously across the phrase.
                gradient: ["#2b1c12", "#c2551f"],
              },
              { text: hero.headlineTail },
            ]}
          />
        </h1>

        {/* Mono meta column beside the intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-14 grid gap-8 md:grid-cols-12 md:gap-10"
        >
          <div className="space-y-1.5 md:col-span-3">
            <p className="font-mono text-xs tracking-[0.06em] text-faint">
              <RotatingRole roles={hero.roles} />
            </p>
            {hero.meta.map((line) => (
              <p
                key={line}
                className="font-mono text-xs tracking-[0.06em] text-faint"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <p className="max-w-prose text-base leading-[1.75] text-muted md:text-[1.0625rem]">
              {hero.intro}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
