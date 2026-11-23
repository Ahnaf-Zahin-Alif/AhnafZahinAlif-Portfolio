"use client";

import React from "react";
import { ArrowUpRight, Database } from "lucide-react";
import { ProjectItem } from "@/types/projects";
import { CinefilmSeatSimulator } from "./CinefilmSeatSimulator";
import { Reveal } from "./motion/Reveal";

interface TasteFlagshipCinefilmProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function TasteFlagshipCinefilm({ onSelectProject }: TasteFlagshipCinefilmProps) {
  return (
    <section id="cinefilm" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-8">
        {/* Section Header (Top-Aligned) */}
        <Reveal>
          <div className="space-y-2 border-b border-[var(--border-hairline)] pb-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent-sage)] tracking-widest font-semibold">
              <span>01 // FLAGSHIP SYSTEM ARCHITECTURE</span>
              <span className="text-slate-600">•</span>
              <span className="text-[var(--text-secondary)]">MARIADB ACID ENGINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] uppercase text-balance">
              CineFilm — Cinema Ticketing &amp; DBMS Engine
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Details & Technical Depth */}
          <Reveal delay={0.1} className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-space">
              Full-stack transactional ticketing engine featuring atomic auditorium seat reservation, relational database schema architecture, ACID-compliant concurrency locking, and JWT administrative authentication.
            </p>

            {/* Architectural Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-card)]">
                <span className="text-[var(--text-muted)] block text-[10px] uppercase">Concurrency Model</span>
                <span className="font-bold text-[var(--text-primary)]">SELECT ... FOR UPDATE</span>
              </div>
              <div className="p-3 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-card)]">
                <span className="text-[var(--text-muted)] block text-[10px] uppercase">Isolation Level</span>
                <span className="font-bold text-[var(--accent-sage)]">REPEATABLE READ</span>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {["Python", "Django REST", "MariaDB", "React", "Tailwind CSS", "ACID SQL"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--surface-interactive)] border border-[var(--border-hairline)] text-[var(--text-secondary)]"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B24B25] text-[#F4F0EB] font-mono font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-[#C85A32]/25 hover:-translate-y-0.5"
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
                className="text-xs font-mono text-slate-400 hover:text-slate-200 underline underline-offset-4 decoration-slate-600 hover:decoration-[#C85A32] transition-all"
              >
                Inspect Schema Breakdown →
              </button>
            </div>
          </Reveal>

          {/* Right Column: Interactive Seat Grid Telemetry */}
          <Reveal delay={0.2} className="lg:col-span-6 w-full">
            <CinefilmSeatSimulator />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
