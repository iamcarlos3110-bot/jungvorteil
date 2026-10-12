"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { ADSTERRA_CONFIG } from "@/config/adSlots";

export default function AdsterraSocialBar() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    // Check user consent (GDPR)
    const hasConsent = typeof window !== "undefined" && localStorage.getItem("jv_advertising_consent") === "true";
    if (hasConsent || process.env.NODE_ENV === "development") {
      setCanLoad(true);
    }
  }, []);

  const isEnabled = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED === "true";
  if (!isEnabled || !canLoad) return null;

  return (
    <Script
      src={ADSTERRA_CONFIG.socialBarScriptUrl}
      strategy="afterInteractive"
    />
  );
}
