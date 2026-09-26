// lib/cityGuides.ts
// Original high-value city guides and local student life advice for Swiss cities

export interface CityGuide {
  title: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  localTips: string[];
}

export const CITY_GUIDES: Record<string, CityGuide> = {
  zuerich: {
    title: "Studentenleben & Rabatte in Zürich (UZH & ETH)",
    intro: "Zürich bietet hervorragende Bildungschancen an UZH, ETH und ZHAW, zählt aber auch zu den teuersten Städten weltweit. Wer vor Ort die richtigen Adressen kennt, spart beim Wohnen, Mensa-Essen und im Ausgang.",
    highlights: [
      { title: "ASVZ Sportnetzwerk", desc: "Mit der UZH/ETH Legi nutzt du alle ASVZ Fitnesszentren (Irchel, Polyterrasse, Fluntern, Hönggerberg) und hunderte Gratis-Kurse." },
      { title: "Günstige Mensen & Züri-Picknick", desc: "Verpflege dich in den ETH Mensen ab CHF 6.90 oder genieße mitgebrachtes Essen im Irchelpark und am Limmatufer." },
      { title: "ZVV ÖV & Nachtnetz", desc: "Kombiniere dein ZVV Abo mit dem SBB GA Night für kostenlose Abendfahrten auf dem gesamten Zürcher Streckennetz." }
    ],
    localTips: [
      "Hole dir die Caritas KulturLegi Kanton Zürich für bis zu 70% Rabatt bei Kultur- und Sportangeboten.",
      "Lade die WOKO & JUWO Apps für günstige WGs ab CHF 500.– pro Monat.",
      "Nutze die Zürcher Kinotage (z.B. Montag bei Blue Cinema & Pathé) für CHF 14.– Tickets."
    ]
  },
  bern: {
    title: "Studentenleben & Rabatte in Bern (UniBE & BFH)",
    intro: "Die Bundesstadt Bern überzeugt mit gemütlichem Flair, der Aare und exzellenten Bildungsinstituten. Mit clevertem Budgeting genießt du das Berner Leben in vollen Zügen.",
    highlights: [
      { title: "UNISPORT Bern", desc: "Das Unisport-Programm der Universität Bern bietet hervorragende Sportangebote und Kurse zu sehr fairen Preisen." },
      { title: "Aareschwimmen & Sommer", desc: "Kostenlos und unbezahlbar: Das Schwimmen in der Aare im Marzili oder Eichholz gehört zum Berner Sommeralltag." },
      { title: "Mensa Grosse Schanze", desc: "Direkt beim Hauptgebäude der UniBE genießt du preiswertes Essen mit Panoramablick auf die Berner Alpen." }
    ],
    localTips: [
      "Reiche den Berner IPV-Antrag für die Krankenkassen-Prämienverbilligung pünktlich über TaxMe ein.",
      "Nutze das Berner Nachtbusnetz mit dem SBB GA Night ab 19:00 Uhr.",
      "Kaufe Gemüse & Produkte am Berner Wochenmarkt kurz vor Marktende für Vergünstigungen."
    ]
  },
  basel: {
    title: "Studentenleben & Rabatte in Basel (UniBasel)",
    intro: "Basel als Kultur- und Life-Science-Hauptstadt der Schweiz bietet Studierenden und Jugendlichen zahlreiche Vorteile an der Grenze zu Deutschland und Frankreich.",
    highlights: [
      { title: "Uni Sport Basel", desc: "Umfangreiches Sportangebot der ältesten Universität der Schweiz in modernen Sporthallen und am Rhein." },
      { title: "Rheinbord & Sommer-Gefühl", desc: "Im Sommer trifft man sich am Rheinbord mit dem Wickelfisch für kostenloses Rheinschwimmen." },
      { title: "Kultur- & Museumsvielfalt", desc: "Basel bietet über 40 Museen – viele davon mit kostenlosem Eintritt für Personen unter 26 Jahren am ersten Sonntag im Monat." }
    ],
    localTips: [
      "Nutze das Dreiländereck für preiswertere Einkäufe mit der grenzüberschreitenden S-Bahn.",
      "Hole dir die Basler Kulturlegi für reduzierte Theater- und Museumstickets.",
      "Nütze Velo-Leihsysteme für bequeme Fahrten zwischen den Campus-Gebäuden."
    ]
  },
  genf: {
    title: "Studentenleben & Rabatte in Genf (UniGE)",
    intro: "Genf ist ein internationaler Hub für Diplomatie, Wissenschaft (CERN) und Finanzen. Auch mit kleinem Budget lässt sich Genf dank studentenfreundlicher Angebote entdecken.",
    highlights: [
      { title: "Uni-Sport Genf", desc: "Zahlreiche Sportkurse rund um den Genfersee und in den Sporthallen der Universität Genf." },
      { title: "Genfersee & Bains des Pâquis", desc: "Der ideale Treffpunkt für erschwingliche Fondue-Abende und Entspannung am See." }
    ],
    localTips: [
      "Nütze die unimaillese Mensen für preiswerte Tagesgerichte.",
      "Profitiere von den TPG Jugendtarifen auf dem Genfer Bus- und Tramnetz."
    ]
  },
  lausanne: {
    title: "Studentenleben & Rabatte in Lausanne (UNIL & EPFL)",
    intro: "Lausanne gilt als Olympiastadt und wichtiges Bildungszentrum mit der UNIL und der Weltklasse-Hochschule EPFL direkt am Genfersee.",
    highlights: [
      { title: "Centre Sportif UNIL-EPFL (Dorigny)", desc: "Eines der schönsten Hochschul-Sportzentren Europas direkt am Seeufer mit Tennisplätzen, Fitness und Segeln." },
      { title: "Mensa EPFL & Rolex Learning Center", desc: "Internationale Architektur, kostenlose Arbeitsplätze und bezahlbare Verpflegung." }
    ],
    localTips: [
      "Nutze die steile M2 U-Bahn mit dem SBB Halbtax und Jugend-Zonenabos.",
      "Profitiere von Vergünstigungen bei Festival-Events wie dem Montreux Jazz Festival in der Region."
    ]
  }
};

export function getCityGuide(slug: string): CityGuide | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase().replace(/ü/g, 'ue').replace(/ä/g, 'ae').replace(/ö/g, 'oe');
  return CITY_GUIDES[normalized] || CITY_GUIDES[slug.toLowerCase()] || null;
}
