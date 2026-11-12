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
    <section className="w-full py-10 border-t border-zinc-800">
      {/* Section Header */}
      <div className="mb-4">
        <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase block pb-3">
          STACK
        </span>
      </div>

      <div className="border-t border-zinc-800 divide-y divide-zinc-800/80">
        {/* Row 1: Languages */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              LANGUAGES
            </span>
          </div>
          <div className="md:col-span-9 flex flex-wrap items-center gap-2.5">
            {languages.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#181513] border border-zinc-800 text-xs sm:text-sm text-zinc-200 shadow-sm"
              >
                <span className="font-bold text-zinc-100 font-mono">
                  {item.name}
                </span>
                <span className="text-zinc-600">—</span>
                <span className="text-zinc-400 text-xs">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Frameworks & Databases */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              FRAMEWORKS & DATABASES
            </span>
          </div>
          <div className="md:col-span-9 flex items-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-dashed border-zinc-700 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]"
              aria-label="Add framework or database skill"
            >
              + Add skill
            </button>
          </div>
        </div>

        {/* Row 3: Tools */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              TOOLS
            </span>
          </div>
          <div className="md:col-span-9 flex items-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-dashed border-zinc-700 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07b3f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100e]"
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
