// config/adSlots.ts
// Configuración de todos los slots publicitarios de Adsterra y AdSense

export type AdSlotId =
  // Desktop
  | "AD_TOP_LEADERBOARD"
  | "AD_AFTER_HERO"
  | "AD_BETWEEN_OFFERS_1"
  | "AD_BETWEEN_OFFERS_2"
  | "AD_SIDEBAR_TOP"
  | "AD_SIDEBAR_BOTTOM"
  | "AD_BEFORE_FOOTER"
  | "AD_FOOTER"
  // Mobile
  | "AD_MOBILE_TOP"
  | "AD_MOBILE_AFTER_HERO"
  | "AD_MOBILE_BETWEEN_OFFERS_1"
  | "AD_MOBILE_BETWEEN_OFFERS_2"
  | "AD_MOBILE_BEFORE_FOOTER"
  | "AD_MOBILE_STICKY";

export type AdType = "banner" | "native" | "social_bar" | "popunder" | "interstitial";

export interface AdSlotDefinition {
  id: AdSlotId;
  type: AdType;
  desktop: boolean;
  mobile: boolean;
  envKey: string;
  label: string;
}

export const ADSTERRA_CONFIG = {
  banner728x90Key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_KEY || "907186d5a8845926e388e50c77cdca81",
  banner320x50Key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_KEY || "bd7ac4794772bc2ee8985c92f84ac6d3",
  nativeContainerId: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_CONTAINER_ID || "container-73033babfb4767c65846699bd2a8866b",
  nativeScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_SCRIPT || "https://pl31783577.profitableratecpmnetwork.com/73033babfb4767c65846699bd2a8866b/invoke.js",
  socialBarScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SCRIPT || "https://pl31783576.profitableratecpmnetwork.com/f8/10/1e/f8101eb96ef4f77c15a01ffc39057722.js",
};

export const AD_SLOTS: AdSlotDefinition[] = [
  // Desktop
  { id: "AD_TOP_LEADERBOARD", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_TOP_CODE", label: "Desktop: Top Leaderboard" },
  { id: "AD_AFTER_HERO", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Desktop: Nach Hero" },
  { id: "AD_BETWEEN_OFFERS_1", type: "native", desktop: true, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Desktop/Mobile: Zwischen Angeboten 1" },
  { id: "AD_BETWEEN_OFFERS_2", type: "native", desktop: true, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Desktop/Mobile: Zwischen Angeboten 2" },
  { id: "AD_SIDEBAR_TOP", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Desktop: Sidebar oben" },
  { id: "AD_SIDEBAR_BOTTOM", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Desktop: Sidebar unten" },
  { id: "AD_BEFORE_FOOTER", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Desktop: Vor Footer" },
  { id: "AD_FOOTER", type: "native", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Desktop: Footer" },
  // Mobile
  { id: "AD_MOBILE_TOP", type: "banner", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_TOP_CODE", label: "Mobile: Oben" },
  { id: "AD_MOBILE_AFTER_HERO", type: "banner", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Mobile: Nach Hero" },
  { id: "AD_MOBILE_BETWEEN_OFFERS_1", type: "native", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Mobile: Zwischen Angeboten 1" },
  { id: "AD_MOBILE_BETWEEN_OFFERS_2", type: "native", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Mobile: Zwischen Angeboten 2" },
  { id: "AD_MOBILE_BEFORE_FOOTER", type: "banner", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Mobile: Vor Footer" },
  { id: "AD_MOBILE_STICKY", type: "banner", desktop: false, mobile: true, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Mobile: Sticky Banner" },
];

export function isAdsterraEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ADSTERRA_ENABLED !== "false";
}

export function getAdCode(envKey: string): string | null {
  const code = process.env[envKey];
  return code && code.trim().length > 0 ? code : null;
}
