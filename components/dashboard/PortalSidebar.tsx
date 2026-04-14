"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeftOnRectangleIcon,
  BeakerIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  HomeIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { clearPortalUser, type PortalUser } from "@/lib/portalAuth";

const portalNavLinks = [
  { label: "Usage Analytics", href: "/dashboard/usage-analytics", Icon: ChartBarIcon },
  { label: "Dashboard", href: "/dashboard", Icon: HomeIcon },
  { label: "Profile", href: "/dashboard/profile", Icon: UserCircleIcon },
  { label: "Plans", href: "/dashboard/plans", Icon: WalletIcon },
  { label: "Document", href: "/docs", Icon: ClipboardDocumentIcon },
  { label: "API Testing", href: "/dashboard/api-testing", Icon: BeakerIcon },
];

type PortalSidebarProps = {
  user: PortalUser;
};

export function PortalSidebar({ user }: PortalSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="sticky top-0 hidden h-screen w-full max-w-[256px] flex-col border-r border-slate-200 bg-white/90 backdrop-blur-xl lg:flex">
      <a className="flex items-center border-b border-slate-200 px-5 py-5" href="/">
        <Image alt="GoAddress" className="h-auto w-[160px]" height={526} src="/assets/goaddress-logo.svg" width={2048} />
      </a>

      <nav className="px-3 py-6">
        <ul className="space-y-2">
          {portalNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <a
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#2a3fcf] to-[#2f63df] text-white shadow-[0_8px_24px_rgba(44,95,223,0.45)]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  href={link.href}
                >
                  <link.Icon className="h-4 w-4 flex-none" />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-slate-200 px-3 py-4">
        <p className="truncate px-3 text-xs font-medium text-slate-500">{user.email}</p>
        <button
          className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-red-300 transition-colors hover:bg-red-500/10 hover:text-red-200"
          onClick={() => {
            clearPortalUser();
            router.push("/register");
          }}
          type="button"
        >
          <ArrowLeftOnRectangleIcon className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
