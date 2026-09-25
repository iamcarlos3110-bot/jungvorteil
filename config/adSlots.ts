// config/adSlots.ts
// Configuración de todos los slots publicitarios de Adsterra

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
  envKey: string; // key in process.env
  label: string; // label shown in admin
}

export const AD_SLOTS: AdSlotDefinition[] = [
  // Desktop
  { id: "AD_TOP_LEADERBOARD", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_TOP_CODE", label: "Desktop: Top Leaderboard" },
  { id: "AD_AFTER_HERO", type: "banner", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_BANNER_INLINE_CODE", label: "Desktop: Nach Hero" },
  { id: "AD_BETWEEN_OFFERS_1", type: "native", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Desktop: Zwischen Angeboten 1" },
  { id: "AD_BETWEEN_OFFERS_2", type: "native", desktop: true, mobile: false, envKey: "NEXT_PUBLIC_ADSTERRA_NATIVE_CODE", label: "Desktop: Zwischen Angeboten 2" },
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
  return process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === "true";
}

export function getAdCode(envKey: string): string | null {
  const code = process.env[envKey];
  return code && code.trim().length > 0 ? code : null;
}
