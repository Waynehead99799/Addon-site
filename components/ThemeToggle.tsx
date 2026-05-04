"use client";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const isLight = theme === "light";
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className="theme-fab fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 w-14 h-14 rounded-full grid place-items-center"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span
        className="theme-fab-icon transition-transform duration-500"
        style={{ transform: mounted && isLight ? "rotate(-40deg) scale(1.05)" : "rotate(0deg) scale(1)" }}
      >
        {isLight ? <Icon.Sun width={18} height={18} /> : <Icon.Moon width={18} height={18} />}
      </span>
    </button>
  );
}
