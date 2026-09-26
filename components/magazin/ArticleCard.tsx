"use client";
import Link from "next/link";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import SafeImage from "@/components/ui/SafeImage";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";
import { useState } from "react";

interface ArticleCardProps {
  article: Article;
  locale?: string;
}

// Category color themes
const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "sparen": { bg: "bg-emerald-50 border-emerald-200/80", text: "text-emerald-700", dot: "bg-emerald-500" },
  "finanzen": { bg: "bg-sky-50 border-sky-200/80", text: "text-sky-700", dot: "bg-sky-500" },
  "reisen": { bg: "bg-amber-50 border-amber-200/80", text: "text-amber-700", dot: "bg-amber-500" },
  "bildung": { bg: "bg-violet-50 border-violet-200/80", text: "text-violet-700", dot: "bg-violet-500" },
  "tech": { bg: "bg-blue-50 border-blue-200/80", text: "text-blue-700", dot: "bg-blue-500" },
  "essen": { bg: "bg-orange-50 border-orange-200/80", text: "text-orange-700", dot: "bg-orange-500" },
  "gesundheit": { bg: "bg-rose-50 border-rose-200/80", text: "text-rose-700", dot: "bg-rose-500" },
};

function getCategoryStyle(slug?: string) {
  if (!slug) return CATEGORY_COLORS["sparen"];
  const key = Object.keys(CATEGORY_COLORS).find(k => slug.toLowerCase().includes(k));
  return CATEGORY_COLORS[key ?? "sparen"];
}

function estimateReadingTime(text?: string): number {
  if (!text) return 3;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// Gradient fallback per first letter
const ARTICLE_GRADIENTS = [
  "from-[#0D1F0B] to-[#2E4D28]",
  "from-[#0c1a2e] to-[#1e3a6e]",
  "from-[#2d0a3a] to-[#5b21a3]",
  "from-[#1a0a00] to-[#7c2d12]",
  "from-[#082b25] to-[#0e7a5e]",
  "from-[#1a1a00] to-[#6b5c00]",
];

export default function ArticleCard({ article, locale = "de" }: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const categoryName = typeof article.category === "object" && article.category !== null
    ? (article.category as { name_de?: string; slug?: string }).name_de || (article.category as { slug?: string }).slug
    : (article.category ?? undefined);

  const categorySlug = typeof article.category === "object" && article.category !== null
    ? (article.category as { slug?: string }).slug
    : (article.category ?? undefined);

  const catStyle = getCategoryStyle(categorySlug);
  const readingTime = estimateReadingTime(article.excerpt ?? undefined);
  const gradientIndex = (article.title?.charCodeAt(0) ?? 65) % ARTICLE_GRADIENTS.length;
  const gradient = ARTICLE_GRADIENTS[gradientIndex];

  return (
    <Link
      href={`/${locale}/magazin/${article.slug}`}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden h-full cursor-pointer"
      style={{
        border: "1px solid rgba(216,227,213,0.8)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // @ts-ignore - inline style transition on hover via CSS class
    >
      {/* Cover image */}
      <div className="relative w-full h-52 overflow-hidden shrink-0">
        {article.image_url ? (
          <SafeImage
            src={article.image_url}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
            fallback={
              <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <BookOpen className="w-12 h-12 text-white/30" />
              </div>
            }
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <BookOpen className="w-12 h-12 text-white/30" />
          </div>
        )}

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Category badge */}
        {categoryName && (
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border backdrop-blur-sm ${catStyle.bg} ${catStyle.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
              {categoryName}
            </span>
          </div>
        )}

        {/* Reading time badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-black/50 backdrop-blur-sm border border-white/15">
            <Clock className="w-3 h-3" />
            {readingTime} min
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow p-5">
        <h3
          className="font-bold text-stone-900 line-clamp-2 leading-snug mb-2 text-base"
          style={{ transition: "color 0.2s", color: isHovered ? "#2E4D28" : undefined }}
        >
          {article.title}
        </h3>

        <p className="text-stone-500 text-sm line-clamp-3 flex-grow mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2E4D28] to-[#7CB87A] flex items-center justify-center text-white text-xs font-black shadow-sm">
              J
            </div>
            <div>
              <div className="text-xs font-bold text-stone-800">JungVorteil</div>
              {article.published_at && (
                <div className="text-[10px] text-stone-400">{formatDate(article.published_at)}</div>
              )}
            </div>
          </div>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: isHovered ? "linear-gradient(135deg, #2E4D28, #4a7a42)" : "#f1f5f4",
              color: isHovered ? "white" : "#6b7280",
              transform: isHovered ? "scale(1.1) rotate(45deg)" : "scale(1) rotate(0deg)",
            }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Shine effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: isHovered ? "100% 0" : "-100% 0",
          transition: "background-position 0.7s ease",
        }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(46,77,40,0.18), 0 8px 24px rgba(0,0,0,0.08)"
            : "none",
          border: isHovered ? "1px solid rgba(124,184,122,0.6)" : "1px solid transparent",
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </Link>
  );
}
