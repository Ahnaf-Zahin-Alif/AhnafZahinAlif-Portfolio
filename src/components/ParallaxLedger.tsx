"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Award } from "lucide-react";
import { ParallaxLedgerCard } from "./ParallaxLedgerCard";
import { leftLedgerItems, rightLedgerItems } from "@/data/ledgerData";

export function ParallaxLedger() {
  const containerRef = useRef<HTMLElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(colLeftRef.current, {
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.0,
        },
      });

      gsap.to(colRightRef.current, {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ledger"
      ref={containerRef}
      className="relative w-full bg-[#161617] text-[#F4F0EB] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#2E2C29] overflow-hidden"
      aria-label="Academic & Systems Ledger"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7D9B7A]">
            <Award className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>02 // ACADEMIC &amp; SYSTEMS LEDGER</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F0EB]">
            ENGINEERING TIMELINE &amp; PROOF
          </h2>
        </div>

        <a
          href="mailto:ahnafzahinalif@gmail.com?subject=Request%20CV%20-%20Md.%20Ahnaf%20Zahin%20Alif"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F1E1D] hover:bg-[#C85A32] hover:text-white border border-[#2E2C29] text-xs font-mono font-semibold transition-all shadow-sm active:scale-95"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Request Full CV</span>
        </a>
      </div>

      {/* Asymmetric Parallax 2-Column Masonry */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column (Scrub Speed 1.0) */}
        <div ref={colLeftRef} className="space-y-8">
          {leftLedgerItems.map((item) => (
            <ParallaxLedgerCard key={item.id} item={item} />
          ))}
        </div>

        {/* Right Column (Scrub Speed 1.6 - Offset) */}
        <div ref={colRightRef} className="space-y-8 md:pt-12">
          {rightLedgerItems.map((item) => (
            <ParallaxLedgerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
