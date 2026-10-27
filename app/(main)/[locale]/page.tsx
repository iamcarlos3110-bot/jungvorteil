import Link from "next/link";
import { Metadata } from "next";
import AdSlot from "@/components/ads/AdSlot";
import { CATEGORIES } from "@/data/questions";
import { 
  Car, 
  Clock, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Sparkles, 
  Users,
  Flame
} from "lucide-react";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Theorieprüfung Schweiz kostenlos üben | Auto & Motorrad Kat. B / A (ASA Fragen)",
    description: "Kostenlose Theorieprüfung Schweiz für Auto und Töff. Offizielle Prüfungsfragen, 50 Fragen Prüfungssimulation mit 45-Minuten-Timer, Schweizer Verkehrssignale und Erklärungen.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}`,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            100% Kostenlos • Schweizer ASA-Prüfungsstandard
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Theorieprüfung Schweiz <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">kostenlos üben</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Bestehe die offizielle Schweizer Führerprüfung für Auto (Kat. B) und Töff (Kat. A/A1). Realistische 50-Fragen-Simulation, alle Verkehrsschilder und detaillierte Erklärungen nach SVG und VRV.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href={`/${locale}/pruefung`}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-extrabold rounded-2xl shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <Award className="w-5 h-5" /> Offizielle Prüfung starten
            </Link>

            <Link
              href={`/${locale}/themen`}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 active:scale-95 text-white font-bold rounded-2xl transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-indigo-400" /> Nach Themen lernen
            </Link>
          </div>

          {/* Quick Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 50 Fragen wie beim Strassenverkehrsamt
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Max. 15 Fehlerpunkte (ASA-Regel)
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Keine Anmeldung erforderlich
            </div>
          </div>
        </div>
      </section>

      {/* AD SLOT AFTER HERO */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 relative z-20">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      {/* 3 CORE MODES GRID */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Wie möchtest du heute lernen?
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Wähle den Lernmodus, der am besten zu deinem aktuellen Wissensstand passt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Exam Simulator */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition">
                <Clock className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-indigo-600 tracking-wider">Prüfungsmodus</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                50-Fragen-Prüfung
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Die exakte Simulation der offiziellen Prüfung beim Strassenverkehrsamt mit 45-Minuten-Countdown und ASA-Punkteberechnung (max. 15 Fehler).
              </p>
            </div>
            <Link
              href={`/${locale}/pruefung`}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
            >
              Prüfung beginnen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2: Topic Trainer */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition">
                <BookOpen className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Gezieltes Training</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                Training nach Themen
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Übe gezielt Rechtsvortritt, Signale, Autobahnregeln oder Promillegrenzen ohne Zeitdruck mit sofortigem Feedback und Rechtsgrundlagen.
              </p>
            </div>
            <Link
              href={`/${locale}/themen`}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-amber-600 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
            >
              Themen trainieren <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3: Signs Explorer */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase text-rose-600 tracking-wider">Nachschlagewerk</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">
                Schweizer Signale (SSV)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Der interaktive Katalog aller Schweizer Strassenschilder, Gefahrensignale, Vortrittsregeln und Vorschriften mit verständlicher Bedeutung.
              </p>
            </div>
            <Link
              href={`/${locale}/signale`}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-rose-600 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2"
            >
              Signale durchsuchen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPIC LIST OVERVIEW */}
      <section className="bg-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Die wichtigsten Prüfungsthemen
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Klicke auf ein Thema, um sofort gezielte Übungsfragen zu starten.
              </p>
            </div>
            <Link
              href={`/${locale}/themen`}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              Alle Themen anzeigen <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${locale}/themen`}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {cat.count} Fragen
                  </div>
                  <div className="font-bold text-slate-900 text-base mt-0.5 group-hover:text-indigo-600 transition">
                    {cat.name}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AD SLOT BEFORE GUIDE */}
      <div className="max-w-4xl mx-auto px-4 my-8">
        <AdSlot slot="AD_BETWEEN_OFFERS_1" label />
      </div>

      {/* DRIVING LICENSE GUIDE TEASER */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="px-3 py-1 bg-white/10 text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider">
              Ab 17 Jahren
            </span>
            <h2 className="text-3xl font-black text-white mt-3 mb-4 leading-tight">
              Wie läuft der Führerschein in der Schweiz genau ab?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Vom Nothelferkurs über den Lernfahrausweis mit der blauen &quot;L&quot;-Tafel, den VKU-Kurs bis zur praktischen Prüfung und dem 3-jährigen Führerausweis auf Probe.
            </p>
            <Link
              href={`/${locale}/ratgeber`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl text-sm shadow hover:bg-slate-100 transition"
            >
              Schritt-für-Schritt Anleitung lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="w-full md:w-auto bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3 min-w-[280px]">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold flex items-center justify-center">1</span>
              <span>Nothelferkurs (10h)</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold flex items-center justify-center">2</span>
              <span>Theorieprüfung (ab 17 J.)</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold flex items-center justify-center">3</span>
              <span>Lernphase mit Begleitung (&quot;L&quot;)</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-indigo-500/30 text-indigo-300 font-bold flex items-center justify-center">4</span>
              <span>VKU & Praktische Fahrprüfung</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-300 font-bold flex items-center justify-center">5</span>
              <span>Führerausweis auf Probe & WAB</span>
            </div>
          </div>
        </div>
      </section>

      {/* AD SLOT BEFORE FOOTER */}
      <div className="max-w-4xl mx-auto px-4 my-8">
        <AdSlot slot="AD_BEFORE_FOOTER" label />
      </div>
    </div>
  );
}
