import Link from "next/link";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  locale?: string;
}

export default function ArticleCard({ article, locale = "de" }: ArticleCardProps) {
  return (
    <Link
      href={`/${locale}/magazin/${article.slug}`}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group h-full"
    >
      <div className="w-full h-48 bg-gray-100 overflow-hidden shrink-0">
        {article.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.image_url} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-purple-50 flex items-center justify-center text-purple-200">
            Magazin
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
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
