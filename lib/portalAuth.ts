export const PORTAL_USER_STORAGE_KEY = "goaddress.portal.user";

export type PortalUser = {
  fullName: string;
  firstName: string;
  email: string;
  password: string;
  plan: string;
  dailyLimit: number;
};

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function readPortalUser(): PortalUser | null {
  if (!canUseStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(PORTAL_USER_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as PortalUser;
  } catch {
    return null;
  }
}

export function writePortalUser(user: PortalUser) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(PORTAL_USER_STORAGE_KEY, JSON.stringify(user));
}

export function clearPortalUser() {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(PORTAL_USER_STORAGE_KEY);
}
