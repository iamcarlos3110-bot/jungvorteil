// lib/categoryGuides.ts
// Original high-value editorial guides and savings advice for ALL 15 categories in Switzerland

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
        body: "Personen unter 25 Jahren erhalten das SBB Halbtax Jugend für nur CHF 120.– im ersten Jahr. Kombiniert mit dem GA Night (CHF 99.– / Jahr) fährst du ab 19:00 Uhr auf dem gesamten SBB-Netz und bei fast allen Privatbahnen komplett kostenlos in der 2. Klasse."
      },
      {
        heading: "2. Sparbillette & Spartageskarten richtig timen",
        body: "Über die SBB Mobile App werden bis zu 60 Tage im Voraus Sparbillette mit bis zu 70% Rabatt freigeschaltet. Wer flexibel plant oder Randzeiten nutzt, fährt oft für unter CHF 10.– quer durch die Schweiz."
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
        body: "Sunrise bietet mit 'Up Mobile Youth' 50% Rabatt bis zum 30. Geburtstag. Swisscom gewährt mit 'blue Mobile Youth' reduzierte Grundgebühren. Salt Youth überzeugt mit inklusivem Roaming-Datenvolumen in Europa."
      },
      {
        heading: "2. Neobanken & Prepaid-Alternativen ohne Laufzeit",
        body: "Anbieter wie Yallo, Wingo, Swype oder Mucho Mobile bieten flexible Monatsabos ohne Mindestvertragsdauer. Achte auf Promotionen ohne Aktivierungsgebühr."
      }
    ],
    proTips: [
      "Wähle Verträge mit 1 Monat Kündigungsfrist, um jederzeit auf günstigere Aktionen zu wechseln.",
      "Überprüfe vor dem Abo-Abschluss die Netzabdeckung an deinem Wohn- und Studienort.",
      "Nütze eSIM-Optionen für die kostenlose Sofortaktivierung auf dem Smartphone."
    ]
  },
  finanzen: {
    title: "Ratgeber: Kostenloses Banking & IPV Prämienverbilligung",
    intro: "Finanzielle Unabhängigkeit beginnt im Studium oder in der Lehre mit den richtigen Konten. In der Schweiz zahlt niemand unter 30 Jahren Kontoführungsgebühren.",
    sections: [
      {
        heading: "1. Neobanken: Neon, Yuh & Zak im Vergleich",
        body: "Schweizer Neobanken bieten gebührenfreie Girokonten inklusive Gratis-Debitcard, TWINT-Anbindung und fairen Wechselkursen beim Bezahlen im Ausland. Neon Free und Yuh gehören zu den beliebtesten Angeboten."
      },
      {
        heading: "2. Krankenkassen-Prämienverbilligung (IPV)",
        body: "Ein wesentlicher Hebel für das Budget: Die Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Verbilligung der Grundversicherungsprämie. Reiche den Antrag bei der SVA deines Kantons rechtzeitig ein."
      }
    ],
    proTips: [
      "Beantrage die IPV Prämienverbilligung vor Ablauf der kantonalen Frist.",
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
        body: "Dreimal im Jahr öffnen die Schweizer Hochschulen das Projekt Neptun. Studierende und Lehrpersonen bestellen dort MacBooks, ThinkPads und HP-Laptops mit bis zu 40% Rabatt."
      },
      {
        heading: "2. Apple Education Store & UNiDAYS",
        body: "Ganzjährig erhalten Immatrikulierte ca. 10% Rabatt auf Macs und iPads im Apple Education Store sowie kostenlose Zubehöraktionen."
      }
    ],
    proTips: [
      "Nutze deine universitäre E-Mail-Adresse für Gratis-Lizenzen von Microsoft 365, JetBrains und GitHub.",
      "Vergleiche Preise bei refurbed.ch oder Digitec Second Life für geprüfte Occasion-Geräte.",
      "Verwende für die Verifizierung UNiDAYS oder den Switch edu-ID Login."
    ]
  },
  kino: {
    title: "Ratgeber: Vergünstigtes Kino & Kultur für Junge",
    intro: "Kultur und Filmgenuss gehören zum Freizeitleben dazu. Schweizer Kinos und Theater bieten hervorragende Nachlässe für Jugendliche und Studierende.",
    sections: [
      {
        heading: "1. Pathé & Blue Cinema Student Tarife",
        body: "Gegen Vorweisen des Legi-Ausweises kosten Kinotickets bei Pathé ab CHF 14.– statt CHF 22.–. Auch Blue Cinema bietet vergünstigte Studententage."
      },
      {
        heading: "2. Kultur-Karten & Theatertickets",
        body: "Viele Kantone bieten Kulturpässe (z.B. Kulturlegi der Caritas) an, mit denen Kinokarten, Museumseintritte und Theaterbillette um bis zu 70% reduziert werden."
      }
    ],
    proTips: [
      "Zeige deine Legi unaufgefordert an der Kinokasse vor.",
      "Besuche Kinos an den offiziellen Kinotagen (Montag oder Mittwoch) für zusätzliche Rabatte.",
      "Achte auf Festival-Tagespässe mit Studentenrabatt."
    ]
  },
  fitness: {
    title: "Ratgeber: Sport & Fitness zum Studententarif",
    intro: "Gesundheit und Bewegung sind der perfekte Ausgleich zum Lernalltag. In der Schweiz stehen dir universitäre Sportverbände und kommerzielle Fitnessketten zur Auswahl.",
    sections: [
      {
        heading: "1. Akademische Sportverbände (ASVZ, UNISPORT)",
        body: "Der ASVZ (Zürich), UNISPORT Bern, Basel oder Genf bieten Zugang zu über 120 Sportarten, modernsten Krafträumen und Saunen extrem günstig."
      },
      {
        heading: "2. Fitnessstudio-Ketten mit Jugendrabatt",
        body: "Ketten wie PureGym, Activ Fitness oder Fitnesspark gewähren Abonnementsnachlässe für Schüler, Lernende und Studierende."
      }
    ],
    proTips: [
      "Nutze die Krankenkassen-Sportförderung (QualiCert): Viele Zusatzversicherungen zahlen bis zu CHF 500.– an dein Fitnessabo zurück.",
      "Installiere die Hochschulsport App für den schlüssellosen Zugang.",
      "Teste Gratis-Probetrainings vor dem Abo-Abschluss."
    ]
  },
  streaming: {
    title: "Ratgeber: Musik & Video Streaming günstiger nutzen",
    intro: "Musik, Podcasts, Serien und Filme begleiten uns jeden Tag. Erfahre, wie du Streaming-Dienste legal zum halben Preis abonnierst.",
    sections: [
      {
        heading: "1. Spotify Premium Student & Apple Music",
        body: "Spotify bietet Premium Student für CHF 7.50 pro Monat (statt CHF 13.95). Die Verifizierung erfolgt einfach online via SheerID mit deiner Legi."
      },
      {
        heading: "2. Gratis-Streaming in der Schweiz",
        body: "Mit Play SRF, Arte und den Mediatheken schaust du hochwertige Dokus, Filme und Sportübertragungen kostenlos und ohne Abo."
      }
    ],
    proTips: [
      "Verlängere die Spotify Student Verifizierung einmal jährlich vor Ablauf.",
      "Nütze Familien- oder Duo-Abos mit WG-Mitbewohnern für noch günstigere Monatsbeiträge.",
      "Achte auf Aktionen wie 3 Monate Gratis-Testphase bei Apple Music."
    ]
  },
  bildung: {
    title: "Ratgeber: Fachliteratur, Kurse & Lernhilfen",
    intro: "Erfolgreich studieren und lernen erfordert gute Materialien. Nutze kostenlose Bibliotheken, Rabatte auf Lehrbücher und zertifizierte Online-Kurse.",
    sections: [
      {
        heading: "1. Bibliotheksnetze & Swisscovery",
        body: "Über Swisscovery hast du kostenlosen Zugriff auf Millionen wissenschaftlicher Bücher, E-Books und Fachzeitschriften aller Schweizer Hochschulen."
      },
      {
        heading: "2. Buchrabatte & Software-Lizenzen",
        body: "Verlage wie Haupt oder Payot bieten Studentenrabatte auf Fachliteratur. Zudem stellen Hochschulen Programme wie SPSS oder MATLAB vergünstigt bereit."
      }
    ],
    proTips: [
      "Prüfe vor dem Buchkauf, ob der Titel als E-Book in deiner Universitätsbibliothek gratis vorliegt.",
      "Nutze das GitHub Student Developer Pack für kostenlose Entwickler-Tools.",
      "Verkaufe gelesene Fachbücher am Semesterende über Studiladen."
    ]
  },
  restaurants: {
    title: "Ratgeber: Günstig Essen & Trinken für Studierende",
    intro: "Auswärts essen in der Schweiz muss nicht teuer sein. Mit Hochschulmensen, Food-Saving Apps und Studentenrabatten schont man die Geldbörse.",
    sections: [
      {
        heading: "1. Hochschulmensen nutzen",
        body: "Mensen an der ETH, UZH, UniBE, EPFL oder FHNW servieren ausgewogene Menüs ab CHF 6.50 bis CHF 9.50."
      },
      {
        heading: "2. Too Good To Go & Foodsharing",
        body: "Mit Apps wie Too Good To Go rettest du leckere Mahlzeiten aus Bäckereien und Restaurants kurz vor Ladenschluss zum Sparpreis."
      }
    ],
    proTips: [
      "Nütze Gutschein-Coupons in Schnellrestaurants via offizieller Marken-Apps.",
      "Achte auf studentenfreundliche Mittagsmenüs in Universitätsstädten.",
      "Packe Selbstgekochtes für Mikrowellen-Stationen am Campus ein."
    ]
  },
  mode: {
    title: "Ratgeber: Mode & Kleidung mit Studentenrabatt",
    intro: "Trendy kleiden und gleichzeitig sparen: Viele internationale Modemarken und Schweizer Stores gewähren Nachlässe auf Fashion und Sneakers.",
    sections: [
      {
        heading: "1. UNiDAYS & StudentBeans Codes",
        body: "Marken wie ASOS, Nike, adidas und Levi's bieten dauerhaft 10% bis 20% Rabatt für Studierende nach Verifizierung."
      },
      {
        heading: "2. Second-Hand & Brockenhäuser in der Schweiz",
        body: "Nachhaltig und individuell: Brockis (HFL, Caritas, Zürcher Brockenhaus) bieten Vintage-Mode zu unschlagbaren Preisen."
      }
    ],
    proTips: [
      "Kombiniere Studentenrabattcodes mit Saisonsales für maximale Ersparnis.",
      "Melde dich für kostenlose Member-Clubs von Modemarken an.",
      "Verkaufe ungetragene Kleidung auf Vinted oder Tutti.ch."
    ]
  },
  gaming: {
    title: "Ratgeber: Gaming, Consoles & PC Software Rabatte",
    intro: "Gaming gehört zu den beliebtesten Freizeitbeschäftigungen. Erfahre, wie du bei Games, Konsolen und PC-Hardware in der Schweiz sparst.",
    sections: [
      {
        heading: "1. Steam, Epic Games & Studentendeals",
        body: "Digitale Spieleplattformen bieten regelmäßig Seasonsales. Kombiniere Rabatte mit Zahlungskarten ohne Auslandsgebühren."
      },
      {
        heading: "2. Hardware über Studentenprogramme",
        body: "Hersteller wie Samsung Education, Dell und Lenovo gewähren bis zu 25% Rabatt auf Gaming-Monitore, Laptops und Peripherie."
      }
    ],
    proTips: [
      "Nutze Twitch Prime / Amazon Prime Student für monatliche Gratis-Spiele.",
      "Kaufe Guthabenkarten im Schweizer Handel während Rabattwochen.",
      "Nutze Discord und Universitäts-E-Sport-Clubs für Mitspieler."
    ]
  },
  hotels: {
    title: "Ratgeber: Günstig Übernachten in der Schweiz & Europa",
    intro: "Ob Städterise oder Kurztrip in die Berge: Unterkünfte in der Schweiz lassen sich mit Jugendherbergen und Plattformen preiswert buchen.",
    sections: [
      {
        heading: "1. Schweizer Jugendherbergen (Swiss Youth Hostels)",
        body: "Mit der Membercard der Schweizer Jugendherbergen übernachtest du an Traumlagen in der Schweiz ab ca. CHF 35.– inklusive Frühstück."
      },
      {
        heading: "2. Booking.com Genius & StudentBeans",
        body: "Reiseportale bieten 10% bis 15% Rabatt auf Unterkünfte für Studierende mit verifizierten Rabattcodes."
      }
    ],
    proTips: [
      "Achte auf Hostels mit Gästeküche zum Selberkochen.",
      "Nutze Tagesausflüge mit dem GA Night statt Übernachtungen.",
      "Buche Unterkünfte außerhalb der Hochsaison."
    ]
  },
  events: {
    title: "Ratgeber: Festivaltickets, Party & Kulturangebote",
    intro: "Konzerte, Openairs und Studentenfeste sind Highlights im Schweizer Studienjahr. Spare beim Ticketkauf für deine Lieblings-Events.",
    sections: [
      {
        heading: "1. Openair-Rabatte & Helfer-Einsätze",
        body: "Viele Schweizer Openairs (Gurtenfestival, OpenAir St. Gallen, Royal Arena) bieten vergünstigte Anwohnertickets oder Gratis-Eintritt für Helfer."
      },
      {
        heading: "2. Studentenevents & Vorverkauf",
        body: "Fachvereine und Studentenverbindungen organisieren legendäre Partys mit fairen Getränkepreisen und kostenlosem Eintritt."
      }
    ],
    proTips: [
      "Kaufe Tickets im offiziellen Vorverkauf, um Wucherpreise zu vermeiden.",
      "Nutze SBB RailAway Kombi-Angebote mit Rabatt auf Zug und Event-Ticket.",
      "Folge Fachvereins-Kanälen auf Instagram für Ticket-Verlosungen."
    ]
  },
  shopping: {
    title: "Ratgeber: Alltagseinkäufe, Haushalt & Lifestyle",
    intro: "Von Lebensmitteln bis zu Drogerieartikeln: Wer im Alltag in der Schweiz klug einkauft, spart aufs Jahr gerechnet beträchtliche Summen.",
    sections: [
      {
        heading: "1. Cumulus & Supercard Vorteilsprogramme",
        body: "Migros Cumulus und Coop Supercard sammeln Punkte, die sich direkt in Einkaufsgutscheine umwandeln lassen."
      },
      {
        heading: "2. Eigenmarken statt Markenprodukte",
        body: "M-Budget (Migros), Prix Garantie (Coop) sowie Denner, Aldi und Lidl bieten hervorragende Qualität zu einem Bruchteil des Markenpreises."
      }
    ],
    proTips: [
      "Kaufe frische Produkte samstags vor Ladenschluss mit 50% Rabatt-Klebern.",
      "Nutze Einkaufslisten, um Spontankäufe zu vermeiden.",
      "Nütze die Caritas Markt Angebote bei schmalem Budget."
    ]
  },
  gratis: {
    title: "Ratgeber: Kostenlose Angebote in der Schweiz",
    intro: "Es gibt Dinge im Leben, die tatsächlich keinen Rappen kosten. Wir listen alle echten Gratisproben, gebührenfreien Services und Geschenke.",
    sections: [
      {
        heading: "1. Gebührenfreie Konten & Gratis-Mitgliedschaften",
        body: "Schweizer Neobanken und Hochschul-Sportverbände bieten kostenlose Zugänge und Gratis-Kreditkarten."
      },
      {
        heading: "2. Geburtsgeschenke & Willkommens-Boni",
        body: "Viele Schweizer Unternehmen schenken Neukunden unter 30 Willkommensgutscheine, Produkte oder Testmonate."
      }
    ],
    proTips: [
      "Prüfe stets, ob bei Gratis-Testphasen eine automatische Verlängerung droht und kündige rechtzeitig.",
      "Nutze Wegwerf-E-Mails für Newsletter-Gratisgeschenke.",
      "Teile funktionierende Gratisdeals in deiner Community."
    ]
  }
};

export function getCategoryGuide(slug: string): CategoryGuide | null {
  if (!slug) return null;
  const key = slug.toLowerCase();
  return CATEGORY_GUIDES[key] || null;
}
