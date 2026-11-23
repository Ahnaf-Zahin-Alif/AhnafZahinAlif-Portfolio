"use client";

import React from "react";
import { ArrowUpRight, Database } from "lucide-react";
import { ProjectItem } from "@/types/projects";
import { CinefilmSeatSimulator } from "./CinefilmSeatSimulator";

interface TasteFlagshipCinefilmProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function TasteFlagshipCinefilm({ onSelectProject }: TasteFlagshipCinefilmProps) {
  return (
    <section id="cinefilm" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-8">
        {/* Section Header (Top-Aligned) */}
        <div className="space-y-2 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] pb-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#5fd4ff] tracking-widest font-semibold">
            <span>01 // FLAGSHIP SYSTEM ARCHITECTURE</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">MARIADB ACID ENGINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-950 uppercase text-balance">
            CineFilm — Cinema Ticketing &amp; DBMS Engine
          </h2>
        </div>

        {/* 2-Column Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Technical Depth */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
              Full-stack transactional ticketing engine featuring atomic auditorium seat reservation, relational database schema architecture, ACID-compliant concurrency locking, and JWT administrative authentication.
            </p>

            {/* Architectural Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#0f121a]/50 dark:bg-[#0f121a]/50 light:bg-slate-100/50">
                <span className="text-slate-400 block text-[10px] uppercase">Concurrency Model</span>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">SELECT ... FOR UPDATE</span>
              </div>
              <div className="p-3 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#0f121a]/50 dark:bg-[#0f121a]/50 light:bg-slate-100/50">
                <span className="text-slate-400 block text-[10px] uppercase">Isolation Level</span>
                <span className="font-bold text-[#5fd4ff]">REPEATABLE READ</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {["Python", "Django REST", "MariaDB", "React", "Tailwind CSS", "ACID SQL"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-200/60 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] text-slate-300 dark:text-slate-300 light:text-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Direct Action Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/Ahnaf-Zahin-Alif/Dbms-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2f6bff] hover:bg-[#1a56f0] text-white font-mono font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-[#2f6bff]/25"
                aria-label="Inspect Dbms-Project on GitHub"
              >
                <Database className="w-4 h-4" />
                <span>GITHUB: DBMS-PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() =>
                  onSelectProject({
                    id: "cinefilm-spec",
                    index: "01",
                    badge: "FLAGSHIP DBMS",
                    title: "CineFilm Concurrency Architecture",
                    tagline: "Atomic Cinema Ticketing & Concurrency Protocol in MariaDB",
                    description: "Full relational MariaDB schema breakdown with row-level mutex locking and audit trails.",
                    extendedBreakdown: "Engineered with REPEATABLE_READ isolation level to eliminate phantom reads and double-booking during peak ticket releases.",
                    architectureDetails: [
                      "Row-level locking via SELECT ... FOR UPDATE",
                      "ACID transaction rollback on booking conflict",
                      "Live audit log telemetry recording tx_id and latency",
                      "JWT authenticated box office administrative endpoints",
                    ],
                    tags: ["Django", "MariaDB", "React", "JWT", "SQL"],
                    type: "hospital",
                    repoUrl: "https://github.com/Ahnaf-Zahin-Alif/Dbms-Project",
                    metrics: {
                      label: "SQL LATENCY",
                      value: "38ms Average",
                      sublabel: "100% ACID Safe",
                    },
                  })
                }
                className="text-xs font-mono text-slate-400 hover:text-slate-200 underline underline-offset-4 decoration-slate-600 hover:decoration-[#2f6bff] transition-all"
              >
                Inspect Schema Breakdown →
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Seat Grid Telemetry */}
          <div className="lg:col-span-6 w-full">
            <CinefilmSeatSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
