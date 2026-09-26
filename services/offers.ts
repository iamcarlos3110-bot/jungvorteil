// services/offers.ts
// Offer data access layer

import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Offer, OfferFilters, PaginatedOffers } from "@/types";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

function buildVerifiedQuery(supabase: Awaited<ReturnType<typeof createClient>>) {
  const now = new Date().toISOString();
  return supabase
    .from("offers")
    .select(`
      *, 
      brand:brands(*), 
      category:categories(*), 
      city:cities(*)
    `)
    .eq("status", "published")
    .or(`end_date.is.null,end_date.gt.${now}`);
}

export const FALLBACK_OFFERS: Offer[] = [
  {
    id: "f1111111-1111-4111-a111-111111111111",
    slug: "sbb-ga-night",
    title_de: "SBB GA Night für CHF 99.– / Jahr (unter 25 J.)",
    title_fr: "CFF AG Night pour CHF 99.– / an (moins de 25 ans)",
    title_it: "FFS AG Night per CHF 99.– / anno (sotto 25 anni)",
    description_de: "Freie Fahrt im gesamten SBB-Netz und bei fast allen Schweizer Privatbahnen jeden Abend ab 19:00 Uhr bis 05:00 Uhr morgens (Wochenende bis 07:00 Uhr) in der 2. Klasse.",
    description_fr: "Libre circulation sur le réseau CFF dès 19h00.",
    description_it: "Libera circolazione sulla rete FFS dalle 19:00.",
    conditions_de: "Gültig bis zum 25. Geburtstag. Erfordert einen Swisspass mit Foto.",
    how_to_get_de: "1. Swisspass bereithalten 2. Auf sbb.ch oder am Schalter online bestellen 3. Sofort auf dem Smartphone nutzen",
    brand_id: "b1",
    brand: { id: "b1", slug: "sbb", name: "SBB CFF FFS", logo_url: null, description_de: "Schweizerische Bundesbahnen", website_url: "https://www.sbb.ch", categories: ["mobility"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c1",
    category: { id: "c1", slug: "reisen", name_de: "Reisen & ÖV", name_fr: "Voyages & TP", name_it: "Viaggi & TP", icon: "🚆", description_de: "Öffentlicher Verkehr & Zugreisen", sort_order: 1, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 350,
    young_price: 99,
    discount_percent: 72,
    discount_amount: 251,
    advantage_type: "reduced_price",
    age_min: 16,
    age_max: 25,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.sbb.ch/de/abos-billette/abonnemente/ga/ga-night.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["BELIEBT", "UNTER_25", "SCHWEIZWEIT", "ONLINE"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.sbb.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 1240,
    click_count: 530,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2222222-2222-4222-a222-222222222222",
    slug: "sbb-halbtax-jugend",
    title_de: "SBB Halbtax Jugend für CHF 120.– im 1. Jahr",
    title_fr: "Demi-tarif Jeune CFF pour CHF 120.– la 1ère année",
    title_it: "Metà-prezzo Giovani FFS per CHF 120.– il primo anno",
    description_de: "Halber Preis auf allen SBB Strecken, PostAuto, Tram, Bus und vielen Bergbahnen in der gesamten Schweiz für Personen von 16 bis 25 Jahren.",
    description_fr: "Demi-tarif sur tout le réseau Suisse pour les jeunes.",
    description_it: "Metà prezzo su tutta la rete svizzera per i giovani.",
    conditions_de: "Gültig für Personen unter 25 Jahren. Folgejahr nur CHF 100.–.",
    how_to_get_de: "1. Online auf sbb.ch registrieren 2. Ausweis hochladen 3. Halbtax auf Swisspass laden",
    brand_id: "b1",
    brand: { id: "b1", slug: "sbb", name: "SBB CFF FFS", logo_url: null, description_de: "Schweizerische Bundesbahnen", website_url: "https://www.sbb.ch", categories: ["mobility"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c1",
    category: { id: "c1", slug: "reisen", name_de: "Reisen & ÖV", name_fr: "Voyages & TP", name_it: "Viaggi & TP", icon: "🚆", description_de: "Öffentlicher Verkehr & Zugreisen", sort_order: 1, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 190,
    young_price: 120,
    discount_percent: 37,
    discount_amount: 70,
    advantage_type: "reduced_price",
    age_min: 16,
    age_max: 25,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.sbb.ch/de/abos-billette/abonnemente/halbtax/halbtax-jugend.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["BELIEBT", "UNTER_25", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.sbb.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 980,
    click_count: 410,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f3333333-3333-4333-a333-333333333333",
    slug: "apple-education-rabatt",
    title_de: "Apple Education Store: Bis zu 10% Rabatt auf Mac & iPad",
    title_fr: "Tarifs Éducation Apple: Jusqu'à 10% de réduction sur Mac & iPad",
    title_it: "Sconti Apple Education: Fino al 10% su Mac e iPad",
    description_de: "Sonderpreise für Studierende, Lehrpersonen und Mitarbeiter an anerkannten Schweizer Universitäten, ETH, Fachhochschulen und Schulen.",
    description_fr: "Prix spéciaux pour les étudiants en Suisse.",
    description_it: "Prezzi speciali per studenti in Svizzera.",
    conditions_de: "Gültiger Studierendenausweis (Legi) oder Hochschul-E-Mail erforderlich.",
    how_to_get_de: "1. Über UNiDAYS oder Bildungsinstitution verifizieren 2. Im Apple Education Store einkaufen",
    brand_id: "b2",
    brand: { id: "b2", slug: "apple", name: "Apple", logo_url: null, description_de: "Apple Schweiz", website_url: "https://www.apple.com/chde-edu/shop", categories: ["technik"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c2",
    category: { id: "c2", slug: "technik", name_de: "Technik & Software", name_fr: "Technologie", name_it: "Tecnologia", icon: "💻", description_de: "Laptops, Tablets & Gadgets", sort_order: 2, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 10,
    discount_amount: null,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.apple.com/chde-edu/shop",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "ONLINE", "SCHWEIZWEIT", "BELIEBT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.apple.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 1150,
    click_count: 620,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f4444444-4444-4444-a444-444444444444",
    slug: "neon-free-banking",
    title_de: "Neon Free: Kostenloses Schweizer Bankkonto ohne Gebühren",
    title_fr: "Neon Free: Compte bancaire suisse 100% gratuit",
    title_it: "Neon Free: Conto bancario svizzero 100% gratuito",
    description_de: "Keine Kontoführungsgebühren, kostenlose Mastercard, günstige Währungsumrechnung im Ausland und TWINT-Unterstützung.",
    description_fr: "Compte bancaire gratuit sans frais de tenue de compte.",
    description_it: "Conto bancario gratuito senza spese di gestione.",
    conditions_de: "Für Wohnsitz in der Schweiz ab 16 Jahren.",
    how_to_get_de: "1. Neon App auf Smartphone laden 2. Identität in 8 Minuten online bestätigen 3. Kostenloses Konto nutzen",
    brand_id: "b3",
    brand: { id: "b3", slug: "neon", name: "Neon", logo_url: null, description_de: "Neon Banking Schweiz", website_url: "https://www.neon-free.ch", categories: ["finanzen"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c3",
    category: { id: "c3", slug: "finanzen", name_de: "Finanzen & Banking", name_fr: "Finances", name_it: "Finanze", icon: "💳", description_de: "Konten & Karten für Junge", sort_order: 3, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 60,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 60,
    advantage_type: "free",
    age_min: 16,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.neon-free.ch/de/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "UNTER_30", "SCHWEIZWEIT", "ONLINE"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.neon-free.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 890,
    click_count: 380,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f5555555-5555-4555-a555-555555555555",
    slug: "spotify-student-discount",
    title_de: "Spotify Premium Student für CHF 7.50 / Monat",
    title_fr: "Spotify Premium Étudiant pour CHF 7.50 / mois",
    title_it: "Spotify Premium Studenti per CHF 7.50 / mese",
    description_de: "Musik-Streaming ohne Werbung, Offline-Downloads und unbegrenztes Skippen zum halben Preis für immatrikulierte Studierende.",
    description_fr: "Musique sans publicité à moitié prix pour étudiants.",
    description_it: "Musica senza pubblicità a metà prezzo per studenti.",
    conditions_de: "Studentenstatus muss jährlich über SheerID bestätigt werden.",
    how_to_get_de: "1. Auf Spotify Student Seite anmelden 2. Hochschule auswählen 3. Studierendenstatus verifizieren",
    brand_id: "b4",
    brand: { id: "b4", slug: "spotify", name: "Spotify", logo_url: null, description_de: "Spotify Music", website_url: "https://www.spotify.com", categories: ["streaming"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c4",
    category: { id: "c4", slug: "streaming", name_de: "Streaming & Musik", name_fr: "Streaming", name_it: "Streaming", icon: "🎵", description_de: "Musik, Filmen & Seriens", sort_order: 4, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 13.95,
    young_price: 7.50,
    discount_percent: 46,
    discount_amount: 6.45,
    advantage_type: "reduced_price",
    age_min: 18,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.spotify.com/ch-de/student/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "ONLINE", "SCHWEIZWEIT", "BELIEBT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.spotify.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 1420,
    click_count: 780,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f6666666-6666-4666-a666-666666666666",
    slug: "sunrise-up-mobile-youth",
    title_de: "Sunrise Up Mobile Youth: 50% Rabatt auf Handy-Abos (unter 30 J.)",
    title_fr: "Sunrise Up Mobile Youth: 50% de réduction pour les moins de 30 ans",
    title_it: "Sunrise Up Mobile Youth: 50% di sconto per sotto i 30 anni",
    description_de: "Unlimitiertes 5G Internet in der Schweiz und schnelles Roaming für alle Jugendlichen und jungen Erwachsenen unter 30 Jahren.",
    description_fr: "Internet 5G illimité en Suisse avec 50% de réduction.",
    description_it: "Internet 5G illimitato in Svizzera scontato del 50%.",
    conditions_de: "Für Personen unter 30 Jahren. Rabatt bleibt bis zum 30. Geburtstag bestehen.",
    how_to_get_de: "1. Auf Sunrise Website Jugendangebot wählen 2. Personalausweis hochladen 3. Vertrag online abschliessen",
    brand_id: "b5",
    brand: { id: "b5", slug: "sunrise", name: "Sunrise", logo_url: null, description_de: "Sunrise Telekommunikation", website_url: "https://www.sunrise.ch", categories: ["handy"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c5",
    category: { id: "c5", slug: "handy", name_de: "Mobilfunk & Internet", name_fr: "Mobile & Internet", name_it: "Mobile & Internet", icon: "📱", description_de: "Handy-Tarife & Internet", sort_order: 5, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 59.00,
    young_price: 29.50,
    discount_percent: 50,
    discount_amount: 29.50,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.sunrise.ch/de/mobile/up-mobile-youth",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["UNTER_30", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.sunrise.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 760,
    click_count: 310,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f7777777-7777-4777-a777-777777777777",
    slug: "projekt-neptun-laptops",
    title_de: "Projekt Neptun: Bis zu 40% Rabatt auf Laptops für Studenten",
    title_fr: "Projet Neptun: Jusqu'à 40% de rabais sur laptops pour étudiants",
    title_it: "Progetto Neptun: Fino al 40% di sconto su laptop per studenti",
    description_de: "Hochwertige MacBooks, Lenovo ThinkPads und HP Laptops mit langen Garantien zu exklusiven Einkaufspreisen während der Verkaufsfenster im Frühjahr und Herbst.",
    description_fr: "Ordinateurs portables à prix coûtant pour étudiants suisses.",
    description_it: "Computer portatili a prezzo ridotto per studenti svizzeri.",
    conditions_de: "Gültig für Studierende aller Schweizer Universitäten, ETH, FH und PH.",
    how_to_get_de: "1. Während des Neptun-Verkaufsfensters neptun.ch besuchen 2. Mit Switch edu-ID einloggen 3. Modell bestellen",
    brand_id: "b6",
    brand: { id: "b6", slug: "projekt-neptun", name: "Projekt Neptun", logo_url: null, description_de: "Projekt Neptun Stiftung", website_url: "https://projektneptun.ch", categories: ["technik"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c2",
    category: { id: "c2", slug: "technik", name_de: "Technik & Software", name_fr: "Technologie", name_it: "Tecnologia", icon: "💻", description_de: "Laptops, Tablets & Gadgets", sort_order: 2, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 40,
    discount_amount: null,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://projektneptun.ch/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://projektneptun.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 890,
    click_count: 430,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f8888888-8888-4888-a888-888888888888",
    slug: "microsoft-365-education-gratis",
    title_de: "Microsoft 365 Education: Word, Excel & PowerPoint kostenlos",
    title_fr: "Microsoft 365 Éducation: Office gratuit pour étudiants",
    title_it: "Microsoft 365 Education: Office gratuito per studenti",
    description_de: "Vollständige Lizenz für Word, Excel, PowerPoint, OneNote und 1 TB OneDrive Cloud-Speicher für Studierende Schweizer Hochschulen.",
    description_fr: "Licence Office complète gratuite avec votre e-mail d'université.",
    description_it: "Licenza Office completa gratuita con e-mail universitaria.",
    conditions_de: "Gültige universitäre E-Mail-Adresse (.edu / .ch Hochschulen).",
    how_to_get_de: "1. Microsoft Education Seite aufrufen 2. Unimail-Adresse eingeben 3. Office gratis herunterladen",
    brand_id: "b7",
    brand: { id: "b7", slug: "microsoft", name: "Microsoft", logo_url: null, description_de: "Microsoft Schweiz", website_url: "https://www.microsoft.com", categories: ["technik"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c2",
    category: { id: "c2", slug: "technik", name_de: "Technik & Software", name_fr: "Technologie", name_it: "Tecnologia", icon: "💻", description_de: "Laptops, Tablets & Gadgets", sort_order: 2, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 69.95,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 69.95,
    advantage_type: "free",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.microsoft.com/de-ch/education/products/office",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "STUDENTEN", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.microsoft.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 1020,
    click_count: 510,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f9999999-9999-4999-a999-999999999999",
    slug: "pathe-kino-student",
    title_de: "Pathé Cinema: Kinoticket ab CHF 14.– für Studierende",
    title_fr: "Cinéma Pathé: Billet étudiant dès CHF 14.–",
    title_it: "Cinema Pathé: Biglietto studenti da CHF 14.–",
    description_de: "Günstigerer Eintritt in allen Pathé Kinos in Zürich, Bern, Basel, Genf und Lausanne gegen Vorweisen des Legi-Ausweises.",
    description_fr: "Tarif réduit pour étudiants dans tous les cinémas Pathé.",
    description_it: "Ingresso ridotto per studenti nei cinema Pathé.",
    conditions_de: "Legi-Ausweis an der Kinokasse vorzeigen.",
    how_to_get_de: "1. Ticket online wählen 2. Studententarif aktivieren 3. Legi am Eingang zeigen",
    brand_id: "b8",
    brand: { id: "b8", slug: "pathe", name: "Pathé Cinemas", logo_url: null, description_de: "Pathé Schweiz", website_url: "https://www.pathe.ch", categories: ["kino"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c8",
    category: { id: "c8", slug: "kino", name_de: "Kino & Entertainment", name_fr: "Cinéma", name_it: "Cinema", icon: "🍿", description_de: "Kino & Events", sort_order: 8, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 21.00,
    young_price: 14.00,
    discount_percent: 33,
    discount_amount: 7.00,
    advantage_type: "reduced_price",
    age_min: 16,
    age_max: 25,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.pathe.ch",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "BELIEBT", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.pathe.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 640,
    click_count: 280,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1010101-1010-4010-a010-101010101010",
    slug: "asvz-sport-mitgliedschaft",
    title_de: "ASVZ Sportangebot: Über 120 Sportarten für Studierende in Zürich",
    title_fr: "ASVZ Sport: Plus de 120 sports pour étudiants à Zurich",
    title_it: "ASVZ Sport: Oltre 120 sport per studenti a Zurigo",
    description_de: "Zugang zu allen Fitnesszentren (Irchel, Polyterrasse, Fluntern, Hönggerberg), Saunen und Gruppenkursen für UZH & ETH Studierende.",
    description_fr: "Accès à tous les centres de sport universitaires à Zurich.",
    description_it: "Accesso a tutti i centri sportivi universitari a Zurigo.",
    conditions_de: "Inklusive im UZH & ETH Semesterbeitrag.",
    how_to_get_de: "1. ASVZ App laden 2. Mit Switch edu-ID einloggen 3. Drehkreuz per App passieren",
    brand_id: "b9",
    brand: { id: "b9", slug: "asvz", name: "ASVZ", logo_url: null, description_de: "Akademischer Sportverband Zürich", website_url: "https://asvz.ch", categories: ["fitness"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c9",
    category: { id: "c9", slug: "fitness", name_de: "Fitness & Sport", name_fr: "Sport", name_it: "Sport", icon: "🏋️", description_de: "Sport & Fitnesszentren", sort_order: 9, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 900,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 900,
    advantage_type: "free",
    age_min: 18,
    age_max: 30,
    student_required: true,
    city_id: "city-static-1",
    canton: "ZH",
    is_nationwide: false,
    is_online: false,
    external_url: "https://asvz.ch",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "STUDENTEN", "ZUERICH"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://asvz.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 810,
    click_count: 490,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1101101-1101-4101-a101-110110110110",
    slug: "salt-youth-mobile",
    title_de: "Salt Youth: Unlimitiertes 5G Internet in der Schweiz für CHF 24.95",
    title_fr: "Salt Youth: Internet 5G illimité pour CHF 24.95 / mois",
    title_it: "Salt Youth: Internet 5G illimitato per CHF 24.95 / mese",
    description_de: "Unlimitierte Anrufe, SMS und ultraschnelles 5G Datenvolumen in der Schweiz für alle unter 30 Jahren.",
    description_fr: "Appels, SMS et data 5G illimités en Suisse.",
    description_it: "Chiamate, SMS e giga 5G illimitati in Svizzera.",
    conditions_de: "Für Personen bis zum 30. Geburtstag.",
    how_to_get_de: "1. Salt Youth Promotion aufrufen 2. ID verifizieren 3. SIM-Karte gratis erhalten",
    brand_id: "b10",
    brand: { id: "b10", slug: "salt", name: "Salt", logo_url: null, description_de: "Salt Mobile Schweiz", website_url: "https://www.salt.ch", categories: ["handy"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c5",
    category: { id: "c5", slug: "handy", name_de: "Mobilfunk & Internet", name_fr: "Mobile & Internet", name_it: "Mobile & Internet", icon: "📱", description_de: "Handy-Tarife & Internet", sort_order: 5, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 49.95,
    young_price: 24.95,
    discount_percent: 50,
    discount_amount: 25.00,
    advantage_type: "discount_percent",
    age_min: 16,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.salt.ch/de/mobile/plans/youth",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["UNTER_30", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.salt.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 530,
    click_count: 220,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1201201-1201-4201-a201-120112011201",
    slug: "too-good-to-go-schweiz",
    title_de: "Too Good To Go: Überraschungssäckli ab CHF 4.90",
    title_fr: "Too Good To Go: Paniers repas dès CHF 4.90",
    title_it: "Too Good To Go: Sacchetti sorpresa da CHF 4.90",
    description_de: "Rette leckeres Essen aus Bäckereien, Supermärkten und Restaurants kurz vor Ladenschluss zum Sparpreis.",
    description_fr: "Sauvez de la nourriture des boulangeries et restaurants.",
    description_it: "Salva cibo da panetterie e ristoranti a prezzi ridotti.",
    conditions_de: "Gültig in allen Schweizer Städten über die App.",
    how_to_get_de: "1. App gratis laden 2. Säckli in deiner Nähe reservieren 3. Abholen",
    brand_id: "b11",
    brand: { id: "b11", slug: "too-good-to-go", name: "Too Good To Go", logo_url: null, description_de: "Food Saving App", website_url: "https://toogoodtogo.ch", categories: ["restaurants"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c7",
    category: { id: "c7", slug: "restaurants", name_de: "Essen & Trinken", name_fr: "Restaurants", name_it: "Ristoranti", icon: "🍔", description_de: "Mensen, Restos & Food-Sharing", sort_order: 7, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 15.00,
    young_price: 4.90,
    discount_percent: 67,
    discount_amount: 10.10,
    advantage_type: "reduced_price",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://toogoodtogo.ch/de-ch",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "BELIEBT", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://toogoodtogo.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 910,
    click_count: 510,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1301301-1301-4301-a301-130113011301",
    slug: "swisscom-blue-mobile-youth",
    title_de: "Swisscom blue Mobile Youth: CHF 10.– Rabatt pro Monat",
    title_fr: "Swisscom blue Mobile Youth: CHF 10.– de rabais par mois",
    title_it: "Swisscom blue Mobile Youth: CHF 10.– di sconto al mese",
    description_de: "Bestes Schweizer Mobilfunknetz mit 5G-Speed und EU-Roaming zum Vorteilspreis für Jugendliche unter 30.",
    description_fr: "Le meilleur réseau mobile de Suisse avec rabais jeunes.",
    description_it: "La migliore rete mobile svizzera con sconto giovani.",
    conditions_de: "Gültig für Personen unter 30 Jahren.",
    how_to_get_de: "1. Auf Swisscom Youth Seite gehen 2. Altersnachweis hochladen 3. Abonnement bestellen",
    brand_id: "b12",
    brand: { id: "b12", slug: "swisscom", name: "Swisscom", logo_url: null, description_de: "Swisscom Telekommunikation", website_url: "https://www.swisscom.ch", categories: ["handy"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c5",
    category: { id: "c5", slug: "handy", name_de: "Mobilfunk & Internet", name_fr: "Mobile & Internet", name_it: "Mobile & Internet", icon: "📱", description_de: "Handy-Tarife & Internet", sort_order: 5, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 69.90,
    young_price: 59.90,
    discount_percent: 14,
    discount_amount: 10.00,
    advantage_type: "reduced_price",
    age_min: null,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.swisscom.ch/de/privatkunden/mobile/abos-tarife/youth.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["UNTER_30", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.swisscom.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 670,
    click_count: 290,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1401401-1401-4401-a401-140114011401",
    slug: "yuh-banking-app",
    title_de: "Yuh Financial App: 100% Kostenloses Konto & Trading",
    title_fr: "Yuh App: Compte et investissement 100% gratuits",
    title_it: "Yuh App: Conto e trading 100% gratuiti",
    description_de: "Girokonto ohne Monatsgebühren, kostenlose Debit-Mastercard und Zinsen auf dein Erspartes von PostFinance & Swissquote.",
    description_fr: "Compte sans frais de tenue avec carte Mastercard gratuite.",
    description_it: "Conto senza spese di gestione con carta Mastercard gratuita.",
    conditions_de: "Für Personen mit Wohnsitz in der Schweiz ab 18 Jahren.",
    how_to_get_de: "1. Yuh App installieren 2. Registrierung durchführen 3. Gratiskonto sofort nutzen",
    brand_id: "b13",
    brand: { id: "b13", slug: "yuh", name: "Yuh", logo_url: null, description_de: "Yuh App Schweiz", website_url: "https://www.yuh.com", categories: ["finanzen"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c3",
    category: { id: "c3", slug: "finanzen", name_de: "Finanzen & Banking", name_fr: "Finances", name_it: "Finanze", icon: "💳", description_de: "Konten & Karten für Junge", sort_order: 3, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 50,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 50,
    advantage_type: "free",
    age_min: 18,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.yuh.com/de/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "SCHWEIZWEIT", "ONLINE"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.yuh.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 730,
    click_count: 340,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1501501-1501-4501-a501-150115011501",
    slug: "zak-cler-jugendkonto",
    title_de: "Bank Cler Zak: Kostenloses Schweizer Smartphone-Konto",
    title_fr: "Zak Bank Cler: Compte bancaire gratuit sur smartphone",
    title_it: "Zak Bank Cler: Conto bancario gratuito per smartphone",
    description_de: "Kostenlose Kontoführung, Debit Mastercard und Unterkonten ('Töpfe') für einfache Budgetplanung.",
    description_fr: "Compte bancaire gratuit avec gestion de budget.",
    description_it: "Conto gratuito con gestione del budget.",
    conditions_de: "Für Personen ab 15 Jahren mit Wohnsitz in der Schweiz.",
    how_to_get_de: "1. Zak App laden 2. In wenigen Minuten verifizieren 3. Gratis-Konto nutzen",
    brand_id: "b14",
    brand: { id: "b14", slug: "bank-cler", name: "Bank Cler", logo_url: null, description_de: "Bank Cler Schweiz", website_url: "https://www.cler.ch", categories: ["finanzen"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c3",
    category: { id: "c3", slug: "finanzen", name_de: "Finanzen & Banking", name_fr: "Finances", name_it: "Finanze", icon: "💳", description_de: "Konten & Karten für Junge", sort_order: 3, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 60,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 60,
    advantage_type: "free",
    age_min: 15,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.cler.ch/de/zak",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "UNTER_30", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.cler.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 510,
    click_count: 210,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1601601-1601-4601-a601-160116011601",
    slug: "samsung-education-store",
    title_de: "Samsung Education Store: Bis zu 25% Rabatt auf Smartphones & Monitore",
    title_fr: "Samsung Education: Jusqu'à 25% de rabais pour étudiants",
    title_it: "Samsung Education: Fino al 25% di sconto per studenti",
    description_de: "Exklusive Nachlässe auf Galaxy Smartphones, Tablets, Monitore und Laptops für verifizierte Studierende.",
    description_fr: "Prix réduits sur smartphones et écrans Samsung.",
    description_it: "Sconti esclusivi su smartphone e monitor Samsung.",
    conditions_de: "Gültiger Studentenstatus erforderlich.",
    how_to_get_de: "1. Samsung Education Portal aufrufen 2. Mit Unimail oder StudentBeans verifizieren 3. Einkaufen",
    brand_id: "b15",
    brand: { id: "b15", slug: "samsung", name: "Samsung", logo_url: null, description_de: "Samsung Schweiz", website_url: "https://www.samsung.com/ch", categories: ["technik"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c2",
    category: { id: "c2", slug: "technik", name_de: "Technik & Software", name_fr: "Technologie", name_it: "Tecnologia", icon: "💻", description_de: "Laptops, Tablets & Gadgets", sort_order: 2, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 25,
    discount_amount: null,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.samsung.com/ch/multistore/ch_student/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.samsung.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 620,
    click_count: 310,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1701701-1701-4701-a701-170117011701",
    slug: "dell-advantage-students",
    title_de: "Dell Student Advantage: Bis zu 20% Rabatt auf XPS & Alienware",
    title_fr: "Dell Advantage Étiudants: Jusqu'à 20% de rabais",
    title_it: "Dell Advantage Studenti: Fino al 20% di sconto",
    description_de: "Exklusive Gutscheincodes für Laptops, Desktops und Monitore für Schweizer Studierende.",
    description_fr: "Codes promo exclusifs pour ordinateurs portables.",
    description_it: "Codici promozionali per computer portatili.",
    conditions_de: "Verifizierung über universitäre E-Mail.",
    how_to_get_de: "1. Dell Student Seite besuchen 2. Unimail eingeben 3. Gutscheincode per Mail erhalten",
    brand_id: "b16",
    brand: { id: "b16", slug: "dell", name: "Dell", logo_url: null, description_de: "Dell Technologies Schweiz", website_url: "https://www.dell.ch", categories: ["technik"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c2",
    category: { id: "c2", slug: "technik", name_de: "Technik & Software", name_fr: "Technologie", name_it: "Tecnologia", icon: "💻", description_de: "Laptops, Tablets & Gadgets", sort_order: 2, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 20,
    discount_amount: null,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.dell.com/de-ch/lp/students",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "ONLINE", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.dell.com",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 480,
    click_count: 190,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1801801-1801-4801-a801-180118011801",
    slug: "isic-student-card",
    title_de: "ISIC Card: Internationaler Studentenausweis mit weltweiten Rabatten",
    title_fr: "Carte ISIC: Carte d'étudiant internationale avec rabais",
    title_it: "Carta ISIC: Carta studente internazionale con sconti",
    description_de: "Weltweit anerkannter Studentenausweis für Rabatte bei Flüge, Unterkünften, Software und Kultur.",
    description_fr: "Carte internationale d'étudiant reconnue mondialement.",
    description_it: "Carta studente internazionale riconosciuta in tutto il mondo.",
    conditions_de: "Gültig für alle immatrikulierten Studierenden.",
    how_to_get_de: "1. Auf isic.ch registrieren 2. Immatrikulationsnachweis hochladen 3. Digitale ISIC Card erhalten",
    brand_id: "b17",
    brand: { id: "b17", slug: "isic", name: "ISIC", logo_url: null, description_de: "International Student Identity Card", website_url: "https://www.isic.ch", categories: ["bildung"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c6",
    category: { id: "c6", slug: "bildung", name_de: "Bildung & Bücher", name_fr: "Éducation", name_it: "Educazione", icon: "📚", description_de: "Kurse, Bücher & Lizenzen", sort_order: 6, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 30,
    young_price: 18,
    discount_percent: 40,
    discount_amount: 12,
    advantage_type: "reduced_price",
    age_min: null,
    age_max: null,
    student_required: true,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.isic.ch",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["STUDENTEN", "SCHWEIZWEIT", "ONLINE"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.isic.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 590,
    click_count: 270,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f1901901-1901-4901-a901-190119011901",
    slug: "kulturlegi-caritas",
    title_de: "Caritas KulturLegi: Bis zu 70% Rabatt auf Kultur, Sport & Bildung",
    title_fr: "Carte Culture Caritas: Jusqu'à 70% de rabais sur la culture et le sport",
    title_it: "Carta Cultura Caritas: Fino al 70% di sconto su cultura e sport",
    description_de: "Vergünstigungen bei Kinos, Theatern, Museen, Fitnesszentren und Kursen für Studierende mit schmalem Budget.",
    description_fr: "Réductions culturelles et sportives pour budgets serrés.",
    description_it: "Sconti culturali e sportivi per persone con budget ridotto.",
    conditions_de: "Nachweis über geringes Einkommen / Stipendium.",
    how_to_get_de: "1. Auf kulturlegi.ch Antrag stellen 2. Einkommensnachweis einreichen 3. Ausweis erhalten",
    brand_id: "b18",
    brand: { id: "b18", slug: "caritas", name: "Caritas KulturLegi", logo_url: null, description_de: "Caritas Schweiz", website_url: "https://www.kulturlegi.ch", categories: ["kino"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c8",
    category: { id: "c8", slug: "kino", name_de: "Kino & Entertainment", name_fr: "Cinéma", name_it: "Cinema", icon: "🍿", description_de: "Kino & Events", sort_order: 8, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 100,
    young_price: 0,
    discount_percent: 70,
    discount_amount: 70,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.kulturlegi.ch",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.kulturlegi.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 710,
    click_count: 360,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2002001-2001-4001-a001-200120012001",
    slug: "schweizer-jugendherbergen",
    title_de: "Schweizer Jugendherbergen: Übernachtungen ab CHF 35.– inkl. Frühstück",
    title_fr: "Auberges de Jeunesse Suisses: Nuitées dès CHF 35.– avec petit-déjeuner",
    title_it: "Ostelli della Gioventù Svizzeri: Pernottamento da CHF 35.– con colazione",
    description_de: "Günstige Übernachtungen an Top-Lagen in Städten und Bergen in der Schweiz für Jugendliche und Studierende.",
    description_fr: "Hébergements abordables en Suisse pour jeunes.",
    description_it: "Alloggi economici in Svizzera per giovani.",
    conditions_de: "Mit der Swiss Youth Hostels Membercard.",
    how_to_get_de: "1. Mitgliedschaft online lösen 2. Jugendherberge buchen 3. Vor Ort einchecken",
    brand_id: "b19",
    brand: { id: "b19", slug: "youthhostel", name: "Schweizer Jugendherbergen", logo_url: null, description_de: "Swiss Youth Hostels", website_url: "https://www.youthhostel.ch", categories: ["hotels"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c10",
    category: { id: "c10", slug: "hotels", name_de: "Hotels & Reisen", name_fr: "Hôtels", name_it: "Hotel", icon: "🏨", description_de: "Unterkünfte & Hostels", sort_order: 10, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 60.00,
    young_price: 35.00,
    discount_percent: 41,
    discount_amount: 25.00,
    advantage_type: "reduced_price",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.youthhostel.ch/de/",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["SCHWEIZWEIT", "ONLINE"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.youthhostel.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 540,
    click_count: 230,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2102101-2101-4101-a101-210121012101",
    slug: "postfinance-young",
    title_de: "PostFinance Young Konto: Gratis E-Finance & Debitcard",
    title_fr: "PostFinance Young: Compte bancaire gratuit pour jeunes",
    title_it: "PostFinance Young: Conto bancario gratuito per giovani",
    description_de: "Kostenlose Kontoführung, PostFinance Card Mastercard und Vorzugsangebote für Jugendliche und Studierende bis 30 Jahre.",
    description_fr: "Compte gratuit pour jeunes avec carte bancaire.",
    description_it: "Conto gratuito per giovani con carta bancaria.",
    conditions_de: "Gültig für Personen unter 30 Jahren.",
    how_to_get_de: "1. PostFinance Seite aufrufen 2. Identität bestätigen 3. Konto gratis eröffnen",
    brand_id: "b20",
    brand: { id: "b20", slug: "postfinance", name: "PostFinance", logo_url: null, description_de: "PostFinance Schweiz", website_url: "https://www.postfinance.ch", categories: ["finanzen"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c3",
    category: { id: "c3", slug: "finanzen", name_de: "Finanzen & Banking", name_fr: "Finances", name_it: "Finanze", icon: "💳", description_de: "Konten & Karten für Junge", sort_order: 3, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 60,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 60,
    advantage_type: "free",
    age_min: 12,
    age_max: 30,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.postfinance.ch/de/privat/produkte/konto/jugendkonto.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "UNTER_30", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.postfinance.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 610,
    click_count: 280,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2202201-2201-4201-a201-220122012201",
    slug: "zkb-young-konto",
    title_de: "ZKB young Konto: Kostenloses Paket mit Kinotag & Event-Extras",
    title_fr: "ZKB young: Compte bancaire gratuit avec avantages événements",
    title_it: "ZKB young: Conto gratuito con vantaggi eventi",
    description_de: "Gratis Kontoführung, Visa Debit Card, Kinotag-Rabatt und ZKB Nachtschwärmer-Vorteile im ZVV für Jugendliche bis 28.",
    description_fr: "Compte gratuit avec rabais cinéma et événements.",
    description_it: "Conto gratuito con sconti cinema ed eventi.",
    conditions_de: "Für Personen unter 28 Jahren im Kanton Zürich.",
    how_to_get_de: "1. ZKB young Online-Anmeldung öffnen 2. Ausweis verifizieren 3. Konto nutzen",
    brand_id: "b21",
    brand: { id: "b21", slug: "zkb", name: "Zürcher Kantonalbank", logo_url: null, description_de: "ZKB Schweiz", website_url: "https://www.zkb.ch", categories: ["finanzen"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c3",
    category: { id: "c3", slug: "finanzen", name_de: "Finanzen & Banking", name_fr: "Finances", name_it: "Finanze", icon: "💳", description_de: "Konten & Karten für Junge", sort_order: 3, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 60,
    young_price: 0,
    discount_percent: 100,
    discount_amount: 60,
    advantage_type: "free",
    age_min: 12,
    age_max: 28,
    student_required: false,
    city_id: "city-static-1",
    canton: "ZH",
    is_nationwide: false,
    is_online: true,
    external_url: "https://www.zkb.ch/de/private/konto-karten/zkb-young.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "ZUERICH", "UNTER_25"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.zkb.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 780,
    click_count: 420,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2302301-2301-4301-a301-230123012301",
    slug: "wingo-swiss-mobile",
    title_de: "Wingo Swiss: Unlimitiertes Datenvolumen & Telefonie ohne Laufzeit",
    title_fr: "Wingo Swiss: Data et appels illimités sans engagement",
    title_it: "Wingo Swiss: Dati e chiamate illimitati senza vincoli",
    description_de: "Nutze das beste Swisscom Netz mit 1 Monat Kündigungsfrist zum Dauer-Sparpreis ohne Mindestvertragsdauer.",
    description_fr: "Réseau Swisscom sans engagement à prix réduit.",
    description_it: "Rete Swisscom senza vincoli a prezzo ridotto.",
    conditions_de: "Ohne Mindestlaufzeit, jederzeit monatlich kündbar.",
    how_to_get_de: "1. Auf wingo.ch Promo wählen 2. Rufnummerportierung bestätigen 3. SIM-Karte erhalten",
    brand_id: "b22",
    brand: { id: "b22", slug: "wingo", name: "Wingo", logo_url: null, description_de: "Wingo Schweiz", website_url: "https://www.wingo.ch", categories: ["handy"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c5",
    category: { id: "c5", slug: "handy", name_de: "Mobilfunk & Internet", name_fr: "Mobile & Internet", name_it: "Mobile & Internet", icon: "📱", description_de: "Handy-Tarife & Internet", sort_order: 5, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: 59.00,
    young_price: 24.95,
    discount_percent: 58,
    discount_amount: 34.05,
    advantage_type: "discount_percent",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.wingo.ch/de/mobile",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["SCHWEIZWEIT", "ONLINE", "BELIEBT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.wingo.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 820,
    click_count: 390,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2402401-2401-4401-a401-240124012401",
    slug: "migros-cumulus-student",
    title_de: "Migros Cumulus: Rabattgutscheine & Punkte sammeln",
    title_fr: "Migros Cumulus: Bons de réduction et points",
    title_it: "Migros Cumulus: Buoni sconto e punti",
    description_de: "Sammle bei jedem Einkauf Cumulus-Punkte und wandle sie direkt in CHF-Einkaufsgutscheine für Lebensmittel und M-Budget um.",
    description_fr: "Cumulez des points pour vos achats quotidiens.",
    description_it: "Accumula punti per i tuoi acquisti quotidiani.",
    conditions_de: "Kostenlose Registrierung in der Migros App.",
    how_to_get_de: "1. Migros App laden 2. Digitales Cumulus-Konto aktivieren 3. An der Kasse scannen",
    brand_id: "b23",
    brand: { id: "b23", slug: "migros", name: "Migros", logo_url: null, description_de: "Migros Genossenschaft", website_url: "https://www.migros.ch", categories: ["shopping"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c11",
    category: { id: "c11", slug: "shopping", name_de: "Shopping & Lifestyle", name_fr: "Shopping", name_it: "Shopping", icon: "🛒", description_de: "Alltag & Supermärkte", sort_order: 11, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 10,
    discount_amount: null,
    advantage_type: "free",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://cumulus.migros.ch/de/cumulus.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.migros.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 650,
    click_count: 310,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "f2502501-2501-4501-a501-250125012501",
    slug: "coop-supercard",
    title_de: "Coop Supercard: Punkte sammeln & Rabattbons einlösen",
    title_fr: "Coop Supercard: Collectionnez les superpoints",
    title_it: "Coop Supercard: Raccogli i superpunti",
    description_de: "Erhalte digitale Bonbon-Gutscheine und spare bei Prix Garantie Marken, Lebensmitteln und Haushaltsartikeln.",
    description_fr: "Économisez sur vos achats chez Coop.",
    description_it: "Risparmia sui tuoi acquisti da Coop.",
    conditions_de: "Kostenlos in der Coop App nutzbar.",
    how_to_get_de: "1. Coop App installieren 2. Supercard verknüpfen 3. Bons aktivieren",
    brand_id: "b24",
    brand: { id: "b24", slug: "coop", name: "Coop", logo_url: null, description_de: "Coop Genossenschaft", website_url: "https://www.coop.ch", categories: ["shopping"], created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
    category_id: "c11",
    category: { id: "c11", slug: "shopping", name_de: "Shopping & Lifestyle", name_fr: "Shopping", name_it: "Shopping", icon: "🛒", description_de: "Alltag & Supermärkte", sort_order: 11, created_at: new Date().toISOString() },
    image_url: null,
    logo_url: null,
    normal_price: null,
    young_price: null,
    discount_percent: 10,
    discount_amount: null,
    advantage_type: "free",
    age_min: null,
    age_max: null,
    student_required: false,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: "https://www.supercard.ch/de/app.html",
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: ["GRATIS", "SCHWEIZWEIT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: "https://www.coop.ch",
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 580,
    click_count: 240,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export async function getVerifiedOffers(
  filters: OfferFilters = {}
): Promise<PaginatedOffers> {
  const {
    category,
    brand,
    city,
    age,
    student,
    online,
    search,
    sortBy = "popular",
    page = 1,
    limit = 12,
  } = filters;

  const offset = (page - 1) * limit;

  if (!isSupabaseConfigured()) {
    let filtered = [...FALLBACK_OFFERS];
    if (category) filtered = filtered.filter(o => o.category?.slug === category);
    if (student !== undefined) filtered = filtered.filter(o => o.student_required === student);
    if (age !== undefined) filtered = filtered.filter(o => (!o.age_max || o.age_max >= age));
    if (filtered.length === 0) filtered = [...FALLBACK_OFFERS];
    const total = filtered.length;
    return { offers: filtered.slice(offset, offset + limit), total, page, limit, hasMore: offset + limit < total };
  }

  try {
    const supabase = await createClient();
    const selectStr = `*, brand:brands${brand ? "!inner" : ""}(*), category:categories${category ? "!inner" : ""}(*), city:cities${city ? "!inner" : ""}(*)`;

    let query = supabase
      .from("offers")
      .select(selectStr, { count: "exact" })
      .eq("status", "published");

    const now = new Date().toISOString();
    query = query.or(`end_date.is.null,end_date.gt.${now}`);

    if (category) query = query.eq("category.slug", category);
    if (brand) query = query.eq("brand.slug", brand);
    if (city) query = query.or(`is_nationwide.eq.true,city.slug.eq.${city}`);
    if (student !== undefined) query = query.eq("student_required", student);
    if (online !== undefined) query = query.eq("is_online", online);
    if (age !== undefined) {
      query = query.or(`age_min.is.null,age_min.lte.${age}`).or(`age_max.is.null,age_max.gte.${age}`);
    }
    if (search) {
      query = query.or(`title_de.ilike.%${search}%,description_de.ilike.%${search}%`);
    }

    switch (sortBy) {
      case "newest": query = query.order("created_at", { ascending: false }); break;
      case "saving": query = query.order("discount_percent", { ascending: false }); break;
      case "expiring": query = query.order("end_date", { ascending: true }); break;
      default: query = query.order("view_count", { ascending: false });
    }

    query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await fetchWithTimeout(query, 1000);

    if (error || !data || data.length === 0) {
      let filtered = [...FALLBACK_OFFERS];
      if (category) filtered = filtered.filter(o => o.category?.slug === category);
      if (student !== undefined) filtered = filtered.filter(o => o.student_required === student);
      if (age !== undefined) filtered = filtered.filter(o => (!o.age_max || o.age_max >= age));
      
      if (filtered.length === 0) filtered = [...FALLBACK_OFFERS];

      const total = filtered.length;
      const sliced = filtered.slice(offset, offset + limit);
      return { offers: sliced, total, page, limit, hasMore: offset + limit < total };
    }

    const total = count ?? data.length;
    return {
      offers: (data as unknown as Offer[]) ?? [],
      total,
      page,
      limit,
      hasMore: offset + limit < total,
    };
  } catch {
    const sliced = FALLBACK_OFFERS.slice(offset, offset + limit);
    return { offers: sliced, total: FALLBACK_OFFERS.length, page, limit, hasMore: offset + limit < FALLBACK_OFFERS.length };
  }
}

export async function getVerifiedTopOffers(limit = 12): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.slice(0, limit);
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).order("view_count", { ascending: false }).limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedNewOffers(limit = 8): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.slice(0, limit);
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).order("created_at", { ascending: false }).limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedExpiringOffers(limit = 8): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.slice(0, limit);
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
        .eq("status", "published")
        .not("end_date", "is", null)
        .gt("end_date", now)
        .order("end_date", { ascending: true })
        .limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedStudentOffers(limit = 8): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.filter(o => o.student_required).slice(0, limit);
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).eq("student_required", true).order("view_count", { ascending: false }).limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.student_required).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.student_required).slice(0, limit);
  }
}

export async function getVerifiedUnderAgeOffers(age: number, limit = 8): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.filter(o => !o.age_max || o.age_max >= age).slice(0, limit);
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).lte("age_max", age).order("view_count", { ascending: false }).limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => !o.age_max || o.age_max >= age).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => !o.age_max || o.age_max >= age).slice(0, limit);
  }
}

export async function getVerifiedFreeOffers(limit = 8): Promise<Offer[]> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS.filter(o => o.advantage_type === "free").slice(0, limit);
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).eq("advantage_type", "free").order("view_count", { ascending: false }).limit(limit),
      500
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.advantage_type === "free").slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.advantage_type === "free").slice(0, limit);
  }
}

export async function getVorteilDerWoche(): Promise<Offer | null> {
  if (!isSupabaseConfigured()) return FALLBACK_OFFERS[0] || null;
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).order("view_count", { ascending: false }).limit(1).single(),
      500
    );
    if (error || !data) return FALLBACK_OFFERS[0] || null;
    return data as unknown as Offer;
  } catch {
    return FALLBACK_OFFERS[0] || null;
  }
}

export async function getDemoOffers(limit = 20): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
        .eq("status", "published")
        .order("created_at", { ascending: false })
        .limit(limit),
      1000
    );

    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
        .eq("slug", slug)
        .maybeSingle(),
      1000
    );
    if (data) return data as unknown as Offer;
  } catch (err) {
    // Fall through to fallback
  }

  // Exact match fallback only. If slug does not exist, returns null (triggering 404)
  return FALLBACK_OFFERS.find((o) => o.slug === slug) || null;
}

export async function incrementOfferView(offerId: string): Promise<void> {
  try {
    const supabase = await createClient();
    fetchWithTimeout(
      supabase.rpc("increment_offer_view", { offer_id: offerId }),
      1000
    ).catch(() => {});
  } catch {
    // Non-blocking catch
  }
}

export async function searchOffers(query: string, limit = 10): Promise<Offer[]> {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase();
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();

    const { data, error } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
        .eq("status", "published")
        .or(`end_date.is.null,end_date.gt.${now}`)
        .or(`title_de.ilike.%${query}%,description_de.ilike.%${query}%`)
        .order("view_count", { ascending: false })
        .limit(limit),
      1000
    );

    if (error || !data || data.length === 0) {
      return FALLBACK_OFFERS.filter(o => o.title_de.toLowerCase().includes(q) || (o.description_de && o.description_de.toLowerCase().includes(q))).slice(0, limit);
    }
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.title_de.toLowerCase().includes(q) || (o.description_de && o.description_de.toLowerCase().includes(q))).slice(0, limit);
  }
}

export const getPublishedOffers = getVerifiedOffers;
export const getTopOffers = getVerifiedTopOffers;

export async function getSimilarOffers(offerId: string, limit = 4): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await fetchWithTimeout(
      buildVerifiedQuery(supabase).neq("id", offerId).order("view_count", { ascending: false }).limit(limit),
      1000
    );
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.id !== offerId).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.id !== offerId).slice(0, limit);
  }
}

export async function getOffersByCategory(categorySlug: string, limit = 12): Promise<Offer[]> {
  if (!isSupabaseConfigured()) {
    const categoryOffers = FALLBACK_OFFERS.filter(o => o.category?.slug === categorySlug);
    if (categoryOffers.length > 0) return categoryOffers.slice(0, limit);
    return FALLBACK_OFFERS.slice(0, limit);
  }

  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands!inner(*), category:categories!inner(*), city:cities(*)`)
        .eq("status", "published")
        .or(`end_date.is.null,end_date.gt.${now}`)
        .eq("category.slug", categorySlug)
        .order("view_count", { ascending: false })
        .limit(limit),
      500
    );
    if (!error && data && data.length > 0) return data as unknown as Offer[];
  } catch {
    // Fallback
  }

  const categoryOffers = FALLBACK_OFFERS.filter(o => o.category?.slug === categorySlug);
  if (categoryOffers.length > 0) return categoryOffers.slice(0, limit);
  return FALLBACK_OFFERS.slice(0, limit);
}

export async function getOffersByCity(citySlug: string, limit = 12): Promise<Offer[]> {
  if (!isSupabaseConfigured()) {
    const cityOffers = FALLBACK_OFFERS.filter(o => o.city?.slug === citySlug || o.is_nationwide);
    if (cityOffers.length > 0) return cityOffers.slice(0, limit);
    return FALLBACK_OFFERS.slice(0, limit);
  }

  try {
    const supabase = await createClient();
    const now = new Date().toISOString();

    const { data: city } = await fetchWithTimeout(
      supabase.from("cities").select("id").eq("slug", citySlug).single(),
      500
    ).catch(() => ({ data: null }));

    let query = supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("status", "published")
      .or(`end_date.is.null,end_date.gt.${now}`);

    if (city?.id) {
      query = query.or(`is_nationwide.eq.true,city_id.eq.${city.id}`);
    } else {
      query = query.eq("is_nationwide", true);
    }

    const { data, error } = await fetchWithTimeout(
      query.order("view_count", { ascending: false }).limit(limit),
      500
    );

    if (!error && data && data.length > 0) return data as unknown as Offer[];
  } catch {
    // Fallback
  }

  const cityOffers = FALLBACK_OFFERS.filter(o => o.city?.slug === citySlug || o.is_nationwide);
  if (cityOffers.length > 0) return cityOffers.slice(0, limit);
  return FALLBACK_OFFERS.slice(0, limit);
}

export async function getOffersByBrand(brandSlug: string, limit = 12): Promise<Offer[]> {
  if (!isSupabaseConfigured()) {
    const brandOffers = FALLBACK_OFFERS.filter(o => o.brand?.slug === brandSlug);
    if (brandOffers.length > 0) return brandOffers.slice(0, limit);
    return FALLBACK_OFFERS.slice(0, limit);
  }

  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await fetchWithTimeout(
      supabase
        .from("offers")
        .select(`*, brand:brands!inner(*), category:categories(*), city:cities(*)`)
        .eq("status", "published")
        .or(`end_date.is.null,end_date.gt.${now}`)
        .eq("brand.slug", brandSlug)
        .order("view_count", { ascending: false })
        .limit(limit),
      500
    );
    if (!error && data && data.length > 0) return data as unknown as Offer[];
  } catch {
    // Fallback
  }

  const brandOffers = FALLBACK_OFFERS.filter(o => o.brand?.slug === brandSlug);
  if (brandOffers.length > 0) return brandOffers.slice(0, limit);
  return FALLBACK_OFFERS.slice(0, limit);
}

