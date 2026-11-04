import Link from "next/link";
import { notFound } from "next/navigation";
import Copy from "@/components/Copy";
import Gallery from "@/components/Gallery";
import Photo from "@/components/PhotoPlaceholder";
import QuickFacts from "@/components/QuickFacts";
import SystemDiagram from "@/components/SystemDiagram";
import VideoEmbed from "@/components/VideoEmbed";
import { getNextProject, getProject, projects } from "@/content/projects";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.summary };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <article>
      <header className={`wrap ${styles.header}`}>
        <p className="label">
          <Link prefetch={false} href="/#work">Work</Link> / {project.year}
        </p>
        <h1>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
      </header>

      <div className={`wrap ${styles.cover}`}>
        <Photo photo={project.cover} ratio="21 / 9" priority />
      </div>

      <div className={`wrap ${styles.body}`}>
        <div className={styles.facts}>
          <QuickFacts facts={project.facts} link={project.link} />
        </div>

        <div className={styles.story}>
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>
                  <Copy text={paragraph} />
                </p>
              ))}
              {section.diagram && <SystemDiagram diagram={section.diagram} />}
            </section>
          ))}
        </div>
      </div>

      <section className={`wrap ${styles.media}`} aria-labelledby="photos">
        <h2 id="photos">Photos</h2>
        <Gallery photos={project.gallery} />
      </section>

      {project.video && (
        <section className={`wrap ${styles.media}`} aria-labelledby="video">
          <h2 id="video">Video</h2>
          <VideoEmbed video={project.video} />
        </section>
      )}

      <nav className={styles.next} aria-label="Next project">
        <Link prefetch={false} href={`/work/${next.slug}/`} className="wrap">
          <span className="label">Next project</span>
          <span className={styles.nextTitle}>{next.shortTitle} →</span>
        </Link>
      </nav>
    </article>
  );
}
