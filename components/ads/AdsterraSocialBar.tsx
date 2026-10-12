"use client";

import { useEffect } from "react";
import { ADSTERRA_CONFIG, isAdsterraEnabled } from "@/config/adSlots";

export default function AdsterraSocialBar() {
  useEffect(() => {
    if (!isAdsterraEnabled()) return;

    const isOptedOut =
      typeof window !== "undefined" &&
      localStorage.getItem("jv_advertising_consent") === "false";
    if (isOptedOut) return;

    const scriptSrc = ADSTERRA_CONFIG.socialBarScriptUrl;
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
