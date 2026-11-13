"use client";

import { motion } from "framer-motion";

interface StackGroup {
  category: string;
  skills: { name: string; detail: string }[];
}

const stackGroups: StackGroup[] = [
  {
    category: "SYSTEMS & LANGUAGES",
    skills: [
      { name: "C", detail: "Low-Level & System Architecture" },
      { name: "C++", detail: "Algorithms & Competitive Programming" },
      { name: "Java", detail: "Object-Oriented Programming" },
      { name: "Python", detail: "Automation & Scripting" },
      { name: "SQL", detail: "Relational Schemas & Queries" },
    ],
  },
  {
    category: "BACKEND & FULL-STACK",
    skills: [
      { name: "Django", detail: "REST APIs & ORM" },
      { name: "React", detail: "Component Architecture" },
      { name: "Next.js", detail: "App Router & SSR" },
      { name: "TypeScript", detail: "Type-Safe Systems" },
      { name: "Node.js", detail: "Server Environments" },
    ],
  },
  {
    category: "DATABASES & ENGINEERING TOOLS",
    skills: [
      { name: "PostgreSQL", detail: "Relational Database" },
      { name: "MariaDB", detail: "Transactional Storage" },
      { name: "Docker", detail: "Containerization" },
      { name: "Git & GitHub", detail: "Version Control & CI" },
      { name: "Linux / Bash", detail: "System Environment" },
      { name: "Packet Tracer", detail: "Network Routing & ACLs" },
    ],
  },
];

export function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-12 border-t border-white/[0.08]"
      aria-labelledby="stack-heading"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2
            id="stack-heading"
            className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1 font-mono"
          >
            TECHNICAL CAPABILITIES
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight text-balance">
            Core Languages, Systems &amp; Engineering Stack
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.08] divide-y divide-white/[0.06]">
        {stackGroups.map((group) => (
          <div
            key={group.category}
            className="py-5 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start"
          >
            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase pt-1.5 font-mono">
                {group.category}
              </h3>
            </div>
            <div className="lg:col-span-9 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151311] border border-white/[0.08] text-xs sm:text-sm text-zinc-200 shadow-sm transition-colors hover:border-white/[0.22]"
                >
                  <span className="font-bold text-zinc-100 font-mono text-xs">
                    {skill.name}
                  </span>
                  <span className="text-zinc-600 text-xs" aria-hidden="true">•</span>
                  <span className="text-zinc-400 text-[11px] sm:text-xs">
                    {skill.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
