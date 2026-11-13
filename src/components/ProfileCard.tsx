"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
      className="relative w-full max-w-sm mx-auto flex items-center justify-center py-4"
    >
      {/* Subtle Radial Spotlight Lighting */}
      <div
        className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,rgba(240,123,63,0.16),transparent_70%)] blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Offset Yellow/Cream Tactile Depth Layer */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#fce19b] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Profile Card Container with 1px Hairline Border */}
      <div className="relative w-full h-[420px] sm:h-[460px] rounded-[2rem] bg-[#151311] border border-white/[0.08] shadow-2xl overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Portrait photograph of Md. Ahnaf Zahin Alif, Fullstack Software Engineer"
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 384px"
          className="object-cover object-[center_45%]"
        />

        {/* Subtle bottom vignette gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
