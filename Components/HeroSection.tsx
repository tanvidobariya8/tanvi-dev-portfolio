import Image from "next/image";
import tanvi from "../public/Tanvi.jpg";
import AnimatedTitle from "./Common/AnimatedTitle";

export function HeroSection() {
  return (
    <div className="items-start p-4 sm:p-6 md:p-8 xl:fixed w-full max-w-7xl mx-auto">
      {/* Profile Image */}
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-2 border-gray-500 mb-4 sm:mb-6 mx-auto sm:mx-0">
        <Image
          src={tanvi}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left">
        {/* Title and Intro */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Tanvi
            </span>
          </h1>
          <AnimatedTitle />
        </div>

        {/* Description */}
        <p className="max-w-xl sm:max-w-2xl text-sm sm:text-base text-gray-400 leading-relaxed mx-auto sm:mx-0">
          I am Tanvi, a frontend developer with 2 years of experience in
          React.js, Next.js, and Redux, creating user-friendly web interfaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
          {/* Download CV Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg hover:from-pink-600 hover:to-rose-600 w-full sm:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5 7.5m0 0l7.5-7.5m-7.5 7.5V3"
              />
            </svg>
            Download My CV
          </button>

          {/* Hire Me Button */}
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-pink-600 bg-white border border-pink-600 rounded-lg hover:bg-gray-100 w-full sm:w-auto"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight - 100, // Scrolls to the bottom of the page
                behavior: "smooth", // Adds smooth scrolling animation
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5l7.5-7.5m0 0L12 4.5m7.5 7.5H3"
              />
            </svg>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
