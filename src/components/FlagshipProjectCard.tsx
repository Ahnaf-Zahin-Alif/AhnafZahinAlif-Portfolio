import { ArrowUpRight, Film } from "lucide-react";

export function FlagshipProjectCard() {
  const seats = [
    ["empty", "empty", "reserved", "reserved", "empty", "empty", "empty", "empty"],
    ["empty", "reserved", "reserved", "empty", "empty", "selected", "selected", "empty"],
    ["reserved", "reserved", "empty", "empty", "empty", "empty", "reserved", "reserved"],
  ];

  return (
    <article className="rounded-3xl bg-[#151311] border border-white/[0.08] p-6 sm:p-8 transition-colors hover:border-white/[0.16] shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Details & Tech */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tabular-nums text-[#f07b3f] tracking-wider">
              01 / FLAGSHIP PROJECT
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f07b3f]/15 border border-[#f07b3f]/30 text-[#f07b3f] text-[11px] font-semibold uppercase tracking-wider">
              <Film className="w-3 h-3" strokeWidth={1.5} aria-hidden="true" />
              <span>IN DEVELOPMENT</span>
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100 tracking-tight text-balance">
              CineFilm — Cinema Ticketing & Reservation Platform
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed text-pretty">
              Full-stack transactional ticketing engine featuring real-time theater seat reservation,
              ACID-compliant concurrency locking in MariaDB, secure REST APIs, and an admin box-office dashboard.
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1" aria-label="Technologies used in CineFilm">
            {["Django", "React", "MariaDB", "REST API", "Tailwind CSS", "JWT Auth"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[#1d1916] border border-white/[0.08] text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Live Telemetry */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/Ahnaf-Zahin-Alif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f07b3f] hover:bg-[#e06c30] text-zinc-950 font-semibold text-xs sm:text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
              aria-label="View CineFilm repository"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
              <span className="tabular-nums">MariaDB Latency: ~38ms • ACID Safe</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive UI Visual Representation */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#0c0a09] border border-white/[0.08] p-5 sm:p-6 space-y-5">
            {/* Curved Screen Banner */}
            <div className="text-center space-y-1">
              <div className="h-1.5 w-3/4 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#f07b3f] to-transparent shadow-[0_0_12px_rgba(240,123,63,0.5)]" />
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">
                AUDITORIUM 01 SCREEN
              </span>
            </div>

            {/* Seat Grid */}
            <div className="space-y-2 py-2">
              {seats.map((row, rowIdx) => (
                <div key={rowIdx} className="flex justify-center gap-2">
                  {row.map((seat, seatIdx) => {
                    let color = "bg-zinc-800/80 border-white/[0.06]";
                    if (seat === "selected") {
                      color = "bg-[#f07b3f] border-[#f07b3f] shadow-[0_0_8px_rgba(240,123,63,0.6)]";
                    } else if (seat === "reserved") {
                      color = "bg-zinc-900 border-zinc-800 opacity-40";
                    }
                    return (
                      <div
                        key={seatIdx}
                        className={`w-6 h-6 rounded-md border text-[9px] font-mono flex items-center justify-center ${color}`}
                        title={`Seat ${String.fromCharCode(65 + rowIdx)}${seatIdx + 1}`}
                      >
                        {seat === "selected" ? "✓" : ""}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend & Active Order Bar */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#f07b3f]" /> Selected
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-zinc-800" /> Available
                </span>
              </div>
              <span className="text-[#38bdf8] font-bold tabular-nums">Row B, Seats 6-7</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
