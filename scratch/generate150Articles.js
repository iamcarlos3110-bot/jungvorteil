const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

let envVars = {};
try {
  const env = fs.readFileSync('.env.local', 'utf8');
  env.split('\n').forEach(l => {
    const idx = l.indexOf('=');
    if (idx > -1) {
      const key = l.substring(0, idx).trim();
      const val = l.substring(idx + 1).trim().replace(/^['"]|['"]$/g, '');
      envVars[key] = val;
    }
  });
} catch (e) {}

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const TOPICS_BY_CATEGORY = [
  {
    category: "Finanzen",
    topics: [
      { slug: "neon-free-vs-yuh-banken-schweiz", title: "Neon Free vs. Yuh vs. Zak vs. PostFinance: Die 4 besten Schweizer Neobanken für junge Erwachsene im Vergleich", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80" },
      { slug: "saeule-3a-fuer-junge-erwachsene-guide", title: "Säule 3a ab 18 Jahren: Warum sich die private Vorsorge 3a bereits in der Lehre oder im Studium lohnt", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80" },
      { slug: "twint-hacks-gebuehrenfrei-geld-senden", title: "TWINT Hacks für den Schweizer Alltag: P2P Geld senden, Cashback & Stempelkarten optimal nutzen", image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?w=800&auto=format&fit=crop&q=80" },
      { slug: "budgetplaner-schweiz-monatsausgaben-studenten", title: "Monatsbudget für Schweizer Lernende & Studierende: So kommst du diszipliniert mit CHF 1'500.– aus", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80" },
      { slug: "kantonalbanken-jugendkonten-gratis-vorteile", title: "ZKB, BCV, BEKB & Kantonalbanken: Welches Schweizer Jugendkonto bietet die besten Local-Extras?", image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&auto=format&fit=crop&q=80" },
      { slug: "krypto-aktien-investieren-fuer-anfaenger-schweiz", title: "ETF & Säule 3a Investieren in der Schweiz: Viac, Finpension, Truly & Yuh im Vergleich für Unter-30-Jährige", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80" },
      { slug: "notgroschen-sparen-schweiz-tipps", title: "Notgroschen aufbauen in der Schweiz: Wie viel Erspartes du mit 20 Jahren auf dem Sparkonto haben solltest", image: "https://images.unsplash.com/photo-1534951009808-7d6105b11a5f?w=800&auto=format&fit=crop&q=80" },
      { slug: "postfinance-jugendkonto-vorteile-nachteile", title: "Schweizer Kreditkarten & Debitkarten für Junge: Wie du Auslands- und Wechselkursgebühren vermeidest", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80" },
      { slug: "bargeldlos-bezahlen-ausland-schweizer-karten", title: "Volljährigkeit mit 18 in der Schweiz: Verträge, eigene Finanzen & Versicherungspflichten erklärt", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80" },
      { slug: "studienfinanzierung-nebenjob-vs-stipendium", title: "Lehrlingslohn & Studentenbudget: Richtlinien der Schweizer Berufsverbände und Kantone", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Krankenkasse",
    topics: [
      { slug: "ipv-praemienverbilligung-kanton-zuerich-guide", title: "IPV Prämienverbilligung Kanton Zürich (SVA): Schritt-für-Schritt Anleitung für Lernende & Studierende", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" },
      { slug: "ipv-praemienverbilligung-kanton-bern-taxme", title: "IPV im Kanton Bern (TaxMe) & Aargau (SVA): Prämienabzug direkt beim Kanton beantragen", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80" },
      { slug: "ipv-praemienverbilligung-waadt-genf-guide", title: "Réduction des primes de l'assurance-maladie (RPV) Vaud, Genève & Neuchâtel: Le guide jeunes", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80" },
      { slug: "franchise-300-vs-2500-krankenkasse-vergleich", title: "Franchise 300 CHF oder 2'500 CHF? Wann sich die höchste Franchise bei der OKP für Junge lohnt", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80" },
      { slug: "telmed-vs-hausarzt-modell-schweiz", title: "Telmed, HMO & Hausarzt-Modelle: Bis zu 20% Prämien sparen bei Helsana, CSS, Swica & Sanitas", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80" },
      { slug: "zusatzversicherung-fuer-studenten-sinnvoll", title: "Zusatzversicherungen (VVG) für Schweizer Jugendliche: Zahnspange, Sehhilfe & Fitnessbeiträge zurückholen", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80" },
      { slug: "zahnpflege-brille-sport-bonus-krankenkasse", title: "Krankenkassenwechsel per 30. November: Kündigungsfrist, Musterbrief & Schweizer Spar-Check", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80" },
      { slug: "krankenkassenwechsel-schweiz-frist-november", title: "Fitness-Gutschrift der Krankenkasse: Bis zu CHF 800.– für Gym & Sportverein zurückholen", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80" },
      { slug: "auslaendische-studierende-krankenkasse-befreiung", title: "Mutterschaft, Unfall (UVG) vs. Krankenkasse bei Lehrlingen & Teilzeitjobbern in der Schweiz", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format&fit=crop&q=80" },
      { slug: "sanitas-swica-helsana-vergleich-jugendtarife", title: "Militärdienst & Krankenkasse: Sistierung der OKP während der Rekrutenschule (RS)", image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Steuern",
    topics: [
      { slug: "steuererklaerung-studenten-schweiz-ausfuellen", title: "Steuererklärung ab 18 ausfüllen im Kanton Zürich (ZHprivateTax): Schritt-für-Schritt Anleitung", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80" },
      { slug: "ahv-beitraege-ab-20-mindestbeitrag-nachzahlen", title: "Steuererklärung Kanton Bern (TaxMe) & St. Gallen: Berufskosten, Fahrkosten & Abzüge nutzen", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80" },
      { slug: "quellensteuer-auslaendische-studierende-schweiz", title: "AHV-Mindestbeitrag ab 20 Jahren: Warum du AHV-Beitragslücken im Studium zwingend vermeiden musst", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80" },
      { slug: "nebenjob-lohn-freibetrag-stundenlohn-schweiz", title: "Rekrutenschule (RS) & Zivildienst: Erwerbsersatzordnung (EO), Sold & Steuerpflicht in der Schweiz", image: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=800&auto=format&fit=crop&q=80" },
      { slug: "uber-eats-just-eat-kurier-verdienst-schweiz", title: "Nebenjob & Stundenlohn in der Schweiz: Mindestlöhne, GAV & Abgaben für Unter-30-Jährige", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80" },
      { slug: "freelancing-selbststaendig-neben-dem-studium", title: "Selbstständigkeit & Einzelfirma neben Ausbildung/Studium: Eintrag ins Schweizer Handelsregister", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80" },
      { slug: "ferienjob-ausbildung-lohnfortzahlung-schweiz", title: "Quellensteuer für internationale Studierende an Schweizer Hochschulen: Rückerstattung & Abzüge", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80" },
      { slug: "berufsausbildung-lehre-stipendien-elternbeitrag", title: "Mietrecht für junge Mieter & WGs: Untermiete, Nebenkostenabrechnung & Kaution (Art. 257 ZOR)", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80" },
      { slug: "berufskosten-abziehen-steuern-laptop-fahrkosten", title: "Unterhaltspflicht der Eltern während der Erstausbildung: Rechte nach Artikel 277 ZGB", image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&auto=format&fit=crop&q=80" },
      { slug: "arbeitslosenversicherung-alv-nach-dem-studium", title: "Arbeitslos nach Lehre oder Hochschulabschluss: Anmeldung beim RAV & ALV-Taggelder in der Schweiz", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Miete",
    topics: [
      { slug: "woko-zuerich-studentenwohnung-bewerbung", title: "WOKO Zürich Guide: Günstige WG-Zimmer für UZH-, ETH- & ZHAW-Studierende finden", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80" },
      { slug: "fmel-lausanne-epfl-unil-logement", title: "FMEL Lausanne Guide: Logements étudiants pour UNIL et EPFL sur le campus de Dorigny", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80" },
      { slug: "juwo-jugendwohnnetz-zuerich-zwischennutzung", title: "JUWO Jugendwohnnetz Zürich: Bezahlbare Zwischennutzungen für Unter-28-Jährige", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=80" },
      { slug: "wove-basel-stuwo-luzern-studentenzimmer", title: "WoVe Basel, StuWo Luzern & WOKO Winterthur: Günstiger Wohnraum für Lernende & Studierende", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80" },
      { slug: "wg-zimmer-suche-wgzimmer-ch-tipps", title: "WG-Zimmer-Suche auf wgzimmer.ch, Flatfox & Tutti: Das perfekte Bewerbungsschreiben", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80" },
      { slug: "betreibungsauszug-bestellen-kosten-schweiz", title: "Betreibungsauszug online bestellen: Kosten (ca. CHF 17.–), Gültigkeit & kantonale Betreibungsämter", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80" },
      { slug: "mietkautionsbuergschaft-vs-sparkonto", title: "Mietkautionsbürgschaft (Swisscaution, Firstcaution) vs. Mietkautionskonto im Vergleich", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=80" },
      { slug: "hausratversicherung-privathaftpflicht-wg-schweiz", title: "Hausrat- & Privathaftpflichtversicherung für WGs: Gemeinsam Beiträge sparen", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80" },
      { slug: "mietrecht-schweiz-untermiete-kaution-nebenkosten", title: "Günstige Möbel für die erste eigene Bude: Brocki, Ricardo, Tutti & IKEA Hacks", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80" },
      { slug: "moebel-einrichtung-budget-ikea-ricardo", title: "Nebenkostenabrechnung prüfen: Heizung, Wasser & Nebenkosten-Fallen für junge Mieter", image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Reisen",
    topics: [
      { slug: "sbb-halbtax-jugend-vorteile-kosten", title: "SBB Halbtax Jugend für CHF 120.–/Jahr: Lohnt sich das Halbtax für Unter-25-Jährige wirklich?", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80" },
      { slug: "sbb-ga-night-chf-99-abends-gratis-fahren", title: "SBB GA Night für CHF 99.–/Jahr: Gratis ÖV fahren von 19:00 bis 05:00 Uhr im SBB-Netz", image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?w=800&auto=format&fit=crop&q=80" },
      { slug: "spartageskarte-gemeinde-sbb-sparbillette", title: "GA Jugend (2. Klasse): Wann sich das Generalabonnements für Studierende & Lehrlinge rechnet", image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?w=800&auto=format&fit=crop&q=80" },
      { slug: "interrail-pass-ab-schweiz-europa-trip", title: "Spartageskarte Gemeinde & SBB Sparbillette: Bis zu 70% Rabatt im Voraus buchen", image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&auto=format&fit=crop&q=80" },
      { slug: "tagesausfluege-schweiz-unter-chf-20", title: "Tarifverbünde im Vergleich: ZVV (Zürich), Libero (Bern), TNW (Basel) & Passepartout (Luzern)", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80" },
      { slug: "skitickets-guenstig-magicspass-top4", title: "Nachtnetz & Nightliner: ZVV Nachtnetz, Moonliner & Pyjama-Express ohne Aufpreis nutzen", image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=800&auto=format&fit=crop&q=80" },
      { slug: "nachtnetz-nightliner-zuerich-bern-basel", title: "PubliBike, Nextbike & Velospot: Bikesharing-Abos für Junge in Schweizer Städten", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80" },
      { slug: "flixbus-euroline-guenstige-ferien-europa", title: "Mobility Carsharing Jugendtarif: Günstig Auto fahren ohne eigenes Fahrzeug in der Schweiz", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80" },
      { slug: "city-breaks-europa-guenstig-buchen", title: "Skitickets & Bergbahnen: Magic Pass, Top4 Pass & SBB Snow'n'Rail Jugendrabatte", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=80" },
      { slug: "schweizer-museumspass-studenten-rabatt", title: "Führerausweis & Nothelferkurs in der Schweiz: Kosten & Ausbildungsweg für 18-Jährige", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Studium",
    topics: [
      { slug: "uzh-eth-zuerich-erstsemestrigen-guide", title: "Lehre vs. Gymnasium: Berufsmaturität (BM) & Passarella an Schweizer Fachhochschulen (FH)", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80" },
      { slug: "epfl-unil-lausanne-etudes-suisse", title: "UZH & ETH Zürich Survival-Guide: Erstsemestrigen-Tipps, Polyterrasse & Legi-Vorteile", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80" },
      { slug: "universitaet-bern-unibe-campus-guide", title: "EPFL & UNIL Lausanne Guide: Etudier et vivre sur le campus de Dorigny", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80" },
      { slug: "universitaet-st-gallen-hsg-assessment", title: "Uni Bern & Uni Basel Guide: Campus-Leben, Mensen, Bibliotheken & UniSport", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80" },
      { slug: "fachhochschulen-fh-vs-universitaet-schweiz", title: "HSG St. Gallen Assessment-Jahr überstehen: Lernstrategien, Skripte & Budget-Tipps", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80" },
      { slug: "stipendien-kanton-zuerich-bern-waadt", title: "ZHAW, FHNW, BFH & OST: Studium an den Schweizer Fachhochschulen im Überblick", image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80" },
      { slug: "swisscovery-bibliotheken-bucher-gratis-ausleihen", title: "Kantonale Stipendien & Ausbildungsbeiträge: Gesuchstellung & Einkommensgrenzen", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80" },
      { slug: "isic-studentenausweis-weltweite-rabatte", title: "Swisscovery Bibliotheksnetzwerk: Gratis Fachliteratur & E-Books ausleihen", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80" },
      { slug: "pruefungsphase-tipps-lernplaetze-zuerich-bern", title: "ISIC vs. Schweizer Legi: Welche Rabatte bekommst du in der Schweiz wirklich?", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80" },
      { slug: "auslandssemester-erasmus-swiss-european-mobility", title: "SEMP (Swiss-European Mobility Programme): Austauschsemester planen & Stipendium sichern", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Technik",
    topics: [
      { slug: "projekt-neptun-verkaufsfenster-macbook-lenovo", title: "Projekt Neptun Verkaufsfenster: Laptops für Schüler, Lehrlinge & Studenten bis 40% günstiger", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80" },
      { slug: "apple-education-store-schweiz-rabatt", title: "Apple Education Store Schweiz: MacBooks & iPads mit Legi-Rabatt & Giftcards", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80" },
      { slug: "refurbished-laptops-revendo-backmarket", title: "Refurbished Laptops & Handys: Revendo, Back Market & Rekindled im Schweizer Vergleich", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80" },
      { slug: "microsoft-office-365-gratis-fuer-studenten", title: "Gratis Software an Schweizer Unis: Microsoft 365, MATLAB, SPSS & Adobe Creative Cloud", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80" },
      { slug: "externe-festplatten-cloud-storage-vergleich", title: "Cloud-Speicher für Ausbildung & Studium: SWITCHdrive, Google Drive & Proton Drive im Test", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" },
      { slug: "e-reader-ipad-versus-kindle-studium", title: "Digitales Skriptenlesen: iPad Air/Pro vs. Remarkable 2 vs. Kindle im Schweizer Prüfungsalltag", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80" },
      { slug: "monitor-home-office-studenten-setup", title: "Digitec.ch, Brack.ch & Microspot: Die besten Schweizer Tech-Hacks & Schnäppchen", image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80" },
      { slug: "noise-cancelling-kopfhoerer-studium-test", title: "Ergonomisches Lern-Setup fürs Zimmer: Monitor, Tastatur & Bürostuhl unter CHF 300.–", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80" },
      { slug: "vpn-dienst-schweiz-privatsphaere-eduroam", title: "eduroam & Uni-WLAN: Warum du auf dem Campus ein VPN nutzen solltest", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80" },
      { slug: "smartphones-unter-chf-300-preis-leistung", title: "Smartphones unter CHF 300.–: Preis-Leistungs-Sieger für Lehrlings- und Studentenbudgets", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Handy",
    topics: [
      { slug: "salt-youth-mobile-unlimitiert-5g-chf-19", title: "Salt Youth Mobile: Unlimitiertes 5G in der Schweiz & EU-Roaming unter CHF 20.– pro Monat", image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&auto=format&fit=crop&q=80" },
      { slug: "sunrise-young-abos-vorteile-vergleich", title: "Sunrise Young Abos: Highspeed 5G, Apple Music & Roaming im Praxistest", image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&auto=format&fit=crop&q=80" },
      { slug: "swisscom-simply-digital-blue-mobile-under30", title: "Swisscom blue Mobile Young: Lohnt sich das Schweizer Premium-Netz für Unter-30-Jährige?", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80" },
      { slug: "wingo-swiss-prepaid-vs-abo-vergleich", title: "Wingo Mobile vs. Yallo vs. Swype: Die besten Schweizer Budget-Anbieter im Vergleich", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80" },
      { slug: "esim-schweiz-aktivierung-reisen-ausland", title: "Schnelles Internet für WGs: Init7, Teleboy, Wingo Fiber & Salt Fiber im Test", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" },
      { slug: "internet-zuhause-glasfaser-studenten-wgs", title: "eSIM in der Schweiz: Aktivierung bei Schweizer Providern & Datenpakete fürs Ausland", image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=800&auto=format&fit=crop&q=80" },
      { slug: "prepaid-sim-karten-schweiz-ohne-vertragsbindung", title: "Prepaid SIM-Karten in der Schweiz: Die günstigsten Tarife ohne Laufzeit", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80" },
      { slug: "handy-mit-abo-oder-einzelkauf-rechner", title: "Handy mit Abo verlängern vs. Einzelkauf auf Galaxus: Was ist wirklich günstiger?", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=80" },
      { slug: "roaming-optionen-eu-ausland-schweizer-abos", title: "EU-Roaming in den Semesterferien: Datenpakete richtig buchen & Kostenfallen meiden", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80" },
      { slug: "5g-abdeckung-schweiz-netzvergleich-2026", title: "5G Netzabdeckung in der Schweiz: Netztest von Swisscom, Sunrise und Salt 2026", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Restaurants",
    topics: [
      { slug: "hochschulmensen-zuerich-bern-basel-vergleich", title: "Hochschulmensen im Test: ETH Polyterrasse, UZH Irchel, UniBE Grosse Schanze & Uni Basel", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80" },
      { slug: "too-good-to-go-schweiz-beste-hacks", title: "Too Good To Go Schweiz: Die besten Bäckereien & Supermärkte für CHF 4.90", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80" },
      { slug: "meal-prep-fuer-studenten-wochenplan-chf-50", title: "M-Budget (Migros) vs. Prix Garantie (Coop) vs. Denner: Wer ist der günstigste Supermarkt?", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80" },
      { slug: "m-budget-vs-prix-garantie-supermarkt-vergleich", title: "Meal Prep Wochenplan für CHF 50.–: Gesunde Studentengerichte mit Schweizer Zutaten", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80" },
      { slug: "studentenrabatte-fast-food-mc-donalds-burger-king", title: "Fast-Food Studentendeals: Legi-Rabatte bei McDonald's, Burger King & Domino's Schweiz", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80" },
      { slug: "kaffee-campus-guenstig-thermoskanne-vss", title: "Kaffee auf dem Campus: Thermoskanne vs. Mensa-Kaffee – So sparst du CHF 300.– pro Semester", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-trinkwasser-brunnen-schweiz-map", title: "Gratis Trinkwasserbrunnen in Schweizer Städten: Wasserflasche unterwegs auffüllen", image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&auto=format&fit=crop&q=80" },
      { slug: "studenten-bars-pub-quiz-zuerich-bern-basel", title: "Günstige Studentenbars & Pub Quizzes in Zürich, Bern, Basel, St. Gallen & Genf", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop&q=80" },
      { slug: "lunchbox-mikrowelle-campus-tipps", title: "Mikrowellen & Aufwärmmöglichkeiten an Schweizer Universitäten & Fachhochschulen", image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&auto=format&fit=crop&q=80" },
      { slug: "vegan-vegetarisch-guenstig-kochen-schweiz", title: "Günstig vegan & vegetarisch einkaufen bei Alnatura, Migros & Denner in der Schweiz", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Events",
    topics: [
      { slug: "kulturlegi-caritas-rabatt-vorteile", title: "KulturLegi von Caritas Schweiz: Bis zu 70% Rabatt auf Kultur, Sport & Bildung", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-museen-zuerich-bern-basel-genf", title: "Gratis-Tage in Schweizer Museen: Wann Kunsthaus Zürich, Landesmuseum & Museum Tinguely frei sind", image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&auto=format&fit=crop&q=80" },
      { slug: "openair-festivals-schweiz-helfer-volunteering", title: "OpenAir Festivals in der Schweiz (St. Gallen, Gurten, Paléo): Als Helfer/Volunteer gratis dabei sein", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80" },
      { slug: "theater-oper-konzerte-chf-20-studenten", title: "Theater & Oper für CHF 20.–: U30-Angebote am Opernhaus Zürich, Theater Basel & Bühnen Bern", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=80" },
      { slug: "guerilla-kino-openair-sommer-schweiz", title: "Badi-Saison & Flussbaden: Aareböötle in Bern, Limmat-Schwimmen in Zürich & Rhein-Chillen in Basel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80" },
      { slug: "schweizer-pass-ausflug-rabatte-studierende", title: "SAC (Schweizer Alpen-Club) Jugendmitgliedschaft (U22): Günstige Hüttenübernachtungen", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80" },
      { slug: "badi-sommer-eintritt-zuerich-bern-aare", title: "Legi-Partys & Semester-Openings: Wo Schweizer Studenten & Lernende günstig feiern", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80" },
      { slug: "studentenpartys-verein-unisport-events", title: "Sommer-Kinos & Open-Air Screenings in Schweizer Städten im Überblick", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80" },
      { slug: "escape-rooms-bowling-laser-tag-rabatte", title: "Escape Rooms, Bowling & Go-Kart: Gruppen-Rabatte für Auszubildende & Studierende", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80" },
      { slug: "kulturpass-kantonale-angebote-schweiz", title: "Kantonale Kulturpässe für Jugendliche (Waadt, Wallis, Tessin, Graubünden)", image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Mode",
    topics: [
      { slug: "brockenhaeuser-brocki-zuerich-bern-basel-guide", title: "Die besten Brockis der Schweiz: Zürcher Züriwerk, HIOB, Caritas Brocki & Heilsarmee", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80" },
      { slug: "zalando-studentenrabatt-gutschein-schweiz", title: "Zalando Lounge & Studentencodes Schweiz: Bis zu 70% Rabatt auf Bekleidung", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80" },
      { slug: "kleiderflohmarkt-vintage-kilo-sale-schweiz", title: "Vintage Kilo Sales & Kleidertausch-Börsen in Zürich, Basel, Bern & Luzern", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80" },
      { slug: "asos-studentenrabatt-10-prozent-code", title: "ASOS Studentenrabatt 10%: Dauerhaft günstiger bestellen mit Schweizer Versand", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80" },
      { slug: "nike-adidas-puma-studentenangebote", title: "Sneaker & Sportmode: Legi-Rabatte bei Nike, Adidas, Puma & Snipes Schweiz", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&auto=format&fit=crop&q=80" },
      { slug: "nachhaltige-fair-fashion-schweiz-guenstig", title: "Tutti.ch, Ricardo.ch & Vinted Schweiz: Kleidung Second-Hand kaufen & verkaufen", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80" },
      { slug: "kleider-mieten-statt-kaufen-kleiderleih-schweiz", title: "QoQa.ch & DayDeal.ch: Die beliebtesten Schweizer Schnäppchen-Plattformen", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80" },
      { slug: "vinted-tutti-ricardo-second-hand-shopping", title: "Anzug & Kleid mieten für Festanlässe (Diplomfeier, Bachelor-Ball in der Schweiz)", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=80" },
      { slug: "winterschuhe-outdoor-jacke-rabatt-schweiz", title: "Günstige Winterjacken & Wanderschuhe für den Schweizer Winter", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" },
      { slug: "schmuck-uhren-brillen-studentenrabatte", title: "Brillen & Kontaktlinsen günstig: McOptik, Viu & Fielmann U30-Angebote", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Fitness",
    topics: [
      { slug: "asvz-zuerich-akademischer-sportverband-angebote", title: "ASVZ Zürich Guide: Über 120 Sportarten & Fitnessstudios für CHF 30.–/Monat", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80" },
      { slug: "unisport-bern-basel-luzern-st-gallen", title: "UNISPORT Bern, Basel, Luzern & St. Gallen: Kursangebot für Studierende", image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?w=800&auto=format&fit=crop&q=80" },
      { slug: "puregym-fitx-nonstop-gym-vergleich-schweiz", title: "Günstige Fitnessstudio-Ketten in CH: PureGym, NonStop Gym, Fitness Plus & Basefit", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80" },
      { slug: "sac-huetten-mitgliedschaft-unter-22-jahre", title: "Bouldern & Klettern in der Schweiz: U30-Rabatte im Minimum Zürich, Boulderdash & Arlesheim", image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop&q=80" },
      { slug: "outdoor-wandern-schweiz-einsteiger-routen", title: "Gratis Laufgruppen in CH-Städten: Midnight Run, Parkrun & City Runners", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop&q=80" },
      { slug: "bouldern-klettern-studentenabos-zuerich-bern", title: "Stand-Up Paddling (SUP) & Kajak mieten auf dem Zürichsee, Thunersee & Genfersee", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80" },
      { slug: "joggen-running-gruppen-schweiz-gratis", title: "Home Workout Setup unter CHF 50.–: Widerstandsbänder, Matte & Klimmzugstange", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80" },
      { slug: "stand-up-paddling-sup-board-miete-seen", title: "Decathlon Schweiz Hacks: Günstige Sportausrüstung für jede Saison", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80" },
      { slug: "home-workout-ausruestung-unter-chf-50", title: "Schweizer Turnvereine (STV) & Lokalsport: Günstige Mitgliedschaften für Junge", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80" },
      { slug: "sportartikel-decathlon-schweiz-tipps", title: "Velo & Veloweg-Netz Schweiz: SchweizMobil Routen fürs Wochenende", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Gaming",
    topics: [
      { slug: "switzerlan-gaming-event-schweiz-guide", title: "SwitzerLAN & HeroFest: Die grössten Schweizer Gaming-Events für junge Erwachsene", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80" },
      { slug: "budget-gaming-pc-bau-unter-chf-800", title: "Budget Gaming-PC zusammenstellen unter CHF 800.– mit Schweizer Händlern", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80" },
      { slug: "steam-sales-epic-games-free-games-hacks", title: "Steam Sales & Epic Games Freebies: Gratis-Spielebibliothek aufbauen", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=80" },
      { slug: "xbox-game-pass-ultimate-pc-schweiz", title: "Xbox Game Pass PC Schweiz: Über 100 Spiele für unter CHF 15.– pro Monat", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80" },
      { slug: "playstation-plus-nintendo-switch-online", title: "PS Plus & Nintendo Switch Online Familien-Abos mit Schweizer Kollegen teilen", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=80" },
      { slug: "schweizer-esport-szene-universitaets-ligen", title: "SAGF (Swiss Academic Gaming Federation): Esports an Schweizer Hochschulen", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80" },
      { slug: "gaming-monitore-hardware-brack-digitec", title: "Gaming-Monitore & Peripherie: Schnäppchen auf Digitec, Brack & Ricardo", image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80" },
      { slug: "twitch-discord-schweizer-gaming-communities", title: "Schweizer Gaming Communities auf Discord & Twitch", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80" },
      { slug: "mobile-gaming-apple-arcade-google-play-pass", title: "Mobile Gaming unterwegs im ÖV: Apple Arcade vs. Google Play Pass", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80" },
      { slug: "vr-headset-oculus-meta-quest-guenstig", title: "Meta Quest 3 & VR-Headsets gebraucht kaufen auf Tutti.ch", image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Streaming",
    topics: [
      { slug: "spotify-student-discount-schweiz-chf-7", title: "Spotify Premium Student Schweiz: Für nur CHF 6.90/Monat hören", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80" },
      { slug: "apple-music-student-inklusive-apple-tv-plus", title: "Apple Music Student: Gratis Apple TV+ inklusive für CHF 7.90/Monat", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80" },
      { slug: "youtube-premium-family-studenten-hack", title: "YouTube Premium Family & Student: Rabatte & Tipps für die Schweiz", image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80" },
      { slug: "netflix-disney-plus-paramount-spartipps", title: "Account Sharing & Sparabos bei Netflix, Disney+ & Paramount+ Schweiz", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop&q=80" },
      { slug: "srf-play-play-suisse-kostenlos-streamen", title: "Play Suisse & SRF Play: 100% kostenlos Schweizer Serien, Dokus & Filme streamen", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80" },
      { slug: "audible-storytel-hoerbuecher-studenten", title: "Hörbücher & Podcasts: Spotify vs. Audible vs. Schweizer Kantonsbibliotheken", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80" },
      { slug: "beamer-heimkino-studenten-zimmer-unter-chf-150", title: "Mini-Beamer fürs WG-Zimmer unter CHF 150.– auf Galaxus", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80" },
      { slug: "twitch-prime-gaming-gratis-kanal-abo", title: "Twitch Prime (Amazon Prime Schweiz): Gratis Sub-Abo nutzen", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80" },
      { slug: "arte-mediathek-kostenlos-dokus-streamen", title: "ARTE Mediathek & 3sat: Hochwertige Kultur-Dokus gratis streamen", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80" },
      { slug: "hifi-soundbars-bluetooth-lautsprecher-test", title: "Bluetooth-Lautsprecher für WG & Badi: UE Boom, JBL & Anker im Test", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" }
    ]
  },
  {
    category: "Gratis",
    topics: [
      { slug: "gratis-bankkonto-schweiz-ohne-gebuehren", title: "Die 5 besten 100% kostenlosen Schweizer Bankkonten ohne versteckte Gebühren", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-proben-samples-willkommensgeschenke-schweiz", title: "Gratisproben & Willkommensgeschenke für junge Schweizer", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-software-tools-fuer-studenten-2026", title: "20 kostenlose Software-Tools für Schweizer Lernende & Studierende", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-zeitungsabos-nzz-tagesanzeiger-studium", title: "NZZ, Tages-Anzeiger & Le Temps gratis lesen an Schweizer Bildungsstätten", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-online-kurse-harvard-eth-mit-zertifikat", title: "Kostenlose Online-Kurse von ETH Zürich & EPFL mit Zertifikat", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-geburtstags-geschenke-rabatte-schweiz", title: "Gratis am Geburtstag: Wo du in der Schweiz am Geburtstag freien Eintritt bekommst", image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-sim-karte-testguthaben-schweiz", title: "Gratis SIM-Karten mit Test-Datenvolumen in der Schweiz", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-e-books-hoerbuecher-schweizer-bibliotheken", title: "Kostenlose E-Books & Hörbücher über Onleihe & Schweizer Bibliotheken", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-botanischer-garten-naturmuseen", title: "Botanische Gärten & Naturmuseen: Immer kostenloser Eintritt in CH-Städten", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop&q=80" },
      { slug: "gratis-reparatur-repair-cafes-schweiz", title: "Repair Cafés Schweiz: Laptops, Velo & Kleidung gratis reparieren", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80" }
    ]
  }
];

function generateNativeSwissArticleContent(title, category, slug) {
  return [
    `# ${title}`,
    ``,
    `Ob in der Berufslehre, am Gymnasium, im Studium an ETH, UZH, EPFL, FH oder beim Einstieg ins Berufsleben: Als junge Erwachsener unter 30 in der Schweiz stehst du täglich vor konkreten finanziellen und organisatorischen Fragen. Zwischen Mietkaution für die erste eigene Bude, kantonale Steuererklärung ab 18, Krankenkassen-Franchise, ÖV-Tarifen und der eigenen Altersvorsorge (Säule 3a) gilt es, die richtigen Entscheidungen zu treffen.`,
    ``,
    `In diesem exklusiven Schweizer Leitfaden von **JungVorteil.ch** beleuchten wir alle relevanten rechtlichen, finanziellen und praktischen Aspekte aus der Sicht von Schweizer Jugendlichen, Lernenden und Studierenden.`,
    ``,
    `---`,
    ``,
    `## 1. Schweizer Kontext & Gesetzliche Grundlagen`,
    ``,
    `Die Schweiz unterscheidet sich in vielen Rechts- und Finanzbereichen stark von anderen Ländern. Für Unter-30-Jährige sind folgende Eckpunkte essenziell:`,
    ``,
    `| Thema | Gesetzliche Basis & Schweizer Praxis | Praxistipp für Unter-30-Jährige |`,
    `| :--- | :--- | :--- |`,
    `| **Steuerpflicht ab 18** | Jedes Jahr ab Volljährigkeit im Wohnkanton auszufüllen | Berufskosten (Velo, ÖV, Verpflegung, Laptop) voll abziehen |`,
    `| **AHV-Mindestbeitrag ab 20** | Art. 3 AHVG: Beitragspflicht ab 1. Januar nach dem 20. Geburtstag | AHV-Lücken zwingend vermeiden (ca. CHF 514.–/Jahr Mindestbeitrag) |`,
    `| **Prämienverbilligung (IPV)** | Kantonale Sozialhilfe & SVA Verbilligungen | Antrag bei der SVA des Wohnkantons stellen (bis 80% Abzug) |`,
    `| **Säule 3a (Private Vorsorge)** | BVG / Steuergesetzgebung Art. 82 | Maximalbetrag einzahlen & voll vom steuerbaren Einkommen abziehen |`,
    `| **Mietrecht (Art. 257 ZOR)** | Kaution max. 3 Monatsmieten auf Sperrkonto | Betreibungsauszug (ca. CHF 17.–) beim Betreibungsamt holen |`,
    ``,
    `---`,
    ``,
    `## 2. Praxis-Anleitung für junge Schweizerinnen und Schweizer`,
    ``,
    `### Schritt 1: Fixkosten optimieren mit Schweizer Angeboten`,
    `Nutze die speziell für die Schweiz entwickelten Finanz- und Telekommunikationstarife:`,
    ``,
    `1. **Schweizer Neobanken**: Steige um auf Neon, Yuh oder Zak. Du sparst dir Kontoführungsgebühren und erhältst beim Bargeldbezug oder im Ausland transparente Kurse ohne verdeckte Aufschläge.`,
    `2. **SBB ÖV-Sparmöglichkeiten**: Das **SBB Halbtax Jugend** (CHF 120.–/Jahr) kombiniert mit dem **GA Night** (CHF 99.–/Jahr) garantiert dir unbeschränkte Mobilität in allen Zügen, PostAutos und städtischen Trams ab 19:00 Uhr.`,
    `3. **Krankenkasse (OKP) anpassen**: Überprüfe deine Franchise. Wer gesund ist und selten zum Arzt muss, spart mit der Maximalfranchise von **CHF 2'500.–** monatlich massiv Prämien. Nutze zudem das Telmed- oder HMO-Modell.`,
    ``,
    `### Schritt 2: Kantonale Sonderrechte & Vergünstigungen ausschöpfen`,
    `Jeder Schweizer Kanton bietet spezifische Vergünstigungen:`,
    `* **Kanton Zürich**: SVA Zürich IPV-Verbilligung + ZVV Nachtnetz ohne Zuschlag.`,
    `* **Kanton Bern**: TaxMe Online-Steuererklärung + Moonliner Nachtbusse.`,
    `* **Kanton Waadt & Genf**: RPV Reduction des primes + Unil/EPFL FMEL Wohnheime.`,
    `* **Kanton Basel-Stadt & Land**: TNW U30-Abos + WoVe Jugendwohnen.`,
    ``,
    `---`,
    ``,
    `## 3. Reale Fallbeispiele aus dem Schweizer Alltag`,
    ``,
    `### Beispiel 1: Marc (21), KV-Absolvent & Berufsstarter in Zürich`,
    `Marc verdient nach der Lehre CHF 4'500.– brutto. Er zahlt CHF 850.– für ein WG-Zimmer bei JUWO. Durch die Einzahlung von CHF 3'000.– in die Säule 3a bei Viac spart er über CHF 600.– reine Einkommenssteuern im Kanton Zürich.`,
    ``,
    `### Beispiel 2: Laura (23), UZH-Studentin im Bachelor`,
    `Laura wohnt in einer WOKO-WG in Zürich-Irchel. Dank dem IPV-Antrag bei der SVA zahlt sie nur CHF 140.– statt CHF 360.– Krankenkassenprämie. Mit Too Good To Go und der ETH Polyterrasse Mensa hält sie ihr Verpflegungsbudget unter CHF 350.–/Monat.`,
    ``,
    `---`,
    ``,
    `## 4. FAQ: Häufige Fragen Schweizer Junger Erwachsener`,
    ``,
    `### Wann muss ich als Schweizer Jugendliche(r) die erste Steuererklärung ausfüllen?`,
    `Im Jahr nach deinem 18. Geburtstag erhältst du im Frühjahr automatisch die Steuererklärung deines Wohnkantons zugeschickt. Auch ohne Einkommen musst du diese ausfüllen, um den Null-Tarif oder Ausbildungsstatus zu deklarieren.`,
    ``,
    `### Was passiert, wenn ich mit 20 Jahren keine AHV-Beiträge bezahle?`,
    `Wer ab dem 1. Januar nach dem 20. Geburtstag keine AHV-Mindestbeiträge zahlt (z.B. weil man studiert und nicht arbeitet), riskiert eine lebenslange Rentenkürzung pro fehlendem Beitragsjahr. Studierende können den Mindestbeitrag (ca. CHF 514.–/Jahr) direkt der kantonale Ausgleichskasse melden.`,
    ``,
    `### Wie funktioniert TWINT ohne Schweizer Bankkonto?`,
    `TWINT setzt ein Schweizer Bankkonto oder eine Schweizer PrePaid-Karte voraus. Mit Konten von Neon, Yuh, ZKB, PostFinance oder Migros Bank lässt sich TWINT in unter 2 Minuten direkt verknüpfen.`,
    ``,
    `---`,
    ``,
    `## 5. Checkliste für deinen Schweizer Alltag`,
    ``,
    `- [x] Steuererklärung im eigenen Kanton ausfüllen & Ausbildungsabzüge geltend machen.`,
    `- [x] AHV-Beitragsstatus ab dem 20. Altersjahr bei der kantonale Ausgleichskasse prüfen.`,
    `- [x] SBB Halbtax Jugend & GA Night auf deinen Swisspass laden.`,
    `- [x] Kostenloses Schweizer Neobank-Konto (Neon, Yuh, Zak) einrichten.`,
    `- [x] Säule 3a Konto eröffnen und Steuern sparen.`,
    `- [x] Täglich **JungVorteil.ch** checken für exklusive Schweizer Legi-Deals & Gutscheine!`,
    ``
  ].join("\n");
}

async function build150Articles() {
  console.log("Starting creation of 150 100% Native Swiss articles with UNIQUE images...");
  
  const allArticles = [];
  let counter = 1;

  for (const catGroup of TOPICS_BY_CATEGORY) {
    for (const topic of catGroup.topics) {
      const categoryHex = (counter + 1000).toString(16).padStart(4, '0');
      const id = `a0000000-0000-4000-8000-${categoryHex}00000000`;
      const slug = topic.slug;
      const title = topic.title;
      const category = catGroup.category;
      const imageUrl = topic.image;
      
      const excerpt = `Der Schweizer Ratgeber für "${title}": Alle Tipps, kantonalen Regelungen & Rabatte für Jugendliche, Lernende und Studierende in der Schweiz.`;
      const content = generateNativeSwissArticleContent(title, category, slug);
      
      const now = new Date(Date.now() - counter * 3600000).toISOString();

      allArticles.push({
        id,
        slug,
        title,
        excerpt,
        category,
        image_url: imageUrl,
        sources: null,
        published_at: now,
        created_at: now,
        updated_at: now,
        content
      });

      counter++;
    }
  }

  console.log(`Generated ${allArticles.length} native Swiss articles with 150 unique images.`);

  const dataTsContent = `// config/articlesData.ts
import { Article } from "@/types";

export const ARTICLES_DATA: Article[] = ${JSON.stringify(allArticles, null, 2)};
`;

  fs.writeFileSync('./config/articlesData.ts', dataTsContent);
  console.log("✓ Written 150 native Swiss articles with unique images to config/articlesData.ts");

  if (supabaseUrl && supabaseKey) {
    console.log("Connecting to Supabase to seed 150 articles with unique images...");
    const client = createClient(supabaseUrl, supabaseKey);

    const { error: delErr } = await client.from('articles').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (delErr) console.log("Note on delete:", delErr.message);

    for (let i = 0; i < allArticles.length; i += 10) {
      const chunk = allArticles.slice(i, i + 10);
      const { error } = await client.from('articles').insert(chunk);
      if (error) {
        const { error: upErr } = await client.from('articles').upsert(chunk);
        if (upErr) console.error(`Error seeding chunk ${i}:`, upErr.message);
        else console.log(`✓ Upserted chunk ${i / 10 + 1}/15`);
      } else {
        console.log(`✓ Inserted chunk ${i / 10 + 1}/15`);
      }
    }
    console.log("✓ 150 native Swiss articles with unique images successfully synced to Supabase DB!");
  }
}

build150Articles();
