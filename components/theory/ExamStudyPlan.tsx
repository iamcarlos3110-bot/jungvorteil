"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, Flag, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

export default function ExamStudyPlan({ locale }: { locale: string }) {
  const [targetDate, setTargetDate] = useState<string>("");
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("autotheorie_exam_target_date");
      if (saved) {
        setTargetDate(saved);
        calculateDays(saved);
      } else {
        // Por defecto sugerir 30 días en el futuro
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 30);
        const iso = defaultDate.toISOString().split("T")[0];
        setTargetDate(iso);
        calculateDays(iso);
      }
    } catch {}
  }, []);

  const calculateDays = (dateStr: string) => {
    if (!dateStr) return;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const target = new Date(dateStr);
    target.setHours(0, 0, 0, 0);

    const diffMs = target.getTime() - now.getTime();
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    setDaysRemaining(days);
  };

  const handleSaveDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetDate) return;
    try {
      localStorage.setItem("autotheorie_exam_target_date", targetDate);
    } catch {}
    calculateDays(targetDate);
    setIsEditing(false);
  };

  // Cálculo de ritmo y fases de estudio
  const days = daysRemaining !== null ? daysRemaining : 30;
  const questionsPerDay = days > 0 ? Math.max(10, Math.ceil(315 / days)) : 50;
  const examsPerDay = days > 14 ? 1 : (days > 5 ? 2 : 3);

  let currentPhase = "Phase 1: Grundlagen & Basiswissen";
  let phaseColor = "text-[#A3C973]";
  let phaseDesc = "Verkehrsregeln und Schilder durcharbeiten. Baue ein solides Fundament auf.";

  if (days <= 7 && days >= 0) {
    currentPhase = "Phase 3: Prüfungssimulation & Zeitmanagement";
    phaseColor = "text-rose-400";
    phaseDesc = "Nur noch offizielle 50-Fragen-Prüfungen unter 45 Minuten Zeitdruck absolvieren.";
  } else if (days <= 21 && days > 7) {
    currentPhase = "Phase 2: ASA-Prüfungsfallen & Fehler-Repetition";
    phaseColor = "text-amber-400";
    phaseDesc = "Gezieltes Training der kniffligen Fragen mit 2 Fehlerpunkten und Wiederholung aller Lernkarten.";
  }

  return (
    <div className="bg-[#121711] border border-[#222B1E] rounded-2xl p-6 relative overflow-hidden shadow-md my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 border-b border-[#222B1E] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#A3C973] tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" />
            Persönlicher Prüfungsplaner
          </div>
          <h3 className="text-xl font-black text-white">Dein Zeitplan bis zur Theorieprüfung</h3>
        </div>

        <div>
          {isEditing ? (
            <form onSubmit={handleSaveDate} className="flex items-center gap-2">
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="bg-black/40 border border-[#222B1E] text-white text-xs px-3 py-1.5 rounded-lg"
                min={new Date().toISOString().split("T")[0]}
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#556F3B] hover:bg-[#688848] text-white text-xs font-bold rounded-lg"
              >
                Speichern
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs text-slate-400 hover:text-white underline font-semibold"
            >
              Prüfungsdatum ändern ({targetDate || "Nicht festgelegt"})
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 text-center">
        <div className="bg-black/30 border border-[#222B1E] rounded-xl p-4">
          <div className="text-3xl font-black text-white mb-1">
            {days > 0 ? days : 0} <span className="text-xs text-slate-400 font-normal">Tage</span>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase">Verbleibende Zeit</div>
        </div>

        <div className="bg-black/30 border border-[#222B1E] rounded-xl p-4">
          <div className="text-3xl font-black text-[#A3C973] mb-1">
            {questionsPerDay} <span className="text-xs text-slate-400 font-normal">Fragen/Tag</span>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase">Empfohlenes Tagesziel</div>
        </div>

        <div className="bg-black/30 border border-[#222B1E] rounded-xl p-4">
          <div className="text-3xl font-black text-amber-400 mb-1">
            {examsPerDay} <span className="text-xs text-slate-400 font-normal">Test/Tag</span>
          </div>
          <div className="text-xs font-bold text-slate-400 uppercase">Simulationen (50 Fr.)</div>
        </div>
      </div>

      {/* Barra de progreso de fases */}
      <div className="bg-black/20 border border-[#222B1E] rounded-xl p-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-extrabold text-white flex items-center gap-1.5">
            <Flag className="w-3.5 h-3.5 text-[#556F3B]" />
            Aktuelle Phase: <span className={phaseColor}>{currentPhase}</span>
          </span>
          <span className="text-slate-400 text-[11px]">Ziel: 100% prüfungsreif</span>
        </div>
        <p className="text-xs text-slate-300 mb-3">{phaseDesc}</p>

        {/* Progress bar */}
        <div className="w-full bg-[#182017] h-2 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-[#556F3B] transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(15, 100 - days * 2))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
