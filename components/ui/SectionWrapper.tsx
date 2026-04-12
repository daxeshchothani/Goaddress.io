"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <motion.section
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 36, scale: 0.97, filter: "blur(8px)" }
      }
      className={`py-24 ${className}`.trim()}
      id={id}
      initial={{ opacity: 0, y: 36, scale: 0.97, filter: "blur(8px)" }}
      ref={ref}
      transition={{ duration: 0.9, type: "spring", stiffness: 90, damping: 18 }}
    >
      <motion.div
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 8 }}
        className="mx-auto max-w-7xl px-6"
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
