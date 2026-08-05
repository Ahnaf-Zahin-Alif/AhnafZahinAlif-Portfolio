import { Sidebar } from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CvSection } from "@/components/CvSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background Subtle Gradient Glow Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-64 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Two-Column Layout */}
      <Sidebar />

      {/* Main Right Scrolling Content Area */}
      <main className="md:ml-64 lg:ml-72 min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 pt-6 pb-20">
        <HeroSection />
        <TechStack />
        <ProjectsSection />
        <CvSection />
        <ReviewsSection />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <p>© 2026 Md. Ahnaf Zahin Alif. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with Next.js & Tailwind</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
          </p>
        </footer>
      </main>
    </div>
  );
}
