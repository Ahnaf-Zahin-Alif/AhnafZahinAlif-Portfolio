import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CvSection } from "@/components/CvSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
  description:
    "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
    url: "https://ahnaf-zahin-alif.vercel.app",
    siteName: "Md. Ahnaf Zahin Alif Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 768,
        height: 1024,
        alt: "Md. Ahnaf Zahin Alif - Fullstack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
    images: ["/profile.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-zinc-100">
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
        <footer className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Md. Ahnaf Zahin Alif. All rights reserved.</p>
          <p className="text-zinc-500 font-mono text-[11px]">
            Obsidian Studio Architecture • Next.js & Tailwind
          </p>
        </footer>
      </main>
    </div>
  );
}
