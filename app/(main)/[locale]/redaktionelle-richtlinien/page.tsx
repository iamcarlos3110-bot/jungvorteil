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
            JungVorteil ist ein unabhängiges Schweizer Vorteilsportal, gegründet und betrieben von <strong>Carlos Piñeiro</strong>. Angebote werden vor der Veröffentlichung anhand offizieller Anbieterinformationen geprüft. Unser Anspruch ist es, jungen Menschen in der Schweiz (Auszubildende, Studierende und junge Erwachsene von 16 bis 30 Jahren) verlässliche, echte und überprüfbare Preisvorteile zugänglich zu machen.
          </p>
          <p className="text-stone-700 leading-relaxed text-base">
            Wir veröffentlichen keine erfundenen Rabattprozente, keine irreleitenden Lockangebote und keine Inhalte ohne offizielle Bestätigung des jeweiligen Anbieters.
          </p>
        </div>

        {/* Original Content Standard Box */}
        <div className="bg-[#F8FAF7] rounded-3xl border border-[#E2EBDD] p-8 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#3F5E39] text-xs font-bold uppercase tracking-wide">
            Originalität &amp; Eigenrecherche
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Informationen aus erster Hand &amp; 100% Original-Inhalte</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            Alle Ratgeber, Vergleiche und Spartipps auf JungVorteil basieren auf <strong>eigenständiger Redaktionsarbeit und primärer Quellenevaluierung</strong>. Wir übernehmen keine vorgefertigten Pressetexte, nutzen keine automatisiert generierten Inhalte und kopieren keine fremden Artikel.
          </p>
          <ul className="list-disc list-inside text-xs text-stone-600 space-y-1.5 font-medium pt-1">
            <li>Manuelle Auswertung der offiziellen Tarifblätter und AGB der Schweizer Anbieter.</li>
            <li>Eigene Test-Käufe und Simulationen der Einlöseprozesse (z.B. bei Neobanken, ÖV-Abos und 3a-Apps).</li>
            <li>Direkter Abgleich mit kantonalen Behördenstellen (z.B. SVA Zürich, ASV Bern) für Prämienverbilligungen.</li>
          </ul>
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

        {/* Dedicated Section: Was bedeutet "geprüft"? (Qué significa 'geprüft') */}
        <div className="bg-[#EAF0E5] border border-[#D6E2CE] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#253D22] text-xs font-bold uppercase tracking-wide border border-[#D6E2CE]">
            <CheckCircle2 className="w-4 h-4 text-[#3F5E39]" /> Definition & Standard
          </div>
          <h2 className="text-2xl font-bold text-[#253D22]">Was bedeutet der Status &quot;Zuletzt geprüft&quot;?</h2>
          <p className="text-[#253D22] text-sm leading-relaxed">
            Wenn ein Angebot auf JungVorteil.ch mit der Kennzeichnung <strong className="font-bold underline">Zuletzt geprüft: [Datum]</strong> versehen ist, bestätigt dies, dass die Redaktion am angegebenen Tag folgende 4 Kontrollen manuell durchgeführt hat:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2">
            <div className="bg-white p-5 rounded-2xl border border-[#D6E2CE] space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                1. Preis- & Tariffaktencheck
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Der angezeigte Jugendpreis und der Normalpreis in CHF stimmen exakt mit dem aktuellen Tarif des Anbieters überein.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#D6E2CE] space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                2. Link- & Funktionsprüfung
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Der Verweis führt direkt zur funktionierenden, offiziellen Aktionsseite. Es liegen keine 404-Fehler oder kaputten Links vor.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#D6E2CE] space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                3. Alters- & Statuskriterien
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Die Voraussetzungen (Altersgrenzen 16–25 / 16–30 J. sowie Studentenausweis-Pflicht) entsprechen den offiziellen Regularien.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#D6E2CE] space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                4. Gültigkeit & Fristen
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Das Angebot ist weiterhin aktiv und nicht abgelaufen. Ablaufende Aktionen werden mit Vorwarnung gekennzeichnet.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Section: Wie Angebote verifiziert werden (Cómo se verifican paso a paso) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#3F5E39] text-xs font-bold uppercase tracking-wide">
            Audit-Protokoll
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Der Verifizierungsprozess: Schritt für Schritt</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            Um höchste Datenqualität zu gewährleisten, durchläuft jedes Angebot einen vierstufigen Verifizierungs-Workflow:
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F5E39] text-white flex items-center justify-center font-bold shrink-0">
                Stufe 1
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm">Primärquellen-Abgleich</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Die Redaktion vergleicht Titel, Beschreibung und Rabatthöhe direkt mit den offiziellen Angaben auf der Website oder den AGB des Anbieters.
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F5E39] text-white flex items-center justify-center font-bold shrink-0">
                Stufe 2
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm">Test-Durchlauf & Checkout-Simulation</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Wir simulieren den Einlöseprozess (z.B. Eingabe von Gutscheincodes, Weiterleitung zum Shop oder Nachweis per Switch edu-ID), um Funktionsfähigkeit ohne versteckte Zusatzkosten sicherzustellen.
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F5E39] text-white flex items-center justify-center font-bold shrink-0">
                Stufe 3
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm">Alters- & Kriterien-Audit</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Audit der Zielgruppe: Liegen klare Altersgrenzen (z.B. bis 25 Jahre) oder spezifische Studentennachweise vor?
                </p>
              </div>
            </div>

            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-5 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3F5E39] text-white flex items-center justify-center font-bold shrink-0">
                Stufe 4
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm">Zeitstempel-Freigabe (checked_at)</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Nach erfolgreicher Prüfung wird das Angebot im System mit dem aktuellen Zeitstempel versehen und für Nutzerinnen und Nutzer freigeschaltet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Section: Umgang mit abgelaufenen Angeboten (Qué ocurre cuando una oferta deja de estar disponible) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wide border border-red-200">
            Lifecycle & Transparenz
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Was passiert, wenn ein Angebot nicht mehr verfügbar ist?</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            Sobald eine Aktion ihr Ablaufdatum erreicht oder ein Anbieter ein Jugendangebot vorzeitig beendet, greift bei JungVorteil ein dreistufiger Prozess:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pt-2">
            <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                Sofortige Kennzeichnung & Deaktivierung
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Der Einlöse-Button wird deaktiviert (&quot;Abgelaufen&quot;) und die Seite erhält den Hinweis &quot;Angebot möglicherweise abgelaufen&quot;. Im Schema.org-Markup wird der Status auf <code className="bg-gray-200 px-1 py-0.5 rounded text-[10px]">Discontinued</code> gesetzt.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                Entfernung aus Übersichten & Sitemap
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Abgelaufene Angebote werden automatisch aus den Hauptlisten (Homepage, Kategorien, Städte) ausgeblendet, damit Nutzer nur aktive Vorteile finden.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-2">
              <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                Anzeige aktiver Alternativen
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Besucht ein Nutzer eine alte Angebots-URL, werden ihm direkt darunter gleichwertige, aktive Alternativen desselben Anbieters oder derselben Kategorie vorgeschlagen.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Section: Objektive Produktvergleiche */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#3F5E39] text-xs font-bold uppercase tracking-wide">
            Vergleichs-Standard
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Objektive &amp; Transparente Produktvergleiche</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            Bei allen Produkt- und Tarifvergleichen (z.B. Neobanken, Mobilfunkabos, SBB-Billette oder Säule 3a Anbietern) wendet JungVorteil einen <strong>einheitlichen, unabhängigen Bewertungs-Standard</strong> an:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-2xl space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">1. Preistransparenz in CHF</h3>
              <p className="text-stone-600 leading-relaxed">Gegenüberstellung von Normalpreis, Jugendtarif und realen Nebenkosten ohne versteckte Gebühren.</p>
            </div>
            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-2xl space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">2. Vor- &amp; Nachteile</h3>
              <p className="text-stone-600 leading-relaxed">Jedes Produkt wird mit Stärken und Schwächen (z.B. Wechselkursaufschläge oder Mindestlaufzeiten) bewertet.</p>
            </div>
            <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-2xl space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">3. Nutzungsszenarien</h3>
              <p className="text-stone-600 leading-relaxed">Klares Aufzeigen, für welches Nutzerprofil (z.B. Studierende vs. Berufseinsteiger) sich welches Angebot eignet.</p>
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
                <FileText className="w-5 h-5 text-[#3F5E39]" /> Relevanz &amp; Echter Mehrwert (Keine reinen Traffic-Texte)
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Unsere Magazinartikel und Ratgeber existieren nicht für die reine Suchmaschinen-Optimierung oder Klick-Generierung. Jeder Beitrag bietet praxiserprobte Insider-Informationen, verifizierte CHF-Preise, behördliche Anleitungen (z.B. IPV Prämienverbilligung) und echten, spürbaren Mehrwert für den Schweizer Alltag von Jugendlichen und Studierenden.
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
                <CheckCircle2 className="w-5 h-5 text-[#3F5E39]" /> Konkrete Daten &amp; Faktenprüfung in CHF
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Wir verzichten konsequent auf vage Aussagen wie &quot;viel sparen&quot; oder &quot;super günstig&quot;. Jeder verlinkte Vorteil nennt <strong>konkrete Daten</strong>:
              </p>
              <ul className="list-disc list-inside text-xs text-stone-600 space-y-1.5 pt-1 font-medium">
                <li>Exakter Normalpreis vs. Jugendpreis in Schweizer Franken (CHF)</li>
                <li>Konkrete Ersparnis als Betrag (CHF) und Prozentwert (%)</li>
                <li>Genaue Altersgrenzen (z.B. 16 bis 25 Jahre / unter 30 J.)</li>
                <li>Erforderliche Nachweise (Studentenausweis, Legi, Swisspass oder ID)</li>
                <li>Exaktes Datum der letzten manuellen Überprüfung (Zuletzt geprüft: [Datum])</li>
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
                <Eye className="w-5 h-5 text-[#3F5E39]" /> Transparente Quellennachweise &amp; Primärquellen
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Verlässlichkeit bedeutet Transparenz der Datenherkunft. Auf jeder Angebotsseite und in jedem Ratgeber verlinken wir explizit mit dem Hinweis <strong className="text-stone-900 font-semibold">&quot;Quelle: Offizielle Website des Anbieters&quot;</strong> direkt auf die primäre Urheberseite (z.B. SBB, Neobanken, Kantonsstellen oder Hochschulportale). So kann jede Nutzerin und jeder Nutzer die Konditionen eigenständig bei der Originalquelle überprüfen.
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
