"use client";

import { FolderGit2, Sparkles, Plus, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 w-full max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
            Featured work & software repositories
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
          Placeholder Section
        </span>
      </div>

      {/* Visually Clean Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((id) => (
          <div
            key={id}
            className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-dashed border-zinc-300 dark:border-zinc-800/80 flex flex-col justify-between min-h-[220px] transition-colors hover:border-zinc-400 dark:hover:border-zinc-700"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-6 w-32 bg-zinc-200/80 dark:bg-zinc-800/80 rounded-md animate-pulse" />
                <div className="h-5 w-16 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-12 bg-zinc-200/60 dark:bg-zinc-800/60 rounded font-mono text-[10px]" />
                <div className="h-5 w-12 bg-zinc-200/60 dark:bg-zinc-800/60 rounded font-mono text-[10px]" />
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                <span>Project Card #{id}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Placeholder Banner */}
      <div className="mt-6 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <Plus className="w-4 h-4 text-blue-500" />
        <span>Ready to populate with software projects & GitHub repositories</span>
      </div>
    </section>
  );
}
