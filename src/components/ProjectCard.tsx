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
    <article className="flex flex-col justify-between rounded-3xl bg-[#161311] border border-zinc-800 overflow-hidden transition-colors hover:border-zinc-700">
      {/* Top Image & Header Section */}
      <div>
        <div className="p-4 sm:p-5 flex items-center justify-between">
          <span className="font-mono text-xs sm:text-sm font-bold tabular-nums text-[#f07b3f]">
            {project.index}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold px-3 py-1 rounded-full bg-[#fce19b] text-zinc-950 uppercase tracking-wider">
            {project.badge}
          </span>
        </div>

        {/* Placeholder Project Image Area */}
        <div className="h-44 sm:h-48 w-full bg-[#1c1815] flex items-center justify-center p-4">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase font-semibold">
            [PROJECT IMAGE]
          </span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight text-balance">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed text-pretty">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2" aria-label={`Technologies used in ${project.title}`}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
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
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#f07b3f] hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]"
            aria-label={`View project details for ${project.title}`}
          >
            <span>View project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </article>
  );
}
