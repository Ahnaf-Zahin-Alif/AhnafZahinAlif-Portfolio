"use client";

import React from "react";
import { SplitShowcaseColumn } from "./SplitShowcaseColumn";
import { systemsBackendTech, fullStackDistributedTech } from "@/data/showcaseData";

export function SplitShowcase() {
  return (
    <section
      id="showcase"
      className="relative w-full bg-[#F4F0EB] text-[#1B1B1C] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#DFD5C6] overflow-hidden"
      aria-label="Dual-Mode Stack & Capabilities Showcase"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with Terracotta SVG Brush Underline */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5A6E58] font-bold">
            <span className="text-[#C85A32]">03 //</span>
            <span>CAPABILITIES &amp; ARCHITECTURAL STACK</span>
          </div>

          <div className="relative inline-block">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1B1B1C]">
              DUAL-MODE ARCHITECTURE
            </h2>
            {/* Expressive Terracotta Brush Underline */}
            <svg
              viewBox="0 0 320 20"
              className="w-56 sm:w-80 h-3 sm:h-4 text-[#C85A32] fill-current mt-1"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M 5 13 Q 85 4 165 11 T 315 8 C 240 19 115 17 5 13 Z" />
            </svg>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5C5852] leading-relaxed">
            Bridging low-level systems programming and deterministic algorithm execution with responsive, full-stack distributed architectures. Hover or tap any technology to inspect architectural validation.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <SplitShowcaseColumn
            title="SYSTEMS & BACKEND"
            subtitle="LOW-LEVEL & STORAGE INFRASTRUCTURE"
            technologies={systemsBackendTech}
            defaultSelectedIdx={0}
          />
          <SplitShowcaseColumn
            title="FULL-STACK & DISTRIBUTED"
            subtitle="CLIENT, API & CLOUD RUNTIMES"
            technologies={fullStackDistributedTech}
            defaultSelectedIdx={0}
          />
        </div>
      </div>
    </section>
  );
}
