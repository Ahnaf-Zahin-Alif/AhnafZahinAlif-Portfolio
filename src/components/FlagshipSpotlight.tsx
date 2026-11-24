"use client";

import React from "react";
import { Database, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CinefilmBlockWipe } from "./CinefilmBlockWipe";
import { CinefilmSeatSimulator } from "./CinefilmSeatSimulator";
import { TechStackMarquee } from "./TechStackMarquee";
import { ProjectItem } from "@/types/projects";

interface FlagshipSpotlightProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export function FlagshipSpotlight({ onSelectProject }: FlagshipSpotlightProps) {
  const handleOpenBreakdown = () => {
    if (onSelectProject) {
      onSelectProject({
        id: "cinefilm-flagship",
        index: "01",
        badge: "FLAGSHIP DBMS & CONCURRENCY",
        title: "CineFilm: Cinema Ticketing & DBMS Engine",
        tagline: "High-Throughput Relational Reservation Engine with Row-Level Locking",
        description:
          "Relational cinema booking system designed to enforce ACID transactions and eliminate double-booking during high-volume seat reservations.",
        extendedBreakdown:
          "Engineered using MariaDB / SQL with explicit transaction isolation (REPEATABLE READ) and row-level mutex locking. Includes an interactive seat allocation simulator.",
        architectureDetails: [
          "Row-Level Locking (`SELECT ... FOR UPDATE`) preventing seat race conditions",
          "ACID Transaction Isolation mitigating phantom reads and dirty writes",
          "Indexed Cinema Hall Partitioning reducing seat queries to ~38ms",
          "Normalized 3NF relational schema across movies, screenings, and bookings",
        ],
        tags: ["SQL", "MariaDB", "Relational Concurrency", "ACID", "Row Locks"],
        type: "tracker",
        repoUrl: "https://github.com/Ahnaf-Zahin-Alif/Dbms-Project",
        metrics: {
          label: "SQL LATENCY",
          value: "38ms Average",
          sublabel: "100% ACID Safe",
        },
      });
    }
  };

  return (
    <section
      id="cinefilm"
      className="relative w-full bg-[#F4F0EB] text-[#1B1B1C] pt-24 border-b border-[#DFD5C6] overflow-hidden"
      aria-label="Flagship Spotlight: CineFilm DBMS Engine"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Asymmetric Spotlight & Block-Wipe Reveals */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5A6E58] font-bold">
              <Database className="w-4 h-4 text-[#C85A32]" />
              <span>02 // FLAGSHIP SPOTLIGHT</span>
            </div>

            {/* Block-Wipe Text Reveal on Scroll */}
            <CinefilmBlockWipe>
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1B1B1C] leading-[0.95]">
                CINEFILM: CINEMA TICKETING &amp; DBMS ENGINE
              </h2>
            </CinefilmBlockWipe>

            <p className="font-sans text-xs sm:text-sm text-[#5C5852] leading-relaxed">
              High-concurrency movie reservation platform engineered to demonstrate strict ACID compliance under heavy simulated booking loads. Implements row-level locking to eliminate overselling and race conditions.
            </p>

            {/* SQL Latency: ~38ms • ACID Safe Badge in #5A6E58 Sage */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#EAE4DA] border border-[#DFD5C6] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#5A6E58] animate-pulse" />
              <span className="text-[#5C5852]">BENCHMARK:</span>
              <strong className="text-[#5A6E58] font-bold">SQL Latency: ~38ms • ACID Safe</strong>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleOpenBreakdown}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] hover:bg-[#b04d29] text-[#F4F0EB] text-xs font-mono font-bold tracking-tight shadow-md transition-all active:scale-95"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Inspect Concurrency Schema</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://github.com/Ahnaf-Zahin-Alif/Dbms-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#5C5852] hover:text-[#1B1B1C] underline underline-offset-4 decoration-[#DFD5C6] hover:decoration-[#C85A32] transition-colors"
              >
                GitHub: Dbms-Project ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Auditorium Seat Selector */}
          <div className="lg:col-span-6 w-full">
            <CinefilmSeatSimulator />
          </div>
        </div>
      </div>

      {/* Seamless Tech Stack Marquee (14 Technologies) */}
      <TechStackMarquee />
    </section>
  );
}
