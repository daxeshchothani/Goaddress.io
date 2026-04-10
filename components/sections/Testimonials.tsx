"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    quote:
      "Integration took less than 10 minutes. Clean API, excellent docs. Exactly what we needed.",
    name: "James T.",
    role: "Full Stack Developer, Hubrion",
    initials: "JT",
  },
  {
    quote:
      "Switched from a competitor. Data quality and reliability are noticeably better.",
    name: "Sarah M.",
    role: "CTO, UK Fintech Startup",
    initials: "SM",
  },
  {
    quote:
      "Rock-solid postcode lookup for our checkout flow. Fast and always accurate.",
    name: "Rahul P.",
    role: "Lead Engineer",
    initials: "RP",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Stars() {
  return <span className="text-sm font-semibold tracking-[0.22em] text-accent-mint">★★★★★</span>;
}

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Testimonials</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Loved by developers worldwide
        </h2>
      </div>

      <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border-color bg-card px-4 py-2 text-sm text-text-muted">
        <Stars /> 4.8 average from 1,863 developers
      </div>

      <motion.div
        animate="show"
        className="mt-10 grid gap-5 lg:grid-cols-3"
        initial="hidden"
        variants={container}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
      >
        {testimonials.map((testimonial) => (
          <motion.article
            className="rounded-[1.5rem] border border-border-color bg-card p-6 shadow-glow"
            key={testimonial.name}
            variants={card}
          >
            <p className="text-2xl leading-none text-accent-mint">“</p>
            <p className="mt-3 text-sm leading-7 text-text-primary">{testimonial.quote}</p>
            <div className="mt-5 flex items-center gap-1 text-accent-mint">
              <Stars />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-blue/20 text-sm font-bold text-accent-blue">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-semibold text-text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
