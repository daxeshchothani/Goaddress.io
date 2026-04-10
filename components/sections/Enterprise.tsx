"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const trustBadges = [
  "99.99% Uptime SLA",
  "SOC 2 Type II Compliant",
  "GDPR Compliant",
  "Single Sign-On (SSO)",
  "Dedicated Account Manager",
  "24/7 Technical Support",
];

export function Enterprise() {
  return (
    <SectionWrapper id="enterprise" className="bg-gradient-to-b from-primary to-card">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-border-color bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-primary/90">
            Enterprise Ready
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Built for security, compliance, and scale
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
            GoAddress is trusted by companies in finance, healthcare, and aviation. We meet the highest standards for data security and reliability.
          </p>

          <Button href="mailto:support@goaddress.io" className="mt-8" variant="ghost">
            Talk to our team →
          </Button>
        </div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.06 }}
        >
          {trustBadges.map((badge) => (
            <div
              className="flex items-center gap-3 rounded-xl border border-border-color bg-card px-4 py-4 text-sm text-text-primary"
              key={badge}
            >
              <CheckIcon className="h-5 w-5 flex-none text-accent-mint" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
