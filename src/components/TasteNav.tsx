"use client";

import React from "react";
import Link from "next/link";
import { Command } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LiveClock } from "./LiveClock";

interface TasteNavProps {
  onOpenCommandPalette: () => void;
}

export function TasteNav({ onOpenCommandPalette }: TasteNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0a09]/80 dark:bg-[#0c0a09]/80 light:bg-[#fbfaf8]/80 backdrop-blur-md border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
      <div className="taste-wrap h-16 flex items-center justify-between">
        {/* Left: Brand Monogram & Live Clock */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#hero"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] rounded-lg"
            aria-label="Return to top"
          >
            <div className="w-9 h-9 rounded-lg bg-[#f07b3f]/10 border border-[#f07b3f]/30 flex items-center justify-center text-[#f07b3f] font-mono font-bold text-sm tracking-tighter transition-all group-hover:scale-105 group-hover:bg-[#f07b3f]/20">
              AZ
            </div>
            <span className="font-display font-semibold text-xs tracking-tight uppercase hidden md:inline text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
              Md. Ahnaf Zahin Alif
            </span>
          </Link>

          <div className="hidden sm:block pl-4 border-l border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
            <LiveClock />
          </div>
        </div>

        {/* Center / Right: Screen Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
          aria-label="Section navigation"
        >
          <a
            href="#cinefilm"
            className="hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
          >
            01 // CINEFILM
          </a>
          <a
            href="#systems"
            className="hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
          >
            02 // SYSTEMS
          </a>
          <a
            href="#matrix"
            className="hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
          >
            03 // STACK &amp; LEDGER
          </a>
          <a
            href="#closing"
            className="hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
          >
            04 // CONTACT
          </a>
        </nav>

        {/* Controls: Command Palette & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100/60 hover:border-white/20 transition-all text-xs font-mono text-zinc-400 hover:text-zinc-200"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-[#38bdf8]" aria-hidden="true" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="text-[10px] bg-white/[0.06] px-1.5 py-0.5 rounded border border-white/10">⌘K</kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
