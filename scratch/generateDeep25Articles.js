const fs = require('fs');

const makeArticle = (id, slug, title, excerpt, category, image_url, sections, faqs) => {
  let content = `# ${title}\n\n${excerpt}\n\n---\n\n`;
  sections.forEach((sec, idx) => {
    content += `## ${idx + 1}. ${sec.heading}\n${sec.body}\n\n---\n\n`;
  });
  content += `## Häufige Fragen (FAQ)\n\n`;
  faqs.forEach((faq) => {
    content += `### ${faq.q}\n${faq.a}\n\n`;
  });
  return {
    id,
    slug,
    title,
    excerpt,
    category,
    image_url,
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content
  };
};

const articles = [
  makeArticle(
    "a1111111-1111-4111-a111-111111111111",
    "spartipps-studenten-schweiz-2026",
    "10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)",
    "Die Schweiz gilt als teures Pflaster – doch wer die richtigen Kniffe kennt, spart im Studium und Alltag tausende Franken pro Jahr. Hier sind die 10 effektivsten Spartipps.",
    "Finanzen",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Mobilität clever nutzen: Halbtax Jugend & GA Night",
        body: "Der öffentliche Verkehr in der Schweiz (SBB, PostAuto und städtische Verkehrsbetriebe) ist erstklassig, aber regulär kostspielig. Für Jugendliche unter 25 Jahren kostet das Halbtax Jugend nur CHF 120.– pro Jahr (Folgejahr CHF 100.–). Kombiniert mit dem GA Night für CHF 99.– fährst du ab 19:00 Uhr auf dem gesamten SBB-Netz und bei fast allen Privatbahnen kostenlos in der 2. Klasse. Dies spart im Jahr rasch mehr als CHF 600.– an Fahrtkosten."
      },
      {
        heading: "Mensa und Food-Sharing statt Restaurant",
        body: "Ein Restaurantbesuch in Zürich, Bern oder Genf kostet schnell CHF 25.– bis CHF 35.– pro Mahlzeit. Nutze die universitären Mensen (UZH, ETH, UniBE, EPFL, UniFR), wo Studentengerichte meist zwischen CHF 6.50 und CHF 9.50 liegen. Apps wie Too Good To Go ermöglichen es ausserdem, Restaurant- und Bäckereiessen kurz vor Ladenschluss für ein Drittel des Preises (ab CHF 4.90) zu retten."
      },
      {
        heading: "Krankenkassen-Prämienverbilligung (IPV) beantragen",
        body: "Der wohl grösste Hebel für junge Schweizer: Fast alle Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Prämienverbilligung auf die obligatorische Grundversicherung. In Kantonen wie Zürich, Bern oder Waadt beträgt die Reduktion oft bis zu 80% der Grundversicherungsprämie. Wichtig: Die Antragsfristen variieren je nach Kanton (meist bis 31. März oder 31. Dezember)."
      },
      {
        heading: "Kostenloses Bankkonto mit Jugend-Bonus",
        body: "Zahle niemals Kontoführungsgebühren! Schweizer Banken bieten tolle Konditionen für junge Kunden. Neobanken wie Neon oder Yuh bieten kostenlose Konten mit günstigen Auslandstransaktionen und ohne Kartengebühren. Kantonalbanken (z.B. ZKB young, BCV, BEKB) bieten Gratis-Girokonten inklusive Kinorabatttag oder vergünstigten Festival-Tickets."
      },
      {
        heading: "Technik über Projekt Neptun & Apple Education kaufen",
        body: "Vor Semesterbeginn sollten Laptops und Tablets niemals zum Vollpreis gekauft werden. Projekt Neptun bietet dreimal jährlich Schweizer Hochschullaptops (MacBook, Lenovo ThinkPad, HP) mit Rabatten von 15% bis 40% an. Im Apple Education Store erhalten Studierende dauerhaft ca. 10% Rabatt auf Macs und iPads mit gültiger Legi."
      },
      {
        heading: "Hochschulsport nutzen (ASVZ, UNISPORT)",
        body: "Fitnessstudio-Mitgliedschaften kosten in der Schweiz oft CHF 800.– bis CHF 1'200.– pro Jahr. Universitäre Sportverbände wie der ASVZ in Zürich oder UNISPORT in Bern und Basel sind im Semesterbeitrag enthalten oder kosten nur eine kleine Jahresgebühr. Viele Krankenkassen-Zusatzversicherungen erstatten zudem bis zu CHF 500.– an Fitnessbeiträge zurück."
      },
      {
        heading: "WGs und Genossenschaften (WOKO, JUWO)",
        body: "Mieten für Einzelwohnungen sind extrem teuer. Nutze Plattformen wie wgzimmer.ch oder studentische Wohnbaugenossenschaften (WOKO in Zürich, WoVe in Basel, StuWo in Luzern), wo Zimmer ab CHF 500.– inklusive Nebenkosten angeboten werden."
      },
      {
        heading: "Buchrabatte & Bibliotheksnetz Swisscovery",
        body: "Nutze deine Switch edu-ID, um über Swisscovery kostenlosen Zugriff auf Millionen wissenschaftlicher Bücher und E-Books aller Schweizer Hochschulbibliotheken zu erhalten. Kaufe Fachbücher gebraucht über Studiladen oder nutze Verlegerrabatte von 10% bis 15%."
      },
      {
        heading: "Supermarkt-Eigenmarken & Rabatt-Aktionen",
        body: "Kaufe Eigenmarken wie M-Budget (Migros) oder Prix Garantie (Coop) statt teurer Markenprodukte. Samstags kurz vor Ladenschluss kennzeichnen Schweizer Supermärkte frische Produkte mit 25% bis 50% Rabatt-Klebern."
      },
      {
        heading: "Vorteilskarten & UNiDAYS nutzen",
        body: "Registriere dich kostenlos bei UNiDAYS oder StudentBeans für 10% bis 20% Rabatt bei Marken wie ASOS, Nike, adidas und Levi's. Prüfe bei schmalem Budget den Anspruch auf die Caritas KulturLegi für bis zu 70% Rabatt auf Kultur und Sport."
      }
    ],
    [
      { q: "Wie viel Geld kann man durch diese Spartipps im Jahr sparen?", a: "Ein durchschnittlicher Student in der Schweiz kann durch die Kombination von ÖV-Abos, IPV Prämienverbilligung, Gratiskonten und Mensa-Nutzung realistisch CHF 2'000.– bis CHF 4'000.– pro Jahr sparen." },
      { q: "Wo finde ich weitere aktuelle Rabattcodes?", a: "Auf JungVorteil veröffentlichen wir täglich geprüfte Gutscheine, Rabattcodes und Sonderaktionen für junge Erwachsene in allen Schweizer Kantonen." }
    ]
  ),
  makeArticle(
    "a2222222-2222-4222-a222-222222222222",
    "sbb-ov-guide-jugendliche",
    "SBB & ÖV Guide: Halbtax, GA Night & GA Jugend im Vergleich",
    "Welches Zug-Abo lohnt sich für Jugendliche und Studierende in der Schweiz wirklich? Ein umfassender Vergleich von Preisen, Konditionen und Spartipps.",
    "Reisen",
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Halbtax Jugend (bis 25 Jahre)",
        body: "Das Halbtax halbiert den Preis für fast alle Strecken der SBB, PostAuto, Trams, Busse und vieler Bergbahnen. Für Jugendliche unter 25 Jahren kostet das Halbtax Jugend im ersten Jahr CHF 120.– (Folgejahr CHF 100.–). Es amortisiert sich bereits ab 3 bis 4 Fahrten zwischen Schweizer Grossstädten."
      },
      {
        heading: "GA Night (ehemals Seven25)",
        body: "Mit dem GA Night reisen Jugendliche unter 25 Jahren ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) völlig unbeschränkt in der 2. Klasse im gesamten SBB-Streckennetz. Der Jahrespreis beträgt unschlagbare CHF 99.–."
      },
      {
        heading: "GA Jugend & GA Studierende (16–25 / 25–30 Jahre)",
        body: "Das Generalabonnement (GA) gewährt rund um die Uhr freie Fahrt im gesamten Schweizer ÖV. Das GA Jugend (unter 25 Jahre) kostet CHF 2'900.– pro Jahr [TODO_VERIFY: Exakter aktueller GA Jugend Jahrespreis für 2026 bestätigen]. Das GA Studierende für Immatrikulierte zwischen 25 und 30 Jahren kostet CHF 3'450.– pro Jahr [TODO_VERIFY: Exakter aktueller GA Studierende Tarif 2026 bestätigen]."
      },
      {
        heading: "Spartipps für Gelegenheitsfahrer: Sparbillette & Gemeindekarten",
        body: "Über die SBB Mobile App werden bis zu 60 Tage im Voraus Sparbillette freigeschaltet, die bis zu 70% Rabatt bieten. Zudem bieten viele Schweizer Wohngemeinden die Spartageskarte Gemeinde für Einwohner ab CHF 39.– an."
      }
    ],
    [
      { q: "Gilt das GA Night auch in Tram und Bus?", a: "Ja! Das GA Night gilt in den meisten städtischen Zonen (wie ZVV in Zürich oder BERNMOBIL) ab 19:00 Uhr für Busse, Trams und Nacht-S-Bahnen." },
      { q: "Wie lade ich das Abo auf den Swisspass?", a: "Das Abo wird nach dem Kauf automatisch mit deiner Swisspass-Karte verknüpft und kann digital in der SBB Mobile App vorgezeigt werden." }
    ]
  ),
  makeArticle(
    "a3333333-3333-4333-a333-333333333333",
    "krankenkasse-praemienverbilligung-schweiz",
    "Krankenkassen-Prämienverbilligung (IPV): So beantragen Studierende Geld vom Kanton",
    "Wusstest du, dass dir als Student in der Schweiz monatlich hunderte Franken Prämienverbilligung zustehen können? Ein Schritt-für-Schritt Ratgeber.",
    "Finanzen",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Anspruchsvoraussetzungen für Jugendliche & Studierende",
        body: "Die Prämienverbilligung richtet sich nach dem steuerbaren Einkommen und Vermögen des Vorjahres. Bei Studierenden unter 25 Jahren wird in manchen Kantonen das Elterneinkommen mitberücksichtigt, es sei denn, man führt einen eigenen Haushalt und ist finanziell unabhängig. Ab 25 Jahren zählt ausschliesslich das eigene Einkommen."
      },
      {
        heading: "Kantonale Besonderheiten im Überblick",
        body: "Kanton Zürich: Die SVA Zürich berechnet die Verbilligung automatisch oder per Online-Formular [TODO_VERIFY: Exakte maximale IPV Prozentquote im Kanton Zürich für 2026 bestätigen]. Kanton Bern: Der Antrag wird einfach über das Steuerportal TaxMe eingereicht. Kanton Waadt & Genf: Hier erfolgt die Zuteilung oft direkt anhand der kantonalen Steuerveranlagung."
      },
      {
        heading: "Schritt-für-Schritt Anleitung zur Antragstellung",
        body: "1. Reiche deine Steuererklärung für das Vorjahr fristgerecht ein. 2. Informiere dich auf der Website der Sozialversicherungsanstalt (SVA) deines Wohnkantons über die Antragsfrist (meist 31. März oder 31. Dezember). 3. Fülle das Online-Formular für IPV aus und lade Immatrikulationsbestätigung sowie Lohnausweise hoch."
      }
    ],
    [
      { q: "Wird die Prämienverbilligung direkt an mich verwiesen?", a: "Nein, in den meisten Kantonen überweist die SVA den Verbilligungsbetrag direkt an deine Krankenkasse. Deine monatliche Prämie reduziert sich dadurch automatisch." },
      { q: "Muss man die IPV zurückzahlen?", a: "Nein, die Prämienverbilligung ist eine staatliche Beihilfe und muss bei rechtmässigem Bezug nicht zurückgezahlt werden." }
    ]
  ),
  makeArticle(
    "a4444444-4444-4444-a444-444444444444",
    "studenten-leben-zuerich-budget-guide",
    "Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende",
    "Zürich ist eine der teuersten Städte der Welt. Doch mit den richtigen Adressen, der ASVZ-Sportkarte und günstigen Mensen lässt sich das Leben an der Limmat geniessen.",
    "Studium",
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Günstig Wohnen in Zürich: WOKO, JUWO & WGs",
        body: "Der Zürcher Wohnungsmarkt ist extrem kompetitiv. Die wichtigsten Anlaufstellen für Bezahlbares Wohnen sind die WOKO (Studentische Wohngenossenschaft) mit Zimmern ab CHF 500.– bis CHF 750.– inklusive Nebenkosten sowie das JUWO (Jugendwohnnetz) für Zwischennutzungen unter 28 Jahren. Ergänzend lohnt sich die tägliche Suche auf wgzimmer.ch."
      },
      {
        heading: "Sport & Gesundheit: Der ASVZ Vorteil",
        body: "Für immatrikulierte Studierende von UZH, ETH und ZHAW ist der Akademische Sportverband Zürich (ASVZ) im Semesterbeitrag enthalten. Du erhältst kostenlosen Zugang zu 5 grossen Fitnesszentren (Polyterrasse, Irchel, Fluntern, Hönggerberg, Winterthur), Saunen, Kletterwänden und hunderten Gruppenkursen von Yoga bis Kickboxen."
      },
      {
        heading: "Verpflegung & Campus-Mensen",
        body: "Die Mensen an ETH Polyterrasse und UZH Irchel bieten nahrhafte Tagesgerichte für CHF 6.90 bis CHF 9.50. Im Sommer verlagert sich das studentische Leben an die Wiesen im Irchelpark oder das Oberer Letten Limmatufer für Grillabende und Picknicks."
      },
      {
        heading: "ÖV, ZVV & Ausgehen im Zürcher Nachtleben",
        body: "Mit der Kombination aus ZVV Zonen-Abo und dem SBB GA Night reist du ab 19:00 Uhr im gesamten Kanton Zürich kostenlos. Montags bieten Blue Cinema und Pathé Kinos Tickets für CHF 14.– gegen Vorzeigen der Legi an."
      }
    ],
    [
      { q: "Wie hoch sind die monatlichen Lebenshaltungskosten in Zürich?", a: "Ein durchschnittlicher Student in Zürich benötigt pro Monat ca. CHF 1'600.– bis CHF 2'100.– (inklusive Miete, Krankenkasse, Verpflegung und ÖV)." },
      { q: "Bietet die Kantonalbank Zürich spezielle Vorteile?", a: "Ja, die Zürcher Kantonalbank bietet mit dem zkb young Paket kostenlose Konten und vergünstigte ZKB Nachtschwärmer-Tickets im ZVV." }
    ]
  ),
  makeArticle(
    "a5555555-5555-4555-a555-555555555555",
    "handy-internet-abos-jugendliche-vergleich",
    "Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich",
    "Brauchst du unlimitiertes 5G-Datenvolumen in der Schweiz und Roaming in Europa? Wir vergleichen die besten Jugendtarife der führenden Telekom-Anbieter.",
    "Technik",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Swisscom blue Mobile Youth",
        body: "Swisscom bietet das stärkste Mobilfunknetz der Schweiz. Mit dem blue Mobile Youth Abo erhalten Personen unter 30 Jahren 5G-Speed und inklusive EU-Roaming zu reduzierten Monatspreisen [TODO_VERIFY: Exakter Swisscom blue Mobile Youth Aktionspreis 2026 prüfen]."
      },
      {
        heading: "Sunrise Up Mobile Youth",
        body: "Sunrise gewährt pauschal 50% Rabatt auf viele Tarife für Jugendliche unter 30 Jahren. Das Abo Up Mobile Youth beinhaltet unlimitiertes Surfen und Telefonieren in der Schweiz für ca. CHF 29.50 im Monat [TODO_VERIFY: Aktuelle Promo-Konditionen Sunrise 2026 bestätigen]."
      },
      {
        heading: "Salt Youth & Prepaid-Alternativen (Wingo, Yallo)",
        body: "Salt Youth punktet mit fairen Konditionen ab CHF 24.95 pro Monat [TODO_VERIFY: Aktuelle Salt Youth Abo-Gebühr 2026 prüfen]. Wer maximale Flexibilität sucht, wählt Wingo oder Yallo mit monatlicher Kündbarkeit im Swisscom- bzw. Sunrise-Netz."
      },
      {
        heading: "Tipps beim Abo-Wechsel",
        body: "Achte beim Abschluss darauf, dass die Aktivierungsgebühr (normalerweise CHF 59.–) entfällt. Nutze die kostenlose Rufnummernportierung, die in der Schweiz gesetzlich verankert ist."
      }
    ],
    [
      { q: "Muss ich meine Legi vorzeigen?", a: "Nein, für Jugendtarife (unter 30 Jahre) reicht der Nachweis des Geburtsdatums per Personalausweis oder Pass." },
      { q: "Gibt es Mindestvertragsdauern?", a: "Viele Promo-Angebote haben 12 bis 24 Monate Laufzeit, während Anbieter wie Wingo oder Swype monatlich kündbar sind." }
    ]
  ),
  makeArticle(
    "a6666666-6666-4666-a666-666666666666",
    "schweizer-jugend-glossar",
    "Das Schweizer Jugend- & Finanz-Glossar: Von Legi bis Säule 3a",
    "Was bedeuten Begriffe wie GA-Night, Legi, IPV, Säule 3a und WOKO? Das ultimative Nachschlagewerk für junge Leute in der Schweiz.",
    "Bildung",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Begriffe zur Ausbildung & Universität",
        body: "Legi: Der offizielle Studierendenausweis an Schweizer Hochschulen. Switch edu-ID: Die universelle digitale Identität für den Log-in an Universitäten, FHs und Bibliotheken. Mensa: Das universitäre Selbstbedienungsrestaurant mit günstigen Studententarifen. Projekt Neptun: Dreimal jährliche Rabatt-Aktion für Laptops an Schweizer Hochschulen."
      },
      {
        heading: "Begriffe zum öffentlichen Verkehr (ÖV)",
        body: "Halbtax: Abo der SBB, das 50% Rabatt auf fast alle ÖV-Tickets gewährt. GA (Generalabonnement): Freie Fahrt im gesamten Schweizer Streckennetz. GA Night: SBB Abo für Jugendliche unter 25 Jahren ab 19:00 Uhr abends für CHF 99.– / Jahr. Swisspass: Die rote Plastikkarte bzw. digitale App-Lösung der SBB für alle ÖV-Abos."
      },
      {
        heading: "Begriffe zu Finanzen & Wohnen",
        body: "IPV (Individuelle Prämienverbilligung): Staatlicher Kantonszuschuss zur Reduktion der monatlichen Krankenkassenprämien. Säule 3a: Die private, steuerbegünstigte Altersvorsorge in der Schweiz. WOKO / JUWO / WoVe / StuWo: Gemeinnützige Wohnorganisationen für günstiges studentisches Wohnen."
      }
    ],
    [
      { q: "Wo finde ich passende Rabatte zu diesen Begriffen?", a: "Auf JungVorteil listen wir tagesaktuelle Deals zu allen genannten Kategorien wie SBB, Banken, Laptops und Freizeit." }
    ]
  ),
  makeArticle(
    "a7777777-7777-4777-a777-777777777777",
    "studenten-leben-bern-budget-guide",
    "Studentenleben in Bern: Budget-Guide für UniBE & BFH Studierende",
    "Die Bundesstadt Bern überzeugt mit gemütlichem Flair, der Aare und exzellenten Bildungsinstituten. Mit cleverem Budgeting genießt du das Berner Leben in vollen Zügen.",
    "Studium",
    "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Wohnen in Bern: Länggasse, Breitenrain & Bümpliz",
        body: "Das studentische Leben in Bern konzentriert sich auf das Länggasse-Quartier nahe dem Hauptgebäude der Universität Bern. WG-Zimmer kosten hier zwischen CHF 550.– und CHF 800.– pro Monat. Anlaufstellen für günstigen Wohnraum bieten Studentenwohnen Bern sowie Online-Plattformen."
      },
      {
        heading: "Mensen & Kulinarik: Grosse Schanze & VonRoll",
        body: "Die Mensa Grosse Schanze bietet nahrhafte Mahlzeiten ab CHF 6.90 mit spektakulärer Aussicht auf das Berner Oberland. Am Campus VonRoll im Von-Roll-Areal servieren Mensen frische vegetarische Menüs für BFH- und UniBE-Studierende."
      },
      {
        heading: "Sport & Sommer-Klassiker: UNISPORT & Marzili",
        body: "UNISPORT Bern stellt für alle Immatrikulierten ein umfangreiches Sportprogramm von Yoga über Klettern bis zu Ruderkursen bereit. Im Sommer ist das Schwimmen in der Aare beim Marzili oder Eichholz ein unverzichtbares, 100% kostenloses Highlight."
      },
      {
        heading: "Prämienverbilligung & ÖV im Kanton Bern",
        body: "Die IPV Prämienverbilligung im Kanton Bern kann unkompliziert über das städtische TaxMe Portal beantragt werden. Für Fahrten am Abend empfiehlt sich das SBB GA Night auf dem BERNMOBIL Netz."
      }
    ],
    [
      { q: "Wie kommt man in Bern am besten voran?", a: "Mit dem Velo oder dem BERNMOBIL ÖV-Netz. Für Abendfahrten lohnt sich das SBB GA Night." },
      { q: "Gibt es Kulturrabatte in Bern?", a: "Ja, im Schlachthaus Theater, im Dampfzentrale Kulturzentrum und in Berner Kinos erhalten Studierende Vergünstigungen." }
    ]
  ),
  makeArticle(
    "a8888888-8888-4888-a888-888888888888",
    "studenten-leben-basel-budget-guide",
    "Studentenleben in Basel: Budget-Guide für UniBasel Studierende",
    "Basel als Kultur- und Life-Science-Metropole: Wie Studierende an der Universität Basel günstig wohnen, einkaufen und die Freizeit gestalten.",
    "Studium",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Wohnen & Grenzüberschreitender Einkauf",
        body: "Der Verein Studentisches Wohnen (WoVe) vermittelt preiswerte WG-Zimmer in Basel-Stadt und Basel-Landschaft ab CHF 500.–. Ein grosser Pluspunkt Basels ist die Lage im Dreiländereck: Einkäufe im benachbarten Weil am Rhein (DE) oder St. Louis (FR) schonen das Lebensmittel-Budget massiv."
      },
      {
        heading: "Kultur- & Museumsvielfalt",
        body: "Basel zählt über 40 Museen. Personen unter 26 Jahren und Studierende geniessen in vielen Museen stark reduzierte Eintrittspreise oder am ersten Sonntag im Monat kostenlosen Zutritt. Die KulturLegi Basel bietet zudem bis zu 70% Rabatt auf Konzert- und Theaterkarten."
      },
      {
        heading: "Uni Sport Basel & Rheinschwimmen",
        body: "Der Uni Sport Basel bietet über 100 Sportarten in modernen Sporthallen und Outdooranlagen. Im Sommer trifft man sich am Rheinbord mit dem legendären Wickelfisch zum Rheinschwimmen."
      }
    ],
    [
      { q: "Welches ÖV-Abo nutzt man in Basel?", a: "Der Tarifverbund TNW deckt die Nordwestschweiz ab und bietet attraktive Jugendabos für Trams und Busse." }
    ]
  ),
  makeArticle(
    "a9999999-9999-4999-a999-999999999999",
    "studenten-leben-genf-budget-guide",
    "Studentenleben in Genf: Budget-Guide für UniGE Studierende",
    "Genf ist ein internationaler Hub. Entdecke, wie Studierende an der UniGE günstig wohnen, essen und unterwegs sind.",
    "Studium",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Campus UniGE & Wohnen in Genf",
        body: "Die Université de Genève (UniGE) erstreckt sich über die Standorte Uni Mail, Uni Dufour und Les Bastions. Günstiger Wohnraum wird über das Bureau des Logements UniGE vermittelt. WG-Zimmer kosten im Schnitt CHF 600.– bis CHF 900.–."
      },
      {
        heading: "Verpflegung & TPG ÖV-Netz",
        body: "Die universitären Mensen bieten ausgewogene Tagesgerichte ab CHF 7.00. Das Bus- und Tramnetz der Transports Publics Genevois (TPG) bietet Junior-Abos für Personen unter 25 Jahren."
      },
      {
        heading: "Freizeit am Genfersee & Bains des Pâquis",
        body: "Die Bains des Pâquis direkt am See sind im Sommer und Winter der Treffpunkt für erschwingliche Mahlzeiten, Fondue und Entspannung am Wasser."
      }
    ],
    [
      { q: "Wo beantragt man die Prämienverbilligung in Genf?", a: "Die IPV wird in Genf über den Service de l'assurance-maladie (SAM) abgewickelt." }
    ]
  ),
  makeArticle(
    "b1111111-1111-4111-b111-111111111111",
    "studenten-leben-lausanne-budget-guide",
    "Studentenleben in Lausanne: UNIL & EPFL Campus Guide",
    "Lausanne am Genfersee beherbergt die EPFL und die UNIL. Erfahre alles über das Sportzentrum Dorigny und günstige ÖV-Tarife.",
    "Studium",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Campus Dorigny & EPFL Rolex Learning Center",
        body: "Der Campus von UNIL und EPFL liegt malerisch direkt am Genfersee. Das Rolex Learning Center bietet rund um die Uhr kostenlose Lernplätze, während das Centre Sportif Dorigny zu den spektakulärsten Hochschul-Sportanlagen Europas zählt."
      },
      {
        heading: "Wohnen & ÖV mit FMEL & Mobilis Vaud",
        body: "Die Fondation vaudoise pour le logement méritant (FMEL) betreibt moderne Wohnheime für Studierende. Der Tarifverbund Mobilis bietet Jugend-Monatskarten für die steile Métro m2 und Busse."
      }
    ],
    [
      { q: "Was kostet das Sportangebot an der EPFL/UNIL?", a: "Für immatrikulierte Studierende der UNIL und EPFL ist der Zugang zu den Sportanlagen in Dorigny kostenlos." }
    ]
  ),
  makeArticle(
    "b2222222-2222-4222-b222-222222222222",
    "studenten-leben-luzern-budget-guide",
    "Studentenleben in Luzern: UniLu & HSLU Budget Guide",
    "Studieren in der Zentralschweiz: Wie Studierende an der Universität Luzern und HSLU günstig wohnen und Sport treiben.",
    "Studium",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Campus Inseliquai & HSLU Sport",
        body: "Die Universität Luzern liegt direkt am Vierwaldstättersee beim Hauptbahnhof. Das Sportangebot der HSLU bietet vergünstigte Skitage, Segelkurs-Angebote auf dem See und moderne Fitnesszentren."
      },
      {
        heading: "Wohnen & Passepartout ÖV",
        body: "Studentenwohnen Luzern (StuWo) bietet bezahlbare WG-Zimmer. Der Tarifverbund Passepartout gewährt Ermässigungen für Jugendliche auf Bus und Bahn in Luzern, Obwalden und Nidwalden."
      }
    ],
    [
      { q: "Gibt es Kulturrabatte in Luzern?", a: "Ja, im KKL Luzern und im Verkehrshaus erhalten Studierende gegen Vorzeigen der Legi attraktive Nachlässe." }
    ]
  ),
  makeArticle(
    "b3333333-3333-4333-b333-333333333333",
    "studenten-leben-st-gallen-budget-guide",
    "Studentenleben in St. Gallen: HSG & OST Campus Guide",
    "Die Universität St. Gallen (HSG) und die OST Fachhochschule: Ein Leitfaden für preiswertes Wohnen und Einkaufen in der Ostschweiz.",
    "Studium",
    "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Campus Rosenberg & Unisport HSG",
        body: "Die renommiere Universität St. Gallen (HSG) liegt auf dem Rosenberg. Der Unisport HSG stellt ein erstklassiges Fitnesscenter und Kurse zur Verfügung. Die OST Fachhochschule befindet sich direkt beim Bahnhof."
      },
      {
        heading: "Günstige Mieten & OSTWIND ÖV",
        body: "WG-Zimmer in St. Gallen sind mit CHF 450.– bis CHF 650.– deutlich günstiger als in Zürich. Der Tarifverbund OSTWIND bietet reduzierte Monatskarten für Studierende."
      }
    ],
    [
      { q: "Wie teuer ist das Wohnen in St. Gallen im Vergleich zu Zürich?", a: "Ein WG-Zimmer in St. Gallen ist im Schnitt 30% bis 40% günstiger als in Zürich." }
    ]
  ),
  makeArticle(
    "b4444444-4444-4444-b444-444444444444",
    "studenten-leben-winterthur-budget-guide",
    "Studentenleben in Winterthur: ZHAW Campus Guide",
    "Winterthur ist das ZHAW-Zentrum. Erfahre alles über Sulzer-Areal, ASVZ Winterthur und günstige Freizeitangebote.",
    "Studium",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Sulzer-Areal & ASVZ Winterthur",
        body: "Die ZHAW nutzt im Sulzer-Areal moderne Vorlesungs- und Bibliotheksgebäude. ZHAW-Studierende haben vollen Zugang zu den ASVZ Sport Centern in Winterthur und Zürich."
      },
      {
        heading: "ÖV-Anbindung & Freizeit",
        body: "Mit der ZVV S-Bahn erreicht man Zürich HB in 15 Minuten. Kulturelle Highlights wie die Fotostiftung oder das Technorama bieten Studenteneintritte."
      }
    ],
    [
      { q: "Können ZHAW Studierende den ASVZ nutzen?", a: "Ja, ZHAW Studierende haben uneingeschränkten Zugang zu allen ASVZ Angeboten." }
    ]
  ),
  makeArticle(
    "b5555555-5555-4555-b555-555555555555",
    "studenten-leben-lugano-budget-guide",
    "Studentenleben in Lugano: USI & SUPSI Budget Guide",
    "Studieren im Tessin an der USI und SUPSI: Das mediterrane Studentenleben mit Sport am See und Arcobaleno ÖV-Rabatten.",
    "Studium",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Campus Lugano Viganello & Servizio Sport",
        body: "Die Università della Svizzera italiana (USI) und SUPSI bieten mediterrane Studienatmosphäre. Der Servizio Sport organisiert Wassersport auf dem Lago di Lugano und Bergtouren."
      },
      {
        heading: "Arcobaleno ÖV & Grotto-Kultur",
        body: "Der Tarifverbund Arcobaleno bietet Jugendkarten für das gesamte Tessin. Bezahlbare Tessiner Menüs finden Studierende in traditionellen Grotti."
      }
    ],
    [
      { q: "Welche Sprachen werden an der USI gesprochen?", a: "Je nach Studiengang wird auf Italienisch und Englisch unterrichtet." }
    ]
  ),
  makeArticle(
    "b6666666-6666-4666-b666-666666666666",
    "jugendkonto-vergleich-schweiz-neon-yuh-zkb",
    "Schweizer Neobanken & Jugendkonten im Vergleich: Neon, Yuh, Zak & Kantonalbanken",
    "Keine Gebühren mehr beim Bankkonto! Wir vergleichen die besten kostenlosen Jugendkonten der Schweiz.",
    "Finanzen",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Neon Free: Das beste Konto für Ausland & Alltagsgebrauch",
        body: "Neon Free bietet ein 100% gebührenfreies Girokonto mit Schweizer IBAN und kostenloser Debit Mastercard. Bei Zahlungen im Ausland verzichtet Neon im Gegensatz zu traditionellen Banken auf prozentuale Fremdwährungsaufschläge."
      },
      {
        heading: "Yuh: Sparen & Trading in einer App",
        body: "Yuh (ein Joint Venture von Swissquote und PostFinance) bietet ein kostenloses Konto mit Zinsen auf Erspartes und der Möglichkeit, ab CHF 1.– in Aktien oder Kryptos zu investieren."
      },
      {
        heading: "Zak (Bank Cler) & Kantonalbanken (ZKB young, BCV, BEKB)",
        body: "Zak bietet virtuelle Unterkonten für WG-Budgets. Schweizer Kantonalbanken belohnen junge Kundinnen und Kunden mit Kinotag-Rabatten, Festival-Gutscheinen und kostenlosen Kreditkarten."
      }
    ],
    [
      { q: "Ab welchem Alter kann man ein Neon Konto eröffnen?", a: "Neon Free kann ab 16 Jahren mit Wohnsitz in der Schweiz eröffnet werden." }
    ]
  ),
  makeArticle(
    "b7777777-7777-4777-b777-777777777777",
    "krankenkasse-studenten-schweiz-leitfaden",
    "Krankenkasse für Studenten in der Schweiz: Grundversicherung & Zusatztipps",
    "Die Krankenversicherung ist in der Schweiz obligatorisch. Wie Studierende bei der Prämie sparen und das beste Modell wählen.",
    "Finanzen",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Wahl des Sparmodells (Hausarzt, Telmed, HMO)",
        body: "Wer beim Krankenversicherer vom Standardmodell auf Telmed oder ein Hausarzt-Modell wechselt, spart sofort 15% bis 20% der monatlichen Prämie. Die Erstberatung erfolgt telefonisch per App oder beim gewählten Hausarzt."
      },
      {
        heading: "Optimalen Franchise-Betrag festlegen",
        body: "Gesunde junge Menschen wählen für den maximalen Prämienrabatt die Höchstfranchise von CHF 2'500.– [TODO_VERIFY: Aktuelle Höchstfranchise der OKP 2026 bestätigen]. Wer regelmässig Behandlungen benötigt, wählt die Mindestfranchise von CHF 300.–."
      },
      {
        heading: "Krankenkassen-Beitrag an Sportabos zurückholen",
        body: "Zusatzversicherungen belohnen Bewegung: QualiCert-zertifizierte Kassen erstatten bis zu CHF 500.– pro Jahr an universitäre Sportclubs (ASVZ, UNISPORT) oder Fitnessstudios."
      }
    ],
    [
      { q: "Können ausländische Studierende von der Schweizer OKP befreit werden?", a: "Ja, Studierende aus der EU/EFTA mit einer Europäischen Krankenversicherungskarte (EKVK) können auf Antrag von der Schweizer Versicherungspflicht befreit werden." }
    ]
  ),
  makeArticle(
    "b8888888-8888-4888-b888-888888888888",
    "semesterstart-leitfaden-schweiz",
    "Semesterstart Guide: Die wichtigsten Checklisten vor Vorlesungsbeginn",
    "Der ultimative Leitfaden für Erstsemestrige in der Schweiz: Von der Legi über den Laptop-Kauf bis zum Bibliotheksausweis.",
    "Studium",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Die 5 wichtigsten IT- & Verwaltungs-Schritte",
        body: "1. Switch edu-ID Konto aktivieren für WLAN (eduroam) und Unimail. 2. Studierendenausweis (Legi) validieren. 3. Laptop beim Projekt Neptun bestellen für bis zu 40% Rabatt. 4. SBB Halbtax oder GA Night auf den Swisspass laden. 5. IPV Prämienverbilligung beim Wohnkanton prüfen."
      }
    ],
    [
      { q: "Wo erhalte ich meine Legi?", a: "Die Legi wird dir nach der Immatrikulation von deiner Universität per Post zugestellt oder digital in der Hochschul-App freigeschaltet." }
    ]
  ),
  makeArticle(
    "b9999999-9999-4999-b999-999999999999",
    "black-friday-studentenrabatte-schweiz",
    "Black Friday & Cyber Monday für Studenten in der Schweiz: Die besten Deals",
    "So nutzt du die grössten Rabattwochen des Jahres bei Digitec, Apple, Zalando und SBB optimal.",
    "Shopping",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Elektronik & Abo-Deals im November",
        body: "Digitec, Brack und Microspot bieten am Black Friday Monitore, Zubehör und Laptops mit bis zu 50% Rabatt. Mobilfunkanbieter wie Swisscom, Sunrise und Salt erlassen während der Rabattwoche meist die vollen Aktivierungsgebühren."
      }
    ],
    [
      { q: "Gelten Studentenrabatte auch am Black Friday?", a: "Bei vielen Händlern lassen sich UNiDAYS Rabatt-Codes mit Black Friday Preisen kombinieren." }
    ]
  ),
  makeArticle(
    "c1111111-1111-4111-c111-111111111111",
    "sommer-spartipps-studenten-schweiz",
    "Schweizer Sommer auf Sparflamme: Badeseen, Grillen & Openairs",
    "Der Schweizer Sommer ist traumhaft. So geniessest du Aare, Zürisee und Festivals mit minimalem Budget.",
    "Reisen",
    "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Gratis-Badeseen, Rheinschwimmen & Grillstellen",
        body: "Rheinschwimmen in Basel mit dem Wickelfisch und Aareschwimmen in Bern sind 100% kostenlos. Gemeinden stellen an Schweizer Seen offizielle Grillstellen mit Holz bereit. Wer auf Festivals will, meldet sich als Helfer für Gratiseintritt."
      }
    ],
    [
      { q: "Wo darf man in der Schweiz frei grillen?", a: "An allen öffentlich gekennzeichneten Schweizer Familie Grillstellen mit Holzvorrat." }
    ]
  ),
  makeArticle(
    "c2222222-2222-4222-c222-222222222222",
    "fallstudie-studenten-budget-reales-beispiel",
    "Fallstudie: Wie Studentin Sarah in Zürich 2'400 CHF pro Jahr spart",
    "Ein konkretes Rechenbeispiel: So kombiniert eine UZH-Studentin SBB GA Night, Neon Konto, IPV und Projekt Neptun.",
    "Finanzen",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Sarahs konkrete Ersparnis im Detail",
        body: "SBB Halbtax + GA Night: CHF 450.– Ersparnis. IPV Prämienverbilligung SVA Zürich: CHF 1'200.– Ersparnis [TODO_VERIFY: Exakten IPV Betrag Sarah Fallbeispiel bestätigen]. Neon Free Konto: CHF 120.– Ersparnis. Projekt Neptun Laptop: CHF 350.– Rabatt. ASVZ Sport: CHF 300.– Ersparnis. Total: CHF 2'420.– Ersparnis pro Jahr!"
      }
    ],
    [
      { q: "Wie lange dauert die Einrichtung dieser Rabatte?", a: "Die einmalige Einrichtung dauert insgesamt ca. 2 bis 3 Stunden online." }
    ]
  ),
  makeArticle(
    "c3333333-3333-4333-c333-333333333333",
    "vorteilskarten-schweiz-isic-kulturlegi-museumspass",
    "Vorteilskarten im Vergleich: ISIC, KulturLegi & Schweizer Museumspass",
    "Welche Ausweise und Rabattkarten lohnen sich für Jugendliche und Studierende in der Schweiz wirklich?",
    "Bildung",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "ISIC, KulturLegi & Museumspass im Vergleich",
        body: "ISIC Card: International anerkannter Studentenausweis für Auslandsrabatte [TODO_VERIFY: Aktuelle ISIC Jahresgebühr 2026 bestätigen]. Caritas KulturLegi: Bis zu 70% Rabatt auf Kultur und Sport bei geringem Einkommen. Schweizer Museumspass: Freier Eintritt in 500+ Museen [TODO_VERIFY: Aktueller Schweizer Museumspass Studententarif 2026 bestätigen]."
      }
    ],
    [
      { q: "Reicht der normale Studentenausweis (Legi)?", a: "In der Schweiz reicht die Legi für 90% aller Rabatte vollkommen aus." }
    ]
  ),
  makeArticle(
    "c4444444-4444-4444-c444-444444444444",
    "wg-zimmer-finden-schweiz-tipps",
    "WG-Zimmer finden in Zürich, Bern & Basel: Die besten Plattformen",
    "Günstigen Wohnraum in Schweizer Universitätsstädten finden: Plattformen, Bewerbungstipps und Fallstricke.",
    "Studium",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Plattformen & Bewerbungsdossier für WGs",
        body: "Nutze wgzimmer.ch sowie studentische Wohnbaugesellschaften (WOKO, JUWO, WoVe, StuWo, FMEL). Halte für Besichtigungen Betreibungsauskunft und Bewerbungsschreiben bereit."
      }
    ],
    [
      { q: "Woher bekomme ich den Betreibungsauszug?", a: "Online beim Betreibungsamt deiner Wohngemeinde für ca. CHF 17.– bis CHF 20.–." }
    ]
  ),
  makeArticle(
    "c5555555-5555-4555-c555-555555555555",
    "second-hand-brocki-schweiz-guide",
    "Brocki & Second-Hand Guide: Nachhaltig und günstig Möbel & Kleidung kaufen",
    "Schweizer Brockenhäuser bieten Möbel, Geschirr und Vintage-Kleidung für WG-Einrichtungen zum Schnäppchenpreis.",
    "Shopping",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Brockenhäuser & Online-Gebrauchtmarkt",
        body: "Heilsarmee Brocki und Caritas Märkte bieten geprüfte Möbel und Geschirr ab CHF 5.–. Auf Tutti.ch und Anibis.ch findet man Gratis-Abholungen in der Nähe."
      }
    ],
    [
      { q: "Kann man Möbel aus dem Brocki liefern lassen?", a: "Grosse Brockenhäuser bieten kostengünstige Lieferdienste innerhalb des Kantons an." }
    ]
  ),
  makeArticle(
    "c6666666-6666-4666-c666-666666666666",
    "nebenjob-studenten-schweiz-steuern",
    "Nebenjob & Steuern für Studierende: Freibeträge, Stundenlohn & AHV",
    "Was dürfen Studenten in der Schweiz steuerfrei verdienen? Stundenlöhne, AHV-Beiträge und arbeitsrechtliche Vorgaben.",
    "Finanzen",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Stundenlöhne, AHV & Steuerfreibeträge",
        body: "Studierenden-Stundenlöhne liegen in der Schweiz zwischen CHF 25.– und CHF 32.–. Ab dem 1. Januar nach dem 17. Geburtstag werden AHV/IV/EO Sozialabgaben abgezogen [TODO_VERIFY: Gesetzliche AHV Altersgrenze 2026 bestätigen]."
      }
    ],
    [
      { q: "Wie viel darf man steuerfrei verdienen?", a: "Bei einem Einkommen unter ca. CHF 15'000.– pro Jahr fällt meist keine Bundessteuer an." }
    ]
  ),
  makeArticle(
    "c7777777-7777-4777-c777-777777777777",
    "swisspass-tipps-tricks-jugendliche",
    "Swisspass Tipps & Tricks: Partner-Abos, Verlängerung & Kartenverlust",
    "Alles über die rote Plastikkarte der SBB: Wie du den Swisspass digital nutzt und Abo-Vorteile verknüpfst.",
    "Reisen",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    [
      {
        heading: "Digitaler Swisspass in der SBB App",
        body: "Lade deinen Swisspass in die SBB Mobile App hoch, um Billettkontrollen bequem per Smartphone-Display vorzuzeigen. Verknüpfe Skipässe, PubliBike-Leihräder und Mobility-Carsharing direkt mit deinem Swisspass-Konto."
      }
    ],
    [
      { q: "Was tun bei Verlust der Plastikkarte?", a: "Für CHF 30.– erhältst du am SBB Schalter eine Ersatzkarte; in der App bleibt der digitale Pass weiter gültig." }
    ]
  )
];

