export type QuestionCategory =
  | "vortritt"
  | "signale"
  | "geschwindigkeit"
  | "autobahn"
  | "sicherheit"
  | "umwelt";

export interface QuestionOption {
  id: "a" | "b" | "c";
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  category: QuestionCategory;
  categoryName: string;
  question: string;
  image?: string; // Optional SVG or placeholder image type
  svgType?: "crossroad_right_priority" | "roundabout" | "tram_priority" | "stop_sign" | "highway_entry" | "speed_zone_30" | "pedestrian_crossing" | "emergency_lane";
  options: QuestionOption[];
  points: number; // Error points if answered incorrectly (usually 1 to 2)
  explanation: string;
  ruleReference?: string;
}

export const CATEGORIES: { id: QuestionCategory; name: string; icon: string; count: number }[] = [
  { id: "vortritt", name: "Vortritt & Kreuzungen", icon: "Car", count: 12 },
  { id: "signale", name: "Verkehrssignale (SSV)", icon: "AlertTriangle", count: 12 },
  { id: "geschwindigkeit", name: "Geschwindigkeit & Abstand", icon: "Gauge", count: 8 },
  { id: "autobahn", name: "Autobahn & Autostrasse", icon: "Milestone", count: 8 },
  { id: "sicherheit", name: "Sicherheit & Promille", icon: "ShieldCheck", count: 10 },
  { id: "umwelt", name: "Fahrzeugtechnik & Umwelt", icon: "Leaf", count: 6 },
];

