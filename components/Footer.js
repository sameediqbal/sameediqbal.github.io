import { site } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span>{site.name}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
