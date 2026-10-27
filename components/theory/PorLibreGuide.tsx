"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  PiggyBank, 
  FileCheck, 
  Eye, 
  HeartPulse, 
  Car, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Sparkles
} from "lucide-react";

interface PorLibreGuideProps {
  locale: string;
}

export default function PorLibreGuide({ locale }: PorLibreGuideProps) {
  const [selectedCanton, setSelectedCanton] = useState("ZH");

  const CANTON_FEES: Record<string, { name: string; theorieFee: string; adminUrl: string }> = {
    ZH: { name: "Zürich", theorieFee: "CHF 40.-", adminUrl: "https://www.zh.ch/de/mobilitaet/fuehrerausweis-fahren-lernen.html" },
    BE: { name: "Bern", theorieFee: "CHF 40.-", adminUrl: "https://www.pom.be.ch/de/start/themen/strassenverkehr.html" },
    BS: { name: "Basel-Stadt", theorieFee: "CHF 40.-", adminUrl: "https://www.mfk.bs.ch/" },
    LU: { name: "Luzern", theorieFee: "CHF 35.-", adminUrl: "https://vku.lu.ch/" },
    SG: { name: "St. Gallen", theorieFee: "CHF 40.-", adminUrl: "https://www.sg.ch/verkehr/strassenverkehrsamt.html" },
    AG: { name: "Aargau", theorieFee: "CHF 35.-", adminUrl: "https://www.ag.ch/de/dvi/strassenverkehrsamt" },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-black rounded-full uppercase tracking-wider mb-2 border border-emerald-200">
          <PiggyBank className="w-4 h-4" /> Bis zu CHF 1&apos;800.- sparen
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          Führerschein auf eigene Faust (Por Libre) in der Schweiz
        </h1>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
          In der Schweiz musst du keine teure Fahrschule für die Theorie bezahlen. Lerne hier, wie du den Führerausweis Kategorie B komplett selbstständig machst.
        </p>
      </div>

      {/* Comparison Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold uppercase text-slate-400 mb-1">Klassischer Weg</div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Mit teurer Fahrschule</h3>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li className="flex items-center gap-2 text-rose-600">✕ Teure Theorie-Präsenzkurse (CHF 200 - 400)</li>
            <li className="flex items-center gap-2 text-rose-600">✕ 30 bis 40 Fahrstunden à CHF 95.- (CHF 2&apos;850+)</li>
            <li className="flex items-center gap-2 text-rose-600">✕ Hohe Administrationspauschalen der Fahrschule</li>
            <li className="font-extrabold text-slate-900 pt-2 border-t text-sm">Gesamtkosten: ca. CHF 3&apos;500 - 4&apos;500</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white shadow-xl border border-indigo-800">
          <div className="text-xs font-bold uppercase text-emerald-400 mb-1">Unser Weg &quot;Auf eigene Faust&quot;</div>
          <h3 className="text-xl font-bold text-white mb-3">Selbststudium + Begleitfahrten</h3>
          <ul className="space-y-2.5 text-xs text-slate-200">
            <li className="flex items-center gap-2 text-emerald-400">✓ Kostenlose Theorieprüfung online üben (CHF 0.-)</li>
            <li className="flex items-center gap-2 text-emerald-400">✓ Private Lernfahrten mit Eltern/Freunden und der blauen &quot;L&quot;-Tafel</li>
            <li className="flex items-center gap-2 text-emerald-400">✓ Nur 10-15 Kontrollfahrstunden für den Feinschliff</li>
            <li className="font-extrabold text-white pt-2 border-t border-white/20 text-sm">Gesamtkosten: ca. CHF 1&apos;800 - 2&apos;200</li>
          </ul>
        </div>
      </div>

      {/* Canton Selector */}
      <div className="bg-slate-100 p-6 rounded-3xl mb-12">
        <h3 className="text-sm font-bold text-slate-800 mb-2">
          Prüfungsgebühren nach Kanton (Strassenverkehrsamt)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Die amtliche Gebühr für die Theorieprüfung zahlst du direkt an deinen Wohnkanton:
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          {Object.entries(CANTON_FEES).map(([code, c]) => (
            <button
              key={code}
              onClick={() => setSelectedCanton(code)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCanton === code ? "bg-indigo-600 text-white shadow" : "bg-white text-slate-700 hover:bg-slate-200"
              }`}
            >
              Kanton {c.name}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="text-xs text-slate-400">Amtliche Theorie-Prüfungsgebühr im Kanton {CANTON_FEES[selectedCanton].name}:</div>
            <div className="text-xl font-black text-slate-900">{CANTON_FEES[selectedCanton].theorieFee}</div>
          </div>
          <a
            href={CANTON_FEES[selectedCanton].adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            Strassenverkehrsamt {selectedCanton} Website ↗
          </a>
        </div>
      </div>

      {/* The 4 Direct Steps */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-slate-900">
          So meldest du dich ohne Fahrschule zur Prüfung an:
        </h2>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center shrink-0">
            1
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Nothilfekurs (10h) & Sehtest</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Besuche einen anerkannten Samariterkurs für Lebensrettende Sofortmassnahmen (kostet ca. CHF 100.-). Den Sehtest machst du für ca. CHF 15.- bei jedem Schweizer Optiker (z.B. Fielmann, Visilab).
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center shrink-0">
            2
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Lernfahrgesuch einreichen</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lade das Formular &quot;Gesuch um Erteilung eines Lernfahrausweises&quot; deines Strassenverkehrsamtes herunter. Du bestätigst deine Identität einmalig bei der Gemeindeverwaltung oder Einwohnerkontrolle deines Wohnorts.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center shrink-0">
            3
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">Theorie online lernen & Prüfung buchen</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Übe mit unserer Plattform, bis du im Prüfungssimulator unter 15 Fehlerpunkten bleibst. Danach buchst du den Prüfungstermin direkt beim Strassenverkehrsamt (ohne Vermittler).
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center shrink-0">
            4
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-1">L-Tafel montieren & privat üben</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sobald du den Lernfahrausweis in der Hand hast, kaufst du für CHF 10.- eine blaue L-Tafel. Du darfst sofort mit jedem Begleiter fahren, der mindestens 23 Jahre alt ist und den Führerausweis seit mind. 3 Jahren besitzt!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`/${locale}/pruefung`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm shadow-lg transition"
        >
          Jetzt Theorie kostenlos üben <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
