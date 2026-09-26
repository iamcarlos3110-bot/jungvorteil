export interface CityFAQItem {
  question: string;
  answer: string;
}

export const CITY_FAQS: Record<string, CityFAQItem[]> = {
  zuerich: [
    {
      question: "Wer kann den ASVZ in Zürich nutzen?",
      answer: "Alle immatrikulierten Studierenden der UZH, ETH und ZHAW nutzen die ASVZ Sport Center (Irchel, Polyterrasse, Fluntern, Hönggerberg) kostenlos oder zum fairen Semesterbeitrag."
    },
    {
      question: "Gibt es spezielle ÖV-Tickets für Zürcher Studierende?",
      answer: "Ja, der ZVV bietet Monats- und Jahresabos mit Jugendrabatt bis 25 Jahre an. In Kombination mit dem SBB GA Night fährst du ab 19:00 Uhr im gesamten ZVV-Netz kostenlos."
    },
    {
      question: "Wo findet man günstige Studenten-WGs in Zürich?",
      answer: "Die beiden wichtigsten gemeinnützigen Wohnorganisationen für Studierende und Jugendliche in Zürich sind die WOKO (Studentische Wohngenossenschaft) und das JUWO (Jugendwohnnetz)."
    }
  ],
  bern: [
    {
      question: "Wie nutze ich UNISPORT Bern als Student?",
      answer: "Alle Studierenden der Universität Bern (UniBE) und der Berner Fachhochschule (BFH) haben mit ihrer Legi direkten Zugang zu den Sportangeboten von UNISPORT Bern."
    },
    {
      question: "Wie beantrage ich die IPV Prämienverbilligung im Kanton Bern?",
      answer: "Die Beantragung der individuellen Prämienverbilligung erfolgt im Kanton Bern einfach online über das Portal TaxMe der Kantonalen Steuerverwaltung."
    },
    {
      question: "Wo isst man in Bern als Student am günstigsten?",
      answer: "In den Mensen der UniBE (Grosse Schanze, VonRoll, Hauptgebäude) gibt es ausgewogene Tagesgerichte für Studierende ab CHF 6.90."
    }
  ],
  basel: [
    {
      question: "Welche Angebote bietet der Uni Sport Basel?",
      answer: "Der Universitäts-Sport Basel bietet über 100 Sportarten in modernen Sporthallen, Krafträumen und Outdoor-Aktivitäten am Rhein für UniBasel-Studierende."
    },
    {
      question: "Gibt es Museumsrabatte für Jugendliche in Basel?",
      answer: "Ja, Basel hat über 40 Museen. Personen unter 26 Jahren sowie Studierende erhalten bei fast allen Museen stark ermäßigten oder am ersten Sonntag im Monat kostenlosen Eintritt."
    },
    {
      question: "Wie funktioniert der öffentliche Verkehr in der Region Basel?",
      answer: "Der Tarifverbund TNW deckt die Region Basel-Stadt und Basel-Landschaft ab und bietet Jugend-Monatskarten für Busse und Trams an."
    }
  ],
  genf: [
    {
      question: "Comment profiter des rabais étudiants à Genève?",
      answer: "Sur présentation de la carte d'étudiant UniGE ou de l'application mobile, vous bénéficiez de tarifs réduits sur les transports TPG, les cinémas et les musées."
    },
    {
      question: "Welche ÖV-Tarife bietet die TPG in Genf für Jugendliche?",
      answer: "Die Transports Publics Genevois (TPG) bieten Junior-Jahresabonnemente für Personen unter 25 Jahren zu stark reduzierten Preisen."
    }
  ],
  lausanne: [
    {
      question: "Wie nutze ich das Centre Sportif UNIL-EPFL in Dorigny?",
      answer: "Studierende der UNIL und EPFL nutzen die Sportanlagen in Dorigny direkt am Genfersee kostenlos oder zu minimalen Kursgebühren mit der Legi."
    },
    {
      question: "Gibt es ermäßigte ÖV-Abos in Lausanne?",
      answer: "Der Tarifverbund Mobilis bietet Jugendabos für die Zonen Lausanne und Waadtland für Personen unter 25 Jahren an."
    }
  ],
  winterthur: [
    {
      question: "Welche Hochschulen befinden sich in Winterthur?",
      answer: "Winterthur ist die Heimat der ZHAW (Zürcher Hochschule für Angewandte Wissenschaften) mit den Departementen Architektur, Gesundheit, Linguistik, School of Engineering und School of Management and Law."
    },
    {
      question: "Können ZHAW-Studierende in Winterthur den ASVZ nutzen?",
      answer: "Ja, ZHAW-Studierende in Winterthur haben vollen Zugang zu allen ASVZ Sport Center Standorten in Winterthur und Zürich."
    }
  ],
  luzern: [
    {
      question: "Welche Vorteile bieten UniLu und HSLU in Luzern?",
      answer: "Studierende der Universität Luzern und der HSLU profitieren von günstigen Mensen, dem HSLU Sportangebot und Kultur-Rabatten im KKL Luzern."
    },
    {
      question: "Welches ÖV-Abo gilt in der Region Luzern?",
      answer: "Der Tarifverbund Passepartout bietet preiswerte Jugend-Monatsabos für Luzern, Obwalden und Nidwalden."
    }
  ],
  "st-gallen": [
    {
      question: "Welche Sportangebote gibt es an der HSG St. Gallen?",
      answer: "Der Unisport HSG bietet Studierenden ein hochmodernes Fitnesscenter auf dem Rosenberg und zahlreiche Gruppenkurse."
    },
    {
      question: "Welches ÖV-Abo nutzt man in St. Gallen?",
      answer: "Der Tarifverbund OSTWIND bietet attraktive Jugendtarife für Busse und Züge in der gesamten Ostschweiz."
    }
  ],
  lugano: [
    {
      question: "Quali sconti per studenti ci sono a Lugano?",
      answer: "Gli studenti di USI e SUPSI beneficiano di sconti su trasporti Arcobaleno, musei, cinema e attività sportive con la tessera universitaria."
    },
    {
      question: "Come funziona il Servizio Sport USI-SUPSI a Lugano?",
      answer: "Il Servizio Sport offre agli studenti accesso a palestra, sport acquatici sul Lago di Lugano e corsi gratuiti."
    }
  ]
};

export function getCityFaqs(cityName: string, slug: string): CityFAQItem[] {
  if (!slug) return CITY_FAQS.zuerich;
  const normalized = slug.toLowerCase().replace(/ü/g, 'ue').replace(/ä/g, 'ae').replace(/ö/g, 'oe');
  return CITY_FAQS[normalized] || CITY_FAQS[slug.toLowerCase()] || CITY_FAQS.zuerich;
}
