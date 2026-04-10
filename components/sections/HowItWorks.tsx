"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { howItWorksSteps, requestExample, responseExample } from "@/lib/constants";

const stepIcons = [KeyIcon, CodeBracketIcon, CheckBadgeIcon];

export function HowItWorks() {
  return (
    <section id="docs" className="px-6 py-20 sm:px-8 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-2xl">
          <Badge className="border-accent-mint/25 bg-accent-mint/10 text-accent-mint">
            Quick start
          </Badge>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Get live in minutes
          </h2>
          <p className="mt-4 text-lg leading-8 text-text-muted">
            A single request gets you clean postcode and address data with a response shape
            designed for shipping products.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <motion.article
                className="rounded-[1.75rem] border border-border-color bg-card/80 p-6 shadow-glow transition-colors hover:bg-card-hover"
                initial={{ opacity: 0, y: 18 }}
                key={step.step}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-color bg-primary text-sm font-bold text-accent-mint">
                    {step.step}
                  </span>
                  <Icon className="h-6 w-6 text-accent-blue" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{step.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <CodeBlock title="GET request">{requestExample}</CodeBlock>

            <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
              <ArrowRightIcon className="h-4 w-4 text-accent-mint" />
              Send any valid postcode and receive a deterministic response.
            </div>
          </div>

          <motion.div
            className="rounded-[1.75rem] border border-border-color bg-card/80 p-6 shadow-glow"
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="mb-5 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-text-muted">
              <span>Structured response</span>
              <span>200 OK</span>
            </div>

            <motion.div
              animate="show"
              className="space-y-2 font-mono text-sm leading-7"
              initial="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {responseExample.map((entry) => (
                <motion.div
                  className="flex gap-3"
                  key={entry.key}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <span className="w-24 text-text-muted">&quot;{entry.key}&quot;:</span>
                  <span className="text-accent-mint">&quot;{entry.value}&quot;</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="#api-key" variant="outline" className="px-5 py-2.5 text-sm">
                Start free
              </Button>
              <Button href="#pricing" variant="ghost" className="px-5 py-2.5 text-sm">
                Explore pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
