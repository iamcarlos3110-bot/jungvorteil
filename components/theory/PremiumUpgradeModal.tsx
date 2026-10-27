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
  Smartphone
} from "lucide-react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerReason?: string;
}

export default function PremiumUpgradeModal({ isOpen, onClose, triggerReason }: PremiumModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<"twint" | "applepay" | "card">("twint");

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      activatePremiumPass("tx_sim_7chf");
      setIsProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-500/40 shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!success ? (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
              <Crown className="w-4 h-4 text-amber-400" />
              AutoTheorie PRO • Schweizer Erfolgs-Pass
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-2">
              Bestehe deine Theorieprüfung <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-indigo-300">garantiert beim 1. Versuch</span>
            </h2>

            {triggerReason && (
              <p className="text-indigo-300 text-xs font-semibold mb-4 bg-indigo-950/80 p-2.5 rounded-xl border border-indigo-800">
                🔒 {triggerReason}
              </p>
            )}

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Ein Kaffee in Zürich kostet CHF 6.-. Ein Durchfallen bei der Theorie kostet dich <strong>CHF 40.- Gebühr</strong> und 3 Wochen Wartezeit. Sichere dir den VIP-Pass!
            </p>

            {/* Features Included */}
            <div className="space-y-2.5 mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Die 100 tückischsten ASA-Prüfungsfragen</strong> (Durchfaller-Fallen)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>100% Werbefrei</strong> – Keine störenden Werbebanner mehr</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Bestehens-Garantie</strong> oder 100% Geld zurück</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Prüfungsreife-Zertifikat (PDF)</strong> für deine Eltern / Fahrlehrer</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Zahlungsart wählen (in der Schweiz sehr beliebt):
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMethod("twint")}
                  className={`p-2.5 rounded-xl border text-xs font-black flex flex-col items-center gap-1 transition cursor-pointer ${
                    selectedMethod === "twint"
                      ? "bg-emerald-600/30 border-emerald-400 text-white shadow-sm ring-1 ring-emerald-400"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span className="text-base font-black tracking-tight text-emerald-400">TWINT</span>
                  <span className="text-[10px] text-slate-400">Schweiz Nr. 1</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("applepay")}
                  className={`p-2.5 rounded-xl border text-xs font-black flex flex-col items-center gap-1 transition cursor-pointer ${
                    selectedMethod === "applepay"
                      ? "bg-indigo-600/30 border-indigo-400 text-white shadow-sm ring-1 ring-indigo-400"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span className="text-base"> Pay</span>
                  <span className="text-[10px] text-slate-400">1-Klick</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("card")}
                  className={`p-2.5 rounded-xl border text-xs font-black flex flex-col items-center gap-1 transition cursor-pointer ${
                    selectedMethod === "card"
                      ? "bg-indigo-600/30 border-indigo-400 text-white shadow-sm ring-1 ring-indigo-400"
                      : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] text-slate-400">Kreditkarte</span>
                </button>
              </div>
            </div>

            {/* Price & CTA Button */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <div className="text-[11px] text-slate-400 line-through">Normal: CHF 19.90</div>
                  <div className="text-xs text-emerald-400 font-bold">Aktion für junge Fahrschüler</div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-white">CHF 7.-</span>
                  <span className="text-xs text-slate-400 font-normal"> / 7 €</span>
                </div>
              </div>

              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 active:scale-98 text-slate-950 font-black rounded-2xl shadow-xl shadow-amber-500/20 text-base transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2 text-slate-950 font-bold">
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Zahlung wird verarbeitet...</span>
                  </div>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-slate-950" />
                    <span>Jetzt für CHF 7.- freischalten</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL Verschlüsselt</span>
                <span>•</span>
                <span>Kein Abo, kein Verstecktes</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-emerald-500/40">
              ✓
            </div>
            <h3 className="text-2xl font-black text-white mb-2">
              Willkommen bei AutoTheorie PRO!
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Dein Pass ist aktiviert. Alle 600 Fragen, die tückischen Durchfaller-Tests und der werbefreie Modus sind jetzt freigeschaltet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
