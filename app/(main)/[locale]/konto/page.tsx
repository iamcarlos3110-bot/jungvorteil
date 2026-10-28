// app/(main)/[locale]/konto/page.tsx
"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  User, 
  Crown, 
  Flame, 
  Award, 
  RotateCcw, 
  CheckCircle, 
  LogOut, 
  RefreshCw, 
  BookOpen, 
  Star,
  Brain,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { getLocalStudent, studentLogout, syncStudentProgress, StudentUser } from "@/lib/studentAuth";
import { getStudyProgress, StudyStats } from "@/lib/studyProgress";
import { getPremiumStatus } from "@/lib/premium";

interface AccountPageProps {
  params: Promise<{ locale: string }>;
}

export default function AccountPage({ params }: AccountPageProps) {
  const { locale } = use(params);
  const router = useRouter();

  const [student, setStudent] = useState<StudentUser | null>(null);
  const [stats, setStats] = useState<StudyStats>({
    streak: 1,
    lastStudyDate: null,
    testsCompleted: 0,
    failedQuestionIds: [],
    favoriteQuestionIds: [],
  });
  const [isPro, setIsPro] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  useEffect(() => {
    const currentStudent = getLocalStudent();
    setStudent(currentStudent);
    setStats(getStudyProgress());
    setIsPro(getPremiumStatus() || Boolean(currentStudent?.isPremium));

    const handleAuth = () => {
      const s = getLocalStudent();
      setStudent(s);
      setIsPro(getPremiumStatus() || Boolean(s?.isPremium));
    };
    window.addEventListener("student_auth_changed", handleAuth);
    return () => window.removeEventListener("student_auth_changed", handleAuth);
  }, []);

  const handleSync = async () => {
    setSyncing(true);
    setSyncSuccess(false);
    const ok = await syncStudentProgress();
    setSyncing(false);
    if (ok) {
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3000);
    }
  };

  const handleLogout = async () => {
    await studentLogout();
    router.push(`/${locale}`);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl text-white">
      {/* Top Welcome Card */}
      <div className="bg-gradient-to-br from-[#131B10] to-[#0A0F08] border border-[#212D1C] rounded-3xl p-6 sm:p-8 shadow-xl mb-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#556F3B] to-[#708F52] flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-[#556F3B]/30">
              {student ? (student.name ? student.name[0].toUpperCase() : "S") : "👤"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {student ? student.name || student.email.split("@")[0] : "Gast-Schüler"}
                </h1>
                {isPro && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm">
                    <Crown className="w-3 h-3" /> PRO VIP
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {student ? student.email : "Nicht angemeldet — Fortschritt wird nur lokal auf diesem Gerät gespeichert."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {student ? (
              <>
                <button
                  onClick={handleSync}
                  disabled={syncing}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 transition cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
                  <span>{syncSuccess ? "Synchronisiert! ✓" : "Synchronisieren"}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 font-bold text-xs rounded-xl border border-red-500/20 transition cursor-pointer"
                  title="Abmelden"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <Link
                href={`/${locale}/login`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#556F3B] hover:bg-[#708F52] text-white font-black text-xs rounded-xl shadow-lg transition active:scale-95"
              >
                <User className="w-4 h-4" />
                <span>Jetzt anmelden oder registrieren</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Subscription Status Card */}
      <div className={`p-6 rounded-3xl border mb-8 ${
        isPro 
          ? "bg-gradient-to-r from-amber-950/30 via-[#182014] to-[#121A0F] border-amber-500/30 shadow-lg shadow-amber-500/5"
          : "bg-[#121810] border-[#212D1C]"
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isPro ? "bg-amber-500/20 text-amber-300 border border-amber-400/30" : "bg-white/10 text-slate-400"
            }`}>
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-white flex items-center gap-2">
                {isPro ? "AutoTheorie PRO • Unbegrenzter VIP-Pass" : "Kostenloser Lernplan"}
                {isPro && <CheckCircle className="w-4 h-4 text-emerald-400" />}
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                {isPro 
                  ? "Du hast unbegrenzten Zugriff auf alle 600 ASA-Theoriefragen, das Fangfragen-Repetitorium und 100% werbefreies Lernen."
                  : "Du nutzt die Basisversion. Schalte alle 600 Fragen, Fangfragen und werbefreies Lernen mit dem PRO-Pass für nur CHF 10.- frei."}
              </p>
            </div>
          </div>

          {!isPro ? (
            <Link
              href={`/${locale}/premium`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs shadow-lg shadow-amber-500/20 transition active:scale-95 shrink-0"
            >
              <Crown className="w-4 h-4" />
              <span>Auf PRO upgraden (CHF 10.-)</span>
            </Link>
          ) : (
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl shrink-0">
              ✓ 100% Werbefrei aktiv
            </span>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#121810] border border-[#212D1C] rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400">Lernserie</span>
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{stats.streak || 1} Tage</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Tägliche Kontinuität</p>
          </div>
        </div>

        <div className="bg-[#121810] border border-[#212D1C] rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400">Tests beendet</span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{stats.testsCompleted || 0}</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Vollständige Simulationen</p>
          </div>
        </div>

        <div className="bg-[#121810] border border-[#212D1C] rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400">Fehler-Trainer</span>
            <RotateCcw className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{stats.failedQuestionIds?.length || 0}</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Fragen zum Wiederholen</p>
          </div>
        </div>

        <div className="bg-[#121810] border border-[#212D1C] rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400">Favoriten</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{stats.favoriteQuestionIds?.length || 0}</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Gespeicherte Fragen</p>
          </div>
        </div>
      </div>

      {/* Quick Study Navigation */}
      <div className="bg-[#121810] border border-[#212D1C] rounded-3xl p-6 shadow-xl">
        <h3 className="text-base font-black text-white mb-4">Lernbereich fortsetzen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href={`/${locale}/pruefung`}
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#556F3B]/20 border border-white/10 hover:border-[#556F3B]/40 rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="font-bold text-sm text-white group-hover:text-emerald-300 transition">50-Fragen-Prüfung</div>
                <div className="text-[11px] text-slate-400">Amtliche ASA-Simulation</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
          </Link>

          <Link
            href={`/${locale}/memorizar`}
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#556F3B]/20 border border-white/10 hover:border-[#556F3B]/40 rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 text-indigo-400" />
              <div>
                <div className="font-bold text-sm text-white group-hover:text-indigo-300 transition">Lernkarten-Modus</div>
                <div className="text-[11px] text-slate-400">Spaced Repetition Lernen</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
          </Link>

          <Link
            href={`/${locale}/fallos`}
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#556F3B]/20 border border-white/10 hover:border-[#556F3B]/40 rounded-2xl transition group"
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-red-400" />
              <div>
                <div className="font-bold text-sm text-white group-hover:text-red-300 transition">Fehler-Repetitorium</div>
                <div className="text-[11px] text-slate-400">{stats.failedQuestionIds?.length || 0} offene Fehler</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
