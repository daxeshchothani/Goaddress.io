"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PLANS } from "@/lib/constants";

const featuredPlanIds = ["free", "1000", "2500", "5000"] as const;
const usageBreakpoints = [50, 200, 500, 1000, 2000, 2500, 5000, 10000, 15000, 20000, 30000] as const;

function formatPounds(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 1,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 1,
  }).format(amount);
}

function estimatePrice(daily: number) {
  const anchors = PLANS.map((plan) => ({ daily: plan.daily, monthly: plan.monthly }));

  if (daily <= anchors[0].daily) {
    return 0;
  }

  for (let index = 0; index < anchors.length - 1; index += 1) {
    const left = anchors[index];
    const right = anchors[index + 1];

    if (daily === right.daily) {
      return right.monthly;
    }

    if (daily > left.daily && daily < right.daily) {
      const ratio = (daily - left.daily) / (right.daily - left.daily);
      return left.monthly + (right.monthly - left.monthly) * ratio;
    }
  }

  const last = anchors[anchors.length - 1];
  return last.monthly;
}

function PlanCard({ plan, isYearly }: { plan: (typeof PLANS)[number]; isYearly: boolean }) {
  const price = isYearly ? plan.yearly : plan.monthly;
  const isPopular = plan.popular;

  return (
    <motion.article
      className={`rounded-[1.5rem] border bg-card p-6 shadow-glow ${
        isPopular ? "border-2 border-accent-blue" : "border-[#2A2A3A]"
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">{plan.name}</h3>
          <p className="mt-2 text-sm text-text-muted">{plan.daily.toLocaleString("en-GB")} lookups/day</p>
        </div>
        {isPopular ? (
          <span className="rounded-full bg-accent-blue px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-end gap-1 text-text-primary">
        <span className="text-4xl font-semibold tracking-tight">£{formatPounds(price)}</span>
        <span className="pb-1 text-sm text-text-muted">/{isYearly ? "year" : "month"}</span>
      </div>

      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-3 text-sm text-text-muted" key={feature}>
            <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent-mint" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="#api-key" className="mt-7 w-full" variant={isPopular ? "primary" : "outline"}>
        Get started
      </Button>
    </motion.article>
  );
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [selectedUsageIndex, setSelectedUsageIndex] = useState(3);

  const selectedDaily = usageBreakpoints[selectedUsageIndex];
  const estimatedMonthly = estimatePrice(selectedDaily);
  const estimatedYearly = Math.round(estimatedMonthly * 12 * 0.9);
  const sliderFill = `${(selectedUsageIndex / (usageBreakpoints.length - 1)) * 100}%`;

  const featuredPlanSet = new Set<string>(featuredPlanIds);
  const featuredPlans = PLANS.filter((plan) => featuredPlanSet.has(plan.id));
  const extraPlans = PLANS.filter((plan) => !featuredPlanSet.has(plan.id));

  return (
    <SectionWrapper id="pricing">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-mint">Pricing</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          Pricing that grows with you
        </h2>
      </div>

      <div className="mt-4 flex items-center gap-3 text-text-muted">
        <p>Monthly</p>
        <button
          aria-label="Toggle yearly billing"
          className="relative h-8 w-16 rounded-full border border-border-color bg-primary p-1"
          onClick={() => setIsYearly((current) => !current)}
          type="button"
        >
          <span
            className={`block h-6 w-6 rounded-full bg-accent-blue transition-transform duration-300 ${
              isYearly ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
        <p className="flex items-center gap-2">Yearly <span className="rounded-full bg-accent-mint/15 px-3 py-1 text-xs font-semibold text-accent-mint">Save 20%</span></p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredPlans.map((plan) => (
          <PlanCard isYearly={isYearly} key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="mt-5">
        <button
          className="text-sm font-semibold text-text-muted transition-colors hover:text-white"
          onClick={() => setShowAllPlans((current) => !current)}
          type="button"
        >
          {showAllPlans ? "Show fewer plans ←" : "See all plans →"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showAllPlans ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {extraPlans.map((plan) => (
                <PlanCard isYearly={isYearly} key={plan.id} plan={plan} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-14 rounded-[2rem] border border-border-color bg-card p-6 shadow-glow">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-mint">Usage estimator</p>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary">Or estimate your custom usage:</h3>
          </div>
          <p className="text-sm text-text-muted">
            {selectedDaily.toLocaleString("en-GB")} lookups/day → £{formatPounds(isYearly ? estimatedYearly : estimatedMonthly)} /{isYearly ? "year" : "month"}
          </p>
        </div>

        <div className="mt-6">
          <input
            aria-label="Select custom usage"
            className="h-2 w-full cursor-pointer appearance-none rounded-full"
            max={usageBreakpoints.length - 1}
            min={0}
            onChange={(event) => setSelectedUsageIndex(Number(event.target.value))}
            style={{
              background: `linear-gradient(90deg, #4F6EF7 0%, #4F6EF7 ${sliderFill}, #2A2A3A ${sliderFill}, #2A2A3A 100%)`,
            }}
            type="range"
            value={selectedUsageIndex}
          />
          <div className="mt-3 flex justify-between text-xs text-text-muted">
            {usageBreakpoints.map((breakpoint) => (
              <span key={breakpoint}>{breakpoint.toLocaleString("en-GB")}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
