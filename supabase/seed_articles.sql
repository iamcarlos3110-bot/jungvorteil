-- Seed Articles for JungVorteil Magazin (AdSense Quality Standard)
-- All factual data (prices, cantonal deadlines, discount percentages) marked with TODO_VERIFY

BEGIN;

INSERT INTO public.articles (id, slug, title, excerpt, content, category, published_at) VALUES 
(
  'a1111111-1111-4111-a111-111111111111',
  'spartipps-studenten-schweiz-2026',
  '10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)',
  'Die Schweiz gilt als teures Pflaster – doch wer die richtigen Kniffe kennt, spart im Studium und Alltag tausende Franken pro Jahr. Hier sind die 10 effektivsten Spartipps.',
  '# 10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)

Das Leben und Studieren in der Schweiz stellt junge Erwachsene finanziell oft vor grosse Herausforderungen. Zwischen Mietkosten für WGs, Krankenkassenprämien und teuren Lebensmitteln bleibt das Budget knapp. Doch mit den richtigen Strategien lässt sich extrem viel Geld sparen.

---

## 1. Mobilität clever nutzen: Halbtax & GA Night
Der öffentliche Verkehr in der Schweiz (SBB, PostAuto und städtische Verkehrsbetriebe) ist erstklassig, aber regulär kostspielig. 
* **Halbtax Jugend**: Für Personen unter 25 Jahren kostet das Halbtax ab dem 2. Jahr nur -- TODO_VERIFY: Halbtax Jugend Preis ca. CHF 120.-- pro Jahr.
* **GA Night**: Wer abends ab 19:00 Uhr unterwegs ist, zahlt mit dem GA Night nur -- TODO_VERIFY: GA Night Preis ca. CHF 99.-- pro Jahr bis zum 25. Geburtstag.

## 2. Mensa und Food-Sharing statt Restaurant
Ein Restaurantbesuch in Zürich, Bern oder Genf kostet schnell CHF 25.– bis CHF 35.– pro Mahlzeit.
* Nutze die universitären Mensen (UZH, ETH, UniBE, EPFL), wo Studentengerichte meist zwischen -- TODO_VERIFY: Mensapreis CHF 6.50 bis CHF 9.50 -- liegen.
* Apps wie *Too Good To Go* ermöglichen es, Restaurant- und Bäckereiessen kurz vor Ladenschluss für ein Drittel des Preises zu retten.

## 3. Krankenkassen-Prämienverbilligung beantragen
Der wohl grösste Hebel für junge Schweizer: Fast alle Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Prämienverbilligung (IPV) auf die obligatorische Grundversicherung.
* In Kantonen wie Zürich oder Bern beträgt die Reduktion oft -- TODO_VERIFY: bis zu 50% bis 80% der Grundversicherungsprämie --.
* Wichtig: Die Antragsfristen variieren je nach Kanton (meist bis 31. März oder 31. Oktober).

## 4. Kostenloses Bankkonto mit Jugend-Bonus
Zahle niemals Kontoführungsgebühren! Schweizer Banken buhlen intensiv um junge Kunden.
* Neobanken wie **Neon** oder **Yuh** bieten kostenlose Konten mit günstigen Auslandstransaktionen.
* Kantonalbanken (z.B. ZKB young, BCV) bieten oft Gratis-Girokonten inklusive Kinorabatttag oder vergünstigten Festival-Tickets.

## 5. Technik über Projekt Neptun & Apple Education kaufen
Vor Semesterbeginn sollten Laptops und Tablets niemals zum Vollpreis gekauft werden.
* **Projekt Neptun**: Dreimal jährlich bieten Schweizer Hochschulen Laptops (MacBook, Lenovo ThinkPad, HP) mit Rabatten von -- TODO_VERIFY: 15% bis 40% -- an.
* **Apple Education Store**: Dauerhaft ca. 10% Rabatt auf Macs und iPads für Studierende mit gültiger Legi.

---

## Fazit
Wer seine Fixkosten bei ÖV, Banken, Telefonie und Versicherung einmalig optimiert, spart pro Jahr rasch mehr als **CHF 2'000.–**. Entdecke alle aktuellen Rabattcodes auf JungVorteil!',
  'Finanzen',
  NOW()
),
(
  'a2222222-2222-4222-a222-222222222222',
  'sbb-ov-guide-jugendliche',
  'SBB & ÖV Guide: Halbtax, GA Night & Seven25 im Vergleich',
  'Welches Zug-Abo lohnt sich für Jugendliche und Studierende in der Schweiz wirklich? Ein umfassender Vergleich von Preisen, Konditionen und Spartipps.',
  '# SBB & ÖV Guide: Halbtax, GA Night & Seven25 im Vergleich

Für Mobilität in der Schweiz ist die SBB das Rückgrat des Alltags. Egal ob für das tägliche Pendeln zur Fachhochschule oder den Ausflug in die Berge am Wochenende – Zugfahren muss nicht teuer sein.

---

## Die wichtigsten SBB Abos im Überblick

### 1. Halbtax Jugend (bis 25 Jahre)
Das Halbtax halbiert den Preis für fast alle Strecken der SBB, PostAuto und vieler Bergbahnen.
* **Preis**: -- TODO_VERIFY: CHF 120.-- im 1. Jahr / CHF 100.-- Folgejahr für Jugend -- (Erwachsene zahlen CHF 190.--).
* **Lohnt sich ab**: Ca. 3 bis 4 Fahrten zwischen den grossen Schweizer Städten pro Jahr.

### 2. GA Night (ehemals Seven25)
Mit dem GA Night reisen Jugendliche unter 25 Jahren ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) unbeschränkt in der 2. Klasse.
* **Preis**: -- TODO_VERIFY: CHF 99.-- pro Jahr --.
* **Ideal für**: Ausgang, Spätschichten und Wochenendausflüge am Abend.

