"use client";

import React from "react";
import { Award, Terminal, Code2, ArrowUpRight } from "lucide-react";

export function TasteAlgorithmsProof() {
  const reviews = [
    {
      author: "Tanvir Ahmed",
      role: "BUP ICT Systems Peer",
      text: "Collaborated on low-level socket programming and database architectures. Exceptionally rigorous on ACID isolation and edge cases.",
    },
    {
      author: "Mahir Faysal",
      role: "Fullstack Partner",
      text: "Engineered robust backend API contracts with clean data normalization. Always prioritizes schema sanity before touching UI code.",
    },
    {
      author: "Samin Yasar",
      role: "Algorithms & CP Collaborator",
      text: "Consistent algorithmic rigor in C++. Strong grasp of asymptotic complexity, shortest path optimizations, and dynamic programming.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Competitive Programming Handle Grid */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href="https://codeforces.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/40 hover:border-white/20 transition-all group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
              CODEFORCES
            </span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="mt-2 text-base font-bold font-mono text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
            C++ Algorithms
          </div>
          <div className="text-[11px] font-mono text-emerald-400 mt-1 tabular-nums">
            Graph Theory • DP • Bitmasking
          </div>
        </a>

        <a
          href="https://codechef.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/40 hover:border-white/20 transition-all group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#f07b3f]" />
              CODECHEF
            </span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="mt-2 text-base font-bold font-mono text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
            Competitive Track
          </div>
          <div className="text-[11px] font-mono text-[#f07b3f] mt-1 tabular-nums">
            Asymptotic Optimization
          </div>
        </a>
      </div>

      {/* Peer Review Cards */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>COLLABORATOR VERIFICATION</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] bg-[#12100e] dark:bg-[#12100e] light:bg-white text-xs font-mono space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">{rev.author}</span>
                <span className="text-[10px] text-zinc-500">{rev.role}</span>
              </div>
              <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-sans leading-relaxed text-[11px]">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
