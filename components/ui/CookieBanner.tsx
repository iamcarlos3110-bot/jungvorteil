'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    advertising: false
  });

  useEffect(() => {
    if (!localStorage.getItem('jv_cookie_consent')) {
      const timer = setTimeout(() => setShowBanner(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('jv_cookie_consent', 'true');
    localStorage.setItem('jv_analytics_consent', 'true');
    localStorage.setItem('jv_advertising_consent', 'true');
    window.dispatchEvent(new Event('storage'));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('jv_cookie_consent', 'true');
    localStorage.setItem('jv_analytics_consent', 'false');
    localStorage.setItem('jv_advertising_consent', 'false');
    window.dispatchEvent(new Event('storage'));
    setShowBanner(false);
  };

  const saveSettings = () => {
    localStorage.setItem('jv_cookie_consent', 'true');
    localStorage.setItem('jv_analytics_consent', settings.analytics.toString());
    localStorage.setItem('jv_advertising_consent', settings.advertising.toString());
    window.dispatchEvent(new Event('storage'));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 z-50 shadow-2xl">
      {!showSettings ? (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <h3 className="font-semibold text-base mb-1">Wir verwenden Cookies</h3>
            <p className="text-gray-300">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Bitte wählen Sie, welche Cookies Sie zulassen möchten.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 min-w-max">
            <button onClick={() => setShowSettings(true)} className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition">
              Einstellungen
            </button>
            <button onClick={acceptNecessary} className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition">
              Nur notwendige
            </button>
            <button onClick={acceptAll} className="px-4 py-2 text-sm bg-[#3F5E39] rounded-md hover:bg-[#324B2D] transition font-medium">
              Alle akzeptieren
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h3 className="font-semibold text-lg mb-4">Cookie-Einstellungen</h3>
          <div className="space-y-4 mb-6 text-sm">
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <p className="font-medium">Notwendig</p>
                <p className="text-gray-400 text-xs mt-1">Diese Cookies sind für die Funktion der Website erforderlich.</p>
              </div>
              <input type="checkbox" checked disabled className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <p className="font-medium">Analytics</p>
                <p className="text-gray-400 text-xs mt-1">Helfen uns zu verstehen, wie Besucher mit der Website interagieren.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.analytics} 
                onChange={(e) => setSettings({...settings, analytics: e.target.checked})}
                className="w-4 h-4 cursor-pointer accent-[#3F5E39]" 
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800 rounded">
              <div>
                <p className="font-medium">Werbung</p>
                <p className="text-gray-400 text-xs mt-1">Werden verwendet, um Besuchern relevante Werbung anzuzeigen.</p>
              </div>
              <input 
                type="checkbox" 
                checked={settings.advertising} 
                onChange={(e) => setSettings({...settings, advertising: e.target.checked})}
                className="w-4 h-4 cursor-pointer accent-[#3F5E39]" 
              />
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={acceptAll} className="px-4 py-2 text-sm border border-gray-600 rounded-md hover:bg-gray-800 transition">
              Alle akzeptieren
            </button>
            <button onClick={saveSettings} className="px-4 py-2 text-sm bg-[#3F5E39] rounded-md hover:bg-[#324B2D] transition font-medium">
              Auswahl speichern
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
