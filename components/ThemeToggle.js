"use client";

import styles from "./Header.module.css";

function currentTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The theme still changes for this page view.
    }
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Switch between light and dark mode"
    >
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M10 2a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
