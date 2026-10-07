import { generateSwissMetadata } from "@/lib/swissSeo";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Kontakt & Support",
    description: "Hast du eine Frage zu einem Rabatt, möchtest du ein Angebot melden oder mit uns kooperieren? Kontaktiere das JungVorteil-Team.",
    path: "/kontakt",
    locale,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return <ContactForm locale={locale} />;
}
