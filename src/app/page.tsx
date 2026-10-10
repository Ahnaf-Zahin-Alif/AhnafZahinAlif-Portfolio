import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CvSection } from "@/components/CvSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#12100e] text-zinc-100">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <CvSection />
        <ReviewsSection />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <p>© 2026 Md. Ahnaf Zahin Alif. All rights reserved.</p>
          <p className="text-zinc-500">
            Crafted with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
