"use client";

import { ProfileLinksPanel } from "./ProfileLinksPanel";
import { User, Sparkles, Code2, Terminal, Cpu } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-12 pb-12 w-full max-w-4xl mx-auto">
      {/* Top Tag / Status */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-mono mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Welcome to my Personal Portfolio</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
        {/* Prominent Profile Picture UI Placeholder */}
        <div className="relative group flex-shrink-0">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-75 blur group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700/80 flex flex-col items-center justify-center shadow-xl overflow-hidden group">
            {/* Outer Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-20 dark:opacity-30" />
            
            {/* Center Icon and Placeholder Text */}
            <User className="w-12 h-12 text-zinc-400 dark:text-zinc-500 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300 z-10" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1 z-10">
              Profile Photo
            </span>

            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-2 inset-x-0 mx-auto w-max px-2 py-0.5 rounded-full bg-zinc-900/80 dark:bg-zinc-950/90 text-[9px] font-mono text-zinc-300 border border-zinc-700 z-20">
              Placeholder
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Md. Ahnaf Zahin Alif
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-blue-600 dark:text-blue-400 text-sm font-mono font-bold border border-zinc-200 dark:border-zinc-700/60">
            <Code2 className="w-4 h-4" />
            <span>Fullstack SWE</span>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed max-w-xl">
            Student specializing in low-level programming and algorithms.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              Systems Architecture
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-500" />
              Algorithmic Design
            </span>
          </div>
        </div>
      </div>

      {/* Profile Links Panel Dock */}
      <ProfileLinksPanel />
    </section>
  );
}
