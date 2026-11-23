"use client";

import React, { useState } from "react";
import { Terminal, Database, CheckCircle2, Play, RefreshCw } from "lucide-react";

export function SqlTransactionAppFrame() {
  const [latency, setLatency] = useState(38);
  const [txId, setTxId] = useState(9042);
  const [status, setStatus] = useState<"IDLE" | "RUNNING" | "COMMITTED">("COMMITTED");

  const runTransaction = () => {
    setStatus("RUNNING");
    setTimeout(() => {
      setLatency(Math.floor(Math.random() * 12) + 32);
      setTxId((prev) => prev + 1);
      setStatus("COMMITTED");
    }, 280);
  };

  return (
    <div className="w-full rounded-2xl border border-white/[0.12] dark:border-white/[0.12] light:border-black/[0.12] bg-[#12100e] dark:bg-[#12100e] light:bg-[#f5f3ef] card-specular overflow-hidden shadow-2xl">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-200/80 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
            cinefilm_db :: isolation=REPEATABLE_READ
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <Database className="w-3 h-3" />
          <span>MARIADB 11.4</span>
        </div>
      </div>

      {/* SQL Editor Surface */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 dark:text-zinc-300 light:text-zinc-800 space-y-1.5 select-text overflow-x-auto">
        <div className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400">// Concurrent Seat Lock Protocol (CineFilm Backend)</div>
        <div>
          <span className="text-[#38bdf8] font-semibold">START TRANSACTION</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
          <span className="text-[#f07b3f]">SELECT</span> * <span className="text-[#f07b3f]">FROM</span> seats{" "}
          <span className="text-[#f07b3f]">WHERE</span> show_id = <span className="text-amber-300">412</span>{" "}
          <span className="text-[#f07b3f]">AND</span> seat_no <span className="text-[#f07b3f]">IN</span> (<span className="text-emerald-400">&apos;B6&apos;</span>, <span className="text-emerald-400">&apos;B7&apos;</span>){" "}
          <span className="text-[#38bdf8] font-bold">FOR UPDATE</span>;
        </div>
        <div className="pl-3 sm:pl-4">
          <span className="text-[#f07b3f]">UPDATE</span> seats <span className="text-[#f07b3f]">SET</span> status = <span className="text-emerald-400">&apos;RESERVED&apos;</span>, locked_at = <span className="text-[#38bdf8]">NOW</span>(){" "}
          <span className="text-[#f07b3f]">WHERE</span> show_id = <span className="text-amber-300">412</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-zinc-400">
          <span className="text-[#f07b3f]">INSERT INTO</span> audit_log (tx_id, seats_count, latency_ms){" "}
          <span className="text-[#f07b3f]">VALUES</span> (<span className="text-amber-300">{txId}</span>, <span className="text-amber-300">2</span>, <span className="text-amber-300">{latency}</span>);
        </div>
        <div>
          <span className="text-[#38bdf8] font-semibold">COMMIT</span>;
        </div>
      </div>

      {/* Live Telemetry Status & Action Footer */}
      <div className="px-4 py-3 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-100/70 border-t border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            {status === "RUNNING" ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#38bdf8]" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span className="text-[11px] font-semibold uppercase">{status === "RUNNING" ? "LOCKING..." : "ACID COMMITTED"}</span>
          </div>
          <span className="text-zinc-500">•</span>
          <span className="font-mono text-[11px] text-zinc-400 tabular-nums">
            LATENCY: <strong className="text-zinc-200">{latency}ms</strong>
          </span>
        </div>

        <button
          onClick={runTransaction}
          disabled={status === "RUNNING"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f07b3f] hover:bg-[#e06c30] text-zinc-950 font-mono font-bold text-xs tracking-tight transition-all active:scale-95 disabled:opacity-50"
          aria-label="Execute transaction simulator"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>REPLAY LOCK</span>
        </button>
      </div>
    </div>
  );
}
