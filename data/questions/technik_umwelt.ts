import { Question } from "./types";

export const TECHNIK_UMWELT_QUESTIONS: Question[] = [
  {
    id: 39,
    testId: 1,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Welche gesetzliche Mindestprofiltiefe müssen Autoreifen in der Schweiz aufweisen?",
    options: [
      { id: "a", text: "1.6 mm über die gesamte Lauffläche.", isCorrect: true },
      { id: "b", text: "3.0 mm.", isCorrect: false },
      { id: "c", text: "0.8 mm.", isCorrect: false },
    ],
    points: 1,
    explanation: "Gesetzlich vorgeschrieben ist eine Mindestprofiltiefe von 1.6 mm (Art. 58 VTS). Für Winterreifen empfiehlt der TCS aus Sicherheitsgründen mind. 4 mm.",
    ruleReference: "Art. 58 VTS",
  },
  {
    id: 40,
    testId: 2,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Was versteht man unter der Schweizer Fahrweise 'Eco-Drive'?",
    options: [
      { id: "a", text: "Frühes Hochschalten bei ca. 2000 U/min, vorausschauendes Fahren und Nutzung der Schubabschaltung.", isCorrect: true },
      { id: "b", text: "Immer im Leerlauf bergab rollen.", isCorrect: false },
      { id: "c", text: "Erst bei 4000 U/min schalten.", isCorrect: false },
    ],
    points: 1,
    explanation: "Eco-Drive spart bis zu 15% Treibstoff: zügig beschleunigen, früh hochschalten und die Motorbremse vorausschauend nützen.",
    ruleReference: "Eco-Drive Suisse",
  },
  {
    id: 41,
    testId: 3,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Wann muss der Motor bei stehendem Fahrzeug ausgeschaltet werden?",
    options: [
      { id: "a", text: "Vor geschlossenen Bahnschranken und bei längeren Wartezeiten im Stau.", isCorrect: true },
      { id: "b", text: "An jedem Fussgängerstreifen.", isCorrect: false },
      { id: "c", text: "Nur wenn der Tank fast leer ist.", isCorrect: false },
    ],
    points: 1,
    explanation: "Unnötiges Laufenlassen des Motors im Stillstand (z.B. vor Bahnschranken oder beim Warten auf Personen) ist verboten und strafbar.",
    ruleReference: "Art. 33 VTS",
  },
  {
    id: 42,
    testId: 4,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Welche Auswirkung hat ein zu niedriger Reifendruck?",
    options: [
      { id: "a", text: "Erhöhter Treibstoffverbrauch, schlechtere Kurvenstabilität und Gefahr von Reifenplatzern.", isCorrect: true },
      { id: "b", text: "Kürzerer Bremsweg.", isCorrect: false },
      { id: "c", text: "Geringerer Reifenverschleiss.", isCorrect: false },
    ],
    points: 1,
    explanation: "Zu niedriger Druck führt zu starker Erwärmung des Reifens, erhöht den Rollwiderstand und kann bei Autobahnfahrt zum Platzen führen.",
    ruleReference: "Reifentechnik VTS",
  },
];
