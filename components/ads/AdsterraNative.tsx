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
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !wrapperRef.current) return;

    // Check opt-out (only block if user explicitly rejected advertising cookies)
    const isOptedOut =
      typeof window !== "undefined" &&
      localStorage.getItem("jv_advertising_consent") === "false";

    if (isOptedOut) return;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    wrapperRef.current.appendChild(script);
    loadedRef.current = true;
  }, [scriptUrl]);

  return (
    <div ref={wrapperRef} className={cn("my-6 w-full flex flex-col items-center justify-center", className)}>
      <div id={containerId} className="w-full max-w-4xl min-h-[100px]" />
    </div>
  );
}
