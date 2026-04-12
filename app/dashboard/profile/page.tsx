"use client";

import { useEffect, useState } from "react";
import { readPortalUser, writePortalUser, type PortalUser } from "@/lib/portalAuth";

export default function ProfilePage() {
  const [user, setUser] = useState<PortalUser | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = readPortalUser();
    setUser(storedUser);

    if (storedUser) {
      const nameParts = storedUser.fullName.split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" "));
      setEmail(storedUser.email);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) {
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }

    const updatedUser: PortalUser = {
      ...user,
      fullName: `${firstName} ${lastName}`.trim(),
      firstName: firstName.trim() || "Developer",
      email: email.trim().toLowerCase(),
      password: newPassword ? newPassword : user.password,
    };

    writePortalUser(updatedUser);
    setUser(updatedUser);
    setMessage("Profile updated successfully.");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-[#0b1222]/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="rounded-t-3xl bg-gradient-to-r from-[#2142b5] via-[#3558d8] to-[#26a6dd] p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/60 bg-white/20 text-4xl font-bold">
            {user?.firstName?.slice(0, 1).toUpperCase() || "D"}
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{user?.firstName || "Developer"}</h1>
            <p className="mt-1 text-sm text-blue-100 sm:text-base">{user?.email || "user@goaddress.io"}</p>
          </div>
        </div>
      </div>

      <form className="space-y-7 p-8" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-300" htmlFor="firstName">First Name</label>
            <input
              className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/50"
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              value={firstName}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-300" htmlFor="lastName">Last Name</label>
            <input
              className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/50"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              value={lastName}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-300" htmlFor="email">Email Address</label>
          <input
            className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/50"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />
        </div>

  <hr className="border-white/10" />

  <h2 className="text-2xl font-bold text-white">Change Password (optional)</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-300" htmlFor="newPassword">New Password</label>
            <input
              className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/50"
              id="newPassword"
              minLength={8}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Leave blank to keep current password"
              type="password"
              value={newPassword}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-300" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-slate-100 outline-none focus:border-cyan-300/50"
              id="confirmPassword"
              minLength={8}
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              value={confirmPassword}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className={`text-sm font-semibold ${message.includes("success") ? "text-emerald-300" : "text-rose-300"}`}>{message}</p>
          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
