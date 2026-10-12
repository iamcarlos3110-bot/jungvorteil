"use client";

import { cn } from "@/lib/utils";
import { AdSlotId, AD_SLOTS, ADSTERRA_CONFIG, isAdsterraEnabled } from "@/config/adSlots";
import AdSenseUnit from "./AdSenseUnit";
import AdsterraBanner from "./AdsterraBanner";
import AdsterraNative from "./AdsterraNative";

interface AdSlotProps {
  slot: AdSlotId;
  network?: "adsterra" | "adsense" | "auto";
  adsenseSlotId?: string;
  type?: "banner" | "native" | "social_bar";
  className?: string;
  label?: boolean; // show 'WERBUNG' label
}

export default function AdSlot({
  slot,
  network = "auto",
  adsenseSlotId,
  className,
  label = true,
}: AdSlotProps) {
  const adsterraActive = isAdsterraEnabled();
  const isDev = process.env.NODE_ENV === "development";

  // Determine active network:
  // If explicitly 'adsterra', or 'auto' when adsterra is enabled, use adsterra.
  // Otherwise use adsense if adsense client ID exists.
  const activeNetwork =
    network === "adsterra" || (network === "auto" && adsterraActive)
      ? "adsterra"
      : network === "adsense"
      ? "adsense"
      : process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
      ? "adsense"
      : null;

  const slotDef = AD_SLOTS.find((s) => s.id === slot);

  if (activeNetwork === "adsense") {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-1 my-4", className)}>
        {label && <span className="text-[10px] text-gray-400 font-semibold tracking-wider">WERBUNG</span>}
        <AdSenseUnit slotId={adsenseSlotId || "0000000000"} className="w-full" />
      </div>
    );
  }

  if (activeNetwork === "adsterra") {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-1 my-4", className)}>
        {label && <span className="text-[10px] text-gray-400 font-semibold tracking-wider">WERBUNG</span>}
        
        {slotDef?.type === "native" ? (
          <AdsterraNative
            containerId={ADSTERRA_CONFIG.nativeContainerId}
            scriptUrl={ADSTERRA_CONFIG.nativeScriptUrl}
          />
        ) : slotDef?.mobile && !slotDef?.desktop ? (
          <AdsterraBanner
            bannerKey={ADSTERRA_CONFIG.banner320x50Key}
            width={320}
            height={50}
          />
        ) : slotDef?.desktop && !slotDef?.mobile ? (
          <AdsterraBanner
            bannerKey={ADSTERRA_CONFIG.banner728x90Key}
            width={728}
            height={90}
          />
        ) : (
          <>
            <div className="hidden md:block">
              <AdsterraBanner
                bannerKey={ADSTERRA_CONFIG.banner728x90Key}
                width={728}
                height={90}
              />
            </div>
            <div className="block md:hidden">
              <AdsterraBanner
                bannerKey={ADSTERRA_CONFIG.banner320x50Key}
                width={320}
                height={50}
              />
            </div>
          </>
        )}
      </div>
    );
  }

  if (isDev) {
    return (
      <div className={cn("text-[10px] text-gray-400 font-semibold tracking-wider p-2 border border-dashed border-gray-200 text-center bg-gray-50/50 my-2", className)}>
        DEV AD SLOT: {slot} (No network enabled)
      </div>
    );
  }

  return null;
}
