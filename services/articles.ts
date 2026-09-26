// services/articles.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Article } from "@/types";

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: "a1111111-1111-4111-a111-111111111111",
    slug: "spartipps-studenten-schweiz-2026",
    title: "10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)",
    excerpt: "Die Schweiz gilt als teures Pflaster – doch wer die richtigen Kniffe kennt, spart im Studium und Alltag tausende Franken pro Jahr. Hier sind die 10 effektivsten Spartipps.",
    content: `# 10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)

Das Leben und Studieren in der Schweiz stellt junge Erwachsene finanziell oft vor grosse Herausforderungen. Zwischen Mietkosten für WGs, Krankenkassenprämien und teuren Lebensmitteln bleibt das Budget knapp. Doch mit den richtigen Strategien lässt sich extrem viel Geld sparen.

---

## 1. Mobilität clever nutzen: Halbtax Jugend & GA Night
Der öffentliche Verkehr in der Schweiz (SBB, PostAuto und städtische Verkehrsbetriebe) ist erstklassig, aber regulär kostspielig. 
* **Halbtax Jugend**: Für Personen unter 25 Jahren kostet das Halbtax Jugend nur **CHF 120.–** pro Jahr (Folgejahr CHF 100.–).
* **GA Night**: Wer abends ab 19:00 Uhr unterwegs ist, zahlt mit dem GA Night nur **CHF 99.–** pro Jahr bis zum 25. Geburtstag und reist auf dem gesamten SBB-Netz unbeschränkt in der 2. Klasse.

---

## 2. Mensa und Food-Sharing statt Restaurant
Ein Restaurantbesuch in Zürich, Bern oder Genf kostet schnell CHF 25.– bis CHF 35.– pro Mahlzeit.
* Nutze die universitären Mensen (UZH, ETH, UniBE, EPFL, UniFR), wo Studentengerichte meist zwischen **CHF 6.50 und CHF 9.50** liegen.
* Apps wie *Too Good To Go* ermöglichen es, Restaurant- und Bäckereiessen kurz vor Ladenschluss für ein Drittel des Preises (ab CHF 4.90) zu retten.

---

## 3. Krankenkassen-Prämienverbilligung (IPV) beantragen
Der wohl grösste Hebel für junge Schweizer: Fast alle Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Prämienverbilligung auf die obligatorische Grundversicherung.
* In Kantonen wie Zürich, Bern oder Waadt beträgt die Reduktion oft **bis zu 80%** der Grundversicherungsprämie.
* Wichtig: Die Antragsfristen variieren je nach Kanton (meist bis 31. März oder 31. Dezember).

---

## 4. Kostenloses Bankkonto mit Jugend-Bonus
Zahle niemals Kontoführungsgebühren! Schweizer Banken bieten tolle Konditionen für junge Kunden.
* Neobanken wie **Neon** oder **Yuh** bieten kostenlose Konten mit günstigen Auslandstransaktionen und ohne Kartengebühren.
* Kantonalbanken (z.B. ZKB young, BCV, BEKB) bieten Gratis-Girokonten inklusive Kinorabatttag oder vergünstigten Festival-Tickets.

---

## 5. Technik über Projekt Neptun & Apple Education kaufen
Vor Semesterbeginn sollten Laptops und Tablets niemals zum Vollpreis gekauft werden.
* **Projekt Neptun**: Dreimal jährlich bieten Schweizer Hochschulen Laptops (MacBook, Lenovo ThinkPad, HP) mit Rabatten von **15% bis 40%** an.
* **Apple Education Store**: Dauerhaft ca. 10% Rabatt auf Macs und iPads für Studierende mit gültiger Legi.

---

## 6. Hochschulsport nutzen (ASVZ, UNISPORT)
Fitnessstudio-Mitgliedschaften kosten in der Schweiz oft CHF 800.– bis CHF 1'200.– pro Jahr.
* Universitäre Sportverbände wie der **ASVZ in Zürich** oder **UNISPORT in Bern und Basel** sind im Semesterbeitrag enthalten oder kosten nur eine kleine Jahresgebühr.
* Viele Krankenkassen-Zusatzversicherungen erstatten zudem bis zu **CHF 500.–** an Fitnessbeiträge zurück.

---

## 7. WGs und Genossenschaften (WOKO, JUWO)
Mieten für Einzelwohnungen sind extrem teuer.
* Nutze Plattformen wie **wgzimmer.ch** oder studentische Wohnbaugenossenschaften (WOKO in Zürich, WoVe in Basel), wo Zimmer ab **CHF 500.–** inklusive Nebenkosten angeboten werden.

---

## 8. Buchrabatte & Bibliotheksnetz Swisscovery
* Nutze deine **Switch edu-ID**, um über **Swisscovery** kostenlosen Zugriff auf Millionen wissenschaftlicher Bücher und E-Books aller Schweizer Hochschulbibliotheken zu erhalten.
* Kaufe Fachbücher gebraucht über Studiladen oder nutze Verlegerrabatte von 10% bis 15%.

---

## 9. Supermarkt-Eigenmarken & Rabatt-Aktionen
* Kaufe Eigenmarken wie **M-Budget (Migros)** oder **Prix Garantie (Coop)** statt teurer Markenprodukte.
* Samstags kurz vor Ladenschluss kennzeichnen Schweizer Supermärkte frische Produkte mit 25% bis 50% Rabatt-Klebern.

---

## 10. Vorteilskarten & UNiDAYS nutzen
* Registriere dich kostenlos bei **UNiDAYS** oder **StudentBeans** für 10% bis 20% Rabatt bei Marken wie ASOS, Nike, adidas und Levi's.
* Prüfe bei schmalem Budget den Anspruch auf die **Caritas KulturLegi** für bis zu 70% Rabatt auf Kultur und Sport.

---

## Häufige Fragen (FAQ)

### Wie viel Geld kann man durch diese Spartipps im Jahr sparen?
Ein durchschnittlicher Student in der Schweiz kann durch die Kombination von ÖV-Abos, IPV Prämienverbilligung, Gratiskonten und Mensa-Nutzung realistisch **CHF 2'000.– bis CHF 4'000.– pro Jahr** sparen.

### Wo finde ich weitere aktuelle Rabattcodes?
Auf JungVorteil veröffentlichen wir täglich geprüfte Gutscheine, Rabattcodes und Sonderaktionen für junge Erwachsene in allen Schweizer Kantonen.`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a2222222-2222-4222-a222-222222222222",
    slug: "sbb-ov-guide-jugendliche",
    title: "SBB & ÖV Guide: Halbtax, GA Night & GA Jugend im Vergleich",
    excerpt: "Welches Zug-Abo lohnt sich für Jugendliche und Studierende in der Schweiz wirklich? Ein umfassender Vergleich von Preisen, Konditionen und Spartipps.",
    content: `# SBB & ÖV Guide: Halbtax, GA Night & GA Jugend im Vergleich

Für Mobilität in der Schweiz ist die SBB das Rückgrat des Alltags. Egal ob für das tägliche Pendeln zur Fachhochschule oder den Ausflug in die Berge am Wochenende – Zugfahren muss nicht teuer sein.

---

## Die wichtigsten SBB Abos im Überblick

### 1. Halbtax Jugend (bis 25 Jahre)
Das Halbtax halbiert den Preis für fast alle Strecken der SBB, PostAuto und vieler Bergbahnen.
* **Preis**: **CHF 120.–** im 1. Jahr / **CHF 100.–** im Folgejahr für Jugendliche unter 25 Jahren.
* **Lohnt sich ab**: Ca. 3 bis 4 Fahrten zwischen den grossen Schweizer Städten pro Jahr.

### 2. GA Night (ehemals Seven25)
Mit dem GA Night reisen Jugendliche unter 25 Jahren ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) unbeschränkt in der 2. Klasse.
* **Preis**: **CHF 99.–** pro Jahr.
* **Ideal für**: Ausgang, Spätschichten und Wochenendausflüge am Abend.

### 3. GA Jugend & GA Studierende (16–25 / 25–30 Jahre)
Das Generalabonnement ermöglicht freie Fahrt im gesamten Schweizer Streckennetz.
* **Preis GA Jugend (unter 25)**: **CHF 2'900.–** pro Jahr [TODO_VERIFY: Exakter aktueller GA Jugend Jahrespreis für 2026 bestätigen].
* **Preis GA Studierende (25–30)**: **CHF 3'450.–** pro Jahr für immatrikulierte Studierende an anerkannten Schweizer Universitäten [TODO_VERIFY: Exakter aktueller GA Studierende Tarif 2026 bestätigen].

---

## Spartipps für Gelegenheitsfahrer

1. **Sparbillette & Spartageskarten**: Bis zu 70% Rabatt bei frühzeitiger Buchung in der SBB Mobile App (bis zu 60 Tage im Voraus).
2. **Spartageskarte Gemeinde**: Viele Schweizer Gemeinden bieten vergünstigte Tageskarten für Einwohner an.
3. **SBB RailAway Kombis**: Rabatt auf Zugfahrt und Event-Eintritt gleichzeitig.

---

## Häufige Fragen zum ÖV in der Schweiz

### Gilt das GA Night auch in Tram und Bus?
Ja! Das GA Night gilt in den meisten städtischen Zonen (wie ZVV in Zürich oder BERNMOBIL) ab 19:00 Uhr für Busse, Trams und Nacht-S-Bahnen.

### Wie lade ich das Abo auf den Swisspass?
Das Abo wird nach dem Kauf automatisch mit deiner Swisspass-Karte verknüpft und kann digital in der SBB Mobile App vorgezeigt werden.`,
    category: "Reisen",
    image_url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a3333333-3333-4333-a333-333333333333",
    slug: "krankenkasse-praemienverbilligung-schweiz",
    title: "Krankenkassen-Prämienverbilligung (IPV): So beantragen Studierende Geld vom Kanton",
    excerpt: "Wusstest du, dass dir als Student in der Schweiz monatlich hunderte Franken Prämienverbilligung zustehen können? Ein Schritt-für-Schritt Ratgeber.",
    content: `# Krankenkassen-Prämienverbilligung (IPV): So beantragen Studierende Geld vom Kanton

Die obligatorische Krankenpflegeversicherung (OKP) gehört in der Schweiz zu den grössten monatlichen Budgetposten für junge Menschen. Da die Prämien jährlich steigen, stellen die Kantone Gelder für die individuelle Prämienverbilligung (IPV) bereit.

---

## Anspruchsvoraussetzungen

Der Anspruch richtet sich nach deinem steuerbaren Einkommen und Vermögen des Vorjahres.
* **Studierende unter 25**: In vielen Kantonen wird das Einkommen der Eltern angerechnet, es sei denn, man führt nachweislich einen eigenen Haushalt und ist finanziell unabhängig.
* **Studierende über 25 / Lernende**: Hier gilt in der Regel ausschliesslich das eigene Einkommen des Studierenden.

---

## Kantonale Unterschiede im Detail

* **Kanton Zürich (SVA Zürcher IPV)**: Jugendliche in Ausbildung erhalten oft eine erhebliche Verbilligung der Durchschnittsprämie [TODO_VERIFY: Exakte maximale IPV Prozentquote im Kanton Zürich für 2026 bestätigen].
* **Kanton Bern (ASV)**: Die Einreichung erfolgt online über das Portal TaxMe [TODO_VERIFY: Genaue Antragsfrist Kanton Bern 2026 bestätigen].
* **Kanton Waadt / Genf**: In der Romandie wird die Prämienverbilligung oft direkt anhand der Steuererklärung berechnet.

---

## Wichtige Schritte zur Beantragung

1. **Steuererklärung pünktlich einreichen**: Die Steuerdaten sind die Grundlage für die Berechnung.
2. **Antragsfrist beachten**: In etlichen Kantonen läuft die Frist am **31. Dezember oder 31. März** ab. Wer die Frist verpasst, verliert den Anspruch für das gesamte Jahr!
3. **Fragebogen ausfüllen**: Auf der Website der SVA deines Wohnkantons den Antrag für IPV stellen.

---

## Häufige Fragen zur IPV

### Wird die Prämienverbilligung direkt an mich verwiesen?
Nein, in den meisten Kantonen überweist die SVA den Verbilligungsbetrag direkt an deine Krankenkasse. Deine monatliche Prämie reduziert sich dadurch automatisch.

### Muss man die IPV zurückzahlen?
Nein, die Prämienverbilligung ist eine staatliche Beihilfe und muss bei rechtmässigem Bezug nicht zurückgezahlt werden.`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a4444444-4444-4444-a444-444444444444",
    slug: "studenten-leben-zuerich-budget-guide",
    title: "Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende",
    excerpt: "Zürich ist eine der teuersten Städte der Welt. Doch mit den richtigen Adressen, der ASVZ-Sportkarte und günstigen Mensen lässt sich das Leben an der Limmat geniessen.",
    content: `# Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende

Zürich belegt regelmässig Spitzenplätze in weltweiten Lebenshaltungskosten-Rankings. Wer an der Universität Zürich (UZH) oder der ETH Zürich studiert, muss das eigene Budget genau planen.

---

## Günstig Wohnen in Zürich
* **WOKO (Studentische Wohngenossenschaft)**: Bietet Zimmer in WGs ab **CHF 500.– bis CHF 750.–** pro Monat inklusive Nebenkosten.
* **JUWO (Jugendwohnnetz)**: Günstige Zwischennutzungen für Personen unter 28 Jahren in Ausbildung.
* **wgzimmer.ch**: Die wichtigste Online-Plattform für freie WG-Zimmer im Kanton Zürich.

---

## Sport & Freizeit: Der ASVZ Vorteil
Als immatrikulierter Student an UZH, ETH oder ZHAW ist die Mitgliedschaft im **Akademischen Sportverband Zürich (ASVZ)** im Semesterbeitrag enthalten.
* Über 120 Sportarten (Fitnesszentren Polyterrasse, Irchel, Hönggerberg, Fluntern).
* Saunen, Kletterwände, Krafträume und hunderte Gratis-Gruppenkurse jede Woche.

---

## Verpflegung rund um den Campus
* **ETH Mensa Polyterrasse**: Schmackhafte Tagesmenüs für **CHF 6.90 bis CHF 9.50**.
* **UZH Mensa Irchel**: Grosses Buffet mit vegetarischen und veganen Optionen.
* **Limmatufer & Irchelpark**: Im Sommer der perfekte Treffpunkt für mitgebrachte Picknicks.

---

## ÖV & Ausgehen
* **ZVV Zonen-Abo**: Kombiniere 1-2 ZVV Zonen mit dem SBB GA Night für kostenlose Abendfahrten im gesamten Kanton ab 19:00 Uhr.
* **Kinotage**: Montags kosten Tickets in Blue Cinema und Pathé Kinos nur CHF 14.– gegen Vorweisen der Legi.

---

## Häufige Fragen zum Studium in Zürich

### Wie hoch sind die monatlichen Lebenshaltungskosten in Zürich?
Ein durchschnittlicher Student in Zürich benötigt pro Monat ca. **CHF 1'600.– bis CHF 2'100.–** (inklusive Miete, Krankenkasse, Verpflegung und ÖV).

### Bietet die Kantonalbank Zürich spezielle Vorteile?
Ja, die Zürcher Kantonalbank bietet mit dem **zkb young** Paket kostenlose Konten und vergünstigte ZKB Nachtschwärmer-Tickets im ZVV.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a5555555-5555-4555-a555-555555555555",
    slug: "handy-internet-abos-jugendliche-vergleich",
    title: "Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich",
    excerpt: "Brauchst du unlimitiertes 5G-Datenvolumen in der Schweiz und Roaming in Europa? Wir vergleichen die besten Jugendtarife der führenden Telekom-Anbieter.",
    content: `# Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich

