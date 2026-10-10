import { ProjectCard, ProjectData } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const projects: ProjectData[] = [
  {
    index: "01",
    badge: "FULL-STACK",
    title: "Toy Shop",
    description:
      "Full-stack e-commerce site for a Facebook/WhatsApp-based toy business, with an admin dashboard, online payments and courier integration.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "SSLCommerz",
      "Steadfast API",
    ],
    link: "#",
  },
  {
    index: "02",
    badge: "IN PROGRESS",
    title: "Cinefilm",
    description: "A cinema ticketing website, currently in development.",
    tags: ["Movie ticketing"],
    link: "#",
  },
  {
    index: "03",
    badge: "LAB PROJECT",
    title: "Gaming Center Network",
    description:
      "Network design and implementation for a gaming center in Cisco Packet Tracer, covering router and switch configuration, routing, DHCP, NAT, ACLs and testing.",
    tags: ["Cisco Packet Tracer", "Routing", "DHCP", "NAT", "ACLs"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold tracking-widest text-[#f07b3f] uppercase block">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Selected work
          </h2>
        </div>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-[#1e1b18] text-xs sm:text-sm font-medium text-zinc-200 hover:border-zinc-500 transition-colors w-max shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
          aria-label="View all projects"
        >
          <span>All projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* 3-Column Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
