"use client";

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
  const iframeSrc = `https://www.highrevenueformat.com/watchnew?key=${bannerKey}`;

  return (
    <div
      className={cn(
        "flex justify-center items-center my-3 overflow-hidden",
        className
      )}
      style={{ minHeight: `${height}px`, minWidth: `${width}px` }}
    >
      <iframe
        src={iframeSrc}
        width={width}
        height={height}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: "none",
          overflow: "hidden",
        }}
        title="Werbung"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
}
