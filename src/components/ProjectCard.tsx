import { ArrowUpRight } from "lucide-react";

export interface ProjectData {
  index: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-3xl bg-[#171412] dark:bg-[#171412] bg-zinc-900 border border-zinc-700/80 overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
      {/* Top Image & Header Section */}
      <div>
        <div className="p-4 sm:p-5 flex items-center justify-between">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#f07b3f]">
            {project.index}
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#fce19b] text-zinc-950 uppercase tracking-wider">
            {project.badge}
          </span>
        </div>

        {/* Placeholder Project Image Area */}
        <div className="h-44 sm:h-48 w-full bg-[#1e1b18] dark:bg-[#1e1b18] border-y border-zinc-700/80 flex items-center justify-center p-4">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
            [PROJECT IMAGE]
          </span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/70 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Link */}
        <div className="pt-2">
          <a
            href={project.link || "#"}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-[#f07b3f] hover:underline focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50 rounded"
            aria-label={`View project details for ${project.title}`}
          >
            <span>View project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

