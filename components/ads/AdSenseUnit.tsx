"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSenseUnitProps {
  slotId?: string;
  className?: string;
  format?: string;
  responsive?: boolean;
}

export default function AdSenseUnit({
  slotId = "0000000000",
  className,
  format = "auto",
  responsive = true,
}: AdSenseUnitProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const initialized = useRef(false);

  useEffect(() => {
    if (!clientId || initialized.current) return;

    // Verify GDPR consent before executing push
    const hasConsent = typeof window !== "undefined" && localStorage.getItem("jv_advertising_consent") === "true";
    if (!hasConsent && process.env.NODE_ENV !== "development") {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      initialized.current = true;
    } catch (e) {
      console.error("AdSense push error:", e);
    }
  }, [clientId]);

  if (!clientId) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className={cn("text-[10px] text-emerald-700 font-mono font-semibold tracking-wider p-3 border border-dashed border-emerald-300 text-center bg-emerald-50/50 my-3 rounded-xl", className)}>
          [ADSENSE DEV SLOT] Client ID not set (NEXT_PUBLIC_ADSENSE_CLIENT_ID) | Slot: {slotId}
        </div>
      );
    }
    return null;
  }

  return (
    <ins
      className={cn("adsbygoogle", className)}
      style={{ display: "block" }}
      data-ad-client={clientId}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
