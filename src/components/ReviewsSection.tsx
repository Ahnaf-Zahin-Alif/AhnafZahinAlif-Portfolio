"use client";

import { MessageSquareQuote, Star, UserCheck } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 w-full max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Reviews & Endorsements
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
            Testimonials from peers, mentors, and collaborators
          </p>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
          Placeholder Section
        </span>
      </div>

      {/* Visually Clean Testimonials Skeleton Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((id) => (
          <div
            key={id}
            className="p-6 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-dashed border-zinc-300 dark:border-zinc-800/80 flex flex-col justify-between min-h-[180px]"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current opacity-40" />
                ))}
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded animate-pulse" />
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="space-y-1">
                <div className="h-4 w-28 bg-zinc-200/80 dark:bg-zinc-800/80 rounded animate-pulse" />
                <div className="h-3 w-20 bg-zinc-200/50 dark:bg-zinc-800/50 rounded font-mono animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
