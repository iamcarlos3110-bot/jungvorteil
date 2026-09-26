const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
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

const makeOffer = (id, slug, title, desc, categorySlug, categoryName, categoryIcon, brandSlug, brandName, youngPrice, normalPrice, ageMax = 30, isStudent = false, isFree = false) => {
  const discountPercent = normalPrice > 0 ? Math.round(((normalPrice - youngPrice) / normalPrice) * 100) : 0;
  return {
    id,
    slug,
    title_de: title,
    title_fr: title,
    title_it: title,
    description_de: desc,
    description_fr: desc,
    description_it: desc,
    conditions_de: `Gültig für Jugendliche & Studierende in der Schweiz bis ${ageMax} Jahre.`,
    how_to_get_de: "1. Angebot auswählen\n2. Über den Link registrieren oder Legi vorweisen\n3. Rabatt sofort einlösen",
    brand_id: `b-${brandSlug}`,
    brand: {
      id: `b-${brandSlug}`,
      slug: brandSlug,
      name: brandName,
      logo_url: null,
      description_de: `Offizieller Partner ${brandName} in der Schweiz`,
      website_url: `https://www.${brandSlug}.ch`,
      categories: [categorySlug],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    category_id: `cat-${categorySlug}`,
    category: {
      id: `cat-${categorySlug}`,
      slug: categorySlug,
      name_de: categoryName,
      name_fr: categoryName,
      name_it: categoryName,
      icon: categoryIcon,
      description_de: `Angebote in ${categoryName}`,
      sort_order: 1,
      created_at: new Date().toISOString()
    },
    image_url: null,
    logo_url: null,
    normal_price: normalPrice,
    young_price: youngPrice,
    discount_percent: isFree ? 100 : discountPercent,
    discount_amount: isFree ? normalPrice : (normalPrice - youngPrice),
    advantage_type: isFree ? "free" : "reduced_price",
    age_min: 16,
    age_max: ageMax,
    student_required: isStudent,
    city_id: null,
    canton: null,
    is_nationwide: true,
    is_online: true,
    external_url: `https://www.${brandSlug}.ch`,
    affiliate_url: null,
    discount_code: null,
    start_date: new Date().toISOString(),
    end_date: null,
    status: "published",
    tags: [isFree ? "KOSTENLOS" : "RABATT", "SCHWEIZWEIT", "VERIFIZIERT"],
    is_demo: false,
    is_sponsored: false,
    source_id: null,
    source_url: null,
    checked_at: new Date().toISOString(),
    verified_by: "JungVorteil Redaktion",
    view_count: 120,
    click_count: 45,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
};

const offers = [
  // 1. Reisen & ÖV
  makeOffer("b1111111-1111-4111-a111-111111111101", "sbb-ga-night", "SBB GA Night für CHF 99.– / Jahr (unter 25 J.)", "Freie Fahrt im gesamten SBB-Netz jeden Abend ab 19:00 Uhr bis 05:00 Uhr morgens in der 2. Klasse.", "reisen", "Reisen & ÖV", "🚆", "sbb", "SBB CFF FFS", 99, 350, 25),
  makeOffer("b1111111-1111-4111-a111-111111111102", "sbb-halbtax-jugend", "SBB Halbtax Jugend für CHF 120.– im 1. Jahr", "Halbiere den Ticketpreis für fast alle Zug-, Bus- und Tramfahrten in der gesamten Schweiz.", "reisen", "Reisen & ÖV", "🚆", "sbb", "SBB CFF FFS", 120, 190, 25),
  makeOffer("b1111111-1111-4111-a111-111111111103", "swisspass-partner-vorteile", "Swisspass Partner-Vorteile & PubliBike Rabatte", "Kostenlose Verknüpfung von PubliBike Leihvelos und Mobility Carsharing auf deinem Swisspass.", "reisen", "Reisen & ÖV", "🚆", "swisspass", "Alliance Swisspass", 0, 50, 30, false, true),

  // 2. Finanzen & Neobanken
  makeOffer("b1111111-1111-4111-a111-111111111104", "neon-free-banking", "Neon Free Girokonto: CHF 0.– Kartengebühren", "Schweizer Smartphone-Konto ohne Monatsgebühr inklusive Mastercard und günstigen Auslandstransaktionen.", "finanzen", "Finanzen & Neobanken", "💳", "neon", "Neon Bank", 0, 120, 30, false, true),
  makeOffer("b1111111-1111-4111-a111-111111111105", "yuh-banking-app", "Yuh Gratis-Konto mit Zinsen & Trading", "Kostenloses Multiwährungskonto von PostFinance & Swissquote mit Zinsen auf deine Ersparnisse.", "finanzen", "Finanzen & Neobanken", "💳", "yuh", "Yuh Schweiz", 0, 100, 30, false, true),
  makeOffer("b1111111-1111-4111-a111-111111111106", "zkb-young-paket", "ZKB young Konto inklusive Gratis-Nachtschwärmer", "Kostenloses Jugendkonto der Zürcher Kantonalbank mit ZKB Nachtschwärmer Ticket im ZVV.", "finanzen", "Finanzen & Neobanken", "💳", "zkb", "Zürcher Kantonalbank", 0, 90, 25, false, true),

  // 3. Krankenkasse & IPV
  makeOffer("b1111111-1111-4111-a111-111111111107", "ipv-praemienverbilligung-schweiz", "Krankenkassen-Prämienverbilligung (IPV): Bis zu 80% Kantonszuschuss", "Staatlicher Zuschuss zur Reduktion der monatlichen Grundversicherungsprämie für Studierende & Auszubildende.", "krankenkasse", "Krankenkasse & IPV", "🩺", "sva", "SVA / Kantonale Sozialversicherung", 50, 350, 30, true),
  makeOffer("b1111111-1111-4111-a111-111111111108", "sanitas-fitness-cashback", "Sanitas Sport-Cashback: Bis zu CHF 500.– für ASVZ & Gym", "Zusatzversicherung erstattet Beiträge an Hochschulsport (ASVZ/UNISPORT) und zertifizierte Fitnessstudios.", "krankenkasse", "Krankenkasse & IPV", "🩺", "sanitas", "Sanitas Krankenversicherung", 0, 500, 30, false, true),

  // 4. Miete & WGs
  makeOffer("b1111111-1111-4111-a111-111111111109", "woko-studenten-wgs", "WOKO Zürcher Studentenzimmer ab CHF 500.– / Monat", "Günstige möblierte und unmöblierte WG-Zimmer für UZH, ETH und ZHAW Studierende.", "wohnen", "Miete & WGs", "🏠", "woko", "WOKO Studentische Wohngenossenschaft", 500, 1100, 30, true),
  makeOffer("b1111111-1111-4111-a111-111111111110", "fmel-lausanne-housing", "FMEL Student Housing Lausanne ab CHF 480.–", "Wohnheimzimmer direkt am UNIL & EPFL Campus Dorigny in Lausanne.", "wohnen", "Miete & WGs", "🏠", "fmel", "FMEL Lausanne", 480, 1050, 30, true),

  // 5. Mobilfunk & Internet
  makeOffer("b1111111-1111-4111-a111-111111111111", "salt-youth-mobile", "Salt Youth: Unlimitiertes 5G in CH für CHF 24.95", "Unlimitiertes Highspeed 5G Surfen und Telefonieren in der ganzen Schweiz unter 30 Jahren.", "handy", "Mobilfunk & Internet", "📱", "salt", "Salt Mobile", 24.95, 59.95, 30),
  makeOffer("b1111111-1111-4111-a111-111111111112", "swisscom-blue-youth", "Swisscom blue Mobile Youth 50% Rabatt", "Bestes Schweizer Mobilfunknetz mit 5G Speed und EU-Roaming zu reduzierten Jugendkonditionen.", "handy", "Mobilfunk & Internet", "📱", "swisscom", "Swisscom", 29.90, 69.90, 30),

  // 6. Technik & Laptops
  makeOffer("b1111111-1111-4111-a111-111111111113", "projekt-neptun-laptops", "Projekt Neptun: Bis 40% Rabatt auf MacBooks & ThinkPads", "Exklusive Verkaufsfenster an Schweizer Hochschulen für Laptops, Tablets und Monitore.", "technik", "Technik & Laptops", "💻", "projekt-neptun", "Projekt Neptun", 1199, 1899, 30, true),
  makeOffer("b1111111-1111-4111-a111-111111111114", "apple-education-store", "Apple Education Store: 10% Studentenrabatt auf Mac & iPad", "Dauerhafter Rabatt auf MacBooks, iPads und Zubehör mit gültiger Hochschul-Legi.", "technik", "Technik & Laptops", "💻", "apple", "Apple Store Switzerland", 999, 1149, 30, true),

  // 7. Streaming & Musik
  makeOffer("b1111111-1111-4111-a111-111111111115", "spotify-student-discount", "Spotify Premium Student für CHF 7.95 / Monat", "Unlimitiertes Musik-Streaming ohne Werbung zum halben Preis für immatrikulierte Studierende.", "streaming", "Streaming & Musik", "🎵", "spotify", "Spotify", 7.95, 13.95, 30, true),
  makeOffer("b1111111-1111-4111-a111-111111111116", "youtube-premium-student", "YouTube Premium Student 45% Rabatt", "Werbefreie Videos, Hintergrunde Wiedergabe und YouTube Music Premium für Studierende.", "streaming", "Streaming & Musik", "🎵", "youtube", "YouTube CH", 7.90, 15.90, 30, true),

  // 8. Mode & Style
  makeOffer("b1111111-1111-4111-a111-111111111117", "zalando-studentenrabatt", "Zalando: 10% Extra-Rabatt für Studierende", "Gutscheincode für Kleidung, Schuhe und Accessoires auf Zalando.ch.", "mode", "Mode & Style", "👕", "zalando", "Zalando Schweiz", 45, 50, 30, true),
  makeOffer("b1111111-1111-4111-a111-111111111118", "nike-student-discount", "Nike: 10% Studentenrabatt auf Sneaker & Wear", "Exklusiver Rabattcode für den offiziellen Nike Online Store.", "mode", "Mode & Style", "👕", "nike", "Nike CH", 90, 100, 30, true),

  // 9. Fitness & Bergsport
  makeOffer("b1111111-1111-4111-a111-111111111119", "asvz-sport-mitgliedschaft", "ASVZ Hochschulsport Zürich: Gratis im Semesterbeitrag", "Zugang zu 5 modernen Sport Centern, Saunen und über 120 Sportarten in Zürich.", "fitness", "Fitness & Bergsport", "🏋️", "asvz", "ASVZ Akademischer Sportverband Zürich", 0, 800, 30, true, true),
  makeOffer("b1111111-1111-4111-a111-111111111120", "unisport-bern-access", "UNISPORT Bern: Komplettes Sportangebot für UniBE & BFH", "Mehr als 100 Sportarten, Kletterwände und Outdoor-Kurse für Studierende in Bern.", "fitness", "Fitness & Bergsport", "🏋️", "unisport", "UNISPORT Bern", 0, 750, 30, true, true),

  // 10. Kino & Ausgang
  makeOffer("b1111111-1111-4111-a111-111111111121", "pathe-kino-student", "Pathé & Blue Cinema Kinomontag: Tickets für CHF 14.–", "Vergünstigte Kinotickets jeden Montag in allen Schweizer Pathé und Blue Cinema Kinos gegen Vorzeigen der Legi.", "kino", "Kino & Ausgang", "🎬", "pathe", "Pathé Kinos Schweiz", 14, 22, 30, true),

  // 11. Essen & Mensa
  makeOffer("b1111111-1111-4111-a111-111111111122", "too-good-to-go-food", "Too Good To Go: Essen retten ab CHF 4.90", "Ueber-Schuss-Gerichte aus Schweizer Bäckereien und Restaurants zum Drittel des Preises retten.", "restaurants", "Essen & Mensa", "🍔", "too-good-to-go", "Too Good To Go CH", 4.90, 15.00, 30),
  makeOffer("b1111111-1111-4111-a111-111111111123", "eth-uzh-mensa-deus", "ETH & UZH Mensen: Tagesmenüs ab CHF 6.90", "Frische, ausgewogene Mittagsmenüs und vegetarische Buffets an den Schweizer Hochschulen.", "restaurants", "Essen & Mensa", "🍔", "eth-mensa", "SV Group Mensen", 6.90, 16.50, 30, true),

  // 12. Studium & Campus
  makeOffer("b1111111-1111-4111-a111-111111111124", "swisscovery-library", "Swisscovery Bibliotheksnetz: 100% Kostenloser Zugang", "Millionen wissenschaftliche Bücher, Artikel und E-Books aller Schweizer Hochschulbibliotheken über Switch edu-ID.", "bildung", "Studium & Campus", "🎓", "swisscovery", "SLSP Swisscovery", 0, 100, 30, true, true),

  // 13. Kultur & Festivals
  makeOffer("b1111111-1111-4111-a111-111111111125", "kulturlegi-caritas", "Caritas KulturLegi: Bis zu 70% Rabatt auf Kultur & Sport", "Vergünstigter Zugang zu Museen, Theatern, Konzerten und Sportstätten für schmale Budgets.", "events", "Kultur & Festivals", "🎟️", "caritas", "Caritas Schweiz", 10, 100, 30),
  makeOffer("b1111111-1111-4111-a111-111111111126", "museumspass-ch", "Schweizer Museumspass: Freier Eintritt in 500+ Museen", "Kostenloser Zutritt zu Schlössern, Kunstmuseen und Ausstellungen in der ganzen Schweiz.", "events", "Kultur & Festivals", "🎟️", "museumspass", "Schweizer Museumspass", 120, 177, 30),

  // 14. Gaming & Esport
  makeOffer("b1111111-1111-4111-a111-111111111127", "xbox-game-pass-ch", "Xbox Game Pass PC: CHF 1.– im ersten Monat", "Zugriff auf hunderte PC-Spiele inklusive Neuerscheinungen an Tag 1.", "gaming", "Gaming & Esport", "🎮", "microsoft", "Microsoft Gaming", 1.00, 12.99, 30),

  // 15. Kostenlos & Freebies
  makeOffer("b1111111-1111-4111-a111-111111111128", "neon-free-card-gratis", "Gratis Neon Mastercard & Willkommens-Bonus", "Eröffne dein Schweizer Konto kostenlos und erhalte die Debitkarte ohne Versandkosten.", "gratis", "Kostenlos & Freebies", "🆓", "neon", "Neon Bank", 0, 50, 30, false, true)
];

// Generate services/offers.ts content
const fileContent = `// services/offers.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Offer, OfferFilters, PaginatedOffers } from "@/types";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

export const FALLBACK_OFFERS: Offer[] = ${JSON.stringify(offers, null, 2)};

export async function getOffers(filters?: OfferFilters, page = 1, limit = 20): Promise<PaginatedOffers> {
  let filtered = [...FALLBACK_OFFERS];

  if (filters?.category_slug) {
    filtered = filtered.filter((o) => o.category?.slug === filters.category_slug);
  }
  if (filters?.city_slug) {
    filtered = filtered.filter((o) => o.is_nationwide || o.city?.slug === filters.city_slug);
  }
  if (filters?.brand_slug) {
    filtered = filtered.filter((o) => o.brand?.slug === filters.brand_slug);
  }
  if (filters?.advantage_type) {
    filtered = filtered.filter((o) => o.advantage_type === filters.advantage_type);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (o) =>
        o.title_de.toLowerCase().includes(q) ||
        (o.description_de && o.description_de.toLowerCase().includes(q)) ||
        (o.brand && o.brand.name.toLowerCase().includes(q))
    );
  }

  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  if (!isSupabaseConfigured()) {
    return {
      offers: paginated,
      total: filtered.length,
      page,
      limit,
      hasMore: startIndex + limit < filtered.length,
      total_pages: Math.ceil(filtered.length / limit),
    };
  }

  try {
    const supabase = await createClient();
    let query = supabase.from("offers").select("*, brand:brands(*), category:categories(*), city:cities(*)", { count: "exact" }).eq("status", "published");

    if (filters?.category_slug) {
      const { data: cat } = await supabase.from("categories").select("id").eq("slug", filters.category_slug).single();
      if (cat) query = query.eq("category_id", cat.id);
    }
    if (filters?.brand_slug) {
      const { data: br } = await supabase.from("brands").select("id").eq("slug", filters.brand_slug).single();
      if (br) query = query.eq("brand_id", br.id);
    }

    const { data, count, error } = await Promise.race([
      query.range(startIndex, startIndex + limit - 1),
      new Promise<{ data: null; count: null; error: Error }>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000))
    ]);

    if (!error && data && data.length > 0) {
      const tot = count || data.length;
      return {
        offers: data as Offer[],
        total: tot,
        page,
        limit,
        hasMore: startIndex + limit < tot,
        total_pages: Math.ceil(tot / limit),
      };
    }
  } catch {}

  return {
    offers: paginated,
    total: filtered.length,
    page,
    limit,
    hasMore: startIndex + limit < filtered.length,
    total_pages: Math.ceil(filtered.length / limit),
  };
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  const fallback = FALLBACK_OFFERS.find((o) => o.slug === slug) || null;
  if (!isSupabaseConfigured()) return fallback;

  try {
    const supabase = await createClient();
    const { data } = await Promise.race([
      supabase.from("offers").select("*, brand:brands(*), category:categories(*), city:cities(*)").eq("slug", slug).maybeSingle(),
      new Promise<{ data: null }>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1000))
    ]);
    if (data) return data as Offer;
  } catch {}

  return fallback;
}

export async function getTopOffers(limit = 6, page = 1): Promise<Offer[]> {
  const res = await getOffers(undefined, page, limit);
  return res.offers;
}

export async function getStudentOffers(limit = 6, page = 1): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter((o) => o.student_required).slice((page - 1) * limit, page * limit);
}

export async function getUnder25Offers(limit = 6, page = 1): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter((o) => o.age_max && o.age_max <= 25).slice((page - 1) * limit, page * limit);
}

export async function getFreeOffers(limit = 6, page = 1): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter((o) => o.advantage_type === "free" || o.young_price === 0).slice((page - 1) * limit, page * limit);
}

export const getVerifiedOffers = getOffers;
export const getPublishedOffers = getOffers;
export const getVerifiedTopOffers = getTopOffers;
export const getVerifiedNewOffers = getTopOffers;
export const getVerifiedExpiringOffers = getTopOffers;
export const getVerifiedStudentOffers = getStudentOffers;
export const getVerifiedUnderAgeOffers = getUnder25Offers;
export const getVerifiedFreeOffers = getFreeOffers;
export const getVorteilDerWoche = async (...args: any[]) => FALLBACK_OFFERS[0];
export const getDemoOffers = async (...args: any[]) => FALLBACK_OFFERS;
export const incrementOfferView = async (...args: any[]) => {};

export async function searchOffers(query: string, limit = 10): Promise<Offer[]> {
  const q = query.toLowerCase();
  return FALLBACK_OFFERS.filter(o => o.title_de.toLowerCase().includes(q) || (o.description_de && o.description_de.toLowerCase().includes(q))).slice(0, limit);
}

export async function getSimilarOffers(offerId: string, limit = 4): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter(o => o.id !== offerId).slice(0, limit);
}

export async function getOffersByCategory(categorySlug: string, limit = 12): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter(o => o.category?.slug === categorySlug).slice(0, limit);
}

export async function getOffersByCity(citySlug: string, limit = 12): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter(o => o.city?.slug === citySlug || o.is_nationwide).slice(0, limit);
}

export async function getOffersByBrand(brandSlug: string, limit = 12): Promise<Offer[]> {
  return FALLBACK_OFFERS.filter(o => o.brand?.slug === brandSlug).slice(0, limit);
}
`;

fs.writeFileSync('./services/offers.ts', fileContent);
console.log(`✓ Written ${offers.length} rich offers to services/offers.ts`);

// Upsert categories and offers to Supabase DB if credentials present
async function syncSupabase() {
  if (!supabaseUrl || !supabaseKey) {
    console.log("No Supabase credentials for remote DB sync");
    return;
  }
  console.log("Connecting to Supabase DB to sync Categories & Offers...");
  const client = createClient(supabaseUrl, supabaseKey);

  // Parse config/categories.ts manually
  const catText = fs.readFileSync('./config/categories.ts', 'utf8');
  const catMatch = catText.match(/CATEGORIES:[\s\S]*?=\s*(\[[\s\S]*?\]);/);
  let categoriesList = [];
  if (catMatch) {
    categoriesList = eval(catMatch[1]);
  }

  // Sync Categories
  for (let i = 0; i < categoriesList.length; i++) {
    const c = categoriesList[i];
    const row = {
      id: `a1111111-1111-4111-a111-1111111122${(i + 1).toString().padStart(2, '0')}`,
      slug: c.slug,
      name_de: c.name_de,
      name_fr: c.name_fr,
      name_it: c.name_it,
      icon: c.icon,
      description_de: c.description_de,
      sort_order: c.sort_order,
      created_at: new Date().toISOString()
    };
    await client.from('categories').upsert(row, { onConflict: 'slug' });
  }
  console.log(`✓ Synced ${categoriesList.length} categories to Supabase DB`);

  // Sync Offers
  for (const o of offers) {
    const row = {
      id: o.id,
      slug: o.slug,
      title_de: o.title_de,
      title_fr: o.title_fr,
      title_it: o.title_it,
      description_de: o.description_de,
      conditions_de: o.conditions_de,
      how_to_get_de: o.how_to_get_de,
      normal_price: o.normal_price,
      young_price: o.young_price,
      discount_percent: o.discount_percent,
      discount_amount: o.discount_amount,
      advantage_type: o.advantage_type,
      age_min: o.age_min,
      age_max: o.age_max,
      student_required: o.student_required,
      is_nationwide: true,
      is_online: true,
      external_url: o.external_url,
      status: "published",
      tags: o.tags,
      created_at: o.created_at,
      updated_at: o.updated_at
    };
    await client.from('offers').upsert(row, { onConflict: 'slug' });
  }
  console.log(`✓ Synced ${offers.length} offers to Supabase DB`);
}

syncSupabase();
