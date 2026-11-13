"use client";

import { useState } from "react";
import { MotionProvider } from "./MotionProvider";
import { Navbar } from "./Navbar";
import { CommandPalette } from "./CommandPalette";
import { BackToTop } from "./BackToTop";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <MotionProvider>
      <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />
      {children}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <BackToTop />
    </MotionProvider>
  );
}
