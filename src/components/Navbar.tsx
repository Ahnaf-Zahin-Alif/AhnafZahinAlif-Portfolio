"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
  { name: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#12100e]/85 border-b border-zinc-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Badge */}
        <Link
          href="#home"
          onClick={() => setActiveItem("Home")}
          className="group focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/60 rounded-xl"
          aria-label="Md. Ahnaf Zahin Alif Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f07b3f] hover:bg-[#e06c30] transition-colors flex items-center justify-center font-bold text-zinc-950 font-mono text-base shadow-sm">
            AZ
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-[#f07b3f] focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/40 rounded ${
                  isActive
                    ? "text-zinc-100 font-semibold"
                    : "text-zinc-400"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f07b3f] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-300 hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#12100e] px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveItem(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                activeItem === item.name
                  ? "text-[#f07b3f] bg-zinc-800/50 font-semibold"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30"
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
