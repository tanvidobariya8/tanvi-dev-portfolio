import { about, stats } from "./content";
import { Counter, Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 className="font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] tracking-tight">
            <SplitText text={about.title} />
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-prose text-base leading-relaxed text-muted">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-8 border-t border-rule pt-10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div>
              <p className="font-serif text-4xl tracking-tight md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-2 max-w-[24ch] text-sm text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default About;
