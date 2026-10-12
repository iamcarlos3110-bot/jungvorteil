"use client";

import { cn } from "@/lib/utils";

interface AdsterraNativeProps {
  nativeKey?: string;
  containerId?: string;
  scriptUrl?: string;
  className?: string;
}

export default function AdsterraNative({
  nativeKey = "73033babfb4767c65846699bd2a8866b",
  className,
}: AdsterraNativeProps) {
  const iframeSrc = `https://pl31783577.profitableratecpmnetwork.com/watchnew?key=${nativeKey}`;

  return (
    <div
      className={cn(
        "my-6 w-full flex flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <iframe
        src={iframeSrc}
        width="100%"
        height="180"
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "180px",
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
