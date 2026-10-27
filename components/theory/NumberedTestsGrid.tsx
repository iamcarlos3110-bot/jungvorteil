"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { NUMBERED_TESTS, type TestMetadata } from "@/data/questions/tests_catalog";
import { getPremiumStatus } from "@/lib/premium";
import PremiumUpgradeModal from "./PremiumUpgradeModal";
import { Award, Clock, ArrowRight, Lock, Crown, Search, Sparkles, Filter, Gauge } from "lucide-react";

interface NumberedTestsGridProps {
  locale: string;
}

export default function NumberedTestsGrid({ locale }: NumberedTestsGridProps) {
  const [activeCategory, setActiveCategory] = useState<"B" | "A" | "M">("B");
  const [difficultyFilter, setDifficultyFilter] = useState<"ALL" | "EASY" | "MEDIUM" | "HARD">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalReason, setModalReason] = useState("");

  useEffect(() => {
    setIsPremium(getPremiumStatus());
    const handleStatus = () => setIsPremium(getPremiumStatus());
    window.addEventListener("premium_status_changed", handleStatus);
    return () => window.removeEventListener("premium_status_changed", handleStatus);
  }, []);

  const filteredTests = useMemo(() => {
    return NUMBERED_TESTS.filter((t) => {
      if (t.category !== activeCategory) return false;
      if (difficultyFilter !== "ALL" && t.difficulty !== difficultyFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(query);
        const matchesDesc = t.description.toLowerCase().includes(query);
        const matchesTags = (t.tags || []).some((tag) => tag.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTags) return false;
      }
      return true;
    });
  }, [activeCategory, difficultyFilter, searchQuery]);

  const handleTestClick = (test: TestMetadata) => {
    // Tests 1 and 2 are free; Tests 3+ require PRO
    const isLocked = !isPremium && test.id > 2;
    if (isLocked) {
      setModalReason(`Schalte ${test.title} und alle 600 ASA-Fragen für nur CHF 7.- frei!`);
      setShowModal(true);
    }
  };

  const getDifficultyBadge = (difficulty?: "EASY" | "MEDIUM" | "HARD") => {
    switch (difficulty) {
      case "EASY":
        return {
          label: "Leicht",
          color: "text-emerald-700 bg-emerald-50 border-emerald-200",
          barColor: "bg-emerald-500",
          bars: 1,
        };
      case "MEDIUM":
        return {
          label: "Mittel",
          color: "text-amber-700 bg-amber-50 border-amber-200",
          barColor: "bg-amber-500",
          bars: 2,
        };
      case "HARD":
      default:
        return {
          label: "Fangfragen / Schwer",
          color: "text-rose-700 bg-rose-50 border-rose-200",
          barColor: "bg-rose-500",
          bars: 3,
        };
    }
  };

  return (
    <div className="w-full">
      {/* Top Filter & Search Controls */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm mb-8 space-y-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: "B" as const, label: "🚗 Kategorie B (Auto)" },
              { id: "A" as const, label: "🏍️ Kategorie A/A1 (Töff)" },
              { id: "M" as const, label: "🚜 Kategorie M/G (Mofa/Traktor)" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{filteredTests.length} Themen-Sets verfügbar</span>
          </div>
        </div>

        {/* Search & Difficulty Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Thema oder Stichwort suchen (z.B. Kreisel, Tram)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Difficulty Buttons */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: "ALL" as const, label: "Alle Schwierigkeiten" },
              { id: "EASY" as const, label: "🟢 Leicht" },
              { id: "MEDIUM" as const, label: "🟡 Mittel" },
              { id: "HARD" as const, label: "🔴 Schwer" },
            ].map((diff) => (
              <button
                key={diff.id}
                onClick={() => setDifficultyFilter(diff.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  difficultyFilter === diff.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Numbered Tests */}
      {filteredTests.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-slate-500 text-sm font-semibold mb-2">Keine Tests zu diesem Filter gefunden.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setDifficultyFilter("ALL");
            }}
            className="text-xs font-bold text-indigo-600 hover:underline"
          >
            Filter zurücksetzen
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTests.map((test) => {
            const isLocked = !isPremium && test.id > 2;
            const diff = getDifficultyBadge(test.difficulty);

            return (
              <div
                key={test.id}
                className={`bg-white rounded-3xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group ${
                  isLocked ? "border-amber-200/90 bg-gradient-to-b from-white to-amber-50/20" : "border-slate-200"
                }`}
              >
                <div>
                  {/* Top Bar: Difficulty Gauge & Question Count */}
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Visual Difficulty Gauge */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3].map((bar) => (
                          <div
                            key={bar}
                            className={`w-3.5 h-1.5 rounded-full transition-colors ${
                              bar <= diff.bars ? diff.barColor : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${diff.color}`}>
                        {diff.label}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {test.timeMinutes} Min.
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-slate-900 text-base mb-1.5 leading-snug group-hover:text-indigo-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {test.description}
                  </p>

                  {/* Tags Chips */}
                  {test.tags && test.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {test.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                {isLocked ? (
                  <button
                    type="button"
                    onClick={() => handleTestClick(test)}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-xl font-black text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Mit PRO freischalten (CHF 7.-)</span>
                  </button>
                ) : (
                  <Link
                    href={`/${locale}/pruefung`}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Kostenlos starten (15 Fragen)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Upgrade Modal */}
      <PremiumUpgradeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        triggerReason={modalReason}
      />
    </div>
  );
}
