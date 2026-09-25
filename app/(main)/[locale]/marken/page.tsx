import { getAllBrands } from "@/services/brands";
import BrandCard from "@/components/brands/BrandCard";
import { Building2 } from "lucide-react";

export const metadata = {
  title: "Partner & Unternehmen | JungVorteil",
  description: "Entdecke alle Partnermarken und Unternehmen, die exklusive Rabatte und Angebote auf JungVorteil bieten.",
};

export default async function MarkenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const brands = await getAllBrands();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
          <Building2 className="w-4 h-4" /> Partnerunternehmen
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Alle Marken & Anbieter</h1>
        <p className="text-lg text-gray-600">
          Entdecke Vergünstigungen deiner Lieblingsmarken in der Schweiz.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} locale={locale} />
        ))}
      </div>
    </div>
  );
}
