"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";

interface EditorialDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpenCommandPalette: () => void;
  navLinks: { id: string; label: string }[];
}

export function EditorialDrawer({
  open,
  onClose,
  onOpenCommandPalette,
  navLinks,
}: EditorialDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-40 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative w-full max-w-sm h-full bg-[var(--surface-canvas)] border-l border-[var(--border-hairline)] p-8 pt-24 flex flex-col justify-between z-50 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="font-mono text-xs text-[var(--accent-sage)] tracking-widest uppercase">
                Index // Editorial Navigation
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={onClose}
                    className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--text-primary)] hover:text-[#C85A32] transition-colors py-1 border-b border-[var(--border-hairline)]/50"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-[var(--border-hairline)]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--surface-card)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Command className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Quick Command Palette</span>
                </span>
                <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-interactive)] text-[10px]">
                  ⌘K
                </kbd>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
