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
    <div className="w-full rounded-2xl border border-white/[0.12] dark:border-white/[0.12] light:border-black/[0.12] bg-[#0f121a] dark:bg-[#0f121a] light:bg-white card-specular overflow-hidden shadow-2xl">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-[#161b26]/80 dark:bg-[#161b26]/80 light:bg-slate-100/80 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#5fd4ff]" />
            cinefilm_db :: isolation=REPEATABLE_READ
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#5fd4ff] bg-[#2f6bff]/10 px-2 py-0.5 rounded-full border border-[#2f6bff]/20">
          <Database className="w-3 h-3" />
          <span>MARIADB 11.4</span>
        </div>
      </div>

      {/* SQL Editor Surface */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-800 space-y-1.5 select-text overflow-x-auto">
        <div className="text-slate-500 dark:text-slate-500 light:text-slate-400">// Concurrent Seat Lock Protocol (CineFilm Backend)</div>
        <div>
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">START TRANSACTION</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-slate-400 dark:text-slate-400 light:text-slate-600">
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">SELECT</span> * <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">FROM</span> seats{" "}
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">WHERE</span> show_id = <span className="text-blue-300">412</span>{" "}
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">AND</span> seat_no <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">IN</span> (<span className="text-emerald-400">&apos;B6&apos;</span>, <span className="text-emerald-400">&apos;B7&apos;</span>){" "}
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-bold">FOR UPDATE</span>;
        </div>
        <div className="pl-3 sm:pl-4">
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">UPDATE</span> seats <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">SET</span> status = <span className="text-emerald-400">&apos;RESERVED&apos;</span>, locked_at = <span className="text-[#5fd4ff]">NOW</span>(){" "}
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">WHERE</span> show_id = <span className="text-blue-300">412</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-slate-400">
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">INSERT INTO</span> audit_log (tx_id, seats_count, latency_ms){" "}
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">VALUES</span> (<span className="text-blue-300">{txId}</span>, <span className="text-blue-300">2</span>, <span className="text-blue-300">{latency}</span>);
        </div>
        <div>
          <span className="text-[#2f6bff] dark:text-[#5fd4ff] font-semibold">COMMIT</span>;
        </div>
      </div>

      {/* Live Telemetry Status & Action Footer */}
      <div className="px-4 py-3 bg-[#08090d]/90 dark:bg-[#08090d]/90 light:bg-slate-100/90 border-t border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#5fd4ff]">
            {status === "RUNNING" ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#2f6bff]" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span className="text-[11px] font-semibold uppercase">{status === "RUNNING" ? "LOCKING..." : "ACID COMMITTED"}</span>
          </div>
          <span className="text-slate-500">•</span>
          <span className="font-mono text-[11px] text-slate-400 tabular-nums">
            LATENCY: <strong className="text-slate-200 dark:text-slate-200 light:text-slate-900">{latency}ms</strong>
          </span>
        </div>

        <button
          onClick={runTransaction}
          disabled={status === "RUNNING"}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2f6bff] hover:bg-[#1a56f0] text-white font-mono font-bold text-xs tracking-tight transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-[#2f6bff]/20"
          aria-label="Execute transaction simulator"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>REPLAY LOCK</span>
        </button>
      </div>
    </div>
  );
}