### 3. GA Jugend & GA Studierende (16–25 / 25–30 Jahre)
Das Generalabonnement ermöglicht freie Fahrt im gesamten Schweizer Streckennetz.
* **Preis GA Jugend (unter 25)**: -- TODO_VERIFY: CHF 2''900.-- pro Jahr --.
* **Preis GA Studierende (25–30)**: -- TODO_VERIFY: CHF 3''450.-- pro Jahr -- für immatrikulierte Studierende an anerkannten Schweizer Universitäten.

---

## Spartipps für Gelegenheitsfahrer

1. **Sparbillette & Spartageskarten**: Bis zu 70% Rabatt bei frühzeitiger Buchung in der SBB Mobile App.
2. **Mitfahrbörsen & Tageskarten der Gemeinden**: Viele Schweizer Gemeinden bieten verünstigte Tageskarten für Einwohner an.

Nutze JungVorteil, um aktuelle SBB Aktionen und Kombi-Angebote für den öffentlichen Verkehr zu finden!',
  'Reisen',
  NOW()
),
(
  'a3333333-3333-4333-a333-333333333333',
  'krankenkasse-praemienverbilligung-schweiz',
  'Krankenkassen-Prämienverbilligung: So beantragen Studierende Geld vom Kanton',
  'Wusstest du, dass dir als Student in der Schweiz monatlich hunderte Franken Prämienverbilligung zustehen können? Ein Schritt-für-Schritt Ratgeber.',
  '# Krankenkassen-Prämienverbilligung: So beantragen Studierende Geld vom Kanton

Die obligatorische Krankenpflegeversicherung (OKP) gehört in der Schweiz zu den grössten monatlichen Budgetposten für junge Menschen. Da die Prämien jährlich steigen, stellen die Kantone Gelder für die individuelle Prämienverbilligung (IPV) bereit.

---

## Anspruchsvoraussetzungen

Der Anspruch richtet sich nach deinem steuerbaren Einkommen und Vermögen des Vorjahres.
* **Studierende unter 25**: In vielen Kantonen wird das Einkommen der Eltern angerechnet, es sei denn, man führt nachweislich einen eigenen Haushalt und ist finanziell unabhängig.
* **Studierende über 25 / Lernende**: Hier gilt in der Regel ausschliesslich das eigene Einkommen des Studierenden.

---

## Kantonale Unterschiede im Detail

* **Kanton Zürich (SVA Zürcher IPV)**: Jugendliche in Ausbildung erhalten bis zu -- TODO_VERIFY: 80% Verbilligung der Durchschnittsprämie --.
* **Kanton Bern (ASV)**: Die Einreichung erfolgt online über das Portal TaxMe.
* **Kanton Waadt / Genf**: In der Romandie wird die Prämienverbilligung oft automatisch anhand der Steuererklärung berechnet.

---

## Wichtige Schritte zur Beantragung

1. **Steuererklärung pünktlich einreichen**: Die Steuerdaten sind die Grundlage für die Berechnung.
2. **Antragsfrist beachten**: In etlichen Kantonen läuft die Frist am -- TODO_VERIFY: 31. Dezember oder 31. März -- ab. Wer die Frist verpasst, verliert den Anspruch für das gesamte Jahr!
3. **Fragebogen ausfüllen**: Auf der Website der SVA deines Wohnkantons den Antrag für IPV stellen.

Bleibe informiert mit JungVorteil über finanzielle Entlastungen im Schweizer Studienalltag.',
  'Finanzen',
  NOW()
),
(
  'a4444444-4444-4444-a444-444444444444',
  'studenten-leben-zuerich-budget-guide',
  'Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende',
  'Zürich ist eine der teuersten Städte der Welt. Doch mit den richtigen Adressen, der ASVZ-Sportkarte und günstigen Mensen lässt sich das Leben an der Limmat geniessen.',
  '# Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende

Zürich belegt regelmässig Spitzenplätze in weltweiten Lebenshaltungskosten-Rankings. Wer an der Universität Zürich (UZH) oder der ETH Zürich studiert, muss das eigene Budget genau planen.

---

## Günstig Wohnen in Zürich
* **WOKO (Studentische Wohngenossenschaft)**: Bietet Zimmer in WGs ab -- TODO_VERIFY: CHF 500.-- bis CHF 750.-- pro Monat -- inklusive Nebenkosten.
* **JUWO (Jugendwohnnetz)**: Günstige Zwischennutzungen für Personen unter 28 Jahren in Ausbildung.

---

## Sport & Freizeit: Der ASVZ Vorteil
Als immatrikulierter Student an UZH, ETH oder ZHAW ist die Mitgliedschaft im **Akademischen Sportverband Zürich (ASVZ)** im Semesterbeitrag enthalten oder extrem günstig (-- TODO_VERIFY: ca. CHF 350.-- pro Jahr für Partnerhochschulen --).
* Über 120 Sportarten (Fitnesszentren Polyterrasse, Irchel, Hönggerberg, Fluntern).
* Sauna, Kletterwände und Gratis-Gruppenkurse.

---

## Verpflegung rund um den Campus
* **ETH Mensa Polyterrasse**: Schmackhafte Tagesmenüs für -- TODO_VERIFY: CHF 6.90 bis CHF 9.50 --.
* **Zulauf am Irchel-Park**: Perfekt für mitgebrachte Picknicks im Sommer.

Finde weitere exklusive Zürcher Rabatte bei Restaurants, Kinos und Events direkt auf JungVorteil!',
  'Studium',
  NOW()
),
(
  'a5555555-5555-4555-a555-555555555555',
  'handy-internet-abos-jugendliche-vergleich',
  'Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich',
  'Brauchst du unlimitiertes 5G-Datenvolumen in der Schweiz und Roaming in Europa? Wir vergleichen die besten Jugendtarife der führenden Telekom-Anbieter.',
  '# Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich

Als junger Mensch in der Schweiz ist schnelles mobiles Internet unverzichtbar. Glücklicherweise bieten fast alle Mobilfunkanbieter spezielle Rabatte für Personen unter 30 Jahren (Young Tarife).

---

## Die Top-Anbieter im Vergleich

### 1. Swisscom blue Mobile Youth
* **Vorteile**: Bestes Netz der Schweiz (CH-Testsieger), inklusive 5G Speed.
* **Preis**: -- TODO_VERIFY: ab CHF 59.90 statt CHF 69.90 pro Monat --.

### 2. Sunrise Up Mobile Youth
* **Vorteile**: 50% Rabatt für Jugendliche unter 30 Jahren auf viele Abos.
* **Preis**: -- TODO_VERIFY: ca. CHF 29.50 pro Monat für unlimitiertes Internet in CH --.

### 3. Salt Youth
* **Vorteile**: Sehr gutes Preis-Leistungs-Verhältnis inklusive EU-Roaming.
* **Preis**: -- TODO_VERIFY: ca. CHF 29.95 pro Monat --.

---

## Worauf du achten solltest

1. **Mindestvertragsdauer**: Wähle wenn möglich Abos ohne lange Bindung (1 Monat Kündigungsfrist).
2. **Roaming-Guthaben**: Wenn du gerne reist, achte darauf, dass Datenvolumen in der EU enthalten ist.

Prüfe die neuesten Promo-Codes für Telefonie und Internet auf JungVorteil!',
  'Technik',
  NOW()
),
(
  'a6666666-6666-4666-a666-666666666666',
  'schweizer-jugend-glossar',
  'Das Schweizer Jugend- & Finanz-Glossar: Von Lehre bis Säule 3a',
  'Was bedeuten Begriffe wie GA-Night, Legi, IPV, Säule 3a und WOKO? Das ultimative Nachschlagewerk für junge Leute in der Schweiz.',
  '# Das Schweizer Jugend- & Finanz-Glossar: Von Lehre bis Säule 3a

Wer in der Schweiz aufwächst oder zum Studium einreist, begegnet zahlreichen spezifischen Begriffen rund um Bildung, Mobilität und Finanzen. Dieses Glossar erklärt die wichtigsten Fachausdrücke einfach und verständlich.

---

## Begriffe im Überblick

* **Legi**: Der offizielle Studierendenausweis einer Schweizer Hochschule oder Universität. Er dient als Nachweis für Studentenrabatte.
* **Halbtax**: Ein Abonnement des öffentlichen Verkehrs, das 50% Rabatt auf Billette gewährt.
* **GA (Generalabonnement)**: Freie Fahrt im gesamten Schweizer ÖV-Netz.
* **IPV (Individuelle Prämienverbilligung)**: Staatliche Unterstützung zur Reduktion der monatlichen Krankenkassenprämien.
* **Säule 3a**: Die private, steuerbegünstigte Altersvorsorge in der Schweiz. Bereits ab 18 Jahren lohnt es sich, kleine Beträge einzuzahlen.
* **Lehre / EFZ**: Die duale Berufsbildung in der Schweiz, die mit dem Eidgenössischen Fähigkeitszeugnis abschliesst.
* **WOKO / JUWO**: Genossenschaftliche Wohnorganisationen für Studierende und Jugendliche in Städten wie Zürich.

---

Finde auf JungVorteil die besten Rabatte passend zu deiner Lebenssituation!',
  'Bildung',
  NOW()
),
(
  'a7777777-7777-4777-a777-777777777777',
  'back-to-school-uni-laptops-vergleich',
  'Back to School Guide 2026: Die besten Laptops & Tablets fürs Studium mit Rabatt',
  'MacBook Air, iPad Air oder Lenovo ThinkPad? Wie du pünktlich zum Semesterstart von Bildungsinstituts-Rabatten profitierst.',
  '# Back to School Guide 2026: Die besten Laptops & Tablets fürs Studium mit Rabatt

Der Start ins neue Semester an Uni, ETH oder Fachhochschule steht bevor. Ein zuverlässiger Laptop ist das wichtigste Werkzeug für Vorlesungen, Übungen und Prüfungen.

---

## Welche Geräte eignen sich am besten?

### 1. Apple MacBook Air (M2 / M3)
* **Vorteile**: Extrem lange Akkulaufzeit (bis zu 18 Stunden), lautlos ohne Lüfter, leicht.
* **Rabatt**: Über Apple Education Store ca. -- TODO_VERIFY: 10% Rabatt + Geschenk-Gutschein bei der Back-to-School Aktion --.

### 2. Lenovo ThinkPad L- & T-Serie
* **Vorteile**: Robust, hervorragende Tastatur, viele Anschlüsse.
* **Rabatt**: Über Projekt Neptun mit bis zu -- TODO_VERIFY: 40% Studentenrabatt --.

---

## Checkliste vor dem Kauf

1. Vergleiche die Anforderungen deines Studiengangs (z.B. Informatik/Maschinenbau erfordern oft spezifische Grafikleistung).
2. Nutze deine universitäre E-Mail-Adresse (`.ch`), um den Rabatt im Checkout freizuschalten.

Entdecke alle Tech-Deals auf JungVorteil!',
  'Technik',
  NOW()
),
(
  'a8888888-8888-4888-a888-888888888888',
  'studenten-leben-bern-budget-guide',
  'Studentenleben in Bern: Uni Bern Budget-Guide & Geheimtipps',
  'Gemütlich, überschaubar und wunderschön: Studieren in Bern bietet eine hohe Lebensqualität. So schonst du deinen Geldbeutel in der Bundeshauptstadt.',
  '# Studentenleben in Bern: Budget-Guide & Geheimtipps

Bern überzeugt durch kurze Wege, die Aare im Sommer und eine entspannte universitäre Atmosphäre. Die Universität Bern gehört zu den renommiertesten Universitäten der Schweiz.

---

## Wohnen & Mensa in Bern
* **Studentisches Wohnen Bern (vbsw)**: Vermittelt bezahlbare Zimmer in Bern und Umgebung.
* **Mensa Gesellschaft von Roll**: Bietet abwechslungsreiche Menüs für Studierende ab -- TODO_VERIFY: CHF 7.00 --.

---

## Freizeit & Kultur im Bärenkanton
* **Aareschwimmen**: Im Sommer das beste kostenlose Vergnügen der Schweiz.
* **Museumscard Bern**: Vergünstigter Zutritt zu allen Museen der Bundesstadt.

Entdecke alle Berner Angebote auf JungVorteil!',
  'Studium',
  NOW()
);

COMMIT;
