"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion } from "framer-motion";
import { LiveClock } from "./LiveClock";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
  { name: "Reviews", href: "#reviews" },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0c0a09]/85 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="#home"
          onClick={() => setActiveItem("Home")}
          className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0a09]"
          aria-label="Md. Ahnaf Zahin Alif Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f07b3f] hover:bg-[#e06c30] transition-colors flex items-center justify-center font-bold text-zinc-950 text-base tracking-tight shadow-sm">
            AZ
          </div>
        </Link>

        {/* Desktop Navigation with Sliding Framer Motion Pill */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#151311] border border-white/[0.08]" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] ${
                  isActive ? "text-zinc-100 font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-sm"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Utilities: Cmd+K Search + Live Dhaka Clock */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151311] border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-zinc-200 hover:border-white/[0.16] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
              aria-label="Open command palette (Ctrl+K or Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" strokeWidth={1.5} />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-[10px] text-zinc-400">
                ⌘K
              </kbd>
            </button>
          )}

          <LiveClock />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl text-zinc-300 hover:bg-white/[0.06] transition-colors"
              aria-label="Open search palette"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-300 hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0a09] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                activeItem === item.name
                  ? "text-[#f07b3f] bg-white/[0.06] font-semibold"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.03]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
