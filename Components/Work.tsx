import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "./content";
import { EASE, Reveal, SplitText } from "./Common/Motion";
import { Section } from "./Section";

/**
 * A compact index row. The full write-up for each project lives on
 * /projects — this section exists to point there, not to repeat it.
 */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Reveal as="li" delay={index * 0.08}>
      <Link
        href="/projects"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative block border-t border-rule py-9"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-1.25rem] inset-y-0 -z-10 rounded-sm bg-surface"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        />

        <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint md:col-span-2">
            {project.num}
          </p>

          <div className="md:col-span-6">
            <h3 className="font-serif text-[clamp(1.5rem,3.2vw,2.25rem)] leading-tight tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 max-w-prose text-base text-muted">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-baseline justify-between gap-4 md:col-span-4">
            <p className="font-mono text-xs leading-relaxed text-faint">
              {project.stack.slice(0, 3).join(" · ")}
            </p>
            <span
              aria-hidden
              className="text-muted transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function Work() {
  return (
    <Section id="work" eyebrow="03 — Projects">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-[18ch] font-serif text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.12] tracking-tight">
          <SplitText text="Selected projects." />
        </h2>

        <Reveal delay={0.2}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink"
          >
            <span className="link-underline">Read the write-ups</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <ol>
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </ol>
    </Section>
  );
}

export default Work;
