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
    <div className="rounded-2xl border border-white/[0.12] dark:border-white/[0.12] light:border-black/[0.12] bg-[#12100e] dark:bg-[#12100e] light:bg-[#f5f3ef] p-5 sm:p-6 card-specular space-y-6">
      <div className="flex items-center justify-between border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <Network className="w-4 h-4 text-[#38bdf8]" />
          <span className="font-mono text-xs font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 uppercase tracking-wider">
            Architecture Topology &amp; Pulse Lanes
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* Diagram Canvas: Hub with 3 Parallel Lanes & Animated Pulse Nodes */}
      <div className="relative py-4 select-none">
        <svg viewBox="0 0 500 160" className="w-full h-auto text-zinc-600 overflow-visible" fill="none">
          {/* Main Input Hub */}
          <rect x="10" y="55" width="110" height="50" rx="8" className="fill-zinc-900 stroke-zinc-700" strokeWidth="1.5" />
          <text x="65" y="78" textAnchor="middle" className="fill-zinc-200 text-[11px] font-mono font-bold">INGESTION</text>
          <text x="65" y="93" textAnchor="middle" className="fill-[#38bdf8] text-[9px] font-mono">FastAPI / UDP</text>

          {/* Connectors & Pulse Lines */}
          <path d="M 120 80 C 170 80, 180 30, 230 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 80 L 230 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 80 C 170 80, 180 130, 230 130" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

          {/* Animated Pulses */}
          <circle cx="160" cy="55" r="3.5" className="fill-[#38bdf8] animate-ping" />
          <circle cx="175" cy="80" r="3.5" className="fill-[#f07b3f] animate-ping" />
          <circle cx="160" cy="105" r="3.5" className="fill-emerald-400 animate-ping" />

          {/* Lane 1: Orion Sentinel */}
          <rect x="230" y="10" width="250" height="40" rx="6" className={`fill-zinc-900 cursor-pointer transition-colors ${activeLane === 0 ? "stroke-[#38bdf8]" : "stroke-zinc-800 hover:stroke-zinc-700"}`} strokeWidth="1.5" onClick={() => setActiveLane(0)} />
          <text x="245" y="28" className="fill-zinc-200 text-[10px] font-mono font-bold">LANE 1: ORION SENTINEL (UAV SWARM)</text>
          <text x="245" y="42" className="fill-[#38bdf8] text-[8px] font-mono">Decentralized SOS Pings • Mesh Network</text>

          {/* Lane 2: MediCare */}
          <rect x="230" y="60" width="250" height="40" rx="6" className={`fill-zinc-900 cursor-pointer transition-colors ${activeLane === 1 ? "stroke-[#f07b3f]" : "stroke-zinc-800 hover:stroke-zinc-700"}`} strokeWidth="1.5" onClick={() => setActiveLane(1)} />
          <text x="245" y="78" className="fill-zinc-200 text-[10px] font-mono font-bold">LANE 2: MEDICARE (TRIAGE &amp; BEDS)</text>
          <text x="245" y="92" className="fill-[#f07b3f] text-[8px] font-mono">Patient Admission Mutex • Hospital Engine</text>

          {/* Lane 3: C++ Algorithms */}
          <rect x="230" y="110" width="250" height="40" rx="6" className={`fill-zinc-900 cursor-pointer transition-colors ${activeLane === 2 ? "stroke-emerald-400" : "stroke-zinc-800 hover:stroke-zinc-700"}`} strokeWidth="1.5" onClick={() => setActiveLane(2)} />
          <text x="245" y="128" className="fill-zinc-200 text-[10px] font-mono font-bold">LANE 3: ALGORITHM RUNNER (C++)</text>
          <text x="245" y="142" className="fill-emerald-400 text-[8px] font-mono">Dijkstra Shortest Path • Dynamic Programming</text>
        </svg>
      </div>

      {/* Interactive Trigger Card */}
      <div className="p-3.5 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100/60 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#f07b3f]" />
          <span>INSPECT ARCHITECTURE SPEC</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Ahnaf-Zahin-Alif/Hospital-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-400 hover:text-zinc-200 underline underline-offset-4 decoration-zinc-600 transition-colors hidden sm:inline"
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
            className="px-3 py-1 rounded bg-[#38bdf8]/15 border border-[#38bdf8]/30 text-[#38bdf8] hover:bg-[#38bdf8]/25 font-bold transition-all"
          >
            Open Dossier ↗
          </button>
        </div>
      </div>
    </div>
  );
}
