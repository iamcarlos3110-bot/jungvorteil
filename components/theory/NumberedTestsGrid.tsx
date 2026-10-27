"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NUMBERED_TESTS, type TestMetadata } from "@/data/questions/tests_catalog";
import { getPremiumStatus } from "@/lib/premium";
import PremiumUpgradeModal from "./PremiumUpgradeModal";
import { Award, Clock, ArrowRight, Lock, Crown, Zap } from "lucide-react";

interface NumberedTestsGridProps {
  locale: string;
}

export default function NumberedTestsGrid({ locale }: NumberedTestsGridProps) {
  const [activeCategory, setActiveCategory] = useState<"B" | "A" | "M">("B");
  const [isPremium, setIsPremium] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalReason, setModalReason] = useState("");

  useEffect(() => {
    setIsPremium(getPremiumStatus());
    const handleStatus = () => setIsPremium(getPremiumStatus());
    window.addEventListener("premium_status_changed", handleStatus);
    return () => window.removeEventListener("premium_status_changed", handleStatus);
  }, []);

  const filteredTests = NUMBERED_TESTS.filter((t) => t.category === activeCategory);

  const handleTestClick = (test: TestMetadata) => {
    // Tests 1 and 2 are free; Tests 3+ require PRO
    const isLocked = !isPremium && test.id > 2;
    if (isLocked) {
      setModalReason(`Schalte ${test.title} und alle 600 ASA-Fragen für nur CHF 7.- frei!`);
      setShowModal(true);
    }
  };

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[
          { id: "B" as const, label: "🚗 Kategorie B (Auto)" },
          { id: "A" as const, label: "🏍️ Kategorie A/A1 (Töff)" },
          { id: "M" as const, label: "🚜 Kategorie M/G (Mofa/Traktor)" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer ${
              activeCategory === cat.id
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Numbered Tests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTests.map((test) => {
          const isLocked = !isPremium && test.id > 2;

          return (
            <div
              key={test.id}
              className={`bg-white rounded-3xl border p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between ${
                isLocked ? "border-amber-200/80 bg-gradient-to-b from-white to-amber-50/20" : "border-slate-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg ${
                    isLocked ? "bg-amber-100 text-amber-900 flex items-center gap-1" : "bg-indigo-50 text-indigo-700"
                  }`}>
                    {isLocked && <Crown className="w-3 h-3 text-amber-600" />}
                    {test.questionCount} Fragen
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {test.timeMinutes} Min.
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 leading-snug">
                  {test.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {test.description}
                </p>
              </div>

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
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Test starten</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Upgrade Modal */}
      <PremiumUpgradeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        triggerReason={modalReason}
      />
    </div>
  );
}
