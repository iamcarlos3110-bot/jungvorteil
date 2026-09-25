'use client';

import { useState, useEffect } from 'react';
import { savePreferences, getPreferences } from '@/lib/preferences';
import { UserPreferences } from '@/types';

const AGE_RANGES = [
  { label: '18-20', value: 19 },
  { label: '21-24', value: 22 },
  { label: '25-27', value: 26 },
  { label: '28-30', value: 29 }
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
    window.location.reload(); // Simple way to apply preferences
  };

  const hasSelections = age || situation || city;

  return (
    <div className="floating-widget bg-white rounded-3xl shadow-xl border border-stone-200/90 p-6 md:p-10 hover:border-[#3F5E39]/30 transition-all">
      <h2 className="text-xl font-bold mb-6 text-center">Finde Angebote, die zu dir passen</h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-3">Wie alt bist du?</p>
          <div className="flex flex-wrap gap-2">
            {AGE_RANGES.map(r => (
              <button 
                key={r.label}
                onClick={() => setAge(age === r.value ? undefined : r.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  age === r.value ? 'bg-[#3F5E39] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 mb-3">Was ist deine aktuelle Situation?</p>
          <div className="flex flex-wrap gap-2">
            {SITUATIONS.map(s => (
              <button 
                key={s.label}
                onClick={() => setSituation(situation === s.value ? undefined : s.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  situation === s.value ? 'bg-[#3F5E39] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 mb-3">In welcher Stadt bist du meistens?</p>
          <div className="flex flex-wrap gap-2">
            {CITIES.map(c => (
              <button 
                key={c}
                onClick={() => setCity(city === c ? '' : c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  city === c ? 'bg-[#3F5E39] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasSelections && (
        <div className="mt-8 text-center">
          <button 
            onClick={handleSave}
            className="bg-[#3F5E39] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#324B2D] transition shadow-sm"
          >
            Für mich anzeigen
          </button>
        </div>
      )}
    </div>
  );
}
