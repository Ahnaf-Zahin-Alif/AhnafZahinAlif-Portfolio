"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { LiveClock } from "./LiveClock";
import { ThemeToggle } from "./ThemeToggle";
import { StudioEmailCopy } from "./StudioEmailCopy";

const studioNav = [
  { href: "#workbench", label: "01 // WORKBENCH" },
  { href: "#stack", label: "02 // SYSTEMS STACK" },
  { href: "#ledger", label: "03 // ENGINEERING LEDGER" },
  { href: "#proof", label: "04 // PROOF & REVIEWS" },
];

interface StudioIdentityRailProps {
  onOpenCommandPalette: () => void;
}

export function StudioIdentityRail({ onOpenCommandPalette }: StudioIdentityRailProps) {
  const [activeSection, setActiveSection] = useState("#workbench");

  return (
    <aside className="w-full lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-8 sm:py-10 px-4 sm:px-6 xl:px-10 space-y-8 lg:space-y-0">
      {/* Top Header: Brand + Clock + Palette Trigger + Theme */}
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="#workbench" className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]" aria-label="Md. Ahnaf Zahin Alif">
            <div className="w-10 h-10 rounded-xl bg-[#f07b3f] text-zinc-950 font-bold flex items-center justify-center text-sm shadow-md transition-transform group-hover:scale-105">
              AZ
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <LiveClock />
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl bg-[#151311] border border-white/[0.08] text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
              aria-label="Open Command Palette"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Identity & Role Block */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#f07b3f] uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
            <span>FULLSTACK SWE • BUP ICT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-zinc-100 tracking-tight leading-[1.08] text-balance">
            Md. Ahnaf<br />Zahin Alif
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty max-w-sm pt-1">
            Fullstack Software Engineer specializing in backend architectures, ACID transactional databases, low-level algorithms, and competitive programming.
          </p>
        </div>

        {/* Compact Portrait Frame */}
        <div className="relative w-28 h-32 rounded-2xl bg-[#151311] border border-white/[0.08] shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,123,63,0.18),transparent_70%)] pointer-events-none" />
          <Image
            src="/profile.jpg"
            alt="Md. Ahnaf Zahin Alif Portrait"
            fill
            priority
            sizes="112px"
            className="object-cover object-[center_35%]"
          />
        </div>
      </div>

      {/* Middle: Studio Section Index (Desktop Rail) */}
      <nav className="hidden lg:flex flex-col space-y-1.5 py-4" aria-label="Studio Sections">
        {studioNav.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.href)}
              className={`relative py-1.5 text-xs font-mono transition-colors tracking-wider flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] ${
                isActive ? "text-[#f07b3f] font-bold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="rail-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#f07b3f]"
                />
              )}
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Bottom: Utilities & Social Channels */}
      <div className="space-y-3 pt-4 border-t border-white/[0.08]">
        <StudioEmailCopy />

        {/* Social / Competitive Links */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <a href="https://github.com/Ahnaf-Zahin-Alif" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5">
            <span>GitHub</span><ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5">
            <span>Codeforces</span><ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 transition-colors inline-flex items-center gap-0.5">
            <span>LinkedIn</span><ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </aside>
  );
}
