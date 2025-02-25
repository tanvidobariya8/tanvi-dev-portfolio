import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import { Projects } from "@/Components/ProjectsSection";
import { Skills } from "@/Components/Skills";
import React from "react";
// import "@/globals.css";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Mobile-first: Stack vertically on small screens, side-by-side on larger screens */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Hero Section */}
          <div className="w-full md:w-1/2">
            <HeroSection />
          </div>

          {/* Right column - Other sections */}
          <div className="w-full md:w-1/2 space-y-12">
            <section className="scroll-mt-20" id="about">
              <About />
            </section>

            <section className="scroll-mt-20" id="projects">
              <Projects />
            </section>

            <section className="scroll-mt-20" id="skills">
              <Skills />
            </section>

            <section className="scroll-mt-20" id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
