"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const faqItems = [
  {
    question: "How do API lookups count?",
    answer:
      "Each valid address result = 1 lookup. Failed or empty responses are not counted toward your daily limit.",
  },
  {
    question: "How often is data updated?",
    answer:
      "Address records are refreshed on a regular schedule to reflect the latest Royal Mail and Ordnance Survey data.",
  },
  {
    question: "What data sources power GoAddress?",
    answer:
      "We use verified UK address datasets combined with ongoing validation to ensure accuracy and consistency.",
  },
  {
    question: "Do I need technical expertise?",
    answer:
      "Not at all. The API is straightforward, with clear documentation and code examples. Most developers integrate it in under 10 minutes.",
  },
  {
    question: "Can I use one API key on multiple projects?",
    answer:
      "Yes. One key works across multiple sites and applications, as long as total usage stays within your plan.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes. Our free tier gives you 50 lookups per day with no credit card required.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer:
      "Yes. Upgrade, downgrade, or cancel whenever you like. Access continues until the end of your current billing period.",
  },
  {
    question: "What support is available?",
    answer:
      "Basic plans include standard email support. Higher tiers include priority responses, dedicated engineers, and account managers.",
  },
  {
    question: "Can I store or cache address results?",
    answer: "Yes, within the terms of our usage and licensing guidelines.",
  },
  {
    question: "How secure are payments?",
    answer:
      "All transactions use encrypted payment gateways. We never store card details on our servers.",
  },
  {
    question: "Do you accept bank transfers?",
    answer: "Yes, for annual subscriptions and enterprise plans. Contact our team to arrange.",
  },
];

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div className="rounded-[1.25rem] border border-border-color bg-card shadow-glow" key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                onClick={() => setExpandedIndex(isOpen ? null : index)}
                type="button"
              >
                <span className="text-base font-semibold text-text-primary sm:text-lg">{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border-color text-xl font-semibold text-accent-blue"
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden px-5 pb-5 sm:px-6"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="max-w-3xl text-sm leading-7 text-text-muted sm:text-base">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
