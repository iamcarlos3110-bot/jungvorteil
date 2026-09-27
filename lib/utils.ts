// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, isPast, isWithinInterval, addDays } from "date-fns";
import { de } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date | null, formatStr = "dd.MM.yyyy"): string {
  if (!date) return "";
  try {
    return format(new Date(date), formatStr, { locale: de });
  } catch {
    return "";
  }
}

export function formatRelativeDate(date: string | Date | null): string {
  if (!date) return "";
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: de });
  } catch {
    return "";
  }
}

export function isExpired(endDate: string | null): boolean {
  if (!endDate) return false;
  return isPast(new Date(endDate));
}

export function isExpiringSoon(endDate: string | null, days = 7): boolean {
  if (!endDate) return false;
  const end = new Date(endDate);
  if (isPast(end)) return false;
  return isWithinInterval(end, { start: new Date(), end: addDays(new Date(), days) });
}

export function formatCHF(amount: number | null): string {
  if (amount === null || amount === undefined) return "";
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPercent(value: number | null): string {
  if (value === null || value === undefined) return "";
  return `${value}%`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

export function getDeviceCategory(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getSavingDisplay(
  discountPercent: number | null,
  discountAmount: number | null,
  normalPrice: number | null,
  youngPrice: number | null,
  advantageType?: string | null
): string {
  if (advantageType === "free") return "Kostenlos";
  if (advantageType === "special_rate") return "Staatliche Unterstützung";
  if (advantageType === "cashback" && discountAmount) return `Bis zu CHF ${discountAmount} Cashback`;
  if (discountPercent && discountPercent < 100) return `${discountPercent}% Rabatt`;
  if (discountAmount) return `CHF ${discountAmount} Rabatt`;
  if (normalPrice && youngPrice) {
    const diff = normalPrice - youngPrice;
    if (diff > 0) return `${formatCHF(diff)} Ersparnis`;
  }
  return "";
}

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
