"use client";

import { cn } from "@/lib/utils";

interface AdsterraNativeProps {
  className?: string;
  height?: number;
}

/**
 * Renders the Adsterra native banner inside a same-origin iframe (/adframe/native.html).
 * Adsterra's native code requires a unique container id per document, so isolating
 * it in an iframe allows several native slots on the same page.
 */
export default function AdsterraNative({ className, height = 300 }: AdsterraNativeProps) {
  return (
    <div className={cn("my-6 w-full flex justify-center overflow-hidden", className)}>
      <iframe
        src="/adframe/native.html"
        style={{ width: "100%", maxWidth: "900px", height: `${height}px`, border: "none", overflow: "hidden" }}
        title="Werbung"
        scrolling="no"
        loading="lazy"
      />
    </div>
  );
}
