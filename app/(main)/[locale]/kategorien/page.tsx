import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Alle Kategorien & Rabatte | JungVorteil",
  description: "Entdecke Rabatte und Angebote in allen Kategorien: Essen, Reisen, Technik, Mobilität und mehr in der Schweiz.",
};

export default async function CategoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const categories = await getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
          <Sparkles className="w-4 h-4" /> Übersicht
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Alle Kategorien</h1>
        <p className="text-lg text-gray-600">
          Durchstöbere alle verfügbaren Rabatte und Vorteile sortiert nach Themengebieten.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/${locale}/rabatte/${cat.slug}`}
            className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-200 transition-all group text-center"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
              {cat.icon?.startsWith("fas ") || cat.icon?.startsWith("fab ") || cat.icon?.startsWith("far ") ? (
                <i className={cat.icon}></i>
              ) : (
                cat.icon
              )}
            </div>
            <div className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
              {cat.name_de}
            </div>
            {cat.offer_count !== undefined && cat.offer_count > 0 && (
              <div className="text-xs text-purple-600 font-semibold mt-3 bg-purple-50 px-3 py-1 rounded-full">
                {cat.offer_count} Angebote
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
