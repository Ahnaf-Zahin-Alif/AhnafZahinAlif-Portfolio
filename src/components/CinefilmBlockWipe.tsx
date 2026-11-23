"use client";

import React from "react";
import { motion } from "framer-motion";

interface CinefilmBlockWipeProps {
  children: React.ReactNode;
  className?: string;
}

export function CinefilmBlockWipe({ children, className = "" }: CinefilmBlockWipeProps) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      {/* Content to be revealed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.2, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Rectangular #C85A32 Block-Wipe Overlay */}
      <motion.div
        initial={{ left: "0%", right: "100%" }}
        whileInView={{
          left: ["0%", "0%", "100%"],
          right: ["100%", "0%", "0%"],
        }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-y-0 bg-[#C85A32] pointer-events-none z-20"
        aria-hidden="true"
      />
    </div>
  );
}
