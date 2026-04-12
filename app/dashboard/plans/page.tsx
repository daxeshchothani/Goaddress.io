"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { PLANS } from "@/lib/constants";
import { readPortalUser, writePortalUser } from "@/lib/portalAuth";

const paidPlans = PLANS.filter((plan) => plan.id !== "free");

export default function PlansPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState(paidPlans[0]?.id ?? "200");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [message, setMessage] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedPlan = useMemo(() => {
    return paidPlans.find((plan) => plan.id === selectedPlanId) ?? paidPlans[0];
  }, [selectedPlanId]);

  const currentPrice = selectedPlan ? (billing === "yearly" ? selectedPlan.yearly : selectedPlan.monthly) : 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        <div className="relative mt-4 text-left" ref={dropdownRef}>
          <button
            className="flex h-14 w-full items-center justify-between rounded-xl border border-white/20 bg-white/5 px-4 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
            onClick={() => setIsDropdownOpen((current) => !current)}
            type="button"
          >
            <span>
              {selectedPlan?.name.replace("/day", " per day")} 
              <span className="text-slate-400">- {selectedPlan?.daily.toLocaleString("en-GB")} lookups/day</span>
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 text-slate-300 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {isDropdownOpen ? (
            <div className="absolute z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-xl border border-white/15 bg-[#0f182d] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              {paidPlans.map((plan) => {
                const optionPrice = billing === "yearly" ? plan.yearly : plan.monthly;
                const isSelected = plan.id === selectedPlanId;

                return (
                  <button
                    className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition-colors ${
                      isSelected
                        ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/25 text-white"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                    key={plan.id}
                    onClick={() => {
                      setSelectedPlanId(plan.id);
                      setIsDropdownOpen(false);
                    }}
                    type="button"
                  >
                    <span>
                      <span className="block text-sm font-semibold">{plan.name.replace("/day", " per day")}</span>
                      <span className="block text-xs text-slate-400">{plan.daily.toLocaleString("en-GB")} lookups/day</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-300">£{optionPrice}/{billing === "yearly" ? "yr" : "mo"}</span>
                      {isSelected ? <CheckIcon className="h-4 w-4 text-cyan-300" /> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

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
