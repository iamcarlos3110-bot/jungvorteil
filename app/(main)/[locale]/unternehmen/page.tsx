import Link from "next/link";
import { Building2, CheckCircle2, Users, Target, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { generateSwissMetadata } from "@/lib/swissSeo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Für Unternehmen & Partner – Angebote auf JungVorteil veröffentlichen",
    description: "Erreichen Sie die junge Zielgruppe in der Schweiz (16–30 Jahre). Präsentieren Sie Ihre Jugendrabatte, Studentenangebote und Vorteile auf JungVorteil.ch.",
    path: "/unternehmen",
    locale,
  });
}

export default async function UnternehmenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8FAF7] to-white border-b border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EAF0E5] text-[#3F5E39] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" /> Partner-Programm für Schweizer Unternehmen
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Erreichen Sie die junge Generation in der Schweiz
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            JungVorteil verbindet Schweizer Marken, Dienstleister und Bildungspartner direkt mit Studierenden, Lernenden und jungen Erwachsenen im Alter von 16 bis 30 Jahren.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-2 bg-[#3F5E39] hover:bg-[#324B2D] text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-sm"
            >
              Jetzt Partner-Angebot anfragen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits for Brands */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Warum Unternehmen mit JungVorteil kooperieren</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bieten Sie echten Mehrwert für die nächste Generation von Kundinnen und Kunden in der Schweiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#3F5E39] mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Zielgerichtetes Publikum</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Erreichen Sie punktgenau Lernende, Studierende und junge Berufseinsteiger in der gesamten Schweiz (Deutschschweiz, Romandie, Tessin).
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Hohe Conversion & Relevanz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Junge Erwachsene suchen gezielt nach Sparvorteilen im Alltag, bei Abos, ÖV, Elektronik und Freizeit. Echte Vergünstigungen erzielen hohe Interaktion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Schweizer Qualität & Transparenz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Alle eingereichten Angebote werden redaktionell verifiziert. Wir achten auf transparente Bedingungen ohne irreführende Angaben.
            </p>
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section className="bg-[#F8FAF7] border-y border-[#E2EBDD] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Voraussetzungen für eine Listung</h2>
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-4 text-gray-700 text-sm leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3F5E39] shrink-0 mt-0.5" />
              <p><strong className="text-gray-900">Echter Preisvorteil:</strong> Das Angebot muss einen spürbaren Preisnachlass oder exklusiven Zusatznutzen gegenüber dem regulären Tarif bieten.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3F5E39] shrink-0 mt-0.5" />
              <p><strong className="text-gray-900">Klare Alters- oder Statusgrenzen:</strong> Gilt das Angebot für Personen bis 25/30 Jahre oder spezifisch für Studierende/Lernende?</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3F5E39] shrink-0 mt-0.5" />
              <p><strong className="text-gray-900">Transparente Konditionen:</strong> Keine versteckten Gebühren, automatische Abo-Fallen oder irreführende Rabattversprechen.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3F5E39] shrink-0 mt-0.5" />
              <p><strong className="text-gray-900">Schweizer Bezug:</strong> Das Angebot muss für Personen mit Wohnsitz oder Ausbildungsstätte in der Schweiz gültig sein.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-3xl shadow-sm">
          <Mail className="w-12 h-12 text-[#3F5E39] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Möchten Sie ein Angebot auf JungVorteil listen?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm">
            Senden Sie uns die Details Ihres Rabatts oder Ihrer Aktion. Unser Redaktionsteam prüft den Vorteil innerhalb von 1–2 Werktagen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:kontakt@jungvorteil.ch?subject=Partner-Angebot%20JungVorteil"
              className="inline-flex items-center justify-center gap-2 bg-[#3F5E39] hover:bg-[#324B2D] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <Mail className="w-4 h-4" /> E-Mail an kontakt@jungvorteil.ch
            </a>
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Kontaktformular nutzen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
