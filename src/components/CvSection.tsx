import { Download } from "lucide-react";

export function CvSection() {
  return (
    <section id="cv" className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold tracking-widest text-[#f07b3f] uppercase block">
            RESUME
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Curriculum Vitae
          </h2>
        </div>

        <button
          type="button"
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fce19b]/50 dark:bg-[#fce19b]/20 border border-[#fce19b]/40 text-xs font-mono text-zinc-600 dark:text-zinc-400 cursor-not-allowed w-max opacity-80"
          aria-label="Download CV"
        >
          <Download className="w-4 h-4 text-[#f07b3f]" />
          <span>Download CV</span>
        </button>
      </div>

      <div className="p-8 rounded-3xl bg-[#171412] dark:bg-[#171412] bg-zinc-900 border border-dashed border-zinc-700/80 text-center">
        <p className="text-xs sm:text-sm font-mono text-zinc-400">
          Education, coursework & experience details will be populated here.
        </p>
      </div>
    </section>
  );
}
