import { getArticles } from "@/services/articles";
import ArticleCard from "@/components/magazin/ArticleCard";
import AdSlot from "@/components/ads/AdSlot";
import { BookOpen, Newspaper } from "lucide-react";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Magazin & Ratgeber | JungVorteil Schweiz",
  description: "Tipps, Tricks und Ratgeber rund ums Sparen, Studieren, Wohnen und Finanzen für junge Leute in der Schweiz.",
};

export default async function MagazinPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = await getArticles(50);

  const categories = ["Alle", "Finanzen", "Reisen", "Studium", "Technik", "Bildung"];

  return (
    <div className="bg-[#F8FAF6] min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6">
            <Newspaper className="w-4 h-4 text-[#A3E635]" /> Wissen & Spartipps
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            JungVorteil Magazin
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Praktische Ratgeber, Finanztipps und Guides für dein Leben & Studium in der Schweiz.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-[#3F5E39] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EAF0E5] hover:text-[#3F5E39] border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div key={article.id}>
                <ArticleCard article={article} locale={locale} />
                {idx === 2 && (
                  <div className="md:col-span-2 lg:col-span-3 my-6">
                    <AdSlot slot="AD_BETWEEN_OFFERS_1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Noch keine Artikel vorhanden</h3>
            <p className="text-gray-500">Komm bald wieder vorbei für neue Spartipps!</p>
          </div>
        )}

        <div className="mt-16">
          <Newsletter />
        </div>

      </div>
    </div>
  );
}

