"use client";

import { motion } from "framer-motion";

const domains = [
  "Backend Engineering",
  "System Design",
  "Competitive Programming",
  "Full-Stack Web",
  "Distributed Systems",
  "Relational Databases & SQL",
  "Low-Level C/C++ Architecture",
  "Algorithmic Optimization",
];

export function DomainMarquee() {
  const marqueeItems = [...domains, ...domains];

  return (
    <section
      aria-label="Core Engineering Domains"
      className="w-full py-4 my-8 border-y border-white/[0.08] bg-[#0f121a]/60 backdrop-blur-sm overflow-hidden group select-none"
    >
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 22,
          }}
        >
          {marqueeItems.map((domain, idx) => (
            <div key={idx} className="flex items-center gap-6 shrink-0">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 uppercase">
                {domain}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f6bff] shadow-[0_0_8px_rgba(47,107,255,0.7)]" aria-hidden="true" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
