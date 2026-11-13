import { FlagshipProjectCard } from "./FlagshipProjectCard";
import { ProjectCard, SecondaryProjectData } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const secondaryProjects: SecondaryProjectData[] = [
  {
    index: "02",
    badge: "UAV & SYSTEMS",
    title: "Orion Sentinel — Swarm SOS Interface",
    description:
      "Decentralized UAV swarm communication mesh for emergency coordinate broadcasting and low-bandwidth telemetry synchronization.",
    tags: ["C++", "Python", "Mesh Network", "Telemetry", "Socket.IO"],
    type: "uav",
    link: "https://github.com/Ahnaf-Zahin-Alif",
  },
  {
    index: "03",
    badge: "ACADEMIC PORTAL",
    title: "BICE '25 Portal & CGPA Calculator",
    description:
      "Academic resource management system for BUP ICT students featuring real-time credit auditing and grade point forecasting.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    type: "academic",
    link: "https://github.com/Ahnaf-Zahin-Alif",
  },
  {
    index: "04",
    badge: "PRODUCTIVITY",
    title: "Focus & Habit Tracker",
    description:
      "Algorithmic habit consistency platform with streak velocity analytics, spaced interval reminders, and offline-first persistence.",
    tags: ["React", "TypeScript", "Local-First", "Tailwind CSS"],
    type: "habit",
    link: "https://github.com/Ahnaf-Zahin-Alif",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Selected Systems & Projects
          </h2>
        </div>

        <a
          href="https://github.com/Ahnaf-Zahin-Alif"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] bg-[#151311] hover:bg-[#1d1916] text-xs sm:text-sm font-semibold text-zinc-200 transition-colors w-max shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
          aria-label="View all repositories on GitHub"
        >
          <span>All GitHub Repos</span>
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>

      {/* Flagship Dominant Feature Showcase */}
      <div className="mb-8">
        <FlagshipProjectCard />
      </div>

      {/* 3-Column Secondary Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
