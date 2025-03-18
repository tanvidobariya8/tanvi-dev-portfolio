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
      setIsAnimating(false);

      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });

        setIsAnimating(true);
      }, 200); // Small delay for smooth effect
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className={`animated-title ${isAnimating ? "show" : ""}`}>
      {currentTitle}
    </h2>
  );
}

export default AnimatedTitle;
