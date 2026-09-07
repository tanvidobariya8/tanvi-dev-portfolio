import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/Components/Footer";
import { Nav } from "@/Components/Nav";
import { Reveal, SplitText } from "@/Components/Common/Motion";
import { projects, site } from "@/Components/content";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>{`Work — ${site.name}`}</title>
        <meta
          name="description"
          content={`Selected projects by ${site.name}, frontend developer.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <header className="pb-14 pt-[calc(var(--nav-h)+4.5rem)]">
          <Reveal>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span className="link-underline">Back home</span>
            </Link>
          </Reveal>

          <h1 className="mt-10 max-w-[14ch] font-serif text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] tracking-tight">
            <SplitText text="Selected work." />
          </h1>

          <Reveal delay={0.25}>
            <p className="mt-7 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              A closer look at what I&apos;ve built — what each project does,
              and the decisions behind it.
            </p>
          </Reveal>
        </header>

        <ol>
          {projects.map((project, index) => (
            <Reveal as="li" key={project.title} delay={index * 0.08}>
              <article className="grid gap-8 border-t border-rule py-14 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                    {project.num}
                  </p>

                  <ul className="mt-5 space-y-1.5">
                    {project.stack.map((tech) => (
                      <li key={tech} className="text-sm text-muted">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-9">
                  <h2 className="font-serif text-[clamp(1.9rem,4.4vw,3rem)] leading-tight tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-prose text-lg text-muted">
                    {project.tagline}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mt-[0.35em] font-mono text-[0.65rem] text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="max-w-prose text-base leading-relaxed text-muted">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <section className="border-t border-rule py-20 text-center md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-[16ch] font-serif text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1] tracking-tight">
              Got something you&apos;d like built?
            </h2>
            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
