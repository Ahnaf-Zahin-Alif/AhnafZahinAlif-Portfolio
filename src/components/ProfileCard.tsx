import Image from "next/image";

export function ProfileCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center py-4">
      {/* Offset Yellow/Cream Depth Layer */}
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#fce19b] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Profile Card Container */}
      <div className="relative w-full h-[420px] sm:h-[460px] rounded-[2rem] bg-[#1a1715] border border-zinc-700/80 shadow-xl overflow-hidden group">
        <Image
          src="/profile.jpg"
          alt="Md. Ahnaf Zahin Alif"
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 384px"
          className="object-cover object-[center_45%] group-hover:scale-105 transition-transform duration-500"
        />

        {/* Subtle bottom vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