Als junger Mensch in der Schweiz ist schnelles mobiles Internet unverzichtbar. Glücklicherweise bieten fast alle Mobilfunkanbieter spezielle Rabatte für Personen unter 30 Jahren.

---

## Die Top-Anbieter im Vergleich

### 1. Swisscom blue Mobile Youth
* **Vorteile**: Bestes Netz der Schweiz (CH-Testsieger), inklusive 5G Speed.
* **Preis**: Reduzierte Jugend-Grundgebühr [TODO_VERIFY: Exakter Swisscom blue Mobile Youth Aktionspreis 2026 prüfen].

### 2. Sunrise Up Mobile Youth
* **Vorteile**: 50% Rabatt für Jugendliche unter 30 Jahren auf viele Abos.
* **Preis**: **ca. CHF 29.50** pro Monat für unlimitiertes Internet in CH [TODO_VERIFY: Aktuelle Promo-Konditionen Sunrise 2026 bestätigen].

### 3. Salt Youth
* **Vorteile**: Sehr gutes Preis-Leistungs-Verhältnis inklusive EU-Roaming.
* **Preis**: **ca. CHF 24.95** pro Monat [TODO_VERIFY: Aktuelle Salt Youth Abo-Gebühr 2026 prüfen].

### 4. Wingo & Yallo (Prepaid & Flex-Abos)
* **Vorteile**: Keine Kündigungsfristen, flexible Monatsabos im Swisscom- bzw. Sunrise-Netz ab **CHF 19.95**.

