export interface FAQItem {
  question: string;
  answer: string;
}

export const CITY_FAQS: Record<string, FAQItem[]> = {
  zuerich: [
    {
      question: "Welche Hochschulen bieten in Zürich Studentenrabatte an?",
      answer: "Studierende der UZH (Universität Zürich), ETH Zürich, ZHAW und ZHdK profitieren von exklusiven Vergünstigungen bei Kultur, Sport und Verpflegung."
    },
    {
      question: "Was beinhaltet das ASVZ Sportangebot in Zürich?",
      answer: "Der Akademische Sportverband Zürich (ASVZ) gewährt Studierenden für wenige Franken im Jahr Zugang zu 5 modernen Sportzentren und über 120 Sportarten."
    },
    {
      question: "Gibt es vergünstigte ÖV-Abos für die Stadt Zürich?",
      answer: "Ja, der ZVV bietet für Jugendliche und Studierende unter 25 Jahren vergünstigte ZVV Junior NetzAbos an."
    }
  ],
  bern: [
    {
      question: "Wie spare ich als Student in der Bundeshauptstadt Bern am meisten?",
      answer: "Nutze die Mensen der Uni Bern (von Roll, Hauptgebäude), schwimme im Sommer gratis in der Aare und nutze den Libero-Junior Tarif für Bus und Tram."
    },
    {
      question: "Gibt es Rabatte für Uni Bern Studierende bei Kultur & Museen?",
      answer: "Ja, gegen Vorweisen der Legi bieten Museen wie das Zentrum Paul Klee oder das Historische Museum Bern stark reduzierte Eintrittspreise."
    }
  ],
  basel: [
    {
      question: "Welche Rabatte erhalten Studierende der Universität Basel?",
      answer: "Studierende der Uni Basel profitieren vom Universitätssport Basel, günstigen Mensapreisen sowie Ermäßigungen im Theater Basel und der Fondation Beyeler."
    },
    {
      question: "Gibt es grenzüberschreitende ÖV-Tarife für junge Basler?",
      answer: "Ja, der Tarifverbund Nordwestschweiz (TNW) bietet vergünstigte Monatsabos für Jugendliche und Studierende."
    }
  ]
};

export function getCityFaqs(cityName: string, slug: string): FAQItem[] {
  return CITY_FAQS[slug] || [
    {
      question: `Wie finde ich die besten Studentenrabatte in ${cityName}?`,
      answer: `Auf JungVorteil listen wir alle lokalen Rabatte in ${cityName} auf, die du mit deiner Legi oder Jugendausweis vor Ort oder online einlösen kannst.`
    },
    {
      question: `Gelten die Angebote in ${cityName} auch für Schüler und Lehrlinge?`,
      answer: `Ja, die meisten Angebote richten sich nicht nur an Universitätsstudierende, sondern an alle Jugendlichen und jungen Erwachsenen unter 30 Jahren.`
    },
    {
      question: `Wie oft werden die Deals in ${cityName} aktualisiert?`,
      answer: `Unsere Community und Redaktion prüfen die Angebote in ${cityName} wöchentlich auf Vollständigkeit und Funktion.`
    }
  ];
}
