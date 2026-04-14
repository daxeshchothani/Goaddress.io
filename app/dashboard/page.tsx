"use client";

import { useEffect, useState } from "react";
import { readPortalUser, type PortalUser } from "@/lib/portalAuth";

export default function DashboardPage() {
  const [user, setUser] = useState<PortalUser | null>(null);
  const dailyLimit = user?.dailyLimit ?? 50;
  const usedToday = 0;
  const usagePercent = Math.min(100, Math.round((usedToday / dailyLimit) * 100));

  useEffect(() => {
    setUser(readPortalUser());
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur-xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Welcome back, {user?.firstName || "developer"}!</h1>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">Manage your account and track your API usage</p>
      </section>

      <section className="rounded-3xl border border-blue-300/30 bg-gradient-to-r from-[#1d2f8f] via-[#2559c8] to-[#2187d6] p-10 text-white shadow-[0_30px_80px_rgba(36,92,207,0.35)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Current Plan</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{user?.plan || "Free Trial"}</h2>
        <p className="mt-2 text-lg text-blue-100 sm:text-xl">{dailyLimit.toLocaleString("en-GB")} lookups per day</p>
        <a
          className="mt-8 inline-flex rounded-xl bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#1f43b4] transition-colors hover:bg-blue-50"
          href="/dashboard/plans"
        >
          View / Change Plan
        </a>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur-xl sm:p-10">
        <h3 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">API Requests Today</h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Usage</p>
            <p className="mt-3 text-3xl font-bold text-cyan-300">{usagePercent}%</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold text-rose-300">{usedToday}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Used</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold text-emerald-300">{dailyLimit}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">Remaining</p>
          </div>
        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
            style={{ width: `${Math.max(4, usagePercent)}%` }}
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300/40 hover:bg-cyan-50" href="/dashboard/api-testing">
            Test endpoints in API Playground
          </a>
          <a className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-300/40 hover:bg-cyan-50" href="/dashboard/usage-analytics">
            View full usage analytics
          </a>
        </div>
      </section>
    </div>
  );
}
