import { Metadata } from "next";
import MistakesTrainer from "@/components/theory/MistakesTrainer";
import AdSlot from "@/components/ads/AdSlot";

interface FallosPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: FallosPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Fehler-Repetitorium: Eigene Fehlerfragen üben | AutoTheorie Schweiz",
    description: "Übe gezielt deine falsch beantworteten Theoriefragen, bis du alle Verkehrsregeln fehlerfrei beherrschst.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/fallos`,
    },
  };
}

export default async function FallosPage({ params }: FallosPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <MistakesTrainer locale={locale} />

      <div className="max-w-3xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
