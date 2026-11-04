import ContactLinks from "@/components/ContactLinks";
import Copy from "@/components/Copy";
import Timeline from "@/components/Timeline";
import { about } from "@/content/about";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata = { title: about.heading };

function Row({ id, heading, children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={styles.row} aria-labelledby={headingId}>
      <h2 id={headingId}>{heading}</h2>
      <div className={styles.rowBody}>{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <div className="wrap">
      <header className={styles.header}>
        <h1>{about.heading}</h1>
        <div className={styles.bio}>
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ContactLinks className={styles.contact} />
        </div>
      </header>

      <Row id="experience" heading={about.experienceHeading}>
        <Timeline items={about.experience} />
      </Row>

      <Row id="leadership" heading={about.leadershipHeading}>
        <ul className={styles.entries}>
          {about.leadership.map((item) => (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <p className="label">
                {item.role} / {item.dates}
              </p>
              {item.note && <p>{item.note}</p>}
            </li>
          ))}
        </ul>
      </Row>

      <Row id="skills" heading={about.skillsHeading}>
        <dl className={styles.skills}>
          {about.skills.map((skill) => (
            <div key={skill.group}>
              <dt className="label">{skill.group}</dt>
              <dd>{skill.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row id="education" heading={about.educationHeading}>
        <ul className={styles.entries}>
          {about.education.map((item) => (
            <li key={item.degree}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <p className="label">{item.dates}</p>
            </li>
          ))}
        </ul>
      </Row>

      <Row id="publication" heading={about.publicationHeading}>
        <p className={styles.citation}>
          {about.publication.authors} <cite>{about.publication.title}</cite>{" "}
          {about.publication.venue}
        </p>
      </Row>

      <Row id="resume" heading={about.resumeHeading}>
        {site.resumeUrl ? (
          <a className="button button-solid" href={site.resumeUrl} download>
            {about.resumeDownload}
          </a>
        ) : (
          <p>
            <Copy text={about.resumeTodo} />
          </p>
        )}
      </Row>
    </div>
  );
}
