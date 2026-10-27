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
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b backdrop-blur-md",
          isScrolled
            ? "bg-[#090D08]/95 border-[#1F271B] shadow-lg shadow-black/40 py-2.5 text-white"
            : "bg-[#090D08]/90 border-[#1A2216] py-3 text-white"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 text-xl font-black tracking-tight text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm bg-[#556F3B] text-white group-hover:bg-[#708F52]">
                <Car className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-black text-base md:text-lg text-white">
                  Auto<span className="text-[#8EAC73]">Theorie</span>
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 -mt-0.5">
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

            {/* Right Action: Streak + Lang + CTA */}
            <div className="flex items-center gap-2.5">
              {/* Streak Badge */}
              <Link
                href={`/${locale}/progreso`}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-400/30 cursor-pointer hover:scale-105 transition"
                title="Tägliche Lernserie ansehen"
              >
                <span className="animate-pulse">🔥</span>
                <span>{streak}d</span>
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center p-0.5 rounded-xl text-[11px] font-bold border bg-white/10 border-white/15 text-white">
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
              >
                <span>👑</span>
                <span className="hidden sm:inline">PRO</span>
                <span>CHF 10.-</span>
              </Link>

              {/* Start Test CTA */}
              <Link
                href={`/${locale}/pruefung`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-extrabold shadow-sm transition active:scale-95 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Test</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "xl:hidden p-1.5 rounded-xl transition cursor-pointer",
                  isScrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                )}
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
        <div className="fixed inset-x-0 top-[55px] bg-slate-900 border-b border-slate-800 z-40 p-4 shadow-xl xl:hidden text-white animate-fade-in">
          <div className="flex flex-col gap-2">
            <Link
              href={`/${locale}/progreso`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 bg-slate-800/80 rounded-xl mb-1 text-xs"
            >
              <span className="text-slate-400">Tägliche Lernserie:</span>
              <span className="font-extrabold text-amber-400 flex items-center gap-1">🔥 {streak} Tage Serie (Details ansehen)</span>
            </Link>

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-slate-200 font-bold text-sm"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={`/${locale}/pruefung`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold text-sm shadow flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" /> 50-Fragen-Prüfung starten
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
