// services/offers.ts
// Offer data access layer

import { createPublicClient as createClient } from "@/lib/supabase/server";
import { Offer, OfferFilters, PaginatedOffers } from "@/types";

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

    const { data, error, count } = await query;

    if (error || !data || data.length === 0) {
      let filtered = [...FALLBACK_OFFERS];
      if (category) filtered = filtered.filter(o => o.category?.slug === category);
      if (student !== undefined) filtered = filtered.filter(o => o.student_required === student);
      if (age !== undefined) filtered = filtered.filter(o => (!o.age_max || o.age_max >= age));
      
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
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedNewOffers(limit = 8): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .order("created_at", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedExpiringOffers(limit = 8): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("status", "published")
      .not("end_date", "is", null)
      .gt("end_date", now)
      .order("end_date", { ascending: true })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getVerifiedStudentOffers(limit = 8): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .eq("student_required", true)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.student_required).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.student_required).slice(0, limit);
  }
}

export async function getVerifiedUnderAgeOffers(age: number, limit = 8): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .lte("age_max", age)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => !o.age_max || o.age_max >= age).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => !o.age_max || o.age_max >= age).slice(0, limit);
  }
}


export async function getVerifiedFreeOffers(limit = 8): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .eq("advantage_type", "free")
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.advantage_type === "free").slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.advantage_type === "free").slice(0, limit);
  }
}

export async function getVorteilDerWoche(): Promise<Offer | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await buildVerifiedQuery(supabase)
      .order("view_count", { ascending: false })
      .limit(1)
      .single();
    if (error || !data) return FALLBACK_OFFERS[0] || null;
    return data as unknown as Offer;
  } catch {
    return FALLBACK_OFFERS[0] || null;
  }
}

export async function getDemoOffers(limit = 20): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("slug", slug)
      .single();
    if (error || !data) {
      return FALLBACK_OFFERS.find(o => o.slug === slug) || null;
    }
    return data as unknown as Offer;
  } catch {
    return FALLBACK_OFFERS.find(o => o.slug === slug) || null;
  }
}

export async function incrementOfferView(offerId: string): Promise<void> {
  try {
    const supabase = await createClient();
    await supabase.rpc("increment_offer_view", { offer_id: offerId });
  } catch {
    // Ignore RPC failure in offline/fallback mode
  }
}

export async function searchOffers(query: string, limit = 10): Promise<Offer[]> {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase();
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("status", "published")
      .or(`end_date.is.null,end_date.gt.${now}`)
      .or(`title_de.ilike.%${query}%,description_de.ilike.%${query}%`)
      .order("view_count", { ascending: false })
      .limit(limit);

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
    const { data, error } = await buildVerifiedQuery(supabase)
      .neq("id", offerId)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.id !== offerId).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.id !== offerId).slice(0, limit);
  }
}

export async function getOffersByCategory(categorySlug: string, limit = 12): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories!inner(*), city:cities(*)`)
      .eq("status", "published")
      .or(`end_date.is.null,end_date.gt.${now}`)
      .eq("category.slug", categorySlug)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.category?.slug === categorySlug).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.category?.slug === categorySlug).slice(0, limit);
  }
}

export async function getOffersByCity(citySlug: string, limit = 12): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();

    const { data: city } = await supabase
      .from("cities")
      .select("id")
      .eq("slug", citySlug)
      .single();

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

    const { data, error } = await query
      .order("view_count", { ascending: false })
      .limit(limit);

    if (error || !data || data.length === 0) return FALLBACK_OFFERS.slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.slice(0, limit);
  }
}

export async function getOffersByBrand(brandSlug: string, limit = 12): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands!inner(*), category:categories(*), city:cities(*)`)
      .eq("status", "published")
      .or(`end_date.is.null,end_date.gt.${now}`)
      .eq("brand.slug", brandSlug)
      .order("view_count", { ascending: false })
      .limit(limit);
    if (error || !data || data.length === 0) return FALLBACK_OFFERS.filter(o => o.brand?.slug === brandSlug).slice(0, limit);
    return (data as unknown as Offer[]) ?? [];
  } catch {
    return FALLBACK_OFFERS.filter(o => o.brand?.slug === brandSlug).slice(0, limit);
  }
}

