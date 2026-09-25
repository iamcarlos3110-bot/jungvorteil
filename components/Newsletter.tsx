"use client";
import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-purple-200 text-xs font-semibold backdrop-blur-sm">
          <Bell className="w-4 h-4 text-purple-300" /> Keine Deals mehr verpassen
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Verpasse keine neuen Rabatte</h2>
        <p className="text-purple-200 text-base md:text-lg">
          Abonniere unseren kostenlosen Newsletter und erhalte die besten Angebote für Jugendliche und Studenten direkt per Mail.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-4 bg-green-500/20 border border-green-400 text-green-200 rounded-2xl font-bold">
            <CheckCircle className="w-5 h-5 text-green-400" /> Danke! Du bist jetzt für Deal-Alerts angemeldet.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse..."
              className="flex-grow px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-purple-300 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-purple-900 font-bold rounded-2xl hover:bg-purple-50 transition-all shadow-md shrink-0 cursor-pointer"
            >
              Abonnieren
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
