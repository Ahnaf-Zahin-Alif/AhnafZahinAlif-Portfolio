"use client";

import React from "react";
import { Marquee } from "./motion/Marquee";

const domainList = [
  "Backend Engineering",
  "System Design",
  "Competitive Programming",
  "Distributed Systems",
  "Relational Databases",
];

export function DomainMarquee() {
  const items = domainList.map((domain, idx) => (
    <div key={idx} className="flex items-center gap-6">
      <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 uppercase">
        {domain}
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#C85A32] shadow-[0_0_8px_rgba(200,90,50,0.6)]"
        aria-hidden="true"
      />
    </div>
  ));

  return (
    <section
      aria-label="Core Engineering Domains"
      className="w-full py-4 my-8 border-y border-white/[0.08] bg-[#0f121a]/60 backdrop-blur-sm"
    >
      <Marquee items={items} speedSeconds={28} />
    </section>
  );
}
