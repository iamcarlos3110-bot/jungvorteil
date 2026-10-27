"use client";

import React, { useState } from "react";
import { activatePremiumPass } from "@/lib/premium";
import { 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Zap, 
  Crown, 
  Award, 
  Clock, 
  X,
  CreditCard,
  Smartphone,
  Lock
} from "lucide-react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerReason?: string;
  locale?: string;
}

export default function PremiumUpgradeModal({ isOpen, onClose, triggerReason, locale = "de" }: PremiumModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCheckoutWithStripe = async () => {
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
      console.error("Stripe modal error:", err);
      setErrorMessage(err?.message || "Verbindungsfehler zur Zahlungsseite");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#121711] border border-[#2B3825] text-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#556F3B]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A2415] border border-[#2F3F25] text-[#A3C973] text-xs font-black uppercase tracking-wider mb-4">
            <Crown className="w-4 h-4 text-amber-400" />
            AutoTheorie PRO • Schweizer Erfolgs-Pass
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2">
            Bestehe deine Theorieprüfung <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A3C973] via-emerald-400 to-amber-400">beim 1. Versuch</span>
          </h2>

          {triggerReason && (
            <p className="text-[#A3C973] text-xs font-semibold mb-4 bg-[#182017] p-2.5 rounded-xl border border-[#263321]">
              🔒 {triggerReason}
            </p>
          )}

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            Ein Kaffee in Zürich kostet CHF 6.-. Ein Durchfallen bei der Theorie kostet dich <strong>CHF 40.- Gebühr</strong> und 3 Wochen Wartezeit. Sichere dir den VIP-Pass!
          </p>

          {/* Features Included */}
          <div className="space-y-2.5 mb-6 bg-[#182017] p-4 rounded-2xl border border-[#263321]">
            <div className="flex items-center gap-2.5 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Die 100 tückischsten ASA-Prüfungsfragen</strong> (Durchfaller-Fallen)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>100% Werbefrei</strong> – Keine störenden Werbebanner mehr</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Bestehens-Garantie</strong> oder 100% Geld zurück</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span><strong>Prüfungsreife-Zertifikat (PDF)</strong> für deine Eltern / Fahrlehrer</span>
            </div>
          </div>

          {/* Price & CTA Button */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <div className="text-[11px] text-slate-400 line-through">Normal: CHF 19.90</div>
                <div className="text-xs text-[#A3C973] font-bold">Aktion für junge Fahrschüler</div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-white">CHF 10.-</span>
                <span className="text-xs text-slate-400 font-normal"> / 10 €</span>
              </div>
            </div>

            {errorMessage && (
              <div className="p-2.5 mb-3 bg-red-500/20 border border-red-500/40 rounded-xl text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <button
              onClick={handleCheckoutWithStripe}
              disabled={isProcessing}
              className="w-full py-4 bg-[#556F3B] hover:bg-[#708F52] active:scale-98 text-white font-black rounded-2xl shadow-xl shadow-[#556F3B]/30 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2 text-white font-bold">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Weiterleitung zu Stripe...</span>
                </div>
              ) : (
                <>
                  <Zap className="w-5 h-5 fill-white" />
                  <span>Jetzt sicher mit Stripe für CHF 10.- freischalten</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#A3C973]" />
                Offizielles Stripe Checkout
              </span>
              <span>•</span>
              <span>TWINT, Apple Pay, Karte</span>
              <span>•</span>
              <span>Einmalig</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
