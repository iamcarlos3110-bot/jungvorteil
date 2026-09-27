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
  kino: [
    {
      question: "Wie erhalte ich vergünstigte Kinotickets bei Pathé oder Blue Cinema?",
      answer: "Zeige vor dem Billettkauf an der Kinokasse einfach deinen physischen oder digitalen Legi-Ausweis vor. Die Ersparnis beträgt oft bis zu 30%."
    },
    {
      question: "Gibt es spezielle Kinotage in der Schweiz?",
      answer: "Ja, an den offiziellen Kinotagen (meist Montag oder Mittwoch) gewähren viele Schweizer Kinos Einheits-Vorstellungspreise für alle Besucher."
    },
    {
      question: "Gilt der Studentenrabatt auch bei IMAX oder 3D-Vorstellungen?",
      answer: "Ja, der Grundrabatt gilt meist auch bei Sonderformaten, wobei für 3D-Brillen oder IMAX-Zuschläge kleine Aufpreise anfallen können."
    }
  ],
  fitness: [
    {
      question: "Was ist der ASVZ und wer kann ihn nutzen?",
      answer: "Der Akademische Sportverband Zürich (ASVZ) ist das Sportangebot von ETH, UZH und ZHAW. Er ist im Semesterbeitrag enthalten oder extrem günstig buchbar."
    },
    {
      question: "Zahlt die Schweizer Krankenkasse etwas an mein Fitnessabo?",
      answer: "Ja, viele Zusatzversicherungen (QualiCert zertifiziert) erstatten Jugendlichen und Studierenden bis zu CHF 500.– pro Jahr an den Fitnesscenter-Beitrag."
    },
    {
      question: "Bieten kommerzielle Fitnessstudioketten wie PureGym Jugendrabatte?",
      answer: "Ja, Ketten wie PureGym oder Activ Fitness bieten ermäßigte Jahresabos für Studierende und Lernende unter 25-30 Jahren an."
    }
  ],
  streaming: [
    {
      question: "Wie erhalte ich Spotify Student in der Schweiz für CHF 7.50?",
      answer: "Melde dich bei Spotify Student an und verifiziere deinen Studentenstatus online über den Partner SheerID mit deinen Hochschul-Zugangsdaten."
    },
    {
      question: "Wie lange kann ich den Spotify Studentenrabatt nutzen?",
      answer: "Der Studententarif kann insgesamt bis zu 4 Jahre lang genutzt werden, sofern der Studentenstatus einmal jährlich neu verifiziert wird."
    },
    {
      question: "Gibt es kostenlose Streaming-Dienste in der Schweiz?",
      answer: "Ja, Play SRF, Arte und öffentlich-rechtliche Mediatheken bieten hochwertige Dokumentationen, Serien und Sport kostenlos an."
    }
  ],
  bildung: [
    {
      question: "Wie nutze ich das Schweizer Bibliotheksnetz Swisscovery gratis?",
      answer: "Registriere dich mit deiner Switch edu-ID. Damit kannst du Millionen wissenschaftlicher Bücher und E-Books aller Schweizer Hochschulen kostenlos ausleihen."
    },
    {
      question: "Wo erhalte ich Buchrabatte auf akademische Fachliteratur?",
      answer: "Buchhandlungen wie Haupt, Payot, Ex Libris oder universitäre Campus-Shops bieten 10% bis 15% Rabatt gegen Vorweisen des Legi."
    },
    {
      question: "Was beinhaltet das GitHub Student Developer Pack?",
      answer: "Das kostenlose Paket bietet Studierenden kostenlosen Zugang zu Premium-Entwicklertools, Domain-Namen, Cloud-Guthaben und JetBrains Lizenzen."
    }
  ],
  restaurants: [
    {
      question: "Wie viel kostet ein Essen in der Schweizer Universitätsmensa?",
      answer: "An Schweizer Universitäten (ETH, UZH, UniBE, EPFL) kosten vollwertige Tagesmenüs für Studierende meist zwischen CHF 6.50 und CHF 9.50."
    },
    {
      question: "Wie funktioniert die Too Good To Go App in der Schweiz?",
      answer: "Mit der App reservierst du 'Überraschungssäckli' von Bäckereien, Supermärkten und Restaurants kurz vor Ladenschluss zum drittel des Regulärpreises."
    },
    {
      question: "Gibt es Studentenrabatte in Fast-Food-Ketten?",
      answer: "Ja, Ketten wie McDonald's, Burger King oder Subway bieten exklusive App-Coupons und Tagesdeals für junge Leute an."
    }
  ],
  mode: [
    {
      question: "Welche Modemarken bieten Studentenrabatt mit UNiDAYS?",
      answer: "Marken wie ASOS, Nike, adidas, Levi's, Zalando Lounge und Urban Outfitters bieten nach Verifizierung auf UNiDAYS 10% bis 20% Rabatt."
    },
    {
      question: "Wo findet man günstige Second-Hand-Kleidung in der Schweiz?",
      answer: "In Schweizer Brockenhäusern (HFL, Caritas, Zürcher Brockenhaus) sowie auf Plattformen wie Tutti.ch oder Vinted findet man erschwingliche Vintage-Mode."
    },
    {
      question: "Lässt sich der Studentenrabatt mit Sale-Aktionen kombinieren?",
      answer: "Bei vielen Online-Shops kann der UNiDAYS Rabattcode auch auf bereits reduzierte Artikel angewendet werden."
    }
  ],
  gaming: [
    {
      question: "Gibt es Studentenrabatte auf Laptops und Gaming-Monitore?",
      answer: "Ja, Samsung Education Store, Dell und Lenovo bieten verifizierten Studierenden bis zu 25% Rabatt auf Gaming-Hardware und Monitore."
    },
    {
      question: "Wo erhält man kostenlose Games für PC und Konsole?",
      answer: "Plattformen wie Epic Games Store verschenken wöchentlich Vollversionen. Auch Amazon Prime Student beinhaltet monatlich Gratis-Spiele."
    }
  ],
  hotels: [
    {
      question: "Wie günstig sind Schweizer Jugendherbergen für Junge?",
      answer: "Mit der Membercard der Schweizer Jugendherbergen übernachtest du an top Lagen in der Schweiz bereits ab ca. CHF 35.– inklusive Frühstück."
    },
    {
      question: "Gibt es Studentenrabatte bei Booking.com?",
      answer: "Ja, über Partnerportale wie StudentBeans erhalten verifizierte Studierende 10% Rabatt und Zusatzguthaben auf Booking.com."
    }
  ],
  events: [
    {
      question: "Wie bekommt man günstige Openair- & Festivaltickets in der Schweiz?",
      answer: "Viele Festivals bieten Frühbucherrabatte, Helfer-Einsätze (Freikarte gegen Schichtarbeit) oder Rabatte über SBB RailAway Kombis."
    },
    {
      question: "Gibt es Vergünstigungen für studentische Partys?",
      answer: "Fachvereine und akademische Verbindungen veranstalten regelmäßig Partys mit vergünstigtem Eintritt und fairen Getränkepreisen."
    }
  ],
  shopping: [
    {
      question: "Welche Supermarkt-Vorteilskarten lohnen sich für Junge in der Schweiz?",
      answer: "Migros Cumulus und Coop Supercard sammeln bei jedem Einkauf Punkte. Zudem lohnen sich M-Budget und Prix Garantie Eigenmarken."
    },
    {
      question: "Wann sind Lebensmittel in Schweizer Supermärkten am günstigsten?",
      answer: "Samstags kurz vor Ladenschluss kennzeichnen Supermärkte frische Ware (Fleisch, Brot, Salat) mit 25% bis 50% Rabatt-Klebern."
    }
  ],
  gratis: [
    {
      question: "Sind die Gratis-Angebote auf JungVorteil wirklich kostenlos?",
      answer: "Ja, alle in der Kategorie 'Gratis' gelisteten Deals verlangen keinen Kauf und keine versteckten Gebühren."
    },
    {
      question: "Worauf sollte man bei Gratis-Testphasen achten?",
      answer: "Achte darauf, das Probe-Abonnement vor Ablauf der Testfrist zu kündigen, um eine automatische Verlängerung zu vermeiden."
    }
  ]
};

export function getCategoryFaqs(slug: string): FAQItem[] {
  if (!slug) return CATEGORY_FAQS.gratis;
  return CATEGORY_FAQS[slug.toLowerCase()] || CATEGORY_FAQS.gratis;
}
