import { Metadata } from "next";
import FlashcardsViewer from "@/components/theory/FlashcardsViewer";
import AdSlot from "@/components/ads/AdSlot";

interface MemorizarPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MemorizarPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Lernkarten & Theoriefragen memorisieren – AutoTheorie Schweiz",
    description: "Lerne alle offiziellen Schweizer Theoriefragen, Verkehrsregeln, Tempolimits und Promillegrenzen durch interaktive Lernkarten für die Führerprüfung.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/memorizar`,
    },
  };
}

export default async function MemorizarPage() {
  return (
    <div className="min-h-screen bg-[#090D08] text-white py-8">
      <div className="max-w-2xl mx-auto px-4 mb-4">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      <FlashcardsViewer />

      <div className="max-w-2xl mx-auto px-4 mt-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
