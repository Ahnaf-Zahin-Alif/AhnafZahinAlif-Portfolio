"use client";

import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

export interface LedgerItem {
  id: string;
  period: string;
  role: string;
  institution: string;
  badge: string;
  metric: { label: string; value: string };
  summary: string;
  skills: string[];
}

export function ParallaxLedgerCard({ item }: { item: LedgerItem }) {
  return (
    <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#1F1E1D] border border-[#2E2C29] hover:border-[#C85A32]/50 transition-colors shadow-lg space-y-4 text-left">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[#2E2C29] pb-4">
        <span className="font-mono text-xs font-semibold text-[#A39E95] tabular-nums flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#C85A32]" />
          {item.period}
        </span>
        <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#161617] text-[#7D9B7A] border border-[#2E2C29]">
          {item.badge}
        </span>
      </div>

      {/* Title & Organization */}
      <div className="space-y-1">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F0EB] tracking-tight uppercase">
          {item.role}
        </h3>
        <p className="font-mono text-xs text-[#A39E95]">{item.institution}</p>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#A39E95] leading-relaxed font-sans">
        {item.summary}
      </p>

      {/* Highlights / Skills List */}
      <div className="space-y-1.5 pt-1">
        {item.skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#F4F0EB]/90">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9B7A] shrink-0" />
            <span>{skill}</span>
          </div>
        ))}
      </div>

      {/* Bottom Metric Tag */}
      <div className="pt-3 border-t border-[#2E2C29] flex items-center justify-between font-mono text-xs">
        <span className="text-[#A39E95]">{item.metric.label}:</span>
        <span className="text-[#C85A32] font-bold tabular-nums">{item.metric.value}</span>
      </div>
    </div>
  );
}