---

## Tipps für die Abo-Wahl
1. Wähle Abos mit **1 Monat Kündigungsfrist**, um flexibel auf neue Promo-Aktionen zu wechseln.
2. Achte auf **Aktivierungsgebühren** – während Aktionen entfallen diese meist komplett (Ersparnis ca. CHF 59.–).

---

## Häufige Fragen zu Jugend-Handyabos

### Muss ich meine Legi vorzeigen?
Nein, für Jugendtarife (unter 30 Jahre) reicht der Nachweis des Geburtsdatums per Personalausweis oder Pass.`,
    category: "Technik",
    image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a6666666-6666-4666-a666-666666666666",
    slug: "schweizer-jugend-glossar",
    title: "Das Schweizer Jugend- & Finanz-Glossar: Von Legi bis Säule 3a",
    excerpt: "Was bedeuten Begriffe wie GA-Night, Legi, IPV, Säule 3a und WOKO? Das ultimative Nachschlagewerk für junge Leute in der Schweiz.",
    content: `# Das Schweizer Jugend- & Finanz-Glossar: Von Legi bis Säule 3a

Wer in der Schweiz aufwächst oder zum Studium einreist, begegnet zahlreichen spezifischen Begriffen rund um Bildung, Mobilität und Finanzen. Dieses Glossar erklärt die wichtigsten Fachausdrücke einfach und verständlich.

