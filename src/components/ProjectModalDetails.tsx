"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import { ProjectItem } from "@/types/projects";

const innerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.04 },
  },
};

const innerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ProjectModalDetails({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      variants={innerContainer}
      initial="hidden"
      animate="visible"
      className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1"
    >
      <motion.div variants={innerItem} className="space-y-2">
        <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-[var(--accent-sage)]">
          {project.tagline}
        </p>
        <p className="text-sm text-zinc-300 leading-relaxed text-pretty pt-1">
          {project.extendedBreakdown}
        </p>
      </motion.div>

      {/* Architecture Blueprint List */}
      <motion.div variants={innerItem} className="space-y-3 pt-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
          KEY ARCHITECTURAL HIGHLIGHTS
        </span>
        <div className="grid grid-cols-1 gap-2.5">
          {project.architectureDetails.map((detail, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#161617] border border-[#2E2C29] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#7D9B7A] shrink-0 mt-0.5" strokeWidth={1.5} />
              <span className="text-xs text-[#F4F0EB] leading-relaxed font-mono">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div variants={innerItem} className="space-y-2 pt-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#A39E95] block font-semibold">
          STACK &amp; PROTOCOLS
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-[#252422] border border-[#2E2C29] text-[#F4F0EB]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Repository Footer CTA */}
      <motion.div variants={innerItem} className="pt-4 border-t border-[#2E2C29] flex items-center justify-between">
        <div className="text-xs font-mono text-[#A39E95]">
          <span className="text-[#A39E95]">{project.metrics.label}:</span>{" "}
          <span className="text-[#7D9B7A] font-semibold tabular-nums">{project.metrics.value}</span>
        </div>
        <motion.a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#b04d29] text-white font-semibold text-xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          aria-label={`Open repository for ${project.title}`}
        >
          <GitBranch className="w-4 h-4" strokeWidth={1.5} />
          <span>Inspect Source Code</span>
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
