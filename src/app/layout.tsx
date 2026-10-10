import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Md. Ahnaf Zahin Alif - Fullstack SWE Portfolio",
  description:
    "Personal Portfolio of Md. Ahnaf Zahin Alif - Student specializing in low-level programming and algorithms.",
  keywords: [
    "Ahnaf Zahin Alif",
    "Fullstack SWE",
    "Portfolio",
    "Competitive Programming",
    "Algorithms",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#12100e] text-zinc-100 min-h-screen antialiased selection:bg-[#f07b3f]/30 selection:text-[#f07b3f]">
        {children}
      </body>
    </html>
  );
}
