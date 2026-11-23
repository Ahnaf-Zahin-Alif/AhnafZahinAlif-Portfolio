"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProofDeckCard } from "./ProofDeckCard";
import { deckItems } from "@/data/proofDeckData";
import { LINKS } from "@/lib/links";

export function FanOutProofDeck() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rotations = prefersReducedMotion ? [-4, -2, 0, 2, 4] : [-12, -6, 0, 6, 12];
    const yOffsets = prefersReducedMotion ? [6, 2, 0, 2, 6] : [18, 6, 0, 6, 18];

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;
    const spread = isMobile ? 65 : isTablet ? 110 : 160;
    const xOffsets = [-2 * spread, -1 * spread, 0, 1 * spread, 2 * spread];

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { rotation: 0, x: 0, y: 0, scale: 0.96 },
          {
            rotation: rotations[idx],
            x: xOffsets[idx],
            y: yOffsets[idx],
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proof"
      ref={containerRef}
      className="relative w-full bg-[#F4F0EB] text-[#1B1B1C] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#DFD5C6] overflow-hidden"
      aria-label="Peer Reviews and Algorithmic Proof Deck"
    >
      <div className="max-w-7xl mx-auto space-y-16 text-center">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5A6E58] font-bold block">
            03 // REPUTATION &amp; PEER PROOF
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1B1B1C]">
            FAN-OUT PROOF DECK
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5C5852] leading-relaxed">
            Direct signals from collaborators and competitive programming platforms validating engineering rigor, schema integrity, and algorithmic problem solving.
          </p>
        </div>

        {/* 5-Card Curved Fan-Out Container */}
        <div className="relative min-h-[460px] sm:min-h-[480px] flex items-center justify-center pt-8 pb-12 overflow-x-clip">
          <div className="relative w-full max-w-5xl h-[390px] flex items-center justify-center">
            {deckItems.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{ zIndex: idx === 2 ? 10 : 5 - Math.abs(idx - 2) }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-bottom transition-all duration-300 hover:!z-50 hover:!scale-105 hover:!-translate-y-6 hover:shadow-2xl hover:shadow-[#C85A32]/20"
              >
                <ProofDeckCard item={item} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Uppercase Links (GITHUB • CODEFORCES • LINKEDIN) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-widest text-[#5C5852] border-t border-[#DFD5C6] max-w-lg mx-auto">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C85A32] transition-colors"
          >
            GITHUB ↗
          </a>
          <span>•</span>
          <a
            href={LINKS.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C85A32] transition-colors"
          >
            CODEFORCES ↗
          </a>
          <span>•</span>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C85A32] transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>
    </section>
  );
}
