import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahnaf-zahin-alif.vercel.app"),
  title: {
    default: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
    template: "%s | Md. Ahnaf Zahin Alif",
  },
  description:
    "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
  keywords: [
    "Ahnaf Zahin Alif",
    "Md. Ahnaf Zahin Alif",
    "Fullstack Software Engineer",
    "Fullstack SWE",
    "Backend Development",
    "System Design",
    "Competitive Programming",
    "Software Engineer Portfolio",
    "Algorithms",
    "BUP",
  ],
  authors: [
    {
      name: "Md. Ahnaf Zahin Alif",
      url: "https://ahnaf-zahin-alif.vercel.app",
    },
  ],
  creator: "Md. Ahnaf Zahin Alif",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahnaf-zahin-alif.vercel.app",
    siteName: "Md. Ahnaf Zahin Alif Portfolio",
    title: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
    images: [
      {
        url: "/profile.jpg",
        width: 768,
        height: 1024,
        alt: "Md. Ahnaf Zahin Alif - Fullstack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Ahnaf Zahin Alif | Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer focused on backend development, system design, and competitive programming. Explore systems architecture, algorithms, and projects.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      process.env.GOOGLE_SITE_VERIFICATION ||
      "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${unbounded.variable} dark`}
    >
      <body className="bg-[#0c0a09] text-zinc-100 min-h-screen antialiased selection:bg-[#f07b3f]/30 selection:text-[#f07b3f]">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
