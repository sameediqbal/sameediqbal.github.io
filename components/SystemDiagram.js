import styles from "./SystemDiagram.module.css";

function Flow({ nodes }) {
  return (
    <ol className={styles.flow}>
      {nodes.map((node) => (
        <li key={node} className={styles.node}>
          {node}
        </li>
      ))}
    </ol>
  );
}

// Built from HTML rather than an image so the labels stay readable at phone width.
export default function SystemDiagram({ diagram }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.diagram}>
        <Flow nodes={diagram.start} />
        <ul className={styles.branches}>
          {diagram.branches.map((branch) => (
            <li key={branch.link} className={styles.branch}>
              <span className={styles.link}>{branch.link}</span>
              <Flow nodes={branch.nodes} />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className={styles.caption}>{diagram.caption}</figcaption>
    </figure>
  );
}
