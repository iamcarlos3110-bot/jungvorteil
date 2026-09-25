"use client";
import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Fehler beim Anmelden.");
        setLoading(false);
        return;
      }

      setSuccessMessage(data.message || "Danke! Du bist jetzt angemeldet.");
      setSubmitted(true);
    } catch {
      setError("Verbindungsfehler. Bitte versuche es später erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#1C331B] to-[#2F5229] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
      <div className="max-w-2xl mx-auto text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold backdrop-blur-sm">
          <Bell className="w-4 h-4 text-emerald-300" /> Keine Deals mehr verpassen
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Verpasse keine neuen Rabatte</h2>
        <p className="text-emerald-100 text-base md:text-lg">
          Abonniere unseren kostenlosen Newsletter und erhalte die besten Angebote für Jugendliche und Studenten direkt per Mail.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-500/20 border border-emerald-400 text-emerald-200 rounded-2xl font-bold">
            <CheckCircle className="w-5 h-5 text-emerald-400" /> {successMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <div className="flex-grow flex flex-col gap-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail-Adresse..."
                className="w-full px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 outline-none focus:ring-2 focus:ring-emerald-400"
              />
              {error && (
                <p className="text-xs text-red-300 font-medium text-left px-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 bg-white text-[#253D22] font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-md shrink-0 cursor-pointer disabled:opacity-60 h-fit"
            >
              {loading ? "Sende..." : "Abonnieren"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
