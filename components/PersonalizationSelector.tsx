'use client';

import { useState, useEffect } from 'react';
import { savePreferences, getPreferences, clearPreferences } from '@/lib/preferences';
import { UserPreferences } from '@/types';
import { Check, RotateCcw, Filter } from 'lucide-react';

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
    <div className="bg-white rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-200/90 p-6 md:p-8 transition-all duration-300 hover:border-[#2E4D28]/30">
      <h2 className="text-lg md:text-xl font-bold text-stone-900 text-center mb-6 tracking-tight flex items-center justify-center gap-2">
        <Filter className="w-5 h-5 text-[#2E4D28]" />
        <span>Finde Angebote, die zu dir passen</span>
      </h2>

      <div className="divide-y divide-stone-100 space-y-6">
        {/* Step 1: Age */}
        <div className="pt-2 first:pt-0">
          <p className="text-xs md:text-sm font-bold text-stone-700 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2E4D28]" />
            <span>Wie alt bist du?</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {AGE_RANGES.map(r => {
              const isSelected = age === r.value;
              return (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setAge(isSelected ? undefined : r.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-xs ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white border border-[#2E4D28] shadow-md shadow-[#2E4D28]/20 font-bold scale-[1.02]'
                      : 'bg-[#EAF0E5]/80 text-[#253E20] border border-[#C7D9C0] hover:bg-[#DCE7D6] hover:border-[#2E4D28]/50'
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
        <div className="pt-6">
          <p className="text-xs md:text-sm font-bold text-stone-700 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2E4D28]" />
            <span>Was ist deine aktuelle Situation?</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {SITUATIONS.map(s => {
              const isSelected = situation === s.value;
              return (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setSituation(isSelected ? undefined : s.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-xs ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white border border-[#2E4D28] shadow-md shadow-[#2E4D28]/20 font-bold scale-[1.02]'
                      : 'bg-[#EAF0E5]/80 text-[#253E20] border border-[#C7D9C0] hover:bg-[#DCE7D6] hover:border-[#2E4D28]/50'
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
        <div className="pt-6">
          <p className="text-xs md:text-sm font-bold text-stone-700 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2E4D28]" />
            <span>In welcher Stadt bist du meistens?</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {CITIES.map(c => {
              const isSelected = city === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCity(isSelected ? '' : c)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95 shadow-xs ${
                    isSelected
                      ? 'bg-[#2E4D28] text-white border border-[#2E4D28] shadow-md shadow-[#2E4D28]/20 font-bold scale-[1.02]'
                      : 'bg-[#EAF0E5]/80 text-[#253E20] border border-[#C7D9C0] hover:bg-[#DCE7D6] hover:border-[#2E4D28]/50'
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

      {/* Footer CTA */}
      {hasSelections && (
        <div className="mt-7 pt-5 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto bg-[#2E4D28] hover:bg-[#233C1F] text-white text-sm font-bold px-7 py-2.5 rounded-full shadow-md shadow-[#2E4D28]/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Für mich anzeigen
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors cursor-pointer py-1 px-3"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Zurücksetzen</span>
          </button>
        </div>
      )}
    </div>
  );
}



