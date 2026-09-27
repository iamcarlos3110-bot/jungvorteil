import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ShieldCheck, Mail, MapPin, User, FileText } from "lucide-react";
import { safeJsonLd } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Impressum & Rechtliche Hinweise | JungVorteil",
    description: "Rechtliche Informationen, Anbieterkennzeichnung, Impressum und Kontaktadresse des unabhängigen Schweizer Vorteilsportals JungVorteil.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/impressum`,
    },
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const impressumSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Impressum & Rechtliche Hinweise – JungVorteil",
    "url": `https://jungvorteil.ch/${locale}/impressum`,
    "publisher": {
      "@type": "Organization",
      "name": "JungVorteil",
      "url": "https://jungvorteil.ch",
      "founder": {
        "@type": "Person",
        "name": "Carlos Piñeiro",
        "jobTitle": "Gründer & Chefredaktor"
      }
    }
  };

  return (
    <>
      <Script id="schema-impressum" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(impressumSchema) }} />

      <div className="bg-[#F8FAF6] min-h-screen pt-20 pb-20">
        {/* Header */}
        <section className="bg-[#1C331B] text-white py-12 lg:py-16 border-b border-[#2E4D28]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
              <ShieldCheck className="w-4 h-4 text-lime-400" /> Transparenz &amp; Anbieterkennzeichnung
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Impressum &amp; Rechtliche Hinweise
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto">
              Gesetzlich vorgeschriebene Anbieterkennzeichnung und rechtliche Informationen zu JungVorteil Schweiz.
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-10 text-stone-800">
            
            {/* Section 1: Contact */}
            <section className="space-y-3 border-b border-stone-100 pb-8">
              <div className="flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full w-fit">
                <MapPin className="w-4 h-4" /> 1. Kontaktadresse &amp; Betreiber
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">Betreiber der Website</h2>
              <div className="bg-[#F8FAF7] border border-[#E2EBDD] rounded-2xl p-5 text-sm leading-relaxed space-y-2">
                <p className="font-bold text-stone-900">JungVorteil Schweiz</p>
                <p className="text-stone-700">
                  Carlos Piñeiro (Betreiber &amp; Inhaber)<br />
                  Plaza del Peñón 7, 7B izq.<br />
                  28923 Alcorcón, Madrid<br />
                  Spanien
                </p>
                <div className="pt-2 text-xs space-y-1 border-t border-[#E2EBDD]">
                  <p><strong>E-Mail:</strong> <a href="mailto:kontakt@jungvorteil.ch" className="text-[#3F5E39] underline font-semibold">kontakt@jungvorteil.ch</a></p>
                  <p><strong>Website:</strong> <a href="https://jungvorteil.ch" className="text-[#3F5E39] underline font-semibold">https://jungvorteil.ch</a></p>
                </div>
              </div>
            </section>

            {/* Section 2: Representation */}
            <section className="space-y-3 border-b border-stone-100 pb-8">
              <div className="flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full w-fit">
                <User className="w-4 h-4" /> 2. Vertretungsberechtigung &amp; Redaktionsleitung
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">Redaktionelle Verantwortlichkeit</h2>
              <div className="bg-[#F8FAF7] border border-[#E2EBDD] rounded-2xl p-5 text-sm leading-relaxed space-y-1">
                <p className="font-bold text-stone-900">Gründer &amp; Chefredaktor: Carlos Piñeiro</p>
                <p className="text-stone-600 text-xs">
                  Verantwortlich für Inhalt, Redaktionsleitung, Faktencheck &amp; technische Entwicklung von JungVorteil Schweiz.
                </p>
              </div>
            </section>

            {/* Section 3: Business Register */}
            <section className="space-y-3 border-b border-stone-100 pb-8">
              <div className="flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full w-fit">
                <FileText className="w-4 h-4" /> 3. Unternehmensform &amp; Handelsregister
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">Rechtlicher Hinweis zur Unternehmensform</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                JungVorteil ist ein unabhängig betriebenes privates Vorteils- und Informationsportal von Carlos Piñeiro. Es besteht kein Eintrag im Schweizer Handelsregister und keine Mehrwertsteuernummer (keine MwSt-Pflicht aufgrund der Kleinunternehmergrenzen).
              </p>
            </section>

            {/* Section 4: Content Disclaimer */}
            <section className="space-y-3 border-b border-stone-100 pb-8">
              <h2 className="text-xl font-bold text-stone-900">4. Haftungsausschluss für Inhalte</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt und nach strengen redaktionellen Richtlinien erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann JungVorteil jedoch keine Haftung übernehmen.
              </p>
              <p className="text-stone-700 leading-relaxed text-sm">
                Haftungsansprüche gegen JungVorteil wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich.
              </p>
            </section>

            {/* Section 5: External Links & Affiliate Disclosure */}
            <section className="space-y-3 border-b border-stone-100 pb-8">
              <h2 className="text-xl font-bold text-stone-900">5. Haftung für Links &amp; Transparenz bei Affiliate-Links</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff auf externe Webseiten erfolgt auf eigene Gefahr des Nutzers.
              </p>
              <div className="bg-[#EAF0E5]/60 border border-[#C7D9C0] rounded-2xl p-4 text-xs text-stone-700 space-y-1">
                <p className="font-bold text-stone-900">Transparenzhinweis zu Partnerlinks:</p>
                <p className="leading-relaxed">
                  Einige der verlinkten Angebote können sogenannte Affiliate-Links sein. Wenn Sie über einen solchen Link ein Angebot wahrnehmen, erhält JungVorteil unter Umständen eine kleine Provision. Der Preis für Sie als Nutzer ändert sich dadurch zu keinem Zeitpunkt.
                </p>
              </div>
            </section>

            {/* Section 6: Copyright */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-stone-900">6. Urheberrechte</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                Die Urheber- und alle anderen Rechte an Inhalten, Texten, Grafiken oder Dateien auf der Website gehören ausschliesslich JungVorteil oder den genannten Rechteinhabern (z.B. Schweizer Partnerunternehmen). Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}



