"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Download } from "lucide-react";

interface LedgerRow {
  period: string;
  institution: string;
  title: string;
  summary: string;
  modules: string[];
}

const ledgerRows: LedgerRow[] = [
  {
    period: "2023 — PRESENT",
    institution: "Bangladesh University of Professionals (BUP)",
    title: "B.Sc. in Information & Communication Technology (ICT)",
    summary:
      "Rigorous undergraduate degree focused on algorithmic complexity, computer architecture, systems software, and distributed applications.",
    modules: [
      "Data Structures & Algorithms (C++)",
      "Operating Systems & Memory Management",
      "Relational Database Systems (SQL)",
      "Computer Networks & Routing (Packet Tracer)",
      "Object-Oriented Programming (Java / C++)",
    ],
  },
  {
    period: "2024 — PRESENT",
    institution: "Competitive Programming & Problem Solving",
    title: "Algorithmic Complexity & Graph Systems",
    summary:
      "Active problem solver on Codeforces & CodeChef, training in dynamic programming, combinatorics, number theory, and asymptotic time-space bounds. Current rating: [TODO: Add Current Rating, e.g. Specialist/Pupil] with [TODO: Add Solved Problems Count, e.g. 250+] problems solved across contests.",
    modules: [
      "Shortest Path & Graph Traversal (Dijkstra, BFS, DFS)",
      "Dynamic Programming Optimization",
      "Bitmasking & Low-Level Binary Operations",
      "Asymptotic Complexity & Memory Constraints",
    ],
  },
];

export function EngineeringLedger() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="ledger" className="w-full space-y-6 scroll-mt-24" aria-labelledby="ledger-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#5fd4ff] uppercase block pb-1 font-mono">
            03 // ACADEMIC &amp; SYSTEMS LEDGER
          </span>
          <h2 id="ledger-heading" className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
            Engineering &amp; Coursework Timeline
          </h2>
        </div>

        <a
          href="mailto:ahnafzahinalif@gmail.com?subject=Request%20CV%20-%20Md.%20Ahnaf%20Zahin%20Alif"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161b26] hover:bg-[#2f6bff] hover:text-white border border-white/[0.12] text-zinc-200 font-semibold text-xs font-mono transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]"
          aria-label="Request CV via email"
        >
          <Download className="w-3.5 h-3.5 text-zinc-950" strokeWidth={1.5} />
          <span>Request Full CV</span>
        </a>
      </div>

      <div className="rounded-3xl bg-[#0f121a] border border-white/[0.08] divide-y divide-white/[0.06] overflow-hidden shadow-lg">
        {ledgerRows.map((row, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div key={idx} className="transition-colors hover:bg-white/[0.02]">
              <button
                type="button"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]"
                aria-expanded={isExpanded}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-[#5fd4ff] tabular-nums font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {row.period}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{row.institution}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100">{row.title}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-200 mt-1 shrink-0 ${
                    isExpanded ? "rotate-180 text-[#2f6bff]" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden px-5 sm:px-6 pb-6 pt-1 space-y-4"
                  >
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-pretty">
                      {row.summary}
                    </p>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                        CURRICULUM &amp; LAB SPECIALIZATIONS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {row.modules.map((mod) => (
                          <span
                            key={mod}
                            className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#08090d] border border-white/[0.08] text-zinc-300"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
