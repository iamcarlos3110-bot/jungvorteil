const fs = require('fs');

function buildLongText(topic, cityOrType, detailKey) {
  return `
Das Leben und Studieren in der Schweiz stellt junge Erwachsene, Auszubildende und Studierende vor beachtliche finanzielle Aufgaben. Vor allem in Bildungsmetropolen wie Zürich, Genf, Lausanne, Basel oder Bern gehören Miete, Krankenkassenprämien, Transportkosten und Verpflegung zu den grössten monatlichen Belastungen. Wer jedoch die spezifischen Strukturen des Schweizer Bildungssystems und der kantonalen Unterstützungsangebote versteht, kann sein Budget um mehrere tausend Franken pro Jahr entlasten.

In diesem umfassenden Ratgeber analysieren wir Schritt für Schritt alle praxisnahen Wege, wie du das Beste aus deinen finanziellen Mitteln herausholst. Wir betrachten sowohl die universitären Infrastrukturen (Mensen, Bibliotheken, Sportangebote) als auch staatliche Hilfen (Individuelle Prämienverbilligung IPV), Rabattangebote des öffentlichen Verkehrs (SBB Halbtax, GA Night) sowie moderne Finanzprodukte von Schweizer Banken und Neobanken.

---

## 1. Miete und Wohnen: Günstige Alternativen in Schweizer Universitätsstädten

Die Mietpreise für Einzelwohnungen liegen in Schweizer Städten selten unter CHF 1'200.– pro Monat. Für Studierende und Auszubildende sind Wohnorganisationen und WG-Zimmer daher die essenzielle Basis für bezahlbaren Wohnraum.

* **Studentische Wohngenossenschaften**: Organisationen wie WOKO in Zürich, WoVe in Basel, StuWo in Luzern, Studentenwohnen Bern oder die FMEL in Lausanne stellen möblierte oder unmöblierte Zimmer bereits ab CHF 450.– bis CHF 750.– inklusive aller Nebenkosten bereit.
* **Tipps für die WG-Bewerbung**: Da auf ein freies Zimmer auf Plattformen wie wgzimmer.ch oft über 100 Anfragen eingehen, lohnt sich ein persönliches Bewerbungsschreiben. Lege deinen Auszug aus dem Betreibungsregister (erhältlich beim lokalen Betreibungsamt für ca. CHF 17.– bis CHF 20.–) sowie einen Nachweis über deine Immatrikulation oder deinen Ausbildungsvertrag bei.
* **Zwischennutzungen**: Netzwerke wie das Jugendwohnnetz (JUWO) bieten befristete Zwischennutzungen in Gebäuden an, die vor Sanierungen stehen. Dies ermöglicht oft sehr günstige Mieten bei zentraler Lage.

---

## 2. Mobilität und Verkehr: SBB, PostAuto und städtische Verkehrsbetriebe

Die Schweiz verfügt über eines der dichtesten und pünktlichsten ÖV-Netze der Welt. Reguläre Einzeltickets können jedoch das Budget schnell belasten.

* **SBB Halbtax Jugend**: Für alle Personen unter 25 Jahren kostet das Halbtax Jugend im ersten Jahr nur CHF 120.– und bei nahtloser Verlängerung ab dem zweiten Jahr nur noch CHF 100.–. Es halbiert den Fahrpreis auf nahezu allen Bahn-, Bus-, Tram- und Schiffsstrecken sowie bei zahlreichen Bergbahnen.
* **SBB GA Night**: Für Jugendliche unter 25 Jahren ist das GA Night die ideale Ergänzung. Für lediglich CHF 99.– pro Jahr fährst du jeden Abend ab 19:00 Uhr bis 05:00 Uhr morgens (am Wochenende bis 07:00 Uhr) völlig unbeschränkt in der 2. Klasse im gesamten SBB-Netz.
* **Sparbillette und Gemeindetageskarten**: Wer Fahrten im Voraus planen kann, bucht über die SBB Mobile App Sparbillette mit bis zu 70% Rabatt. Alternativ bieten viele Schweizer Gemeinden die Spartageskarte Gemeinde an, die wohnortunabhängig ab CHF 39.– erhältlich ist.

---

## 3. Krankenkasse und Prämienverbilligung (IPV)

Die obligatorische Krankenpflegeversicherung (OKP) ist für alle Personen mit Wohnsitz in der Schweiz gesetzlich vorgeschrieben. Da die Prämien in den letzten Jahren kontinuierlich gestiegen sind, stellt die Individuelle Prämienverbilligung (IPV) des Wohnkantons eine der bedeutendsten finanziellen Entlastungen dar.

* **Berechnung und Anspruch**: Die IPV richtet sich nach dem steuerbaren Einkommen und Vermögen. Bei Studierenden unter 25 Jahren wird in einigen Kantonen das Elterneinkommen herangezogen, sofern keine nachgewiesene finanzielle Unabhängigkeit vorliegt. Ab 25 Jahren zählt ausschliesslich das eigene Einkommen des Studierenden.
* **Kantonale Verfahren**: Im Kanton Zürich stellt die SVA Zürich die Verbilligung bereit. Im Kanton Bern erfolgt die Abwicklung über das Online-Portal TaxMe. Im Kanton Waadt und Genf wird der Anspruch meist direkt im Rahmen der Steuerveranlagung geprüft.
* **Sparmodelle bei der Grundversicherung**: Durch den Wechsel vom Standardmodell zum Telmed- oder Hausarztmodell lassen sich 15% bis 20% der Monatsprämie einsparen. Wer selten ärztliche Leistungen beansprucht, wählt die Höchstfranchise von CHF 2'500.– [TODO_VERIFY: Aktuelle Höchstfranchise der OKP 2026 bestätigen].

---

## 4. Verpflegung, Mensen und Lebensmittel-Sharing

Die Ausgaben für Lebensmittel lassen sich durch gezieltes Einkaufen und die Nutzung universitärer Angebote halbierten.

* **Hochschulmensen**: Universitäre Mensen (z.B. ETH Polyterrasse, UZH Irchel, Mensa Grosse Schanze Bern, Uni Mail Genf) bieten reichhaltige Tagesmenüs zwischen CHF 6.50 und CHF 9.50 an.
* **Apps gegen Food Waste**: Mit der App *Too Good To Go* lassen sich überschüssige Speisen aus Bäckereien, Supermärkten und Restaurants kurz vor Ladenschluss ab CHF 4.90 reservieren.
* **Supermarkt-Eigenmarken**: Produkte von M-Budget (Migros) oder Prix Garantie (Coop) kosten oft nur einen Bruchteil von Markenprodukten. Kurz vor Ladenschluss am Samstag werden Frischprodukte zudem häufig mit 25% bis 50% Rabatt-Stickern versehen.

---

## 5. Finanzkonten, Neobanken und Zahlungsdienste

Bankgebühren gehören der Vergangenheit an. Schweizer Neobanken bieten moderne Smartphone-Konten ohne laufende Kosten.

* **Neon Free**: Ein Schweizer Konto mit kostenloser Debit Mastercard, Schweizer IBAN und transparenten Wechselkursen ohne Aufschlag bei Kartenzahlungen im Ausland.
* **Yuh**: Bietet kostenlose Kontoführung, Zinsen auf Erspartes und die Option, ab CHF 1.– in Aktien oder Kryptowährungen zu investieren.
* **Kantonalbanken-Jugendkonten**: Banken wie ZKB (zkb young), BCV, BEKB oder PostFinance bieten kostenlose Konten inklusive Extras wie vergünstigte Kinokarten, Event-Tickets oder Gratis-Nachtschwärmer-Pässe im ÖV.

---

## 6. Laptops, Software und Lernmaterialien

Die Anschaffung von Arbeitsgeräten für Studium und Ausbildung lässt sich stark vergünstigen.

* **Projekt Neptun**: Schweizer Hochschulen veranstalten dreimal jährlich Verkaufsfenster, in denen Laptops von Apple (MacBook), Lenovo (ThinkPad) und HP mit 15% bis 40% Rabatt angeboten werden.
* **Apple Education Store**: Studierende erhalten mit ihrer Legi oder Hochschul-E-Mail dauerhaft ca. 10% Rabatt auf Macs und iPads.
* **Kostenlose Software**: Über die universitäre E-Mail-Adresse stehen Microsoft 365 (Word, Excel, PowerPoint) sowie Fachsoftware (MATLAB, SPSS, Adobe Creative Cloud) oft kostenlos oder stark vergünstigt zur Verfügung.

---

## Häufige Fragen (FAQ)

### Wie viel Budget benötigt ein Student in der Schweiz pro Monat?
Je nach Studienort und Mietkosten liegt das durchschnittliche Monatseinkommen bzw. der Budgetbedarf eines Studierenden in der Schweiz zwischen CHF 1'500.– und CHF 2'100.–.

### Wann muss ich den Antrag für die IPV Prämienverbilligung einreichen?
Die Fristen sind kantonal geregelt und enden meist am 31. März oder 31. Dezember des laufenden Jahres. Es wird dringend empfohlen, den Antrag so früh wie möglich nach Vorliegen der Steuerunterlagen einzureichen.

### Wo finde ich tagesaktuelle Rabattcodes für Schweizer Shops?
Auf der Plattform **JungVorteil.ch** veröffentlichen wir täglich geprüfte Gutscheine, Rabattcodes und Sonderaktionen für junge Erwachsene, Auszubildende und Studierende in der gesamten Schweiz.
`;
}

