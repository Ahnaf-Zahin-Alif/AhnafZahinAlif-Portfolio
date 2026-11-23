"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types/projects";
import { ProjectPreviewVisual } from "./ProjectPreviewVisual";

interface WorkbenchCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function WorkbenchCard({ project, onSelect }: WorkbenchCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl bg-[#1F1E1D] border border-[#2E2C29] hover:border-[#C85A32] hover:shadow-2xl hover:shadow-[#C85A32]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`Inspect ${project.title} technical architecture`}
    >
      <div>
        {/* Header Bar */}
        <div className="p-5 flex items-center justify-between border-b border-[#2E2C29]">
          <span className="font-mono text-xs font-bold text-[#A39E95] tabular-nums">
            {project.index} // SPEC
          </span>
          <span className="text-[10px] font-mono uppercase font-semibold px-2.5 py-0.5 rounded-full bg-[#161617] text-[#7D9B7A] border border-[#2E2C29]">
            {project.badge}
          </span>
        </div>

        {/* Embedded Interactive Telemetry Widget */}
        <div className="bg-[#161617] border-b border-[#2E2C29]">
          <ProjectPreviewVisual type={project.type} />
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-3">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F0EB] tracking-tight group-hover:text-[#C85A32] transition-colors uppercase">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A39E95] font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="p-6 pt-3 border-t border-[#2E2C29] flex items-center justify-between font-mono text-xs">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[#A39E95] hover:text-[#F4F0EB] hover:underline underline-offset-4 decoration-[#C85A32] flex items-center gap-1 transition-colors text-[11px]"
          aria-label={`Open repository for ${project.title}`}
        >
          <span>Repository</span>
          <ArrowUpRight className="w-3 h-3 text-[#C85A32]" />
        </a>
        <span className="text-[#C85A32] font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
          <span>Blueprint Dossier</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
