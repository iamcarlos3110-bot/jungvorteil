'use client';

import { useState, useEffect } from 'react';
import { savePreferences, getPreferences, clearPreferences } from '@/lib/preferences';
import { UserPreferences } from '@/types';
import { Check, RotateCcw } from 'lucide-react';

const AGE_RANGES = [
  { label: '18–20', value: 19 },
  { label: '21–24', value: 22 },
  { label: '25–27', value: 26 },
  { label: '28–30', value: 29 }
];

const SITUATIONS: { label: string, value: UserPreferences["situation"] }[] = [
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

  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone-200/80 p-5 md:p-6 transition-all duration-200">
      <h2 className="text-base md:text-lg font-bold text-stone-900 text-center mb-4 tracking-tight">
        Finde Angebote, die zu dir passen
      </h2>

      <div className="space-y-4">
        {/* Step 1: Age */}
        <div>
          <p className="text-xs font-semibold text-stone-500 mb-2">Wie alt bist du?</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {AGE_RANGES.map(r => {
              const isSelected = age === r.value;
              return (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setAge(isSelected ? undefined : r.value)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white font-semibold shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span>{r.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Situation */}
        <div>
          <p className="text-xs font-semibold text-stone-500 mb-2">Was ist deine aktuelle Situation?</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {SITUATIONS.map(s => {
              const isSelected = situation === s.value;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSituation(isSelected ? undefined : s.value)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white font-semibold shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span>{s.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: City */}
        <div>
          <p className="text-xs font-semibold text-stone-500 mb-2">In welcher Stadt bist du meistens?</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {CITIES.map(c => {
              const isSelected = city === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(isSelected ? '' : c)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white font-semibold shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span>{c}</span>
                  {isSelected && <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      {hasSelections && (
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="bg-[#2E4D28] hover:bg-[#233C1F] text-white text-xs font-bold px-5 py-2 rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            Für mich anzeigen
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Zurücksetzen</span>
          </button>
        </div>
      )}
    </div>
  );
}


