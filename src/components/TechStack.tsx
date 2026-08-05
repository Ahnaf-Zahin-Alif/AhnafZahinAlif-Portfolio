"use client";

import { Code, Terminal, Cpu, FileCode2 } from "lucide-react";

interface TechBadge {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderColor: string;
  bgLight: string;
  bgDark: string;
  description: string;
}

const languages: TechBadge[] = [
  {
    name: "C",
    category: "System Programming",
    icon: Cpu,
    color: "text-blue-500 dark:text-blue-400",
    borderColor: "border-blue-500/30 dark:border-blue-500/30",
    bgLight: "bg-blue-50 hover:bg-blue-100/80",
    bgDark: "dark:bg-blue-950/40 dark:hover:bg-blue-900/40",
    description: "Low-level Memory & OS Systems",
  },
  {
    name: "C++",
    category: "Competitive Programming",
    icon: Terminal,
    color: "text-cyan-500 dark:text-cyan-400",
    borderColor: "border-cyan-500/30 dark:border-cyan-500/30",
    bgLight: "bg-cyan-50 hover:bg-cyan-100/80",
    bgDark: "dark:bg-cyan-950/40 dark:hover:bg-cyan-900/40",
    description: "STL, Algorithms & Performance",
  },
  {
    name: "Java",
    category: "Object-Oriented Programming",
    icon: Code,
    color: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500/30 dark:border-amber-500/30",
    bgLight: "bg-amber-50 hover:bg-amber-100/80",
    bgDark: "dark:bg-amber-950/40 dark:hover:bg-amber-900/40",
    description: "Backend Architecture & JVM",
  },
  {
    name: "Python",
    category: "Scripting & Automation",
    icon: FileCode2,
    color: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/30 dark:border-emerald-500/30",
    bgLight: "bg-emerald-50 hover:bg-emerald-100/80",
    bgDark: "dark:bg-emerald-950/40 dark:hover:bg-emerald-900/40",
    description: "Data Structures & Rapid Prototyping",
  },
];

export function TechStack() {
  return (
    <section className="py-10 w-full max-w-4xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
            Core Languages & Specializations
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
          4 Core Languages
        </span>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {languages.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className={`p-4 rounded-xl border transition-all duration-300 ${tech.borderColor} ${tech.bgLight} ${tech.bgDark} group hover:-translate-y-0.5 shadow-sm`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 shadow-sm">
                  <Icon className={`w-5 h-5 ${tech.color}`} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Lang
                </span>
              </div>

              <div className="space-y-1">
                <h3 className={`text-lg font-bold font-mono ${tech.color}`}>
                  {tech.name}
                </h3>
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {tech.category}
                </p>
                <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {tech.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
