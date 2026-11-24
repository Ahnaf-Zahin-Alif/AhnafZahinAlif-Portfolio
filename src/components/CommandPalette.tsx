"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, ExternalLink, Copy, Check, X } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Action" | "Social";
  action: () => void;
  icon: typeof Search;
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const nav = (hash: string) => { onClose(); window.location.hash = hash; };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahnafzahinalif@gmail.com");
      setCopied(true);
      setTimeout(() => { setCopied(false); onClose(); }, 1200);
    } catch { onClose(); }
  };

  const commands: CommandItem[] = [
    { id: "nav-hero", title: "00 // Hero & Liquid Blob Portrait", category: "Navigation", action: () => nav("#hero"), icon: Hash },
    { id: "nav-manifesto", title: "01 // Capabilities Marquee & AZ Manifesto", category: "Navigation", action: () => nav("#manifesto"), icon: Hash },
    { id: "nav-ledger", title: "02 // Asymmetric Academic & CP Ledger", category: "Navigation", action: () => nav("#ledger"), icon: Hash },
    { id: "nav-showcase", title: "03 // Dual-Mode Systems & Fullstack Architecture", category: "Navigation", action: () => nav("#showcase"), icon: Hash },
    { id: "nav-workbench", title: "04 // Workbench Hall of Fame & Telemetry", category: "Navigation", action: () => nav("#workbench"), icon: Hash },
    { id: "nav-cinefilm", title: "05 // CineFilm DBMS Spotlight & Tech Marquee", category: "Navigation", action: () => nav("#cinefilm"), icon: Hash },
    { id: "nav-proof", title: "06 // Fan-Out Proof Deck & Peer Signals", category: "Navigation", action: () => nav("#proof"), icon: Hash },
    { id: "nav-closing", title: "07 // Terminal Dispatch & Footer", category: "Navigation", action: () => nav("#closing"), icon: Hash },
    { id: "act-email", title: copied ? "Email Copied ✓" : "Copy Email Address", category: "Action", action: copyEmail, icon: copied ? Check : Copy },
    { id: "soc-github", title: "Open GitHub Profile", category: "Social", action: () => { window.open("https://github.com/Ahnaf-Zahin-Alif", "_blank"); onClose(); }, icon: ExternalLink },
    { id: "soc-cf", title: "Open Codeforces Profile", category: "Social", action: () => { window.open("https://codeforces.com", "_blank"); onClose(); }, icon: ExternalLink },
  ];

  const filtered = commands.filter((cmd) => cmd.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            className="relative w-full max-w-xl rounded-2xl bg-[#1F1E1D] border border-[#2E2C29] shadow-2xl overflow-hidden z-10"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#2E2C29]">
              <Search className="w-5 h-5 text-[#A39E95]" strokeWidth={1.5} aria-hidden="true" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to section..."
                autoFocus
                className="w-full bg-transparent text-sm text-[#F4F0EB] placeholder:text-[#A39E95] focus:outline-none"
              />
              <button type="button" onClick={onClose} className="p-1 rounded text-[#A39E95] hover:text-[#F4F0EB]" aria-label="Close command palette">
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto space-y-1">
              {filtered.length === 0 ? (
                <div className="p-4 text-center text-xs text-[#A39E95] font-mono">No commands matching &quot;{query}&quot;</div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#252422] text-left transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[#A39E95] group-hover:text-[#C85A32] transition-colors" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-[#F4F0EB] group-hover:text-[#C85A32]">{item.title}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A39E95]">{item.category}</span>
                    </button>
                  );
                })
              )}
            </div>
            <div className="px-4 py-2 border-t border-[#2E2C29] bg-[#161617] flex items-center justify-between text-[11px] font-mono text-[#A39E95]">
              <span>Navigate &amp; Execute</span>
              <span>ESC to exit</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
