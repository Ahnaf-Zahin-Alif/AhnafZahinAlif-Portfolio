"use client";

import { FlagshipProjectCard } from "./FlagshipProjectCard";
import { ProjectCard } from "./ProjectCard";
import { DomainMarquee } from "./DomainMarquee";
import { TechStackExplorer } from "./TechStackExplorer";
import { EngineeringLedger } from "./EngineeringLedger";
import { SystemsProof } from "./SystemsProof";
import { secondaryProjects } from "@/data/projects";
import { ProjectItem } from "@/types/projects";
import { ArrowRight } from "lucide-react";

interface StudioWorkbenchProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function StudioWorkbench({ onSelectProject }: StudioWorkbenchProps) {
  return (
    <div className="w-full py-8 sm:py-10 px-4 sm:px-6 xl:px-10 space-y-16">
      {/* 01 // WORKBENCH & SHOWCASE */}
      <section id="workbench" className="space-y-8 scroll-mt-24" aria-labelledby="workbench-heading">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1 font-mono">
              01 // FEATURED WORKBENCH
            </span>
            <h2 id="workbench-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight text-balance">
              Systems &amp; Interactive Engineering
            </h2>
          </div>

          <a
            href="https://github.com/Ahnaf-Zahin-Alif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-[#151311] hover:bg-[#1d1916] text-xs font-mono font-semibold text-zinc-200 transition-colors w-max shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
            aria-label="View all repositories on GitHub"
          >
            <span>All GitHub Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Flagship Dominant Showcase (CineFilm) */}
        <div>
          <FlagshipProjectCard />
        </div>

        {/* 2-Column Expanding Shared-Element Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* Kinetic Domain Marquee Ribbon */}
      <DomainMarquee />

      {/* 02 // TECHNICAL STACK */}
      <TechStackExplorer />

      {/* 03 // ACADEMIC & SYSTEMS LEDGER */}
      <EngineeringLedger />

      {/* 04 // SYSTEMS PROOF & REVIEWS */}
      <SystemsProof />

      {/* Studio Canvas Footer */}
      <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <p>© 2026 Md. Ahnaf Zahin Alif. All rights reserved.</p>
        <p className="text-[11px]">
          Asymmetric Split Studio • Next.js &amp; Framer Motion
        </p>
      </footer>
    </div>
  );
}
