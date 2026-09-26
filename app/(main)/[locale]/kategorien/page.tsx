import { getAllCategories } from "@/services/categories";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Percent, ChevronRight } from "lucide-react";
import { getCategoryIconStyle } from "@/lib/categoryIcons";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Alle Kategorien & Rabatte | JungVorteil",
  description: "Entdecke Rabatte und Angebote in allen Kategorien: Essen, Reisen, Technik, Mobilität und mehr in der Schweiz.",
};

export default async function CategoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const categories = await getAllCategories();

  return (
    <div className="bg-[#F8FAF6] min-h-screen pb-20">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#A3E635]" /> Vielfalt entdecken
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Alle Kategorien & Vorteile
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Finde exklusive Rabatte, Gratisangebote und Deals für Studierende & junge Leute sortiert nach deinen Lieblingsbereichen.
          </p>
        </div>
      </section>

      {/* Main Categories Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const style = getCategoryIconStyle(cat.slug);
            const offerCount = cat.offer_count ?? 0;

            return (
              <Link
                key={cat.id}
                href={`/${locale}/rabatte/${cat.slug}`}
                className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-gradient-to-br from-[#EAF0E5] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm border",
                        style.bg
                      )}
                    >
                      {style.icon}
                    </div>

                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#3F5E39] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3F5E39] transition-colors mb-2">
                    {cat.name_de}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                    Sparen bei Marken & Partnern in {cat.name_de}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full transition-colors",
                      offerCount > 0
                        ? "bg-[#EAF0E5] text-[#3F5E39] group-hover:bg-[#3F5E39] group-hover:text-white"
                        : "bg-gray-100 text-gray-500"
                    )}
                  >
                    {offerCount > 0 ? (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        {offerCount} {offerCount === 1 ? "Angebot" : "Angebote"}
                      </>
                    ) : (
                      "Deals entdecken"
                    )}
                  </span>
                  <span className="text-xs font-semibold text-[#3F5E39] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Ansehen <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Feature Highlights Section */}
        <div className="mt-20 bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Warum sparen mit JungVorteil?
            </h2>
            <p className="text-gray-600">
              Dein Schweizer Vorteilsportal für Studierende, Lernende & alle unter 30.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-[#F8FAF6] border border-[#EAF0E5]">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mb-4 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">100% Verifizierte Deals</h3>
              <p className="text-sm text-gray-600">
                Jedes Angebot wird von unserem Team geprüft, damit Rabattcodes garantiert funktionieren.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF6] border border-[#EAF0E5]">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mb-4 font-bold">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Exklusive Rabatte</h3>
              <p className="text-sm text-gray-600">
                Finde Deals, die du bei gewöhnlichen Gutscheinportalen nicht finden wirst.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAF6] border border-[#EAF0E5]">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mb-4 font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Kostenlos & Ohne Abo</h3>
              <p className="text-sm text-gray-600">
                Nutze alle Angebote sofort ohne versteckte Gebühren oder Registrierungszwang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

