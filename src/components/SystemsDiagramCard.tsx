"use client";

import React, { useState } from "react";
import { Network, Activity, Cpu } from "lucide-react";
import { ProjectItem } from "@/types/projects";
import { secondaryProjects } from "@/data/projects";

interface SystemsDiagramCardProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function SystemsDiagramCard({ onSelectProject }: SystemsDiagramCardProps) {
  const [activeLane, setActiveLane] = useState<number>(1);

  return (
    <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--surface-card)] p-5 sm:p-6 card-specular space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-[var(--accent-sage)]" />
          <span className="font-mono text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
            Architecture Topology &amp; Pulse Lanes
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--accent-sage)] bg-[var(--accent-sage-bg)] px-2 py-0.5 rounded-full border border-[var(--border-hairline)]">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* Diagram Canvas: Hub with 3 Parallel Lanes & Animated Pulse Nodes */}
      <div className="relative py-4 select-none">
        <svg viewBox="0 0 500 160" className="w-full h-auto text-slate-600 overflow-visible" fill="none">
          {/* Main Input Hub */}
          <rect x="10" y="55" width="110" height="50" rx="8" className="fill-[var(--surface-interactive)] stroke-[var(--border-hairline)]" strokeWidth="1.5" />
          <text x="65" y="78" textAnchor="middle" className="fill-[var(--text-primary)] text-[11px] font-mono font-bold">INGESTION</text>
          <text x="65" y="93" textAnchor="middle" className="fill-[var(--accent-sage)] text-[9px] font-mono">FastAPI / UDP</text>

          {/* Connectors & Pulse Lines */}
          <path d="M 120 80 C 170 80, 180 30, 230 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 80 L 230 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 80 C 170 80, 180 130, 230 130" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

          {/* Animated Pulses in Terracotta & Sage */}
          <circle cx="160" cy="55" r="3.5" className="fill-[var(--accent-sage)] animate-ping" />
          <circle cx="175" cy="80" r="3.5" className="fill-[#C85A32] animate-ping" />
          <circle cx="160" cy="105" r="3.5" className="fill-[var(--accent-sage)] animate-ping" />

          {/* Lane 1: Orion Sentinel */}
          <rect x="230" y="10" width="250" height="40" rx="6" className={`fill-[var(--surface-interactive)] cursor-pointer transition-colors ${activeLane === 0 ? "stroke-[var(--accent-sage)]" : "stroke-[var(--border-hairline)] hover:stroke-[#C85A32]/50"}`} strokeWidth="1.5" onClick={() => setActiveLane(0)} />
          <text x="245" y="28" className="fill-[var(--text-primary)] text-[10px] font-mono font-bold">LANE 1: ORION SENTINEL (UAV SWARM)</text>
          <text x="245" y="42" className="fill-[var(--accent-sage)] text-[8px] font-mono">Decentralized SOS Pings • Mesh Network</text>

          {/* Lane 2: MediCare */}
          <rect x="230" y="60" width="250" height="40" rx="6" className={`fill-[var(--surface-interactive)] cursor-pointer transition-colors ${activeLane === 1 ? "stroke-[#C85A32]" : "stroke-[var(--border-hairline)] hover:stroke-[#C85A32]/50"}`} strokeWidth="1.5" onClick={() => setActiveLane(1)} />
          <text x="245" y="78" className="fill-[var(--text-primary)] text-[10px] font-mono font-bold">LANE 2: MEDICARE (TRIAGE &amp; BEDS)</text>
          <text x="245" y="92" className="fill-[#C85A32] text-[8px] font-mono">Patient Admission Mutex • Hospital Engine</text>

          {/* Lane 3: C++ Algorithms */}
          <rect x="230" y="110" width="250" height="40" rx="6" className={`fill-[var(--surface-interactive)] cursor-pointer transition-colors ${activeLane === 2 ? "stroke-[var(--accent-sage)]" : "stroke-[var(--border-hairline)] hover:stroke-[#C85A32]/50"}`} strokeWidth="1.5" onClick={() => setActiveLane(2)} />
          <text x="245" y="128" className="fill-[var(--text-primary)] text-[10px] font-mono font-bold">LANE 3: ALGORITHM RUNNER (C++)</text>
          <text x="245" y="142" className="fill-slate-400 text-[8px] font-mono">Dijkstra Shortest Path • Dynamic Programming</text>
        </svg>
      </div>

      {/* Interactive Trigger Card */}
      <div className="p-3.5 rounded-xl bg-[#08090d]/80 dark:bg-[#08090d]/80 light:bg-slate-100/80 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#C85A32]" />
          <span>INSPECT ARCHITECTURE SPEC</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Ahnaf-Zahin-Alif/Hospital-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-400 hover:text-slate-200 underline underline-offset-4 decoration-slate-600 transition-colors hidden sm:inline"
          >
            GitHub: Hospital-Management-System ↗
          </a>
          <button
            onClick={() => {
              const project =
                activeLane === 0
                  ? secondaryProjects.find((p) => p.id === "orion-sentinel")
                  : activeLane === 1
                  ? secondaryProjects.find((p) => p.id === "medicare")
                  : secondaryProjects.find((p) => p.id === "project-tracker");
              if (project) onSelectProject(project);
            }}
            className="px-3 py-1 rounded bg-[#C85A32]/15 border border-[#C85A32]/30 text-[var(--accent-sage)] hover:bg-[#C85A32]/25 font-bold transition-all"
          >
            Open Dossier ↗
          </button>
        </div>
      </div>
    </div>
  );
}