---

## Begriffe von A bis Z

* **ASVZ**: Akademischer Sportverband Zürich (Hochschulsport von UZH, ETH, ZHAW).
* **GA (Generalabonnement)**: Ticket der SBB für freie Fahrt im gesamten Schweizer ÖV-Netz.
* **GA Night**: SBB Abo für Personen unter 25 Jahren ab 19:00 Uhr abends (CHF 99.– / Jahr).
* **Halbtax**: Abo der SBB, das 50% Rabatt auf fast alle Tickets gewährt.
* **IPV (Individuelle Prämienverbilligung)**: Staatlicher Zuschuss zur Reduktion der monatlichen Krankenkassenprämien.
* **Legi**: Der offizielle Studierendenausweis an Schweizer Hochschulen.
* **Mensa**: Das universitäre Restaurant mit günstigen Mahlzeiten für Studierende.
* **Projekt Neptun**: Dreimal jährliche Verkaufsfenster für vergünstigte Laptops an Schweizer Hochschulen.
* **Säule 3a**: Die steuerbegünstigte private Altersvorsorge in der Schweiz.
* **Switch edu-ID**: Die digitale Identität für Schweizer Universitäten und Bibliotheken.
* **WOKO / JUWO**: Genossenschaftliche Vermieter von günstigen Studenten-WGs.

---

Finde auf JungVorteil die besten Rabatte passend zu jedem dieser Bereiche!`,
    category: "Bildung",
    image_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a7777777-7777-4777-a777-777777777777",
    slug: "studenten-leben-bern-budget-guide",
    title: "Studentenleben in Bern: Budget-Guide für UniBE & BFH Studierende",
    excerpt: "Die Bundesstadt Bern überzeugt mit gemütlichem Flair, der Aare und exzellenten Bildungsinstituten. Mit cleverem Budgeting genießt du das Berner Leben in vollen Zügen.",
    content: `# Studentenleben in Bern: Budget-Guide für UniBE & BFH Studierende

Die Bundesstadt Bern vereint Lebensqualität mit überschaubaren Distanzen. Studierende an der Universität Bern (UniBE) und der Berner Fachhochschule (BFH) geniessen das Leben rund um die historische Altstadt.

---

## Günstig Wohnen in Bern
* **Wohnraum**: WG-Zimmer in der Länggasse, in Bümpliz oder Breitenrain finden sich ab ca. **CHF 550.– bis CHF 750.–** pro Monat.
* **Studentenwohnen Bern**: Gemeinnützige Anlaufstelle für studentische Zimmer.

---

## Verpflegung & Mensen
* **Mensa Grosse Schanze**: Günstige Mahlzeiten für **CHF 6.90 bis CHF 9.50** mit spektakulärem Panoramablick auf die Berner Alpen.
* **VonRoll Campus Mensa**: Ausgewogenes Buffet im Areal der Erziehungswissenschaften.

---

## Sport & Aare-Sommer
* **UNISPORT Bern**: Breites Sportprogramm von Yoga über Klettern bis zu Ruderkursen für UniBE & BFH Studierende.
* **Aareschwimmen im Marzili & Eichholz**: Der unbezahlbare Klassiker im Berner Sommer – 100% kostenlos.

---

## Finanzen & IPV im Kanton Bern
* **TaxMe Portal**: Reiche die IPV Prämienverbilligung beim Kanton Bern einfach online über TaxMe ein.

---

## Häufige Fragen zum Studium in Bern

