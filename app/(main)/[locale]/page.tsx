import Link from "next/link";
import { Metadata } from "next";
import AdSlot from "@/components/ads/AdSlot";
import { CATEGORIES } from "@/data/questions";
import DailyTipCard from "@/components/theory/DailyTipCard";
import InfractionsSimulator from "@/components/theory/InfractionsSimulator";
import NumberedTestsGrid from "@/components/theory/NumberedTestsGrid";
import { 
  Car, 
  Clock, 
  Award, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Brain,
  RotateCcw,
  Bike,
  Tractor,
  HelpCircle
} from "lucide-react";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "AutoTheorie Schweiz — Theorieprüfung Kat. B & A kostenlos üben (ASA Fragen)",
    description: "Kostenlose Vorbereitung auf die Schweizer Führerprüfung. 50-Fragen-Prüfungssimulation, Modo Memorizar, Fehler-Repetitorium und alle Verkehrssignale nach ASA-Standard.",
    alternates: {
      canonical: `https://jungvorteil.ch/${locale}`,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#090D08] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#708F52_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-500/20 border border-olive-400/30 text-olive-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-olive-400" />
            🇨🇭 Kostenlose Schweizer Theorieprüfung (ASA-Standard)
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto mb-4 text-white">
            Wähle deinen Führerschein<br />
            und bestehe <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-300 via-emerald-300 to-olive-200">beim 1. Versuch</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Die moderne Schweizer Lernplattform für das Selbststudium: offizielle ASA-Prüfungssimulation, intelligentes Fehler-Repetitorium und Lernkarten zum Memorieren.
          </p>

          {/* PERMITS SELECTOR GRID (Like AprobadosYA) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            <Link
              href={`/${locale}/pruefung`}
              className="p-5 rounded-2xl bg-[#121711] hover:bg-[#161D15] border border-[#222B1E] hover:border-[#556F3B] transition flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#556F3B] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition shadow-sm">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#A3C973] font-bold uppercase">Kategorie B</div>
                <div className="text-base font-extrabold text-white">Auto (PW)</div>
                <div className="text-[11px] text-slate-400">Ab 17 Jahren • 50 Fragen</div>
              </div>
            </Link>

            <Link
              href={`/${locale}/themen`}
              className="p-5 rounded-2xl bg-[#121711] hover:bg-[#161D15] border border-[#222B1E] hover:border-amber-400 transition flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shrink-0 group-hover:scale-110 transition shadow-sm">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-amber-300 font-bold uppercase">Kategorie A / A1</div>
                <div className="text-base font-extrabold text-white">Motorrad & Roller</div>
                <div className="text-[11px] text-slate-400">Ab 15/16 Jahren • Basistheorie</div>
              </div>
            </Link>

            <Link
              href={`/${locale}/themen`}
              className="p-5 rounded-2xl bg-[#121711] hover:bg-[#161D15] border border-[#222B1E] hover:border-emerald-400 transition flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition shadow-sm">
                <Tractor className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-emerald-300 font-bold uppercase">Kategorie M / G</div>
                <div className="text-base font-extrabold text-white">Mofa & Traktor</div>
                <div className="text-[11px] text-slate-400">Ab 14 Jahren • Theorie Mofa</div>
              </div>
            </Link>
          </div>

          {/* DAILY TIP CARD (Inspired by AprobadosYA) */}
          <div className="max-w-3xl mx-auto">
            <DailyTipCard locale={locale} />
          </div>
        </div>
      </section>

      {/* AD SLOT AFTER HERO */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 relative z-20">
        <AdSlot slot="AD_AFTER_HERO" label />
      </div>

      {/* CORE TOOLS SECTION (4 Grid Cards like AprobadosYA) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white tracking-tight">
            Warum mit AutoTheorie Schweiz lernen?
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Intelligente Werkzeuge, damit du ohne teure Theoriekurse im ersten Anlauf bestehst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Exam Simulator */}
          <Link
            href={`/${locale}/pruefung`}
            className="bg-[#121711] rounded-3xl border border-[#222B1E] p-6 shadow-sm hover:border-[#556F3B] hover:bg-[#161D15] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1C2618] border border-[#344528] flex items-center justify-center text-[#A3C973] mb-4 group-hover:scale-110 transition">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                50-Fragen-Simulation
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Offizieller ASA-Prüfungsmodus mit 45-Minuten-Timer und maximal 15 erlaubten Fehlerpunkten.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#1F271B] flex items-center gap-1.5 text-xs font-bold text-[#A3C973]">
              Prüfung starten <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 2: Mistakes Repetition */}
          <Link
            href={`/${locale}/fallos`}
            className="bg-[#121711] rounded-3xl border border-[#222B1E] p-6 shadow-sm hover:border-[#556F3B] hover:bg-[#161D15] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-950/40 border border-rose-900/60 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Fehler-Repetitorium
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Deine falsch beantworteten Fragen werden automatisch gespeichert, um sie gezielt zu wiederholen.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#1F271B] flex items-center gap-1.5 text-xs font-bold text-rose-400">
              Fehler üben <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 3: Memorize Mode */}
          <Link
            href={`/${locale}/memorizar`}
            className="bg-[#121711] rounded-3xl border border-[#222B1E] p-6 shadow-sm hover:border-[#556F3B] hover:bg-[#161D15] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-900/60 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Modo Memorizar
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Flashcards mit den wichtigsten Gesetzesartikeln, Bremswegen, Tempolimits und Prüfungstricks.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#1F271B] flex items-center gap-1.5 text-xs font-bold text-amber-400">
              Karten lernen <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* Card 4: Swiss Signs */}
          <Link
            href={`/${locale}/signale`}
            className="bg-[#121711] rounded-3xl border border-[#222B1E] p-6 shadow-sm hover:border-[#556F3B] hover:bg-[#161D15] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-950/40 border border-teal-900/60 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                Schweizer Signale
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Vollständiger Katalog aller Schweizer Verkehrsschilder (SSV) mit detaillierten Erklärungen.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-[#1F271B] flex items-center gap-1.5 text-xs font-bold text-teal-400">
              Signale ansehen <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </section>

      {/* NUMBERED TESTS SECTION (Like AprobadosYA 100 Tests) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black uppercase text-[#A3C973] tracking-wider">
            Offizieller Fragenkatalog ASA
          </span>
          <h2 className="text-3xl font-black text-white mt-1">
            Tests nach Nummern üben
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Absolviere die einzelnen Tests nacheinander, um den gesamten Prüfungsstoff schrittweise zu beherrschen.
          </p>
        </div>

        <NumberedTestsGrid locale={locale} />
      </section>

      {/* AD SLOT MIDDLE */}
      <div className="max-w-4xl mx-auto px-4 my-4">
        <AdSlot slot="AD_BETWEEN_OFFERS_1" label />
      </div>

      {/* INFRACTIONS SIMULATOR (From AprobadosYA) */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <InfractionsSimulator />
      </section>

      {/* TOPIC LIST OVERVIEW */}
      <section className="bg-[#0D120C] border-y border-[#1E271A] py-16 px-4 my-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Themen für die Schweizer Theorieprüfung
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Lerne systematisch nach Kapiteln der Schweizer Verkehrsregelnverordnung.
              </p>
            </div>
            <Link
              href={`/${locale}/themen`}
              className="text-xs font-bold text-[#A3C973] hover:text-white flex items-center gap-1 transition"
            >
              Alle Themen <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/${locale}/themen`}
                className="bg-[#121711] p-5 rounded-2xl border border-[#222B1E] shadow-sm hover:border-[#556F3B] hover:bg-[#161D15] transition flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    {cat.count} Fragen
                  </div>
                  <div className="font-bold text-white text-base mt-0.5 group-hover:text-[#A3C973] transition">
                    {cat.name}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#1A2217] flex items-center justify-center text-slate-400 group-hover:bg-[#556F3B] group-hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & FAQ RICH BLOCK (Like AprobadosYA SEO Section) */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-[#121711] rounded-3xl border border-[#222B1E] p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
            Häufige Fragen zur Schweizer Theorieprüfung (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-[#1F271B] pb-5">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#A3C973]" />
                Wie viele Fehlerpunkte darf man bei der Theorieprüfung in der Schweiz haben?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Die amtliche Theorieprüfung der Kategorie B (Auto) und A (Motorrad) umfasst <strong>50 Fragen</strong> mit maximal 150 erreichbaren Punkten. Um zu bestehen, darfst du höchstens <strong>15 Fehlerpunkte</strong> erzielen (du musst also mindestens 135 Punkte erreichen).
              </p>
            </div>

            <div className="border-b border-[#1F271B] pb-5">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#A3C973]" />
                Wie lange dauert die offizielle Theorieprüfung?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Beim Strassenverkehrsamt hast du exakt <strong>45 Minuten</strong> Zeit, um die 50 Fragen am Computer zu beantworten. Unser Prüfungssimulator repliziert diesen Countdown 1:1.
              </p>
            </div>

            <div className="border-b border-[#1F271B] pb-5">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#A3C973]" />
                Muss man in der Schweiz Theorie-Unterricht in der Fahrschule besuchen?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong>Nein!</strong> In der Schweiz gibt es keine gesetzliche Pflicht, Theoriestunden in einer Fahrschule zu absolvieren. Du kannst die Theorie komplett im Selbststudium online mit unserer Plattform lernen. Nur der Nothilfekurs (10h) und der spätere VKU (8h) sind obligatorisch.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#A3C973]" />
                Wie lange ist die bestandene Theorieprüfung in der Schweiz gültig?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Seit dem 1. Januar 2021 ist die bestandene Basistheorieprüfung in der Schweiz <strong>unbeschränkt gültig</strong> für den Erwerb weiterer Führerausweiskategorien.
              </p>
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
