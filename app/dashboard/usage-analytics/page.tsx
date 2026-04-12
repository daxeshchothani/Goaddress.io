"use client";

import { useMemo, useState } from "react";

const monthlyData = [0, 2, 3, 2, 5, 4, 6, 5, 8, 7, 9, 10];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function UsageAnalyticsPage() {
  const [period, setPeriod] = useState("This Month");
  const [chartType, setChartType] = useState("Line Chart");

  const points = useMemo(() => {
    return monthlyData
      .map((value, index) => {
        const x = 40 + (index * 68);
        const y = 280 - value * 22;
        return `${x},${y}`;
      })
      .join(" ");
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">API Usage Analytics</h1>
        <p className="mt-3 text-base text-slate-300 sm:text-lg">Visualise your API request usage</p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-[#0b1222]/80 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <select
            className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-slate-100 outline-none"
            onChange={(event) => setPeriod(event.target.value)}
            value={period}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>

          <select
            className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-slate-100 outline-none"
            onChange={(event) => setChartType(event.target.value)}
            value={chartType}
          >
            <option>Line Chart</option>
            <option>Bar Chart</option>
          </select>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#090f1d] p-4">
          <svg className="h-[320px] w-full" viewBox="0 0 860 320">
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={i} stroke="rgba(148,163,184,0.2)" strokeWidth="1" x1="40" x2="820" y1={20 + i * 26} y2={20 + i * 26} />
            ))}

            {chartType === "Line Chart" ? (
              <>
                <polyline fill="none" points={points} stroke="#4fd1ff" strokeLinecap="round" strokeWidth="4" />
                <polyline fill="none" points={points} stroke="#4f46e5" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="8" />
              </>
            ) : (
              monthlyData.map((value, index) => {
                const x = 28 + index * 68;
                const height = value * 22;
                return <rect key={labels[index]} fill="url(#barFill)" height={height} rx="6" width="34" x={x} y={280 - height} />;
              })
            )}

            <defs>
              <linearGradient id="barFill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>

            {labels.map((label, index) => (
              <text key={label} fill="#94a3b8" fontSize="12" textAnchor="middle" x={40 + index * 68} y="308">
                {label}
              </text>
            ))}
          </svg>
        </div>
      </section>
    </div>
  );
}
