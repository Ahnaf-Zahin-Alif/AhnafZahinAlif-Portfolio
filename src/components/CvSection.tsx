"use client";

import { FileText, Download, Briefcase, GraduationCap } from "lucide-react";

export function CvSection() {
  return (
    <section id="cv" className="py-12 w-full max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-500" />
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Curriculum Vitae (CV)
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
            Experience, education & professional background
          </p>
        </div>

        <button
          disabled
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 text-xs font-mono cursor-not-allowed w-max opacity-80"
        >
          <Download className="w-4 h-4" />
          <span>Download CV Placeholder</span>
        </button>
      </div>

      {/* Visually Clean Timeline Skeleton */}
      <div className="p-6 md:p-8 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-dashed border-zinc-300 dark:border-zinc-800/80 space-y-8">
        {/* Education Skeleton Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            <span>Education History</span>
          </div>

          <div className="pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="h-5 w-48 bg-zinc-200/80 dark:bg-zinc-800/80 rounded animate-pulse" />
            <div className="h-4 w-32 bg-zinc-200/50 dark:bg-zinc-800/50 rounded font-mono animate-pulse" />
            <div className="h-4 w-5/6 bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
          </div>
        </div>

        {/* Experience Skeleton Block */}
        <div className="space-y-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span>Experience & Achievements</span>
          </div>

          <div className="pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="h-5 w-56 bg-zinc-200/80 dark:bg-zinc-800/80 rounded animate-pulse" />
            <div className="h-4 w-40 bg-zinc-200/50 dark:bg-zinc-800/50 rounded font-mono animate-pulse" />
            <div className="h-4 w-full bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
