"use client";

import React, { useState } from "react";
import { Question, QuestionCategory, CATEGORIES, QUESTIONS_DATABASE } from "@/data/questions";
import TrafficDiagram from "./TrafficDiagram";
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  Car,
  AlertTriangle,
  Gauge,
  Milestone,
  ShieldCheck,
  Leaf
} from "lucide-react";
import { recordQuestionResult } from "@/lib/studyProgress";

interface TopicTrainerProps {
  initialCategory?: QuestionCategory;
}

export default function TopicTrainer({ initialCategory = "vortritt" }: TopicTrainerProps) {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory>(initialCategory);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Filter questions for the active category
  const categoryQuestions = QUESTIONS_DATABASE.filter((q) => q.category === selectedCategory);
  const currentQ: Question | undefined = categoryQuestions[currentIdx];

  const handleSelectOption = (optId: string) => {
    if (hasChecked) return;
    setSelectedAnswer(optId);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || !currentQ || hasChecked) return;
    setHasChecked(true);

    const isCorrect = selectedAnswer === currentQ.options.find((o) => o.isCorrect)?.id;
    recordQuestionResult(currentQ.id, isCorrect);
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setHasChecked(false);
    if (currentIdx < categoryQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Loop or finish
      setCurrentIdx(0);
    }
  };

  const handleChangeCategory = (cat: QuestionCategory) => {
    setSelectedCategory(cat);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setHasChecked(false);
    setScore({ correct: 0, total: 0 });
  };

  const getCategoryIcon = (cat: QuestionCategory) => {
    switch (cat) {
      case "vortritt": return <Car className="w-4 h-4" />;
      case "signale": return <AlertTriangle className="w-4 h-4" />;
      case "geschwindigkeit": return <Gauge className="w-4 h-4" />;
      case "autobahn": return <Milestone className="w-4 h-4" />;
      case "sicherheit": return <ShieldCheck className="w-4 h-4" />;
      case "umwelt": return <Leaf className="w-4 h-4" />;
    }
  };

  if (!currentQ) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Keine Fragen in dieser Kategorie gefunden.</p>
      </div>
    );
  }

  const isCurrentCorrect = selectedAnswer === currentQ.options.find((o) => o.isCorrect)?.id;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Category Pills Header */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleChangeCategory(cat.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 flex items-center gap-2 transition cursor-pointer ${
                isActive 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Progress & Category Stats */}
      <div className="flex items-center justify-between mb-4 text-xs font-semibold text-slate-500">
        <div>
          Frage {currentIdx + 1} von {categoryQuestions.length} in <span className="text-indigo-600 font-bold">{currentQ.categoryName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Richtig beantwortet: <strong className="text-emerald-600">{score.correct}</strong> / {score.total}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
          {currentQ.question}
        </h2>

        {currentQ.svgType && (
          <div className="mb-6">
            <TrafficDiagram type={currentQ.svgType} />
          </div>
        )}

        {/* Options */}
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
                onClick={() => handleSelectOption(opt.id)}
                disabled={hasChecked}
                className={`w-full p-4 rounded-2xl border-2 text-left flex items-center justify-between transition cursor-pointer select-none ${cardStyle}`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm uppercase ${
                    hasChecked && isRight 
                      ? "bg-emerald-600 text-white" 
                      : hasChecked && isSelected && !isRight 
                      ? "bg-rose-600 text-white" 
                      : isSelected 
                      ? "bg-indigo-600 text-white" 
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-sm md:text-base leading-relaxed">{opt.text}</span>
                </div>
                {hasChecked && isRight && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                {hasChecked && isSelected && !isRight && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Feedback Section (Shown after checking) */}
        {hasChecked && (
          <div className="mb-6 animate-fade-in">
            <div className={`p-5 rounded-2xl border ${isCurrentCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}>
              <div className="flex items-center gap-2 font-bold text-sm mb-2">
                {isCurrentCorrect ? (
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-5 h-5" /> Richtig gelöst!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-rose-700">
                    <XCircle className="w-5 h-5" /> Leider falsch
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
              {currentQ.ruleReference && (
                <div className="mt-2 text-xs font-bold text-indigo-700 tracking-wide">
                  Rechtsgrundlage: {currentQ.ruleReference}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end pt-2">
          {!hasChecked ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedAnswer}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none text-white rounded-xl font-bold text-sm shadow transition cursor-pointer flex items-center gap-2"
            >
              Antwort überprüfen
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-sm shadow transition cursor-pointer flex items-center gap-2"
            >
              Nächste Frage <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
