"use client";

import { ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectItem } from "@/types/projects";
import { ProjectPreviewVisual } from "./ProjectPreviewVisual";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layoutId={`project-${project.id}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      onClick={() => onSelect(project)}
      className="flex flex-col justify-between rounded-3xl bg-[#151311] border border-white/[0.08] overflow-hidden transition-colors hover:border-white/[0.2] shadow-xl group cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`Open technical breakdown for ${project.title}`}
    >
      <div>
        {/* Header Bar */}
        <div className="p-5 flex items-center justify-between border-b border-white/[0.06]">
          <span className="font-mono text-xs font-bold tabular-nums text-[#f07b3f]">
            {project.index}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#fce19b] text-zinc-950 uppercase font-mono">
            {project.badge}
          </span>
        </div>

        {/* Dynamic Telemetry / Blueprint Preview */}
        <ProjectPreviewVisual type={project.type} />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-zinc-100 tracking-tight text-balance group-hover:text-[#f07b3f] transition-colors">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono">
          <span className="text-[#f07b3f] font-semibold inline-flex items-center gap-1">
            <span>Expand Blueprint</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-400 hover:text-zinc-200 hover:underline inline-flex items-center gap-1"
            aria-label={`Open repository for ${project.title}`}
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
