"use client";

import React from "react";
import { Terminal, Code, Mail } from "lucide-react";
import { StudioEmailCopy } from "./StudioEmailCopy";
import { LiveClock } from "./LiveClock";
import { LINKS } from "@/lib/links";
import { Reveal } from "./motion/Reveal";

export function TasteClosingStation() {
  return (
    <section id="closing" className="min-h-[100svh] flex flex-col justify-center py-20 relative">
      <div className="taste-wrap space-y-10">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-2 border-b border-[var(--border-hairline)] pb-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--accent-sage)] tracking-widest font-semibold">
              <span>04 // CONTACT, DISPATCH &amp; VERIFICATION</span>
              <span className="text-slate-600">•</span>
              <span className="text-[var(--text-secondary)]">STATUS READY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] uppercase text-balance">
              Initialize Systems Transmission
            </h2>
          </div>
        </Reveal>

        {/* Terminal Station Card */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--surface-card)] p-6 sm:p-8 card-specular space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Terminal Prompt & Clock */}
            <div className="lg:col-span-7 space-y-4 font-mono">
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <Terminal className="w-4 h-4 text-[var(--accent-sage)]" />
                <span>transmission_terminal :: port=2222</span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-hairline)] space-y-2 text-xs">
                <div className="text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-sage)]">ahnaf@studio</span>:<span className="text-[#C85A32]">~</span>$ ping -c 1 ahnafzahinalif@gmail.com
                </div>
                <div className="text-[var(--accent-sage)]">
                  64 bytes from mail.system: icmp_seq=1 ttl=64 time=0.038 ms
                </div>
                <div className="text-[var(--text-secondary)] pt-1 font-space">
                  Availability: Open for SWE roles, backend systems &amp; low-level projects.
                </div>
              </div>

              <div className="pt-1">
                <LiveClock />
              </div>
            </div>

            {/* Right: Direct Actions & Channels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  Primary Transmission Line
                </div>
                <div className="flex items-center gap-3">
                  <StudioEmailCopy />
                  <a
                    href="mailto:ahnafzahinalif@gmail.com"
                    className="p-2.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#161b26]/60 dark:bg-[#161b26]/60 light:bg-slate-100/60 hover:border-white/20 text-slate-300 hover:text-white transition-all"
                    aria-label="Send direct email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  External Repositories &amp; Handles
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#161b26]/40 dark:bg-[#161b26]/40 light:bg-slate-100/40 hover:border-[#C85A32]/50 text-xs font-mono text-slate-200 hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[var(--accent-sage)]" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#161b26]/40 dark:bg-[#161b26]/40 light:bg-slate-100/40 hover:border-[#C85A32]/50 text-xs font-mono text-slate-200 hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[var(--accent-sage)]" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={LINKS.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#161b26]/40 dark:bg-[#161b26]/40 light:bg-slate-100/40 hover:border-[#C85A32]/50 text-xs font-mono text-slate-200 hover:text-white transition-all"
                  >
                    <Code className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Codeforces</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Single-Line Footer Credits (Tasteskill Rule 1) */}
          <div className="pt-6 border-t border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
            <div>
              © {new Date().getFullYear()} Md. Ahnaf Zahin Alif. Licensed under MIT.
            </div>
            <div>
              Built with Next.js 15, TypeScript &amp; Tailwind CSS • Deployed on Vercel
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
