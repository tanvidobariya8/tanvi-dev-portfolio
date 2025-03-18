import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import { Projects } from "@/Components/ProjectsSection";
import { Skills } from "@/Components/Skills";
import React from "react";

const Home = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #1a1a1a, #2d2d2d)",
        color: "white",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px" }}
      >
        {/* Mobile-first: Stack vertically on small screens, side-by-side on larger screens */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Left column - Hero Section */}
          <div style={{ width: "100%" }}>
            <HeroSection />
          </div>

          {/* Right column - Other sections */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            <section style={{ scrollMarginTop: "80px" }} id="about">
              <About />
            </section>

            <section style={{ scrollMarginTop: "80px" }} id="projects">
              <Projects />
            </section>

            <section style={{ scrollMarginTop: "80px" }} id="skills">
              <Skills />
            </section>

            <section style={{ scrollMarginTop: "80px" }} id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
