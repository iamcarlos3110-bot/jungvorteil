import { cn } from "@/lib/utils";

export type OfferTag =
  | "NEU"
  | "HEUTE"
  | "BELIEBT"
  | "STUDENTEN"
  | "UNTER_25"
  | "UNTER_30"
  | "GRATIS"
  | "ONLINE"
  | "SCHWEIZWEIT"
  | "GESPONSERT";

interface BadgeProps {
  tag: OfferTag | "DEMO";
  className?: string;
}

const tagStyles: Record<OfferTag | "DEMO", string> = {
  NEU: "bg-green-100 text-green-700 animate-pulse",
  HEUTE: "bg-orange-100 text-orange-700",
  BELIEBT: "bg-purple-100 text-purple-700",
  STUDENTEN: "bg-blue-100 text-blue-700",
  UNTER_25: "bg-teal-100 text-teal-700",
  UNTER_30: "bg-indigo-100 text-indigo-700",
  GRATIS: "bg-emerald-100 text-emerald-700",
  ONLINE: "bg-sky-100 text-sky-700",
  SCHWEIZWEIT: "bg-gray-100 text-gray-700",
  GESPONSERT: "bg-amber-50 text-amber-700 border border-amber-300",
  DEMO: "bg-red-50 text-red-700 border border-red-300",
};

export default function Badge({ tag, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full",
        tagStyles[tag] || "bg-gray-100 text-gray-700",
        className
      )}
    >
      {tag}
    </span>
  );
}
