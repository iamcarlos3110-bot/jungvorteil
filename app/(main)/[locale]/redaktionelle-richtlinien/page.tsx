import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, RefreshCw, Eye, HeartHandshake, Mail, ArrowRight, UserCheck } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Redaktionelle Richtlinien & Prüfmethodik | JungVorteil",
    description: "Unsere transparente redaktionelle Methodik: Wie JungVorteil Schweizer Angebote recherchiert, verifiziert, unabhängig bewertet und monatlich auf Richtigkeit prüft.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}/redaktionelle-richtlinien`,
    },
    openGraph: {
      title: "Redaktionelle Richtlinien & Prüfmethodik – JungVorteil",
      description: "Transparenz, Unabhängigkeit und Faktenprüfung bei JungVorteil. Erfahren Sie, wie wir Schweizer Jugendvorteile verifizieren.",
      url: `https://jungvorteil.ch/${locale}/redaktionelle-richtlinien`,
      siteName: "JungVorteil",
      locale,
      type: "website",
    },
  };
}

export default async function RedaktionelleRichtlinienPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="bg-[#F8FAF6] min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-lime-400" /> Transparenz & Qualitätsstandard
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Redaktionelle Richtlinien & Prüfmethodik
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Vertrauen entsteht durch Qualität und Transparenz. Hier legen wir offen, wie wir Angebote recherchieren, Fakten in der Schweiz verifizieren und redaktionelle Unabhängigkeit sichern.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Intro Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-stone-900">Unser Versprechen an Nutzerinnen & Nutzer</h2>
          <p className="text-stone-700 leading-relaxed text-base">
            JungVorteil ist ein unabhängiges Schweizer Vorteilsportal, gegründet und betrieben von <strong>Carlos Piñeiro</strong>. Unser Anspruch ist es, jungen Menschen in der Schweiz (Auszubildende, Studierende und junge Erwachsene von 16 bis 30 Jahren) verlässliche, echte und überprüfbare Preisvorteile zugänglich zu machen.
          </p>
          <p className="text-stone-700 leading-relaxed text-base">
            Wir veröffentlichen keine erfundenen Rabattprozente, keine irreleitenden Lockangebote und keine Inhalte ohne offizielle Bestätigung des jeweiligen Anbieters.
          </p>
        </div>

        {/* Dedicated Section: Wie Angebote recherchiert & entdeckt werden (Cómo se encuentran las ofertas) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#3F5E39] text-xs font-bold uppercase tracking-wide">
            Recherche & Quellenauswahl
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Wie Angebote recherchiert & entdeckt werden</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            Um die besten und aktuellsten Rabatte für junge Menschen in der Schweiz bereitzustellen, kombiniert unsere Redaktion vier strukturierte Recherche-Wege:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2">
            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs">1</span>
                Direkte Anbieter-Recherche
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Manuelles Monitoring der offiziellen Aktionsseiten führender Schweizer Unternehmen (z.B. SBB, Apple, Sunrise, Salt, Neon, ZKB).
              </p>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs">2</span>
                Hochschul- & Bildungsinfos
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Auswertung offizieller Informationen von Schweizer Universitäten, FHs und Studierendenorganisationen (z.B. UZH, ETH, UNIL, EPFL, ZHAW).
              </p>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs">3</span>
                Community & Nutzer-Tipps
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Überprüfung von Hinweisen, die uns von Studierenden und Lernenden über das Kontaktformular oder per E-Mail gemeldet werden.
              </p>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs">4</span>
                Redaktionelle Qualitätsprüfung
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Bevor ein Vorteil online geht, prüfen wir, ob es sich um eine echte Vergünstigung mit klaren Konditionen ohne Abo-Fallen handelt.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 px-2">Die 5 Säulen unserer Methodik</h2>

          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3F5E39] flex items-center justify-center font-bold text-xl shrink-0">
              1
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#3F5E39]" /> Relevanz & Selektion
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nicht jede Promotion ist ein echter Vorteil. Wir selektieren Angebote streng nach Relevanz für den Schweizer Alltag (ÖV-Abos, Mobilfunk, Neobanken, Wohnen, Hardware, Kultur und Bildung). Angebote ohne spürbare Ersparnis werden nicht gelistet.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3F5E39] flex items-center justify-center font-bold text-xl shrink-0">
              2
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#3F5E39]" /> Strikte Faktenprüfung & CHF-Preise
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Jeder verlinkte Vorteil wird vor der Freischaltung auf folgende Punkte geprüft:
              </p>
              <ul className="list-disc list-inside text-xs text-stone-600 space-y-1.5 pt-1 font-medium">
                <li>Exakter Normalpreis vs. Jugendpreis in Schweizer Franken (CHF)</li>
                <li>Genaue Altersgrenzen (z.B. bis 25 oder bis 30 Jahre)</li>
                <li>Erforderliche Nachweise (Studentenausweis, Legi, Swisspass oder ID)</li>
                <li>Verfügbarkeit in der Schweiz (schweizweit, online oder lokal)</li>
              </ul>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3F5E39] flex items-center justify-center font-bold text-xl shrink-0">
              3
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#3F5E39]" /> Monatlicher Re-Verifizierungszyklus
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Angebotspreise und Konditionen ändern sich dynamisch. Unser Redaktionsteam prüft gelistete Vorteile regelmässig (mindestens 1x monatlich sowie bei bekannten Tarifanpassungen). Jedes Angebot trägt den Stempel <strong className="text-emerald-800 font-semibold">Zuletzt geprüft: [Datum]</strong>.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3F5E39] flex items-center justify-center font-bold text-xl shrink-0">
              4
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#3F5E39]" /> Quelle: Offizielle Website des Anbieters
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Verlässlichkeit bedeutet Transparenz der Datenherkunft. Auf jeder Angebotsseite verlinken wir explizit mit dem Hinweis <strong className="text-stone-900 font-semibold">&quot;Quelle: Offizielle Website des Anbieters&quot;</strong> auf die primäre Urheberseite des jeweiligen Anbieters.
              </p>
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#3F5E39] flex items-center justify-center font-bold text-xl shrink-0">
              5
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#3F5E39]" /> Unabhängigkeit & Finanzierung
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Wir kennzeichnen Partnerlinks transparent. Wenn Nutzer über einen Link ein Angebot abschliessen, erhalten wir gegebenenfalls eine Vermittlungsprovision. Diese Finanzierung hat <strong>keinen Einfluss</strong> auf unsere redaktionelle Prüfung oder Rangfolge.
              </p>
            </div>
          </div>
        </div>

        {/* Correction & Feedback Policy */}
        <div className="bg-[#EAF0E5] border border-[#D6E2CE] rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-[#253D22] flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#3F5E39]" /> Feedback- & Korrekturrichtlinie
          </h3>
          <p className="text-[#253D22] text-sm leading-relaxed">
            Sollte sich ein Angebot geändert haben oder ein Link nicht mehr funktionieren, korrigieren wir dies umgehend. Hinweise von Nutzerinnen, Anbietern oder Hochschulen werden innerhalb von 24–48 Stunden bearbeitet.
          </p>
          <div className="pt-2">
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center gap-2 bg-[#3F5E39] hover:bg-[#324B2D] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" /> Korrektur oder Tipp melden <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
