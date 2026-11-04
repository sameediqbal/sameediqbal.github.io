import Copy from "./Copy";
import styles from "./QuickFacts.module.css";

// Styled like the thermal receipts from Cost of a Click 2.0.
export default function QuickFacts({ facts, link }) {
  return (
    <aside className={styles.receipt} aria-label="Quick facts">
      <p className={styles.title}>Quick facts</p>
      <dl className={styles.list}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.row}>
            <dt>{fact.label}</dt>
            <dd>
              <Copy text={fact.value} />
            </dd>
          </div>
        ))}
      </dl>
      {link && (
        <p className={styles.link}>
          <a href={link.url}>{link.label} ↗</a>
        </p>
      )}
    </aside>
  );
}
