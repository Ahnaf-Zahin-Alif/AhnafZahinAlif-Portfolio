import { Download, GraduationCap, Code2, Calendar } from "lucide-react";

export function CvSection() {
  return (
    <section
      id="cv"
      className="w-full py-14 border-t border-white/[0.08] scroll-mt-24"
      aria-labelledby="cv-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1">
            EXPERIENCE & EDUCATION
          </span>
          <h2
            id="cv-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight text-balance"
          >
            Academic & Systems Journey
          </h2>
        </div>

        <a
          href="mailto:ahnafzahinalif@gmail.com?subject=Request%20CV%20-%20Md.%20Ahnaf%20Zahin%20Alif"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#fce19b] hover:bg-[#f6d787] text-zinc-950 font-semibold text-xs sm:text-sm transition-colors w-max shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fce19b]"
          aria-label="Request CV via email"
        >
          <Download className="w-4 h-4 text-zinc-950" strokeWidth={1.5} aria-hidden="true" />
          <span>Request Full CV</span>
        </a>
      </div>

      {/* 2-Column Structured Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Degree Card */}
        <div className="rounded-3xl bg-[#151311] border border-white/[0.08] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1d1916] border border-white/[0.08] flex items-center justify-center text-[#f07b3f]">
              <GraduationCap className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block uppercase">DEGREE PROGRAM</span>
              <h3 className="text-lg font-bold text-zinc-100">B.Sc. in ICT</h3>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-200">
              Bangladesh University of Professionals (BUP)
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
              <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
              <span className="tabular-nums">2023 — Present • Dhaka, Bangladesh</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
            Comprehensive foundation in Computer Science and Engineering principles. Rigorous focus
            on low-level programming, data structures, relational database management, and distributed systems.
          </p>

          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {["Algorithms", "OS Concepts", "Computer Networks", "Database Systems", "OOP (Java/C++)"].map((course) => (
              <span
                key={course}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1d1916] border border-white/[0.06] text-zinc-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Problem Solving & Milestones */}
        <div className="rounded-3xl bg-[#151311] border border-white/[0.08] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1d1916] border border-white/[0.08] flex items-center justify-center text-[#38bdf8]">
              <Code2 className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block uppercase">ENGINEERING FOCUS</span>
              <h3 className="text-lg font-bold text-zinc-100">Algorithms & Architecture</h3>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-200">
              Competitive Programming & Systems
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#f07b3f]">
              <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
              <span className="tabular-nums">Codeforces & CodeChef Active Contestant</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
            Continuous algorithmic practice solving complex graph theory, dynamic programming, and combinatorics
            challenges with C++ under strict time and memory constraints.
          </p>

          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
            {["Time Complexity Optimization", "Graph Traversal", "Dynamic Programming", "ACID Compliance"].map((focus) => (
              <span
                key={focus}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1d1916] border border-white/[0.06] text-zinc-300"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
