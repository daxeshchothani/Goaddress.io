"use client";

import type { ReactNode } from "react";
import { PortalGuard } from "@/components/dashboard/PortalGuard";
import { PortalSidebar } from "@/components/dashboard/PortalSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PortalGuard>
      {(user) => (
        <div className="min-h-screen bg-[#f4f8ff] text-slate-900">
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
            <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl" />
          </div>

          <div className="relative mx-auto flex w-full max-w-[1540px]">
            <PortalSidebar user={user} />
            <div className="flex min-h-screen flex-1 flex-col">
              <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">{children}</main>
              <footer className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500 sm:px-8">
                © 2026 goaddress — The fastest UK address lookup engine
              </footer>
            </div>
          </div>
        </div>
      )}
    </PortalGuard>
  );
}