### Wie kommt man in Bern am besten voran?
Mit dem Velo oder dem BERNMOBIL ÖV-Netz. Für Abendfahrten lohnt sich das SBB GA Night.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a8888888-8888-4888-a888-888888888888",
    slug: "studenten-leben-basel-budget-guide",
    title: "Studentenleben in Basel: Budget-Guide für UniBasel Studierende",
    excerpt: "Basel als Kultur- und Life-Science-Metropole: Wie Studierende an der Universität Basel günstig wohnen, einkaufen und die Freizeit gestalten.",
    content: `# Studentenleben in Basel: Budget-Guide für UniBasel Studierende

Die älteste Universität der Schweiz lockt Studierende aus aller Welt. Die Lage im Dreiländereck bietet einzigartige Sparmöglichkeiten.

---

## Wohnen & Grenzüberschreitend Einkaufen
* **WoVe (Verein Studentisches Wohnen)**: Vermittelt bezahlbare Zimmer in Basel-Stadt und Basel-Landschaft ab **CHF 500.–**.
* **Einkaufen im Dreiländereck**: Einkäufe im nahegelegenen Weil am Rhein (DE) oder St. Louis (FR) sparen Geld bei Lebensmitteln.

---

## Kultur & Museumsvielfalt
* **Museen in Basel**: Über 40 Museen bieten Personen unter 26 Jahren sowie Studierenden stark ermässigten oder am 1. Sonntag im Monat kostenlosen Eintritt.
* **KulturLegi Basel**: Bietet bis zu 70% Rabatt auf Theater-, Tanz- und Konzertbillette.

---

## Sport & Rheinbord
* **Uni Sport Basel**: Mehr als 100 Sportarten in modernen Hallen und Freiluftanlagen.
* **Rheinschwimmen**: Mit dem Wickelfisch im Sommer den Rhein hinabtreiben – das Basler Lebensgefühl.

---

## Häufige Fragen zum Studium in Basel

### Welches ÖV-Abo nutzt man in Basel?
Der Tarifverbund TNW deckt die Nordwestschweiz ab und bietet attraktive Jugendabos für Trams und Busse.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a9999999-9999-4999-a999-999999999999",
    slug: "studenten-leben-genf-budget-guide",
    title: "Studentenleben in Genf: Budget-Guide für UniGE Studierende",
    excerpt: "Genf ist ein internationaler Hub. Entdecke, wie Studierende an der UniGE günstig wohnen, essen und unterwegs sind.",
    content: `# Studentenleben in Genf: Budget-Guide für UniGE Studierende

Genf ist weltbekannt für die UNO, das CERN und internationale Organisationen. Auch in Genf lässt sich das Studienbudget optimieren.

---

## Wohnen & Verpflegung
* **Logement Etudiant UniGE**: Wohnheime und Zimmervermittlung für Studierende.
* **Menses UniGE**: Preiswerte Tagesgerichte an den Standorten Uni Dufour, Uni Mail und Bastions.

---

## Mobilität & TPG
* **TPG Junior**: Die Transports Publics Genevois bieten Junior-Jahresabonnements für unter 25-Jährige zu reduzierten Preisen.

---

## Freizeit am Genfersee
* **Bains des Pâquis**: Ein beliebter Treffpunkt am Genfersee für erschwingliches Essen und Entspannung am Strand.

---

## Häufige Fragen zum Studium in Genf

### Wo beantragt man die Prämienverbilligung in Genf?
Die IPV wird in Genf über den Service de l'assurance-maladie (SAM) abgewickelt.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b1111111-1111-4111-b111-111111111111",
    slug: "studenten-leben-lausanne-budget-guide",
    title: "Studentenleben in Lausanne: UNIL & EPFL Campus Guide",
    excerpt: "Lausanne am Genfersee beherbergt die EPFL und die UNIL. Erfahre alles über das Sportzentrum Dorigny und günstige ÖV-Tarife.",
    content: `# Studentenleben in Lausanne: UNIL & EPFL Campus Guide

Lausanne gilt als Olympiastadt und wichtiges Bildungszentrum mit der UNIL und der Weltklasse-Hochschule EPFL direkt am Genfersee.

---

## Campus Dorigny & Sport
* **Centre Sportif UNIL-EPFL**: Eines der schönsten Hochschul-Sportzentren Europas direkt am Seeufer mit Tennis, Fitness, Segeln und Klettern.
* **Rolex Learning Center**: Spektakuläre Architektur, kostenlose Arbeitsplätze und Bibliothek rund um die Uhr.

---

## ÖV & Wohnen
* **FMEL (Fondation vaudoise pour le logement mériant)**: Die wichtigste Organisation für Studentenwohnheime im Kanton Waadt.
* **Mobilis Vaud**: Jugend-Zonenabos für die Métro m2 und Busse im Waadtland.

---

## Häufige Fragen zum Studium in Lausanne

### Was kostet das Sportangebot an der EPFL/UNIL?
Für immatrikulierte Studierende der UNIL und EPFL ist der Zugang zu den Sportanlagen in Dorigny kostenlos.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b2222222-2222-4222-b222-222222222222",
    slug: "studenten-leben-luzern-budget-guide",
    title: "Studentenleben in Luzern: UniLu & HSLU Budget Guide",
    excerpt: "Studieren in der Zentralschweiz: Wie Studierende an der Universität Luzern und HSLU günstig wohnen und Sport treiben.",
    content: `# Studentenleben in Luzern: UniLu & HSLU Budget Guide

Luzern verbindet malerische Kulisse am Vierwaldstättersee mit der Universität Luzern (UniLu) und der Hochschule Luzern (HSLU).

---

## Campus & Sport
* **HSLU Sport**: Günstige Skitage in den Zentralschweizer Alpen, Wassersport auf dem Vierwaldstättersee und Fitness.
* **UniLu Mensa**: Ausgewogene Menüs direkt beim Hauptbahnhof Luzern.

---

