"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CTABanner() {
  return (
    <SectionWrapper id="api-key">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-border-color bg-card px-6 py-12 text-center shadow-glow sm:px-10">
        <p className="text-lg font-semibold tracking-[0.22em] text-accent-mint">★★★★★</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Start building with GoAddress today
        </h2>
        <p className="mt-4 text-lg leading-8 text-text-muted">
          Join 1,863 developers. Get 50 free lookups per day. No credit card required.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2.2, repeat: Infinity }}>
            <Button
              href="/register"
              variant="primary"
              className="px-7 py-3.5 text-base"
            >
              Get Your Free API Key
            </Button>
          </motion.div>
          <Button
            href="/docs"
            variant="ghost"
            className="px-7 py-3.5 text-base"
          >
            Read the Documentation →
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
