"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Question, QUESTIONS_DATABASE } from "@/data/questions";
import { getStudyProgress, recordQuestionResult } from "@/lib/studyProgress";
import TrafficDiagram from "./TrafficDiagram";
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, Sparkles } from "lucide-react";

interface MistakesTrainerProps {
  locale: string;
}

export default function MistakesTrainer({ locale }: MistakesTrainerProps) {
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const progress = getStudyProgress();
    const failedIds = new Set(progress.failedQuestionIds || []);
    const matching = QUESTIONS_DATABASE.filter((q) => failedIds.has(q.id));
    setMistakeQuestions(matching);
    setLoaded(true);
  }, []);

  const currentQ = mistakeQuestions[currentIdx];

  const handleSelect = (optId: string) => {
    if (hasChecked) return;
    setSelectedAnswer(optId);
  };

  const handleCheck = () => {
    if (!selectedAnswer || !currentQ || hasChecked) return;
    setHasChecked(true);

    const isCorrect = selectedAnswer === currentQ.options.find((o) => o.isCorrect)?.id;
    recordQuestionResult(currentQ.id, isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setHasChecked(false);
    if (currentIdx < mistakeQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Refresh list
      const progress = getStudyProgress();
      const failedIds = new Set(progress.failedQuestionIds || []);
      const matching = QUESTIONS_DATABASE.filter((q) => failedIds.has(q.id));
      setMistakeQuestions(matching);
      setCurrentIdx(0);
    }
  };

  if (!loaded) return null;

  if (mistakeQuestions.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
          ✓
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">
          Keine Fehlerfragen gespeichert!
        </h2>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Sobald du in einer Prüfung oder im Themen-Training eine Frage falsch beantwortest, wird sie automatisch hier gesammelt, damit du sie gezielt wiederholen kannst.
        </p>
        <Link
          href={`/${locale}/pruefung`}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl text-sm shadow transition cursor-pointer"
        >
          Prüfungssimulation starten <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const isCurrentCorrect = selectedAnswer === currentQ.options.find((o) => o.isCorrect)?.id;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-xs font-black uppercase text-rose-600 tracking-wider">
            Fehler-Repetitorium
          </span>
          <h1 className="text-2xl font-black text-slate-900">
            Deine gespeicherten Fehlerfragen
          </h1>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-rose-50 text-rose-700 rounded-full border border-rose-200">
          {currentIdx + 1} von {mistakeQuestions.length}
        </span>
      </div>

      {/* Main Question Box */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
          {currentQ.question}
        </h2>

        {currentQ.svgType && (
          <div className="mb-6">
            <TrafficDiagram type={currentQ.svgType} />
          </div>
        )}

        <div className="space-y-3 mb-6">
          {currentQ.options.map((opt) => {
            const isSelected = selectedAnswer === opt.id;
            const isRight = opt.isCorrect;

            let cardStyle = "border-slate-200 hover:border-slate-300 bg-white text-slate-800";
            if (!hasChecked && isSelected) {
              cardStyle = "border-indigo-600 bg-indigo-50/60 text-indigo-950 ring-1 ring-indigo-600";
            } else if (hasChecked) {
              if (isRight) {
                cardStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500 font-medium";
              } else if (isSelected && !isRight) {
                cardStyle = "border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-400";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={hasChecked}
                className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs uppercase text-slate-600">
                    {opt.id}
                  </span>
                  <span className="text-sm font-medium">{opt.text}</span>
                </div>
                {hasChecked && isRight && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                {hasChecked && isSelected && !isRight && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {hasChecked && (
          <div className="p-4 rounded-2xl border mb-6 bg-slate-50 border-slate-200 text-xs text-slate-700 leading-relaxed">
            <div className="font-bold text-slate-900 mb-1">
              {isCurrentCorrect ? "✓ Gelöst! Diese Frage wird aus deiner Fehlerliste entfernt." : "✗ Weiterhin falsch. Lies die Erklärung:"}
            </div>
            <p>{currentQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          {!hasChecked ? (
            <button
              onClick={handleCheck}
              disabled={!selectedAnswer}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none text-white rounded-xl font-bold text-sm shadow transition cursor-pointer"
            >
              Antwort prüfen
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-sm shadow transition cursor-pointer flex items-center gap-2"
            >
              Weiter <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
