"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function HeroTelemetryBadge() {
  const [dhakaTime, setDhakaTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setDhakaTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-4 py-3 rounded-2xl bg-[#EAE4DA] border border-[#DFD5C6] shadow-sm text-xs font-mono select-none">
      <div className="flex items-center gap-2 text-[#1B1B1C]">
        <span className="w-2 h-2 rounded-full bg-[#5A6E58] animate-pulse" aria-hidden="true" />
        <span className="font-semibold tracking-wider text-[11px] uppercase">
          FULLSTACK SWE • BUP ICT
        </span>
      </div>
      <div className="hidden sm:block w-px h-3.5 bg-[#DFD5C6]" />
      <div className="flex items-center gap-1.5 text-[#5C5852] tabular-nums text-[11px]">
        <Clock className="w-3 h-3 text-[#5A6E58]" />
        <span>DHAKA</span>
        <strong className="text-[#1B1B1C] font-semibold">{dhakaTime || "10:00:00 PM"}</strong>
        <span className="text-[10px] text-[#5C5852]/80">GMT+6</span>
      </div>
    </div>
  );
}
