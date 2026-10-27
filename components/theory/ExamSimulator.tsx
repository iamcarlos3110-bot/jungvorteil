"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Question, QUESTIONS_DATABASE } from "@/data/questions";
import TrafficDiagram from "./TrafficDiagram";
import AdSlot from "@/components/ads/AdSlot";
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { recordQuestionResult, recordCompletedTest } from "@/lib/studyProgress";

interface ExamSimulatorProps {
  locale: string;
}

export default function ExamSimulator({ locale }: ExamSimulatorProps) {
  // Questions pool: shuffle or pick 50 (or use current set duplicated/shuffled if smaller)
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({}); // questionId -> selectedOptionId
  const [bookmarked, setBookmarked] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [isFinished, setIsFinished] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "errors">("all");

  // Initialize questions on mount
  useEffect(() => {
    // Generate an exam set
    const shuffled = [...QUESTIONS_DATABASE].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (isFinished || questions.length === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished, questions.length]);

  const currentQ = questions[currentIndex];

  const handleSelectAnswer = (optionId: string) => {
    if (isFinished || !currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const toggleBookmark = (qId: number) => {
    setBookmarked((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const finishExam = () => {
    setIsFinished(true);
    recordCompletedTest();

    // Record each question result for mistakes repetition
    questions.forEach((q) => {
      const chosen = answers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      recordQuestionResult(q.id, chosen === correctOpt?.id);
    });

    // Save to localStorage stats
    try {
      const existing = JSON.parse(localStorage.getItem("autotheorie_stats") || "[]");
      const errorPoints = questions.reduce((acc, q) => {
        const chosen = answers[q.id];
        const correctOpt = q.options.find((o) => o.isCorrect);
        if (chosen !== correctOpt?.id) {
          return acc + q.points;
        }
        return acc;
      }, 0);

      const isPassed = errorPoints <= 15;
      const newEntry = {
        date: new Date().toISOString(),
        total: questions.length,
        errorPoints,
        passed: isPassed,
        timeSpentSeconds: 45 * 60 - timeLeft,
      };
      localStorage.setItem("autotheorie_stats", JSON.stringify([newEntry, ...existing.slice(0, 49)]));
    } catch {
      // ignore storage error
    }
  };

  const restartExam = () => {
    const shuffled = [...QUESTIONS_DATABASE].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setBookmarked({});
    setTimeLeft(45 * 60);
    setIsFinished(false);
    setReviewFilter("all");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (questions.length === 0 || !currentQ) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-slate-600 font-medium">Prüfung wird geladen...</p>
      </div>
    );
  }

  // Calculate results if finished
  const totalErrorPoints = questions.reduce((acc, q) => {
    const chosen = answers[q.id];
    const correctOpt = q.options.find((o) => o.isCorrect);
    return chosen !== correctOpt?.id ? acc + q.points : acc;
  }, 0);

  const passed = totalErrorPoints <= 15;
  const answeredCount = Object.keys(answers).length;

  // --- RESULT VIEW ---
  if (isFinished) {
    const filteredQuestions = questions.filter((q) => {
      if (reviewFilter === "errors") {
        const chosen = answers[q.id];
        const correctOpt = q.options.find((o) => o.isCorrect);
        return chosen !== correctOpt?.id;
      }
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Banner Score Card */}
        <div className={`rounded-3xl p-8 mb-8 text-white shadow-xl ${passed ? "bg-gradient-to-br from-emerald-600 to-teal-700" : "bg-gradient-to-br from-rose-600 to-red-700"}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                {passed ? <Award className="w-14 h-14 text-white" /> : <AlertCircle className="w-14 h-14 text-white" />}
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Offizielle ASA-Bewertung
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold">
                  {passed ? "Bestanden! Gratulation!" : "Nicht bestanden"}
                </h1>
                <p className="text-white/80 mt-1">
                  {passed 
                    ? "Du hast die offizielle Hürde geschafft. Maximal 15 Fehlerpunkte sind in der Schweiz erlaubt." 
                    : "In der Schweiz sind maximal 15 Fehlerpunkte erlaubt. Wiederhole die Fragen und versuche es erneut!"}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-white/10 px-6 py-4 rounded-2xl border border-white/20 min-w-[150px]">
              <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">Fehlerpunkte</span>
              <span className="text-4xl font-black mt-1">{totalErrorPoints} <span className="text-xl font-normal text-white/70">/ 15</span></span>
              <span className="text-xs text-white/70 mt-1">
                {answeredCount} von {questions.length} beantwortet
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-white/90">
              <div>Zeit: <strong className="text-white">{formatTime(45 * 60 - timeLeft)}</strong></div>
              <div>Erlaubte Fehler: <strong className="text-white">max. 15 Pkt.</strong></div>
            </div>
            <button
              onClick={restartExam}
              className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold shadow hover:bg-slate-100 transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Neue Prüfung starten
            </button>
          </div>
        </div>

        {/* PRO VIP PASS CONVERSION CALLOUT */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 text-white my-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-3xl shrink-0">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black uppercase text-amber-400">Schweizer VIP-Pass</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">Erfolgsgarantie</span>
              </div>
              <h3 className="text-xl font-black text-white">
                Sichere dir die 100 tückischsten ASA-Durchfallerfragen!
              </h3>
              <p className="text-slate-300 text-xs mt-1 max-w-lg">
                80% der Fahrschüler scheitern an denselben Fangfragen. Schalte alle Fragen und werbefreies Lernen mit TWINT für nur <strong>CHF 10.-</strong> frei.
              </p>
            </div>
          </div>
          <Link
            href={`/${locale}/premium`}
            className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-lg whitespace-nowrap transition active:scale-95 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>PRO für CHF 10.- holen</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Ad Banner after Result */}
        <div className="my-6">
          <AdSlot slot="AD_AFTER_HERO" label />
        </div>

        {/* Filter and Review Section */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Fragen-Auswertung</h2>
            <p className="text-sm text-slate-500">Prüfe deine Antworten und lerne die Schweizer Verkehrsregeln.</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setReviewFilter("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${reviewFilter === "all" ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            >
              Alle Fragen ({questions.length})
            </button>
            <button
              onClick={() => setReviewFilter("errors")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${reviewFilter === "errors" ? "bg-white text-rose-600 shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
            >
              Nur Fehler ({questions.filter((q) => answers[q.id] !== q.options.find((o) => o.isCorrect)?.id).length})
            </button>
          </div>
        </div>

        {/* Question Review Cards */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const userChoice = answers[q.id];
            const isCorrect = userChoice === q.options.find((o) => o.isCorrect)?.id;

            return (
              <div 
                key={q.id} 
                className={`p-6 rounded-2xl border-2 transition ${isCorrect ? "bg-white border-emerald-100" : "bg-rose-50/40 border-rose-200"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                      Frage {idx + 1}
                    </span>
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-md">
                      {q.categoryName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" /> Richtig (0 Pkt.)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-600">
                        <XCircle className="w-4 h-4" /> Falsch (+{q.points} Fehlerpunkte)
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4">{q.question}</h3>

                {q.svgType && <TrafficDiagram type={q.svgType} className="mb-4" />}

                {/* Options List */}
                <div className="space-y-2 mb-4">
                  {q.options.map((opt) => {
                    const isSelected = userChoice === opt.id;
                    const isActualCorrect = opt.isCorrect;

                    let optStyle = "border-slate-200 bg-white text-slate-700";
                    if (isActualCorrect) {
                      optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500";
                    } else if (isSelected && !isActualCorrect) {
                      optStyle = "border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500";
                    }

                    return (
                      <div key={opt.id} className={`p-3.5 rounded-xl border flex items-center justify-between ${optStyle}`}>
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200/80 uppercase">
                            {opt.id}
                          </span>
                          <span className="text-sm">{opt.text}</span>
                        </div>
                        {isActualCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />}
                        {isSelected && !isActualCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />}
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Explanation */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-600" /> Erklärung & Schweizer Vorschrift:
                  </div>
                  <p>{q.explanation}</p>
                  {q.ruleReference && (
                    <div className="mt-2 text-indigo-600 font-semibold tracking-wide">
                      Gesetzesartikel: {q.ruleReference}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- ACTIVE SIMULATOR VIEW ---
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Top Header Bar with Timer & Status */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            {currentIndex + 1}
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Theorieprüfung Kat. B/A</div>
            <div className="text-sm font-bold text-slate-900">Frage {currentIndex + 1} von {questions.length}</div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-base font-extrabold border ${timeLeft < 300 ? "bg-rose-50 text-rose-600 border-rose-200 animate-pulse" : "bg-slate-50 text-slate-800 border-slate-200"}`}>
          <Clock className="w-4 h-4 text-slate-500" />
          <span>{formatTime(timeLeft)}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(currentQ.id)}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border cursor-pointer ${bookmarked[currentQ.id] ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"}`}
            title="Frage zur Überprüfung vormerken"
          >
            {bookmarked[currentQ.id] ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4 text-slate-400" />}
            <span className="hidden sm:inline">{bookmarked[currentQ.id] ? "Markiert" : "Markieren"}</span>
          </button>

          <button
            onClick={() => {
              if (answeredCount < questions.length) {
                if (window.confirm(`Du hast erst ${answeredCount} von ${questions.length} Fragen beantwortet. Wirklich abgeben?`)) {
                  finishExam();
                }
              } else {
                finishExam();
              }
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
          >
            Prüfung abgeben
          </button>
        </div>
      </div>

      {/* Progress Line */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-300" 
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main Question Box */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
            {currentQ.categoryName}
          </span>
          <span className="text-xs text-slate-400 font-semibold">
            Wert: {currentQ.points} {currentQ.points === 1 ? "Fehlerpunkt" : "Fehlerpunkte"}
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-snug">
          {currentQ.question}
        </h2>

        {/* Optional Traffic Situation Diagram */}
        {currentQ.svgType && (
          <div className="mb-6">
            <TrafficDiagram type={currentQ.svgType} />
          </div>
        )}

        {/* Options Selection */}
        <div className="space-y-3 mb-8">
          {currentQ.options.map((opt) => {
            const isSelected = answers[currentQ.id] === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectAnswer(opt.id)}
                className={`w-full p-4 md:p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all cursor-pointer select-none ${
                  isSelected 
                    ? "border-indigo-600 bg-indigo-50/70 text-indigo-950 shadow-sm" 
                    : "border-slate-200 hover:border-slate-300 bg-white text-slate-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm uppercase transition ${
                    isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-base font-medium leading-relaxed">{opt.text}</span>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                  isSelected ? "border-indigo-600 bg-indigo-600" : "border-slate-300"
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold flex items-center gap-1.5 disabled:opacity-40 disabled:pointer-events-none hover:bg-slate-50 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Zurück
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              Weiter <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={finishExam}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              Prüfung beenden <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Question Grid Navigator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Fragenübersicht ({answeredCount}/{questions.length} beantwortet)
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isMarked = bookmarked[q.id];
            const isCurrent = idx === currentIndex;

            let btnStyle = "bg-slate-100 text-slate-600 border-slate-200";
            if (isAnswered) btnStyle = "bg-indigo-600 text-white border-indigo-600";
            if (isMarked) btnStyle = "bg-amber-400 text-slate-900 border-amber-500 font-extrabold";
            if (isCurrent) btnStyle += " ring-2 ring-offset-2 ring-indigo-500 font-black";

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-9 rounded-lg border text-xs font-bold flex items-center justify-center transition cursor-pointer ${btnStyle}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
