import type { Metadata } from "next";
import { PortfolioShell } from "@/components/PortfolioShell";

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
  return <PortfolioShell />;
}
