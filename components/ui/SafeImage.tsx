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
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return fallback ? <>{fallback}</> : null;
  }

  const isExternal = typeof src === "string" && src.startsWith("http");

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      unoptimized={isExternal}
      onError={() => setError(true)}
      {...props}
    />
  );
}
