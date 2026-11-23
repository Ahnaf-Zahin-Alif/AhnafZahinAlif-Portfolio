"use client";

import React from "react";

interface TopographicBackgroundProps {
  className?: string;
  variant?: "subtle" | "prominent";
}

/**
 * Topographic Contour SVG Background
 * Adapts opacity and stroke tone automatically based on light (#F4F0EB) / dark (#161617) canvas tokens.
 */
export function TopographicBackground({
  className = "",
  variant = "subtle",
}: TopographicBackgroundProps) {
  const baseOpacity = variant === "prominent" ? 0.08 : 0.045;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover text-[var(--topo-stroke,#DFD5C6)] transition-opacity duration-500"
        style={{ opacity: `var(--topo-opacity, ${baseOpacity})` }}
      >
        <g stroke="currentColor" strokeWidth="1" strokeMiterlimit="10">
          {/* Contour Line Ring 1 - Deep Topographic Peak */}
          <path d="M-120,450 C80,380 240,510 460,420 C680,330 840,490 1080,380 C1280,290 1420,440 1580,360" />
          <path d="M-120,410 C90,340 260,470 480,380 C700,290 860,450 1100,340 C1300,250 1440,400 1580,320" />
          <path d="M-120,370 C100,300 280,430 500,340 C720,250 880,410 1120,300 C1320,210 1460,360 1580,280" />
          <path d="M-120,330 C110,260 300,390 520,300 C740,210 900,370 1140,260 C1340,170 1480,320 1580,240" />

          {/* Contour Line Ring 2 - Central Basin */}
          <path d="M120,720 C280,620 440,780 660,670 C880,560 1020,740 1260,610 C1440,510 1520,680 1620,590" />
          <path d="M140,760 C300,660 460,820 680,710 C900,600 1040,780 1280,650 C1460,550 1540,720 1620,630" />
          <path d="M160,800 C320,700 480,860 700,750 C920,640 1060,820 1300,690 C1480,590 1560,760 1620,670" />

          {/* Contour Line Ring 3 - High Elevation Loops */}
          <path d="M320,180 C440,90 620,120 740,230 C860,340 1040,280 1160,170 C1280,60 1460,140 1580,90" />
          <path d="M340,140 C460,50 640,80 760,190 C880,300 1060,240 1180,130 C1300,20 1480,100 1580,50" />
          <path d="M360,100 C480,10 660,40 780,150 C900,260 1080,200 1200,90 C1320,-20 1500,60 1580,10" />

          {/* Contour Line Ring 4 - Ambient Valley Floor */}
          <path d="M-80,850 C160,790 380,890 620,810 C860,730 1100,880 1340,790 C1480,740 1560,830 1620,780" />
          <path d="M-80,890 C180,830 400,930 640,850 C880,770 1120,920 1360,830 C1500,780 1580,870 1620,820" />
        </g>
      </svg>
    </div>
  );
}
