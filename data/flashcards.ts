// data/flashcards.ts
// Tarjetas de memorización rápida para el examen teórico suizo (Modo Memorizar)

export interface Flashcard {
  id: number;
  category: string;
  front: string;
  back: string;
  rule: string;
  examTip: string;
}

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 1,
    category: "Geschwindigkeit",
    front: "Welche Höchstgeschwindigkeiten gelten allgemein in der Schweiz?",
    back: "• Innerorts: 50 km/h\n• Ausserorts: 80 km/h\n• Autostrasse: 100 km/h\n• Autobahn: 120 km/h\n• Begegnungszone: 20 km/h",
    rule: "Art. 4a VRV",
    examTip: "In Tempo-30-Zonen gilt grundsätzlich Rechtsvortritt!",
  },
  {
    id: 2,
    category: "Promillegrenzen",
    front: "Welche Promillegrenzen gelten für normale Fahrer vs. Neulenker?",
    back: "• Normale Fahrer: 0.50 ‰ (ab 0.80 ‰ schwere Widerhandlung)\n• Neulenker (3 Jahre Probezeit), Fahrschüler & Begleiter: 0.10 ‰ (faktisch Nulltoleranz)",
    rule: "Art. 2a VRV & Art. 55 SVG",
    examTip: "Novel = 0.1 ‰. Wird im Examen fast immer gefragt!",
  },
  {
    id: 3,
    category: "Vortritt & Tram",
    front: "Wann hat das Tram (Schienenfahrzeug) KEINEN Vortritt?",
    back: "Das Tram hat auf gleichrangigen Strassen immer Vortritt (auch von links).\nAusnahme: Wenn das Tram aus einer Nebenstrasse mit 'Kein Vortritt' oder 'Stop' einbiegt oder vor einer roten Ampel steht.",
    rule: "Art. 38 SVG",
    examTip: "Kommt das Tram von links an einer normalen Kreuzung: TRAM FÄHRT ZUERST!",
  },
  {
    id: 4,
    category: "Kreisverkehr (Kreisel)",
    front: "Welche Regeln gelten bei der Einfahrt und Ausfahrt im Kreisel?",
    back: "• Einfahrt: Vortritt für Fahrzeuge im Kreisel ('Kein Vortritt'). KEIN Blinker beim Einfahren!\n• Ausfahrt: Rechts blinken vor der gewünschten Ausfahrt. Auf Velos achten!",
    rule: "Art. 41b VRV",
    examTip: "Falle: Wer beim Einfahren in den Kreisel blinkt, macht einen Fehler!",
  },
  {
    id: 5,
    category: "Sicherheitsabstand",
    front: "Wie lautet die Faustregel für den Sicherheitsabstand?",
    back: "• Zwei-Sekunden-Regel: Bei normalen Bedingungen mindestens 2 Sekunden Abstand zum Vordermann.\n• Faustregel halber Tacho in Metern auf Autobahnen.",
    rule: "Art. 12 Abs. 1 VRV",
    examTip: "Bei Nässe, Schnee oder Nebel muss der Abstand verdoppelt werden.",
  },
  {
    id: 6,
    category: "Autobahn & Rettungsgasse",
    front: "Wie wird die Rettungsgasse auf der Autobahn gebildet?",
    back: "Zwischen der ganz linken Spur und der unmittelbar danebenliegenden Spur. Der Pannenstreifen darf dafür NICHT befahren werden.",
    rule: "Art. 36 Abs. 7 VRV",
    examTip: "Seit 2021 obligatorisch, sobald der Verkehr stockt (nicht erst bei Stillstand).",
  },
  {
    id: 7,
    category: "Berechnung Anhalteweg",
    front: "Wie berechnet sich der gesamte Anhalteweg?",
    back: "Anhalteweg = Reaktionsweg + Bremsweg\n• Reaktionszeit ca. 1 Sekunde.\n• Bei doppelter Geschwindigkeit vervierfacht sich der Bremsweg!",
    rule: "Physikalische Grundlagen VRV",
    examTip: "Geschwindigkeit x 2 = Bremsweg x 4!",
  },
  {
    id: 8,
    category: "Licht & Reifen",
    front: "Welche Mindestprofiltiefe und Lichtpflicht gelten in der Schweiz?",
    back: "• Mindestprofiltiefe Reifen: 1.6 mm gesetzlich (4 mm empfohlen im Winter).\n• Licht: Obligatorisches Tagfahrlicht für alle Motorfahrzeuge seit 2014.",
    rule: "Art. 30 VRV / Art. 58 VTS",
    examTip: "Wer tagsüber ohne Licht fährt, bezahlt eine Ordnungsbusse von CHF 40.-.",
  },
];
