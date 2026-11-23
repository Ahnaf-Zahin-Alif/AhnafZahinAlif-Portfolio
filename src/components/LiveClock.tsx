"use client";

import { useState, useEffect } from "react";

export function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f121a] dark:bg-[#0f121a] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] text-xs font-mono">
      <span className="w-2 h-2 rounded-full bg-[#5fd4ff] animate-pulse" aria-hidden="true" />
      <span className="text-slate-400">DHAKA</span>
      <span className="text-slate-200 dark:text-slate-200 light:text-slate-900 tabular-nums font-semibold">
        {time || "22:00:00"}
      </span>
      <span className="text-slate-500 text-[10px]">GMT+6</span>
    </div>
  );
}
