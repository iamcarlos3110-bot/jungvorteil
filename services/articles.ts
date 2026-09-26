// services/articles.ts
import { createPublicClient as createClient } from "@/lib/supabase/server";
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

## 2. Mensa und Food-Sharing statt Restaurant
Ein Restaurantbesuch in Zürich, Bern oder Genf kostet schnell CHF 25.– bis CHF 35.– pro Mahlzeit.
* Nutze die universitären Mensen (UZH, ETH, UniBE, EPFL, UniFR), wo Studentengerichte meist zwischen **CHF 6.50 und CHF 9.50** liegen.
* Apps wie *Too Good To Go* ermöglichen es, Restaurant- und Bäckereiessen kurz vor Ladenschluss für ein Drittel des Preises (ab CHF 4.90) zu retten.

## 3. Krankenkassen-Prämienverbilligung (IPV) beantragen
Der wohl grösste Hebel für junge Schweizer: Fast alle Kantone gewähren Jugendlichen und Studierenden mit geringem Einkommen eine erhebliche Prämienverbilligung auf die obligatorische Grundversicherung.
* In Kantonen wie Zürich, Bern oder Waadt beträgt die Reduktion oft **bis zu 80%** der Grundversicherungsprämie.
* Wichtig: Die Antragsfristen variieren je nach Kanton (meist bis 31. März oder 31. Oktober).

## 4. Kostenloses Bankkonto mit Jugend-Bonus
Zahle niemals Kontoführungsgebühren! Schweizer Banken bieten tolle Konditionen für junge Kunden.
* Neobanken wie **Neon** oder **Yuh** bieten kostenlose Konten mit günstigen Auslandstransaktionen und ohne Kartengebühren.
* Kantonalbanken (z.B. ZKB young, BCV, BEKB) bieten Gratis-Girokonten inklusive Kinorabatttag oder vergünstigten Festival-Tickets.

## 5. Technik über Projekt Neptun & Apple Education kaufen
Vor Semesterbeginn sollten Laptops und Tablets niemals zum Vollpreis gekauft werden.
* **Projekt Neptun**: Dreimal jährlich bieten Schweizer Hochschulen Laptops (MacBook, Lenovo ThinkPad, HP) mit Rabatten von **15% bis 40%** an.
* **Apple Education Store**: Dauerhaft ca. 10% Rabatt auf Macs und iPads für Studierende mit gültiger Legi.

---

## Fazit
Wer seine Fixkosten bei ÖV, Banken, Telefonie und Versicherung einmalig optimiert, spart pro Jahr rasch mehr als **CHF 2'000.–**. Entdecke alle aktuellen Rabattcodes auf JungVorteil!`,
    category: "Finanzen",
    image_url: null,
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
* **Preis**: **CHF 120.–** im 1. Jahr / **CHF 100.–** im Folgejahr für Jugendliche unter 25 Jahren (Erwachsene zahlen CHF 190.–).
* **Lohnt sich ab**: Ca. 3 bis 4 Fahrten zwischen den grossen Schweizer Städten pro Jahr.

### 2. GA Night (ehemals Seven25)
Mit dem GA Night reisen Jugendliche unter 25 Jahren ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) unbeschränkt in der 2. Klasse.
* **Preis**: **CHF 99.–** pro Jahr.
* **Ideal für**: Ausgang, Spätschichten und Wochenendausflüge am Abend.

### 3. GA Jugend & GA Studierende (16–25 / 25–30 Jahre)
Das Generalabonnement ermöglicht freie Fahrt im gesamten Schweizer Streckennetz.
* **Preis GA Jugend (unter 25)**: **CHF 2'900.–** pro Jahr.
* **Preis GA Studierende (25–30)**: **CHF 3'450.–** pro Jahr für immatrikulierte Studierende an anerkannten Schweizer Universitäten.

---

## Spartipps für Gelegenheitsfahrer

1. **Sparbillette & Spartageskarten**: Bis zu 70% Rabatt bei frühzeitiger Buchung in der SBB Mobile App.
2. **Spartageskarte Gemeinde**: Viele Schweizer Gemeinden bieten vergünstigte Tageskarten für Einwohner an.

Nutze JungVorteil, um aktuelle SBB Aktionen und Kombi-Angebote für den öffentlichen Verkehr zu finden!`,
    category: "Reisen",
    image_url: null,
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a3333333-3333-4333-a333-333333333333",
    slug: "krankenkasse-praemienverbilligung-schweiz",
    title: "Krankenkassen-Prämienverbilligung: So beantragen Studierende Geld vom Kanton",
    excerpt: "Wusstest du, dass dir als Student in der Schweiz monatlich hunderte Franken Prämienverbilligung zustehen können? Ein Schritt-für-Schritt Ratgeber.",
    content: `# Krankenkassen-Prämienverbilligung: So beantragen Studierende Geld vom Kanton

Die obligatorische Krankenpflegeversicherung (OKP) gehört in der Schweiz zu den grössten monatlichen Budgetposten für junge Menschen. Da die Prämien jährlich steigen, stellen die Kantone Gelder für die individuelle Prämienverbilligung (IPV) bereit.

---

## Anspruchsvoraussetzungen

