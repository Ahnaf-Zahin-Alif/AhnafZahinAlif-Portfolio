export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-12 border-t border-zinc-800 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight text-balance">
          Reviews & Recommendations
        </h2>
      </div>

      <div className="p-8 rounded-3xl bg-[#161311] border border-dashed border-zinc-800 text-center">
        <p className="text-xs sm:text-sm text-zinc-400">
          Peer reviews, professor recommendations, and project feedback will appear here.
        </p>
      </div>
    </section>
  );
}
