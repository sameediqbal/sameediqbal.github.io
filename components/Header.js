import Link from "next/link";
import { site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link prefetch={false} href="/" className={styles.name}>
          {site.name}
        </Link>
        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.links}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              {/* Goes to the About page's TODO until a phone-free PDF is added. */}
              {site.resumeUrl ? (
                <a href={site.resumeUrl} download>
                  Resume
                </a>
              ) : (
                <Link prefetch={false} href="/about/#resume">Resume</Link>
              )}
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
