import * as React from "react";
import { Reveal } from "./Common/Motion";

/**
 * Shared section chrome: a numbered eyebrow, a hairline rule, and the
 * consistent vertical rhythm every block on the page sits inside.
 */
export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--nav-h)] border-t border-rule py-20 md:py-28 ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-10 md:mb-14">{eyebrow}</p>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export default Section;
