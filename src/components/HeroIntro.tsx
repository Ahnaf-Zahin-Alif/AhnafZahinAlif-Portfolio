"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function HeroIntro() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-between h-full space-y-6"
    >
      <div className="space-y-4">
        {/* Name and Mobile-Only Compact Photo Row */}
        <div className="flex items-start justify-between gap-3">
          <motion.div variants={item} className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#f07b3f] uppercase block font-mono">
              FULLSTACK SWE
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.08] text-balance">
              Md. Ahnaf<br />Zahin Alif
            </h1>
          </motion.div>

          {/* Mobile-Only Compact Profile Photo */}
          <motion.div variants={item} className="md:hidden shrink-0 pt-1 pl-1">
            <div className="relative">
              <div
                className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#fce19b] pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl bg-[#151311] border border-white/[0.08] shadow-md overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Md. Ahnaf Zahin Alif, Fullstack Software Engineer"
                  fill
                  priority
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-[center_35%]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* NOW Status Block with Cyan Live Pulse */}
        <motion.div variants={item} className="border-l-2 border-[#f07b3f] pl-4 py-1 space-y-2 my-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-widest text-[#38bdf8] uppercase font-mono">
              ACTIVE STATUS
            </span>
          </div>
          <div className="space-y-1 text-sm sm:text-base font-medium text-zinc-200 text-pretty">
            <p>ICT student at BUP</p>
            <p>Specializing in low-level programming &amp; algorithms</p>
            <p>Architecting full-stack &amp; backend systems</p>
          </div>
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f07b3f] hover:bg-[#e06c30] text-zinc-950 font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
          aria-label="See projects"
        >
          <span>See projects</span>
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        </Link>
        <a
          href="#cv"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#fce19b] hover:bg-[#f6d787] text-zinc-950 font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fce19b]"
          aria-label="View Curriculum Vitae"
        >
          Curriculum Vitae
        </a>
      </motion.div>
    </motion.div>
  );
}
