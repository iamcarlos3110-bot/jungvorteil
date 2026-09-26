const fs = require('fs');
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
const client = createClient(supabaseUrl, supabaseKey);

const categories = [
  { slug: "reisen", name_de: "Reisen & ÖV", name_fr: "Voyages & TP", name_it: "Viaggi & TP", icon: "🚆", description_de: "Vergünstigte Zugtickets, Halbtax, GA Night und Ausflüge in der Schweiz", sort_order: 1 },
  { slug: "finanzen", name_de: "Finanzen & Neobanken", name_fr: "Finances & Banque", name_it: "Finanze & Banca", icon: "💳", description_de: "Gratis Girokonten, Neobanken (Neon, Yuh, Zak) und TWINT", sort_order: 2 },
  { slug: "krankenkasse", name_de: "Krankenkasse & IPV", name_fr: "Assurance maladie & RPV", name_it: "Cassa malati & RPV", icon: "🩺", description_de: "Prämienverbilligung (IPV), Grundversicherung und Sport-Cashback", sort_order: 3 },
  { slug: "wohnen", name_de: "Miete & WGs", name_fr: "Logement & Colocation", name_it: "Alloggio & Colocazione", icon: "🏠", description_de: "Studenten-WGs, Genossenschaften (WOKO, JUWO, FMEL) und Möbel", sort_order: 4 },
  { slug: "handy", name_de: "Mobilfunk & Internet", name_fr: "Mobile & Internet", name_it: "Mobile & Internet", icon: "📱", description_de: "Handy-Tarife, unlimitiertes 5G und Internet-Abos für unter 30", sort_order: 5 },
  { slug: "technik", name_de: "Technik & Laptops", name_fr: "Technologie & Laptops", name_it: "Tecnologia & Laptop", icon: "💻", description_de: "Projekt Neptun Rabatte, MacBooks, ThinkPads und Software", sort_order: 6 },
  { slug: "streaming", name_de: "Streaming & Musik", name_fr: "Streaming & Musique", name_it: "Streaming & Musica", icon: "🎵", description_de: "Günstige Studententarife für Spotify, YouTube und Apple Music", sort_order: 7 },
  { slug: "mode", name_de: "Mode & Style", name_fr: "Mode & Style", name_it: "Moda & Style", icon: "👕", description_de: "Studentenrabatte bei Zalando, ASOS, Nike und Adidas", sort_order: 8 },
  { slug: "fitness", name_de: "Fitness & Bergsport", name_fr: "Fitness & Sport", name_it: "Fitness & Sport", icon: "🏋️", description_de: "ASVZ, UNISPORT, Gym-Abos und Wanderausrüstung", sort_order: 9 },
  { slug: "kino", name_de: "Kino & Ausgang", name_fr: "Cinéma & Sorties", name_it: "Cinema & Uscite", icon: "🎬", description_de: "Kinomontag-Tickets, Pathé, Blue Cinema und Ausgangs-Rabatte", sort_order: 10 },
  { slug: "restaurants", name_de: "Essen & Mensa", name_fr: "Nourriture & Cantines", name_it: "Cibo & Mense", icon: "🍔", description_de: "Hochschulmensen, Too Good To Go und Restaurant-Aktionen", sort_order: 11 },
  { slug: "bildung", name_de: "Studium & Campus", name_fr: "Études & Campus", name_it: "Studio & Campus", icon: "🎓", description_de: "Swisscovery Bibliotheken, ISIC Ausweis und Fachbücher", sort_order: 12 },
  { slug: "events", name_de: "Kultur & Festivals", name_fr: "Culture & Festivals", name_it: "Cultura & Festival", icon: "🎟️", description_de: "KulturLegi, Schweizer Museumspass und Konzert-Vergünstigungen", sort_order: 13 },
  { slug: "gaming", name_de: "Gaming & Esport", name_fr: "Jeux vidéo & Esport", name_it: "Gaming & Esport", icon: "🎮", description_de: "Games, Abos und Hardware-Deals", sort_order: 14 },
  { slug: "gratis", name_de: "Kostenlos & Freebies", name_fr: "Gratuit & Freebies", name_it: "Gratuito & Freebies", icon: "🆓", description_de: "100% kostenlose Angebote, Testabos und Gratis-Artikel", sort_order: 15 }
];

async function sync() {
  console.log('Syncing 15 categories cleanly to Supabase...');
  for (let i = 0; i < categories.length; i++) {
    const c = categories[i];
    const { data: existing } = await client.from('categories').select('id').eq('slug', c.slug).maybeSingle();
    
    const row = {
      id: existing ? existing.id : `a1111111-1111-4111-a111-1111111122${(i + 1).toString().padStart(2, '0')}`,
      slug: c.slug,
      name_de: c.name_de,
      name_fr: c.name_fr,
      name_it: c.name_it,
      icon: c.icon,
      description_de: c.description_de,
      sort_order: c.sort_order,
      created_at: new Date().toISOString()
    };
    const { error } = await client.from('categories').upsert(row, { onConflict: 'slug' });
    if (error) console.error(`Error syncing category ${c.slug}:`, error.message);
    else console.log(` ✓ ${c.slug}: ${c.name_de}`);
  }
  console.log('✓ All 15 Categories synced successfully.');
}

sync();
