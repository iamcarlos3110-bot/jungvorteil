'use client';

import { useState } from 'react';
import { Mail, Clock, ShieldCheck, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ContactPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'de';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple rate limiting via sessionStorage
    const lastSubmit = sessionStorage.getItem('lastContactSubmit');
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < 60000) {
      alert('Bitte warte eine Minute, bevor du eine weitere Nachricht sendest.');
      return;
    }

    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus('success');
        sessionStorage.setItem('lastContactSubmit', Date.now().toString());
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
          Kontakt &amp; Support
        </h1>
        <p className="text-stone-600 text-base leading-relaxed">
          Hast du eine Frage zu einem Rabatt, möchtest du ein Angebot melden oder mit dem JungVorteil-Team zusammenarbeiten? Wir freuen uns auf deine Nachricht!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Direct Contact Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-[#EAF0E5]/60 border border-[#C7D9C0] p-6 rounded-2xl space-y-5">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#2E4D28]" />
              <span>Direkter Kontakt</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2E4D28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">E-Mail:</span>
                  <a href="mailto:kontakt@jungvorteil.ch" className="text-[#2E4D28] font-bold underline hover:text-[#1E331B]">
                    kontakt@jungvorteil.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2E4D28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Antwortzeit:</span>
                  <span>In der Regel innerhalb von 24 Stunden.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2E4D28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-900">Standort:</span>
                  <span>JungVorteil Schweiz</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 border border-stone-200/90 p-5 rounded-2xl text-xs text-stone-600 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#2E4D28]" />
              <span>Datenschutz garantiert</span>
            </div>
            <p>
              Deine Angaben werden ausschließlich zur Bearbeitung deiner Anfrage verwendet. Weitere Infos findest du in unserer{' '}
              <Link href={`/${locale}/datenschutz`} className="text-[#2E4D28] underline font-semibold">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#2E4D28] flex items-center justify-center mx-auto">
                <Send className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Vielen Dank!</h2>
              <p className="text-sm text-emerald-800">
                Deine Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei dir.
              </p>
              <button 
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-[#2E4D28] underline font-bold text-sm cursor-pointer hover:text-[#1E331B]"
              >
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/90 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Dein Vor- und Nachname"
                  className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#2E4D28] focus:border-transparent outline-none text-sm text-stone-900 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  E-Mail Adresse <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="deine.email@beispiel.ch"
                  className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#2E4D28] focus:border-transparent outline-none text-sm text-stone-900 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                  Nachricht <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="Wie können wir dir helfen?"
                  className="w-full px-4 py-2.5 bg-stone-50/50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#2E4D28] focus:border-transparent outline-none text-sm text-stone-900 transition-all resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="text-red-600 text-xs bg-red-50 border border-red-200 p-3 rounded-xl font-medium">
                  Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal oder sende eine direkte E-Mail an kontakt@jungvorteil.ch.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-[#2E4D28] hover:bg-[#1E331B] text-white font-bold py-3 px-6 rounded-xl transition shadow-md shadow-[#2E4D28]/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}</span>
              </button>

              <p className="text-[11px] text-stone-400 text-center">
                Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäss unserer{' '}
                <Link href={`/${locale}/datenschutz`} className="underline hover:text-stone-600">
                  Datenschutzerklärung
                </Link>{' '}
                einverstanden.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

