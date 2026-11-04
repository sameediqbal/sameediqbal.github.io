import styles from "./PhotoPlaceholder.module.css";

// Shows the photo once `ready` is true. Until then, a box says which photo to add.
export default function Photo({ photo, ratio = "4 / 3", priority = false }) {
  if (photo.ready) {
    return (
      <img
        className={styles.photo}
        style={{ aspectRatio: ratio }}
        src={photo.src}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return (
    <div className={styles.box} style={{ aspectRatio: ratio }}>
      <span className={styles.tag}>Photo to add</span>
      <span className={styles.label}>{photo.label}</span>
      <span className={styles.path}>public{photo.src}</span>
    </div>
  );
}
