import Copy from "./Copy";
import styles from "./Timeline.module.css";

export default function Timeline({ items }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <li key={`${item.title}-${item.org}`} className={styles.item}>
          <p className="label">
            <Copy text={item.dates} />
          </p>
          <h3>{item.title}</h3>
          <p className={styles.org}>{item.org}</p>
          <ul className={styles.points}>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
