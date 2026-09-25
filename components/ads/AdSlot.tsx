"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AdSlotId, AD_SLOTS, getAdCode } from "@/config/adSlots";
import AdSenseUnit from "./AdSenseUnit";

interface AdSlotProps {
  slot: AdSlotId;
  network?: "adsterra" | "adsense";
  adsenseSlotId?: string;
  type?: "banner" | "native" | "social_bar";
  className?: string;
  label?: boolean; // show 'WERBUNG' label
}

export default function AdSlot({
  slot,
  network = "adsterra",
  adsenseSlotId,
  className,
  label = true,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isEnabled = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === "true";
  const isDev = process.env.NODE_ENV === "development";

  const slotDef = AD_SLOTS.find((s) => s.id === slot);
  const adCode = slotDef ? getAdCode(slotDef.envKey) : null;

  useEffect(() => {
    if (network !== "adsterra" || !isEnabled || !adCode || !containerRef.current) return;

    // GDPR Check: verify user accepted advertising consent
    const hasConsent = typeof window !== "undefined" && localStorage.getItem("jv_advertising_consent") === "true";
    if (!hasConsent && !isDev) return;

    // Inject the real adCode into the container for Adsterra
    try {
      const container = containerRef.current;
      container.innerHTML = "";
      const fragment = document.createRange().createContextualFragment(adCode);
      container.appendChild(fragment);
    } catch (e) {
      console.error("Failed to inject ad for slot:", slot, e);
    }
  }, [slot, network, isEnabled, adCode, isDev]);

  if (network === "adsense") {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-1 my-4", className)}>
        {label && <span className="text-[10px] text-gray-400 font-semibold tracking-wider">WERBUNG</span>}
        <AdSenseUnit slotId={adsenseSlotId || "0000000000"} className="w-full" />
      </div>
    );
  }

  // Adsterra network rendering logic
  if (!isEnabled || !adCode) {
    if (isDev) {
      return (
        <div className={cn("text-[10px] text-gray-400 font-semibold tracking-wider p-2 border border-dashed border-gray-200 text-center bg-gray-50/50 my-2", className)}>
          DEV ADSTERRA SLOT: {slot}
        </div>
      );
    }
    return null;
  }

  return (
    <div className={cn("flex flex-col items-center justify-center gap-1 my-4", className)}>
      {label && <span className="text-[10px] text-gray-400 font-semibold tracking-wider">WERBUNG</span>}
      <div ref={containerRef} className="w-full ad-container-wrapper flex justify-center" />
    </div>
  );
}

