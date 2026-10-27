"use client";

import React, { useState } from "react";
import { INFRACTIONS_DATA, Infraction } from "@/data/infractions";
import { AlertCircle, ShieldAlert, Award, FileText } from "lucide-react";

export default function InfractionsSimulator() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [activeInfraction, setActiveInfraction] = useState<Infraction>(INFRACTIONS_DATA[0]);

  const filtered = INFRACTIONS_DATA.filter((item) => {
    if (selectedCat === "all") return true;
    return item.category === selectedCat;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl text-white">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          Schweizer Strassenverkehrsgesetz (SVG)
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-white">
          🚨 Bussen & Führerausweisentzug Simulator
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
          Wähle eine Verkehrsregelverletzung in der Schweiz, um die genauen Konsequenzen, Bussen und Prüfungstricks zu sehen.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {[
          { id: "all", label: "Alle Infrachtionen" },
          { id: "schwer", label: "🔥 Schwere Widerhandlung" },
          { id: "mittel", label: "⚡ Mittelschwere" },
          { id: "leicht", label: "⚠️ Leichte" },
          { id: "busse", label: "📄 Ordnungsbusse" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCat(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCat === tab.id
                ? "bg-indigo-600 text-white shadow"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Quick Select Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mb-8">
        {filtered.map((item) => {
          const isSelected = activeInfraction.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveInfraction(item)}
              className={`p-3 rounded-xl border text-left text-xs font-bold transition cursor-pointer ${
                isSelected
                  ? "bg-indigo-600 border-indigo-400 text-white shadow-md ring-2 ring-indigo-400/50"
                  : "bg-slate-900/60 border-slate-700/80 text-slate-300 hover:border-slate-500"
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider opacity-75 mb-0.5">{item.categoryBadge}</div>
              <div className="truncate">{item.title}</div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-full text-xs font-bold">
            {activeInfraction.categoryBadge}
          </span>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold">
            {activeInfraction.fineAmount}
          </span>
          <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-mono">
            {activeInfraction.lawArticle}
          </span>
        </div>

        <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
          {activeInfraction.title}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-black/30 p-4 rounded-xl border border-white/5">
            <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> Gesetzliche Massnahme:
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {activeInfraction.consequence}
            </p>
          </div>

          <div className="bg-indigo-950/60 p-4 rounded-xl border border-indigo-500/20">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> ASA-Prüfungstipp:
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {activeInfraction.examTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