const fileContent = `// services/articles.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Article } from "@/types";

export const FALLBACK_ARTICLES: Article[] = ${JSON.stringify(articles, null, 2)};

export async function getArticles(limit = 50): Promise<Article[]> {
  if (!isSupabaseConfigured()) return FALLBACK_ARTICLES.slice(0, limit);

  try {
    const supabase = await createClient();
    const { data, error } = await Promise.race([
      supabase
        .from("articles")
        .select("*")
        .not("published_at", "is", null)
        .order("published_at", { ascending: false })
        .limit(limit),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 500)
      ),
    ]);

    if (error || !data || data.length === 0) {
      return FALLBACK_ARTICLES.slice(0, limit);
    }
    return data as Article[];
  } catch {
    return FALLBACK_ARTICLES.slice(0, limit);
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!isSupabaseConfigured()) {
    return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
  }

  try {
    const supabase = await createClient();
    const { data } = await Promise.race([
      supabase.from("articles").select("*").eq("slug", slug).maybeSingle(),
      new Promise<{ data: null }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 500)
      ),
    ]);

    if (data) return data as Article;
  } catch {
    // Fall through to fallback
  }

  return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
}
`;

fs.writeFileSync('./services/articles.ts', fileContent);
console.log('Successfully generated deep articles in services/articles.ts!');
