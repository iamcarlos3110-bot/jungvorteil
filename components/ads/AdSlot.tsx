"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { AdSlotId, AD_SLOTS, getAdCode } from "@/config/adSlots";

interface AdSlotProps {
  slot: AdSlotId;
  type?: "banner" | "native" | "social_bar";
  className?: string;
  label?: boolean; // show 'WERBUNG' label
}

export default function AdSlot({ slot, className, label = true }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isEnabled = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === 'true';
  const isDev = process.env.NODE_ENV === 'development';

  const slotDef = AD_SLOTS.find(s => s.id === slot);
  const adCode = slotDef ? getAdCode(slotDef.envKey) : null;

  useEffect(() => {
    if (!isEnabled || !adCode || !containerRef.current) return;
    
    // Inject the real adCode into the container
    try {
      const container = containerRef.current;
      // We clear it first just in case
      container.innerHTML = "";
      
      // If code contains script tags, we might need a safer injection approach,
      // but for now dangerouslySetInnerHTML or creating context is standard.
      // Easiest is to set innerHTML and re-evaluate scripts if needed.
      const fragment = document.createRange().createContextualFragment(adCode);
      container.appendChild(fragment);
    } catch (e) {
      console.error("Failed to inject ad for slot:", slot, e);
    }
  }, [slot, isEnabled, adCode]);

  if (!isEnabled || !adCode) {
    if (isDev) {
      return (
        <div className={cn("text-[10px] text-gray-400 font-semibold tracking-wider p-2 border border-dashed border-gray-200 text-center bg-gray-50/50 my-2", className)}>
          DEV AD SLOT: {slot}
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
