// app/(main)/[locale]/login/page.tsx
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  User, 
  Lock, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Crown, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from "lucide-react";
import { saveLocalStudent } from "@/lib/studentAuth";
import { activatePremiumPass } from "@/lib/premium";

interface LoginPageProps {
  params: Promise<{ locale: string }>;
}

export default function LoginPage({ params }: LoginPageProps) {
  const { locale } = use(params);
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register" | "restore">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (mode === "restore") {
        const res = await fetch("/api/auth/student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credentialsAction: "restore-stripe", email }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Kein Kauf mit dieser E-Mail gefunden.");
        } else {
          activatePremiumPass();
          if (data.student) {
            saveLocalStudent(data.student);
          }
          setSuccessMsg("🎉 Dein AutoTheorie PRO-Pass wurde erfolgreich wiederhergestellt!");
          setTimeout(() => {
            router.push(`/${locale}/konto`);
          }, 1500);
        }
      } else {
        const action = mode === "register" ? "register" : "login";
        const res = await fetch("/api/auth/student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credentialsAction: action, email, password, name }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Fehler beim Anmelden.");
        } else {
          saveLocalStudent(data.student);
          if (data.student.isPremium) {
            activatePremiumPass();
          }
          setSuccessMsg("Erfolgreich eingeloggt! Weiterleitung...");
          setTimeout(() => {
            router.push(`/${locale}/konto`);
          }, 1000);
        }
      }
    } catch {
      setError("Netzwerkfehler. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const titles = {
    de: {
      login: "Schüler-Login",
      register: "Konto erstellen",
      restore: "PRO-Pass wiederherstellen",
      sub: "Speichere deinen Lernfortschritt und synchronisiere dein Konto auf allen Geräten.",
    },
    fr: {
      login: "Connexion Élève",
      register: "Créer un compte",
      restore: "Restaurer le Pass PRO",
      sub: "Enregistrez vos progrès et synchronisez votre compte sur tous vos appareils.",
    },
    it: {
      login: "Accesso Studente",
      register: "Crea un account",
      restore: "Ripristina Pass PRO",
      sub: "Salva i tuoi progressi di studio e sincronizza il tuo account su tutti i dispositivi.",
    },
  }[locale as "de" | "fr" | "it"] || {
    login: "Schüler-Login",
    register: "Konto erstellen",
    restore: "PRO-Pass wiederherstellen",
    sub: "Speichere deinen Lernfortschritt und synchronisiere dein Konto auf allen Geräten.",
  };

  return (
    <div className="min-h-[85vh] py-12 px-4 flex flex-col justify-center items-center relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#556F3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#121810] border border-[#212D1C] rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10 text-white">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-[#556F3B] to-[#708F52] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#556F3B]/20">
            {mode === "restore" ? (
              <Crown className="w-7 h-7 text-amber-300" />
            ) : (
              <User className="w-7 h-7 text-white" />
            )}
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            {mode === "login" ? titles.login : mode === "register" ? titles.register : titles.restore}
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
            {titles.sub}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 p-1 bg-black/40 border border-white/10 rounded-2xl mb-6 text-xs font-bold text-center">
          <button
            type="button"
            onClick={() => { setMode("login"); setError(null); setSuccessMsg(null); }}
            className={`py-2 rounded-xl transition cursor-pointer ${
              mode === "login" ? "bg-[#556F3B] text-white shadow-sm font-extrabold" : "text-slate-400 hover:text-white"
            }`}
          >
            Anmelden
          </button>
          <button
            type="button"
            onClick={() => { setMode("register"); setError(null); setSuccessMsg(null); }}
            className={`py-2 rounded-xl transition cursor-pointer ${
              mode === "register" ? "bg-[#556F3B] text-white shadow-sm font-extrabold" : "text-slate-400 hover:text-white"
            }`}
          >
            Registrieren
          </button>
          <button
            type="button"
            onClick={() => { setMode("restore"); setError(null); setSuccessMsg(null); }}
            className={`py-2 rounded-xl transition cursor-pointer ${
              mode === "restore" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-sm" : "text-amber-400 hover:text-amber-300"
            }`}
          >
            👑 PRO Pass
          </button>
        </div>

        {/* Feedback messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Dein Name oder Vorname</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="z.B. Carlos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#556F3B] transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              {mode === "restore" ? "E-Mail-Adresse des Stripe-Kaufs" : "E-Mail-Adresse"}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="name@beispiel.ch"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#556F3B] transition"
              />
            </div>
            {mode === "restore" && (
              <p className="text-[11px] text-slate-400 mt-1.5">
                Gib genau die E-Mail ein, mit der du bei Stripe bezahlt hast. Wir aktivieren deinen PRO-Pass sofort auf diesem Gerät.
              </p>
            )}
          </div>

          {mode !== "restore" && (
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Passwort</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Mindestens 6 Zeichen"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#556F3B] transition"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-95 cursor-pointer mt-2 ${
              mode === "restore"
                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/20"
                : "bg-[#556F3B] hover:bg-[#708F52] text-white shadow-[#556F3B]/30"
            }`}
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Wird verarbeitet...</span>
              </>
            ) : mode === "restore" ? (
              <>
                <Crown className="w-4 h-4" />
                <span>PRO-Pass jetzt wiederherstellen</span>
              </>
            ) : mode === "register" ? (
              <>
                <span>Kostenloses Konto erstellen</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Einloggen</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Benefits footer */}
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8EAC73] shrink-0" />
            <span>Automatisches Speichern deiner Lernserie & Fehlerliste</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8EAC73] shrink-0" />
            <span>Sicherer Schweizer ASA-Theorieprüfung Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <Link href={`/${locale}/premium`} className="text-amber-300 hover:underline font-bold">
              Noch kein PRO? Jetzt für CHF 10.- upgraden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
