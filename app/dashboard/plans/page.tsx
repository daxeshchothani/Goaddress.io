"use client";

import { useMemo, useState } from "react";
import { PLANS } from "@/lib/constants";
import { readPortalUser, writePortalUser } from "@/lib/portalAuth";
import { DropdownMenu } from "@/components/ui/DropdownMenu";

const paidPlans = PLANS.filter((plan) => plan.id !== "free");

export default function PlansPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState(paidPlans[0]?.id ?? "200");
  const [message, setMessage] = useState("");

  const selectedPlan = useMemo(() => {
    return paidPlans.find((plan) => plan.id === selectedPlanId) ?? paidPlans[0];
  }, [selectedPlanId]);

  const currentPrice = selectedPlan ? (billing === "yearly" ? selectedPlan.yearly : selectedPlan.monthly) : 0;

  const planOptions = useMemo(
    () =>
      paidPlans.map((plan) => ({
        label: plan.name.replace("/day", " per day"),
        description: `${plan.daily.toLocaleString("en-GB")} lookups/day`,
        rightText: `£${billing === "yearly" ? plan.yearly : plan.monthly}/${billing === "yearly" ? "yr" : "mo"}`,
        value: plan.id,
      })),
    [billing],
  );

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Choose Your Plan</h1>
        <p className="mt-3 text-base text-slate-300 sm:text-lg">Instant access • No commitment</p>
      </div>

      <div className="mt-8 w-full rounded-3xl border border-white/10 bg-[#0b1222]/80 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-sm rounded-full bg-white/10 p-1">
          <button
            className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide ${billing === "monthly" ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white" : "text-slate-300"}`}
            onClick={() => setBilling("monthly")}
            type="button"
          >
            Monthly
          </button>
          <button
            className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide ${billing === "yearly" ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white" : "text-slate-300"}`}
            onClick={() => setBilling("yearly")}
            type="button"
          >
            Yearly
          </button>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Select your plan</p>

        <DropdownMenu className="mt-4" onChange={setSelectedPlanId} options={planOptions} value={selectedPlanId} />

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Selected Plan</p>
          <p className="mt-2 text-3xl font-bold text-white">{selectedPlan?.name}</p>
          <p className="mt-2 text-xl font-bold text-cyan-300">
            £{currentPrice} / {billing === "yearly" ? "year" : "month"}
          </p>
          <p className="mt-2 text-sm text-slate-300">{selectedPlan?.daily.toLocaleString("en-GB")} full address look-ups per day</p>
        </div>

        <button
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          onClick={() => {
            const user = readPortalUser();
            if (!user || !selectedPlan) {
              return;
            }

            writePortalUser({
              ...user,
              plan: selectedPlan.name,
              dailyLimit: selectedPlan.daily,
            });
            setMessage(`Plan switched to ${selectedPlan.name}.`);
          }}
          type="button"
        >
          Confirm Plan
        </button>

        {message ? <p className="mt-4 text-sm font-semibold text-emerald-300">{message}</p> : null}
      </div>
    </div>
  );
}
