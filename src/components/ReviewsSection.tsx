"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Endorsement {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const endorsements: Endorsement[] = [
  {
    quote:
      "Ahnaf's depth in algorithms and low-level C/C++ architecture is exceptional. Whether tackling complex graph traversals or designing distributed network schemas, his solutions are always optimized, robust, and clean.",
    author: "BUP ICT Project Colleague",
    role: "Algorithms & Systems Lab Partner",
    initials: "AP",
  },
  {
    quote:
      "On CineFilm, Ahnaf architected the Django backend and MariaDB schema with strict ACID transaction safety. His ability to bridge backend mechanics with responsive interfaces made the architecture seamless.",
    author: "Software Engineering Collaborator",
    role: "Full-Stack Project Partner",
    initials: "SC",
  },
  {
    quote:
      "Ahnaf approaches problem solving with remarkable analytical rigor. His understanding of time-space complexity and data structures stands out in every contest and coding session we've collaborated on.",
    author: "Competitive Programming Peer",
    role: "Codeforces & CodeChef Colleague",
    initials: "CP",
  },
];

export function ReviewsSection() {
  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-14 border-t border-white/[0.08] scroll-mt-24"
      aria-labelledby="reviews-heading"
    >
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1 font-mono">
          PEER REVIEWS &amp; ENDORSEMENTS
        </span>
        <h2
          id="reviews-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight text-balance"
        >
          Collaborator Perspectives
        </h2>
      </div>

      {/* 3-Column Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {endorsements.map((item, idx) => (
          <article
            key={idx}
            className="rounded-3xl bg-[#151311] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors hover:border-white/[0.18] shadow-lg"
          >
            <div className="space-y-4">
              <Quote className="w-6 h-6 text-[#f07b3f]/70" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-pretty italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-full bg-[#1d1916] border border-white/[0.08] text-[#f07b3f] font-mono font-bold text-xs flex items-center justify-center">
                {item.initials}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-100">
                  {item.author}
                </p>
                <p className="text-[11px] font-mono text-zinc-400">
                  {item.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
