interface LanguageItem {
  name: string;
  role: string;
}

const languages: LanguageItem[] = [
  { name: "C", role: "System Programming" },
  { name: "C++", role: "Competitive Programming" },
  { name: "Java", role: "Object-Oriented Programming" },
  { name: "Python", role: "Scripting & Automation" },
];

export function TechStack() {
  return (
    <section className="w-full py-10 border-t border-zinc-200 dark:border-zinc-800/80">
      {/* Section Header */}
      <div className="mb-6">
        <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block mb-3">
          STACK
        </span>
        <div className="border-t border-zinc-200 dark:border-zinc-800/80" />
      </div>

      <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
        {/* Row 1: Languages */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
              LANGUAGES
            </span>
          </div>
          <div className="md:col-span-9 flex flex-wrap items-center gap-2.5">
            {languages.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-zinc-100 dark:bg-[#1e1b18] border border-zinc-300 dark:border-zinc-700/60 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 shadow-sm"
              >
                <span className="font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                  {item.name}
                </span>
                <span className="text-zinc-400 dark:text-zinc-500">—</span>
                <span className="text-zinc-600 dark:text-zinc-400 text-xs">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Frameworks & Databases */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
              FRAMEWORKS & DATABASES
            </span>
          </div>
          <div className="md:col-span-9 flex items-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-600 dark:hover:border-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
              aria-label="Add framework or database skill"
            >
              + Add skill
            </button>
          </div>
        </div>

        {/* Row 3: Tools */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase">
              TOOLS
            </span>
          </div>
          <div className="md:col-span-9 flex items-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-dashed border-zinc-400 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-600 dark:hover:border-zinc-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f07b3f]/50"
              aria-label="Add tool skill"
            >
              + Add skill
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
