import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#faf8f5] dark:bg-[#12100e] text-zinc-900 dark:text-zinc-100 min-h-screen antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
