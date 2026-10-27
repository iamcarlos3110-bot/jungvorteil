import { Metadata } from "next";
import TopicTrainer from "@/components/theory/TopicTrainer";
import AdSlot from "@/components/ads/AdSlot";

interface ThemenPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ThemenPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Theoriefragen nach Themen üben | Schweizer Verkehrsregeln lernen",
    description: "Trainiere gezielt einzelne Themen für die Schweizer Theorieprüfung: Vortritt, Verkehrssignale, Autobahn, Geschwindigkeit und Promillegrenzen.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/themen`,
    },
  };
}

export default async function ThemenPage({ params }: ThemenPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <TopicTrainer />

      <div className="max-w-4xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
