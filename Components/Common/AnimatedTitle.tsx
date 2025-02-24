import React, { useState, useEffect } from "react";

export function AnimatedTitle() {
  const titles = [
    "Full-Stack Web Developer",
    "Frontend Specialist",
    "React & Next.js Developer",
    "UI/UX-Focused Engineer",
    "JavaScript Enthusiast",
    "Web App Creator",
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });
        setIsAnimating(false);
      }, 500); // Half-second transition
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 fade-scale mt-3 *: ${
        isAnimating ? "animate" : ""
      }`}
    >
      {currentTitle}
    </h2>
  );
}

export default AnimatedTitle;
