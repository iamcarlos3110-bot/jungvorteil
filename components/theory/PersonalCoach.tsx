"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { QUESTIONS_DATABASE, Question } from "@/data/questions";
import { getStudyProgress } from "@/lib/studyProgress";
import { getSpacedStats } from "@/lib/spacedRepetition";
import { Brain, ArrowRight, CheckCircle2, AlertTriangle, Sparkles, Target, Zap } from "lucide-react";

interface CategoryMistakes {
  id: string;
  name: string;
  failedCount: number;
  totalQuestions: number;
  errorRate: number;
}

const CATEGORY_NAMES: Record<string, string> = {
  vortritt: "Vortritt & Kreuzungen",
  signale: "Verkehrssignale (SSV)",
  geschwindigkeit: "Geschwindigkeit & Abstand",
  autobahn: "Autobahn & Autostrasse",
  sicherheit: "Sicherheit & Promille",
  umwelt: "Fahrzeugtechnik & Umwelt",
  spezial: "ASA-Prüfungsfallen",
};

export default function PersonalCoach({ locale }: { locale: string }) {
  const [weakestCat, setWeakestCat] = useState<CategoryMistakes | null>(null);
  const [spacedInfo, setSpacedInfo] = useState<{ totalTracked: number; due: number; mastered: number } | null>(null);
  const [totalFailed, setTotalFailed] = useState<number>(0);

  useEffect(() => {
    try {
      const progress = getStudyProgress();
      const failedIds = new Set(progress.failedQuestionIds || []);
      setTotalFailed(failedIds.size);

      // Agrupar preguntas falladas por categoría
      const catCount: Record<string, { failed: number; total: number }> = {
        vortritt: { failed: 0, total: 0 },
        signale: { failed: 0, total: 0 },
        geschwindigkeit: { failed: 0, total: 0 },
        autobahn: { failed: 0, total: 0 },
        sicherheit: { failed: 0, total: 0 },
        umwelt: { failed: 0, total: 0 },
        spezial: { failed: 0, total: 0 },
      };

      QUESTIONS_DATABASE.forEach((q) => {
        const cat = q.category || "spezial";
        if (!catCount[cat]) catCount[cat] = { failed: 0, total: 0 };
        catCount[cat].total += 1;
        if (failedIds.has(q.id)) {
          catCount[cat].failed += 1;
        }
      });

      let worst: CategoryMistakes | null = null;
      let maxErrors = 0;

      for (const catKey in catCount) {
        const data = catCount[catKey];
        if (data.failed > maxErrors) {
          maxErrors = data.failed;
          worst = {
            id: catKey,
            name: CATEGORY_NAMES[catKey] || catKey,
            failedCount: data.failed,
            totalQuestions: data.total,
            errorRate: data.total > 0 ? Math.round((data.failed / data.total) * 100) : 0,
          };
        }
      }

      setWeakestCat(worst);
      setSpacedInfo(getSpacedStats());
    } catch (e) {
      console.warn("Fehler beim Laden des Personal Coaches:", e);
    }
  }, []);

  return (
    <div className="bg-[#121711] border border-[#222B1E] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-lg my-6">
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#556F3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#556F3B]/20 border border-[#556F3B]/40 text-[#A3C973] text-xs font-black uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            Intelligenter Lern-Coach (ASA)
          </div>

          {weakestCat ? (
            <>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 flex items-center gap-2">
                Fokus-Empfehlung: <span className="text-[#A3C973]">{weakestCat.name}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mb-4">
                Unser Algorithmus hat erkannt, dass du bei <strong>{weakestCat.name}</strong> derzeit{" "}
                <span className="text-amber-400 font-bold">{weakestCat.failedCount} offene Fehler</span> hast.
                Beim offiziellen ASA-Theorieexamen kosten Vortritts- und Situationsfragen oft <strong>2 Fehlerpunkte</strong>.
                Schliesse diese Lücke zuerst, um dein Durchfallrisiko zu eliminieren!
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Exzellenter Start! Dein Coaching-Plan steht bereit
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mb-4">
                Beginne mit den <strong>Vortrittsregeln & Kreuzungen</strong> oder teste dein Wissen bei den gefürchteten{" "}
                <strong>ASA-Prüfungsfallen</strong>. Jede Frage, die du bearbeitest, trainiert deinen persönlichen Lernalgorithmus.
              </p>
            </>
          )}

          {/* Estadísticas de Repaso Espaciado SM-2 */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-[#222B1E]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Offene Fehler: <strong className="text-white">{totalFailed}</strong></span>
            </div>
            {spacedInfo && (
              <>
                <div className="flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#A3C973]" />
                  <span>Wiederholung fällig (SM-2): <strong className="text-white">{spacedInfo.due}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Langzeitgedächtnis gemeistert: <strong className="text-white">{spacedInfo.mastered}</strong></span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Botón de acción */}
        <div className="shrink-0 flex flex-col gap-2">
          {weakestCat ? (
            <Link
              href={`/${locale}/themen`}
              className="px-6 py-3.5 rounded-xl bg-[#556F3B] hover:bg-[#688848] text-white font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2 group"
            >
              Thema gezielt drillen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          ) : (
            <Link
              href={`/${locale}/pruefung`}
              className="px-6 py-3.5 rounded-xl bg-[#556F3B] hover:bg-[#688848] text-white font-extrabold text-sm transition shadow-md flex items-center justify-center gap-2 group"
            >
              Offiziellen 50-Fragen Test starten
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          )}
          <Link
            href={`/${locale}/memorizar`}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-semibold text-xs text-center transition"
          >
            Lernkarten ansehen (315 Fragen)
          </Link>
        </div>
      </div>
    </div>
  );
}
