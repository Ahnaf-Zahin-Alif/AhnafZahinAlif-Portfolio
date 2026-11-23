"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export function HeroPortraitBlob() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 180, y: 220 });
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
    maskImage: `radial-gradient(circle 110px at ${pos.x}px ${pos.y}px, black 35%, transparent 85%)`,
    WebkitMaskImage: `radial-gradient(circle 110px at ${pos.x}px ${pos.y}px, black 35%, transparent 85%)`,
    opacity: isHovered ? 1 : 0,
    transition: isHovered ? "opacity 0.2s ease-out" : "opacity 0.5s ease-in-out",
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className="relative w-64 sm:w-80 md:w-92 h-[340px] sm:h-[420px] md:h-[470px] rounded-3xl overflow-hidden border-2 border-[#DFD5C6] shadow-xl bg-[#EAE4DA] cursor-crosshair select-none group"
    >
      {/* 1. Base Layer: Natural Editorial Portrait */}
      <Image
        src="/profile.jpg"
        alt="Portrait of Md. Ahnaf Zahin Alif"
        fill
        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 368px"
        priority
        className="object-cover object-top filter saturate-[0.95] contrast-[1.05]"
      />

      {/* 2. Revealed Architectural / Wireframe Layer (Masked by Blob) */}
      <div
        style={maskStyle}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden bg-[#161617]"
        aria-hidden="true"
      >
        {/* High-contrast monochrome inverted image */}
        <Image
          src="/profile.jpg"
          alt=""
          fill
          sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 368px"
          className="object-cover object-top filter grayscale contrast-200 invert brightness-90 mix-blend-screen"
        />

        {/* Telemetry & Wireframe Blueprint Overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          viewBox="0 0 368 470"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#C85A32" strokeWidth="0.6" strokeOpacity="0.45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
          <circle cx={pos.x} cy={pos.y} r="45" fill="none" stroke="#C85A32" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={pos.x} cy={pos.y} r="25" fill="none" stroke="#7D9B7A" strokeWidth="0.75" />
          <line x1={pos.x - 55} y1={pos.y} x2={pos.x + 55} y2={pos.y} stroke="#C85A32" strokeWidth="0.75" strokeOpacity="0.8" />
          <line x1={pos.x} y1={pos.y - 55} x2={pos.x} y2={pos.y + 55} stroke="#C85A32" strokeWidth="0.75" strokeOpacity="0.8" />
          <text x="16" y="435" fill="#C85A32" fontSize="9" fontFamily="monospace" letterSpacing="1">
            NODE: AHNAF_ZAHIN_ALIF // BUP ICT
          </text>
          <text x="16" y="450" fill="#7D9B7A" fontSize="8" fontFamily="monospace">
            SCHEMA: FAULT-TOLERANT ARCHITECTURE
          </text>
        </svg>
      </div>

      {/* Hover Instruction Pill */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#161617]/85 backdrop-blur-sm border border-[#2E2C29] text-[10px] font-mono text-[#F4F0EB] tracking-wider transition-opacity duration-300 pointer-events-none z-20 ${
          isHovered ? "opacity-0" : "opacity-90"
        }`}
      >
        HOVER FOR WIREFRAME
      </div>

      {/* Frame Accent Corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C85A32] pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C85A32] pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C85A32] pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C85A32] pointer-events-none z-20" />
    </div>
  );
}
