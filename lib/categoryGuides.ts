// lib/categoryGuides.ts
// Original high-value editorial guides and savings advice for all categories in Switzerland

export interface CategoryGuide {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
  proTips: string[];
}

export const CATEGORY_GUIDES: Record<string, CategoryGuide> = {
  reisen: {
    title: "Ratgeber: Maximal sparen bei ÖV & Reisen in der Schweiz",
    intro: "Der öffentliche Verkehr in der Schweiz gehört zu den besten der Welt, kann aber für Jugendliche und Studierende ohne die richtigen Abos teuer werden. Mit gezielten Angeboten wie dem Halbtax Jugend und dem GA Night sparst du hunderte Franken pro Jahr.",
    sections: [
      {
        heading: "1. Halbtax Jugend & GA Night optimal kombinieren",
        body: "Personen unter 25 Jahren erhalten das SBB Halbtax Jugend für nur CHF 120.– im ersten Jahr (Folgejahr CHF 100.–). Kombiniert mit dem GA Night (CHF 99.– / Jahr) fährst du ab 19:00 Uhr auf dem gesamten SBB-Netz und bei fast allen Privatbahnen komplett kostenlos in der 2. Klasse."
      },
      {
        heading: "2. Sparbillette & Spartageskarten richtig timen",
        body: "Über die SBB Mobile App werden bis zu 60 Tage im Voraus Sparbillette mit bis zu 70% Rabatt freigeschaltet. Wer flexibel plant oder Randzeiten nutzt, fährt oft für unter CHF 10.– quer durch die Schweiz."
      },
      {
        heading: "3. Internationale Zugreisen mit Jugendtarif",
        body: "Für Fahrten nach Deutschland (DB Supersparpreis Europa ab CHF 20.–), Frankreich (TGV Lyria) oder Italien bieten die Partnerbahnen der SBB attraktive Nachlässe für Reisende unter 27 Jahren."
      }
    ],
    proTips: [
      "Lade deinen Swisspass digital in der SBB App hoch, um Plastikkarten zu vermeiden.",
      "Informiere dich bei deiner Wohngemeinde nach der Spartageskarte Gemeinde.",
      "Nütze das GA Night auch für Nachtbusse und Nacht-S-Bahnen in Zürcher oder Berner Zonen."
    ]
  },
  handy: {
    title: "Ratgeber: Die besten Handy- & Internet-Abos für unter 30",
    intro: "Mobilfunkanbieter in der Schweiz konkurrieren stark um junge Kundinnen und Kunden. Mit speziellen Jugendtarifen (Young Abos) erhältst du unlimitiertes 5G-Datenvolumen und EU-Roaming zum halben Preis.",
    sections: [
      {
        heading: "1. Swisscom, Sunrise und Salt Jugendvorteile",
        body: "Sunrise bietet mit 'Up Mobile Youth' 50% Rabatt bis zum 30. Geburtstag. Swisscom gewährt mit 'blue Mobile Youth' reduzierte Grundgebühren und doppelte Speed-Optionen. Salt Youth überzeugt mit inklusivem Roaming-Datenvolumen in Europa."
      },
      {
        heading: "2. Neobanken & Prepaid-Alternativen ohne Laufzeit",
        body: "Anbieter wie Yallo, Wingo, Swype oder Mucho Mobile bieten flexible Monatsabos ohne Mindestvertragsdauer. Achte auf Promotionen ohne Aktivierungsgebühr."
      }
    ],
    proTips: [
      "Wähle Verträge mit 1 Monat Kündigungsfrist, um jederzeit auf günstigere Aktionen zu wechseln.",
      "Überprüfe vor dem Abo-Abschluss die Netzabdeckung (Swisscom vs. Sunrise vs. Salt) an deinem Wohn- und Studienort.",
      "Nütze eSIM-Optionen für die kostenlose Sofortaktivierung auf dem Smartphone."
    ]
  },
  finanzen: {
    title: "Ratgeber: Kostenloses Banking & IPV Prämienverbilligung",
    intro: "Finanzielle Unabhängigkeit beginnt im Studium oder in der Lehre mit den richtigen Konten. In der Schweiz zahlt niemand unter 30 Jahren Kontoführungsgebühren.",
    sections: [
      {
        heading: "1. Neobanken: Neon, Yuh & Zak im Vergleich",
        body: "Schweizer Neobanken bieten 100% kostenlose Girokonten inklusive Gratis-Debicard, TWINT-Anbindung und fairen Wechselkursen beim Bezahlen im Ausland. Neon Free und Yuh gehören zu den beliebtesten Angeboten unter jungen Erwachsenen."
      },
      {
        heading: "2. Krankenkassen-Prämienverbilligung (IPV)",
        body: "Ein wesentlicher Hebel für das Budget: Die Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Verbilligung der Grundversicherungsprämie (oft bis zu 80%). Reiche den Antrag bei der SVA deines Kantons rechtzeitig ein."
      }
    ],
    proTips: [
      "Beantrage die IPV Prämienverbilligung vor Ablauf der kantonalen Frist (meist 31. März oder 31. Dezember).",
      "Kopple dein Gratiskonto direkt mit TWINT für bequeme Zahlungen unter Freunden.",
      "Starte frühzeitig mit kleinen Beträgen in der Säule 3a für die steuerbegünstigte Vorsorge."
    ]
  },
  technik: {
    title: "Ratgeber: Laptops, Tablets & Software günstig kaufen",
    intro: "Das passende Werkzeug für Studium und Ausbildung muss das Budget nicht sprengen. Über Bildungsprogramme sparst du bei Apple, Lenovo, HP und Microsoft erheblich.",
    sections: [
      {
        heading: "1. Projekt Neptun Verkaufsfenster",
        body: "Dreimal im Jahr öffnen die Schweizer Hochschulen das Projekt Neptun. Studierende und Lehrpersonen bestellen dort MacBooks, ThinkPads und HP-Laptops mit bis zu 40% Rabatt und erweiterter Garantie."
      },
      {
        heading: "2. Apple Education Store & UNiDAYS",
        body: "Ganzjährig erhalten Immatrikulierte ca. 10% Rabatt auf Macs und iPads im Apple Education Store sowie kostenlose Zusatzleistungen wie Apple Pencil während der Back-to-School Aktion."
      }
    ],
    proTips: [
      "Nutze deine universitäre E-Mail-Adresse (@student.ethz.ch, @uzh.ch etc.) für Gratis-Lizenzen von Microsoft 365, JetBrains und GitHub.",
      "Vergleiche Preise bei refurbed.ch oder Digitec Second Life für geprüfte Occasion-Geräte mit Garantie.",
      "Verwende für die Verifizierung UNiDAYS oder den Switch edu-ID Login."
    ]
  },
  kino: {
    title: "Ratgeber: Vergünstigtes Kino & Kultur für Junge",
    intro: "Kultur und Filmgenuss gehören zum Freizeitleben dazu. Schweizer Kinos und Theater bieten hervorragende Nachlässe für Jugendliche und Studierende.",
    sections: [
      {
        heading: "1. Pathé & Blue Cinema Student Tarife",
        body: "Gegen Vorweisen des Legi-Ausweises oder Personalausweises kosten Kinotickets bei Pathé (Zürich, Bern, Basel, Genf, Lausanne) ab CHF 14.– statt CHF 22.–. Auch Blue Cinema bietet vergünstigte Studententage."
      },
      {
        heading: "2. Kultur-Karten & Theatertickets",
        body: "Viele Kantone bieten Kulturpässe (z.B. Kulturlegi der Caritas oder Carte Culture) an, mit denen Kinokarten, Museumseintritte und Theaterbillette um bis zu 50% bis 70% reduziert werden."
      }
    ],
    proTips: [
      "Zeige deine Legi unaufgefordert an der Kinokasse vor.",
      "Besuche Kinos an den offiziellen Kinotagen (meist Montag oder Mittwoch) für zusätzliche Rabatte.",
      "Achte auf Festival-Tagespässe mit Studentenrabatt."
    ]
  },
  fitness: {
    title: "Ratgeber: Sport & Fitness zum Studententarif",
    intro: "Gesundheit und Bewegung sind der perfekte Ausgleich zum Lernalltag. In der Schweiz stehen dir universitäre Sportverbände und kommerzielle Fitnessketten zur Auswahl.",
    sections: [
      {
        heading: "1. Akademische Sportverbände (ASVZ, UNISPORT)",
        body: "Der ASVZ (Zürich), UNISPORT Bern, Basel oder Genf bieten Zugang zu über 120 Sportarten, modernsten Krafträumen, Saunen und Kursen. Bei Universitäten ist der Beitrag im Semesterbeitrag enthalten."
      },
      {
        heading: "2. Fitnessstudio-Ketten mit Jugendrabatt",
        body: "Ketten wie PureGym, Activ Fitness oder Fitnesspark gewähren Abonnementsnachlässe für Schüler, Lernende und Studierende unter 25 bis 30 Jahren."
      }
    ],
    proTips: [
      "Nutze die Krankenkassen-Sportförderung (QualiCert): Viele Zusatzversicherungen zahlen bis zu CHF 500.– an dein Fitnessabo zurück.",
      "Installiere die ASVZ App für den schlüssellosen Zugang per Drehkreuz.",
      "Teste Gratis-Probetrainings vor dem Abo-Abschluss."
    ]
  },
  streaming: {
    title: "Ratgeber: Musik & Video Streaming günstiger nutzen",
    intro: "Musik, Podcasts, Serien und Filme begleiten uns jeden Tag. Erfahre, wie du Streaming-Dienste legal zum halben Preis abonnierst.",
    sections: [
      {
        heading: "1. Spotify Premium Student & Apple Music",
        body: "Spotify bietet Premium Student für CHF 7.50 pro Monat (statt CHF 13.95). Die Verifizierung erfolgt einfach online via SheerID mit deiner Legi oder Immatrikulationsbescheinigung."
      },
      {
        heading: "2. Gratis-Streaming in der Schweiz",
        body: "Mit Play SRF, Arte und den Mediatheken der öffentlich-rechtlichen Sender schaust du hochwertige Dokus, Filme und Sportübertragungen kostenlos und ohne Abo."
      }
    ],
    proTips: [
      "Verlängere die Spotify Student Verifizierung einmal jährlich vor Ablauf.",
      "Nütze Familien- oder Duo-Abos mit WG-Mitbewohnern für noch günstigere Monatsbeiträge.",
      "Achte auf Aktionen wie 3 Monate Gratis-Testphase bei Apple Music oder Tidal."
    ]
  },
  bildung: {
    title: "Ratgeber: Fachliteratur, Kurse & Lernhilfen",
    intro: "Erfolgreich studieren und lernen erfordert gute Materialien. Nutze kostenlose Bibliotheken, Rabatte auf Lehrbücher und zertifizierte Online-Kurse.",
    sections: [
      {
        heading: "1. Bibliotheksnetze & Swisscovery",
        body: "Über Swisscovery hast du kostenlosen Zugriff auf Millionen wissenschaftlicher Bücher, E-Books und Fachzeitschriften aller Schweizer Hochschulbibliotheken."
      },
      {
        heading: "2. Buchrabatte & Software-Lizenzen",
        body: "Verlage wie Haupt, Payot oder Ex Libris bieten Studentenrabatte auf Fachliteratur. Zudem stellen Hochschulen Programme wie SPSS, MATLAB oder Adobe Creative Cloud vergünstigt bereit."
      }
    ],
    proTips: [
      "Prüfe vor dem Buchkauf, ob der Titel als E-Book in deiner Universitätsbibliothek gratis als PDF vorliegt.",
      "Nutze das GitHub Student Developer Pack für kostenlose Entwickler-Tools im Wert von über $2000.",
      "Verkaufe gelesene Fachbücher am Semesterende über Studiladen oder Buchplattformen."
    ]
  },
  restaurants: {
    title: "Ratgeber: Günstig Essen & Trinken für Studierende",
    intro: "Auswärts essen in der Schweiz muss nicht teuer sein. Mit Hochschulmensen, Food-Saving Apps und Studentenrabatten schont man die Geldbörse.",
    sections: [
      {
        heading: "1. Hochschulmensen nutzen",
        body: "Mensen an der ETH, UZH, UniBE, EPFL oder FHNW servieren ausgewogene Menüs ab CHF 6.50 bis CHF 9.50. Meist steht auch eine vegetarische oder vegane Option zur Auswahl."
      },
      {
        heading: "2. Too Good To Go & Foodsharing",
        body: "Mit Apps wie Too Good To Go rettest du leckere Mahlzeiten aus Bäckereien, Supermärkten und Restaurants kurz vor Ladenschluss zum Sparpreis."
      }
    ],
    proTips: [
      "Nütze Gutschein-Coupons in Schnellrestaurants via offizieller Marken-Apps.",
      "Achte auf Happy-Hour Angebote und studentenfreundliche Mittagsmenüs in Universitätsstädten.",
      "Packe Selbstgekochtes für Mikrowellen-Stationen am Campus ein."
    ]
  },
  mode: {
    title: "Ratgeber: Mode & Kleidung mit Studentenrabatt",
    intro: "Trendy kleiden und gleichzeitig sparen: Viele internationale Modemarken und Schweizer Stores gewähren Nachlässe auf Fashion und Sneakers.",
    sections: [
      {
        heading: "1. UNiDAYS & StudentBeans Codes",
        body: "Marken wie ASOS, Nike, adidas, Zalando Lounge und Levi's bieten dauerhaft 10% bis 20% Rabatt für Studierende nach Verifizierung auf Portalen wie UNiDAYS."
      },
      {
        heading: "2. Second-Hand & Brockenhäuser in der Schweiz",
        body: "Nachhaltig und individuell: Brockis (HFL, Caritas, Zürcher Brockenhaus) bieten Vintage-Mode und Kleidung zu unschlagbaren Preisen."
      }
    ],
    proTips: [
      "Kombiniere Studentenrabattcodes mit Saisonsales für maximale Ersparnis.",
      "Melde dich für kostenlose Member-Clubs von Modemarken an für Willkommensgutscheine.",
      "Verkaufe ungetragene Kleidung auf Vinted oder Tutti.ch."
    ]
  }
};

export function getCategoryGuide(slug: string): CategoryGuide | null {
  return CATEGORY_GUIDES[slug.toLowerCase()] || null;
}
