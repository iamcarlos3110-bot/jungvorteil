import { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2, Mail, User } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { safeJsonLd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Über uns – Das Schweizer Vorteilsportal | JungVorteil",
  description: "Erfahre mehr über JungVorteil: Das transparente Schweizer Sparportal gegründet von Carlos Piñeiro für Studierende, Lernende und junge Erwachsene unter 30.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JungVorteil",
    "url": "https://jungvorteil.ch",
    "logo": "https://jungvorteil.ch/favicon.ico",
    "foundingDate": "2026",
    "founder": {
      "@type": "Person",
      "name": "Carlos Piñeiro"
    },
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
              <User className="w-4 h-4 text-[#A3E635]" /> Unabhängiges Eigenprojekt
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Über JungVorteil
            </h1>
            <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Ein transparentes Projekt mit dem Ziel, das Leben und Studieren in der Schweiz bezahlbarer zu machen.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Story & Background */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full">
              <Award className="w-4 h-4" /> Wer steckt dahinter?
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Gegründet von Carlos Piñeiro als unabhängiges Vorteilsportal
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Hallo! Ich bin <strong>Carlos Piñeiro</strong>, der Gründer und Entwickler von JungVorteil. 
              JungVorteil ist kein riesiges Konzernunternehmen und keine unpersönliche Werbeagentur mit dutzenden Mitarbeitern. 
              Es ist ein von mir als Privatperson betriebenes, unabhängiges Portal, das aus einer einfachen Beobachtung heraus entstanden ist: Die Schweiz bietet zwar fantastische Vergünstigungen für junge Leute (wie das SBB GA Night, Halbtax Jugend, Konten ohne Gebühren oder Projekt Neptun), aber diese Informationen sind oft über etliche Websites verstreut oder gut versteckt.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Mein Ziel ist es, Licht in diesen Dschungel zu bringen. Ich sammle, teste und strukturiere Angebote aus allen Schweizer Kantonen, damit Studierende, Lernende und junge Erwachsene unter 30 Jahren Zeit und Geld sparen können.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Manuell Geprüfte Links</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ich verlinke ausschließlich auf offizielle Seiten und geprüfte Rabattaktionen (z.B. SBB, Apple, Neon, Sunrise). Abgelaufene Angebote werden bereinigt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">100% Kostenfrei für Nutzer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Nutzung von JungVorteil erfordert weder eine Registrierung noch den Kauf von Mitgliedschaften. Alle Vorteile sind sofort zugänglich.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Ehrliche Finanzierung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Falls bei einzelnen Links eine Vermittlungsprovision anfällt, verändert das den Endpreis für Nutzer in keiner Weise. Qualität geht vor Provision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Fokus auf die Schweiz</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Speziell zugeschnitten auf Schweizer Städte (Zürich, Bern, Basel, Genf, Lausanne etc.), Schweizer ÖV-Abos und universitäre Besonderheiten.
              </p>
            </div>
          </div>

          {/* Editorial Standard */}
          <div className="bg-gradient-to-r from-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 shadow-md space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
              Verlässlichkeit & Redaktionsversprechen
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Jedes auf JungVorteil veröffentlichte Angebot basiert auf einer sorgfältigen Prüfung der Konditionen und Fristen der jeweiligen Schweizer Anbieter.
            </p>
            <div className="space-y-3 text-sm sm:text-base text-emerald-100 border-t border-emerald-800/80 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span>Transparente Angabe von Mindestalter, Fristen und Voraussetzungen (z.B. Immatrikulationsbescheinigung oder Legi).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span>Keine Falschversprechen oder künstlich überhöhte Rabattprozente.</span>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Möchtest du Feedback geben oder eine Aktion melden?</h3>
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Hast du einen nützlichen Studentendeal entdeckt, der auf der Seite fehlt? Schreib mir gerne eine Nachricht.
            </p>
            <div>
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3F5E39] text-white font-bold text-sm hover:bg-[#324B2D] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> Nachricht an Carlos senden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
