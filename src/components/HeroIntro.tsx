import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroIntro() {
  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      <div className="space-y-4">
        {/* Name and Mobile-Only Compact Photo Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-3">
            {/* Subtitle / Role Tag */}
            <span className="text-xs sm:text-[13px] font-mono font-bold tracking-wider text-[#f07b3f] uppercase block">
              FULLSTACK SWE
            </span>

            {/* Display Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.08]">
              Md. Ahnaf<br />Zahin Alif
            </h1>
          </div>

          {/* Mobile-Only Compact Profile Photo in Free Space */}
          <div className="md:hidden shrink-0 pt-1 pl-1">
            <div className="relative">
              {/* Offset Yellow/Cream Accent Layer */}
              <div
                className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-[#fce19b] pointer-events-none"
                aria-hidden="true"
              />
              {/* Image Frame */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl bg-[#1a1715] border border-zinc-700/80 shadow-md overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Md. Ahnaf Zahin Alif"
                  fill
                  priority
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-cover object-[center_35%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* NOW Status Block */}
        <div className="border-l-2 border-[#f07b3f] pl-4 py-1 space-y-2 my-6">
          <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
            NOW
          </span>
          <div className="space-y-1 text-sm sm:text-base font-semibold text-zinc-200">
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
