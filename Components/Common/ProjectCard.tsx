import Image from "next/image";
import styles from "../../styles/ProjectCard.module.css"; // Import the CSS file

interface ProjectCardProps {
  title: string;
  technologies: string;
  description: string[];
  imageUrl: any;
  liveUrl: string;
  index: number; // Index to determine layout dynamically
}

export function ProjectCard({
  title,
  technologies,
  description,
  imageUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const isEven = index % 2 !== 0; // Check if the index is even

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.gridContainer} ${
          isEven ? styles.evenLayout : styles.oddLayout
        }`}
      >
        {/* Content Section */}
        <div
          className={`${styles.contentSection} ${
            isEven ? styles.orderLast : styles.orderFirst
          }`}
        >
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.technologies}>{technologies}</p>
          </div>
          <ul className={styles.descriptionList}>
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a
            href={liveUrl}
            // target="_blank"
            rel="noopener noreferrer"
            className={styles.liveButton}
          >
            LIVE
          </a>
        </div>

        {/* Image Section */}
        <div
          className={`${styles.imageContainer} ${
            isEven ? "" : styles.orderFirst
          }`}
        >
          <Image src={imageUrl} alt={title} fill className={styles.image} />
        </div>
      </div>
    </div>
  );
}
