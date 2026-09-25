export interface FAQItem {
  question: string;
  answer: string;
}

export const CATEGORY_FAQS: Record<string, FAQItem[]> = {
  handy: [
    {
      question: "Gibt es Altersbeschränkungen für Jugendtarife bei Mobilfunkanbietern?",
      answer: "Ja, in der Schweiz gelten Jugend- und Young-Tarife bei Swisscom, Sunrise und Salt in der Regel bis zum 30. Geburtstag. Ein Nachweis wie Identitätskarte oder Pass reicht aus."
    },
    {
      question: "Benötige ich eine Immatrikulationsbestätigung für Handyabos?",
      answer: "Nein, für die meisten Youth-Mobilfunkabos ist der Nachweis des Alters (unter 30 Jahre) ausreichend. Ein Legi-Nachweis ist in der Regel nicht erforderlich."
    },
    {
      question: "Kann ich meine bestehende Rufnummer kostenlos mitnehmen?",
      answer: "Ja, die Rufnummernportierung ist in der Schweiz gesetzlich kostenlos. Dein neuer Anbieter übernimmt die Kündigung und Übernahme deiner Nummer."
    }
  ],
  reisen: [
    {
      question: "Lohnt sich das Halbtax Jugend für Auszubildende und Studierende?",
      answer: "Absolut. Das Halbtax Jugend halbiert den Ticketpreis auf fast allen SBB-Strecken und im PostAuto-Netz. Es amortisiert sich meist bereits ab 3 bis 4 Städtereisen pro Jahr."
    },
    {
      question: "Was ist der Vorteil des GA Night Abonnements?",
      answer: "Mit dem GA Night reisen Jugendliche unter 25 Jahren ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) völlig kostenlos im Streckennetz der SBB."
    },
    {
      question: "Gelten Schweizer Studentenrabatte auch für internationale Zugreisen?",
      answer: "Ja, in Kombination mit der SBB erhalten Studierende Vergünstigungen auf TGV Lyria nach Frankreich oder EuroCity-Verbindungen nach Deutschland und Italien."
    }
  ],
  technik: [
    {
      question: "Wie erhalte ich den Apple Education Rabatt in der Schweiz?",
      answer: "Über den Apple Store Bildung oder Partnerprogramme wie Projekt Neptun erhalten Studierende und Lehrpersonen ca. 10% Rabatt auf MacBooks und iPads."
    },
    {
      question: "Was ist Projekt Neptun?",
      answer: "Projekt Neptun ist eine Initiative Schweizer Hochschulen, bei der dreimal jährlich ausgewählte Laptops (Apple, Lenovo, HP) mit bis zu 40% Rabatt angeboten werden."
    },
    {
      question: "Sind Software-Lizenzen wie Microsoft 365 für Studierende kostenlos?",
      answer: "Ja, fast alle Schweizer Universitäten und Fachhochschulen stellen Microsoft 365 Office-Pakete für die Dauer des Studiums kostenfrei zur Verfügung."
    }
  ],
  finanzen: [
    {
      question: "Sind Jugend- und Studentenkonten bei Schweizer Banken kostenlos?",
      answer: "Ja, Schweizer Kantonalbanken sowie Großbanken bieten für Personen unter 26 (bzw. Studierende bis 30) kostenlose Konten ohne Führungsgebühren an."
    },
    {
      question: "Welche Vorteile bieten Neobanken wie Neon oder Yuh?",
      answer: "Neobanken bieten gebührenfreie Girokonten, kostenlose Debitkarten und echte Wechselkurse ohne versteckte Aufschläge bei Auslandseinsätzen."
    },
    {
      question: "Wie beantrage ich die Krankenkassen-Prämienverbilligung (IPV)?",
      answer: "Der Antrag wird online bei der SVA des jeweiligen Wohnkantons eingereicht. Bei geringem Einkommen übernimmt der Kanton einen Großteil der Krankenkassenprämie."
    }
  ],
  food: [
    {
      question: "Wie erhalte ich Rabatte in Restaurants und Fast-Food-Ketten?",
      answer: "Vor Ort reicht meist das Vorzeigen der physischen Legi oder der Studierenden-App. Bei Ketten wie McDonald's gibt es spezielle Gutscheine in der App."
    },
    {
      question: "Wie günstig sind Universitätsmensen in der Schweiz?",
      answer: "An Schweizer Hochschulen (UZH, ETH, UniBE, EPFL) kosten ausgewogene Studentengerichte meist zwischen CHF 6.50 und CHF 9.50."
    }
  ]
};

export function getCategoryFaqs(slug: string): FAQItem[] {
  return CATEGORY_FAQS[slug] || [
    {
      question: `Wie löse ich Rabatte in der Kategorie ${slug} ein?`,
      answer: "Klicke einfach auf das gewünschte Angebot auf JungVorteil. Bei Online-Shops wirst du direkt zum verifizierten Gutscheincode weitergeleitet, vor Ort zeigst du deine Legi vor."
    },
    {
      question: "Wer kann die Angebote auf JungVorteil nutzen?",
      answer: "Die meisten Deals richten sich an Studierende, Lernende, Schüler sowie alle jungen Erwachsenen unter 30 Jahren in der Schweiz."
    },
    {
      question: "Werden die Rabattcodes regelmäßig geprüft?",
      answer: "Ja, unser Redaktionsteam verifiziert die Gültigkeit aller Angebote und Rabattcodes regelmäßig."
    }
  ];
}
