"use client";

import { useState, useEffect } from "react";
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
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0c0a09]/85 border-b border-white/[0.08] transition-colors">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-[#f07b3f] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] ${
                  isActive ? "text-zinc-100 font-semibold" : "text-zinc-400"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f07b3f] rounded-full shadow-[0_0_8px_rgba(240,123,63,0.6)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Live Clock & Status Badge */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151311] border border-white/[0.08] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
          <span className="text-zinc-400 font-medium">DHAKA</span>
          <span className="text-zinc-200 tabular-nums font-semibold">
            {time || "22:00:00"}
          </span>
          <span className="text-zinc-500 text-[10px]">GMT+6</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center md:hidden">
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

      {/* Mobile Dropdown Menu */}
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

          {/* Mobile Live Clock */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-400 px-3">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" aria-hidden="true" />
            <span>Dhaka, GMT+6:</span>
            <span className="text-zinc-200 tabular-nums font-semibold">{time || "22:00:00"}</span>
          </div>
        </div>
      )}
    </header>
  );
}
