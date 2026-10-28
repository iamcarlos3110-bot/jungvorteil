"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { activatePremiumPass } from "@/lib/premium";
import { saveLocalStudent } from "@/lib/studentAuth";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Award,
  Zap,
  User
} from "lucide-react";

interface SuccessPageProps {
  params: Promise<{ locale: string }>;
}

export default function PremiumSuccessPage({ params }: SuccessPageProps) {
  const { locale } = use(params);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id") || "tx_stripe_direct";
  
  const [isVerifying, setIsVerifying] = useState(true);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  useEffect(() => {
    // Activate in local storage immediately
    activatePremiumPass(sessionId);

    // Call verify endpoint
    if (sessionId && sessionId.startsWith("cs_")) {
      fetch(`/api/checkout/verify?session_id=${encodeURIComponent(sessionId)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.customerEmail) {
            setCustomerEmail(data.customerEmail);
            // Automatically link / create student account
            fetch("/api/auth/student", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ credentialsAction: "restore-stripe", email: data.customerEmail }),
            })
              .then((r) => r.json())
              .then((res) => {
                if (res.student) {
                  saveLocalStudent(res.student);
                }
              })
              .catch(() => {});
          }
        })
        .catch(() => {})
        .finally(() => setIsVerifying(false));
    } else {
      setIsVerifying(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-[80vh] bg-[#090D08] text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="bg-[#121711] border border-[#222B1E] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#556F3B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#556F3B] to-[#708F52] text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#556F3B]/30 ring-4 ring-[#556F3B]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2415] border border-[#2F3F25] text-[#A3C973] text-xs font-black uppercase tracking-wider mb-3">
              <Crown className="w-4 h-4 text-amber-400" />
              Zahlung erfolgreich • VIP-Pass Aktiv
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
              Willkommen bei AutoTheorie PRO!
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto">
              Herzlichen Glückwunsch! Dein Zugang zu allen Schweizer Theorieprüfungs-Funktionen ist ab sofort unbeschränkt freigeschaltet.
            </p>

            {customerEmail && (
              <p className="text-xs text-slate-400 mt-2">
                Bestätigung gesendet an: <strong className="text-slate-200">{customerEmail}</strong>
              </p>
            )}
          </div>

          {/* Features Unlocked List */}
          <div className="bg-[#182017] border border-[#263321] rounded-2xl p-6 mb-8 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A3C973] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Deine freigeschalteten Vorteile:
            </h3>

            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                ✓
              </div>
              <span><strong>Alle 600 ASA-Fragen</strong> inklusive tückischer Durchfaller-Tests</span>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                ✓
              </div>
              <span><strong>100% Werbefrei</strong> – Volle Konzentration ohne Unterbrechung</span>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                ✓
              </div>
              <span><strong>Schweizer Bestehens-Garantie:</strong> Geld zurück, falls du durchfällst</span>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-[#556F3B] text-white flex items-center justify-center shrink-0">
                ✓
              </div>
              <span><strong>Prüfungsreife-Zertifikat</strong> für deinen Fahrlehrer</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href={`/${locale}/pruefung`}
              className="w-full py-4 px-6 bg-[#556F3B] hover:bg-[#708F52] text-white font-black text-sm md:text-base rounded-2xl shadow-lg shadow-[#556F3B]/30 flex items-center justify-center gap-2 transition"
            >
              <Zap className="w-5 h-5 fill-white" />
              <span>Amtliche Prüfungssimulation starten</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href={`/${locale}/themen`}
                className="py-3 px-4 bg-[#1A2217] hover:bg-[#253121] border border-[#2B3825] text-slate-200 rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-[#A3C973]" />
                <span>Themenkatalog</span>
              </Link>
              <Link
                href={`/${locale}/konto`}
                className="py-3 px-4 bg-[#1A2217] hover:bg-[#253121] border border-[#2B3825] text-slate-200 rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-1.5"
              >
                <User className="w-4 h-4 text-amber-400" />
                <span>Mein Schülerkonto</span>
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-[#1F271B] flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3C973]" />
              Transaktions-ID: {sessionId.substring(0, 16)}...
            </span>
            <span>Support: team@jungvorteil.ch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
