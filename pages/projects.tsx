import React from "react";
import tanvi from "../public/tanvi.png";
import { ProjectCard } from "@/Components/Common/ProjectCard";
import styles from "../styles/Projects.module.css"; // Import the CSS file

const projects = () => {
  const projects = [
    {
      title: "Nytestash",
      technologies:
        "Next.js | React.js | TypeScript | Scss | HTML | MongoDB | NoSQL",
      description: [
        "Employed SOLID design principle in the backend architecture of a feature-rich website developed using Next.js, ensuring a scalable and maintainable codebase.",
        "Engineered an intuitive user experience with a dynamic search result page, multiple filter options, wishlists, and an order cart. Ensured a smooth and secure transaction process through seamless Stripe payment integration.",
        "Implemented strong security for user registration and login by using JWT (JSON Web Token) authentication, adding an extra layer of protection through a modern token-based approach.",
        "Implemented a sophisticated email verification workflow during new user registrations to ensure account authenticity.",
        "Designed a four-layered API architecture with well-structured layers, Controller for HTTP requests, Service for business logic, Repository for data access, and Model for data integrity. Used mongoose ODM for mongoDB related operations",
      ],
      imageUrl: "",
      liveUrl: "#",
    },
    {
      title: "SMDB",
      technologies:
        "Next.js | React.js | TypeScript | JavaScript | Scss | HTML",
      description: [
        "Designed and developed a feature-rich website that is integrated seamlessly with the TMDB API, delivering comprehensive insights into millions of movies and TV series, including trending, popular, and top-rated selections.",
        "Implemented features like dynamic URLs for individual movies/TV series, search functionality, and filtering options based on genres, ratings, etc. These features cater to diverse user preferences and needs.",
        "Demonstrated technical adeptness by seamlessly integrating advanced features such as infinite-scroll for smoother content browsing, shimmer-effect during data loading to enhance user experience, and proactive handling of edge cases like missing poster image links, showcasing attention to detail.",
      ],
      imageUrl: "/placeholder.svg?height=675&width=1200",
      liveUrl: "#",
    },
  ];

  return (
    <main className={styles.projectsContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectsList}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default projects;
