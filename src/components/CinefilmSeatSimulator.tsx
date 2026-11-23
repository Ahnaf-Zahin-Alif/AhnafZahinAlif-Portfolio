"use client";

import React, { useState } from "react";
import { Film, CheckCircle2 } from "lucide-react";

export function CinefilmSeatSimulator() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["B6", "B7"]);

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  const rows = [
    { row: "A", seats: ["empty", "empty", "reserved", "reserved", "empty", "empty", "empty", "empty"] },
    { row: "B", seats: ["empty", "reserved", "reserved", "empty", "empty", "empty", "empty", "empty"] },
    { row: "C", seats: ["reserved", "reserved", "empty", "empty", "empty", "empty", "reserved", "reserved"] },
  ];

  return (
    <div className="rounded-2xl border border-white/[0.12] dark:border-white/[0.12] light:border-black/[0.12] bg-[#151311] dark:bg-[#151311] light:bg-[#f5f3ef] p-6 card-specular space-y-6">
      <div className="text-center space-y-1">
        <div className="h-1.5 w-3/4 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#f07b3f] to-transparent shadow-[0_0_12px_rgba(240,123,63,0.5)]" />
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
          AUDITORIUM 01 // IMMERSIVE AUDIO
        </span>
      </div>

      <div className="space-y-2 py-2">
        {rows.map((r, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-2">
            {r.seats.map((st, sIdx) => {
              const seatId = `${r.row}${sIdx + 1}`;
              const isSelected = selectedSeats.includes(seatId);
              const isReserved = st === "reserved";
              let style = "bg-zinc-800/80 border-white/[0.08] text-zinc-400 hover:border-white/30 cursor-pointer";
              if (isSelected) {
                style = "bg-[#f07b3f] border-[#f07b3f] text-zinc-950 font-bold shadow-[0_0_8px_rgba(240,123,63,0.6)] cursor-pointer";
              } else if (isReserved) {
                style = "bg-zinc-900 border-zinc-800 opacity-40 cursor-not-allowed text-zinc-600";
              }
              return (
                <button
                  key={sIdx}
                  disabled={isReserved}
                  onClick={() => toggleSeat(seatId)}
                  className={`w-7 h-7 rounded-md border text-[10px] font-mono flex items-center justify-center transition-all ${style}`}
                  aria-label={`Seat ${seatId} ${isSelected ? "selected" : isReserved ? "reserved" : "available"}`}
                >
                  {sIdx + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-[#0c0a09] dark:bg-[#0c0a09] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-[#38bdf8]" />
          <span>SELECTED: <strong className="text-zinc-100 dark:text-zinc-100 light:text-zinc-900">{selectedSeats.join(", ") || "None"}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>${selectedSeats.length * 12}.00</span>
        </div>
      </div>
    </div>
  );
}
