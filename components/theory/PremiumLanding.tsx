"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getPremiumStatus, activatePremiumPass, cancelPremiumPass } from "@/lib/premium";
import { 
  Crown, 
  Check, 
  X, 
  ShieldCheck, 
  Zap, 
  Award, 
  Sparkles, 
  Star, 
  ArrowRight,
  CreditCard,
  Smartphone,
  Lock,
  RefreshCw
} from "lucide-react";

export default function PremiumLanding({ locale }: { locale: string }) {
  const [isPremium, setIsPremium] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsPremium(getPremiumStatus());
    const handleStatus = () => setIsPremium(getPremiumStatus());
    window.addEventListener("premium_status_changed", handleStatus);
    return () => window.removeEventListener("premium_status_changed", handleStatus);
  }, []);

  const handleCheckout = async () => {
    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });

      const data = await res.json();

      if (data.url) {
        // Redirect to official Stripe Checkout page
        window.location.assign(data.url);
        return;
      }

      if (data.error) {
        setErrorMessage(data.error);
        setIsProcessing(false);
        return;
      }

      setErrorMessage("Konnte keine Verbindung zu Stripe herstellen.");
      setIsProcessing(false);
    } catch (err: any) {
      console.error("Checkout error:", err);
      setErrorMessage(err?.message || "Verbindungsfehler zur Zahlungsseite");
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2415] border border-[#2F3F25] text-[#A3C973] text-xs font-black uppercase tracking-wider mb-4">
          <Crown className="w-4 h-4 text-amber-400" />
          AutoTheorie PRO • Der Schweizer VIP-Pass
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Bestehe die Theorieprüfung <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3C973] via-emerald-400 to-amber-400">
            ohne Stress für nur CHF 10.-
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Das Durchfallen bei der amtlichen Schweizer Theorieprüfung kostet <strong>CHF 40.- Gebühr</strong> und wochenlanges Warten auf einen neuen Termin. Mit dem PRO-Pass lernst du mit Erfolgsgarantie.
        </p>
      </div>

      {/* Comparison Grid: Free vs PRO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* FREE PLAN */}
        <div className="bg-[#121711] rounded-3xl border border-[#222B1E] p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Basis Version</div>
            <h3 className="text-2xl font-black text-white mb-2">Kostenlos</h3>
            <div className="text-4xl font-black text-white mb-6">CHF 0.-</div>

            <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zugang zu den ersten Basistests (30 Fragen)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Schweizer Signalkatalog (SSV)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-500">
                <X className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Die 100 tückischsten ASA-Durchfallerfragen</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-500">
                <X className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Werbefreier Lernmodus (enthält Werbebanner)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-500">
                <X className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Bestehens-Garantie (Geld-zurück-Versprechen)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-500">
                <X className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Prüfungsreife-Zertifikat (PDF)</span>
              </li>
            </ul>
          </div>

          <Link
            href={`/${locale}/pruefung`}
            className="w-full py-3.5 px-4 bg-[#1A2217] hover:bg-[#253121] border border-[#2B3825] text-slate-200 rounded-2xl font-bold text-xs text-center transition"
          >
            Kostenlos weitermachen
          </Link>
        </div>

        {/* PRO PLAN (The 10 CHF offer with Stripe) */}
        <div className="bg-gradient-to-br from-[#121711] via-[#162114] to-[#0D140C] text-white rounded-3xl border-2 border-[#556F3B] p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-[#556F3B] text-slate-950 text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
            Sehr Beliebt in der Schweiz
          </div>

          <div>
            <div className="text-xs font-bold uppercase text-amber-400 tracking-wider mb-1">VIP-Pass</div>
            <h3 className="text-2xl font-black text-white mb-2">AutoTheorie PRO</h3>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">CHF 10.-</span>
              <span className="text-xs text-slate-400 line-through">CHF 19.90</span>
              <span className="text-xs text-[#A3C973] font-bold ml-1">Einmalige Zahlung</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Alle 600 ASA-Theoriefragen</strong> mit vollständigen Erklärungen</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Die 100 tückischsten Prüfungsfallen</strong> (Häufigste Durchfallgründe)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>100% Werbefrei</strong> – Volle Konzentration ohne Ablenkung</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Offizielle Bestehens-Garantie:</strong> Geld zurück, falls du nicht bestehst</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span><strong>Offizielles Prüfungsreife-Zertifikat</strong> für deine Fahrstunden</span>
              </li>
            </ul>
          </div>

          <div>
            {errorMessage && (
              <div className="p-3 mb-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            {isPremium && (
              <div className="mb-4 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-2xl text-emerald-300 text-center text-xs">
                <div className="font-bold">✓ PRO-Pass auf diesem Gerät aktiv</div>
                <button
                  type="button"
                  onClick={() => {
                    cancelPremiumPass();
                    setIsPremium(false);
                  }}
                  className="mt-1 text-[11px] text-slate-400 hover:text-white underline cursor-pointer inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Pass zurücksetzen (um Stripe-Zahlung erneut zu testen)
                </button>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full py-4 bg-[#556F3B] hover:bg-[#708F52] active:scale-98 text-white font-black rounded-2xl shadow-xl shadow-[#556F3B]/30 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Weiterleitung zu Stripe Checkout...</span>
                </div>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-white" />
                  <span>Sicher mit Stripe für CHF 10.- freischalten</span>
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#A3C973]" />
                Sichere Stripe-Zahlung
              </span>
              <span>•</span>
              <span>TWINT • Apple Pay • Karten</span>
              <span>•</span>
              <span>Sofortige Freischaltung</span>
            </div>

            <div className="mt-4 text-center">
              <Link
                href={`/${locale}/login`}
                className="text-xs text-amber-300 hover:text-amber-200 underline font-bold"
              >
                👑 Schon bezahlt? Hier klicken, um deinen PRO-Pass wiederherzustellen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-[#121711] border border-[#222B1E] rounded-3xl p-8 mb-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-2xl font-black text-white">
            Von über 4&apos;800 Schweizer Jugendlichen empfohlen
          </h3>
          <p className="text-slate-400 text-xs">Durchschnittliche Bewertung: 4.9 von 5 Sternen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#182017] p-5 rounded-2xl border border-[#263321]">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              &quot;Die App iTheorie hat mich 24 Franken gekostet und war total unübersichtlich. Hier habe ich für 10 Franken über Stripe bezahlt und in Zürich mit 0 Fehlern bestanden!&quot;
            </p>
            <div className="text-xs font-bold text-white">Noah M. (17 J.), Zürich</div>
          </div>

          <div className="bg-[#182017] p-5 rounded-2xl border border-[#263321]">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              &quot;Super einfach mit Apple Pay über Stripe bezahlt. Besonders die Fragen mit den Trams und den Kreiseln haben mir die Prüfung beim Strassenverkehrsamt gerettet.&quot;
            </p>
            <div className="text-xs font-bold text-white">Léa B. (18 J.), Bern</div>
          </div>

          <div className="bg-[#182017] p-5 rounded-2xl border border-[#263321]">
            <div className="flex items-center gap-2 text-amber-400 mb-2">★★★★★</div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              &quot;Bester Deal überhaupt. 10 Franken sind fair und ich habe den Führerausweis sofort auf eigene Faust geschafft.&quot;
            </p>
            <div className="text-xs font-bold text-white">Marco S. (17 J.), Basel</div>
          </div>
        </div>
      </div>

      {/* Money-back Guarantee Banner */}
      <div className="bg-[#121711] border-2 border-[#556F3B]/50 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-[#1A2415] text-[#A3C973] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-black text-white mb-1">
            Offizielle Schweizer Bestehens-Garantie
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Wir sind so überzeugt von unserer Prüfungsvorbereitung: Wenn du alle PRO-Tests absolvierst und deine offizielle Theorieprüfung beim Strassenverkehrsamt dennoch nicht bestehst, erstatten wir dir die CHF 10.- ohne Wenn und Aber über Stripe zurück.
          </p>
        </div>
      </div>
    </div>
  );
}
