import { toolkit } from "./content";
import { Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

export function Toolkit() {
  return (
    <Section id="skills" eyebrow="04 — Skills">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight">
            <SplitText text="The tools I work in." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
              The stack I use day to day, across frontend, testing and
              delivery.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <dl className="space-y-0">
            {toolkit.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.08}>
                <div className="grid gap-3 border-t border-rule py-6 sm:grid-cols-4 sm:gap-6">
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-faint sm:col-span-1">
                    {group.group}
                  </dt>
                  <dd className="flex flex-wrap gap-x-1.5 gap-y-2 sm:col-span-3">
                    {group.items.map((item, idx) => (
                      <span key={item} className="text-base">
                        {item}
                        {idx < group.items.length - 1 && (
                          <span aria-hidden className="ml-1.5 text-rule">
                            /
                          </span>
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export default Toolkit;
