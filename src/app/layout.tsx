import type { Metadata } from "next";
import { Oswald, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
  // TODO: Add Google Search Console verification code once domain property is created
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google:
            process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
            process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#161617] text-[#F4F0EB] min-h-screen antialiased selection:bg-[#C85A32]/25 selection:text-[#C85A32]">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
