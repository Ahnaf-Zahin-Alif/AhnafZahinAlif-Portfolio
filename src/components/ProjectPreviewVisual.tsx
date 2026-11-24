import { Activity, Radio, GraduationCap, CheckCircle2, Terminal } from "lucide-react";
import { ProjectItem } from "@/types/projects";

export function ProjectPreviewVisual({ type }: { type: ProjectItem["type"] }) {
  return (
    <div className="h-40 w-full bg-[#161617] p-4 flex flex-col justify-center border-b border-[#2E2C29] relative">
      {type === "hospital" && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#7D9B7A]">
              <Activity className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
              <span>MEDICARE ADMISSION PIPELINE</span>
            </div>
            <span className="text-[#A39E95] tabular-nums">JAVA OOP</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2 rounded-lg bg-[#1F1E1D] border border-[#2E2C29]">
              <span className="text-[#A39E95] block text-[10px]">INPATIENTS</span>
              <span className="text-[#F4F0EB] tabular-nums font-semibold">142 Admitted</span>
            </div>
            <div className="p-2 rounded-lg bg-[#1F1E1D] border border-[#2E2C29]">
              <span className="text-[#A39E95] block text-[10px]">WARD CAPACITY</span>
              <span className="text-[#7D9B7A] tabular-nums font-semibold">94.2% Occupancy</span>
            </div>
          </div>
        </div>
      )}

      {type === "uav" && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#7D9B7A]">
              <Radio className="w-3.5 h-3.5 animate-pulse" strokeWidth={1.5} />
              <span>SWARM TELEMETRY MESH</span>
            </div>
            <span className="text-[#7D9B7A] tabular-nums">98.4% LINK</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div className="p-2 rounded-lg bg-[#1F1E1D] border border-[#2E2C29]">
              <span className="text-[#A39E95] block text-[10px]">NODE ALPHA</span>
              <span className="text-[#F4F0EB] tabular-nums">ALT: 120m • 12ms</span>
            </div>
            <div className="p-2 rounded-lg bg-[#1F1E1D] border border-[#2E2C29]">
              <span className="text-[#A39E95] block text-[10px]">COORDINATES</span>
              <span className="text-[#7D9B7A] tabular-nums truncate">23.8103°N, 90.4125°E</span>
            </div>
          </div>
        </div>
      )}

      {type === "academic" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#C85A32]">
              <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>BUP ICT SEMESTER AUDIT</span>
            </div>
            <span className="text-[var(--accent-sage)] font-bold tabular-nums">3.92 CGPA</span>
          </div>
          <div className="space-y-1 pt-1">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#C85A32] rounded-full w-[94%]" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
              <span>Completed: 68 Credits</span>
              <span>Target: 148 Credits</span>
            </div>
          </div>
        </div>
      )}

      {type === "tracker" && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[#C85A32]">
              <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>SPRINT VELOCITY &amp; TASKS</span>
            </div>
            <span className="text-[var(--accent-sage)] font-bold tabular-nums">92% DONE</span>
          </div>
          <div className="space-y-1 pt-1">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#C85A32] rounded-full w-[92%]" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-0.5">
              <span>Sprint 04: 24 / 26 Done</span>
              <span>Lead: 1.8 Days</span>
            </div>
          </div>
        </div>
      )}

      {type === "python" && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5 text-[var(--accent-sage)]">
              <Terminal className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>AUTOMATION &amp; ALGORITHMS</span>
            </div>
            <span className="text-[var(--accent-sage)] font-bold tabular-nums">30 / 30 PASSED</span>
          </div>
          <div className="p-2 rounded-lg bg-[#1F1E1D] border border-[#2E2C29] font-mono text-[11px] text-[#F4F0EB] space-y-0.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-zinc-500">$ pytest tests/</span>
              <span className="text-[var(--accent-sage)] font-bold">100% OK</span>
            </div>
            <p className="text-[10px] text-zinc-500 truncate">30 Days of Algorithmic Modules</p>
          </div>
        </div>
      )}
    </div>
  );
}
