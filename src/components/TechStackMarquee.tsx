"use client";

import React from "react";
import {
  Code,
  Terminal,
  Database,
  Layers,
  Server,
  Box,
  FileCode,
  Globe,
  Cpu,
  Workflow,
} from "lucide-react";

const stackItems = [
  { name: "C", category: "Systems", icon: Terminal },
  { name: "C++", category: "Algorithms", icon: Code },
  { name: "Python", category: "Automation", icon: FileCode },
  { name: "Java", category: "OOP / Swing", icon: Cpu },
  { name: "SQL", category: "Relational", icon: Database },
  { name: "MariaDB", category: "ACID Concurrency", icon: Database },
  { name: "PostgreSQL", category: "Schema Design", icon: Server },
  { name: "Next.js", category: "App Router / SSR", icon: Globe },
  { name: "React", category: "UI Architecture", icon: Layers },
  { name: "TypeScript", category: "Type Safety", icon: Code },
  { name: "Docker", category: "Containers", icon: Box },
  { name: "Linux / Bash", category: "Infrastructure", icon: Terminal },
  { name: "Django", category: "Python Backend", icon: Workflow },
  { name: "FastAPI", category: "Microservices", icon: Server },
];

export function TechStackMarquee() {
  return (
    <div className="w-full py-8 border-t border-[#DFD5C6] bg-[#EAE4DA] overflow-hidden select-none">
      <div className="text-center pb-4 text-[10px] font-mono uppercase tracking-widest text-[#5C5852]">
        14 Core Technologies • Autonomous &amp; Fullstack Specializations
      </div>

      <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-6 sm:gap-8 animate-marquee motion-reduce:animate-none group hover:[animation-play-state:paused]">
          {stackItems.concat(stackItems).map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#F4F0EB] border border-[#DFD5C6] shadow-sm text-xs font-mono text-[#1B1B1C] transition-colors hover:border-[#C85A32]"
              >
                <Icon className="w-4 h-4 text-[#C85A32]" strokeWidth={1.75} />
                <span className="font-bold">{tech.name}</span>
                <span className="text-[10px] text-[#5C5852] font-normal">• {tech.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
