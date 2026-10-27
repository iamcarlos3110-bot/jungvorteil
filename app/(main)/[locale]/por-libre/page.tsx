import { Metadata } from "next";
import PorLibreGuide from "@/components/theory/PorLibreGuide";
import AdSlot from "@/components/ads/AdSlot";

interface PorLibrePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PorLibrePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Führerschein auf eigene Faust (Por Libre) in der Schweiz: CHF 1'800 sparen",
    description: "Anleitung zum Selbststudium für die Schweizer Führerprüfung: Ohne teure Theoriekurse, Anmeldung beim Strassenverkehrsamt und private Lernfahrten mit der L-Tafel.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/por-libre`,
    },
  };
}

export default async function PorLibrePage({ params }: PorLibrePageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <PorLibreGuide locale={locale} />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
