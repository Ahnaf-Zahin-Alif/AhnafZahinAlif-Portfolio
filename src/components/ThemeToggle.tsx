"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("studio-theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("studio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("studio-theme", "light");
    }
  };

  if (!mounted) {
    return <div className="w-14 h-7 rounded-full bg-zinc-800/60" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-[var(--surface-card)] border border-[var(--border-hairline)] p-0.5 flex items-center justify-between px-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
      aria-label={isDark ? "Switch to Light Sand theme" : "Switch to Dark Slate theme"}
    >
      <Moon className="w-3.5 h-3.5 text-zinc-400 z-10 pointer-events-none" strokeWidth={1.5} />
      <Sun className="w-3.5 h-3.5 text-zinc-400 z-10 pointer-events-none" strokeWidth={1.5} />
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        animate={{
          scaleX: [1, 1.12, 1],
          x: isDark ? 0 : 26,
        }}
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-[#C85A32] shadow-md -z-0"
      />
    </button>
  );
}
