"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ShieldCheck } from "lucide-react";
import { SqlTransactionAppFrame } from "./SqlTransactionAppFrame";
import { StudioEmailCopy } from "./StudioEmailCopy";

export function TasteHero() {
  return (
    <section id="hero" className="min-h-[100svh] flex flex-col justify-center pt-24 pb-16 relative">
      <div className="taste-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Monolithic Typography & Substance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FULLSTACK SWE • BUP ICT</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-zinc-100 dark:text-zinc-100 light:text-zinc-950 uppercase leading-[1.05] text-balance">
                Md. Ahnaf Zahin Alif
              </h1>
              <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-sans max-w-xl">
                Engineering high-throughput backend services, relational ACID database schemas, and robust algorithms. BUP ICT student focused on systems architecture and competitive programming in C++.
              </p>
            </div>

            {/* The One Hard Fact (Tasteskill Rule 2) */}
            <div className="p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#f07b3f] shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-normal">
                <span className="text-[#f07b3f] font-semibold">VERIFIED BENCHMARKS:</span> MariaDB ACID isolation, C++ Shortest Path &amp; Dynamic Programming algorithms, Django REST micro-architectures.
              </div>
            </div>

            {/* Actions: Verb + Object (Tasteskill Rule 4) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#cinefilm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f07b3f] hover:bg-[#e06c30] text-zinc-950 font-mono font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-[#f07b3f]/20"
                aria-label="Inspect CineFilm flagship engine"
              >
                <span>INSPECT CINEFILM</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
              <StudioEmailCopy />
            </div>

            {/* Author Portrait Anchor */}
            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 dark:border-white/20 light:border-black/20 shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Md. Ahnaf Zahin Alif"
                  fill
                  sizes="44px"
                  className="object-cover object-[center_45%]"
                  priority
                />
              </div>
              <div className="text-xs font-mono text-zinc-400">
                <div className="text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-semibold">Md. Ahnaf Zahin Alif</div>
                <div className="text-[11px] text-zinc-500">Dhaka, Bangladesh (GMT+6)</div>
              </div>
            </div>
          </div>

          {/* Right Column: The Subject Leads at True Size */}
          <div className="lg:col-span-6 w-full">
            <SqlTransactionAppFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
