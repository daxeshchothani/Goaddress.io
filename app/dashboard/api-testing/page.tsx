"use client";

import { useState } from "react";

function EndpointRow({
  title,
  base,
  placeholder,
}: {
  title: string;
  base: string;
  placeholder: string;
}) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <code className="text-xs text-slate-500 sm:text-sm">{base}</code>
        <input
          className="h-12 flex-1 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-800 outline-none focus:border-cyan-300/50"
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        <button
          className="h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-7 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          onClick={() => {
            const encoded = encodeURIComponent(value.trim() || placeholder);
            setResult(`${base}${encoded}`);
          }}
          type="button"
        >
          Send
        </button>
      </div>

      {result ? (
        <p className="rounded-xl border border-cyan-300/30 bg-cyan-50 px-4 py-3 font-mono text-xs text-cyan-800 sm:text-sm">Request URL: {result}</p>
      ) : null}
    </div>
  );
}

export default function ApiTestingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur-xl">
      <div className="rounded-t-3xl bg-gradient-to-r from-[#2142b5] via-[#3558d8] to-[#26a6dd] p-8 text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">API Testing</h1>
        <p className="mt-3 text-sm text-blue-100 sm:text-base">Test the GoAddress API directly from your browser.</p>
      </div>

      <div className="space-y-8 p-8">
        <EndpointRow title="GET Address By Postcode" base="https://portal.goaddress.io/api/address/" placeholder="postcode" />
        <hr className="border-slate-200" />
        <EndpointRow title="Search Address" base="https://portal.goaddress.io/api/address/search?q=" placeholder="query" />
        <hr className="border-slate-200" />
        <EndpointRow title="Search Address + Postcode" base="https://portal.goaddress.io/api/address/search?q=" placeholder="query&postcode=NW3%202RT" />
      </div>
    </div>
  );
}
