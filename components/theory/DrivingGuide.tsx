"use client";

import React from "react";
import Link from "next/link";
import { 
  HeartPulse, 
  BookOpen, 
  Car, 
  ShieldAlert, 
  Award, 
  CheckCircle, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";

interface DrivingGuideProps {
  locale: string;
}

export default function DrivingGuide({ locale }: DrivingGuideProps) {
  const steps = [
    {
      step: 1,
      title: "Nothelferkurs & Sehtest",
      age: "Ab 16-17 Jahren",
      duration: "10 Stunden + 15 Min.",
      cost: "ca. CHF 100 - 150",
      icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
      description: "Obligatorischer 10-stündiger Nothilfekurs (lebensrettende Sofortmassnahmen) bei einer anerkannten Organisation (z.B. Samariter, TCS). Der Sehtest wird bei einem Schweizer Optiker oder Augenarzt gemacht (Gültigkeit 24 Monate).",
      tips: "Der Nothelferkurs ist 6 Jahre lang gültig. Mache ihn frühzeitig!",
    },
    {
      step: 2,
      title: "Lernfahrgesuch & Theorieprüfung",
      age: "Ab 17 Jahren",
      duration: "Selbststudium + 45 Min. Prüfung",
      cost: "ca. CHF 30 - 50 (Gebühr Strassenverkehrsamt)",
      icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
      description: "Einreichen des offiziellen Gesuchs beim Strassenverkehrsamt deines Kantons. Danach legst du die offizielle Theorieprüfung ab (50 Fragen, maximal 15 Fehlerpunkte erlaubt).",
      tips: "In der Schweiz gibt es keine Pflicht für Theoriekurse in der Fahrschule! Du kannst komplett online mit unserer Plattform oder Apps lernen.",
    },
    {
      step: 3,
      title: "Lernfahrausweis & Fahren mit der blauen 'L'-Tafel",
      age: "Ab 17 Jahren",
      duration: "Mind. 12 Monate Lernphase (unter 20 J.)",
      cost: "L-Tafel: ca. CHF 10",
      icon: <Car className="w-6 h-6 text-blue-500" />,
      description: "Nach bestandener Theorie erhältst du den Lernfahrausweis (24 Monate gültig). Du darfst mit einer Begleitperson privat üben! Die Begleitperson muss mind. 23 Jahre alt sein und den Führerausweis seit mindestens 3 Jahren besitzen (nicht mehr auf Probe).",
      tips: "Wichtig: Wer den Lernfahrausweis vor dem 20. Geburtstag erwirbt, muss zwingend eine Lernphase von mindestens einem Jahr durchlaufen, bevor die praktische Prüfung abgelegt werden darf.",
    },
    {
      step: 4,
      title: "VKU (Verkehrskunde) & Praktische Prüfung",
      age: "Ab 18 Jahren",
      duration: "8 Stunden VKU + Fahrstunden",
      cost: "VKU: ca. CHF 200 - 250 | Prüfung: ca. CHF 120 - 150",
      icon: <ShieldAlert className="w-6 h-6 text-amber-500" />,
      description: "Obligatorischer Verkehrskundeunterricht (8 Stunden bei einer Fahrschule) über Gefahrenlehre, Taktik und Strassendynamik. Danach folgt die ca. 45-minütige praktische Fahrprüfung mit einem Experten des Strassenverkehrsamts.",
      tips: "Nutze private Fahrten mit Eltern oder Freunden, um teure Fahrstunden zu sparen. Fahrstunden dienen dem Feinschliff.",
    },
    {
      step: 5,
      title: "Führerausweis auf Probe & WAB-Kurs",
      age: "Nach bestandener praktischer Prüfung",
      duration: "3 Jahre Probezeit + 1 Tag WAB",
      cost: "WAB-Kurs: ca. CHF 350 - 450",
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      description: "Du erhältst den Führerausweis auf Probe (3 Jahre). In dieser Zeit gilt striktes Alkoholverbot (0.1 Promille). Innerhalb des ersten Jahres musst du den 1-tägigen Weiterausbildungskurs (WAB) auf einer geschlossenen Piste absolvieren (Notbremsungen, Rutschbelag, Eco-Drive).",
      tips: "Nach den 3 Jahren und absolviertem WAB erhältst du den definitiven, unbefristeten Schweizer Führerausweis automatisch.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
          Offizieller Schweizer Leitfaden
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
          Wie Jugendliche in der Schweiz den Führerschein machen
        </h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Schritt-für-Schritt-Anleitung für den Schweizer Führerausweis Kategorie B (Auto). Alle Pflichtkurse, Fristen und Spartipps im Überblick.
        </p>
      </div>

      {/* Quick Cost Overview */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Gesamtkosten für den Führerschein</h2>
            <p className="text-slate-300 text-sm max-w-xl">
              In der Schweiz kostet der Führerausweis insgesamt zwischen <strong>CHF 2&apos;500 und 3&apos;800</strong>. Wer viel privat mit der &quot;L&quot;-Tafel übt, spart mehrere hundert Franken an Fahrstunden!
            </p>
          </div>
          <Link
            href={`/${locale}/pruefung`}
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow transition whitespace-nowrap text-sm flex items-center gap-2 cursor-pointer"
          >
            Jetzt Theorie üben <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5 Steps Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200 before:hidden md:before:block">
        {steps.map((st) => (
          <div key={st.step} className="relative flex flex-col md:flex-row items-start gap-6 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
            {/* Step Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm z-10">
              {st.icon}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">
                  Schritt {st.step}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg">
                    {st.age}
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg">
                    {st.cost}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                {st.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {st.description}
              </p>

              <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Spartipp / Wichtig:</strong> {st.tips}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
