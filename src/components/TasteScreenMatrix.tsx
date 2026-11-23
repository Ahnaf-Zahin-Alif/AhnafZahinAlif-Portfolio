"use client";

import React from "react";
import { TasteCapabilityMatrix } from "./TasteCapabilityMatrix";
import { EngineeringLedger } from "./EngineeringLedger";

export function TasteScreenMatrix() {
  return (
    <section id="matrix" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-8">
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#5fd4ff] tracking-widest font-semibold">
            <span>03 // CAPABILITY MATRIX &amp; SYSTEMS LEDGER</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">ENGINEERING DISCIPLINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-950 uppercase text-balance">
            Technical Stack &amp; Academic Timeline
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 w-full space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Core Technologies &amp; Runtime Tools
            </div>
            <TasteCapabilityMatrix />
          </div>
          <div className="lg:col-span-7 w-full">
            <EngineeringLedger />
          </div>
        </div>
      </div>
    </section>
  );
}
