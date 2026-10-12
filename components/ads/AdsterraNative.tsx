"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AdsterraNativeProps {
  containerId?: string;
  scriptUrl?: string;
  className?: string;
}

export default function AdsterraNative({
  containerId = "container-73033babfb4767c65846699bd2a8866b",
  scriptUrl = "https://pl31783577.profitableratecpmnetwork.com/73033babfb4767c65846699bd2a8866b/invoke.js",
  className,
}: AdsterraNativeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isOptedOut =
      typeof window !== "undefined" &&
      localStorage.getItem("jv_advertising_consent") === "false";
    if (isOptedOut) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    if (container.hasAttribute("data-ad-loaded")) return;
    container.setAttribute("data-ad-loaded", "true");

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);
  }, [containerId, scriptUrl]);

  return (
    <div ref={wrapperRef} className={cn("my-6 w-full flex flex-col items-center justify-center", className)}>
      <div id={containerId} className="w-full max-w-4xl min-h-[100px]" />
    </div>
  );
}
