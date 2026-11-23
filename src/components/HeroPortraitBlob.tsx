"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export function HeroPortraitBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 210, y: 260 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
    setIsHovered(true);
  };

  const maskStyle: React.CSSProperties = {
    maskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, black 35%, transparent 85%)`,
    WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, black 35%, transparent 85%)`,
    opacity: isHovered ? 1 : 0,
    transition: isHovered ? "opacity 0.2s ease-out" : "opacity 0.5s ease-in-out",
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px] cursor-crosshair select-none group pointer-events-auto"
    >
      {/* 1. Base Layer: Transparent Cutout Natural Portrait */}
      <Image
        src="/profile-cutout.webp"
        alt="Portrait of Md. Ahnaf Zahin Alif"
        fill
        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
        priority
        className="object-contain object-bottom filter saturate-[0.98] contrast-[1.05] drop-shadow-2xl"
      />

      {/* 2. Revealed Architectural / Wireframe Layer (Masked by Cursor Blob) */}
      <div
        style={maskStyle}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* High-contrast monochrome inverted cutout silhouette */}
        <Image
          src="/profile-cutout.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
          className="object-contain object-bottom filter grayscale contrast-200 invert brightness-90 mix-blend-screen drop-shadow-2xl"
        />

        {/* Telemetry & Wireframe Blueprint Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-75"
          viewBox="0 0 420 580"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C85A32" strokeWidth="0.6" strokeOpacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
          <circle cx={pos.x} cy={pos.y} r="50" fill="none" stroke="#C85A32" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={pos.x} cy={pos.y} r="28" fill="none" stroke="#7D9B7A" strokeWidth="0.75" />
          <line x1={pos.x - 60} y1={pos.y} x2={pos.x + 60} y2={pos.y} stroke="#C85A32" strokeWidth="0.75" strokeOpacity="0.8" />
          <line x1={pos.x} y1={pos.y - 60} x2={pos.x} y2={pos.y + 60} stroke="#C85A32" strokeWidth="0.75" strokeOpacity="0.8" />
          <text x="24" y="530" fill="#C85A32" fontSize="10" fontFamily="monospace" letterSpacing="1">
            NODE: AHNAF_ZAHIN_ALIF // BUP ICT
          </text>
          <text x="24" y="548" fill="#7D9B7A" fontSize="9" fontFamily="monospace">
            SCHEMA: FAULT-TOLERANT ARCHITECTURE
          </text>
        </svg>
      </div>

      {/* Hover Instruction Pill */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#161617]/85 backdrop-blur-sm border border-[#2E2C29] text-[10px] font-mono text-[#F4F0EB] tracking-wider transition-opacity duration-300 pointer-events-none z-20 ${
          isHovered ? "opacity-0" : "opacity-90"
        }`}
      >
        HOVER FOR WIREFRAME
      </div>
    </div>
  );
}
