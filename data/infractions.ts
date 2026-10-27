// data/infractions.ts
// Tabla y simulador de infracciones y retirada de carnet en Suiza (SVG & OBV)

export interface Infraction {
  id: number;
  category: "busse" | "leicht" | "mittel" | "schwer";
  categoryBadge: string;
  title: string;
  consequence: string;
  fineAmount: string;
  lawArticle: string;
  examTip: string;
}

export const INFRACTIONS_DATA: Infraction[] = [
  {
    id: 1,
    category: "schwer",
    categoryBadge: "Schwere Widerhandlung",
    title: "Smartphone am Steuer mit der Hand bedienen",
    consequence: "Verzeigung an die Staatsanwaltschaft + mind. 1 Monat Führerausweisentzug bei Gefährdung.",
    fineAmount: "CHF 100.- (Telefonieren) bis mehrere CHF 1000.- Strafe",
    lawArticle: "Art. 3 Abs. 1 & Art. 31 Abs. 1 SVG",
    examTip: "Im Examen: Jede manuelle Bedienung des Smartphones während der Fahrt (auch an der Ampel) ist untersagt!",
  },
  {
    id: 2,
    category: "schwer",
    categoryBadge: "Schwere Widerhandlung",
    title: "Geschwindigkeitsüberschreitung Autobahn um mehr als 35 km/h",
    consequence: "Mindestens 3 Monate Ausweisentzug + Eintrag ins Strafregister (Geldstrafe nach Tagessätzen).",
    fineAmount: "Einkommensabhängige Geldstrafe",
    lawArticle: "Art. 16c Abs. 1 Bst. a SVG",
    examTip: "Ab 25 km/h innerorts, 30 km/h ausserorts oder 35 km/h Autobahn = zwingend Schwerer Entzug!",
  },
  {
    id: 3,
    category: "mittel",
    categoryBadge: "Mittelschwere Widerhandlung",
    title: "Fahren in angetrunkenem Zustand (0.50 ‰ bis 0.79 ‰ mit Verkehrsregelverletzung)",
    consequence: "Mindestens 1 Monat Führerausweisentzug + Busse.",
    fineAmount: "Mehrere hundert bis tausend CHF",
    lawArticle: "Art. 16b Abs. 1 Bst. b SVG",
    examTip: "Für Neulenker in der Probezeit gilt faktisch 0.10 ‰! Bei Verstoß wird die Probezeit um 1 Jahr verlängert.",
  },
  {
    id: 4,
    category: "schwer",
    categoryBadge: "Schwere Widerhandlung",
    title: "Rechtsüberholen auf der Autobahn",
    consequence: "Mindestens 3 Monate Führerausweisentzug (sofern es ein echtes Überholen mit Wiedereinscheren ist).",
    fineAmount: "Verzeigung + Gerichtsgebühren",
    lawArticle: "Art. 36 Abs. 5 VRV & Art. 16c SVG",
    examTip: "Nur passives 'Rechtsvorbeifahren' bei Kolonnenverkehr auf der linken Spur ist seit 2021 legal!",
  },
  {
    id: 5,
    category: "leicht",
    categoryBadge: "Leichte Widerhandlung",
    title: "Nichtgewähren des Vortritts auf dem Fussgängerstreifen",
    consequence: "Verwarnung (bei Reaktivität mind. 1 Monat Entzug).",
    fineAmount: "CHF 140.- Ordnungsbusse oder Verzeigung",
    lawArticle: "Art. 33 SVG",
    examTip: "Sobald ein Fussgänger am gelben Streifen steht und queren will, MUSS angehalten werden.",
  },
  {
    id: 6,
    category: "busse",
    categoryBadge: "Ordnungsbusse",
    title: "Fahren ohne Licht am Tag (Tagfahrlichtpflicht)",
    consequence: "Keine Ausweismassnahme, sofortige Erledigung durch Ordnungsbusse.",
    fineAmount: "CHF 40.-",
    lawArticle: "OBV Ziffer 301.1",
    examTip: "Gilt in der Schweiz für alle Motorwagen und Motorräder seit dem 1. Januar 2014.",
  },
];
