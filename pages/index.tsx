import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import { Projects } from "@/Components/ProjectsSection";
import { Skills } from "@/Components/Skills";
import React from "react";

const Home = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      style={{
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <HeroSection />
        </div>

        <div
          style={{
            width: "50%",
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
    </main>
  );
};

export default Home;
