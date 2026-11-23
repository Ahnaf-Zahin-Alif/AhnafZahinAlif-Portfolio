"use client";

import React from "react";

interface TechItem {
  name: string;
  role: string;
  color: string;
  iconSvg: React.ReactNode;
}

export function TasteCapabilityMatrix() {
  const stack: TechItem[] = [
    {
      name: "C++",
      role: "Algorithms & Systems",
      color: "#00599C",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#00599C" />
          <path d="M9 14.5C7.6 14.5 6.5 13.4 6.5 12C6.5 10.6 7.6 9.5 9 9.5C9.8 9.5 10.5 9.9 10.9 10.5L12 9.4C11.3 8.5 10.2 8 9 8C6.8 8 5 9.8 5 12C5 14.2 6.8 16 9 16C10.2 16 11.3 15.5 12 14.6L10.9 13.5C10.5 14.1 9.8 14.5 9 14.5ZM14 11H15V9.5H16V11H17.5V12H16V13.5H15V12H14V11ZM18 11H19V9.5H20V11H21.5V12H20V13.5H19V12H18V11Z" fill="white" />
        </svg>
      ),
    },
    {
      name: "Python",
      role: "Backend & Automation",
      color: "#3776AB",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.9H12V5.4H5.9C4.1 5.4 2.5 6.4 2.5 9.6C2.5 12.8 3.5 13.4 5 13.4H6.2V11.8C6.2 10 7.7 8.5 9.5 8.5H12.6C13.8 8.5 14.8 7.5 14.8 6.3V3.4C14.8 3.4 15.1 2 11.9 2ZM10.2 3.1C10.6 3.1 11 3.5 11 3.9C11 4.3 10.6 4.7 10.2 4.7C9.8 4.7 9.4 4.3 9.4 3.9C9.4 3.5 9.8 3.1 10.2 3.1Z" fill="#3776AB" />
          <path d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6L15.1 19.1H12V18.6H18.1C19.9 18.6 21.5 17.6 21.5 14.4C21.5 11.2 20.5 10.6 19 10.6H17.8V12.2C17.8 14 16.3 15.5 14.5 15.5H11.4C10.2 15.5 9.2 16.5 9.2 17.7V20.6C9.2 20.6 8.9 22 12.1 22ZM13.8 20.9C13.4 20.9 13 20.5 13 20.1C13 19.7 13.4 19.3 13.8 19.3C14.2 19.3 14.6 19.7 14.6 20.1C14.6 20.5 14.2 20.9 13.8 20.9Z" fill="#FFD43B" />
        </svg>
      ),
    },
    {
      name: "MariaDB",
      role: "Relational ACID DB",
      color: "#003545",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" fill="#003545" />
          <path d="M7 16V8L12 13L17 8V16H15V11L12 14L9 11V16H7Z" fill="#C0765A" />
        </svg>
      ),
    },
    {
      name: "Django",
      role: "REST Framework",
      color: "#092E20",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <rect width="24" height="24" rx="6" fill="#092E20" />
          <path d="M12.5 5H14.5V15C14.5 17.5 13.2 18.8 10.8 18.8C9.5 18.8 8.4 18.3 7.8 17.7L8.7 16.1C9.2 16.6 9.8 17 10.7 17C12 17 12.5 16.2 12.5 14.8V5ZM10.5 8H8.5V14.5H10.5V8Z" fill="#2BA977" />
        </svg>
      ),
    },
    {
      name: "Java",
      role: "OOP & Systems",
      color: "#EA2D2E",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M8.5 18.5C11.5 18.5 16.5 17.5 17 15C14 15.5 10 15.5 7.5 14.5C7.2 16 8 18.2 8.5 18.5Z" fill="#EA2D2E" />
          <path d="M10 13C12.5 13 16 12 17.5 9.5C14.5 10 11.5 10 9 9C8.8 10.5 9.5 12.5 10 13Z" fill="#007396" />
        </svg>
      ),
    },
    {
      name: "Docker",
      role: "Containerization",
      color: "#2496ED",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22.5 11.5C21.8 10.8 20.8 10.5 19.8 10.7C19.4 9.5 18.5 8.6 17.3 8.2L16.8 9.2C17.6 9.5 18.2 10.2 18.4 11.1C17.2 11.5 16.3 12.5 16.1 13.8H3C3.5 16.5 5.8 18.5 8.5 18.5C13.5 18.5 17.8 15.5 19.5 13.5C21 13.5 22 12.5 22.5 11.5ZM5 12H7V10H5V12ZM8 12H10V10H8V12ZM11 12H13V10H11V12ZM8 9H10V7H8V9ZM11 9H13V7H11V9ZM14 12H16V10H14V12ZM14 9H16V7H14V9Z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: "Linux",
      role: "OS & Kernel",
      color: "#FCC624",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" fill="#18181B" />
          <path d="M12 4C9.5 4 8 6 8 8.5C8 10 7 11.5 6 13C5 14.5 6 16.5 8 17C10 17.5 14 17.5 16 17C18 16.5 19 14.5 18 13C17 11.5 16 10 16 8.5C16 6 14.5 4 12 4Z" fill="#E4E4E7" />
          <circle cx="10.5" cy="7.5" r="1" fill="#18181B" />
          <circle cx="13.5" cy="7.5" r="1" fill="#18181B" />
          <path d="M10 10C10.5 11.5 13.5 11.5 14 10H10Z" fill="#FCC624" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      role: "Typed Systems",
      color: "#3178C6",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M12.5 10.5H7.5V12H9.2V18H10.8V12H12.5V10.5ZM13.8 15.8C14.3 16.3 15 16.6 15.8 16.6C16.8 16.6 17.3 16.1 17.3 15.4C17.3 14.7 16.8 14.3 15.7 13.8C14.3 13.2 13.4 12.6 13.4 11.4C13.4 10.1 14.5 9.2 16 9.2C17 9.2 17.8 9.5 18.4 10L17.5 11.2C17 10.8 16.5 10.6 16 10.6C15.2 10.6 14.8 11 14.8 11.5C14.8 12 15.3 12.3 16.3 12.8C17.8 13.4 18.7 14.1 18.7 15.3C18.7 16.8 17.5 17.8 15.8 17.8C14.6 17.8 13.6 17.3 13 16.5L13.8 15.8Z" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stack.map((item) => (
        <div
          key={item.name}
          className="p-3.5 rounded-xl border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] bg-[#151311] dark:bg-[#151311] light:bg-[#fbfaf8] hover:border-white/20 transition-all hover:-translate-y-0.5 group flex items-center gap-3"
        >
          <div className="p-2 rounded-lg bg-white/[0.04] dark:bg-white/[0.04] light:bg-black/[0.04] shrink-0 group-hover:scale-105 transition-transform">
            {item.iconSvg}
          </div>
          <div className="min-w-0">
            <div className="text-xs font-mono font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 truncate">
              {item.name}
            </div>
            <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-600 truncate">
              {item.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
