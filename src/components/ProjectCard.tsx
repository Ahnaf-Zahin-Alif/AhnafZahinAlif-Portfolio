import { ArrowUpRight, Radio, GraduationCap, Flame } from "lucide-react";

export interface SecondaryProjectData {
  index: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  type: "uav" | "academic" | "habit";
  link: string;
}

export function ProjectCard({ project }: { project: SecondaryProjectData }) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-[#151311] border border-white/[0.08] overflow-hidden transition-colors hover:border-white/[0.16] shadow-lg group">
      <div>
        {/* Header Bar */}
        <div className="p-5 flex items-center justify-between border-b border-white/[0.06]">
          <span className="font-mono text-xs font-bold tabular-nums text-[#f07b3f]">
            {project.index}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#fce19b] text-zinc-950 uppercase tracking-wider font-mono">
            {project.badge}
          </span>
        </div>

        {/* Real Dynamic Visual Area */}
        <div className="h-44 w-full bg-[#0c0a09] p-4 flex flex-col justify-center border-b border-white/[0.06] relative overflow-hidden">
          {project.type === "uav" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#38bdf8]">
                  <Radio className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
                  <span>SWARM TELEMETRY: ACTIVE</span>
                </div>
                <span className="text-zinc-500 tabular-nums">98.4% LINK</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-[#151311] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px]">NODE ALPHA</span>
                  <span className="text-zinc-200 tabular-nums">ALT: 120m • LATENCY: 12ms</span>
                </div>
                <div className="p-2 rounded-lg bg-[#151311] border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[10px]">COORDINATES</span>
                  <span className="text-emerald-400 tabular-nums">23.8103° N, 90.4125° E</span>
                </div>
              </div>
            </div>
          )}

          {project.type === "academic" && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#f07b3f]">
                  <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>BUP ICT SEMESTER AUDIT</span>
                </div>
                <span className="text-emerald-400 font-bold tabular-nums">3.92 CGPA</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Data Structures & Alg</span>
                  <span className="text-zinc-200 font-bold">A+ (4.00)</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#f07b3f] rounded-full w-[96%]" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
                  <span>Completed: 68 Credits</span>
                  <span>Target: 148 Credits</span>
                </div>
              </div>
            </div>
          )}

          {project.type === "habit" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Flame className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>STREAK VELOCITY</span>
                </div>
                <span className="text-amber-400 font-bold tabular-nums">18 DAYS</span>
              </div>
              <div className="flex justify-between gap-1 py-1">
                {[4, 6, 8, 5, 9, 7, 8].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-sm bg-[#f07b3f]"
                      style={{ height: `${val * 3}px`, opacity: 0.3 + val * 0.08 }}
                    />
                    <span className="text-[9px] font-mono text-zinc-500">
                      {["M", "T", "W", "T", "F", "S", "S"][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-5">
        <div className="space-y-2.5">
          <h4 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight text-balance group-hover:text-[#f07b3f] transition-colors">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2" aria-label={`Tech stack for ${project.title}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1d1916] border border-white/[0.08] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#f07b3f] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] rounded"
            aria-label={`View code for ${project.title}`}
          >
            <span>View Architecture</span>
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
