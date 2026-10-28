// lib/premium.ts
// Gestor del estado de suscripción Premium en cliente y Supabase

export interface PremiumState {
  isPremium: boolean;
  tier: "free" | "pro";
  activatedAt: string | null;
  expiresAt: string | null;
  unlockedFeatures: string[];
}

const PREMIUM_STORAGE_KEY = "autotheorie_premium_pass_v1";

export function getPremiumStatus(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(PREMIUM_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed.isPremium);
  } catch {
    return false;
  }
}

export function activatePremiumPass(codeOrTxId?: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const state: PremiumState = {
      isPremium: true,
      tier: "pro",
      activatedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 3 months access
      unlockedFeatures: [
        "all_600_questions",
        "trap_questions_mode",
        "ad_free_study",
        "unlimited_simulator",
        "twint_fast_support",
        "pass_guarantee",
      ],
    };
    localStorage.setItem(PREMIUM_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("premium_status_changed"));
    return true;
  } catch {
    return false;
  }
}

export function cancelPremiumPass(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(PREMIUM_STORAGE_KEY);
    window.dispatchEvent(new Event("premium_status_changed"));
  } catch {}
}

// Global browser console helpers for testing
if (typeof window !== "undefined") {
  (window as unknown as { cancelPremium?: () => void; activatePremium?: () => void; getPremiumStatus?: () => boolean }).cancelPremium = cancelPremiumPass;
  (window as unknown as { activatePremium?: () => void }).activatePremium = () => activatePremiumPass("dev_test");
  (window as unknown as { getPremiumStatus?: () => boolean }).getPremiumStatus = getPremiumStatus;
}
