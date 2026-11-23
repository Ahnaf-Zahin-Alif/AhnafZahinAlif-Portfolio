"use client";

import React from "react";
import { TasteCapabilityMatrix } from "./TasteCapabilityMatrix";
import { EngineeringLedger } from "./EngineeringLedger";
import { Reveal } from "./motion/Reveal";

export function TasteScreenMatrix() {
  return (
    <section id="matrix" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-8">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 border-b border-[var(--border-hairline)] pb-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent-sage)] tracking-widest font-semibold">
              <span>03 // CAPABILITY MATRIX &amp; SYSTEMS LEDGER</span>
              <span className="text-slate-600">•</span>
              <span className="text-[var(--text-secondary)]">ENGINEERING DISCIPLINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] uppercase text-balance">
              Technical Stack &amp; Academic Timeline
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Reveal delay={0.1} className="lg:col-span-5 w-full space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Core Technologies &amp; Runtime Tools
            </div>
            <TasteCapabilityMatrix />
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7 w-full">
            <EngineeringLedger />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
