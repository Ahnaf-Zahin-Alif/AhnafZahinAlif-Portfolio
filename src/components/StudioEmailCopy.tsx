"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export function StudioEmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "ahnafzahinalif@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.97 }}
      animate={copied ? { scale: [1, 1.04, 1] } : {}}
      transition={{ duration: 0.25 }}
      className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0f121a] dark:bg-[#0f121a] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] hover:border-white/[0.18] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      <div className="flex items-center gap-2.5">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.15 }}
            >
              <Check className="w-4 h-4 text-[#5fd4ff]" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(2px)" }}
              transition={{ duration: 0.15 }}
            >
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-[#2f6bff] transition-colors" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
        <span className={`text-xs font-mono transition-colors ${copied ? "text-[#5fd4ff] font-bold" : "text-slate-300 dark:text-slate-300 light:text-slate-800"}`}>
          {copied ? "Copied to Clipboard ✓" : email}
        </span>
      </div>
      <span className="text-[10px] font-mono uppercase text-slate-500">COPY</span>
    </motion.button>
  );
}
