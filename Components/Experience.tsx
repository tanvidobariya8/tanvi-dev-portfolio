import { experience } from "./content";
import { Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience">
      <h2 className="mb-14 max-w-[18ch] font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] tracking-tight">
        <SplitText text="Where I've been working." />
      </h2>

      <ol>
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${i}`} delay={i * 0.08}>
            <div className="grid gap-5 border-t border-rule py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                  {job.period}
                </p>
                <p className="mt-3 font-mono text-xs tracking-[0.08em] text-faint">
                  {job.location}
                </p>
              </div>

              <div className="md:col-span-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-sm text-accent">{job.company}</p>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.6em] h-px w-4 flex-none bg-rule"
                      />
                      <span className="max-w-prose">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
