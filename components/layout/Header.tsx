"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car, Award, BookOpen, AlertTriangle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/pruefung`, label: "Prüfungssimulation", icon: Award },
    { href: `/${locale}/themen`, label: "Themen-Training", icon: BookOpen },
    { href: `/${locale}/signale`, label: "Verkehrssignale", icon: AlertTriangle },
    { href: `/${locale}/ratgeber`, label: "Führerschein-Guide", icon: HelpCircle },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
            : "bg-indigo-950/90 backdrop-blur-md border-b border-indigo-900/50 py-4 text-white"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className={cn(
                "flex items-center gap-2.5 text-xl font-black tracking-tight transition-colors group",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
                  isScrolled
                    ? "bg-indigo-600 text-white group-hover:bg-indigo-700"
                    : "bg-indigo-500 text-white group-hover:bg-indigo-400"
                )}
              >
                <Car className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-black text-lg">
                  Auto<span className="text-indigo-400">Theorie</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 -mt-1">
                  Schweiz Kat. B/A
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs font-bold transition-all px-3.5 py-2 rounded-xl flex items-center gap-1.5",
                      isScrolled
                        ? isActive
                          ? "text-indigo-600 bg-indigo-50 font-extrabold"
                          : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                        : isActive
                        ? "text-white bg-white/20 font-extrabold"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <Icon className="w-4 h-4 opacity-75" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Language + CTA */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div
                className={cn(
                  "flex items-center p-1 rounded-xl text-xs font-bold border",
                  isScrolled
                    ? "bg-slate-100 border-slate-200 text-slate-700"
                    : "bg-white/10 border-white/15 text-white"
                )}
              >
                {["de", "fr", "it"].map((lang) => {
                  const href = pathname.replace(`/${locale}`, `/${lang}`);
                  const isLangActive = locale === lang;
                  return (
                    <Link
                      key={lang}
                      href={href}
                      className={cn(
                        "px-2 py-0.5 rounded-lg uppercase text-[11px] font-bold transition-all",
                        isLangActive
                          ? isScrolled
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-white text-indigo-950 font-black shadow-sm"
                          : "hover:opacity-80"
                      )}
                    >
                      {lang}
                    </Link>
                  );
                })}
              </div>

              {/* Start Test CTA */}
              <Link
                href={`/${locale}/pruefung`}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-extrabold shadow-sm transition active:scale-95"
              >
                <Award className="w-4 h-4" />
                <span>Test starten</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-xl transition cursor-pointer",
                  isScrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Menü öffnen"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 z-40 p-4 shadow-xl lg:hidden animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
                >
                  <Icon className="w-5 h-5 text-indigo-600" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={`/${locale}/pruefung`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold text-sm shadow flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" /> Offizielle Prüfung starten
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
