"use client";

import { useMemo } from "react";
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
  const htmlContent = useMemo(() => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${bannerKey}',
      'format' : 'iframe',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://www.highrevenueformat.com/${bannerKey}/invoke.js"></script>
</body>
</html>`;
  }, [bannerKey, width, height]);

  return (
    <div className={cn("flex justify-center items-center overflow-hidden my-2", className)}>
      <iframe
        srcDoc={htmlContent}
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
        loading="lazy"
      />
    </div>
  );
}
