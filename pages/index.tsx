import Head from "next/head";
import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Education } from "@/Components/Education";
import { Experience } from "@/Components/Experience";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Nav } from "@/Components/Nav";
import { Toolkit } from "@/Components/Toolkit";
import { Work } from "@/Components/Work";
import { hero, site } from "@/Components/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${site.name} — Frontend Developer`}</title>
        <meta name="description" content={hero.intro} />
        <meta property="og:title" content={`${site.name} — Frontend Developer`} />
        <meta property="og:description" content={hero.intro} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Toolkit />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
