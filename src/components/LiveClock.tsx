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
          hour12: false,
        }).format(new Date())
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151311] border border-white/[0.08] text-xs font-mono">
      <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
      <span className="text-zinc-400">DHAKA</span>
      <span className="text-zinc-200 tabular-nums font-semibold">
        {time || "22:00:00"}
      </span>
      <span className="text-zinc-500 text-[10px]">GMT+6</span>
    </div>
  );
}
