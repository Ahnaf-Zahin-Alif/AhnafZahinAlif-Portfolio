"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  "BACKEND ENGINEERING",
  "SYSTEM DESIGN",
  "COMPETITIVE PROGRAMMING",
  "DISTRIBUTED SYSTEMS",
  "RELATIONAL DATABASES",
];

export function MarqueeManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const marqueeText = capabilities.join(" • ") + " • ";

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-[85vh] w-full bg-[#161617] text-[#F4F0EB] py-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden border-b border-[#2E2C29]"
      aria-label="Capabilities Marquee and Engineering Manifesto"
    >
      {/* 1. Giant Outlined Capabilities Marquee Scrolling Behind */}
      <div className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-20">
        <div className="flex whitespace-nowrap animate-marquee">
          <span
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-transparent stroke-sand"
            style={{ WebkitTextStroke: "1.5px rgba(244, 240, 235, 0.45)" }}
          >
            {marqueeText}
          </span>
          <span
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter text-transparent stroke-sand"
            style={{ WebkitTextStroke: "1.5px rgba(244, 240, 235, 0.45)" }}
          >
            {marqueeText}
          </span>
        </div>
      </div>

      {/* Top Telemetry Header */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A39E95]">
        <div className="flex items-center gap-2">
          <span className="text-[#C85A32] font-bold">01 //</span>
          <span>DISCIPLINE &amp; MANIFESTO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7D9B7A]" />
          <span>FIRST-PRINCIPLES COMPUTING</span>
        </div>
      </div>

      {/* Center Manifesto Stage */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-12 text-center space-y-8">
        {/* Animated Terracotta SVG AZ Signature on Scroll */}
        <div className="flex justify-center">
          <div className="p-3 rounded-2xl bg-[#1F1E1D] border border-[#2E2C29] shadow-lg">
            <svg viewBox="0 0 160 80" className="w-28 sm:w-36 h-auto" aria-label="AZ monogram signature">
              <motion.path
                d="M 22 65 L 48 15 L 74 65 M 34 50 L 62 50 M 92 18 L 142 18 L 96 64 L 146 64"
                fill="none"
                stroke="#C85A32"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength }}
              />
            </svg>
          </div>
        </div>

        {/* Centered Uppercase Manifesto Highlighting Key Disciplines */}
        <h2 className="font-display font-black uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F0EB] leading-[1.12]">
          ENGINEERING RESILIENT FOUNDATIONS. WEAVING FAULT-TOLERANT{" "}
          <span className="text-[#C85A32]">BACKEND ARCHITECTURES</span>, HIGH-THROUGHPUT{" "}
          <span className="text-[#C85A32]">ACID DATABASES</span>, AND DETERMINISTIC{" "}
          <span className="text-[#C85A32]">LOW-LEVEL ALGORITHMS</span> INTO UNCOMPROMISING SOFTWARE SYSTEMS.
        </h2>

        {/* Sub-Tag Attribution */}
        <div className="pt-2 flex flex-col items-center gap-2">
          <div className="w-16 h-0.5 bg-[#C85A32]/60" />
          <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#A39E95]">
            MD. AHNAF ZAHIN ALIF — B.SC. IN ICT • BANGLADESH UNIVERSITY OF PROFESSIONALS
          </p>
        </div>
      </div>

      {/* Bottom Footer Telemetry */}
      <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-[#A39E95] border-t border-[#2E2C29] pt-4">
        <span>CONCURRENCY: ISOLATED REPEATABLE READ</span>
        <span>LATENCY TARGET: &lt; 50MS</span>
      </div>
    </section>
  );
}
