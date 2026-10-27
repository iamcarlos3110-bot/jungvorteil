import { Metadata } from "next";
import ProgressDashboard from "@/components/theory/ProgressDashboard";
import AdSlot from "@/components/ads/AdSlot";

interface ProgresoPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ProgresoPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Mein Vorbereitungsstatus & Erfolgsquote | AutoTheorie Schweiz",
    description: "Verfolge deine Lernstatistik für die Schweizer Theorieprüfung: Erfolgsquote, durchschnittliche Fehlerpunkte und Prüfungsreife.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/progreso`,
    },
  };
}

export default async function ProgresoPage({ params }: ProgresoPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <ProgressDashboard locale={locale} />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
