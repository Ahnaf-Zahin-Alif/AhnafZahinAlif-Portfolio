"use client";

import { ExternalLink } from "lucide-react";
import { XTwitterIcon, GithubIcon, CodeforcesIcon, CodechefIcon } from "./Icons";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  badge?: string;
  hoverColor: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: XTwitterIcon,
    description: "Tech discussions & updates",
    hoverColor: "group-hover:text-sky-400 group-hover:border-sky-500/40",
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: GithubIcon,
    description: "Open source & projects",
    hoverColor: "group-hover:text-purple-400 group-hover:border-purple-500/40",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com",
    icon: CodeforcesIcon,
    description: "Competitive programming profile",
    badge: "CP",
    hoverColor: "group-hover:text-blue-400 group-hover:border-blue-500/40",
  },
  {
    name: "Codechef",
    url: "https://codechef.com",
    icon: CodechefIcon,
    description: "Algorithm & contest rankings",
    badge: "CP",
    hoverColor: "group-hover:text-amber-400 group-hover:border-amber-500/40",
  },
];

export function ProfileLinksPanel() {
  return (
    <div className="w-full mt-6">
      <div className="relative group p-5 md:p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Profile Links Panel
            </h3>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            Clickable Platforms
          </span>
        </div>

        {/* Links Dock Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-start p-3.5 rounded-xl bg-white dark:bg-zinc-950/70 border border-zinc-200/70 dark:border-zinc-800/70 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-0.5 ${link.hoverColor}`}
              >
                <div className="w-full flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-4 h-4 text-zinc-700 dark:text-zinc-300 transition-colors" />
                  </div>
                  <div className="flex items-center gap-1">
                    {link.badge && (
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                        {link.badge}
                      </span>
                    )}
                    <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                  </div>
                </div>

                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                  {link.description}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
