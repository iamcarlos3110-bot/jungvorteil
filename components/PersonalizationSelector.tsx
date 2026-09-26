'use client';

import { useState, useEffect } from 'react';
import { savePreferences, getPreferences, clearPreferences } from '@/lib/preferences';
import { UserPreferences } from '@/types';
import { Sparkles, User, GraduationCap, MapPin, Check, RotateCcw, SlidersHorizontal, ArrowRight } from 'lucide-react';

const AGE_RANGES = [
  { label: '18–20', value: 19 },
  { label: '21–24', value: 22 },
  { label: '25–27', value: 26 },
  { label: '28–30', value: 29 }
];

const SITUATIONS: { label: string, value: UserPreferences["situation"], icon?: string }[] = [
  { label: 'Student/in', value: 'student' },
  { label: 'Lernende/r', value: 'apprentice' },
  { label: 'Berufstätig', value: 'employed' },
  { label: 'Alle', value: 'all' }
];

const CITIES = ['Zürich', 'Bern', 'Basel', 'Luzern', 'St. Gallen', 'Winterthur', 'Genf', 'Lausanne', 'Fribourg', 'Alle'];

export default function PersonalizationSelector() {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [situation, setSituation] = useState<UserPreferences["situation"]>(undefined);
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    const prefs = getPreferences();
    if (prefs) {
      const timer = setTimeout(() => {
        if (prefs.age) setAge(prefs.age);
        if (prefs.situation) setSituation(prefs.situation);
        if (prefs.city) setCity(prefs.city);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = () => {
    savePreferences({ age, situation, city });
    window.location.reload();
  };

  const handleClear = () => {
    clearPreferences();
    setAge(undefined);
    setSituation(undefined);
    setCity('');
    window.location.reload();
  };

  const hasSelections = age !== undefined || situation !== undefined || (city !== '' && city !== 'Alle');
  const activeCount = (age !== undefined ? 1 : 0) + (situation !== undefined ? 1 : 0) + (city !== '' && city !== 'Alle' ? 1 : 0);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-stone-50/80 rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-200/90 p-6 md:p-10 transition-all duration-300 hover:border-[#2E4D28]/30">
      {/* Decorative Top Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-[#2E4D28] to-transparent opacity-80 rounded-b-full blur-[0.5px]" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0E5] border border-[#D6E2CE] text-[#2E4D28] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#2E4D28] animate-pulse" />
          <span>Personalisierter Filter</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
          Finde Angebote, die zu dir passen
        </h2>
        <p className="text-stone-500 text-sm mt-1.5">
          Passe dein Alter, deine Situation &amp; deine Stadt an, um exklusive Schweizer Rabatte zu sehen.
        </p>
      </div>

      <div className="space-y-7 max-w-4xl mx-auto">
        {/* Step 1: Age */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs hover:border-stone-200 transition-colors">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-[#EAF0E5] text-[#2E4D28] flex items-center justify-center shrink-0">
              <User className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold text-stone-800">Wie alt bist du?</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {AGE_RANGES.map(r => {
              const isSelected = age === r.value;
              return (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setAge(isSelected ? undefined : r.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white shadow-md shadow-[#2E4D28]/20 border border-[#2E4D28]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200/90 shadow-xs'
                  }`}
                >
                  <span>{r.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Situation */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs hover:border-stone-200 transition-colors">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-[#EAF0E5] text-[#2E4D28] flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold text-stone-800">Was ist deine aktuelle Situation?</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SITUATIONS.map(s => {
              const isSelected = situation === s.value;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSituation(isSelected ? undefined : s.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white shadow-md shadow-[#2E4D28]/20 border border-[#2E4D28]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200/90 shadow-xs'
                  }`}
                >
                  <span>{s.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: City */}
        <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-xs hover:border-stone-200 transition-colors">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-[#EAF0E5] text-[#2E4D28] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold text-stone-800">In welcher Stadt bist du meistens?</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CITIES.map(c => {
              const isSelected = city === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(isSelected ? '' : c)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white shadow-md shadow-[#2E4D28]/20 font-semibold border border-[#2E4D28]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200/80 shadow-xs'
                  }`}
                >
                  <span>{c}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-stone-200/80">
        {hasSelections ? (
          <>
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2E4D28] to-[#1E331B] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-[#2E4D28]/20 hover:shadow-xl hover:shadow-[#2E4D28]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-base"
            >
              <span>Vorteile anzeigen</span>
              {activeCount > 0 && (
                <span className="bg-emerald-500/30 text-emerald-200 text-xs px-2 py-0.5 rounded-full font-bold">
                  {activeCount}
                </span>
              )}
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-stone-500 hover:text-stone-800 px-5 py-3 rounded-2xl text-sm font-semibold transition-colors duration-200 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Zurücksetzen</span>
            </button>
          </>
        ) : (
          <p className="text-xs text-stone-400 font-medium italic">
            Wähle eine Option aus, um deine Ansicht anzupassen.
          </p>
        )}
      </div>
    </div>
  );
}

