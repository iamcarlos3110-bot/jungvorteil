-- =============================================================
-- JungVorteil – Seed Data (DEVELOPMENT ONLY)
-- All offers marked is_demo = TRUE
-- Companies/offers are fictional for demonstration
-- =============================================================

-- =====================
-- CATEGORIES
-- =====================
INSERT INTO categories (slug, name_de, name_fr, name_it, icon, description_de, sort_order) VALUES
  ('handy', 'Mobilfunk & Internet', 'Mobile & Internet', 'Mobile & Internet', '📱', 'Handy-Tarife, SIM-Karten und Internet-Abos für Junge', 1),
  ('reisen', 'Reisen & ÖV', 'Voyages & TP', 'Viaggi & TP', '🚆', 'Vergünstigte Zugtickets, Halbtax, GA und Reiseangebote', 2),
  ('kino', 'Kino & Unterhaltung', 'Cinéma & Divertissement', 'Cinema & Intrattenimento', '🎬', 'Günstige Kinotickets und Unterhaltungsangebote', 3),
  ('restaurants', 'Essen & Restaurants', 'Nourriture & Restaurants', 'Cibo & Ristoranti', '🍔', 'Rabatte in Restaurants, Fast Food und Cafés', 4),
  ('mode', 'Mode & Kleidung', 'Mode & Vêtements', 'Moda & Abbigliamento', '👕', 'Studentenrabatte bei Mode und Kleidung', 5),
  ('technik', 'Technik & Software', 'Technologie & Logiciels', 'Tecnologia & Software', '💻', 'Günstige Tech-Produkte und Software-Lizenzen', 6),
  ('gaming', 'Gaming', 'Jeux vidéo', 'Gaming', '🎮', 'Spiele, Abos und Gaming-Equipment mit Rabatt', 7),
  ('fitness', 'Fitness & Sport', 'Fitness & Sport', 'Fitness & Sport', '🏋️', 'Fitnessstudio-Mitgliedschaften und Sportrabatte', 8),
  ('streaming', 'Streaming & Musik', 'Streaming & Musique', 'Streaming & Musica', '🎵', 'Günstige Streaming-Abos für Musik, Filme und Serien', 9),
  ('bildung', 'Studium & Bildung', 'Études & Formation', 'Studio & Formazione', '🎓', 'Studentenrabatte auf Bücher, Kurse und Software', 10),
  ('hotels', 'Reisen & Hotels', 'Voyages & Hôtels', 'Viaggi & Hotel', '✈️', 'Günstige Hotelbuchungen und Reiseangebote', 11),
  ('finanzen', 'Finanzen & Banking', 'Finances & Banque', 'Finanze & Banca', '💳', 'Konten, Karten und Finanzprodukte für Junge', 12),
  ('events', 'Events & Konzerte', 'Événements & Concerts', 'Eventi & Concerti', '🎟️', 'Günstige Tickets für Events, Konzerte und Messen', 13),
  ('shopping', 'Shopping & Lifestyle', 'Shopping & Style de vie', 'Shopping & Lifestyle', '🛍️', 'Allgemeine Einkaufsrabatte und Gutscheine', 14),
  ('gratis', 'Kostenlos', 'Gratuit', 'Gratuito', '🆓', 'Komplett kostenlose Angebote und Services', 15)
ON CONFLICT (slug) DO NOTHING;

-- =====================
-- CITIES
-- =====================
INSERT INTO cities (slug, name_de, name_fr, name_it, canton) VALUES
  ('zuerich', 'Zürich', 'Zurich', 'Zurigo', 'ZH'),
  ('bern', 'Bern', 'Berne', 'Berna', 'BE'),
  ('basel', 'Basel', 'Bâle', 'Basilea', 'BS'),
  ('genf', 'Genf', 'Genève', 'Ginevra', 'GE'),
  ('lausanne', 'Lausanne', 'Lausanne', 'Losanna', 'VD'),
  ('winterthur', 'Winterthur', 'Winterthour', 'Winterthur', 'ZH'),
  ('luzern', 'Luzern', 'Lucerne', 'Lucerna', 'LU'),
  ('st-gallen', 'St. Gallen', 'Saint-Gall', 'San Gallo', 'SG'),
  ('lugano', 'Lugano', 'Lugano', 'Lugano', 'TI')
ON CONFLICT (slug) DO NOTHING;

-- =====================
-- SOURCES
-- =====================
INSERT INTO sources (name, type, notes) VALUES
  ('Manuell eingetragen', 'manual', 'Angebote die manuell über das Admin-Panel eingetragen wurden')
