"use client";

import React, { useState } from "react";
import { ChevronRight, Cpu } from "lucide-react";

export interface StackTech {
  name: string;
  role: string;
  detail: string;
  proof: string;
}

interface SplitShowcaseColumnProps {
  title: string;
  subtitle: string;
  technologies: StackTech[];
  defaultSelectedIdx?: number;
}

export function SplitShowcaseColumn({
  title,
  subtitle,
  technologies,
  defaultSelectedIdx = 0,
}: SplitShowcaseColumnProps) {
  const [activeIdx, setActiveIdx] = useState<number>(defaultSelectedIdx);
  const activeTech = technologies[activeIdx] || technologies[0];

  return (
    <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-[#EAE4DA] border border-[#DFD5C6] shadow-sm flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Column Header */}
        <div className="space-y-1 border-b border-[#DFD5C6] pb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#5A6E58] font-bold">
            {subtitle}
          </span>
          <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#1B1B1C]">
            {title}
          </h3>
        </div>

        {/* Tech Selector Pills */}
        <div className="flex flex-wrap gap-2 pt-1" role="tablist">
          {technologies.map((tech, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={tech.name}
                type="button"
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold tracking-tight transition-all active:scale-95 border ${
                  isSelected
                    ? "bg-[#C85A32] text-[#F4F0EB] border-[#C85A32] shadow-sm"
                    : "bg-[#F4F0EB] hover:bg-[#DFD5C6] text-[#1B1B1C] border-[#DFD5C6]"
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                {tech.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Box */}
      <div className="p-5 rounded-2xl bg-[#F4F0EB] border border-[#DFD5C6] space-y-3">
        <div className="flex items-center justify-between border-b border-[#DFD5C6]/80 pb-2.5">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#C85A32]" />
            <span className="font-mono text-sm font-bold text-[#1B1B1C] uppercase">
              {activeTech.name}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#EAE4DA] text-[#5A6E58] font-semibold border border-[#DFD5C6]">
            {activeTech.role}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-sans text-[#5C5852] leading-relaxed">
          {activeTech.detail}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#1B1B1C] border-t border-[#DFD5C6]/60">
          <span className="text-[#5C5852] text-[11px]">PROOF &amp; REPO:</span>
          <span className="font-semibold text-[#C85A32] flex items-center gap-1">
            <span>{activeTech.proof}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
