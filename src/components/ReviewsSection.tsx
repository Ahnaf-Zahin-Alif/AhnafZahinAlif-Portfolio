export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-24">
      <div className="space-y-1 mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-[#f07b3f] uppercase block">
          TESTIMONIALS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Reviews & Recommendations
        </h2>
      </div>

      <div className="p-8 rounded-3xl bg-[#171412] dark:bg-[#171412] bg-zinc-900 border border-dashed border-zinc-700/80 text-center">
        <p className="text-xs sm:text-sm font-mono text-zinc-400">
          Peer reviews, professor recommendations, and project feedback will appear here.
        </p>
      </div>
    </section>
  );
}
