"use client";

import React from "react";
import { ArrowUpRight, Wrench } from "lucide-react";
import { secondaryProjects } from "@/data/projects";
import { ProjectItem } from "@/types/projects";
import { WorkbenchCard } from "./WorkbenchCard";

interface WorkbenchSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function WorkbenchSection({ onSelectProject }: WorkbenchSectionProps) {
  return (
    <section
      id="workbench"
      className="relative w-full bg-[#161617] text-[#F4F0EB] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#2E2C29] overflow-hidden"
      aria-label="Workbench and Projects Hall of Fame"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Header: 01 // WORKBENCH on the left, Concise intro on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#2E2C29] pb-8">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7D9B7A] font-bold">
              <Wrench className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>01 // WORKBENCH</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F0EB]">
              HALL OF FAME
            </h2>
          </div>

          <p className="max-w-md font-sans text-xs sm:text-sm text-[#A39E95] leading-relaxed">
            Case studies across Java OOP administration, decentralized UAV gossip mesh, academic credit auditing, and velocity analytics. Validated with live telemetry widgets.
          </p>
        </div>

        {/* 5-Card Dark Grid: 6-Column Desktop Bento (3 cards col-span-2, 2 cards col-span-3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {secondaryProjects.map((project, idx) => (
            <div
              key={project.id}
              className={
                idx < 3
                  ? "col-span-1 md:col-span-1 lg:col-span-2 flex"
                  : idx === 4
                  ? "col-span-1 md:col-span-2 lg:col-span-3 flex"
                  : "col-span-1 md:col-span-1 lg:col-span-3 flex"
              }
            >
              <WorkbenchCard
                project={project}
                onSelect={onSelectProject}
              />
            </div>
          ))}
        </div>

        {/* Centered Terracotta Pill CTA */}
        <div className="pt-6 flex justify-center">
          <a
            href="https://github.com/Ahnaf-Zahin-Alif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C85A32] hover:bg-[#b04d29] text-[#F4F0EB] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C85A32]/20 transition-all active:scale-95"
            aria-label="View all repositories on GitHub"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
