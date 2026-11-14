"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "backend" | "systems" | "frontend";
  role: string;
  tag: string;
}

const allSkills: SkillItem[] = [
  { name: "C", category: "systems", role: "Low-Level & Memory Architecture", tag: "SYSTEMS" },
  { name: "C++", category: "systems", role: "Competitive Programming & Graph Theory", tag: "ALGORITHMS" },
  { name: "Java", category: "systems", role: "Object-Oriented Architecture & Concurrency", tag: "ENTERPRISE" },
  { name: "Python", category: "backend", role: "Scripting, Automation & Backend APIs", tag: "BACKEND" },
  { name: "Django", category: "backend", role: "ACID Concurrency, ORM & REST Endpoints", tag: "FRAMEWORK" },
  { name: "FastAPI", category: "backend", role: "High-Throughput Asynchronous Microservices", tag: "API" },
  { name: "SQL", category: "backend", role: "Relational Modeling, Indexing & Query Tuning", tag: "DATABASE" },
  { name: "MariaDB", category: "backend", role: "ACID Transactional Isolation Storage", tag: "STORAGE" },
  { name: "PostgreSQL", category: "backend", role: "Complex Joins, Constraints & Schemas", tag: "DATABASE" },
  { name: "React", category: "frontend", role: "Component Lifecycle & Interactive UI", tag: "FRONTEND" },
  { name: "Next.js", category: "frontend", role: "App Router, SSR & Production Build Optimization", tag: "FULLSTACK" },
  { name: "TypeScript", category: "frontend", role: "Strict Type Safety & Contract Integrity", tag: "SYSTEMS" },
  { name: "Docker", category: "systems", role: "Containerized Microservice Environments", tag: "DEVOPS" },
  { name: "Linux / Bash", category: "systems", role: "Shell Tooling, Sockets & Process Control", tag: "OS" },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "backend", label: "Backend & Databases" },
  { id: "systems", label: "Systems & Algorithms" },
  { id: "frontend", label: "Frontend & Web" },
];

export function TechStackExplorer() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? allSkills : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="stack" className="w-full space-y-6 scroll-mt-24" aria-labelledby="stack-heading">
      <div>
        <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1 font-mono">
          02 // TECHNICAL STACK
        </span>
        <h2 id="stack-heading" className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
          Engineering Capabilities &amp; Stack
        </h2>
      </div>

      {/* Filter Tabs with Concentric Geometry */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#151311] border border-white/[0.08] w-max max-w-full">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <motion.button
              key={cat.id}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] ${
                isActive ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-stack-tab"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-[#f07b3f] -z-0"
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills Matrix with popLayout and 30ms row staggers */}
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
                  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
                }}
                className="p-3.5 rounded-2xl bg-[#151311] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-zinc-100 font-mono">{skill.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1d1916] border border-white/[0.06] text-zinc-400">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans">{skill.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
