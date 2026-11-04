import Link from "next/link";
import Photo from "./PhotoPlaceholder";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index }) {
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <Photo photo={project.cover} ratio="3 / 2" />
      </div>
      <div className={styles.text}>
        <p className="label">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </p>
        <h3>
          <Link href={`/work/${project.slug}/`}>{project.shortTitle}</Link>
        </h3>
        <p>{project.summary}</p>
        <p className={styles.more} aria-hidden="true">
          Read the case study →
        </p>
      </div>
    </li>
  );
}
