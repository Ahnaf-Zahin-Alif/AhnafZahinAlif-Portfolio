"use client";

import React from "react";
import { ProjectItem } from "@/types/projects";
import { SystemsDiagramCard } from "./SystemsDiagramCard";
import { TasteAlgorithmsProof } from "./TasteAlgorithmsProof";
import { Reveal } from "./motion/Reveal";

interface TasteScreenSystemsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function TasteScreenSystems({ onSelectProject }: TasteScreenSystemsProps) {
  return (
    <section id="systems" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-8">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] pb-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[#5fd4ff] tracking-widest font-semibold">
              <span>02 // DISTRIBUTED SYSTEMS &amp; ALGORITHMIC PROOF</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">DATAFLOW TOPOLOGY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-950 uppercase text-balance">
              Systems Architecture &amp; Algorithmic Verification
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Reveal delay={0.1} className="lg:col-span-7 w-full">
            <SystemsDiagramCard onSelectProject={onSelectProject} />
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-5 w-full">
            <TasteAlgorithmsProof />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
