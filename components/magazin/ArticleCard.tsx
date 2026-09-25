import Link from "next/link";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import SafeImage from "@/components/ui/SafeImage";

interface ArticleCardProps {
  article: Article;
  locale?: string;
}

export default function ArticleCard({ article, locale = "de" }: ArticleCardProps) {
  return (
    <Link
      href={`/${locale}/magazin/${article.slug}`}
      className="floating-card flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/90 hover:border-[#3F5E39]/40 group h-full"
    >
      <div className="w-full h-48 bg-gray-100 overflow-hidden shrink-0 relative">
        {article.image_url ? (
          <SafeImage
            src={article.image_url}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            fallback={
              <div className="w-full h-full bg-[#EAF0E5] flex items-center justify-center text-[#3F5E39]">
                Magazin
              </div>
            }
          />
        ) : (
          <div className="w-full h-full bg-[#EAF0E5] flex items-center justify-center text-[#3F5E39]">
            Magazin
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#3F5E39] transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50">
          <span>JungVorteil</span>
          {article.published_at && (
            <span>{formatDate(article.published_at)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
