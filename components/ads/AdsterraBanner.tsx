"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AdsterraBannerProps {
  bannerKey: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdsterraBanner({
  bannerKey,
  width,
  height,
  className,
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check opt-out
    const isOptedOut =
      typeof window !== "undefined" &&
      localStorage.getItem("jv_advertising_consent") === "false";
    if (isOptedOut) return;

    // Reset container
    container.innerHTML = "";

    const confScript = document.createElement("script");
    confScript.type = "text/javascript";
    confScript.text = `
      atOptions = {
        'key' : '${bannerKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = `https://www.highrevenueformat.com/${bannerKey}/invoke.js`;

    container.appendChild(confScript);
    container.appendChild(invokeScript);
  }, [bannerKey, width, height]);

  return (
    <div
      ref={containerRef}
      className={cn("flex justify-center items-center my-3 overflow-hidden", className)}
      style={{ minHeight: `${height}px` }}
    />
  );
}
