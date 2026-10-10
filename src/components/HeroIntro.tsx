import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroIntro() {
  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="space-y-4">
        {/* Subtitle / Role Tag */}
        <span className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-[#f07b3f] uppercase block">
          FULLSTACK SWE
        </span>

        {/* Display Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.05]">
          Md. Ahnaf<br />Zahin Alif
        </h1>

        {/* NOW Status Block */}
        <div className="border-l-2 border-[#f07b3f] pl-4 py-1 space-y-2 my-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block">
            NOW
          </span>
          <div className="space-y-1 text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200">
            <p>ICT student at BUP</p>
            <p>Specializing in low-level programming and algorithms</p>
            <p>Building full-stack projects</p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f07b3f] hover:bg-[#e06c30] text-zinc-950 font-bold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
          aria-label="See projects"
        >
          <span>See projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="#cv"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#fce19b] hover:bg-[#f6d787] text-zinc-900 font-bold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fce19b]/50"
          aria-label="Download CV"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