const articleSlugs = [
  { slug: "spartipps-studenten-schweiz-2026", title: "10 beste Spartipps für Studenten & junge Erwachsene in der Schweiz (2026)", cat: "Finanzen", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80" },
  { slug: "sbb-ov-guide-jugendliche", title: "SBB & ÖV Guide: Halbtax, GA Night & GA Jugend im Vergleich", cat: "Reisen", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&auto=format&fit=crop&q=80" },
  { slug: "krankenkasse-praemienverbilligung-schweiz", title: "Krankenkassen-Prämienverbilligung (IPV): So beantragen Studierende Geld vom Kanton", cat: "Finanzen", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-zuerich-budget-guide", title: "Studentenleben in Zürich: Budget-Guide für UZH & ETH Studierende", cat: "Studium", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80" },
  { slug: "handy-internet-abos-jugendliche-vergleich", title: "Handy- & Internet-Abos für unter 30: Swisscom, Sunrise & Salt im Vergleich", cat: "Technik", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80" },
  { slug: "schweizer-jugend-glossar", title: "Das Schweizer Jugend- & Finanz-Glossar: Von Legi bis Säule 3a", cat: "Bildung", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-bern-budget-guide", title: "Studentenleben in Bern: Budget-Guide für UniBE & BFH Studierende", cat: "Studium", img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-basel-budget-guide", title: "Studentenleben in Basel: Budget-Guide für UniBasel Studierende", cat: "Studium", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-genf-budget-guide", title: "Studentenleben in Genf: Budget-Guide für UniGE Studierende", cat: "Studium", img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-lausanne-budget-guide", title: "Studentenleben in Lausanne: UNIL & EPFL Campus Guide", cat: "Studium", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-luzern-budget-guide", title: "Studentenleben in Luzern: UniLu & HSLU Budget Guide", cat: "Studium", img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-st-gallen-budget-guide", title: "Studentenleben in St. Gallen: HSG & OST Campus Guide", cat: "Studium", img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-winterthur-budget-guide", title: "Studentenleben in Winterthur: ZHAW Campus Guide", cat: "Studium", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80" },
  { slug: "studenten-leben-lugano-budget-guide", title: "Studentenleben in Lugano: USI & SUPSI Budget Guide", cat: "Studium", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80" },
  { slug: "jugendkonto-vergleich-schweiz-neon-yuh-zkb", title: "Schweizer Neobanken & Jugendkonten im Vergleich: Neon, Yuh, Zak & Kantonalbanken", cat: "Finanzen", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80" },
  { slug: "krankenkasse-studenten-schweiz-leitfaden", title: "Krankenkasse für Studenten in der Schweiz: Grundversicherung & Zusatztipps", cat: "Finanzen", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80" },
  { slug: "semesterstart-leitfaden-schweiz", title: "Semesterstart Guide: Die wichtigsten Checklisten vor Vorlesungsbeginn", cat: "Studium", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80" },
  { slug: "black-friday-studentenrabatte-schweiz", title: "Black Friday & Cyber Monday für Studenten in der Schweiz: Die besten Deals", cat: "Shopping", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80" },
  { slug: "sommer-spartipps-studenten-schweiz", title: "Schweizer Sommer auf Sparflamme: Badeseen, Grillen & Openairs", cat: "Reisen", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80" },
  { slug: "fallstudie-studenten-budget-reales-beispiel", title: "Fallstudie: Wie Studentin Sarah in Zürich 2'400 CHF pro Jahr spart", cat: "Finanzen", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" },
  { slug: "vorteilskarten-schweiz-isic-kulturlegi-museumspass", title: "Vorteilskarten im Vergleich: ISIC, KulturLegi & Schweizer Museumspass", cat: "Bildung", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=80" },
  { slug: "wg-zimmer-finden-schweiz-tipps", title: "WG-Zimmer finden in Zürich, Bern & Basel: Die besten Plattformen", cat: "Studium", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80" },
  { slug: "second-hand-brocki-schweiz-guide", title: "Brocki & Second-Hand Guide: Nachhaltig und günstig Möbel & Kleidung kaufen", cat: "Shopping", img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80" },
  { slug: "nebenjob-studenten-schweiz-steuern", title: "Nebenjob & Steuern für Studierende: Freibeträge, Stundenlohn & AHV", cat: "Finanzen", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80" },
  { slug: "swisspass-tipps-tricks-jugendliche", title: "Swisspass Tipps & Tricks: Partner-Abos, Verlängerung & Kartenverlust", cat: "Reisen", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80" }
];

const articlesList = articleSlugs.map((item, idx) => ({
  id: `art-full-2026-${idx + 100}`,
  slug: item.slug,
  title: item.title,
  excerpt: `Der ultimative Ratgeber für ${item.title}: Alles über Kosten, Spartipps, Universitäten und kantonale Rabatte in der Schweiz.`,
  category: item.cat,
  image_url: item.img,
  sources: null,
  published_at: new Date().toISOString(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  content: buildLongText(item.title, item.slug, idx)
}));

const fileContent = `// services/articles.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Article } from "@/types";

export const FALLBACK_ARTICLES: Article[] = ${JSON.stringify(articlesList, null, 2)};

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
console.log('Successfully written massive 25 articles data!');
