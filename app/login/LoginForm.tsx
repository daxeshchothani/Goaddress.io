"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { readPortalUser } from "@/lib/portalAuth";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = readPortalUser();
    if (user) {
      router.replace(nextPath);
    }
  }, [nextPath, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const user = readPortalUser();
    if (!user) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (user.email !== email.trim().toLowerCase() || user.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    router.push(nextPath);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#cde7ff] via-[#4a9be8] to-[#1b56a8] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-[#1d2b44] p-8 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <Image alt="GoAddress" className="h-auto w-[250px]" height={526} src="/assets/goaddress-logo.svg" width={2048} />
        </div>

        <h1 className="text-center text-4xl font-bold text-white">Welcome back</h1>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="email">
              Email Address
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-600 bg-slate-700 px-4 text-white outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              type="email"
              value={email}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300" htmlFor="password">
              Password
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-600 bg-slate-700 px-4 text-white outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              required
              type="password"
              value={password}
            />
          </div>

          {error ? <p className="text-sm font-medium text-red-400">{error}</p> : null}

          <button
            className="h-12 w-full rounded-xl bg-indigo-600 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          New here?{" "}
          <a className="font-semibold text-indigo-300 hover:text-indigo-200" href="/register">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}
