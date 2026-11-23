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
    <div className="rounded-2xl border border-white/[0.12] dark:border-white/[0.12] light:border-black/[0.12] bg-[#0f121a] dark:bg-[#0f121a] light:bg-white p-6 card-specular space-y-6">
      <div className="text-center space-y-1">
        <div className="h-1.5 w-3/4 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#2f6bff] to-transparent shadow-[0_0_12px_rgba(47,107,255,0.6)]" />
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
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
              let style = "bg-slate-800/80 border-white/[0.08] text-slate-400 hover:border-white/30 cursor-pointer";
              if (isSelected) {
                style = "bg-[#2f6bff] border-[#2f6bff] text-white font-bold shadow-[0_0_10px_rgba(47,107,255,0.7)] cursor-pointer";
              } else if (isReserved) {
                style = "bg-slate-900 border-slate-800 opacity-40 cursor-not-allowed text-slate-600";
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

      <div className="p-3.5 rounded-xl bg-[#08090d] dark:bg-[#08090d] light:bg-slate-100 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-[#5fd4ff]" />
          <span>SELECTED: <strong className="text-slate-100 dark:text-slate-100 light:text-slate-900">{selectedSeats.join(", ") || "None"}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-[#5fd4ff] font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>${selectedSeats.length * 12}.00</span>
        </div>
      </div>
    </div>
  );
}
