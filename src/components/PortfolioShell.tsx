"use client";

import { useState } from "react";
import { EditorialHeader } from "./EditorialHeader";
import { InteractiveHero } from "./InteractiveHero";
import { MarqueeManifesto } from "./MarqueeManifesto";
import { ParallaxLedger } from "./ParallaxLedger";
import { SplitShowcase } from "./SplitShowcase";
import { WorkbenchSection } from "./WorkbenchSection";
import { FlagshipSpotlight } from "./FlagshipSpotlight";
import { FanOutProofDeck } from "./FanOutProofDeck";
import { RoundedCurtainFooter } from "./RoundedCurtainFooter";
import { CommandPalette } from "./CommandPalette";
import { ProjectModal } from "./ProjectModal";
import { BackToTop } from "./BackToTop";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { TopographicBackground } from "./TopographicBackground";
import { ProjectItem } from "@/types/projects";

export function PortfolioShell() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[var(--surface-canvas)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-clip">
        {/* Subtle Ambient Topographic Background */}
        <TopographicBackground />

        {/* Sticky Editorial Header */}
        <EditorialHeader onOpenCommandPalette={() => setPaletteOpen(true)} />

        {/* Editorial Scroll-Choreographed Architecture */}
        <main className="relative z-10 w-full overflow-x-clip">
          <InteractiveHero />
          <MarqueeManifesto />
          <ParallaxLedger />
          <SplitShowcase />
          <WorkbenchSection onSelectProject={(p) => setSelectedProject(p)} />
          <FlagshipSpotlight onSelectProject={(p) => setSelectedProject(p)} />
          <FanOutProofDeck />
          <RoundedCurtainFooter />
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
    </SmoothScrollProvider>
  );
}
