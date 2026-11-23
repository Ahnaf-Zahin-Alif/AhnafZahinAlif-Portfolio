"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LiveClock } from "./LiveClock";

interface TasteNavProps {
  onOpenCommandPalette: () => void;
}

const navItems = [
  { id: "cinefilm", label: "01 // CINEFILM" },
  { id: "systems", label: "02 // SYSTEMS" },
  { id: "matrix", label: "03 // STACK & LEDGER" },
  { id: "closing", label: "04 // CONTACT" },
];

export function TasteNav({ onOpenCommandPalette }: TasteNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sectionIds = ["hero", "cinefilm", "systems", "matrix", "closing"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/80 dark:bg-[#08090d]/80 light:bg-[#f8fafc]/80 backdrop-blur-md border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
      <div className="taste-wrap h-16 flex items-center justify-between">
        {/* Left: Brand Monogram & Live Clock */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#hero"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg"
            aria-label="Return to top"
          >
            <div className="w-9 h-9 rounded-lg bg-[#C85A32]/10 border border-[#C85A32]/30 flex items-center justify-center text-[#C85A32] font-mono font-bold text-sm tracking-tighter transition-all group-hover:scale-105 group-hover:bg-[#C85A32]/20 group-hover:border-[#C85A32]/50">
              AZ
            </div>
            <span className="font-display font-semibold text-xs tracking-tight uppercase hidden md:inline text-slate-300 dark:text-slate-300 light:text-slate-800">
              Md. Ahnaf Zahin Alif
            </span>
          </Link>

          <div className="hidden sm:block pl-4 border-l border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
            <LiveClock />
          </div>
        </div>

        {/* Center / Right: Screen Navigation with Sliding Indicator */}
        <nav
          className="hidden lg:flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600"
          aria-label="Section navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors ${
                  isActive
                    ? "text-[var(--accent-sage)] font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-lg bg-[#C85A32]/15 border border-[#C85A32]/30 -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Controls: Command Palette & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/60 hover:border-white/20 transition-all text-xs font-mono text-slate-400 hover:text-slate-200"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-[var(--accent-sage)]" aria-hidden="true" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="text-[10px] bg-white/[0.06] px-1.5 py-0.5 rounded border border-white/10">⌘K</kbd>
          </motion.button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