Der Anspruch richtet sich nach deinem steuerbaren Einkommen und Vermögen des Vorjahres.
* **Studierende unter 25**: In vielen Kantonen wird das Einkommen der Eltern angerechnet, es sei denn, man führt nachweislich einen eigenen Haushalt und ist finanziell unabhängig.
* **Studierende über 25 / Lernende**: Hier gilt in der Regel ausschliesslich das eigene Einkommen des Studierenden.

---

## Kantonale Unterschiede im Detail

* **Kanton Zürich (SVA Zürcher IPV)**: Jugendliche in Ausbildung erhalten bis zu **80% Verbilligung** der Durchschnittsprämie.
* **Kanton Bern (ASV)**: Die Einreichung erfolgt online über das Portal TaxMe.
* **Kanton Waadt / Genf**: In der Romandie wird die Prämienverbilligung oft automatisch anhand der Steuererklärung berechnet.

---

## Wichtige Schritte zur Beantragung

1. **Steuererklärung pünktlich einreichen**: Die Steuerdaten sind die Grundlage für die Berechnung.
2. **Antragsfrist beachten**: In etlichen Kantonen läuft die Frist am **31. Dezember oder 31. März** ab. Wer die Frist verpasst, verliert den Anspruch für das gesamte Jahr!
3. **Fragebogen ausfüllen**: Auf der Website der SVA deines Wohnkantons den Antrag für IPV stellen.

Bleibe informiert mit JungVorteil über finanzielle Entlastungen im Schweizer Studienalltag!`,
    category: "Finanzen",
    image_url: null,
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

---

## Sport & Freizeit: Der ASVZ Vorteil
Als immatrikulierter Student an UZH, ETH oder ZHAW ist die Mitgliedschaft im **Akademischen Sportverband Zürich (ASVZ)** im Semesterbeitrag enthalten oder extrem günstig (**ca. CHF 350.–** pro Jahr für Partnerhochschulen).
* Über 120 Sportarten (Fitnesszentren Polyterrasse, Irchel, Hönggerberg, Fluntern).
* Sauna, Kletterwände und Gratis-Gruppenkurse.

---

## Verpflegung rund um den Campus
* **ETH Mensa Polyterrasse**: Schmackhafte Tagesmenüs für **CHF 6.90 bis CHF 9.50**.
* **Zulauf am Irchel-Park**: Perfekt für mitgebrachte Picknicks im Sommer.

Finde weitere exklusive Zürcher Rabatte bei Restaurants, Kinos und Events direkt auf JungVorteil!`,
    category: "Studium",
    image_url: null,
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

Als junger Mensch in der Schweiz ist schnelles mobiles Internet unverzichtbar. Glücklicherweise bieten fast alle Mobilfunkanbieter spezielle Rabatte für Personen unter 30 Jahren (Young Tarife).

---

## Die Top-Anbieter im Vergleich

### 1. Swisscom blue Mobile Youth
* **Vorteile**: Bestes Netz der Schweiz (CH-Testsieger), inklusive 5G Speed.
* **Preis**: **ab CHF 59.90** statt CHF 69.90 pro Monat.

### 2. Sunrise Up Mobile Youth
* **Vorteile**: 50% Rabatt für Jugendliche unter 30 Jahren auf viele Abos.
* **Preis**: **ca. CHF 29.50** pro Monat für unlimitiertes Internet in CH.

### 3. Salt Youth
* **Vorteile**: Sehr gutes Preis-Leistungs-Verhältnis inklusive EU-Roaming.
* **Preis**: **ca. CHF 29.95** pro Monat.

---

## Worauf du achten solltest

1. **Mindestvertragsdauer**: Wähle wenn möglich Abos ohne lange Bindung (1 Monat Kündigungsfrist).
2. **Roaming-Guthaben**: Wenn du gerne reist, achte darauf, dass Datenvolumen in der EU enthalten ist.

Prüfe die neuesten Promo-Codes für Telefonie und Internet auf JungVorteil!`,
    category: "Technik",
    image_url: null,
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "a6666666-6666-4666-a666-666666666666",
    slug: "schweizer-jugend-glossar",
    title: "Das Schweizer Jugend- & Finanz-Glossar: Von Lehre bis Säule 3a",
    excerpt: "Was bedeuten Begriffe wie GA-Night, Legi, IPV, Säule 3a und WOKO? Das ultimative Nachschlagewerk für junge Leute in der Schweiz.",
    content: `# Das Schweizer Jugend- & Finanz-Glossar: Von Lehre bis Säule 3a

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

Finde auf JungVorteil die besten Rabatte passend zu deiner Lebenssituation!`,
    category: "Bildung",
    image_url: null,
    sources: null,
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export async function getArticles(limit = 6): Promise<Article[]> {
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
        setTimeout(() => reject(new Error("Timeout")), 2500)
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
  try {
    const supabase = await createClient();
    const { data } = await Promise.race([
      supabase.from("articles").select("*").eq("slug", slug).maybeSingle(),
      new Promise<{ data: null }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2500)
      ),
    ]);

    if (data) return data as Article;
  } catch (err) {
    console.error("Error/Timeout fetching article by slug:", err);
  }

  // Exact match fallback only. If slug does not exist, returns null (triggering 404)
  return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
}


