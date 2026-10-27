"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface DailyTipCardProps {
  locale: string;
}

const SWISS_EXAM_TIPS = [
  "In der Schweiz gilt an Kreiseln immer: Vortritt für die Fahrzeuge IM Kreisel! Beim Einfahren wird NICHT geblinkt, nur beim Verlassen.",
  "Für Neulenker in der dreijährigen Probezeit gilt eine faktische Nulltoleranz von 0.10 ‰ Alkohol im Blut.",
  "Schienenfahrzeuge (Trams) haben auf gleichrangigen Strassen stets den Vortritt, selbst wenn sie von links kommen!",
  "Die allgemeine Höchstgeschwindigkeit innerorts beträgt 50 km/h ab der weissen Ortstafel, auch ohne zusätzliches Tempo-50-Schild.",
  "In Tempo-30-Zonen gilt an allen Kreuzungen der Rechtsvortritt, sofern keine Schilder etwas anderes anordnen.",
  "Auf der Autobahn ist das passive 'Rechtsvorbeifahren' bei Kolonnenverkehr seit 2021 erlaubt, das aktive 'Rechtsüberholen' bleibt streng verboten!",
  "Die gesetzliche Mindestprofiltiefe für Autoreifen beträgt 1.6 mm. Für Winterreifen empfiehlt der TCS jedoch mindestens 4.0 mm.",
];

export default function DailyTipCard({ locale }: DailyTipCardProps) {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    // Pick daily tip based on day of year
    const day = Math.floor(Date.now() / 86400000);
    setTipIndex(day % SWISS_EXAM_TIPS.length);
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-900/40 via-indigo-950/60 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 shadow-lg backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-xl shrink-0">
          💡
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
              Prüfungstipp des Tages
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
              ASA Schweiz
            </span>
          </div>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {SWISS_EXAM_TIPS[tipIndex]}
          </p>
        </div>
      </div>

      <Link
        href={`/${locale}/ratgeber`}
        className="text-xs font-bold text-indigo-300 hover:text-white flex items-center gap-1.5 shrink-0 transition"
      >
        <span>Mehr im Ratgeber</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