ON CONFLICT DO NOTHING;

-- =====================
-- BRANDS (DEMO - fictional)
-- =====================
INSERT INTO brands (slug, name, description_de, website_url, categories) VALUES
  ('demo-mobile', 'Demo Mobile', 'Beispielanbieter für Mobilfunkleistungen – DEMO', 'https://example.com', ARRAY['handy']),
  ('demo-cinema', 'Demo Cinema', 'Beispielanbieter für Kinotickets – DEMO', 'https://example.com', ARRAY['kino']),
  ('demo-fitness', 'Demo Fitness', 'Beispielanbieter für Fitnessstudio – DEMO', 'https://example.com', ARRAY['fitness']),
  ('demo-travel', 'Demo Travel', 'Beispielanbieter für Reisen – DEMO', 'https://example.com', ARRAY['reisen', 'hotels']),
  ('demo-fashion', 'Demo Fashion', 'Beispielanbieter für Mode – DEMO', 'https://example.com', ARRAY['mode']),
  ('demo-streaming', 'Demo Streaming', 'Beispielanbieter für Streaming – DEMO', 'https://example.com', ARRAY['streaming']),
  ('demo-software', 'Demo Software', 'Beispielanbieter für Software – DEMO', 'https://example.com', ARRAY['technik', 'bildung']),
  ('demo-food', 'Demo Food', 'Beispielanbieter für Restaurants – DEMO', 'https://example.com', ARRAY['restaurants']),
  ('demo-gaming', 'Demo Gaming', 'Beispielanbieter für Gaming – DEMO', 'https://example.com', ARRAY['gaming']),
  ('demo-banking', 'Demo Banking', 'Beispielanbieter für Banking – DEMO', 'https://example.com', ARRAY['finanzen'])
ON CONFLICT (slug) DO NOTHING;

-- =====================
-- OFFERS (DEMO - clearly marked)
-- =====================

-- Temporary variables for IDs
DO $$
DECLARE
  cat_handy UUID;
  cat_kino UUID;
  cat_fitness UUID;
  cat_reisen UUID;
  cat_mode UUID;
  cat_streaming UUID;
  cat_technik UUID;
  cat_restaurants UUID;
  cat_gaming UUID;
  cat_bildung UUID;
  cat_finanzen UUID;
  cat_gratis UUID;
  brand_mobile UUID;
  brand_cinema UUID;
  brand_fitness UUID;
  brand_travel UUID;
  brand_fashion UUID;
  brand_streaming UUID;
  brand_software UUID;
  brand_food UUID;
  brand_gaming UUID;
  brand_banking UUID;
  city_zuerich UUID;
  city_bern UUID;
  city_basel UUID;
  src_manual UUID;
