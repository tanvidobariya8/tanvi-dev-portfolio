import Image from "next/image";
import tanvi from "../public/Tanvi.jpg";
import AnimatedTitle from "./Common/AnimatedTitle";

export function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "64px",
        margin: "auto",
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          height: "190px",
          width: "190px",
          overflow: "hidden",
          borderRadius: "50%",
          border: "2px solid gray",
          marginBottom: "16px",
        }}
      >
        <Image
          src={tanvi}
          alt="Profile"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Text Section */}
      <div style={{ textAlign: "start", maxWidth: "600px" }}>
        {/* Title and Intro */}
        <div>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
            Hi, I'm{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #ec4899, #f43f5e)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Tanvi
            </span>
          </h1>
          <AnimatedTitle />
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            color: "#d1d5db",
            lineHeight: "1.6",
            marginTop: "16px",
          }}
        >
          I am Tanvi, a frontend developer with 2 years of experience in
          React.js, Next.js, and Redux, creating user-friendly web interfaces.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          {/* Download CV Button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              background: "linear-gradient(to right, #ec4899, #f43f5e)",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download My CV
          </button>

          {/* Hire Me Button */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#ec4899",
              backgroundColor: "white",
              border: "2px solid #ec4899",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight - 100,
                behavior: "smooth",
              });
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
