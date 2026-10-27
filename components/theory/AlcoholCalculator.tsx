"use client";

import React, { useState } from "react";
import { AlertCircle, ShieldAlert, Award, Wine, Beer, Clock } from "lucide-react";

export default function AlcoholCalculator() {
  const [gender, setGender] = useState<"m" | "w">("m");
  const [weightKg, setWeightKg] = useState(70);
  const [beers, setBeers] = useState(1); // 0.5L (ca. 20g Alkohol)
  const [wines, setWines] = useState(0); // 0.15L (ca. 14g)
  const [shots, setShots] = useState(0); // 4cl (ca. 12g)
  const [hours, setHours] = useState(1);

  // Widmark formula: Alkohol (g) / (Gewicht * r) - (Stunden * 0.15)
  const totalAlcoholGrams = (beers * 20) + (wines * 14) + (shots * 12);
  const r = gender === "m" ? 0.68 : 0.55;
  const theoreticalMaxPromille = totalAlcoholGrams / (weightKg * r);
  const degradedPromille = hours * 0.15;
  const currentPromille = Math.max(0, Number((theoreticalMaxPromille - degradedPromille).toFixed(2)));

  const isNovelExceeded = currentPromille > 0.10;
  const isRegularExceeded = currentPromille >= 0.50;
  const isSevereCrime = currentPromille >= 0.80;

  const hoursToZero = currentPromille > 0 ? (currentPromille / 0.15).toFixed(1) : "0";

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider border border-rose-200">
          SVG Art. 55 & VRV Art. 2a
        </span>
        <h1 className="text-3xl font-black text-slate-900 mt-2">
          🍷 Schweizer Promillerechner & Fahrverbot
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Berechne deinen Blutalkoholspiegel und erfahre, welche Strafen für Neulenker (0.10‰) und erfahrene Fahrer (0.50‰) drohen.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8">
        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">Geschlecht:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("m")}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                  gender === "m" ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                Männlich
              </button>
              <button
                onClick={() => setGender("w")}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition ${
                  gender === "w" ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-700 border-slate-200"
                }`}
              >
                Weiblich
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">
              Körpergewicht: <span className="text-indigo-600 font-extrabold">{weightKg} kg</span>
            </label>
            <input
              type="range"
              min="45"
              max="120"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Drinks Counter */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <Beer className="w-6 h-6 mx-auto mb-1 text-amber-500" />
            <div className="text-xs font-bold text-slate-700">Bier (0.5L)</div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <button onClick={() => setBeers((p) => Math.max(0, p - 1))} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">-</button>
              <span className="font-black text-sm w-4">{beers}</span>
              <button onClick={() => setBeers((p) => p + 1)} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">+</button>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <Wine className="w-6 h-6 mx-auto mb-1 text-rose-500" />
            <div className="text-xs font-bold text-slate-700">Wein (1.5dl)</div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <button onClick={() => setWines((p) => Math.max(0, p - 1))} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">-</button>
              <span className="font-black text-sm w-4">{wines}</span>
              <button onClick={() => setWines((p) => p + 1)} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">+</button>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <div className="text-xl mb-0.5">🥃</div>
            <div className="text-xs font-bold text-slate-700">Schnaps (4cl)</div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <button onClick={() => setShots((p) => Math.max(0, p - 1))} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">-</button>
              <span className="font-black text-sm w-4">{shots}</span>
              <button onClick={() => setShots((p) => p + 1)} className="w-7 h-7 rounded-lg bg-white border font-bold text-xs">+</button>
            </div>
          </div>
        </div>

        {/* Time Elapsed */}
        <div className="mb-8">
          <label className="text-xs font-bold text-slate-700 block mb-2 flex items-center justify-between">
            <span>Vergangene Zeit seit Trinkbeginn:</span>
            <span className="text-indigo-600 font-extrabold">{hours} {hours === 1 ? "Stunde" : "Stunden"}</span>
          </label>
          <input
            type="range"
            min="0"
            max="12"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Result Box */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl text-center">
          <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">Geschätzter Promillewert</div>
          <div className="text-5xl font-black text-amber-400 mt-1 mb-2">
            {currentPromille} ‰
          </div>
          <div className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Abbauzeit bis 0.00 ‰: ca. <strong className="text-white">{hoursToZero} Stunden</strong>
          </div>
        </div>
      </div>

      {/* Consequences Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Novel drivers */}
        <div className={`p-6 rounded-3xl border-2 transition ${
          isNovelExceeded ? "bg-rose-50 border-rose-300" : "bg-emerald-50 border-emerald-200"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-indigo-700">Fahrschüler & Neulenker (3 J. Probe)</span>
            <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white">Limit: 0.10 ‰</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {isNovelExceeded ? "🚨 Fahren verboten!" : "✓ Im erlaubten Bereich"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isNovelExceeded 
              ? "Für Neulenker gilt faktisch Nulltoleranz. Bei Verstoß: Mindestens CHF 600.- Busse, Verlängerung der Probezeit um 1 ganzes Jahr. Bei Wiederholung: Annullierung des Führerausweises!" 
              : "Keine Beanstandung bei der Verkehrskontrolle."}
          </p>
        </div>

        {/* Regular drivers */}
        <div className={`p-6 rounded-3xl border-2 transition ${
          isRegularExceeded ? "bg-rose-50 border-rose-300" : "bg-emerald-50 border-emerald-200"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black uppercase text-indigo-700">Erfahrene Fahrer (definitiv)</span>
            <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-white">Limit: 0.50 ‰</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {isSevereCrime ? "🚨 Schwere Straftat (ab 0.8‰)!" : isRegularExceeded ? "⚠️ Überschritten (ab 0.5‰)" : "✓ Im legalen Bereich"}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isSevereCrime 
              ? "Ab 0.80 ‰: Zwingend mindestens 3 Monate Führerausweisentzug, Verzeigung, Eintrag ins Strafregister und hohe Geldstrafen." 
              : isRegularExceeded 
              ? "Ab 0.50 ‰: Ordnungsbusse oder Verwarnung, Weiterfahrt wird sofort polizeilich untersagt." 
              : "Unter 0.50 ‰: Fahren gesetzlich erlaubt (sofern keine Fahruntüchtigkeit vorliegt)."}
          </p>
        </div>
      </div>
    </div>
  );
}