## ÖV & Wohnen
* **Studentenwohnen Luzern (StuWo)**: Günstige Zimmer für Studierende.
* **Passepartout Tarifverbund**: Ermässigte Monatsabos für Busse und Züge in Luzern, Obwalden und Nidwalden.

---

## Häufige Fragen zum Studium in Luzern

### Gibt es Kulturrabatte in Luzern?
Ja, im KKL Luzern und im Verkehrshaus erhalten Studierende gegen Vorzeigen der Legi attraktive Nachlässe.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b3333333-3333-4333-b333-333333333333",
    slug: "studenten-leben-st-gallen-budget-guide",
    title: "Studentenleben in St. Gallen: HSG & OST Campus Guide",
    excerpt: "Die Universität St. Gallen (HSG) und die OST Fachhochschule: Ein Leitfaden für preiswertes Wohnen und Einkaufen in der Ostschweiz.",
    content: `# Studentenleben in St. Gallen: HSG & OST Campus Guide

St. Gallen ist geprägt von der weltbekannten HSG (Universität St. Gallen) und der Fachhochschule OST.

---

## Campus Rosenberg & Sport
* **Unisport HSG**: Modernstes Fitnesszentrum auf dem Rosenberg mit umfassendem Kursangebot.
* **Mensa HSG**: Treffpunkt auf dem Campus für verpflegungsgünstige Mittagsmenüs.

---

## Wohnen & ÖV
* **WGs in St. Gallen**: Mietpreise liegen deutlich unter Zürcher Niveau (Zimmer ab **CHF 450.– bis CHF 650.–**).
* **OSTWIND Tarifverbund**: Jugendabos für den Nahverkehr in der gesamten Ostschweiz.

---

## Häufige Fragen zum Studium in St. Gallen

### Wie teuer ist das Wohnen in St. Gallen im Vergleich zu Zürich?
Ein WG-Zimmer in St. Gallen ist im Schnitt **30% bis 40% günstiger** als in Zürich.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b4444444-4444-4444-b444-444444444444",
    slug: "studenten-leben-winterthur-budget-guide",
    title: "Studentenleben in Winterthur: ZHAW Campus Guide",
    excerpt: "Winterthur ist das ZHAW-Zentrum. Erfahre alles über Sulzer-Areal, ASVZ Winterthur und günstige Freizeitangebote.",
    content: `# Studentenleben in Winterthur: ZHAW Campus Guide

Winterthur ist die zweitgrösste Stadt im Kanton Zürich und Hauptstandort der ZHAW (Zürcher Hochschule für Angewandte Wissenschaften).

---

## Sulzer-Areal & ASVZ
* **Sulzer-Areal**: Historischer Industrie-Campus nahe dem Hauptbahnhof mit Bibliotheken und Hörsälen.
* **ASVZ Sport Center Winterthur**: Voller Zugang zu ASVZ Fitnesszentren in Winterthur und Zürich.

---

## ÖV & Wohnen
* **WGs in Winterthur**: Günstigere Alternative zu Zürich bei direkter ZVV-S-Bahn-Anbindung (15 Min. zum HB Zürich).

---

## Häufige Fragen zum Studium in Winterthur

### Können ZHAW Studierende den ASVZ nutzen?
Ja, ZHAW Studierende haben uneingeschränkten Zugang zu allen ASVZ Angeboten.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b5555555-5555-4555-b555-555555555555",
    slug: "studenten-leben-lugano-budget-guide",
    title: "Studentenleben in Lugano: USI & SUPSI Budget Guide",
    excerpt: "Studieren im Tessin an der USI und SUPSI: Das mediterrane Studentenleben mit Sport am See und Arcobaleno ÖV-Rabatten.",
    content: `# Studentenleben in Lugano: USI & SUPSI Budget Guide

Lugano bietet akademische Exzellenz mit italienischem Flair im Kanton Tessin an der USI (Università della Svizzera italiana) und SUPSI.

---

## Campus & Sport
* **Servizio Sport USI-SUPSI**: Wassersport am Lago di Lugano, Fitness und Wandertouren im Tessin.
* **Mensa USI**: Günstige Tessiner und italienische Speisen für Studierende.

---

## ÖV & Wohnen
* **Arcobaleno Tarifverbund**: Jugend-Monatskarten für das gesamte Tessiner Verkehrsnetz.

---

## Häufige Fragen zum Studium in Lugano

### Welche Sprachen werden an der USI gesprochen?
Je nach Studiengang wird auf Italienisch und Englisch unterrichtet.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b6666666-6666-4666-b666-666666666666",
    slug: "jugendkonto-vergleich-schweiz-neon-yuh-zkb",
    title: "Schweizer Neobanken & Jugendkonten im Vergleich: Neon, Yuh, Zak & Kantonalbanken",
    excerpt: "Keine Gebühren mehr beim Bankkonto! Wir vergleichen die besten kostenlosen Jugendkonten der Schweiz.",
    content: `# Schweizer Neobanken & Jugendkonten im Vergleich

Wer in der Schweiz Kontoführungsgebühren zahlt, ist selber schuld. Schweizer Banken bieten für unter 30-Jährige hervorragende Konditionen.

---

## Die besten Neobanken im Detail

### 1. Neon Free
* **Konditionen**: **0 CHF** Kontoführungsgebühr, kostenlose Debit Mastercard, echte Wechselkurse im Ausland ohne Aufschlag.
* **Ideal für**: Auslandsreisen, Ausflüge und Alltagsbanking.

### 2. Yuh (PostFinance & Swissquote)
* **Konditionen**: **0 CHF** Grundgebühr, kostenlose Karte, Zinsen auf Erspartes und integriertes Trading.

### 3. Zak (Bank Cler)
* **Konditionen**: **0 CHF** Gebühr mit virtuellen 'Töpfen' für die WG-Budgetplanung.

