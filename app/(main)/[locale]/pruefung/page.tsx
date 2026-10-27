import { Metadata } from "next";
import ExamSimulator from "@/components/theory/ExamSimulator";
import AdSlot from "@/components/ads/AdSlot";

interface PruefungPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PruefungPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Offizielle Theorieprüfung Schweiz Kat. B & A kostenlos üben (50 Fragen ASA)",
    description: "Kostenlose Simulation der Schweizer Führerprüfung Theorie mit 50 Fragen, 45 Minuten Timer und offizieller ASA-Fehlerpunktebewertung.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/pruefung`,
    },
  };
}

export default async function PruefungPage({ params }: PruefungPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      {/* Top Banner Ad */}
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <ExamSimulator locale={locale} />

      {/* Bottom Ad */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
