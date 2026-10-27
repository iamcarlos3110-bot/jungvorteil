import { Metadata } from "next";
import AlcoholCalculator from "@/components/theory/AlcoholCalculator";
import AdSlot from "@/components/ads/AdSlot";

interface PromillePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PromillePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Schweizer Promillerechner: 0.1‰ für Neulenker & 0.5‰ Grenzwerte",
    description: "Berechne deinen Blutalkoholspiegel nach Schweizer Recht (Widmark-Formel) und erfahre die Strafen für Fahrschüler und Neulenker.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/promille`,
    },
  };
}

export default async function PromillePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <AlcoholCalculator />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
