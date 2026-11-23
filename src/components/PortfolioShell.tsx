"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { TasteNav } from "./TasteNav";
import { TasteHero } from "./TasteHero";
import { DomainMarquee } from "./DomainMarquee";
import { TasteFlagshipCinefilm } from "./TasteFlagshipCinefilm";
import { TasteScreenSystems } from "./TasteScreenSystems";
import { TasteScreenMatrix } from "./TasteScreenMatrix";
import { TasteClosingStation } from "./TasteClosingStation";
import { CommandPalette } from "./CommandPalette";
import { ProjectModal } from "./ProjectModal";
import { BackToTop } from "./BackToTop";
import { ProjectItem } from "@/types/projects";

export function PortfolioShell() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[var(--surface-canvas)] text-[var(--text-primary)]">
        {/* Fixed Top Studio Nav */}
        <TasteNav onOpenCommandPalette={() => setPaletteOpen(true)} />

        {/* 5-Screen Full-Viewport Architecture (Tasteskill Rule 3) */}
        <main className="w-full">
          <TasteHero />
          <DomainMarquee />
          <TasteFlagshipCinefilm onSelectProject={(p) => setSelectedProject(p)} />
          <TasteScreenSystems onSelectProject={(p) => setSelectedProject(p)} />
          <TasteScreenMatrix />
          <TasteClosingStation />
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
