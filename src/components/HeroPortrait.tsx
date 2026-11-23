"use client";

import React from "react";
import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="relative w-[210px] sm:w-[250px] md:w-[280px] lg:w-[310px] xl:w-[330px] h-[295px] sm:h-[350px] md:h-[395px] lg:h-[440px] xl:h-[465px] select-none group pointer-events-auto">
      <Image
        src="/profile-cutout.webp"
        alt="Portrait of Md. Ahnaf Zahin Alif"
        fill
        sizes="(max-width: 640px) 210px, (max-width: 768px) 250px, (max-width: 1024px) 280px, 330px"
        priority
        className="object-contain object-bottom filter saturate-[1.02] contrast-[1.03] drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

// Backwards compatibility alias
export const HeroPortraitBlob = HeroPortrait;
