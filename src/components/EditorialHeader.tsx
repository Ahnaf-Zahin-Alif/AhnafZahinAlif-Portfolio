"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Copy, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MagneticButton } from "./MagneticButton";
import { EditorialDrawer } from "./EditorialDrawer";

interface EditorialHeaderProps {
  onOpenCommandPalette: () => void;
}

const navLinks = [
  { id: "hero", label: "00 // INTRO" },
  { id: "manifesto", label: "01 // MANIFESTO" },
  { id: "ledger", label: "02 // ACADEMIC LEDGER" },
  { id: "showcase", label: "03 // DUAL ARCHITECTURE" },
  { id: "cinefilm", label: "04 // CINEFILM DBMS" },
  { id: "systems", label: "05 // SYSTEMS DOSSIER" },
  { id: "closing", label: "06 // DISPATCH" },
];

export function EditorialHeader({ onOpenCommandPalette }: EditorialHeaderProps) {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahnafzahinalif@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface-canvas)]/85 backdrop-blur-md border-b border-[var(--border-hairline)] transition-colors duration-300">
        <div className="taste-wrap h-18 py-3 flex items-center justify-between relative">
          {/* Left: Stacked Bold Typography */}
          <Link
            href="#hero"
            className="flex flex-col group leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded py-1"
            aria-label="Md. Ahnaf Zahin Alif - Return to top"
          >
            <span className="font-display font-bold text-base sm:text-lg tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[#C85A32] transition-colors">
              MD. AHNAF
            </span>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight uppercase text-[var(--text-primary)] group-hover:text-[#C85A32] transition-colors">
              ZAHIN ALIF
            </span>
          </Link>

          {/* Center: Geometric "AZ" SVG Monogram */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link
              href="#hero"
              aria-label="AZ Monogram Home"
              className="p-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#C85A32] hover:scale-105 transition-transform"
              >
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                  className="fill-[var(--surface-card)]"
                />
                <path
                  d="M10 23.5L15.5 10.5H18.5L24 23.5H21L17 13.5L13 23.5H10Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 18.5H21.5V20.5H12.5V18.5Z"
                  fill="currentColor"
                />
                <circle cx="17" cy="8" r="1.2" fill="var(--accent-sage)" />
              </svg>
            </Link>
          </div>

          {/* Right: Terracotta Pill CTA + Magnetic Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#C85A32] hover:bg-[#B24B25] text-[#F4F0EB] font-mono font-bold text-xs tracking-wider uppercase transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-canvas)]"
              aria-label={copied ? "Email address copied" : "Copy email address"}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" strokeWidth={1.75} />
                  <span>COPY EMAIL</span>
                </>
              )}
            </motion.button>

            <MagneticButton
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 sm:px-3 sm:py-2 rounded-full border border-[var(--border-hairline)] bg-[var(--surface-card)] hover:border-[#C85A32]/50 text-[var(--text-primary)] font-mono text-xs flex items-center gap-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              ariaLabel="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline font-bold">MENU</span>
            </MagneticButton>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <EditorialDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenCommandPalette={onOpenCommandPalette}
        navLinks={navLinks}
      />
    </>
  );
}
