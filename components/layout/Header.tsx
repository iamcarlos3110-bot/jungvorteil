"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const tSearch = useTranslations("search");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const isTransparent = !isScrolled && isHomePage;

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/angebote`, label: t("angebote") },
    { href: `/${locale}/rabatte`, label: t("rabatte") },
    { href: `/${locale}/studentenrabatte`, label: t("studierende") },
    { href: `/${locale}/unter-30`, label: t("unter30") },
    { href: `/${locale}/staedte`, label: t("staedte") },
    { href: `/${locale}/kategorien`, label: t("kategorien") },
  ];

  return (
    <>
      <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isTransparent
          ? "bg-gradient-to-b from-emerald-950/60 via-emerald-950/20 to-transparent py-4"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={cn(
              "flex items-center gap-2 text-xl font-black tracking-tight transition-colors group",
              isTransparent ? "text-white" : "text-gray-900"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
                isTransparent
                  ? "bg-white/20 text-white backdrop-blur-md border border-white/20 group-hover:bg-white/30"
                  : "bg-[#3F5E39] text-white group-hover:bg-[#324B2D]"
              )}
            >
              <Sparkles className="w-4 h-4" />
            </div>
            <span>
              Jung
              <span
                className={
                  isTransparent ? "text-emerald-200" : "text-[#3F5E39]"
                }
              >
                Vorteil
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all px-3.5 py-1.5 rounded-full",
                    isTransparent
                      ? isActive
                        ? "text-white bg-white/20 font-semibold"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                      : isActive
                      ? "text-[#3F5E39] bg-[#EAF0E5] font-semibold"
                      : "text-gray-600 hover:text-[#3F5E39] hover:bg-[#F4F7F2]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Switcher */}
            <div
              className={cn(
                "flex items-center p-1 rounded-full text-xs font-bold transition-all border",
                isTransparent
                  ? "bg-white/15 backdrop-blur-md border-white/20 text-white shadow-inner"
                  : "bg-gray-100 border-gray-200/80 text-gray-700"
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
                      "px-2.5 py-1 rounded-full uppercase transition-all duration-200",
                      isLangActive
                        ? isTransparent
                          ? "bg-white text-[#253D22] font-black shadow-md"
                          : "bg-[#3F5E39] text-white font-black shadow-sm"
                        : isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/20"
                        : "text-gray-600 hover:text-[#3F5E39] hover:bg-white/80"
                    )}
                  >
                    {lang}
                  </Link>
                );
              })}
            </div>

            {/* Search Icon */}
            <Link
              href={`/${locale}/suche`}
              className={cn(
                "p-2 rounded-full transition-colors flex items-center justify-center",
                isTransparent
                  ? "text-white/85 hover:text-white hover:bg-white/15"
                  : "text-gray-600 hover:text-[#3F5E39] hover:bg-[#F4F7F2]"
              )}
              aria-label={tSearch("title")}
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                isTransparent
                  ? "text-white hover:bg-white/15"
                  : "text-gray-600 hover:text-[#3F5E39] hover:bg-[#F4F7F2]"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl transition-all duration-300 ease-in-out origin-top px-4 py-6",
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none h-0 p-0"
        )}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-gray-800 hover:text-[#3F5E39] hover:bg-[#F4F7F2] px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-gray-400">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
      {!isTransparent && <div className="h-16 lg:h-20 shrink-0" aria-hidden="true" />}
    </>
  );
}

