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
    <div className="w-full rounded-2xl border border-[var(--border-hairline)] bg-[var(--surface-card)] card-specular overflow-hidden shadow-2xl">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-[var(--surface-interactive)] border-b border-[var(--border-hairline)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-[var(--text-secondary)] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-sage)]" />
            cinefilm_db :: isolation=REPEATABLE_READ
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--accent-sage)] bg-[var(--accent-sage-bg)] px-2 py-0.5 rounded-full border border-[var(--border-hairline)]">
          <Database className="w-3 h-3" />
          <span>MARIADB 11.4</span>
        </div>
      </div>

      {/* SQL Editor Surface */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-800 space-y-1.5 select-text overflow-x-auto">
        <div className="text-slate-500 dark:text-slate-500 light:text-slate-400">// Concurrent Seat Lock Protocol (CineFilm Backend)</div>
        <div>
          <span className="text-[#C85A32] font-semibold">START TRANSACTION</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-[var(--text-secondary)]">
          <span className="text-[#C85A32] font-semibold">SELECT</span> * <span className="text-[#C85A32] font-semibold">FROM</span> seats{" "}
          <span className="text-[#C85A32] font-semibold">WHERE</span> show_id = <span className="text-amber-300">412</span>{" "}
          <span className="text-[#C85A32] font-semibold">AND</span> seat_no <span className="text-[#C85A32] font-semibold">IN</span> (<span className="text-[var(--accent-sage)]">&apos;B6&apos;</span>, <span className="text-[var(--accent-sage)]">&apos;B7&apos;</span>){" "}
          <span className="text-[#C85A32] font-bold">FOR UPDATE</span>;
        </div>
        <div className="pl-3 sm:pl-4">
          <span className="text-[#C85A32] font-semibold">UPDATE</span> seats <span className="text-[#C85A32] font-semibold">SET</span> status = <span className="text-[var(--accent-sage)]">&apos;RESERVED&apos;</span>, locked_at = <span className="text-[var(--accent-sage)]">NOW</span>(){" "}
          <span className="text-[#C85A32] font-semibold">WHERE</span> show_id = <span className="text-amber-300">412</span>;
        </div>
        <div className="pl-3 sm:pl-4 text-[var(--text-secondary)]">
          <span className="text-[#C85A32] font-semibold">INSERT INTO</span> audit_log (tx_id, seats_count, latency_ms){" "}
          <span className="text-[#C85A32] font-semibold">VALUES</span> (<span className="text-amber-300">{txId}</span>, <span className="text-amber-300">2</span>, <span className="text-amber-300">{latency}</span>);
        </div>
        <div>
          <span className="text-[#C85A32] font-semibold">COMMIT</span>;
        </div>
      </div>

      {/* Live Telemetry Status & Action Footer */}
      <div className="px-4 py-3 bg-[var(--surface-canvas)] border-t border-[var(--border-hairline)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-sage)]">
            {status === "RUNNING" ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#C85A32]" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-sage)]" />
            )}
            <span className="text-[11px] font-semibold uppercase">{status === "RUNNING" ? "LOCKING..." : "ACID COMMITTED"}</span>
          </div>
          <span className="text-slate-500">•</span>
          <span className="font-mono text-[11px] text-[var(--text-secondary)] tabular-nums">
            LATENCY: <strong className="text-[var(--text-primary)]">{latency}ms</strong>
          </span>
        </div>

        <button
          onClick={runTransaction}
          disabled={status === "RUNNING"}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C85A32] hover:bg-[#B24B25] text-[#F4F0EB] font-mono font-bold text-xs tracking-tight transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-[#C85A32]/20"
          aria-label="Execute transaction simulator"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>REPLAY LOCK</span>
        </button>
      </div>
    </div>
  );
}
