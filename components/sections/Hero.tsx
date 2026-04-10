"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { demoResponseTemplate, heroCopy } from "@/lib/constants";

const responseEntries = Object.entries(demoResponseTemplate);

export function Hero() {
  const [postcode, setPostcode] = useState("SW1A 1AA");
  const [submittedPostcode, setSubmittedPostcode] = useState<string | null>(null);

  const handleSearch = () => {
    const trimmed = postcode.trim().toUpperCase() || "SW1A 1AA";
    setSubmittedPostcode(trimmed);
  };

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-20 sm:px-8 lg:px-8 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(139, 139, 158, 0.28) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 92%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="border-accent-blue/25 bg-accent-blue/10 text-accent-blue">
            {heroCopy.badge}
          </Badge>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            {heroCopy.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted sm:text-xl">
            {heroCopy.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#api-key" variant="primary" className="px-7 py-3.5 text-base">
              {heroCopy.primaryCta}
            </Button>
            <Button href="#docs" variant="ghost" className="px-7 py-3.5 text-base text-text-primary">
              {heroCopy.secondaryCta}
            </Button>
          </div>

          <p className="mt-6 text-sm leading-6 text-text-muted">{heroCopy.trustLine}</p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-mint/15 blur-2xl" />
          <div className="relative rounded-[2rem] border border-border-color bg-card/85 p-5 shadow-glow backdrop-blur-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-text-muted">
              <span>Live Demo</span>
              <span className="rounded-full border border-accent-mint/30 bg-accent-mint/10 px-3 py-1 text-[10px] text-accent-mint">
                Production ready
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="postcode-input">
                Enter a UK postcode
              </label>
              <input
                id="postcode-input"
                className="h-14 rounded-2xl border border-border-color bg-primary/90 px-4 text-sm text-text-primary outline-none ring-0 transition-colors placeholder:text-text-muted focus:border-accent-blue/60"
                onChange={(event) => setPostcode(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSearch();
                  }
                }}
                placeholder="Enter a UK postcode (e.g. SW1A 1AA)"
                value={postcode}
              />
              <Button
                className="h-14 px-6 text-sm"
                onClick={handleSearch}
                variant="primary"
                type="button"
              >
                <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="mt-5 rounded-3xl border border-border-color bg-[#0d0d12] p-5">
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-text-muted">
                <span>API response</span>
                <span>{submittedPostcode ? submittedPostcode : "Waiting for postcode"}</span>
              </div>

              <AnimatePresence mode="wait">
                {submittedPostcode ? (
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="space-y-2 font-mono text-sm leading-7 text-text-primary"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key={submittedPostcode}
                    transition={{ staggerChildren: 0.06 }}
                  >
                    {responseEntries.map(([key, value]) => (
                      <motion.div
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -8 }}
                        key={key}
                        transition={{ duration: 0.35 }}
                      >
                        <span className="w-24 text-text-muted">&quot;{key}&quot;:</span>
                        <span className="text-accent-mint">&quot;{key === "postcode" ? submittedPostcode : value}&quot;</span>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.p
                    animate={{ opacity: 1 }}
                    className="text-sm leading-7 text-text-muted"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                  >
                    Enter a postcode to reveal a sample JSON response with structured address data.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
