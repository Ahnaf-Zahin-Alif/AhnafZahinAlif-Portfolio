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
          className="p-4 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#0f121a]/60 dark:bg-[#0f121a]/60 light:bg-slate-100/60 hover:border-white/20 transition-all group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#2f6bff]" />
              CODEFORCES
            </span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="mt-2 text-base font-bold font-mono text-slate-100 dark:text-slate-100 light:text-slate-900">
            C++ Algorithms
          </div>
          <div className="text-[11px] font-mono text-[#5fd4ff] mt-1 tabular-nums">
            Graph Theory • DP • Bitmasking
          </div>
        </a>

        <a
          href="https://codechef.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#0f121a]/60 dark:bg-[#0f121a]/60 light:bg-slate-100/60 hover:border-white/20 transition-all group"
        >
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#5fd4ff]" />
              CODECHEF
            </span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <div className="mt-2 text-base font-bold font-mono text-slate-100 dark:text-slate-100 light:text-slate-900">
            Competitive Track
          </div>
          <div className="text-[11px] font-mono text-[#5fd4ff] mt-1 tabular-nums">
            Asymptotic Optimization
          </div>
        </a>
      </div>

      {/* Peer Review Cards */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#2f6bff]" />
          <span>COLLABORATOR VERIFICATION</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] bg-[#0f121a] dark:bg-[#0f121a] light:bg-white text-xs font-mono space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">{rev.author}</span>
                <span className="text-[10px] text-slate-500">{rev.role}</span>
              </div>
              <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-sans leading-relaxed text-[11px]">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
