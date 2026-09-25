"use client";

import React from "react";

interface ResetCookieConsentButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResetCookieConsentButton({
  className = "text-[#3F5E39] font-semibold underline cursor-pointer",
  children = "Cookie-Einstellungen öffnen",
}: ResetCookieConsentButtonProps) {
  const handleReset = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jv_cookie_consent");
      localStorage.removeItem("jv_analytics_consent");
      localStorage.removeItem("jv_advertising_consent");
      window.location.reload();
    }
  };

  return (
    <button onClick={handleReset} className={className} type="button">
      {children}
    </button>
  );
}
