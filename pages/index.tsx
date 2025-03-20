import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import HeroSection from "@/Components/HeroSection";
import { Projects } from "@/Components/ProjectsSection";
import { Skills } from "@/Components/Skills";
import React from "react";
import styles from "../styles/home.module.css"; // Import CSS file

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* Left Section - Hero */}
        <div className={styles.leftSection}>
          <HeroSection />
        </div>

        {/* Right Section - About, Projects, Skills, Contact */}
        <div className={styles.rightSection}>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
