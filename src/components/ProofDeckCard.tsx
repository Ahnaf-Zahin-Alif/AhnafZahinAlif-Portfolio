"use client";

import React from "react";
import { Terminal, Code2, Award, ArrowUpRight } from "lucide-react";

export interface DeckItem {
  id: string;
  type: "review" | "profile";
  authorOrTitle: string;
  roleOrHandle: string;
  textOrSpecialty: string;
  highlight: string;
  url?: string;
  icon?: "terminal" | "code" | "award";
}

export function ProofDeckCard({ item, index }: { item: DeckItem; index: number }) {
  const Icon =
    item.icon === "terminal" ? Terminal : item.icon === "code" ? Code2 : Award;

  const content = (
    <div className="w-64 sm:w-72 h-[340px] sm:h-[370px] p-6 rounded-3xl bg-[#EAE4DA] border-2 border-[#DFD5C6] shadow-xl hover:border-[#C85A32] hover:shadow-2xl hover:shadow-[#C85A32]/15 transition-all duration-300 flex flex-col justify-between select-none text-left">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#DFD5C6] pb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#C85A32]" />
          <span className="font-mono text-[10px] uppercase font-bold text-[#5C5852] tracking-wider">
            {item.type === "review" ? `VERIFICATION 0${index + 1}` : "ALGORITHMIC PROFILE"}
          </span>
        </div>
        {item.url && <ArrowUpRight className="w-3.5 h-3.5 text-[#5C5852]" />}
      </div>

      {/* Middle Content */}
      <div className="space-y-3 my-auto">
        <div>
          <h4 className="font-display font-bold text-xl sm:text-2xl text-[#1B1B1C] uppercase tracking-tight">
            {item.authorOrTitle}
          </h4>
          <span className="font-mono text-xs text-[#5A6E58] font-semibold block">
            {item.roleOrHandle}
          </span>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#5C5852] leading-relaxed line-clamp-4">
          {item.type === "review" ? `“${item.textOrSpecialty}”` : item.textOrSpecialty}
        </p>
      </div>

      {/* Bottom Metric Badge */}
      <div className="pt-3 border-t border-[#DFD5C6] flex items-center justify-between font-mono text-[11px]">
        <span className="text-[#5C5852]">SIGNAL:</span>
        <span className="font-bold text-[#C85A32]">{item.highlight}</span>
      </div>
    </div>
  );

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-3xl"
        aria-label={`Open ${item.authorOrTitle} profile`}
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}
