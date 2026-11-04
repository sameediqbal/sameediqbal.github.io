import styles from "./VideoEmbed.module.css";

export default function VideoEmbed({ video }) {
  const ratio = video.portrait ? "9 / 16" : "16 / 9";
  const frameClass = video.portrait ? styles.portrait : styles.landscape;

  if (!video.src) {
    return (
      <div className={`${styles.box} ${styles.landscape}`}>
        <span className={styles.tag}>Video to add</span>
        <span className={styles.label}>{video.label}</span>
      </div>
    );
  }

  return (
    <iframe
      className={frameClass}
      style={{ aspectRatio: ratio }}
      src={video.src}
      title={video.title}
      loading="lazy"
      allow="encrypted-media; picture-in-picture; fullscreen"
    />
  );
}
