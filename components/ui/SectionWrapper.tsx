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
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      className={`py-24 ${className}`.trim()}
      id={id}
      initial={{ opacity: 0, y: 22 }}
      ref={ref}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </motion.section>
  );
}
