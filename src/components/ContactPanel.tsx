import { ArrowUpRight } from "lucide-react";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
  highlight?: boolean;
}

const contactList: ContactItem[] = [
  {
    label: "EMAIL",
    value: "[YOUR EMAIL]",
    href: "mailto:contact@example.com",
    highlight: true,
  },
  {
    label: "PHONE",
    value: "[YOUR PHONE]",
    href: "tel:+1234567890",
  },
  {
    label: "GITHUB",
    value: "github.com/[HANDLE]",
    href: "https://github.com",
    isExternal: true,
  },
  {
    label: "X (TWITTER)",
    value: "@[HANDLE]",
    href: "https://x.com",
    isExternal: true,
  },
  {
    label: "CODEFORCES",
    value: "[HANDLE]",
    href: "https://codeforces.com",
    isExternal: true,
  },
  {
    label: "CODECHEF",
    value: "[HANDLE]",
    href: "https://codechef.com",
    isExternal: true,
  },
];

export function ContactPanel() {
  return (
    <div className="w-full flex flex-col justify-between h-full pt-1">
      {/* Header */}
      <div>
        <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block mb-3">
          CONTACT
        </span>
        <div className="border-t border-zinc-200 dark:border-zinc-800/80 mb-2" />
      </div>

      {/* Contact Entries */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
        {contactList.map((item) => (
          <div key={item.label} className="py-2.5 sm:py-3 space-y-0.5">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase block">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-1 font-mono text-xs sm:text-sm transition-colors hover:underline ${
                  item.highlight
                    ? "text-[#f07b3f] font-semibold"
                    : "text-zinc-800 dark:text-zinc-200 hover:text-[#f07b3f] dark:hover:text-[#f07b3f]"
                }`}
              >
                <span>{item.value}</span>
                {item.isExternal && <ArrowUpRight className="w-3.5 h-3.5" />}
              </a>
            ) : (
              <span className="font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 block">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
