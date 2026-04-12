"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { readPortalUser, type PortalUser } from "@/lib/portalAuth";

type PortalGuardProps = {
  children: (user: PortalUser) => ReactNode;
};

export function PortalGuard({ children }: PortalGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<PortalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = readPortalUser();

    if (!storedUser) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    setUser(storedUser);
    setLoading(false);
  }, [pathname, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  return <>{children(user)}</>;
}
