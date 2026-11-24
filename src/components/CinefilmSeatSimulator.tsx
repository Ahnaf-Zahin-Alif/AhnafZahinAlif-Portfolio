"use client";

import React, { useState } from "react";
import { Film, CheckCircle2 } from "lucide-react";
import { NumberPopIn } from "./NumberPopIn";

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
    <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--surface-card)] p-6 card-specular space-y-6">
      <div className="text-center space-y-1">
        <div className="h-1.5 w-3/4 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#C85A32] to-transparent shadow-[0_0_12px_rgba(200,90,50,0.5)]" />
        <span className="text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase block">
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
              let style = "bg-[var(--surface-interactive)] border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[#C85A32]/40 cursor-pointer";
              if (isSelected) {
                style = "bg-[#C85A32] border-[#C85A32] text-[#F4F0EB] font-bold shadow-[0_0_10px_rgba(200,90,50,0.6)] cursor-pointer";
              } else if (isReserved) {
                style = "bg-[var(--surface-canvas)] border-[var(--border-hairline)] opacity-35 cursor-not-allowed text-[var(--text-muted)]";
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

      <div className="p-3.5 rounded-xl bg-[#161617] border border-[#2E2C29] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-[#C85A32]" />
          <span>SELECTED: <strong className="text-[#F4F0EB]">{selectedSeats.join(", ") || "None"}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-[#7D9B7A] font-bold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <NumberPopIn
            prefix="$"
            value={(selectedSeats.length * 12).toFixed(2)}
          />
        </div>
      </div>
    </div>
  );
}
