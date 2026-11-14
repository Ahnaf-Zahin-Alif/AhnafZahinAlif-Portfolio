"use client";

import { Quote, Trophy, Code2, ArrowUpRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  badge: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Ahnaf's depth in algorithms and low-level C/C++ architecture is exceptional. Whether tackling complex graph traversals or designing distributed network schemas, his solutions are always optimized, robust, and clean.",
    author: "BUP ICT Project Partner",
    role: "Algorithms & Systems Lab",
    badge: "SYSTEMS PEER",
  },
  {
    quote:
      "On CineFilm, Ahnaf architected the backend and MariaDB schema with strict ACID transaction safety. His ability to connect backend systems with responsive interfaces made development seamless.",
    author: "Software Engineering Collaborator",
    role: "Full-Stack Project Partner",
    badge: "FULL-STACK COLLAB",
  },
  {
    quote:
      "Ahnaf approaches problem solving with remarkable analytical rigor. His understanding of time-space complexity and data structures stands out in every contest and hackathon we've collaborated on.",
    author: "Competitive Programming Colleague",
    role: "Codeforces & CodeChef Peer",
    badge: "ALGORITHMIC PEER",
  },
];

export function SystemsProof() {
  return (
    <section id="proof" className="w-full space-y-6 scroll-mt-24" aria-labelledby="proof-heading">
      <div>
        <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1 font-mono">
          04 // SYSTEMS PROOF &amp; REVIEWS
        </span>
        <h2 id="proof-heading" className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
          Peer Perspectives &amp; Problem Solving
        </h2>
      </div>

      {/* Competitive Programming Proof Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://codeforces.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#151311] border border-white/[0.08] hover:border-[#f07b3f]/40 transition-colors flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1d1916] border border-white/[0.08] flex items-center justify-center text-[#f07b3f]">
              <Trophy className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">CODEFORCES</span>
              <span className="text-sm font-bold text-zinc-200 font-mono">AhnafZahin</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#f07b3f] transition-colors" />
        </a>

        <a
          href="https://codechef.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#151311] border border-white/[0.08] hover:border-[#38bdf8]/40 transition-colors flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1d1916] border border-white/[0.08] flex items-center justify-center text-[#38bdf8]">
              <Code2 className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">CODECHEF</span>
              <span className="text-sm font-bold text-zinc-200 font-mono">AhnafZahin</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#38bdf8] transition-colors" />
        </a>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="p-5 rounded-2xl bg-[#151311] border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-white/[0.18] transition-colors"
          >
            <div className="space-y-3">
              <Quote className="w-5 h-5 text-[#f07b3f]/70" strokeWidth={1.5} />
              <p className="text-xs text-zinc-300 leading-relaxed text-pretty italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="pt-3 border-t border-white/[0.06] space-y-0.5">
              <span className="text-[10px] font-mono text-[#fce19b] uppercase block font-semibold">{t.badge}</span>
              <p className="text-xs font-bold text-zinc-200">{t.author}</p>
              <p className="text-[11px] font-mono text-zinc-500">{t.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