---

## Kantonalbanken mit Zusatz-Extras

Kantonalbanken (ZKB young, BEKB, BCV) bieten kostenlose Jugendkonten mit Extras wie Gratis-Nachttickets im ÖV oder reduzierten Kine-Eintritten.

---

## Häufige Fragen zu Jugendkonten

### Ab welchem Alter kann man ein Neon Konto eröffnen?
Neon Free kann ab 16 Jahren mit Wohnsitz in der Schweiz eröffnet werden.`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b7777777-7777-4777-b777-777777777777",
    slug: "krankenkasse-studenten-schweiz-leitfaden",
    title: "Krankenkasse für Studenten in der Schweiz: Grundversicherung & Zusatztipps",
    excerpt: "Die Krankenversicherung ist in der Schweiz obligatorisch. Wie Studierende bei der Prämie sparen und das beste Modell wählen.",
    content: `# Krankenkasse für Studenten in der Schweiz: Grundversicherung & Zusatztipps

Jeder Einwohner in der Schweiz benötigt die obligatorische Grundversicherung (OKP).

---

## Welches Modell wählen?
* **Hausarzt- oder Telmed-Modell**: Bis zu 15% bis 20% Prämienersparnis gegenüber dem Standardmodell.
* **Franchise wählen**: Wer selten zum Arzt muss, wählt für maximalen Prämienrabatt die Höchstfranchise von CHF 2'500.– [TODO_VERIFY: Aktuelle Höchstfranchise der OKP 2026 bestätigen].

---

## Sportförderung zurückholen
Viele Krankenkassen zahlen über die Zusatzversicherung Beiträge an ASVZ, Fitness-Center oder Tanzkurse zurück (bis zu **CHF 500.–** pro Jahr).

---

## Häufige Fragen zur Krankenversicherung

### Können ausländische Studierende von der Schweizer OKP befreit werden?
Ja, Studierende aus der EU/EFTA mit einer Europäischen Krankenversicherungskarte (EKVK) können auf Antrag von der Schweizer Versicherungspflicht befreit werden.`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b8888888-8888-4888-b888-888888888888",
    slug: "semesterstart-leitfaden-schweiz",
    title: "Semesterstart Guide: Die wichtigsten Checklisten vor Vorlesungsbeginn",
    excerpt: "Der ultimative Leitfaden für Erstsemestrige in der Schweiz: Von der Legi über den Laptop-Kauf bis zum Bibliotheksausweis.",
    content: `# Semesterstart Guide: Die wichtigsten Checklisten vor Vorlesungsbeginn

Der Beginn des Studiums an einer Schweizer Hochschule bringt viele organisatorische Schritte mit sich.

---

## Die 5 wichtigsten Schritte vor Tag 1
1. **Switch edu-ID einrichten**: Der zentrale Schlüssel für alle Schweizer Universitäten.
2. **Legi freischalten**: Für Bibliotheken, Mensa und Studentenrabatte.
3. **Laptop beim Projekt Neptun bestellen**: Rabatte auf MacBooks und ThinkPads nutzen.
4. **SBB Halbtax / GA Night lösen**: Billetts im ÖV sparen.
5. **IPV Prämienverbilligung prüfen**: Antrag beim Wohnkanton stellen.

---

## Häufige Fragen zum Semesterstart

