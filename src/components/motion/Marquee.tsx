"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: React.ReactNode[];
  speedSeconds?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  items,
  speedSeconds = 30,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-x-auto flex items-center gap-8 ${className}`}>
        {items.map((item, idx) => (
          <div key={idx} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full flex overflow-x-hidden group select-none ${className}`}
    >
      <motion.div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speedSeconds,
        }}
      >
        {/* Render items twice for a perfectly seamless 0% -> -50% loop */}
        {items.map((item, idx) => (
          <div key={`m1-${idx}`} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`m2-${idx}`} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
