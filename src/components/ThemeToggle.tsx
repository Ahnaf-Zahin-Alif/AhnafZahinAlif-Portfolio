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
      <div className="w-9 h-9 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 sm:px-3 sm:py-2 rounded-xl bg-zinc-100 dark:bg-[#1f1c19] hover:bg-zinc-200 dark:hover:bg-[#2a2622] border border-zinc-200 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-200 transition-colors flex items-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
      aria-label="Toggle Dark/Light theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-[#f07b3f]" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-[#fce19b]" />
      </div>
      <span className="text-xs font-mono font-medium hidden sm:inline-block">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
