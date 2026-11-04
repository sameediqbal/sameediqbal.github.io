import Photo from "./PhotoPlaceholder";
import styles from "./Gallery.module.css";

export default function Gallery({ photos }) {
  return (
    <ul className={styles.gallery}>
      {photos.map((photo) => (
        <li key={photo.src}>
          <Photo photo={photo} />
        </li>
      ))}
    </ul>
  );
}
