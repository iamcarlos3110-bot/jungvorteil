import { Metadata } from "next";
import PremiumLanding from "@/components/theory/PremiumLanding";

interface PremiumPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PremiumPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "AutoTheorie PRO (CHF 7.-): Bestehe die Schweizer Theorieprüfung beim 1. Versuch",
    description: "Hol dir den VIP-Pass für die Schweizer Führerprüfung: Alle 600 ASA-Fragen, die 100 tückischsten Prüfungsfallen, 100% werbefrei und Bestehens-Garantie.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/premium`,
    },
  };
}

export default async function PremiumPage({ params }: PremiumPageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50 py-4">
      <PremiumLanding locale={locale} />
    </div>
  );
}
