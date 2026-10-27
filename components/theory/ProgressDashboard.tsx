"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getStudyProgress, StudyStats } from "@/lib/studyProgress";
import { 
  Award, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  RotateCcw, 
  TrendingUp, 
  ShieldCheck,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

interface ExamHistoryEntry {
  date: string;
  total: number;
  errorPoints: number;
  passed: boolean;
  timeSpentSeconds: number;
}

export default function ProgressDashboard({ locale }: { locale: string }) {
  const [stats, setStats] = useState<StudyStats | null>(null);
  const [history, setHistory] = useState<ExamHistoryEntry[]>([]);

  useEffect(() => {
    setStats(getStudyProgress());

    try {
      const storedHistory = JSON.parse(localStorage.getItem("autotheorie_stats") || "[]");
      setHistory(storedHistory);
    } catch {}
  }, []);

  const totalExams = history.length;
  const passedExams = history.filter((h) => h.passed).length;
  const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
  const avgErrors = totalExams > 0 ? (history.reduce((a, b) => a + b.errorPoints, 0) / totalExams).toFixed(1) : "0";

  // Readiness Score (0 to 100%)
  let readiness = 15;
  if (totalExams >= 1) readiness += 25;
  if (passRate >= 70) readiness += 30;
  if (totalExams >= 5) readiness += 15;
  if (Number(avgErrors) <= 10) readiness += 15;
  readiness = Math.min(100, readiness);

  const isReady = readiness >= 80;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="mb-8">
        <span className="text-xs font-black uppercase text-indigo-600 tracking-wider">
          Deine persönliche Statistik
        </span>
        <h1 className="text-3xl font-black text-slate-900 mt-1">
          📊 Mein Vorbereitungsstatus
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Verfolge deinen Lernfortschritt und erfahre, wann du bereit für die offizielle Theorieprüfung beim Strassenverkehrsamt bist.
        </p>
      </div>

      {/* Main Readiness Gauge Card */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 mb-8 shadow-xl border border-indigo-900/40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-3 border border-indigo-400/30">
              <ShieldCheck className="w-4 h-4" /> ASA-Erfolgsrechner
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              {isReady ? "🎉 Du bist prüfungsbereit!" : "⏳ Fast geschafft: Noch etwas üben"}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              {isReady 
                ? "Deine Ergebnisse liegen stabil unter der Schweizer Fehlergrenze von maximal 15 Fehlerpunkten. Du kannst dich jetzt für die Theorieprüfung anmelden!" 
                : "Mache noch mindestens 3 Prüfungssimulationen und wiederhole deine Fehlerfragen, um sicher zu bestehen."}
            </p>
          </div>

          {/* Radial / Percentage Badge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 shrink-0 min-w-[170px]">
            <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">Prüfungsreife</span>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 mt-1">
              {readiness}%
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${readiness}%` }} />
            </div>
          </div>
        </div>

        {/* 4 Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10 text-center">
          <div className="bg-white/5 p-3 rounded-2xl">
            <div className="text-slate-400 text-xs font-bold uppercase">Lernserie</div>
            <div className="text-2xl font-black text-amber-400 mt-0.5 flex items-center justify-center gap-1">
              🔥 {stats?.streak || 1} Tage
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl">
            <div className="text-slate-400 text-xs font-bold uppercase">Prüfungen</div>
            <div className="text-2xl font-black text-white mt-0.5">
              {totalExams}
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl">
            <div className="text-slate-400 text-xs font-bold uppercase">Erfolgsquote</div>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">
              {passRate}%
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl">
            <div className="text-slate-400 text-xs font-bold uppercase">Ø Fehlerpunkte</div>
            <div className="text-2xl font-black text-indigo-300 mt-0.5">
              {avgErrors} <span className="text-xs font-normal text-slate-400">/ 15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <Link
          href={`/${locale}/fallos`}
          className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base">Fehler-Repetitorium</div>
              <div className="text-xs text-slate-500">
                {stats?.failedQuestionIds?.length || 0} falsch beantwortete Fragen wiederholen
              </div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-600 transition" />
        </Link>

        <Link
          href={`/${locale}/memorizar`}
          className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition">
              🧠
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base">Modo Memorizar</div>
              <div className="text-xs text-slate-500">Lernkarten für Tempolimits und Vorschriften</div>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition" />
        </Link>
      </div>

      {/* Recent Exams History Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-black text-slate-900 mb-4">
          Letzte Prüfungssimulationen
        </h3>

        {history.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500 text-xs sm:text-sm mb-4">Du hast noch keine 50-Fragen-Prüfung absolviert.</p>
            <Link
              href={`/${locale}/pruefung`}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-sm inline-flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" /> Erste Prüfung starten
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {history.slice(0, 10).map((h, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                  {h.passed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {h.passed ? "Bestanden" : "Nicht bestanden"}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {new Date(h.date).toLocaleDateString()} • {Math.round(h.timeSpentSeconds / 60)} Min. Dauer
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-xs font-black ${h.passed ? "text-emerald-700" : "text-rose-700"}`}>
                    {h.errorPoints} Fehlerpunkte
                  </div>
                  <div className="text-[10px] text-slate-400">
                    max. 15 erlaubt
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
