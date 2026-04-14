"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { readPortalUser, writePortalUser } from "@/lib/portalAuth";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = readPortalUser();
    if (user) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !password) {
      setError("Please fill out all required fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const firstName = trimmedName.split(" ")[0] || "Developer";

    writePortalUser({
      fullName: trimmedName,
      firstName,
      email: trimmedEmail,
      password,
      plan: "Free Trial",
      dailyLimit: 50,
    });

    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#edf4ff] via-[#dbe9ff] to-[#f6fbff] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(37,99,235,0.12)]">
        <div className="mb-6 flex justify-center">
          <Image alt="GoAddress" className="h-auto w-[250px]" height={526} src="/assets/goaddress-logo.svg" width={2048} />
        </div>

        <h1 className="text-center text-4xl font-bold text-slate-900">Create your account</h1>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="fullName"
              onChange={(event) => setFullName(event.target.value)}
              placeholder="John Doe"
              required
              type="text"
              value={fullName}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600" htmlFor="email">
              Email Address
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              type="email"
              value={email}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600" htmlFor="password">
              Password
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="password"
              minLength={8}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Minimum 8 characters"
              required
              type="password"
              value={password}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-400"
              id="confirmPassword"
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm password"
              required
              type="password"
              value={confirmPassword}
            />
          </div>

          {error ? <p className="text-sm font-medium text-red-400">{error}</p> : null}

          <button
            className="h-12 w-full rounded-xl bg-indigo-600 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
            type="submit"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a className="font-semibold text-indigo-300 hover:text-indigo-200" href="/login">
            Sign in here
          </a>
        </p>
      </div>
    </main>
  );
}
