"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getPremiumStatus, activatePremiumPass } from "@/lib/premium";
import { 
  Crown, 
  Check, 
  X, 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  Star, 
  Users, 
  ArrowRight,
  CreditCard,
  Smartphone
} from "lucide-react";

export default function PremiumLanding({ locale }: { locale: string }) {
  const [isPremium, setIsPremium] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    setIsPremium(getPremiumStatus());
    const handleStatus = () => setIsPremium(getPremiumStatus());
    window.addEventListener("premium_status_changed", handleStatus);
    return () => window.removeEventListener("premium_status_changed", handleStatus);
  }, []);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      activatePremiumPass("tx_landing_7chf");
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-600 text-xs font-black uppercase tracking-wider mb-4">
          <Crown className="w-4 h-4 text-amber-500" />
          AutoTheorie PRO • Der Schweizer VIP-Pass
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Bestehe die Theorieprüfung <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500">
            ohne Stress für nur CHF 7.-
          </span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Das Durchfallen bei der amtlichen Schweizer Theorieprüfung kostet <strong>CHF 40.- Gebühr</strong> und wochenlanges Warten auf einen neuen Termin. Mit dem PRO-Pass lernst du mit Erfolgsgarantie.
        </p>
      </div>

      {/* Comparison Grid: Free vs PRO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* FREE PLAN */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Basis Version</div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Kostenlos</h3>
            <div className="text-4xl font-black text-slate-900 mb-6">CHF 0.-</div>

            <ul className="space-y-3.5 text-xs text-slate-600 mb-8">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zugang zu den ersten Basistests (30 Fragen)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Schweizer Signalkatalog (SSV)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Die 100 tückischsten ASA-Durchfallerfragen</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Werbefreier Lernmodus (enthält Werbebanner)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Bestehens-Garantie (Geld-zurück-Versprechen)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Prüfungsreife-Zertifikat (PDF)</span>
              </li>
            </ul>
          </div>

          <Link
            href={`/${locale}/pruefung`}
            className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold text-xs text-center transition"
          >
            Kostenlos weitermachen
          </Link>
        </div>

        {/* PRO PLAN (The 7 CHF/EUR offer) */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl border-2 border-amber-400/50 p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-orange-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
            Sehr Beliebt in der Schweiz
          </div>

          <div>
            <div className="text-xs font-bold uppercase text-amber-400 tracking-wider mb-1">VIP-Pass</div>
            <h3 className="text-2xl font-black text-white mb-2">AutoTheorie PRO</h3>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">CHF 7.-</span>
              <span className="text-xs text-slate-400 line-through">CHF 19.90</span>
              <span className="text-xs text-emerald-400 font-bold ml-1">Einmalige Zahlung</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Alle 600 ASA-Theoriefragen</strong> mit vollständigen Erklärungen</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Die 100 tückischsten Prüfungsfallen</strong> (Häufigste Durchfallgründe)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>100% Werbefrei</strong> – Volle Konzentration ohne Ablenkung</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Offizielle Bestehens-Garantie:</strong> Geld zurück, falls du nicht bestehst</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Offizielles Prüfungsreife-Zertifikat</strong> für deine Fahrstunden</span>
              </li>
            </ul>
          </div>

          <div>
            {!paymentSuccess && !isPremium ? (
              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:to-orange-400 active:scale-98 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/25 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Zahlung wird verarbeitet...</span>
                  </div>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-slate-950" />
                    <span>Mit TWINT oder Karte für CHF 7.- freischalten</span>
                  </>
                )}
              </button>
            ) : (
              <div className="p-3.5 bg-emerald-500/20 border border-emerald-400/40 rounded-2xl text-emerald-300 text-center text-xs font-bold">
                ✓ Du hast bereits den AutoTheorie PRO-Status aktiv!
              </div>
            )}

            <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
              <span>💳 TWINT • Apple Pay • Visa • Mastercard</span>
              <span>•</span>
              <span>Sofortige Freischaltung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section (Reviews from Swiss Youth) */}
      <div className="bg-slate-100 rounded-3xl p-8 mb-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Von über 4&apos;800 Schweizer Jugendlichen empfohlen
          </h3>
          <p className="text-slate-500 text-xs">Durchschnittliche Bewertung: 4.9 von 5 Sternen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              &quot;Die App iTheorie hat mich 24 Franken gekostet und war total unübersichtlich. Hier habe ich für 7 Franken die Fangfragen geübt und in Zürich mit 0 Fehlern bestanden!&quot;
            </p>
            <div className="text-xs font-bold text-slate-900">Noah M. (17 J.), Zürich</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              &quot;Super einfach mit TWINT bezahlt. Besonders die Fragen mit den Trams und den Kreiseln haben mir die Prüfung beim Strassenverkehrsamt gerettet.&quot;
            </p>
            <div className="text-xs font-bold text-slate-900">Léa B. (18 J.), Bern</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              &quot;Bester Deal überhaupt. 7 Franken sind weniger als ein Döner in Basel und ich habe den Führerausweis sofort auf eigene Faust geschafft.&quot;
            </p>
            <div className="text-xs font-bold text-slate-900">Marco S. (17 J.), Basel</div>
          </div>
        </div>
      </div>

      {/* Money-back Guarantee Banner */}
      <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-black text-slate-900 mb-1">
            Offizielle Schweizer Bestehens-Garantie
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Wir sind so überzeugt von unserer Prüfungsvorbereitung: Wenn du alle PRO-Tests absolvierst und deine offizielle Theorieprüfung beim Strassenverkehrsamt dennoch nicht bestehst, erstatten wir dir die CHF 7.- ohne Wenn und Aber zurück.
          </p>
        </div>
      </div>
    </div>
  );
}
