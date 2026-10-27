import { Metadata } from "next";
import SignsExplorer from "@/components/theory/SignsExplorer";
import AdSlot from "@/components/ads/AdSlot";

interface SignalePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: SignalePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Schweizer Verkehrssignale Übersicht & Bedeutung (SSV) | AutoTheorie",
    description: "Alle offiziellen Schweizer Verkehrsschilder im Überblick: Vortrittssignale, Gefahrensignale, Vorschriftssignale und Hinweissignale mit Erklärungen.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/signale`,
    },
  };
}

export default async function SignalePage({ params }: SignalePageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-5xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <SignsExplorer />

      <div className="max-w-5xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
