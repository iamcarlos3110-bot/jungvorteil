"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallback?: React.ReactNode;
}

export default function SafeImage({
  src,
  alt,
  fallback,
  className,
  unoptimized,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return fallback ? <>{fallback}</> : null;
  }

  // Optimize Unsplash images by attaching lightweight sizing if missing
  let finalSrc = typeof src === "string" ? src : "";
  if (typeof src === "string" && src.includes("images.unsplash.com") && !src.includes("w=")) {
    finalSrc = `${src}${src.includes("?") ? "&" : "?"}w=600&auto=format&fit=crop&q=80`;
  } else if (typeof src !== "string") {
    finalSrc = src as unknown as string;
  }

  return (
    <Image
      src={finalSrc || src}
      alt={alt}
      className={className}
      unoptimized={unoptimized ?? false}
      onError={() => setError(true)}
      {...props}
    />
  );
}