export const QUESTIONS_DATABASE: Question[] = [
  // --- VORTRITT & KREUZUNGEN ---
  {
    id: 1,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Sie nähern sich einer Kreuzung ohne Verkehrsschilder oder Markierungen. Wer hat Vortritt?",
    svgType: "crossroad_right_priority",
    options: [
      { id: "a", text: "Das Fahrzeug, das von rechts kommt (Rechtsvortritt).", isCorrect: true },
      { id: "b", text: "Das schnellere Fahrzeug.", isCorrect: false },
      { id: "c", text: "Das Fahrzeug, das geradeaus fährt, immer vor Abbiegern.", isCorrect: false },
    ],
    points: 2,
    explanation: "In der Schweiz gilt an Kreuzungen ohne Signale oder Vortrittsmarkierungen immer der gesetzliche Rechtsvortritt (Art. 36 SVG). Sie müssen allen Fahrzeugen, die von rechts kommen, den Vortritt lassen.",
    ruleReference: "Art. 36 Abs. 2 SVG",
  },
  {
    id: 2,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Wie ist der Vortritt in einem Kreisverkehr (Kreisel) geregelt, wenn keine Polizisten den Verkehr regeln?",
    svgType: "roundabout",
    options: [
      { id: "a", text: "Fahrzeuge, die von rechts in den Kreisel einfahren, haben Vortritt.", isCorrect: false },
      { id: "b", text: "Fahrzeuge im Kreisverkehr haben Vortritt vor den Einfahrenden.", isCorrect: true },
      { id: "c", text: "Es gilt das Reissverschlussprinzip abwechselnd.", isCorrect: false },
    ],
    points: 2,
    explanation: "Vor der Einfahrt in einen Kreisel steht immer das Signal 'Kein Vortritt' kombiniert mit 'Kreisverkehr'. Fahrzeuge im Kreisel haben stets Vortritt gegenüber den Einfahrenden (Art. 41b VRV).",
    ruleReference: "Art. 41b VRV",
  },
  {
    id: 3,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Ein Tram nähert sich einer gleichrangigen Kreuzung von links. Wer hat Vortritt?",
    svgType: "tram_priority",
    options: [
      { id: "a", text: "Ich habe Vortritt, weil das Tram von links kommt.", isCorrect: false },
      { id: "b", text: "Das Tram hat Vortritt, auch wenn es von links kommt.", isCorrect: true },
      { id: "c", text: "Wer zuerst hupt oder die Lichthupe betätigt.", isCorrect: false },
    ],
    points: 2,
    explanation: "Schienenfahrzeuge (Trams) haben auf gleichrangigen Strassen stets den Vortritt gegenüber anderen Strassenbenützern, auch wenn sie von links kommen (Art. 38 SVG). Ausnahme: Wenn das Tram aus einer Nebenstrasse mit 'Kein Vortritt' oder 'Stop' kommt.",
    ruleReference: "Art. 38 Abs. 1 SVG",
  },
  {
    id: 4,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Sie möchten nach links abbiegen. Ein entgegenkommendes Fahrzeug fährt geradeaus. Wer fährt zuerst?",
    options: [
      { id: "a", text: "Ich fahre zuerst, weil ich die Kurve schon angekündigt habe.", isCorrect: false },
      { id: "b", text: "Der Gegenverkehr, der geradeaus fährt, hat Vortritt.", isCorrect: true },
      { id: "c", text: "Es gilt immer Rechtsvortritt.", isCorrect: false },
    ],
    points: 2,
    explanation: "Wer nach links abbiegt, muss den entgegenkommenden Fahrzeugen, die geradeaus fahren oder nach rechts abbiegen, den Vortritt lassen (Art. 36 Abs. 3 SVG).",
    ruleReference: "Art. 36 Abs. 3 SVG",
  },
  {
    id: 5,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Ein Einsatzfahrzeug (Polizei, Sanität, Feuerwehr) nähert sich mit Blaulicht und Wechselklanghorn. Was müssen Sie tun?",
    options: [
      { id: "a", text: "Sofort beschleunigen, um vor dem Fahrzeug zu bleiben.", isCorrect: false },
      { id: "b", text: "Unverzüglich die Strasse freigeben, anhalten oder rechts heranfahren.", isCorrect: true },
      { id: "c", text: "Einfach mit normalem Tempo weiterfahren.", isCorrect: false },
    ],
    points: 2,
    explanation: "Einsatzfahrzeugen mit eingeschaltetem Blaulicht und Wechselklanghorn ist sofort die freie Bahn zu schaffen (Art. 27 Abs. 2 SVG). Notfalls müssen Sie anhalten.",
    ruleReference: "Art. 27 Abs. 2 SVG",
  },
  {
    id: 6,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Was bedeutet das Signal 'Stop' (Signal 2.01)?",
    svgType: "stop_sign",
    options: [
      { id: "a", text: "Verlangsamen und nur anhalten, wenn Querverkehr sichtbar ist.", isCorrect: false },
      { id: "b", text: "Das Fahrzeug muss vor der Haltelinie vollständig zum Stillstand gebracht werden.", isCorrect: true },
      { id: "c", text: "Anhalten ist nur während der Hauptverkehrszeiten obligatorisch.", isCorrect: false },
    ],
    points: 2,
    explanation: "Beim Signal 'Stop' muss das Fahrzeug immer vollständig stillstehen (die Räder müssen stoppen), selbst wenn weit und breit kein anderes Fahrzeug zu sehen ist.",
    ruleReference: "Art. 36 SSV",
  },
  {
    id: 7,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Ein Fussgänger befindet sich auf dem Fussgängerstreifen oder wartet ersichtlich am Strassenrand, um ihn zu betreten. Wie verhalten Sie sich?",
    svgType: "pedestrian_crossing",
    options: [
      { id: "a", text: "Sie müssen dem Fussgänger den Vortritt gewähren und vor dem Streifen anhalten.", isCorrect: true },
      { id: "b", text: "Hupen und zügig weiterfahren.", isCorrect: false },
      { id: "c", text: "Nur anhalten, wenn der Fussgänger bereits die Mitte der Strasse erreicht hat.", isCorrect: false },
    ],
    points: 2,
    explanation: "Fahrzeuglenker müssen Fussgängern auf dem Fussgängerstreifen oder solchen, die sich erkennbar anschicken, ihn zu überqueren, stets den Vortritt gewähren (Art. 33 Abs. 2 SVG).",
    ruleReference: "Art. 33 SVG",
  },
  {
    id: 8,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Wer hat Vortritt auf steilen Bergstrassen, wenn zwei gleichartige Fahrzeuge nicht kreuzen können?",
    options: [
      { id: "a", text: "Das talwärts fahrende Fahrzeug (bergab).", isCorrect: false },
      { id: "b", text: "Das bergwärts fahrende Fahrzeug (bergauf) hat den Vortritt.", isCorrect: true },
      { id: "c", text: "Das schwerere Fahrzeug muss immer zurücksetzen.", isCorrect: false },
    ],
    points: 1,
    explanation: "Auf schmalen Bergstrassen muss bei gleichartigen Fahrzeugen das abwärts fahrende Fahrzeug anhalten und nötigenfalls zurücksetzen, um dem aufwärts fahrenden Fahrzeug den Vortritt zu lassen.",
    ruleReference: "Art. 9 Abs. 2 VRV",
  },

  // --- VERKEHRSSIGNALE ---
  {
    id: 9,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was gilt in einer 'Begegnungszone' (Signal 2.59.5, Tempo 20)?",
    options: [
      { id: "a", text: "Höchstgeschwindigkeit 20 km/h, Fussgänger haben Vortritt auf der ganzen Strasse.", isCorrect: true },
      { id: "b", text: "Höchstgeschwindigkeit 30 km/h, Autos haben Vortritt.", isCorrect: false },
      { id: "c", text: "Fahrräder sind verboten.", isCorrect: false },
    ],
    points: 1,
    explanation: "In Begegnungszonen gilt Tempo 20 km/h. Fussgänger dürfen die gesamte Verkehrsfläche benützen und haben Vortritt gegenüber Fahrzeugen, dürfen diese jedoch nicht unnötig behindern.",
    ruleReference: "Art. 22b SSV",
  },
  {
    id: 10,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was bedeutet das rechteckige blaue Signal mit weissem Pfeil auf blauem Grund (Signal 4.08 'Einbahnstrasse')?",
    options: [
      { id: "a", text: "Man darf nur geradeaus fahren, Wenden ist verboten.", isCorrect: true },
      { id: "b", text: "Gegenverkehr ist jederzeit zu erwarten.", isCorrect: false },
      { id: "c", text: "Rückwärtsfahren zum Parkieren ist streng verboten.", isCorrect: false },
    ],
    points: 1,
    explanation: "Auf Einbahnstrassen darf der Verkehr nur in Richtung des Pfeils fliessen. Wenden ist verboten; Rückwärtsfahren ist nur zum Einparken oder bei Notwendigkeit gestattet.",
    ruleReference: "Art. 46 SSV",
  },
  {
    id: 11,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was bedeutet ein rundes blaues Schild mit weissem Pfeil (Vorschriftssignal)?",
    options: [
      { id: "a", text: "Es ist eine Empfehlung.", isCorrect: false },
      { id: "b", text: "Es ist ein Gebot: Sie MÜSSEN in die Pfeilrichtung fahren.", isCorrect: true },
      { id: "c", text: "Eine Sackgasse in dieser Richtung.", isCorrect: false },
    ],
    points: 1,
    explanation: "Runde blaue Schilder sind Gebotssignale (Vorgeschriebene Fahrtrichtung). Sie verpflichten den Fahrer, genau dieser Fahrtrichtung zu folgen.",
    ruleReference: "Art. 24 SSV",
  },
  {
    id: 12,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was bedeutet das Signal 'Hauptstrasse' (weiss-gelbe Raute)?",
    options: [
      { id: "a", text: "Auf dieser Strasse gilt an Kreuzungen Vortritt gegenüber einmündenden Nebenstrassen.", isCorrect: true },
      { id: "b", text: "Hier darf man unbegrenzt schnell fahren.", isCorrect: false },
      { id: "c", text: "Es gilt automatischer Rechtsvortritt.", isCorrect: false },
    ],
    points: 1,
    explanation: "Fahrzeuge auf der Hauptstrasse haben den Vortritt gegenüber Fahrzeugen auf einmündenden Nebenstrassen, solange das Signal nicht durch 'Ende der Hauptstrasse' aufgehoben wird.",
    ruleReference: "Art. 37 SSV",
  },
  {
    id: 13,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was bedeutet ein dreieckiges Signal mit der Spitze nach oben und rotem Rand?",
    options: [
      { id: "a", text: "Gefahrensignal: Es kündigt eine Gefahr auf der Fahrbahn an.", isCorrect: true },
      { id: "b", text: "Vortrittssignal.", isCorrect: false },
      { id: "c", text: "Hinweis auf eine Touristenattraktion.", isCorrect: false },
    ],
    points: 1,
    explanation: "Dreieckige Schilder mit der Spitze nach oben sind Gefahrensignale (z.B. Schleudergefahr, Baustelle, Fussgänger). Sie warnen vor kommenden Gefahrenstellen.",
    ruleReference: "Art. 3 SSV",
  },

  // --- GESCHWINDIGKEIT & ABSTAND ---
  {
    id: 14,
    category: "geschwindigkeit",
    categoryName: "Geschwindigkeit & Abstand",
    question: "Welche allgemeine Höchstgeschwindigkeit gilt in der Schweiz innerorts für Personenwagen, wenn nicht anders signalisiert?",
    options: [
      { id: "a", text: "50 km/h", isCorrect: true },
      { id: "b", text: "60 km/h", isCorrect: false },
      { id: "c", text: "40 km/h", isCorrect: false },
    ],
    points: 2,
    explanation: "In der Schweiz beträgt die allgemeine Höchstgeschwindigkeit innerorts (ab dem Signal 'Ortsbeginn' bzw. weisser Ortstafel) 50 km/h (Art. 4a VRV).",
    ruleReference: "Art. 4a Abs. 1 Bst. a VRV",
  },
  {
    id: 15,
    category: "geschwindigkeit",
    categoryName: "Geschwindigkeit & Abstand",
    question: "Welche allgemeine Höchstgeschwindigkeit gilt ausserorts (auf Neben- und Hauptstrassen)?",
    options: [
      { id: "a", text: "80 km/h", isCorrect: true },
      { id: "b", text: "90 km/h", isCorrect: false },
      { id: "c", text: "100 km/h", isCorrect: false },
    ],
    points: 2,
    explanation: "Auf Strassen ausserhalb von Ortschaften gilt eine allgemeine Höchstgeschwindigkeit von 80 km/h, sofern keine andere Begrenzung signalisiert ist.",
    ruleReference: "Art. 4a Abs. 1 Bst. b VRV",
  },
  {
    id: 16,
    category: "geschwindigkeit",
    categoryName: "Geschwindigkeit & Abstand",
    question: "Wie lautet die Faustregel für den Mindestabstand bei trockener Strasse auf Schweizer Strassen?",
    options: [
      { id: "a", text: "Die Zwei-Sekunden-Regel (mindestens 2 Sekunden Abstand zum Vorherfahrenden).", isCorrect: true },
      { id: "b", text: "Immer genau 5 Meter.", isCorrect: false },
      { id: "c", text: "Halbe Tachoanzeige dividiert durch vier.", isCorrect: false },
    ],
    points: 1,
    explanation: "Als Sicherheitsabstand hinter einem vorausfahrenden Fahrzeug gilt bei normalen Strassen- und Sichtverhältnissen die 'Zwei-Sekunden-Regel' (Art. 12 Abs. 1 VRV). Bei Nässe oder Schnee muss der Abstand deutlich vergrössert werden.",
    ruleReference: "Art. 12 VRV",
  },
  {
    id: 17,
    category: "geschwindigkeit",
    categoryName: "Geschwindigkeit & Abstand",
    question: "In einer 'Tempo-30-Zone' gilt grundsätzlich:",
    svgType: "speed_zone_30",
    options: [
      { id: "a", text: "Rechtsvortritt an allen Kreuzungen, sofern nicht anders signalisiert.", isCorrect: true },
      { id: "b", text: "Fussgängerstreifen sind an jeder Kreuzung obligatorisch.", isCorrect: false },
      { id: "c", text: "Höchstgeschwindigkeit 30 km/h nur von 08:00 bis 18:00 Uhr.", isCorrect: false },
    ],
    points: 2,
    explanation: "In Tempo-30-Zonen gilt an allen Kreuzungen der Rechtsvortritt (ausser es ist ausdrücklich anders signalisiert). Fussgängerstreifen gibt es in der Regel nur bei Schulen oder Heimen.",
    ruleReference: "Art. 22a SSV",
  },

  // --- AUTOBAHN & AUTOSTRASSE ---
  {
    id: 18,
    category: "autobahn",
    categoryName: "Autobahn & Autostrasse",
    question: "Welche Höchstgeschwindigkeit gilt auf Schweizer Autobahnen für Personenwagen?",
    options: [
      { id: "a", text: "120 km/h", isCorrect: true },
      { id: "b", text: "130 km/h", isCorrect: false },
      { id: "c", text: "Richtgeschwindigkeit 130 km/h ohne Limit.", isCorrect: false },
    ],
    points: 2,
    explanation: "Auf Schweizer Autobahnen gilt generell eine Höchstgeschwindigkeit von 120 km/h (auf Autostrassen 100 km/h), sofern keine Schilder tiefere Tempi vorgeben.",
    ruleReference: "Art. 4a Abs. 1 Bst. d VRV",
  },
  {
    id: 19,
    category: "autobahn",
    categoryName: "Autobahn & Autostrasse",
    question: "Darf man auf Schweizer Autobahnen rechts überholen?",
    options: [
      { id: "a", text: "Grundsätzlich nein, Rechtsüberholen ist verboten. Rechts Vorbeifahren bei Kolonnenverkehr ist jedoch gestattet.", isCorrect: true },
      { id: "b", text: "Ja, wenn der Linksfahrende zu langsam ist.", isCorrect: false },
      { id: "c", text: "Ja, jederzeit bis zu 120 km/h.", isCorrect: false },
    ],
    points: 2,
    explanation: "Rechtsüberholen (Ausscheren nach rechts, Überholen und Wiedereinscheren) ist streng verboten und gilt als schwere Verkehrsregelverletzung. Erlaubt ist seit 2021 lediglich das passive 'Rechtsvorbeifahren', wenn sich auf der linken Spur eine Kolonne gebildet hat.",
    ruleReference: "Art. 36 Abs. 5 VRV",
  },
  {
    id: 20,
    category: "autobahn",
    categoryName: "Autobahn & Autostrasse",
    question: "Was ist bei stockendem Verkehr oder Stau auf der Autobahn zwingend zu bilden?",
    svgType: "emergency_lane",
    options: [
      { id: "a", text: "Eine Rettungsgasse zwischen der linken und der danebenliegenden Spur.", isCorrect: true },
      { id: "b", text: "Sofort auf den Pannenstreifen ausweichen.", isCorrect: false },
      { id: "c", text: "Warnblinker einschalten und rückwärts zur nächsten Ausfahrt fahren.", isCorrect: false },
    ],
    points: 2,
    explanation: "Seit dem 1. Januar 2021 ist die Bildung einer Rettungsgasse auf Schweizer Autobahnen gesetzlich obligatorisch, sobald der Verkehr stockt. Der Pannenstreifen darf dafür nicht befahren werden.",
    ruleReference: "Art. 36 Abs. 7 VRV",
  },
  {
    id: 21,
    category: "autobahn",
    categoryName: "Autobahn & Autostrasse",
    question: "Wie verhalten Sie sich beim Einfahren auf die Autobahn auf dem Beschleunigungsstreifen?",
    svgType: "highway_entry",
    options: [
      { id: "a", text: "Sie beschleunigen zügig und fädeln sich mit passender Geschwindigkeit in eine Lücke ein.", isCorrect: true },
      { id: "b", text: "Sofort am Beginn des Streifens anhalten und warten.", isCorrect: false },
      { id: "c", text: "Sie haben immer absoluten Vortritt vor den Fahrzeugen auf der Autobahn.", isCorrect: false },
    ],
    points: 2,
    explanation: "Auf dem Beschleunigungsstreifen passen Sie Ihre Geschwindigkeit an den fliessenden Verkehr an und fädeln sich ein. Die Fahrzeuge auf der Autobahn haben Vortritt, sollten aber das Einfädeln nach Möglichkeit erleichtern.",
    ruleReference: "Art. 36 VRV",
  },

  // --- SICHERHEIT & PROMILLE ---
  {
    id: 22,
    category: "sicherheit",
    categoryName: "Sicherheit & Promille",
    question: "Welcher Blutalkoholgrenzwert gilt in der Schweiz für Fahrschüler und Inhaber des Führerausweises auf Probe (Neulenker)?",
    options: [
      { id: "a", text: "0.10 Promille (faktisch Nulltoleranz).", isCorrect: true },
      { id: "b", text: "0.50 Promille wie für alle anderen Fahrer.", isCorrect: false },
      { id: "c", text: "0.80 Promille.", isCorrect: false },
    ],
    points: 2,
    explanation: "Für Neulenker in der dreijährigen Probezeit sowie für Fahrschüler und Begleitpersonen gilt in der Schweiz ein striktes Alkoholverbot (Grenzwert 0.10 ‰ wegen natürlichem Gärungsalkohol).",
    ruleReference: "Art. 2a Abs. 1 VRV",
  },
  {
    id: 23,
    category: "sicherheit",
    categoryName: "Sicherheit & Promille",
    question: "Gilt in der Schweiz eine Pflicht, am Tag mit Licht zu fahren?",
    options: [
      { id: "a", text: "Ja, alle Motorfahrzeuge müssen auch tagsüber mit Tagfahrlicht oder Abblendlicht fahren.", isCorrect: true },
      { id: "b", text: "Nein, nur bei Regen oder Tunneln.", isCorrect: false },
      { id: "c", text: "Nur in den Wintermonaten von November bis März.", isCorrect: false },
    ],
    points: 1,
    explanation: "In der Schweiz gilt seit 2014 die generelle 'Licht am Tag'-Pflicht (Art. 30 VRV). Wer tagsüber ohne Licht fährt, riskiert eine Ordnungsbusse.",
    ruleReference: "Art. 30 VRV",
  },
  {
    id: 24,
    category: "sicherheit",
    categoryName: "Sicherheit & Promille",
    question: "Welche gesetzliche Mindestprofiltiefe müssen Autoreifen in der Schweiz aufweisen?",
    options: [
      { id: "a", text: "1.6 mm über die gesamte Lauffläche.", isCorrect: true },
      { id: "b", text: "3.0 mm.", isCorrect: false },
      { id: "c", text: "0.8 mm.", isCorrect: false },
    ],
    points: 1,
    explanation: "Gesetzlich vorgeschrieben ist eine Mindestprofiltiefe von 1.6 mm (Art. 58 VTS). Für Winterreifen empfiehlt der TCS aus Sicherheitsgründen jedoch mindestens 4 mm.",
    ruleReference: "Art. 58 VTS",
  },
  {
    id: 25,
    category: "sicherheit",
    categoryName: "Sicherheit & Promille",
    question: "Darf der Fahrer während der Fahrt ohne Freisprechanlage mit dem Smartphone telefonieren oder Nachrichten schreiben?",
    options: [
      { id: "a", text: "Nein, jegliche Bedienung des Telefons von Hand während der Fahrt ist untersagt.", isCorrect: true },
      { id: "b", text: "Ja, aber nur an roten Ampeln.", isCorrect: false },
      { id: "c", text: "Kurze SMS sind erlaubt, wenn man nicht schneller als 50 km/h fährt.", isCorrect: false },
    ],
    points: 2,
    explanation: "Das Halten und Bedienen von Mobiltelefonen ohne Freisprechanlage während der Fahrt beeinträchtigt die Aufmerksamkeit und ist streng verboten (Art. 3 Abs. 1 VRV).",
    ruleReference: "Art. 3 Abs. 1 VRV",
  },

  // --- FAHRZEUGTECHNIK & UMWELT ---
  {
    id: 26,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Was versteht man unter der Fahrweise 'Eco-Drive'?",
    options: [
      { id: "a", text: "Frühes Hochschalten bei ca. 2000 U/min, vorausschauendes Fahren und Rollenlassen mit Schubabschaltung.", isCorrect: true },
      { id: "b", text: "Immer im Leerlauf bergab fahren.", isCorrect: false },
      { id: "c", text: "Möglichst spät in den höheren Gang schalten.", isCorrect: false },
    ],
    points: 1,
    explanation: "Eco-Drive spart bis zu 15% Treibstoff: zügig beschleunigen, früh hochschalten, im höchstmöglichen Gang gleiten und vorausschauend die Motorbremse nützen.",
    ruleReference: "Eco-Drive Suisse",
  },
  {
    id: 27,
    category: "umwelt",
    categoryName: "Fahrzeugtechnik & Umwelt",
    question: "Wann müssen Sie den Motor bei stehendem Fahrzeug ausschalten?",
    options: [
      { id: "a", text: "Vor geschlossenen Bahnschranken und bei längeren Wartezeiten im Stau.", isCorrect: true },
      { id: "b", text: "An jedem Fussgängerstreifen.", isCorrect: false },
      { id: "c", text: "Nur wenn das Benzin fast leer ist.", isCorrect: false },
    ],
    points: 1,
    explanation: "Unnötiges Laufenlassen des Motors im Stillstand (z.B. vor Bahnschranken, Baustellenampeln oder beim Warten auf Personen) ist verboten und strafbar (Art. 33 VTS).",
    ruleReference: "Art. 33 VTS",
  },
  {
    id: 28,
    category: "vortritt",
    categoryName: "Vortritt & Kreuzungen",
    question: "Sie fahren auf einer Strasse und ein Linienbus blinkt links, um aus einer markierten Haltestelle innerorts anzufahren. Was gilt?",
    options: [
      { id: "a", text: "Sie müssen dem Bus das Abfahren von der Haltestelle ermöglichen, notfalls durch Anhalten.", isCorrect: true },
      { id: "b", text: "Sie haben stets Vortritt und dürfen den Bus zügig überholen.", isCorrect: false },
      { id: "c", text: "Der Bus darf nur nachts vorrangig abfahren.", isCorrect: false },
    ],
    points: 2,
    explanation: "Innerorts müssen Fahrzeuglenker Bussen des öffentlichen Linienverkehrs das Anfahren von gekennzeichneten Haltestellen ermöglichen, sobald der Bus den Blinker setzt (Art. 15 Abs. 4 VRV).",
    ruleReference: "Art. 15 Abs. 4 VRV",
  },
  {
    id: 29,
    category: "signale",
    categoryName: "Verkehrssignale (SSV)",
    question: "Was bedeutet das Signal 'Allgemeines Fahrverbot in beiden Richtungen' (weisser Kreis mit rotem Rand)?",
    options: [
      { id: "a", text: "Verbot für alle Motorfahrzeuge und Fahrräder in beiden Richtungen.", isCorrect: true },
      { id: "b", text: "Nur für LKWs verboten.", isCorrect: false },
      { id: "c", text: "Nur Einfahrt von dieser Seite verboten (Einbahn).", isCorrect: false },
    ],
    points: 2,
    explanation: "Das Signal 2.01 (roter Kreis auf weissem Grund) verbietet den Verkehr für alle Fahrzeuge in beiden Richtungen. Für Einbahnstrassen gibt es das Signal 'Einfahrt verboten' (roter Kreis mit weissem Querbalken).",
    ruleReference: "Art. 18 SSV",
  },
  {
    id: 30,
    category: "sicherheit",
    categoryName: "Sicherheit & Promille",
    question: "Was müssen Sie bei einem Unfall mit Verletzten auf der Autobahn als ERSTES tun?",
    options: [
      { id: "a", text: "Unfallstelle sichern (Pannendreieck aufstellen, Warnblinker an) und die Rettungskräfte (144 / 117) alarmieren.", isCorrect: true },
      { id: "b", text: "Fotos für die Versicherung machen.", isCorrect: false },
      { id: "c", text: "Sofort weiterfahren, um keinen Stau zu verursachen.", isCorrect: false },
    ],
    points: 2,
    explanation: "Die Kette lautet immer: 1. Schauen (Überblick verschaffen) -> 2. Denken (Gefahr erkennen) -> 3. Handeln (Absichern, Nothilfe leisten, Alarmieren 144/117). Eigensicherung geht stets vor.",
    ruleReference: "Art. 51 SVG",
  },
];