BEGIN
  -- Get IDs
  SELECT id INTO cat_handy FROM categories WHERE slug = 'handy';
  SELECT id INTO cat_kino FROM categories WHERE slug = 'kino';
  SELECT id INTO cat_fitness FROM categories WHERE slug = 'fitness';
  SELECT id INTO cat_reisen FROM categories WHERE slug = 'reisen';
  SELECT id INTO cat_mode FROM categories WHERE slug = 'mode';
  SELECT id INTO cat_streaming FROM categories WHERE slug = 'streaming';
  SELECT id INTO cat_technik FROM categories WHERE slug = 'technik';
  SELECT id INTO cat_restaurants FROM categories WHERE slug = 'restaurants';
  SELECT id INTO cat_gaming FROM categories WHERE slug = 'gaming';
  SELECT id INTO cat_bildung FROM categories WHERE slug = 'bildung';
  SELECT id INTO cat_finanzen FROM categories WHERE slug = 'finanzen';
  SELECT id INTO cat_gratis FROM categories WHERE slug = 'gratis';
  SELECT id INTO brand_mobile FROM brands WHERE slug = 'demo-mobile';
  SELECT id INTO brand_cinema FROM brands WHERE slug = 'demo-cinema';
  SELECT id INTO brand_fitness FROM brands WHERE slug = 'demo-fitness';
  SELECT id INTO brand_travel FROM brands WHERE slug = 'demo-travel';
  SELECT id INTO brand_fashion FROM brands WHERE slug = 'demo-fashion';
  SELECT id INTO brand_streaming FROM brands WHERE slug = 'demo-streaming';
  SELECT id INTO brand_software FROM brands WHERE slug = 'demo-software';
  SELECT id INTO brand_food FROM brands WHERE slug = 'demo-food';
  SELECT id INTO brand_gaming FROM brands WHERE slug = 'demo-gaming';
  SELECT id INTO brand_banking FROM brands WHERE slug = 'demo-banking';
  SELECT id INTO city_zuerich FROM cities WHERE slug = 'zuerich';
  SELECT id INTO city_bern FROM cities WHERE slug = 'bern';
  SELECT id INTO city_basel FROM cities WHERE slug = 'basel';
  SELECT id INTO src_manual FROM sources WHERE type = 'manual' LIMIT 1;

  -- DEMO OFFERS
  INSERT INTO offers (slug, title_de, description_de, conditions_de, how_to_get_de,
    brand_id, category_id, discount_percent, advantage_type, age_max,
    student_required, is_nationwide, is_online, status, tags, is_demo, view_count) VALUES

  ('demo-handy-tarif-jung', 'Beispielangebot – Demo', 
   'BEISPIELANGEBOT (DEMO): Dies ist ein Beispiel für einen günstigen Handy-Tarif für junge Leute. Echte Angebote werden über das Admin-Panel eingetragen.',
   'Nur für Personen bis 28 Jahre. Nicht mit anderen Angeboten kombinierbar. Solange Vorrat.',
   '1. Demo-Website besuchen 2. Tarif auswählen 3. Alter verifizieren',
   brand_mobile, cat_handy, 30, 'discount_percent', 28, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_30', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 450),

  ('demo-kino-student', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstiger Kinoeintritt für Studierende. Dieses Angebot ist ein Beispiel und stellt kein reales Angebot dar.',
   'Nur mit gültigem Studierendenausweis. An der Kasse vorzeigen.',
   '1. An der Kasse Studierendenausweis vorzeigen 2. Vergünstigten Preis zahlen',
   brand_cinema, cat_kino, 40, 'discount_percent', NULL, TRUE, FALSE, FALSE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'BELIEBT'], TRUE, 380),

  ('demo-fitness-jahres-abo', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Vergünstigtes Jahresabo im Demo Fitness Center für Personen unter 26 Jahren.',
   'Muss online abonniert werden. Nur für Erstmitglieder. Gültig 1 Jahr.',
   '1. Online registrieren 2. Alter verifizieren 3. Abo abschließen',
   brand_fitness, cat_fitness, 25, 'discount_percent', 25, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_25', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 290),

  ('demo-zugticket-jung', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigere Zugtickets für Junge. Dieses Angebot ist ein Beispiel.',
   'Für Personen bis 25 Jahre. Gilt für bestimmte Verbindungen und Zeiten.',
   '1. App herunterladen 2. Alter eingeben 3. Vergünstigten Preis erhalten',
   brand_travel, cat_reisen, 50, 'discount_percent', 25, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_25', 'BELIEBT', 'SCHWEIZWEIT'], TRUE, 520),

  ('demo-mode-studierende', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Rabatt bei Demo Fashion für alle Studierenden.',
   'Online oder im Laden mit Studierendenausweis.',
   '1. Studierendenausweis vorzeigen oder Online-Code eingeben',
   brand_fashion, cat_mode, 15, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 210),

  ('demo-streaming-abo', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigeres Streaming-Abo für Studierende. Beispielangebot.',
   'Nur mit .edu E-Mail-Adresse. Jährliche Verifizierung erforderlich.',
   '1. Studentenstatus verifizieren 2. Vergünstigtes Abo abschließen',
   brand_streaming, cat_streaming, 50, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'SCHWEIZWEIT', 'BELIEBT'], TRUE, 640),

  ('demo-software-student', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Kostenlose oder stark vergünstigte Software-Lizenzen für Studierende.',
   'Nur für eingeschriebene Studierende. Jährliche Erneuerung erforderlich.',
   '1. Universitäts-E-Mail verwenden 2. Studierendenstatus verifizieren 3. Lizenz erhalten',
   brand_software, cat_technik, 100, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'GRATIS', 'SCHWEIZWEIT'], TRUE, 480),

  ('demo-restaurant-zuerich', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Lokales Restaurant in Zürich mit Rabatt für Studierende und Junge.',
   'Montag bis Freitag, 11:00–14:00 Uhr. Nicht an Feiertagen.',
   '1. Studierendenausweis oder Demo-Karte vorzeigen 2. Rabatt an der Kasse erhalten',
   brand_food, cat_restaurants, 20, 'discount_percent', 30, TRUE, FALSE, FALSE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'UNTER_30', 'ZUERICH'], TRUE, 175),

  ('demo-gaming-abo', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigeres Gaming-Abo für junge Leute unter 25 Jahren.',
   'Nur für Erstabonnenten. Monatlich kündbar.',
   '1. Registrieren 2. Alter verifizieren 3. Vergünstigten Preis bezahlen',
   brand_gaming, cat_gaming, 35, 'discount_percent', 25, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_25', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 195),

  ('demo-bankkonto-gratis', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Kostenloses Bankkonto für Personen unter 27 Jahren.',
   'Für Schweizer Wohnsitz. Alter verifizierbar.',
   '1. Online beantragen 2. Identität verifizieren 3. Kostenloses Konto erhalten',
   brand_banking, cat_finanzen, NULL, 'free', 27, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_30', 'ONLINE', 'GRATIS', 'SCHWEIZWEIT'], TRUE, 310),

  ('demo-museum-student-bern', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Freier Eintritt für Studierende in Demo Museum in Bern.',
   'Studierendenausweis vorzeigen.',
   '1. An der Kasse Studierendenausweis vorzeigen',
   NULL, cat_kino, NULL, 'free', NULL, TRUE, FALSE, FALSE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'GRATIS'], TRUE, 145),

  ('demo-bildung-kurs', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigere Online-Kurse für Studierende.',
   'Mit Studierendenausweis oder .edu E-Mail.',
   '1. Mit Studierenden-E-Mail registrieren 2. Vergünstigten Kurs buchen',
   brand_software, cat_bildung, 60, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 260),

  ('demo-sportabo-winter', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstige Sportpässe für junge Erwachsene in der Wintersaison.',
   'Gültig Oktober bis März. Für Personen 18–30 Jahre.',
   '1. Online buchen 2. Altersnachweis hochladen 3. Pass erhalten',
   brand_fitness, cat_fitness, 30, 'discount_percent', 30, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_30', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 115),

  ('demo-hotel-student-rate', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigere Hotelpreise für Studierende bei Demo Travel.',
   'Bei Buchung Studierendenausweis als PDF hochladen.',
   '1. Hotel suchen 2. Studierendentarif wählen 3. Ausweis hochladen',
   brand_travel, cat_hotels, 20, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 198),

  ('demo-concert-youth-price', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Vergünstigte Konzerttickets für Personen unter 25.',
   'Nur online verfügbar. Begrenzte Kontingente.',
   '1. Ticket online kaufen 2. Alter verifizieren 3. Ticket herunterladen',
   NULL, cat_events, 40, 'discount_percent', 25, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_25', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 232),

  ('demo-essen-gratis-beilage', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Gratis Beilage bei Demo Food für Studierende.',
   'Einmal pro Besuch. Mit Studierendenausweis.',
   '1. Bestellen 2. Studierendenausweis vorzeigen 3. Gratis Beilage erhalten',
   brand_food, cat_restaurants, NULL, 'free', NULL, TRUE, FALSE, FALSE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'GRATIS'], TRUE, 88),

  ('demo-vpn-gratis-studenten', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Kostenloses VPN für Studierende für 1 Jahr.',
   'Nur für Studierende mit .edu E-Mail.',
   '1. Mit Uni-E-Mail registrieren 2. Verifizieren 3. VPN aktivieren',
   brand_software, cat_technik, NULL, 'free', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'GRATIS', 'SCHWEIZWEIT'], TRUE, 410),

  ('demo-mode-sale-under-25', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Zusätzlicher Rabatt im Demo Fashion Sale für Personen unter 25.',
   'Nicht kombinierbar mit anderen Aktionen.',
   '1. Alter beim Checkout verifizieren 2. Zusatzrabatt automatisch',
   brand_fashion, cat_mode, 20, 'discount_percent', 25, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_25', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 155),

  ('demo-musik-abo-guenstig', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Günstigeres Musikstreaming für Studierende.',
   'Jährliche Verifizierung des Studierendenstatus.',
   '1. Studierendenstatus verifizieren 2. Vergünstigtes Abo erhalten',
   brand_streaming, cat_streaming, 50, 'discount_percent', NULL, TRUE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'STUDENTEN', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 335),

  ('demo-reise-unter-26', 'Beispielangebot – Demo',
   'BEISPIELANGEBOT (DEMO): Spezielle Reisetarife für Personen unter 26 Jahren innerhalb Europas.',
   'Für Personen unter 26 Jahren. Begrenzte Verfügbarkeit.',
   '1. Alter bei Buchung angeben 2. Vergünstigten Tarif wählen',
   brand_travel, cat_reisen, 30, 'discount_percent', 26, FALSE, TRUE, TRUE, 'published',
   ARRAY['DEMO', 'UNTER_30', 'ONLINE', 'SCHWEIZWEIT'], TRUE, 275);

END $$;
