import Link from "next/link";
import { Car } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 text-xl font-black text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Car className="w-4 h-4" />
              </div>
              <span>
                Auto<span className="text-indigo-400">Theorie</span> Schweiz
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Kostenlose Schweizer Theorieprüfung online üben für Auto (Kategorie B) und Motorrad (Kategorie A/A1). 
              Basierend auf den offiziellen Vorschriften der ASA, SVG, VRV und SSV.
            </p>
          </div>

          {/* Col 2: Lernen & Prüfung */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-slate-200 text-sm mb-1 uppercase tracking-wider">Lernen & Prüfung</h4>
            <Link href={`/${locale}/pruefung`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Offizielle Prüfungssimulation (50 Fragen)
            </Link>
            <Link href={`/${locale}/themen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Themen-Training (Vortritt, Tempo, etc.)
            </Link>
            <Link href={`/${locale}/signale`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Schweizer Verkehrssignale (SSV)
            </Link>
            <Link href={`/${locale}/ratgeber`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Führerschein mit 17: Schritt für Schritt
            </Link>
          </div>

          {/* Col 3: Wichtige Themen */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-slate-200 text-sm mb-1 uppercase tracking-wider">Themenbereiche</h4>
            <Link href={`/${locale}/themen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Rechtsvortritt & Kreisverkehr
            </Link>
            <Link href={`/${locale}/themen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Geschwindigkeit & Tempo-30-Zonen
            </Link>
            <Link href={`/${locale}/themen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Autobahn & Rettungsgasse
            </Link>
            <Link href={`/${locale}/themen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Promillegrenzen & Neulenker (0.1‰)
            </Link>
          </div>

          {/* Col 4: Rechtliches & Info */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-slate-200 text-sm mb-1 uppercase tracking-wider">Rechtliches</h4>
            <Link href={`/${locale}/impressum`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Impressum
            </Link>
            <Link href={`/${locale}/datenschutz`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Datenschutz
            </Link>
            <Link href={`/${locale}/nutzungsbedingungen`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Nutzungsbedingungen
            </Link>
            <Link href={`/${locale}/kontakt`} className="text-slate-400 hover:text-white text-xs transition-colors">
              Kontakt
            </Link>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 text-slate-400 text-[11px] leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} AutoTheorie Schweiz. Alle Rechte vorbehalten. Pädagogisches Übungsportal zur Vorbereitung auf die amtliche Theorieprüfung.
          </p>
          <p className="text-slate-400">
            Keine offizielle Webseite der Vereinigung der Strassenverkehrsämter (asa).
          </p>
        </div>
      </div>
    </footer>
  );
}
