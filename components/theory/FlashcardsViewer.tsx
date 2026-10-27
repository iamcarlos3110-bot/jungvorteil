"use client";

import React, { useState, useMemo, useEffect } from "react";
import { QUESTIONS_DATABASE, CATEGORIES, Question } from "@/data/questions";
import { FLASHCARDS_DATA, Flashcard } from "@/data/flashcards";
import TrafficDiagram from "./TrafficDiagram";
import { 
  Sparkles, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck,
  Eye, 
  EyeOff, 
  BookOpen, 
  Award, 
  Filter, 
  Shuffle, 
  HelpCircle,
  Car,
  AlertTriangle,
  Gauge,
  Milestone,
  ShieldCheck,
  Leaf
} from "lucide-react";

export default function FlashcardsViewer() {
  const [activeTab, setActiveTab] = useState<"questions" | "flashcards">("questions");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Load bookmarks from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("autotheorie_memorized_bookmarks");
      if (saved) setBookmarkedIds(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem("autotheorie_memorized_bookmarks", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") return QUESTIONS_DATABASE;
    if (selectedCategory === "bookmarked") {
      return QUESTIONS_DATABASE.filter((q) => bookmarkedIds.includes(q.id));
    }
    return QUESTIONS_DATABASE.filter((q) => q.category === selectedCategory);
  }, [selectedCategory, bookmarkedIds]);

  // Ensure currentQIndex is in bounds
  const currentQ: Question | undefined = filteredQuestions[currentQIndex] || filteredQuestions[0];

  const handleNextQ = () => {
    if (filteredQuestions.length === 0) return;
    setCurrentQIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrevQ = () => {
    if (filteredQuestions.length === 0) return;
    setCurrentQIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const handleRandomQ = () => {
    if (filteredQuestions.length <= 1) return;
    let next = Math.floor(Math.random() * filteredQuestions.length);
    if (next === currentQIndex) next = (next + 1) % filteredQuestions.length;
    setCurrentQIndex(next);
  };

  const currentFlashcard: Flashcard = FLASHCARDS_DATA[flashcardIndex] || FLASHCARDS_DATA[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A2415] border border-[#2F3F25] text-[#A3C973] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Schweizer Lernkarten & Memorier-Modus
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Modo Memorizar: Theoriefragen
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
          Präge dir alle offiziellen Schweizer Prüfungsfragen, Vorfahrtsregeln und Verkehrssignale mit hervorgehobener Lösung direkt ein.
        </p>

        {/* Tab Selector: Fragenkatalog vs Formel-Karten */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "questions"
                ? "bg-[#556F3B] text-white shadow-lg shadow-[#556F3B]/30"
                : "bg-[#121711] border border-[#222B1E] text-slate-300 hover:text-white"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Alle Prüfungsfragen ({QUESTIONS_DATABASE.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("flashcards")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === "flashcards"
                ? "bg-[#556F3B] text-white shadow-lg shadow-[#556F3B]/30"
                : "bg-[#121711] border border-[#222B1E] text-slate-300 hover:text-white"
            }`}
          >
            <RotateCw className="w-4 h-4" />
            <span>Regel-Flashcards ({FLASHCARDS_DATA.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ALL QUESTIONS IN MEMORIZE MODE */}
      {activeTab === "questions" && (
        <div>
          {/* Categories Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentQIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#556F3B] text-white shadow-sm"
                  : "bg-[#121711] border border-[#222B1E] text-slate-300 hover:bg-[#1A2217]"
              }`}
            >
              Alle ({QUESTIONS_DATABASE.length})
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setCurrentQIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-[#556F3B] text-white shadow-sm"
                    : "bg-[#121711] border border-[#222B1E] text-slate-300 hover:bg-[#1A2217]"
                }`}
              >
                <span>{cat.name}</span>
                <span className="opacity-60 text-[10px]">({cat.count})</span>
              </button>
            ))}

            <button
              onClick={() => {
                setSelectedCategory("bookmarked");
                setCurrentQIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === "bookmarked"
                  ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                  : "bg-[#121711] border border-[#222B1E] text-amber-300 hover:bg-[#1A2217]"
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Gemerkt ({bookmarkedIds.length})</span>
            </button>
          </div>

          {currentQ ? (
            <div className="bg-[#121711] border border-[#222B1E] rounded-3xl p-6 md:p-8 shadow-xl">
              {/* Question Header Status */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[#1F271B]">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#1A2415] border border-[#2F3F25] text-[#A3C973] rounded-lg text-xs font-bold">
                    {currentQ.categoryName}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Frage {currentQIndex + 1} von {filteredQuestions.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Toggle Show/Hide Answer */}
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="px-3 py-1.5 rounded-xl bg-[#1A2217] hover:bg-[#253121] border border-[#263321] text-xs font-bold text-slate-300 transition flex items-center gap-1.5 cursor-pointer"
                    title="Antwort verdecken/anzeigen"
                  >
                    {showAnswer ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                        <span className="hidden sm:inline">Verdecken</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5 text-[#A3C973]" />
                        <span className="hidden sm:inline">Lösung aufdecken</span>
                      </>
                    )}
                  </button>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(currentQ.id)}
                    className={`p-2 rounded-xl border transition cursor-pointer ${
                      bookmarkedIds.includes(currentQ.id)
                        ? "bg-amber-500/20 text-amber-300 border-amber-400/40"
                        : "bg-[#1A2217] text-slate-400 border-[#263321] hover:text-white"
                    }`}
                    title="Frage zum Wiederholen merken"
                  >
                    {bookmarkedIds.includes(currentQ.id) ? (
                      <BookmarkCheck className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Traffic SVG Diagram or Sign */}
              {currentQ.svgType && (
                <div className="mb-6 flex justify-center">
                  <TrafficDiagram type={currentQ.svgType} />
                </div>
              )}

              {/* Question Statement */}
              <h2 className="text-lg md:text-xl font-black text-white leading-snug mb-6">
                {currentQ.question}
              </h2>

              {/* Options List */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt) => {
                  const isCorrect = opt.isCorrect;
                  return (
                    <div
                      key={opt.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                        showAnswer && isCorrect
                          ? "bg-[#182B17] border-[#487834] text-white shadow-md ring-1 ring-[#556F3B]/50"
                          : showAnswer && !isCorrect
                          ? "bg-[#161C14] border-[#1F271B] text-slate-400 opacity-60"
                          : "bg-[#161C14] border-[#1F271B] text-slate-200"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black uppercase shrink-0 mt-0.5 ${
                          showAnswer && isCorrect
                            ? "bg-[#556F3B] text-white shadow"
                            : "bg-[#1F271B] text-slate-400"
                        }`}
                      >
                        {showAnswer && isCorrect ? "✓" : opt.id}
                      </div>

                      <div className="text-sm font-medium leading-relaxed">
                        {opt.text}
                      </div>

                      {showAnswer && isCorrect && (
                        <span className="ml-auto text-[10px] uppercase font-black tracking-wider text-[#A3C973] bg-[#1A2415] px-2 py-0.5 rounded-md shrink-0">
                          Richtig
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Official Explanation Box */}
              {showAnswer && (
                <div className="p-4 md:p-5 rounded-2xl bg-[#182017] border border-[#2B3825] mb-6 animate-fade-in">
                  <div className="flex items-center gap-2 text-[#A3C973] font-bold text-xs uppercase tracking-wide mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A3C973]" />
                    <span>Amtliche Schweizer Erklärung:</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  {currentQ.ruleReference && (
                    <div className="mt-2 text-[11px] font-mono text-[#A3C973]/80">
                      Rechtsgrundlage: {currentQ.ruleReference}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#1F271B]">
                <button
                  onClick={handlePrevQ}
                  disabled={filteredQuestions.length <= 1}
                  className="px-4 py-2.5 rounded-xl border border-[#2B3825] bg-[#1A2217] hover:bg-[#253121] text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorherige</span>
                </button>

                <button
                  onClick={handleRandomQ}
                  className="px-3.5 py-2.5 rounded-xl bg-[#1A2217] hover:bg-[#253121] border border-[#2B3825] text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  title="Zufällige Frage"
                >
                  <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Zufall</span>
                </button>

                <button
                  onClick={handleNextQ}
                  disabled={filteredQuestions.length <= 1}
                  className="px-5 py-2.5 rounded-xl bg-[#556F3B] hover:bg-[#708F52] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition cursor-pointer disabled:opacity-40"
                >
                  <span>Nächste Frage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#121711] border border-[#222B1E] rounded-3xl p-12 text-center text-slate-400">
              <Bookmark className="w-10 h-10 mx-auto mb-3 opacity-30 text-amber-400" />
              <p className="text-sm font-semibold">Keine gemerkten Fragen vorhanden.</p>
              <p className="text-xs text-slate-500 mt-1">
                Klicke bei einer Frage auf das Lesezeichen-Symbol, um sie in dieser Liste zu speichern.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: FLASHCARDS (Rules & Limits) */}
      {activeTab === "flashcards" && (
        <div className="max-w-2xl mx-auto">
          {/* Progress Counter */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 px-2">
            <span className="uppercase tracking-wider text-[#A3C973]">{currentFlashcard.category}</span>
            <span>Karte {flashcardIndex + 1} von {FLASHCARDS_DATA.length}</span>
          </div>

          {/* Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[340px] bg-[#121711] rounded-3xl border-2 border-[#263321] hover:border-[#556F3B] p-8 shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between select-none relative group"
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-[#A3C973] bg-[#1A2415] border border-[#2F3F25] px-2.5 py-1 rounded-md">
                {isFlipped ? "Antwort & Vorschrift" : "Frage"}
              </span>
              <span className="flex items-center gap-1 group-hover:text-[#A3C973] transition">
                <RotateCw className="w-3.5 h-3.5" /> Tippen zum Umdrehen
              </span>
            </div>

            <div className="my-auto py-6">
              {!isFlipped ? (
                <h2 className="text-xl md:text-2xl font-black text-white text-center leading-snug">
                  {currentFlashcard.front}
                </h2>
              ) : (
                <div className="space-y-4 animate-fade-in text-center">
                  <div className="text-base md:text-lg font-bold text-white whitespace-pre-line leading-relaxed">
                    {currentFlashcard.back}
                  </div>
                  <div className="p-3 bg-[#1A2415] border border-[#2F3F25] rounded-xl text-xs text-[#A3C973] font-medium text-left">
                    💡 <strong>Prüfungstipp:</strong> {currentFlashcard.examTip}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {currentFlashcard.rule}
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-[11px] text-slate-500 font-medium">
              {isFlipped ? "Klicke erneut für die Frage" : "Tippe auf die Karte, um die Lösung anzuzeigen"}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length);
              }}
              className="px-4 py-2.5 rounded-xl border border-[#2B3825] bg-[#121711] text-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#1A2217] transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Vorherige
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2.5 rounded-xl bg-[#1A2217] hover:bg-[#253121] border border-[#2B3825] text-slate-200 text-xs font-bold transition cursor-pointer"
            >
              Umdrehen
            </button>

            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev + 1) % FLASHCARDS_DATA.length);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#556F3B] hover:bg-[#708F52] text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
            >
              Nächste <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
