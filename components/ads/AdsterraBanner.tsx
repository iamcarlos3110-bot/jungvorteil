"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AdsterraBannerProps {
  bannerKey: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Renders an Adsterra banner inside a same-origin iframe (/adframe/banner.html).
 * Each banner gets its own document, so the global `atOptions` and
 * `document.write` used by Adsterra's invoke.js work without collisions,
 * and the ad request comes from jungvorteil.ch.
 */
export default function AdsterraBanner({ bannerKey, width, height, className }: AdsterraBannerProps) {
  const src =
    width === 728 && height === 90
      ? "/adframe/banner-728x90.html"
      : width === 320 && height === 50
      ? "/adframe/banner-320x50.html"
      : `/adframe/banner.html?key=${encodeURIComponent(bannerKey)}&w=${width}&h=${height}`;

  return (
    <div
      className={cn("flex justify-center items-center my-3 overflow-hidden max-w-full", className)}
      style={{ minHeight: `${height}px` }}
    >
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ width: `${width}px`, height: `${height}px`, border: "none", overflow: "hidden", maxWidth: "100%" }}
        title="Werbung"
        scrolling="no"
        loading="lazy"
      />
    </div>
  );
}

interface ResponsiveBannerProps {
  desktopKey: string;
  mobileKey: string;
  className?: string;
}

/** Picks 728x90 on screens >= 768px and 320x50 otherwise, loading only one of them. */
export function ResponsiveAdsterraBanner({ desktopKey, mobileKey, className }: ResponsiveBannerProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) return <div style={{ minHeight: "50px" }} />;

  return isDesktop ? (
    <AdsterraBanner bannerKey={desktopKey} width={728} height={90} className={className} />
  ) : (
    <AdsterraBanner bannerKey={mobileKey} width={320} height={50} className={className} />
  );
}
