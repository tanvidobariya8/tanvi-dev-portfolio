import * as React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/** Editorial easing — a long, settled decelerate. Used everywhere for consistency. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ *
 * Reveal — fades a block up as it scrolls into view.
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ *
 * SplitText — animates a headline in word by word.
 * Words, not letters: letters shred long headlines on mobile reflow.
 * ------------------------------------------------------------------ */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const word: Variants = {
    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        // Each word needs its own clipping window for the mask-up effect.
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ *
 * RotatingRole — cycles job titles with a typewriter caret.
 * ------------------------------------------------------------------ */
export function RotatingRole({ roles }: { roles: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [typed, setTyped] = React.useState(reduce ? roles[0] : "");
  const [phase, setPhase] = React.useState<"typing" | "holding" | "erasing">(
    "typing"
  );

  React.useEffect(() => {
    if (reduce) return;
    const full = roles[index];

    if (phase === "typing") {
      if (typed === full) {
        const t = setTimeout(() => setPhase("holding"), 1600);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      setPhase("erasing");
      return;
    }

    // erasing
    if (typed === "") {
      setIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
      return;
    }
    const t = setTimeout(() => setTyped(typed.slice(0, -1)), 28);
    return () => clearTimeout(t);
  }, [typed, phase, index, roles, reduce]);

  return (
    <span className="inline-flex items-baseline">
      <span>{typed}</span>
      <motion.span
        aria-hidden
        className="ml-[0.08em] inline-block h-[0.85em] w-[2px] translate-y-[0.06em] bg-accent"
        animate={reduce ? {} : { opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Magnetic — button/link that leans toward the cursor.
 * ------------------------------------------------------------------ */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (rect.left + rect.width / 2)) * strength,
      y: (e.clientY - (rect.top + rect.height / 2)) * strength,
    });
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ *
 * Counter — counts a number up once it enters view.
 * ------------------------------------------------------------------ */
export function Counter({
  to,
  suffix = "",
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = React.useState(reduce ? to : 0);

  React.useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      // easeOutExpo, so the number lands softly instead of stopping dead
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * MaskWords — a headline made of styled segments, revealed word by word.
 * Each word slides up out of its own clipping window, so the line flows
 * and wraps naturally at any width instead of being hard-split.
 *
 * A segment may carry a `gradient`. Because every word is its own element,
 * a plain CSS gradient would restart on each one. Instead each word is given
 * the slice of the ramp it occupies, so the phrase reads as one continuous
 * sweep while still wrapping freely.
 * ------------------------------------------------------------------ */
export type Segment = {
  text: string;
  className?: string;
  gradient?: [string, string];
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function mixHex(from: string, to: string, t: number) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

export function MaskWords({
  segments,
  className,
  delay = 0,
  stagger = 0.055,
}: {
  segments: Segment[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  const label = segments.map((s) => s.text).join(" ");
  let wordIndex = 0;

  return (
    <span className={className}>
      <span className="sr-only">{label}</span>
      <span aria-hidden>
        {segments.map((segment, si) => {
          const words = segment.text.split(" ");
          return (
            <span key={si} className={segment.className}>
              {words.map((word, wi) => {
                const i = wordIndex++;

                // This word's slice of the segment-wide gradient ramp.
                const style = segment.gradient
                  ? {
                      backgroundImage: `linear-gradient(90deg, ${mixHex(
                        segment.gradient[0],
                        segment.gradient[1],
                        wi / words.length
                      )}, ${mixHex(
                        segment.gradient[0],
                        segment.gradient[1],
                        (wi + 1) / words.length
                      )})`,
                    }
                  : undefined;

                return (
                  <span
                    key={i}
                    // pb/-mb keeps italic descenders from being clipped
                    className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
                  >
                    <motion.span
                      className={`inline-block ${
                        segment.gradient ? "bg-clip-text text-transparent" : ""
                      }`}
                      style={style}
                      initial={{
                        y: reduce ? 0 : "110%",
                        opacity: reduce ? 0 : 1,
                      }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: delay + i * stagger,
                        ease: EASE,
                      }}
                    >
                      {word}
                    </motion.span>
                    {" "}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}
