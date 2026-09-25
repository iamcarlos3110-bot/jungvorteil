"use client";

import React from "react";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link in die Zwischenablage kopiert!");
      }).catch(() => {});
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-semibold transition cursor-pointer"
      type="button"
    >
      <Share2 className="w-4 h-4" /> Teilen
    </button>
  );
}
