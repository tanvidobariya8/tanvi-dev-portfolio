import { education } from "./content";
import { Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="05 — Education">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <h2 className="font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] tracking-tight">
            <SplitText text="Education." />
          </h2>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <div className="border-t border-rule pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                  {education.degree}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                  {education.period}
                </p>
              </div>

              <p className="mt-1.5 text-sm text-accent">{education.field}</p>

              <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">
                {education.school}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <p className="font-mono text-xs tracking-[0.08em] text-faint">
                  {education.location}
                </p>
                <p className="font-mono text-xs tracking-[0.08em] text-muted">
                  {education.grade}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default Education;
