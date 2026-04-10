"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type FeatureCard = {
  title: string;
  description: string;
  icon: "postcode" | "search" | "json" | "speed" | "security" | "webhook";
};

const featureCards: FeatureCard[] = [
  {
    title: "Postcode Lookup",
    description: "Retrieve all addresses for any UK postcode instantly",
    icon: "postcode",
  },
  {
    title: "Address Search",
    description: "Find by full or partial address text",
    icon: "search",
  },
  {
    title: "Structured JSON",
    description: "Clean fields ready for forms and databases",
    icon: "json",
  },
  {
    title: "Fast Response",
    description: "Optimised for low latency and high availability",
    icon: "speed",
  },
  {
    title: "Secure API Keys",
    description: "Protected authentication on all endpoints",
    icon: "security",
  },
  {
    title: "Webhooks",
    description: "Real-time push on plans 2,500/day and above",
    icon: "webhook",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function FeatureIcon({ icon }: { icon: FeatureCard["icon"] }) {
  const common = {
    fill: "none",
    height: 16,
    viewBox: "0 0 16 16",
    width: 16,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "postcode":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M8 1.5c2.9 0 5.25 2.29 5.25 5.1C13.25 10.1 8 14.5 8 14.5S2.75 10.1 2.75 6.6c0-2.81 2.35-5.1 5.25-5.1Z" />
          <circle cx="8" cy="6.5" r="1.6" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="7" cy="7" r="4.25" />
          <path d="m10.2 10.2 4 4" />
        </svg>
      );
    case "json":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M5.5 3.5c-1.1 0-2 .9-2 2v1.2c0 .7-.3 1.3-.8 1.8.5.5.8 1.1.8 1.8v1.2c0 1.1.9 2 2 2" />
          <path d="M10.5 3.5c1.1 0 2 .9 2 2v1.2c0 .7.3 1.3.8 1.8-.5.5-.8 1.1-.8 1.8v1.2c0 1.1-.9 2-2 2" />
        </svg>
      );
    case "speed":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M8 2.5a5.5 5.5 0 1 0 5.48 6.1" />
          <path d="M8 8l3-1.7" />
        </svg>
      );
    case "security":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M8 1.8 3.2 3.7v3.1c0 3 1.7 5.7 4.8 7.2 3.1-1.5 4.8-4.2 4.8-7.2V3.7L8 1.8Z" />
          <path d="m5.8 8.2 1.3 1.3 3.1-3.1" />
        </svg>
      );
    case "webhook":
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4.5 4.2a4.3 4.3 0 1 1 0 7.6" />
          <path d="M11.5 11.8a4.3 4.3 0 1 1 0-7.6" />
          <path d="M6.3 8h3.4" />
        </svg>
      );
  }
}

export function Features() {
  return (
    <SectionWrapper id="features">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Features</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Everything you need from a UK address API
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-text-muted">
          Production-ready endpoints built for speed, accuracy, and scale.
        </p>
      </div>

      <motion.div
        animate="show"
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
      >
        {featureCards.map((feature) => (
          <motion.article
            className="rounded-xl border border-[#2A2A3A] bg-card p-6 transition-colors duration-300 hover:border-accent-blue"
            key={feature.title}
            variants={cardVariants}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-color bg-primary text-accent-blue">
              <FeatureIcon icon={feature.icon} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-text-primary">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">{feature.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
