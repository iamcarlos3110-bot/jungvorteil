import React from "react";
import { 
  Utensils, 
  Laptop, 
  Shirt, 
  Train, 
  Film, 
  Dumbbell, 
  GraduationCap, 
  PiggyBank, 
  HeartPulse, 
  Sparkles, 
  Plane, 
  Wine, 
  ShoppingBag, 
  Palette, 
  Home,
  Tag
} from "lucide-react";

export interface CategoryStyle {
  icon: React.ReactNode;
  bg: string;
  text: string;
  badgeBg: string;
}

export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  food: {
    icon: <Utensils className="w-7 h-7" />,
    bg: "bg-amber-50 text-amber-600 border-amber-200/80 group-hover:bg-amber-600 group-hover:text-white",
    text: "text-amber-700",
    badgeBg: "bg-amber-100 text-amber-800"
  },
  tech: {
    icon: <Laptop className="w-7 h-7" />,
    bg: "bg-blue-50 text-blue-600 border-blue-200/80 group-hover:bg-blue-600 group-hover:text-white",
    text: "text-blue-700",
    badgeBg: "bg-blue-100 text-blue-800"
  },
  fashion: {
    icon: <Shirt className="w-7 h-7" />,
    bg: "bg-pink-50 text-pink-600 border-pink-200/80 group-hover:bg-pink-600 group-hover:text-white",
    text: "text-pink-700",
    badgeBg: "bg-pink-100 text-pink-800"
  },
  mobility: {
    icon: <Train className="w-7 h-7" />,
    bg: "bg-emerald-50 text-emerald-600 border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white",
    text: "text-emerald-700",
    badgeBg: "bg-emerald-100 text-emerald-800"
  },
  entertainment: {
    icon: <Film className="w-7 h-7" />,
    bg: "bg-purple-50 text-purple-600 border-purple-200/80 group-hover:bg-purple-600 group-hover:text-white",
    text: "text-purple-700",
    badgeBg: "bg-purple-100 text-purple-800"
  },
  fitness: {
    icon: <Dumbbell className="w-7 h-7" />,
    bg: "bg-red-50 text-red-600 border-red-200/80 group-hover:bg-red-600 group-hover:text-white",
    text: "text-red-700",
    badgeBg: "bg-red-100 text-red-800"
  },
  education: {
    icon: <GraduationCap className="w-7 h-7" />,
    bg: "bg-[#EAF0E5] text-[#3F5E39] border-[#D6E2CE] group-hover:bg-[#3F5E39] group-hover:text-white",
    text: "text-[#3F5E39]",
    badgeBg: "bg-[#EAF0E5] text-[#3F5E39]"
  },
  finance: {
    icon: <PiggyBank className="w-7 h-7" />,
    bg: "bg-green-50 text-green-600 border-green-200/80 group-hover:bg-green-600 group-hover:text-white",
    text: "text-green-700",
    badgeBg: "bg-green-100 text-green-800"
  },
  health: {
    icon: <HeartPulse className="w-7 h-7" />,
    bg: "bg-rose-50 text-rose-600 border-rose-200/80 group-hover:bg-rose-600 group-hover:text-white",
    text: "text-rose-700",
    badgeBg: "bg-rose-100 text-rose-800"
  },
  beauty: {
    icon: <Sparkles className="w-7 h-7" />,
    bg: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200/80 group-hover:bg-fuchsia-600 group-hover:text-white",
    text: "text-fuchsia-700",
    badgeBg: "bg-fuchsia-100 text-fuchsia-800"
  },
  travel: {
    icon: <Plane className="w-7 h-7" />,
    bg: "bg-sky-50 text-sky-600 border-sky-200/80 group-hover:bg-sky-600 group-hover:text-white",
    text: "text-sky-700",
    badgeBg: "bg-sky-100 text-sky-800"
  },
  nightlife: {
    icon: <Wine className="w-7 h-7" />,
    bg: "bg-violet-50 text-violet-600 border-violet-200/80 group-hover:bg-violet-600 group-hover:text-white",
    text: "text-violet-700",
    badgeBg: "bg-violet-100 text-violet-800"
  },
  shopping: {
    icon: <ShoppingBag className="w-7 h-7" />,
    bg: "bg-teal-50 text-teal-600 border-teal-200/80 group-hover:bg-teal-600 group-hover:text-white",
    text: "text-teal-700",
    badgeBg: "bg-teal-100 text-teal-800"
  },
  culture: {
    icon: <Palette className="w-7 h-7" />,
    bg: "bg-amber-50 text-amber-700 border-amber-200/80 group-hover:bg-amber-700 group-hover:text-white",
    text: "text-amber-800",
    badgeBg: "bg-amber-100 text-amber-900"
  },
  home: {
    icon: <Home className="w-7 h-7" />,
    bg: "bg-indigo-50 text-indigo-600 border-indigo-200/80 group-hover:bg-indigo-600 group-hover:text-white",
    text: "text-indigo-700",
    badgeBg: "bg-indigo-100 text-indigo-800"
  }
};

export function getCategoryIconStyle(slug: string): CategoryStyle {
  return CATEGORY_STYLES[slug] || {
    icon: <Tag className="w-7 h-7" />,
    bg: "bg-[#EAF0E5] text-[#3F5E39] border-[#D6E2CE] group-hover:bg-[#3F5E39] group-hover:text-white",
    text: "text-[#3F5E39]",
    badgeBg: "bg-[#EAF0E5] text-[#3F5E39]"
  };
}
