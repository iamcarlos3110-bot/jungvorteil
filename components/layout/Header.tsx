"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Car, 
  Award, 
  BookOpen, 
  AlertTriangle, 
  HelpCircle,
  Brain,
  RotateCcw,
  BarChart2,
  Wine
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getStudyProgress } from "@/lib/studyProgress";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [streak, setStreak] = useState(1);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const progress = getStudyProgress();
    setStreak(progress.streak || 1);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMemorizarLabel = (loc: string) => {
    if (loc === "fr") return "Cartes mémoire";
    if (loc === "it") return "Flashcard";
    return "Lernkarten";
  };

  const navLinks = [
    { href: `/${locale}/pruefung`, label: locale === "fr" ? "50 Questions" : locale === "it" ? "50 Domande" : "50 Fragen", icon: Award },
    { href: `/${locale}/memorizar`, label: getMemorizarLabel(locale), icon: Brain },
    { href: `/${locale}/themen`, label: locale === "fr" ? "Par Thème" : locale === "it" ? "Per Tema" : "Thementests", icon: BookOpen },
    { href: `/${locale}/fallos`, label: locale === "fr" ? "Erreurs" : locale === "it" ? "Errori" : "Fehler-Trainer", icon: RotateCcw },
    { href: `/${locale}/signale`, label: locale === "fr" ? "Signaux" : locale === "it" ? "Segnali" : "Signale", icon: AlertTriangle },
    { href: `/${locale}/progreso`, label: locale === "fr" ? "Progrès" : locale === "it" ? "Progressi" : "Fortschritt", icon: BarChart2 },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b backdrop-blur-md w-full max-w-full",
          isScrolled
            ? "bg-[#090D08]/95 border-[#1F271B] shadow-lg shadow-black/40 py-2 sm:py-2.5 text-white"
            : "bg-[#090D08]/90 border-[#1A2216] py-2.5 sm:py-3 text-white"
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl font-black tracking-tight text-white transition-colors group shrink-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-[#556F3B] text-white group-hover:bg-[#708F52] shrink-0">
                <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-black text-sm sm:text-lg text-white">
                  Auto<span className="text-[#8EAC73]">Theorie</span>
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 -mt-0.5 hidden sm:inline">
                  Schweiz Kat. B/A
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs font-bold transition-all px-2.5 py-1.5 rounded-xl flex items-center gap-1.5",
                      isActive
                        ? "text-white bg-[#556F3B] font-extrabold shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5 opacity-80" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Streak + Lang + CTA + Mobile Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Streak Badge (visible on tablets & desktop) */}
              <Link
                href={`/${locale}/progreso`}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-400/30 cursor-pointer hover:scale-105 transition"
                title="Tägliche Lernserie ansehen"
              >
                <span className="animate-pulse">🔥</span>
                <span>{streak}d</span>
              </Link>

              {/* Language Switcher (visible on md+) */}
              <div className="hidden md:flex items-center p-0.5 rounded-xl text-[11px] font-bold border bg-white/10 border-white/15 text-white">
                {["de", "fr", "it"].map((lang) => {
                  const href = pathname.replace(`/${locale}`, `/${lang}`);
                  const isLangActive = locale === lang;
                  return (
                    <Link
                      key={lang}
                      href={href}
                      className={cn(
                        "px-1.5 py-0.5 rounded-lg uppercase font-bold transition-all",
                        isLangActive
                          ? "bg-[#556F3B] text-white font-black shadow-sm"
                          : "hover:opacity-80 text-slate-300"
                      )}
                    >
                      {lang}
                    </Link>
                  );
                })}
              </div>

              {/* PRO Pass VIP Button */}
              <Link
                href={`/${locale}/premium`}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-[11px] sm:text-xs shadow-sm transition active:scale-95 cursor-pointer shrink-0"
              >
                <span>👑</span>
                <span>PRO</span>
                <span className="hidden sm:inline">CHF 10.-</span>
              </Link>

              {/* Start Test CTA (desktop only) */}
              <Link
                href={`/${locale}/pruefung`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#556F3B] hover:bg-[#708F52] text-white rounded-xl text-xs font-extrabold shadow-sm transition active:scale-95 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Test</span>
              </Link>

              {/* Mobile menu button (always visible and in-viewport on mobile) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl transition cursor-pointer text-white bg-white/10 hover:bg-white/20 border border-white/10 shrink-0"
                aria-label="Menü öffnen"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[52px] sm:top-[57px] bg-[#0E140C] border-b border-[#1F271B] z-40 p-4 shadow-2xl xl:hidden text-white animate-fade-in max-h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between p-2.5 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-xs text-slate-300 font-bold">Sprache / Langue:</span>
              <div className="flex items-center p-0.5 rounded-lg border bg-white/10 border-white/15 text-white">
                {["de", "fr", "it"].map((lang) => {
                  const href = pathname.replace(`/${locale}`, `/${lang}`);
                  const isLangActive = locale === lang;
                  return (
                    <Link
                      key={lang}
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-2.5 py-1 rounded-md uppercase font-black text-xs transition-all",
                        isLangActive
                          ? "bg-[#556F3B] text-white shadow-sm"
                          : "hover:opacity-80 text-slate-300"
                      )}
                    >
                      {lang}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Daily Streak */}
            <Link
              href={`/${locale}/progreso`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs"
            >
              <span className="text-slate-300 font-bold">Tägliche Lernserie:</span>
              <span className="font-extrabold text-amber-300 flex items-center gap-1">🔥 {streak} Tage Serie (Details)</span>
            </Link>

            {/* Navigation links */}
            <div className="grid grid-cols-1 gap-1 pt-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl font-bold text-sm transition-all",
                      isActive
                        ? "bg-[#556F3B] text-white font-extrabold shadow-sm"
                        : "hover:bg-white/10 text-slate-200"
                    )}
                  >
                    <Icon className="w-4 h-4 opacity-80" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Big Action button */}
            <Link
              href={`/${locale}/pruefung`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-[#556F3B] hover:bg-[#708F52] text-white text-center rounded-xl font-black text-sm shadow-md shadow-[#556F3B]/30 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" /> 50-Fragen-Prüfung starten
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
