"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, FolderGit2 } from "lucide-react";
import { HeroPortrait } from "./HeroPortrait";
import { HeroTelemetryBadge } from "./HeroTelemetryBadge";

export function InteractiveHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full bg-[#F4F0EB] text-[#1B1B1C] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#DFD5C6]"
      aria-label="Introduction and Identity"
    >
      {/* Subtle Ambient Contour Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,120 Q300,50 700,180 T1500,100" fill="none" stroke="#DFD5C6" strokeWidth="1.2" />
          <path d="M-50,260 Q400,180 850,320 T1600,220" fill="none" stroke="#DFD5C6" strokeWidth="1" />
          <path d="M-80,480 Q350,420 800,520 T1650,450" fill="none" stroke="#DFD5C6" strokeWidth="1.2" />
          <path d="M0,680 Q500,600 950,710 T1700,660" fill="none" stroke="#DFD5C6" strokeWidth="1" />
        </svg>
      </div>

      {/* Top Header Tag */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#5C5852]">
        <div className="flex items-center gap-2">
          <span className="text-[#C85A32] font-bold">00 //</span>
          <span>SYSTEMS &amp; ALGORITHMIC ARCHITECT</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span>DHAKA, BANGLADESH</span>
          <span>•</span>
          <span className="text-[#5A6E58] font-bold">AVAILABLE FOR ENGINEERING ROLES</span>
        </div>
      </div>

      {/* Center Hero Stage: Giant Condensed Headline with Cutout Portrait Layered Directly Over */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto py-4 sm:py-6 flex flex-col items-center">
        {/* Giant Condensed Headline (Layer 1 - z-10) with Staggered Text Reveal */}
        <div className="w-full text-center select-none space-y-1 sm:space-y-2 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="font-display font-black text-center text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.75rem] 2xl:text-[6.25rem] tracking-tight sm:tracking-tighter uppercase leading-[0.92] text-[#1B1B1C] w-full"
          >
            CRAFTING SCALABLE
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.25 }}
            className="font-display font-black text-center text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.75rem] 2xl:text-[6.25rem] tracking-tight sm:tracking-tighter uppercase leading-[0.92] text-[#1B1B1C] w-full"
          >
            DIGITAL ARCHITECTURE
          </motion.h2>
        </div>

        {/* Cutout Portrait Layered Elegantly Over Headline (Layer 2 - z-20) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          className="relative -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-22 xl:-mt-24 z-20 pointer-events-auto"
        >
          <HeroPortrait />
        </motion.div>

        {/* Sub-Manifesto & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
          className="mt-2 sm:mt-3 flex flex-col sm:flex-row items-center gap-4 text-center z-30"
        >
          <p className="max-w-md text-xs sm:text-sm font-mono text-[#5C5852] leading-relaxed">
            Md. Ahnaf Zahin Alif — BUP ICT. Designing low-latency backends, ACID relational storage, and deterministic algorithms.
          </p>
          <div className="flex items-center gap-2.5">
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#b04d29] text-[#F4F0EB] text-xs font-mono font-bold tracking-tight shadow-md transition-all active:scale-95"
            >
              <span>Explore Manifesto</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EAE4DA] hover:bg-[#DFD5C6] text-[#1B1B1C] border border-[#DFD5C6] text-xs font-mono font-semibold transition-all"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-[#5A6E58]" />
              <span>Stack Specs</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Floating Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-[#DFD5C6]/60">
        <HeroTelemetryBadge />
        <div className="text-[11px] font-mono text-[#5C5852] flex items-center gap-3">
          <span>SCROLL TO INITIALIZE</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
