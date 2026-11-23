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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const rotations = [-18, -9, 0, 9, 18];
    const xOffsets = [-120, -60, 0, 60, 120];
    const yOffsets = [16, 4, 0, 4, 16];

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { rotation: 0, x: 0, y: 0 },
          {
            rotation: rotations[idx],
            x: xOffsets[idx],
            y: yOffsets[idx],
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 85%",
              scrub: 1.2,
            },
          }
        );
      });
    }, containerRef);

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
        <div className="relative min-h-[440px] flex items-center justify-center pt-8 pb-12 overflow-x-auto lg:overflow-visible">
          <div className="flex items-center justify-center -space-x-16 sm:-space-x-12 lg:space-x-0">
            {deckItems.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="transition-transform duration-300 hover:!scale-105 hover:!z-30 cursor-pointer origin-bottom"
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
