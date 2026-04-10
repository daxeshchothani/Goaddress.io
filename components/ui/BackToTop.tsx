"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          aria-label="Back to top"
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-accent-blue p-3 text-white shadow-glow"
          exit={{ opacity: 0, y: 8 }}
          initial={{ opacity: 0, y: 8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          transition={{ duration: 0.25 }}
          type="button"
        >
          <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 24 24" width="20">
            <path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
