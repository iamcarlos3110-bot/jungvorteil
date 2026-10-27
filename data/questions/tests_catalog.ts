import { TestMetadata } from "./types";
export type { TestMetadata };

export const NUMBERED_TESTS: TestMetadata[] = [
  {
    id: 1,
    title: "Test 1: Grundregeln & Rechtsvortritt",
    description: "Rechtsvortritt, kein Vortritt, Tempolimits innerorts und ausserorts (SVG Art. 36).",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "EASY",
    tags: ["Vortritt", "Rechtsvortritt", "Tempolimits"]
  },
  {
    id: 2,
    title: "Test 2: Kreisverkehr & Blinkregeln (Art. 41b VRV)",
    description: "Vortritt im Kreisel, Blinkpflicht vor und beim Verlassen, zweispurige Kreisel.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["Kreisel", "Blinken", "Zweispurig"]
  },
  {
    id: 3,
    title: "Test 3: Trams, Velos & Gegenverkehr",
    description: "Schienenfahrzeuge an Kreuzungen, toter Winkel, Velostreifen und Linksabbiegen.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "HARD",
    tags: ["Tram", "Velo", "Toter Winkel", "Abbiegen"]
  },
  {
    id: 4,
    title: "Test 4: Schweizer Signale & Markierungen (SSV)",
    description: "Gefahrensignale, Vorschriftssignale, Sicherheitslinie und Haifischzähne.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["Signale", "Markierungen", "Sicherheitslinie"]
  },
  {
    id: 5,
    title: "Test 5: Reissverschlussprinzip & Spurreduktion",
    description: "Obligatorisches Reissverschlussverfahren bei Spurabbau und Baustellen.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "EASY",
    tags: ["Reissverschluss", "Spurabbau", "Autobahn"]
  },
  {
    id: 6,
    title: "Test 6: Notfälle, Pannendreieck & Rettungsgasse",
    description: "Aufstellen des Pannendreiecks, Rettungsgasse bei Kolonnenverkehr, Nothilfe.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["Pannendreieck", "Rettungsgasse", "Notfall", "Unfall"]
  },
  {
    id: 7,
    title: "Test 7: Bergstrassen, Postautos & Winterbetrieb",
    description: "Bergpoststrassen, Vorrang gelber Postautos, Schneeketten und Kreuzen an Steigungen.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "HARD",
    tags: ["Bergpoststrasse", "Postauto", "Schnee", "Steigung"]
  },
  {
    id: 8,
    title: "Test 8: Promille (0.1‰) & Führerausweis auf Probe",
    description: "Nulltoleranz für Lernende, Neulenker, 3 Jahre Probezeit und Sanktionen.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["0.1 Promille", "Neulenker", "Probezeit", "Bussen"]
  },
  {
    id: 9,
    title: "Test 9: Tunnel-Sicherheit & Beleuchtung",
    description: "Lichtpflicht am Tag, Verhalten bei Pannen im Tunnel, Abblendlicht vs. Tagfahrlicht.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "EASY",
    tags: ["Tunnel", "Tagfahrlicht", "Abblendlicht", "Sicherheit"]
  },
  {
    id: 10,
    title: "Test 10: Tempo-30-Zonen & Begegnungszonen",
    description: "Unterschiede zwischen 20 km/h Begegnungszone, 30-Zone und Fussgängervortritt.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["Tempo 30", "Begegnungszone", "Fussgänger", "Schulweg"]
  },
  {
    id: 11,
    title: "Test 11: Autobahn, Rechtsvorbeifahren & Rastplätze",
    description: "120 km/h Limit, Rechtsvorbeifahren bei Kolonnen vs. verbotenes Rechtsüberholen.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "HARD",
    tags: ["Autobahn", "Rechtsvorbeifahren", "Pannenstreifen"]
  },
  {
    id: 12,
    title: "Test 12: ASA-Fangfragen: Die tückischsten Fallen",
    description: "Die 15 ASA-Prüfungsfragen mit der höchsten Durchfallquote für Kategorie B.",
    category: "B",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "HARD",
    tags: ["Fangfragen", "ASA Spezial", "Prüfungsfalle"]
  },
  {
    id: 13,
    title: "Test 13: Motorrad Spezial Kat. A (Fahrphysik & Schutzkleidung)",
    description: "Besondere Fahrphysik, Schräglage, Schutzkleidung, Sozius und Linienwahl.",
    category: "A",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "MEDIUM",
    tags: ["Töff", "Kat. A", "Schräglage", "Schutzkleidung"]
  },
  {
    id: 14,
    title: "Test 14: Mofa & E-Bike Spezial Kat. M/G",
    description: "Vorschriften für Motorfahrräder, schnelle E-Bikes bis 45 km/h und Helmpflicht.",
    category: "M",
    questionCount: 15,
    timeMinutes: 15,
    maxErrorPoints: 5,
    difficulty: "EASY",
    tags: ["Mofa", "E-Bike", "Kat. M", "Helmpflicht"]
  }
];
