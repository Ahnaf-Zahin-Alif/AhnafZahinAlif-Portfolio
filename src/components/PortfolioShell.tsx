"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { StudioIdentityRail } from "./StudioIdentityRail";
import { StudioWorkbench } from "./StudioWorkbench";
import { CommandPalette } from "./CommandPalette";
import { ProjectModal } from "./ProjectModal";
import { BackToTop } from "./BackToTop";
import { ProjectItem } from "@/types/projects";

export function PortfolioShell() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--surface-canvas)] text-[var(--text-primary)] flex flex-col lg:flex-row">
        {/* Sticky Left Rail (~38-40% desktop) */}
        <div className="w-full lg:w-[38%] xl:w-[35%] shrink-0 border-b lg:border-b-0 lg:border-r border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
          <StudioIdentityRail onOpenCommandPalette={() => setPaletteOpen(true)} />
        </div>

        {/* Scrollable Right Canvas (~60-62% desktop) */}
        <main className="w-full lg:w-[62%] xl:w-[65%] min-h-screen">
          <StudioWorkbench onSelectProject={(p) => setSelectedProject(p)} />
        </main>
      </div>

      {/* Shared-Element Morphing Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Cmd+K Quick Command Palette */}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />

      {/* Spring-Animated Back To Top */}
      <BackToTop />
    </MotionConfig>
  );
}
