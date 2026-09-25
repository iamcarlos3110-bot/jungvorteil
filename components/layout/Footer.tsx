import Link from "next/link";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1.5 text-xl font-bold text-white group"
            >
              JungVorteil
              <Sparkles className="w-5 h-5 text-purple-400" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t("tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-200 mb-2">{t("columns.vorteile")}</h4>
            <Link href={`/${locale}/angebote`} className="text-gray-400 hover:text-white text-sm transition-colors">Alle Vorteile</Link>
            <Link href={`/${locale}/gratis`} className="text-gray-400 hover:text-white text-sm transition-colors">Kostenlos</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-200 mb-2">{t("columns.fuerJunge") || "Für Junge"}</h4>
            <Link href={`/${locale}/studentenrabatte`} className="text-gray-400 hover:text-white text-sm transition-colors">Studierende</Link>
            <Link href={`/${locale}/unter-25`} className="text-gray-400 hover:text-white text-sm transition-colors">Unter 25</Link>
            <Link href={`/${locale}/unter-30`} className="text-gray-400 hover:text-white text-sm transition-colors">Unter 30</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-200 mb-2">Entdecken</h4>
            <Link href={`/${locale}/staedte`} className="text-gray-400 hover:text-white text-sm transition-colors">Städte</Link>
            <Link href={`/${locale}/kategorien`} className="text-gray-400 hover:text-white text-sm transition-colors">Kategorien</Link>
            <Link href={`/${locale}/marken`} className="text-gray-400 hover:text-white text-sm transition-colors">Unternehmen</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-gray-200 mb-2">{t("columns.ueber")}</h4>
            <Link href={`/${locale}/magazin`} className="text-gray-400 hover:text-white text-sm transition-colors">Magazin</Link>
            <Link href={`/${locale}/kontakt`} className="text-gray-400 hover:text-white text-sm transition-colors">Kontakt</Link>
            <Link href={`/${locale}/datenschutz`} className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JungVorteil. {t("copyright")}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href={`/${locale}/datenschutz`} className="hover:text-white transition-colors">{t("links.datenschutz")}</Link>
            <Link href={`/${locale}/impressum`} className="hover:text-white transition-colors">{t("links.impressum")}</Link>
            <Link href={`/${locale}/nutzungsbedingungen`} className="hover:text-white transition-colors">{t("links.nutzungsbedingungen")}</Link>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-600 text-center md:text-left max-w-4xl">
          <p>{t("disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}
