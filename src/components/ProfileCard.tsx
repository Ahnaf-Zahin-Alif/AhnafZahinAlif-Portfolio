export function ProfileCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center py-4">
      {/* Offset Yellow/Cream Depth Layer */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#fce19b] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Profile Card Container */}
      <div className="relative w-full min-h-[420px] sm:min-h-[460px] rounded-[2rem] bg-[#1a1715] dark:bg-[#1a1715] bg-zinc-900 border border-zinc-700/80 flex flex-col items-center justify-center p-6 shadow-xl overflow-hidden group">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#f07b3f_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

        {/* Placeholder Tag */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            [PROFILE PHOTO]
          </span>
        </div>
      </div>
    </div>
  );
}

