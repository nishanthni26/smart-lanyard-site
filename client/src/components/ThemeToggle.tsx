/** Friendly Daylight: a compact, explicit control for choosing the page atmosphere. */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
    {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    <span>{isDark ? "Light" : "Dark"}</span>
  </button>;
}
