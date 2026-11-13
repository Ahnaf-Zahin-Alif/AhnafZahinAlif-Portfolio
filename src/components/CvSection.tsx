import { Download } from "lucide-react";

export function CvSection() {
  return (
    <section id="cv" className="w-full py-12 border-t border-zinc-800 scroll-mt-24" aria-labelledby="cv-heading">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 id="cv-heading" className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
            Curriculum Vitae
          </h2>
        </div>

        <button
          type="button"
          disabled
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fce19b]/15 border border-[#fce19b]/30 text-xs font-semibold text-zinc-400 cursor-not-allowed w-max opacity-80"
          aria-label="Download CV"
        >
          <Download className="w-4 h-4 text-[#f07b3f]" aria-hidden="true" focusable="false" />
          <span>Download CV</span>
        </button>
      </div>

      <div className="p-8 rounded-3xl bg-[#161311] border border-dashed border-zinc-800 text-center">
        <p className="text-xs sm:text-sm text-zinc-400">
          Education, coursework, and experience details will be populated here.
        </p>
      </div>
    </section>
  );
}
