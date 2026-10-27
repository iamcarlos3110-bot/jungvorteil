import { Metadata } from "next";
import DrivingGuide from "@/components/theory/DrivingGuide";
import AdSlot from "@/components/ads/AdSlot";

interface RatgeberPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: RatgeberPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Schweizer Führerausweis machen: Schritt-für-Schritt Anleitung & Kosten",
    description: "Wie Jugendliche in der Schweiz den Führerschein machen: Nothelferkurs, Theorieprüfung, Fahren mit der L-Tafel ab 17, VKU und praktische Prüfung.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/ratgeber`,
    },
  };
}

export default async function RatgeberPage({ params }: RatgeberPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <DrivingGuide locale={locale} />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
