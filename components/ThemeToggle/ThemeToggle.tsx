import { useTheme } from "next-themes";

import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // @TODO: take system theme
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <label htmlFor={styles.ThemeToggle} className={styles.ThemeToggleContainer}>
      <input
        id={styles.ThemeToggle}
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleTheme();
        }}
        aria-label="Dark mode toggle"
      />
    </label>
  );
}
