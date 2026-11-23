"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUp, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/links";
import { footerSectionLinks } from "@/data/footerLinks";

export function RoundedCurtainFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahnafzahinalif@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="closing"
      className="relative w-full bg-[#161617] text-[#F4F0EB] pt-20 pb-12 px-4 sm:px-6 lg:px-12 rounded-t-[48px] border-t border-[#2E2C29] shadow-2xl overflow-hidden"
      aria-label="Footer and Contact Dispatch"
    >
      {/* Subtle Topographic Contour Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50,60 Q400,10 900,120 T1800,80" fill="none" stroke="#5C5852" strokeWidth="1" />
          <path d="M-80,200 Q450,150 950,260 T1900,200" fill="none" stroke="#5C5852" strokeWidth="0.8" />
          <path d="M0,380 Q500,320 1000,420 T2000,360" fill="none" stroke="#5C5852" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Giant Centered Display Headline */}
        <div className="text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7D9B7A] font-bold">
            04 // TERMINAL DISPATCH &amp; CONTACT
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#F4F0EB] leading-none">
            ENGINEERED FOR SCALE.
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#A39E95] font-sans leading-relaxed">
            Available for software engineering roles, distributed systems development, and high-performance backend pipelines.
          </p>

          {/* Centered High-Contrast #C85A32 "GET IN TOUCH" Pill Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="mailto:ahnafzahinalif@gmail.com?subject=Engineering%20Inquiry%20-%20Md.%20Ahnaf%20Zahin%20Alif"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C85A32] hover:bg-[#b04d29] text-[#F4F0EB] font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#C85A32]/25 transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#1F1E1D] hover:bg-[#2E2C29] text-[#F4F0EB] border border-[#2E2C29] font-mono text-xs transition-all active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-4 h-4 text-[#7D9B7A]" /> : <Copy className="w-4 h-4 text-[#A39E95]" />}
              <span>{copied ? "Copied ✓" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Section & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#2E2C29]">
          {/* Column 1: Directory / Sections */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7D9B7A] font-bold block">
              PORTFOLIO DIRECTORY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-[#A39E95]">
              {footerSectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="hover:text-[#C85A32] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: External Dispatches & Socials */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7D9B7A] font-bold block">
              EXTERNAL DISPATCHES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-[#A39E95]">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F0EB] transition-colors py-1 flex items-center gap-1.5">
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F0EB] transition-colors py-1 flex items-center gap-1.5">
                <span>LinkedIn Network</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
              </a>
              <a href={LINKS.codeforces} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F0EB] transition-colors py-1 flex items-center gap-1.5">
                <span>Codeforces Handle</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
              </a>
              <a href={LINKS.codechef} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F0EB] transition-colors py-1 flex items-center gap-1.5">
                <span>CodeChef Division</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#2E2C29] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A39E95]">
          <div>
            © {new Date().getFullYear()} Md. Ahnaf Zahin Alif. Licensed under MIT. Dhaka, Bangladesh.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#A39E95] hover:text-[#F4F0EB] transition-colors uppercase"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C85A32]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
