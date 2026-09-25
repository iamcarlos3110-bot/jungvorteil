'use client';

import { useState } from 'react';

export default function ContactPage() {
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
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Kontakt</h1>
      <p className="text-center text-gray-600 mb-12">
        Hast du eine Frage, einen Fehler gefunden oder möchtest ein Angebot melden? Schreib uns!
      </p>

      {status === 'success' ? (
        <div className="bg-green-50 text-green-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Vielen Dank!</h2>
          <p>Deine Nachricht wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei dir.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-green-700 underline font-medium"
          >
            Weitere Nachricht senden
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail Adresse</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none"
            ></textarea>
          </div>
          {status === 'error' && (
            <div className="text-red-600 text-sm">
              Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.
            </div>
          )}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
          </button>
        </form>
      )}
    </div>
  );
}
