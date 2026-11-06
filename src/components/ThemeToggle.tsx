"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="absolute right-5 top-5 rounded-full border border-white/60 bg-white/40 px-3.5 py-2 text-sm backdrop-blur-md transition hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {dark ? "☀️ 밝게" : "🌙 어둡게"}
    </button>
  );
}
