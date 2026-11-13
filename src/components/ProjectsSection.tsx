"use client";

import { FlagshipProjectCard } from "./FlagshipProjectCard";
import { ProjectCard, SecondaryProjectData } from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const secondaryProjects: SecondaryProjectData[] = [
  {
    index: "02",
    badge: "JAVA OOP & HEALTHCARE",
    title: "MediCare — Hospital Management System",
    description:
      "Full-featured Java OOP hospital administration suite for patient admissions, ward occupancy management, doctor duty schedules, and medical billing.",
    tags: ["Java", "OOP", "Swing / AWT", "Relational DB", "Healthcare"],
    type: "hospital",
    link: "https://github.com/Ahnaf-Zahin-Alif/Hospital-Management-System",
  },
  {
    index: "03",
    badge: "PRODUCTIVITY & WEB",
    title: "ProjectTracker — Milestone Velocity Engine",
    description:
      "Task tracking and sprint milestone engine with progress analytics, lead time metrics, and priority scheduling for engineering projects.",
    tags: ["JavaScript", "Full-Stack", "Task Flow", "Analytics"],
    type: "tracker",
    link: "https://github.com/Ahnaf-Zahin-Alif/ProjectTracker",
  },
  {
    index: "04",
    badge: "ALGORITHMS & AUTOMATION",
    title: "30DaysOfPython — Algorithmic Suite",
    description:
      "Comprehensive Python codebase demonstrating functional programming, data structures, automated unit testing, and algorithmic problem solutions.",
    tags: ["Python", "Algorithms", "Automation", "Unit Testing"],
    type: "python",
    link: "https://github.com/Ahnaf-Zahin-Alif/30DaysOfPython",
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-14 border-t border-white/[0.08] scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#f07b3f] uppercase block pb-1">
            FEATURED ENGINEERING
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight text-balance"
          >
            Selected Systems &amp; Projects
          </h2>
        </div>

        <a
          href="https://github.com/Ahnaf-Zahin-Alif"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] bg-[#151311] hover:bg-[#1d1916] text-xs sm:text-sm font-semibold text-zinc-200 transition-colors w-max shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
          aria-label="View all repositories on GitHub"
        >
          <span>All GitHub Repositories</span>
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>

      {/* Flagship Dominant Feature Showcase (CineFilm) */}
      <div className="mb-8">
        <FlagshipProjectCard />
      </div>

      {/* 3-Column Secondary Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
