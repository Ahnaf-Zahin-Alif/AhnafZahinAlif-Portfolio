"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
}

const contactList: ContactItem[] = [
  {
    label: "GITHUB",
    value: "Ahnaf-Zahin-Alif",
    href: "https://github.com/Ahnaf-Zahin-Alif",
    isExternal: true,
  },
  {
    label: "LINKEDIN",
    value: "in/ahnaf-zahin-alif",
    href: "https://linkedin.com",
    isExternal: true,
  },
  {
    label: "CODEFORCES",
    value: "AhnafZahin",
    href: "https://codeforces.com",
    isExternal: true,
  },
  {
    label: "CODECHEF",
    value: "AhnafZahin",
    href: "https://codechef.com",
    isExternal: true,
  },
];

export function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const email = "ahnafzahinalif@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full flex flex-col justify-between h-full pt-1" aria-labelledby="contact-heading">
      <div>
        <h2
          id="contact-heading"
          className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase block pb-3"
        >
          CONTACT & NETWORK
        </h2>
      </div>

      <div className="border-t border-white/[0.08] divide-y divide-white/[0.06]">
        {/* Email Entry with One-Click Copy */}
        <div className="py-3 space-y-1.5">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-zinc-400 uppercase block">
            EMAIL
          </span>
          <div className="flex items-center justify-between gap-2">
            <a
              href={`mailto:${email}`}
              className="font-mono text-xs sm:text-sm text-[#f07b3f] hover:underline font-medium transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] rounded"
            >
              {email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d1916] hover:bg-[#25201c] border border-white/[0.08] text-[11px] text-zinc-300 font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f]"
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-emerald-400 font-medium">Copied ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-zinc-400" strokeWidth={1.5} aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Other Platform Entries */}
        {contactList.map((item) => (
          <div key={item.label} className="py-2.5 sm:py-3 space-y-0.5">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-zinc-400 uppercase block">
              {item.label}
            </span>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm text-zinc-200 hover:text-[#f07b3f] transition-colors hover:underline rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0a09]"
            >
              <span>{item.value}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
