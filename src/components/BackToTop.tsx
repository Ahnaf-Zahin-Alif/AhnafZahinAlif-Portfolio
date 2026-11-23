"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[var(--surface-card)] border border-[var(--border-hairline)] text-[#C85A32] hover:text-[var(--text-primary)] hover:border-[#C85A32]/50 shadow-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
