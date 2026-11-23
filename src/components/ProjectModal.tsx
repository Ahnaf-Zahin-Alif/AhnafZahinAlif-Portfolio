"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ProjectItem } from "@/types/projects";
import { ProjectModalDetails } from "./ProjectModalDetails";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Morphing Shared-Element Modal Card */}
          <motion.div
            layoutId={`project-${project.id}`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl rounded-3xl bg-[#0f121a] border border-white/[0.12] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header Bar */}
            <div className="p-6 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tabular-nums text-[#5fd4ff]">
                  {project.index} // SYSTEM BREAKDOWN
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#161b26] text-[#5fd4ff] border border-[#2f6bff]/30 uppercase font-semibold">
                  {project.badge}
                </span>
              </div>
              <motion.button
                type="button"
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
                className="p-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6bff]"
                aria-label="Close project breakdown modal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Inner Details */}
            <ProjectModalDetails project={project} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
