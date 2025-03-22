import Image from "next/image";
import tanvi from "../public/Tanvi.jpg";
import AnimatedTitle from "./Common/AnimatedTitle";
import styles from "../styles/HeroSection.module.css"; // Import CSS file

export function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      {/* Profile Image */}
      <div className={styles.profileImage}>
        <Image src={tanvi} alt="Profile" className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.gradientText}>Tanvi</span>
          </h1>
          <AnimatedTitle />
        </div>

        {/* Description */}
        <p className={styles.description}>
          I am Tanvi, a frontend developer with 2 years of experience in
          React.js, Next.js, and Redux, creating user-friendly web interfaces.
        </p>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          {/* Download CV Button */}
          <a
            href="/tanvi_resume.pdf" // Replace with the path to your CV
            download="tanvi_resume.pdf" // Optional: Specify the downloaded file name
            className={styles.downloadButton}
          >
            Download My CV
          </a>

          {/* Hire Me Button */}
          <button
            className={styles.hireMeButton}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
