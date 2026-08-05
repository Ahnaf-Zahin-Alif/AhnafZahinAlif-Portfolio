"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Home,
  FolderGit2,
  FileText,
  MessageSquareQuote,
  Menu,
  X,
  Code2,
  Sparkles,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "CV", href: "#cv", icon: FileText },
  { name: "Reviews", href: "#reviews", icon: MessageSquareQuote },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800/80 px-4 flex items-center justify-between z-50 transition-colors duration-300">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-blue-500/20">
            AZ
          </div>
          <div>
            <h1 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-tight">
              Md. Ahnaf Zahin Alif
            </h1>
            <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
              Fullstack SWE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-16 right-0 bottom-0 w-72 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Navigation
          </div>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/50 dark:border-blue-800/50"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-zinc-400 dark:text-zinc-500"
                    }`}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>© 2026 Ahnaf Zahin</span>
          <span className="flex items-center gap-1 text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Online
          </span>
        </div>
      </div>

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 lg:w-72 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800/80 p-6 z-40 justify-between transition-colors duration-300">
        <div className="space-y-8">
          {/* Sidebar Header / Brand */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("#home")}>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                AZ
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-950 rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Md. Ahnaf Zahin Alif
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
                <Code2 className="w-3.5 h-3.5" />
                <span>Fullstack SWE</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3">
              Menu Navigation
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 group ${
                      isActive
                        ? "bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200/60 dark:border-blue-800/40 shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/80 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-zinc-400 dark:text-zinc-500"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Sidebar Footer: Theme Toggle & Info */}
        <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Theme Mode
            </span>
            <ThemeToggle />
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Available for work
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
        </div>
      </aside>
    </>
  );
}
