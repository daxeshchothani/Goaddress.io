"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { demoResponseTemplate, heroCopy } from "@/lib/constants";

const responseEntries = Object.entries(demoResponseTemplate);

export function Hero() {
  const [postcode, setPostcode] = useState("SW1A 1AA");
  const [submittedPostcode, setSubmittedPostcode] = useState<string | null>("SW1A 1AA");
  const [isSearching, setIsSearching] = useState(false);
  const [visibleResponseCount, setVisibleResponseCount] = useState(responseEntries.length);
  const [isStreamingResponse, setIsStreamingResponse] = useState(false);
  const introEase = [0.22, 1, 0.36, 1] as const;
  const introVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: introEase,
        staggerChildren: 0.1,
      },
    },
  };

  const introItemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: introEase } },
  };

  const handleSearch = () => {
    setIsSearching(true);
    setIsStreamingResponse(false);
    setVisibleResponseCount(0);
    const trimmed = postcode.trim().toUpperCase() || "SW1A 1AA";
    window.setTimeout(() => {
      setSubmittedPostcode(trimmed);
      setIsSearching(false);
    }, 650);
  };

  useEffect(() => {
    if (isSearching || !submittedPostcode) {
      return;
    }

    setIsStreamingResponse(true);
    setVisibleResponseCount(0);

    const interval = window.setInterval(() => {
      setVisibleResponseCount((current) => {
        if (current >= responseEntries.length) {
          window.clearInterval(interval);
          setIsStreamingResponse(false);
          return current;
        }

        return current + 1;
      });
    }, 120);

    return () => window.clearInterval(interval);
  }, [isSearching, submittedPostcode]);

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-20 sm:px-8 lg:px-8 lg:pb-28 lg:pt-24">
      <motion.div
        animate={{ opacity: [0.45, 0.72, 0.45] }}
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(139, 139, 158, 0.28) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent 92%)",
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ x: [0, 34, -18, 0], y: [0, -20, 12, 0], rotate: [0, 8, -6, 0] }}
        aria-hidden="true"
        className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-accent-blue/20 blur-3xl"
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ x: [0, -30, 18, 0], y: [0, 22, -10, 0], rotate: [0, -10, 7, 0] }}
        aria-hidden="true"
        className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-accent-mint/15 blur-3xl"
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <motion.div
          animate="show"
          className="max-w-2xl"
          initial="hidden"
          variants={introVariants}
        >
          <motion.div variants={introItemVariants}>
            <Badge className="border-accent-blue/25 bg-accent-blue/10 text-accent-blue">
              {heroCopy.badge}
            </Badge>
          </motion.div>

          <motion.h1 className="mt-6 text-5xl font-semibold tracking-tight text-text-primary sm:text-6xl lg:text-7xl" variants={introItemVariants}>
            {heroCopy.title}
          </motion.h1>

          <motion.p className="mt-6 max-w-xl text-lg leading-8 text-text-muted sm:text-xl" variants={introItemVariants}>
            {heroCopy.subtitle}
          </motion.p>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={introItemVariants}>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button href="/register" variant="primary" className="px-7 py-3.5 text-base">
                {heroCopy.primaryCta}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button href="#docs" variant="ghost" className="px-7 py-3.5 text-base text-text-primary">
                {heroCopy.secondaryCta}
              </Button>
            </motion.div>
          </motion.div>

          <motion.p className="mt-6 text-sm leading-6 text-text-muted" variants={introItemVariants}>
            {heroCopy.trustLine}
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="relative lg:sticky lg:top-24"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: introEase }}
        >
          <motion.div
            animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.98, 1.04, 0.98] }}
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-blue/30 via-transparent to-accent-mint/20 blur-2xl"
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="live-demo-shell relative rounded-[2rem] border border-border-color bg-card/90 p-5 shadow-glow backdrop-blur-sm sm:p-6">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <motion.div
                animate={{ opacity: [0.35, 0.8, 0.35] }}
                className="live-demo-border absolute -inset-px rounded-[2rem]"
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ x: ["-120%", "120%"] }}
                className="live-demo-scan absolute inset-y-0 w-2/3"
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-text-muted">
              <span>Live Demo</span>
              <div className="flex items-center gap-2 rounded-full border border-accent-mint/30 bg-accent-mint/10 px-3 py-1 text-[10px] text-accent-mint">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1, 0.85] }}
                  className="h-2 w-2 rounded-full bg-accent-mint"
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Production ready
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="postcode-input">
                Enter a UK postcode
              </label>
              <input
                id="postcode-input"
                className="h-14 rounded-2xl border border-border-color bg-primary/90 px-4 text-sm text-text-primary outline-none ring-0 transition-colors placeholder:text-text-muted focus:border-accent-blue/60"
                disabled={isSearching}
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
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  className="h-14 px-6 text-sm"
                  disabled={isSearching}
                  onClick={handleSearch}
                  variant="primary"
                  type="button"
                >
                  <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </motion.div>
            </div>

            <div className="live-console mt-5 rounded-3xl border border-border-color bg-[#0d0d12] p-5">
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-text-muted">
                <span>API response</span>
                <span>
                  {isSearching
                    ? "Resolving..."
                    : isStreamingResponse
                      ? "Streaming..."
                      : submittedPostcode
                        ? submittedPostcode
                        : "Waiting for postcode"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                {isSearching ? (
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key="loading"
                  >
                    {[1, 2, 3, 4].map((line) => (
                      <motion.div
                        animate={{ opacity: [0.35, 0.9, 0.35], x: [0, 10, 0] }}
                        className="h-4 rounded bg-gradient-to-r from-accent-blue/20 via-accent-mint/25 to-accent-blue/20"
                        key={line}
                        transition={{ duration: 1.1, delay: line * 0.08, repeat: Infinity }}
                      />
                    ))}
                  </motion.div>
                ) : submittedPostcode ? (
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="space-y-2 font-mono text-sm leading-7 text-text-primary"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key={submittedPostcode}
                    transition={{ staggerChildren: 0.08 }}
                  >
                    {responseEntries.slice(0, visibleResponseCount).map(([key, value], index) => (
                      <motion.div
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        className="flex gap-3 rounded-lg px-2"
                        initial={{ opacity: 0, x: -16, scale: 0.98 }}
                        key={key}
                        transition={{ duration: 0.42, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 4, backgroundColor: "rgba(79, 110, 247, 0.12)" }}
                      >
                        <span className="w-24 text-text-muted">&quot;{key}&quot;:</span>
                        <span className="text-accent-mint">&quot;{key === "postcode" ? submittedPostcode : value}&quot;</span>
                      </motion.div>
                    ))}

                    {isStreamingResponse ? (
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        className="flex items-center gap-3 rounded-lg px-2 text-accent-blue"
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        <span className="w-24 text-text-muted">&quot;status&quot;:</span>
                        <span>&quot;streaming fields...&quot;</span>
                      </motion.div>
                    ) : null}
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
