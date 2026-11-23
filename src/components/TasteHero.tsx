"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDownRight, ShieldCheck } from "lucide-react";
import { SqlTransactionAppFrame } from "./SqlTransactionAppFrame";
import { StudioEmailCopy } from "./StudioEmailCopy";

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export function TasteHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="min-h-[100svh] flex flex-col justify-center pt-24 pb-16 relative">
      <div className="taste-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Monolithic Typography & Substance */}
          <motion.div
            variants={heroContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#5fd4ff] animate-pulse" />
              <span>FULLSTACK SWE • BUP ICT</span>
            </motion.div>

            <motion.div variants={heroItem} className="space-y-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-100 dark:text-slate-100 light:text-slate-950 uppercase leading-[1.05] text-balance">
                Md. Ahnaf Zahin Alif
              </h1>
              <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans max-w-xl">
                Engineering high-throughput backend services, relational ACID database schemas, and robust algorithms. BUP ICT student focused on systems architecture and competitive programming in C++.
              </p>
            </motion.div>

            {/* The One Hard Fact (Tasteskill Rule 2) */}
            <motion.div variants={heroItem} className="p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#0f121a]/60 dark:bg-[#0f121a]/60 light:bg-slate-100/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2f6bff] shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 leading-normal">
                <span className="text-[#5fd4ff] font-semibold">VERIFIED BENCHMARKS:</span> MariaDB ACID isolation, C++ Shortest Path &amp; Dynamic Programming algorithms, Django REST micro-architectures.
              </div>
            </motion.div>

            {/* Actions: Verb + Object (Tasteskill Rule 4) */}
            <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#cinefilm"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2f6bff] hover:bg-[#1a56f0] text-white font-mono font-bold text-xs tracking-tight transition-all active:scale-95 shadow-lg shadow-[#2f6bff]/25 hover:-translate-y-0.5"
                aria-label="Inspect CineFilm flagship engine"
              >
                <span>INSPECT CINEFILM</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
              <StudioEmailCopy />
            </motion.div>

            {/* Author Portrait Anchor */}
            <motion.div variants={heroItem} className="pt-2 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 dark:border-white/20 light:border-black/20 shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Md. Ahnaf Zahin Alif"
                  fill
                  sizes="(max-width: 768px) 44px, 44px"
                  className="object-cover object-[center_45%]"
                  priority
                />
              </div>
              <div className="text-xs font-mono text-slate-400">
                <div className="text-slate-200 dark:text-slate-200 light:text-slate-900 font-semibold">Md. Ahnaf Zahin Alif</div>
                <div className="text-[11px] text-slate-500">Dhaka, Bangladesh (GMT+6)</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: SQL Transaction App Frame with gentle entrance and float */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-3, 3, -3] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <SqlTransactionAppFrame />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