### Wo erhalte ich meine Legi?
Die Legi wird dir nach der Immatrikulation von deiner Universität per Post zugestellt oder digital in der Hochschul-App freigeschaltet.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "b9999999-9999-4999-b999-999999999999",
    slug: "black-friday-studentenrabatte-schweiz",
    title: "Black Friday & Cyber Monday für Studenten in der Schweiz: Die besten Deals",
    excerpt: "So nutzt du die grössten Rabattwochen des Jahres bei Digitec, Apple, Zalando und SBB optimal.",
    content: `# Black Friday & Cyber Monday für Studenten in der Schweiz: Die besten Deals

Im November bieten viele Schweizer Händler rekordhohe Nachlässe.

---

## Wo sich das Warten lohnt
* **Elektronik (Digitec, Brack, Microspot)**: Monitore, Laptops und Kopfhörer mit bis zu 50% Rabatt.
* **Abos (Swisscom, Sunrise, Salt)**: Aktivierungsgebühren entfallen meist komplett.
* **Kombination**: Studentenrabatt-Codes von UNiDAYS lassen sich oft zusätzlich auf Black Friday Preise anwenden.

---

## Häufige Fragen zu Black Friday Deals

### Gelten Studentenrabatte auch am Black Friday?
Bei vielen Händlern lassen sich Promo-Codes mit Black Friday Preisen kombinieren.`,
    category: "Shopping",
    image_url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c1111111-1111-4111-c111-111111111111",
    slug: "sommer-spartipps-studenten-schweiz",
    title: "Schweizer Sommer auf Sparflamme: Badeseen, Grillen & Openairs",
    excerpt: "Der Schweizer Sommer ist traumhaft. So geniessest du Aare, Zürisee und Festivals mit minimalem Budget.",
    content: `# Schweizer Sommer auf Sparflamme: Badeseen, Grillen & Openairs

Die Schweiz bietet im Sommer kostenlose Natur-Highlights.

---

## Gratis-Sommer-Highlights
* **Rheinschwimmen & Aareschwimmen**: Unbezahlbar und komplett gratis.
* **Öffentliche Grillstellen**: Von der Gemeinde bereitgestelltes Holz an Seen und Flussufern nutzen.
* **Openair Helfer-Einsätze**: Schichtarbeit gegen VIP-Zugang und Gratis-Festivalticket eintauschen.`,
    category: "Reisen",
    image_url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c2222222-2222-4222-c222-222222222222",
    slug: "fallstudie-studenten-budget-reales-beispiel",
    title: "Fallstudie: Wie Studentin Sarah in Zürich 2'400 CHF pro Jahr spart",
    excerpt: "Ein konkretes Rechenbeispiel: So kombiniert eine UZH-Studentin SBB GA Night, Neon Konto, IPV und Projekt Neptun.",
    content: `# Fallstudie: Wie Studentin Sarah in Zürich 2'400 CHF pro Jahr spart

Wir begleiten Sarah (22, UZH-Studentin), die ihr monatliches Budget durch gezieltes Kombinieren von Rabatten drastisch optimiert hat.

---

## Sarahs Spar-Erfolge im Überblick
* **SBB Halbtax Jugend + GA Night**: **CHF 450.– Ersparnis** gegenüber Einzeltickets.
* **Krankenkassen-Prämienverbilligung (IPV)**: **CHF 1'200.– Ersparnis** pro Jahr über die SVA Zürich [TODO_VERIFY: Exakten IPV Betrag Sarah Fallbeispiel bestätigen].
* **Neon Free Girokonto**: **CHF 120.– Ersparnis** an Kontogebühren.
* **Projekt Neptun Laptop**: **CHF 350.– Rabatt** auf ein neues MacBook.
* **ASVZ Sportclub**: **CHF 300.– Ersparnis** gegenüber Fitnessstudios.

Gesamtersparnis: Über **CHF 2'400.– pro Jahr** durch einfache Optimierung!`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c3333333-3333-4333-c333-333333333333",
    slug: "vorteilskarten-schweiz-isic-kulturlegi-museumspass",
    title: "Vorteilskarten im Vergleich: ISIC, KulturLegi & Schweizer Museumspass",
    excerpt: "Welche Ausweise und Rabattkarten lohnen sich für Jugendliche und Studierende in der Schweiz wirklich?",
    content: `# Vorteilskarten im Vergleich: ISIC, KulturLegi & Schweizer Museumspass

Ausweise, die dir exklusive Vergünstigungen in der Schweiz und im Ausland sichern.

---

## Die Karten im Überblick
1. **ISIC (International Student Identity Card)**: Weltweit anerkannter Studentenausweis [TODO_VERIFY: Aktuelle ISIC Jahresgebühr 2026 bestätigen].
2. **Caritas KulturLegi**: Bis zu 70% Rabatt auf Kultur und Sport für schmale Budgets.
3. **Schweizer Museumspass**: Freier Eintritt in über 500 Schweizer Museen [TODO_VERIFY: Aktueller Schweizer Museumspass Studententarif 2026 bestätigen].`,
    category: "Bildung",
    image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c4444444-4444-4444-c444-444444444444",
    slug: "wg-zimmer-finden-schweiz-tipps",
    title: "WG-Zimmer finden in Zürich, Bern & Basel: Die besten Plattformen",
    excerpt: "Günstigen Wohnraum in Schweizer Universitätsstädten finden: Plattformen, Bewerbungstipps und Fallstricke.",
    content: `# WG-Zimmer finden in Zürich, Bern & Basel: Die besten Plattformen

Die Wohnungssuche in Schweizer Städten ist kompetitiv. Mit den richtigen Vorbereitungen klappt es mit dem Traumzimmer.

---

## Die besten Plattformen
* **wgzimmer.ch**: Die führende kostenlose WG-Plattform der Schweiz.
* **WOKO, JUWO, StuWo, WoVe**: Gemeinnützige Wohnbauorganisationen für Studierende.
* **Betreibungsauskunft**: Bereithalten für den Mietvertrag.`,
    category: "Studium",
    image_url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c5555555-5555-4555-c555-555555555555",
    slug: "second-hand-brocki-schweiz-guide",
    title: "Brocki & Second-Hand Guide: Nachhaltig und günstig Möbel & Kleidung kaufen",
    excerpt: "Schweizer Brockenhäuser bieten Möbel, Geschirr und Vintage-Kleidung für WG-Einrichtungen zum Schnäppchenpreis.",
    content: `# Brocki & Second-Hand Guide: Möbel & Kleidung günstig kaufen

Wer ein WG-Zimmer einrichtet, muss nicht alles neu bei IKEA kaufen.

---

## Die besten Schweizer Brockenhäuser
* **Heilsarmee Brocki & Caritas Märkte**: In allen grossen Schweizer Städten vertreten.
* **Tutti.ch & Anibis.ch**: Gratis-Abholungen in deiner Nachbarschaft finden.`,
    category: "Shopping",
    image_url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c6666666-6666-4666-c666-666666666666",
    slug: "nebenjob-studenten-schweiz-steuern",
    title: "Nebenjob & Steuern für Studierende: Freibeträge, Stundenlohn & AHV",
    excerpt: "Was dürfen Studenten in der Schweiz steuerfrei verdienen? Stundenlöhne, AHV-Beiträge und arbeitsrechtliche Vorgaben.",
    content: `# Nebenjob & Steuern für Studierende: Freibeträge, Stundenlohn & AHV

Viele Studierende arbeiten in der Gastronomie, als Nachhilfelehrer oder Assistenten am Institut.

---

## Lohn & AHV
* **Faire Stundenlöhne**: In der Schweiz liegen studentische Stundenlöhne meist zwischen **CHF 25.– und CHF 32.–**.
* **AHV-Beitragspflicht**: Ab dem 1. Januar nach dem 17. Geburtstag sind Sozialabgaben zu entrichten [TODO_VERIFY: Gesetzliche AHV Altersgrenze 2026 bestätigen].`,
    category: "Finanzen",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

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
