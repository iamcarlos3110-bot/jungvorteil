"use client";

import React, { useState } from "react";
import { FLASHCARDS_DATA, Flashcard } from "@/data/flashcards";
import { RotateCw, ChevronLeft, ChevronRight, Award, BookOpen, Sparkles } from "lucide-react";

export default function FlashcardsViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = FLASHCARDS_DATA[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS_DATA.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Schweizer Lernkarten-Methode
        </span>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Modo Memorizar (Flashcards)
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Lerne die wichtigsten Schweizer Regeln, Abstände und Tempolimits durch gezieltes Wiederholen.
        </p>
      </div>

      {/* Progress Counter */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 px-2">
        <span className="uppercase tracking-wider">{card.category}</span>
        <span>Karte {currentIndex + 1} von {FLASHCARDS_DATA.length}</span>
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full min-h-[320px] bg-white rounded-3xl border-2 border-slate-200/90 hover:border-indigo-400 p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between select-none relative group"
      >
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
            {isFlipped ? "Antwort & Vorschrift" : "Frage"}
          </span>
          <span className="flex items-center gap-1 group-hover:text-indigo-600 transition">
            <RotateCw className="w-3.5 h-3.5" /> Klicken zum Umdrehen
          </span>
        </div>

        <div className="my-auto py-4">
          {!isFlipped ? (
            <h2 className="text-xl md:text-2xl font-black text-slate-900 text-center leading-snug">
              {card.front}
            </h2>
          ) : (
            <div className="space-y-4 animate-fade-in text-center">
              <div className="text-base md:text-lg font-bold text-slate-900 whitespace-pre-line leading-relaxed">
                {card.back}
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
                💡 <strong>Prüfungstipp:</strong> {card.examTip}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {card.rule}
              </div>
            </div>
          )}
        </div>

        <div className="text-center text-[11px] text-slate-400 font-medium">
          {isFlipped ? "Klicke erneut für die Frage" : "Tippe auf die Karte, um die Lösung anzuzeigen"}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6 px-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-slate-50 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Vorherige
        </button>

        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
        >
          Umdrehen
        </button>

        <button
          onClick={handleNext}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
        >
          Nächste <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
