import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The requested page could not be found on this portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-semibold tracking-widest text-[#5fd4ff] uppercase block mb-3 font-mono">
        404
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 mb-2">
        Page Not Found
      </h1>
      <p className="text-sm text-zinc-400 max-w-md mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2f6bff] hover:bg-[#1a56f0] text-white font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" focusable="false" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
