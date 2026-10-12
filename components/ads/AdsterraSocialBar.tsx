"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { ADSTERRA_CONFIG, isAdsterraEnabled } from "@/config/adSlots";

export default function AdsterraSocialBar() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    // Only block if user explicitly opted out
    const isOptedOut =
      typeof window !== "undefined" &&
      localStorage.getItem("jv_advertising_consent") === "false";

    if (!isOptedOut) {
      setCanLoad(true);
    }

    const handleConsent = () => {
      const optedOut = localStorage.getItem("jv_advertising_consent") === "false";
      setCanLoad(!optedOut);
    };

    window.addEventListener("jv_consent_updated", handleConsent);
    window.addEventListener("storage", handleConsent);
    return () => {
      window.removeEventListener("jv_consent_updated", handleConsent);
      window.removeEventListener("storage", handleConsent);
    };
  }, []);

  const isEnabled = isAdsterraEnabled();
  if (!isEnabled || !canLoad) return null;

  return (
    <Script
      src={ADSTERRA_CONFIG.socialBarScriptUrl}
      strategy="afterInteractive"
    />
  );
}
