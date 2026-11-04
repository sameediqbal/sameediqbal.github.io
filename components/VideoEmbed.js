import styles from "./VideoEmbed.module.css";

export default function VideoEmbed({ video }) {
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
    <div>
      <iframe
        className={frameClass}
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
      />
      {video.credit && (
        <p className={styles.credit}>
          <a href={video.credit.url}>{video.credit.label} ↗</a>
        </p>
      )}
    </div>
  );
}
