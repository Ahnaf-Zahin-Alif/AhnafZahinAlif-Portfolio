"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 border border-zinc-300/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label="Toggle Dark/Light theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400" />
      </div>
      <span className="text-xs font-medium hidden sm:inline-block">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
