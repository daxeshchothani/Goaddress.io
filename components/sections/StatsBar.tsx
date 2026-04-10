"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/lib/constants";

function useCountUp(target: number, decimals: number, shouldStart: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let animationFrame = 0;
    const duration = 1400;
    const startedAt = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [decimals, shouldStart, target]);

  return Number(value.toFixed(decimals));
}

function StatCard({
  item,
  shouldAnimate,
}: {
  item: (typeof stats)[number];
  shouldAnimate: boolean;
}) {
  const isTextStat = "text" in item;
  const count = useCountUp(isTextStat ? 0 : item.value, isTextStat ? 0 : item.decimals, shouldAnimate);
  const displayValue = isTextStat
    ? item.text
    : new Intl.NumberFormat("en-GB", {
        minimumFractionDigits: item.decimals,
        maximumFractionDigits: item.decimals,
      }).format(count);

  return (
    <div className="rounded-[1.5rem] border border-border-color/60 bg-primary/60 px-5 py-6">
      <div className="text-3xl font-bold tracking-tight text-accent-mint">
        {displayValue}
        {!isTextStat ? item.suffix : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-text-muted">{item.label}</p>
    </div>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-6 sm:px-8 lg:px-8 lg:py-8">
      <motion.div
        ref={sectionRef}
        className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-border-color bg-card px-5 py-6 shadow-glow sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-8"
        initial={{ opacity: 0, y: 18 }}
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        {stats.map((item) => (
          <StatCard item={item} key={item.label} shouldAnimate={shouldAnimate} />
        ))}
      </motion.div>
    </section>
  );
}
