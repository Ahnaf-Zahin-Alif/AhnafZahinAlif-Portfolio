"use client";

import { ArrowUpRight, Activity, CheckCircle2, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export interface SecondaryProjectData {
  index: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  type: "hospital" | "tracker" | "python";
  link: string;
}

export function ProjectCard({ project }: { project: SecondaryProjectData }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="flex flex-col justify-between rounded-3xl bg-[#151311] border border-white/[0.08] overflow-hidden transition-colors hover:border-white/[0.18] shadow-lg group"
    >
      <div>
        {/* Header Bar */}
        <div className="p-5 flex items-center justify-between border-b border-white/[0.06]">
          <span className="font-mono text-xs font-bold tabular-nums text-[#f07b3f]">
            {project.index}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#fce19b] text-zinc-950 uppercase tracking-wider font-mono">
            {project.badge}
          </span>
        </div>

        {/* Real Dynamic Visual Area */}
        <div className="h-44 w-full bg-[#0c0a09] p-4 flex flex-col justify-center border-b border-white/[0.06] relative overflow-hidden">
          {project.type === "hospital" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
                  <span>MEDICARE ADMISSION PIPELINE</span>
                </div>
                <span className="text-zinc-500 tabular-nums">JAVA OOP</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-[#151311] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px]">PATIENT ADMISSIONS</span>
                  <span className="text-zinc-200 tabular-nums font-semibold">142 Inpatients</span>
                </div>
                <div className="p-2 rounded-lg bg-[#151311] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px]">WARD OCCUPANCY</span>
                  <span className="text-[#38bdf8] tabular-nums font-semibold">94.2% Capacity</span>
                </div>
              </div>
            </div>
          )}

          {project.type === "tracker" && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#f07b3f]">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>SPRINT VELOCITY &amp; TASKS</span>
                </div>
                <span className="text-emerald-400 font-bold tabular-nums">92% DONE</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Sprint Milestone 04</span>
                  <span className="text-zinc-200 font-bold">24 / 26 Tasks</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#f07b3f] rounded-full w-[92%]" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
                  <span>Lead Time: 1.8 Days</span>
                  <span>Zero Blockers</span>
                </div>
              </div>
            </div>
          )}

          {project.type === "python" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#38bdf8]">
                  <Terminal className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>AUTOMATION &amp; ALGORITHMS</span>
                </div>
                <span className="text-emerald-400 font-bold tabular-nums">30 / 30 PASSED</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#151311] border border-white/[0.06] font-mono text-[11px] text-zinc-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-500">$ python -m pytest tests/</span>
                  <span className="text-emerald-400 font-bold">OK [100%]</span>
                </div>
                <div className="text-[10px] text-zinc-500 truncate">
                  30 Days of Algorithmic Modules Verified
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-5">
        <div className="space-y-2.5">
          <h4 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight text-balance group-hover:text-[#f07b3f] transition-colors">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2" aria-label={`Tech stack for ${project.title}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1d1916] border border-white/[0.08] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#f07b3f] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] rounded"
            aria-label={`View code for ${project.title}`}
          >
            <span>View GitHub Repository</span>
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
