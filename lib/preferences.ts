// lib/preferences.ts
// User preferences via localStorage (no account required)
import { UserPreferences } from "@/types";

const PREFS_KEY = "jv_preferences";

export function getPreferences(): UserPreferences {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function savePreferences(prefs: Partial<UserPreferences>): void {
  const current = getPreferences();
  const updated = { ...current, ...prefs };
  localStorage.setItem(PREFS_KEY, JSON.stringify(updated));
}

export function clearPreferences(): void {
  localStorage.removeItem(PREFS_KEY);
}
