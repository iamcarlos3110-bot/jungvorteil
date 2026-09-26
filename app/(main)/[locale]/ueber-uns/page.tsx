import { Metadata } from "next";
import { Sparkles, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2, Mail, Users } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Über uns – Das Schweizer Vorteilsportal | JungVorteil",
  description: "Erfahre mehr über JungVorteil: Das unabhängige Schweizer Sparportal für Studierende, Lernende und junge Erwachsene unter 30.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JungVorteil",
    "url": "https://jungvorteil.ch",
    "logo": "https://jungvorteil.ch/favicon.ico",
    "description": "Unabhängiges Schweizer Vorteilsportal für Studierende, Lernende und junge Erwachsene unter 30.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH"
    }
  };

  return (
    <>
      <Script id="schema-about-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />

      <div className="bg-[#F8FAF6] min-h-screen pb-20">
        {/* Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-24 mb-12 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Users className="w-4 h-4 text-[#A3E635]" /> Unabhängig & Transparent
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Über JungVorteil
            </h1>
            <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Wir machen das Leben und Studieren in der Schweiz bezahlbarer. Die Plattform von jungen Leuten für junge Leute.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission & Vision */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full">
              <Award className="w-4 h-4" /> Unsere Mission
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Geprüfte Vorteile ohne Abo-Fallen und Versteckte Kosten
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Die Schweiz gehört weltweit zu den Ländern mit den höchsten Lebenshaltungskosten. Besonders während der Ausbildung, des Studiums oder beim Berufseinstieg ist das Budget oft knapp bemessen. Ob hohe ÖV-Preise, Krankenkassenprämien, Handyabos oder Ausrüstung für die Universität – Fixkosten belasten junge Erwachsene stark.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              <strong>JungVorteil</strong> wurde ins Leben gerufen, um alle echten Jugendtarife, Legi-Rabatte, Gratis-Angebote und Promotionscodes der Schweiz übersichtlich und unabhängig an einem Ort zu bündeln.
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">100% Manuell Manuell Geprüft</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir testen jedes Angebot selbst. Bevor ein Rabattcode auf unserer Seite erscheint, prüfen unsere Redaktoren die Gültigkeit, Bedingungen und Fristen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Komplett Kostenlos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Für Nutzer ist JungVorteil zu 100% kostenfrei. Du musst dich weder registrieren noch ein kostenpflichtiges Abonnement eingehen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Transparent & Ethisch</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sollten wir für die Vermittlung eines Rabattcodes eine kleine Provision vom Anbieter erhalten, hat dies keinen Einfluss auf den Rabattpreis für dich.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Fokus auf die Schweiz</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unsere Inhalte beziehen sich speziell auf Schweizer Kantone, ÖV-Netze (SBB, ZVV), Schweizer Banken, Universitäten (ETH, UZH, EPFL) und Partner.
              </p>
            </div>
          </div>

          {/* Editorial Standard & Transparency */}
          <div className="bg-gradient-to-r from-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 shadow-md space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
              Unser Redaktionsstandard & Transparenzhinweis
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Die Redaktion von JungVorteil recherchiert täglich Angebote von Marken wie SBB, Apple, Spotify, Swisscom, Neon, Sunrise, Salt, Pathé und ASVZ. 
            </p>
            <div className="space-y-3 text-sm sm:text-base text-emerald-100 border-t border-emerald-800/80 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span>Wir listen Angebote unabhängig von Werbepartnerschaften auf, wenn sie echten Nutzen bieten.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span>Abgelaufene oder irreführende Aktionen werden unverzüglich entfernt.</span>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Fragen, Feedback oder ein Angebot einreichen?</h3>
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Du hast einen neuen Studentenrabatt entdeckt oder möchtest als Schweizer Marke mit uns kooperieren? Wir freuen uns über deine Nachricht.
            </p>
            <div>
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3F5E39] text-white font-bold text-sm hover:bg-[#324B2D] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
