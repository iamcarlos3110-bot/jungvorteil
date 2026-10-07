import { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Eye, Award, CheckCircle2, Mail, User, Compass, HelpCircle, Lock, RefreshCw } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { safeJsonLd } from "@/lib/utils";

import { generateSwissMetadata } from "@/lib/swissSeo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Über uns – Das unabhängige Schweizer Vorteilsportal",
    description: "Erfahre mehr über JungVorteil: Gegründet von Carlos Piñeiro. Transparente Recherche, redaktionelle Prüfung und echte Rabatte für Jugendliche und Studierende in der Schweiz.",
    path: "/ueber-uns",
    locale,
  });
}

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
      "name": "Carlos Piñeiro",
      "jobTitle": "Gründer & Chefredaktor"
    },
    "description": "Unabhängiges Schweizer Vorteilsportal für Studierende, Lernende und junge Erwachsene unter 30.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plaza del Peñón 7, 7B izq.",
      "postalCode": "28923",
      "addressLocality": "Alcorcón",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
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
              <User className="w-4 h-4 text-[#A3E635]" /> Unabhängiges Schweizer Portal
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Über JungVorteil
            </h1>
            <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto">
              Wer wir sind, was uns antreibt und wie wir Schweizer Jugendvorteile transparent und unabhängig recherchieren.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 1. Mission & Founder Card */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-[#3F5E39] font-bold text-sm bg-[#EAF0E5] px-3 py-1 rounded-full">
              <Award className="w-4 h-4" /> Wer steckt hinter JungVorteil?
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Gegründet von Carlos Piñeiro (Gründer &amp; Chefredaktor)
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Hallo! Ich bin <strong>Carlos Piñeiro</strong>, der Gründer und Chefredaktor von <strong>JungVorteil.ch</strong>. 
              JungVorteil ist kein anonymer Großkonzern und keine Werbeagentur mit versteckten Interessen. Es ist ein unabhängiges Schweizer Portal, das aus einer konkreten Notwendigkeit heraus entstanden ist: Die Lebenshaltungskosten in der Schweiz gehören zu den höchsten weltweit, doch viele exklusive Angebote für Auszubildende, Studierende und junge Erwachsene unter 30 (wie Halbtax Jugend, GA Night, Neobanken ohne Gebühren, Neptun-Laptops oder kantonale Prämienverbilligungen) sind unübersichtlich oder im Netz verstreut.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Mein Ziel ist es, absolute Transparenz in den Schweizer Rabatt-Dschungel zu bringen. Angebote werden vor der Veröffentlichung anhand offizieller Anbieterinformationen geprüft.
            </p>
          </div>

          {/* 2. Key Pillars Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">1. Manuelle Faktenprüfung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jedes Angebot auf JungVorteil wird anhand der offiziellen Tarifblätter und AGB der Schweizer Anbieter (z.B. SBB, Swisscom, Neon, ZKB, Apple) manuell verifiziert.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">2. 100% Kostenfrei für Nutzer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die Nutzung von JungVorteil erfordert weder eine kostenpflichtige Mitgliedschaft noch eine Registrierung. Alle Rabatte, Links und Guides stehen jedem frei zur Verfügung.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">3. Transparente Finanzierung</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Falls wir für die Vermittlung einzelner Angebote eine kleine Provision erhalten, beeinflusst dies niemals unsere Bewertung. Ein Angebot wird nur gelistet, wenn es echten Mehrwert bietet.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">4. Schweizer Fokus &amp; Städte</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Speziell zugeschnitten auf Schweizer Gegebenheiten (Zürich, Bern, Basel, Genf, Lausanne etc.), Schweizer ÖV-Netze, Universitäten (ETH, UZH, EPFL, BFH, UniGE) und Kantone.
              </p>
            </div>
          </div>

          {/* 3. Detailed Verification Standards */}
          <div className="bg-gradient-to-r from-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 shadow-md space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-lime-400" /> Qualitätsstandard & Redaktionsrichtlinien
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Wie wir Angebote prüfen und verifizieren
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Verlässlichkeit steht bei uns an oberster Stelle. Bevor ein Angebot auf JungVorteil gelistet wird, durchläuft es vier Prüfschritte:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-sm text-emerald-100">
              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-800/60 space-y-2">
                <div className="font-bold text-white text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center font-black text-xs">1</span>
                  Offizielle Primärquellen
                </div>
                <p className="text-emerald-200/90 text-xs leading-relaxed">
                  Wir beziehen Informationen direkt von den offiziellen Websites der Schweizer Anbieter, Hochschulen und cantonalen Ämtern.
                </p>
              </div>

              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-800/60 space-y-2">
                <div className="font-bold text-white text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center font-black text-xs">2</span>
                  Exakte CHF-Angaben
                </div>
                <p className="text-emerald-200/90 text-xs leading-relaxed">
                  Preise in CHF, Ersparnisse, Gültigkeiten und Altersgrenzen (16–30 J.) werden detailliert und ohne Schönfärberei aufgeführt.
                </p>
              </div>

              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-800/60 space-y-2">
                <div className="font-bold text-white text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center font-black text-xs">3</span>
                  Aktualitäts-Rechecks
                </div>
                <p className="text-emerald-200/90 text-xs leading-relaxed">
                  Bedingungen von Tarifen ändern sich. Wir überprüfen gelistete Angebote in regelmässigen Abständen. Abgelaufene Deals werden umgehend gekennzeichnet.
                </p>
              </div>

              <div className="bg-emerald-950/60 p-5 rounded-2xl border border-emerald-800/60 space-y-2">
                <div className="font-bold text-white text-base flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-emerald-950 flex items-center justify-center font-black text-xs">4</span>
                  Reaktives Fehler-Management
                </div>
                <p className="text-emerald-200/90 text-xs leading-relaxed">
                  Über unseren Feedback-Kanal bearbeiten wir Hinweise von Nutzerinnen und Nutzern zu abgelaufenen Angeboten innerhalb von 24–48 Stunden.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/${locale}/redaktionelle-richtlinien`}
                className="inline-flex items-center gap-2 text-lime-300 font-bold underline hover:text-white transition-colors text-sm"
              >
                Mehr zu unseren Redaktionellen Richtlinien lesen &rarr;
              </Link>
            </div>
          </div>

          {/* 4. Contact & Interaction Card */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Fragen, Feedback oder ein Angebot melden?</h3>
            <p className="text-stone-600 text-sm max-w-lg mx-auto">
              Du hast einen unschlagbaren Spartipp für junge Menschen in der Schweiz entdeckt oder möchtest Feedback geben? Ich freue mich über deine Nachricht.
            </p>
            <div>
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3F5E39] text-white font-bold text-sm hover:bg-[#324B2D] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> Nachricht an Carlos Piñeiro senden
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

