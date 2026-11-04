import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import ProjectCard from "@/components/ProjectCard";
import WaterHero from "@/components/WaterHero";
import { projects } from "@/content/projects";
import { home } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <WaterHero hero={home.hero} water={home.water} />

      <section className="section" id="work" aria-labelledby="work-heading">
        <div className="wrap">
          <div className={styles.intro}>
            <h2 id="work-heading">{home.workHeading}</h2>
            <p className="lede">{home.workIntro}</p>
          </div>
          <ol>
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="wrap">
          <div className={styles.intro}>
            <h2 id="about-heading">{home.aboutHeading}</h2>
          </div>
          <div className={styles.columns}>
            {home.aboutColumns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h3>{column.title}</h3>
                <p>{column.body}</p>
              </div>
            ))}
          </div>
          <Link prefetch={false} className={`button ${styles.more}`} href="/about/">
            {home.aboutLink}
          </Link>
        </div>
      </section>

      <section
        className={`section ${styles.contact}`}
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="wrap">
          <h2 id="contact-heading">{home.contactHeading}</h2>
          <p className={styles.contactIntro}>{home.contactIntro}</p>
          <ContactLinks className={styles.contactLinks} />
        </div>
      </section>
    </>
  );
}
