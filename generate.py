import uuid
import os

def gen_uuid():
    return str(uuid.uuid4())

categories = [
    ('food', 'Essen & Trinken', 'Nourriture', 'Cibo', 'fas fa-hamburger'),
    ('tech', 'Technik', 'Technologie', 'Tecnologia', 'fas fa-laptop'),
    ('fashion', 'Mode', 'Mode', 'Moda', 'fas fa-tshirt'),
    ('mobility', 'Mobilität', 'Mobilité', 'Mobilità', 'fas fa-train'),
    ('entertainment', 'Unterhaltung', 'Divertissement', 'Intrattenimento', 'fas fa-film'),
    ('fitness', 'Fitness & Sport', 'Sport', 'Sport', 'fas fa-dumbbell'),
    ('education', 'Bildung', 'Éducation', 'Educazione', 'fas fa-graduation-cap'),
    ('finance', 'Finanzen', 'Finances', 'Finanza', 'fas fa-piggy-bank'),
    ('health', 'Gesundheit', 'Santé', 'Salute', 'fas fa-heartbeat'),
    ('beauty', 'Beauty', 'Beauté', 'Bellezza', 'fas fa-spa'),
    ('travel', 'Reisen', 'Voyages', 'Viaggi', 'fas fa-plane'),
    ('nightlife', 'Nightlife', 'Vie nocturne', 'Vita notturna', 'fas fa-glass-cheers'),
    ('shopping', 'Shopping', 'Shopping', 'Shopping', 'fas fa-shopping-bag'),
    ('culture', 'Kultur', 'Culture', 'Cultura', 'fas fa-palette'),
    ('home', 'Wohnen', 'Maison', 'Casa', 'fas fa-home')
]

cities = [
    ('zuerich', 'Zürich', 'Zurich', 'Zurigo', 'ZH'),
    ('genf', 'Genf', 'Genève', 'Ginevra', 'GE'),
    ('basel', 'Basel', 'Bâle', 'Basilea', 'BS'),
    ('bern', 'Bern', 'Berne', 'Berna', 'BE'),
    ('lausanne', 'Lausanne', 'Lausanne', 'Losanna', 'VD'),
    ('luzern', 'Luzern', 'Lucerne', 'Lucerna', 'LU'),
    ('winterthur', 'Winterthur', 'Winterthour', 'Winterthur', 'ZH'),
    ('st-gallen', 'St. Gallen', 'Saint-Gall', 'San Gallo', 'SG'),
    ('fribourg', 'Freiburg', 'Fribourg', 'Friburgo', 'FR'),
    ('lugano', 'Lugano', 'Lugano', 'Lugano', 'TI')
]

brands = [
    ('sbb', 'SBB', 'https://example.com/sbb.png'),
    ('swisscom', 'Swisscom', 'https://example.com/swisscom.png'),
    ('sunrise', 'Sunrise', 'https://example.com/sunrise.png'),
    ('salt', 'Salt', 'https://example.com/salt.png'),
    ('netflix', 'Netflix', 'https://example.com/netflix.png'),
    ('spotify', 'Spotify', 'https://example.com/spotify.png'),
    ('pathe', 'Pathé', 'https://example.com/pathe.png'),
    ('blue-cinema', 'blue Cinema', 'https://example.com/blue-cinema.png'),
    ('basefit', 'Basefit (PureGym)', 'https://example.com/basefit.png'),
    ('activ-fitness', 'Activ Fitness', 'https://example.com/activ-fitness.png'),
    ('apple', 'Apple', 'https://example.com/apple.png'),
    ('samsung', 'Samsung', 'https://example.com/samsung.png'),
    ('hm', 'H&M', 'https://example.com/hm.png'),
    ('zalando', 'Zalando', 'https://example.com/zalando.png'),
    ('uber', 'Uber', 'https://example.com/uber.png'),
    ('mcdonalds', 'McDonalds', 'https://example.com/mcdonalds.png'),
    ('coop', 'Coop', 'https://example.com/coop.png'),
    ('migros', 'Migros', 'https://example.com/migros.png'),
    ('neon', 'Neon', 'https://example.com/neon.png'),
    ('zkb', 'ZKB', 'https://example.com/zkb.png'),
    ('asvz', 'ASVZ', 'https://example.com/asvz.png'),
    ('mobility', 'Mobility', 'https://example.com/mobility.png'),
    ('amazon', 'Amazon', 'https://example.com/amazon.png'),
    ('adobe', 'Adobe', 'https://example.com/adobe.png'),
    ('microsoft', 'Microsoft', 'https://example.com/microsoft.png')
]

offers_data = [
    ('sbb-ga-jugend', 'GA Jugend', 'Das GA für Jugendliche.', 'sbb', 'mobility', 'reduced_price', 3995, 2900, False, 'https://www.sbb.ch/de/abos-billette/abonnemente/ga/ga-jugend.html'),
    ('sbb-halbtax-jugend', 'Halbtax Jugend', 'Halbtax für Jugendliche.', 'sbb', 'mobility', 'reduced_price', 120, 120, False, 'https://www.sbb.ch/de/abos-billette/abonnemente/halbtax/halbtax-jugend.html'),
    ('sbb-ga-night', 'GA Night', 'Freie Fahrt ab 19 Uhr.', 'sbb', 'mobility', 'reduced_price', 99, 99, False, 'https://www.sbb.ch/de/abos-billette/abonnemente/ga/ga-night.html'),
    ('swisscom-blue-mobile-youth', 'blue Mobile Youth', 'Handy-Abo für Junge.', 'swisscom', 'tech', 'reduced_price', 69.90, 59.90, False, 'https://www.swisscom.ch/de/privatkunden/mobile/jugend-angebote.html'),
    ('sunrise-up-mobile-youth', 'Sunrise Up Mobile Youth', 'Sunrise Abo für unter 30.', 'sunrise', 'tech', 'reduced_price', 59, 29.50, False, 'https://www.sunrise.ch/de/mobile/up-mobile-youth'),
    ('salt-youth', 'Salt Youth', 'Unlimitiert in der Schweiz.', 'salt', 'tech', 'reduced_price', 59.95, 29.95, False, 'https://www.salt.ch/de/mobile/youth'),
    ('spotify-student', 'Spotify Premium Student', 'Musik für Studierende.', 'spotify', 'entertainment', 'reduced_price', 13.95, 7.50, False, 'https://www.spotify.com/ch-de/student/'),
    ('apple-music-student', 'Apple Music Student', 'Apple Music günstiger.', 'apple', 'entertainment', 'reduced_price', 13.90, 7.50, False, 'https://support.apple.com/de-ch/HT205928'),
    ('apple-education', 'Apple Education Pricing', 'Rabatt auf Macs und iPads.', 'apple', 'tech', 'discount_percent', None, None, False, 'https://www.apple.com/chde-edu/shop'),
    ('pathe-kino-student', 'Pathé Kinoticket Student', 'Vergünstigter Kinoeintritt.', 'pathe', 'entertainment', 'reduced_price', 20.90, 16.90, False, 'https://pathe.ch/de/kinos/'),
    ('blue-cinema-youth', 'blue Cinema Youth', 'Kino für unter 26.', 'blue-cinema', 'entertainment', 'reduced_price', 20.90, 16.90, False, 'https://bluecinema.ch/de/tickets/'),
    ('basefit-student', 'Basefit Student', 'Günstiger trainieren.', 'basefit', 'fitness', 'reduced_price', 499, 399, False, 'https://www.basefit.ch/'),
    ('activ-fitness-student', 'Activ Fitness Student', 'Fitnessabo für Studierende.', 'activ-fitness', 'fitness', 'reduced_price', 790, 690, False, 'https://www.activfitness.ch/'),
    ('hm-student', 'H&M Student Discount', '10% Rabatt bei H&M.', 'hm', 'fashion', 'discount_percent', None, None, False, 'https://www2.hm.com/de_ch/student-discount.html'),
    ('zalando-student', 'Zalando Student', 'Rabatte bei Zalando.', 'zalando', 'fashion', 'discount_percent', None, None, True, ''),
    ('neon-free', 'Neon Free', 'Kostenlose Mastercard.', 'neon', 'finance', 'free', 0, 0, False, 'https://www.neon-free.ch/de/'),
    ('zkb-young', 'ZKB young', 'Konto für Junge.', 'zkb', 'finance', 'free', 0, 0, False, 'https://www.zkb.ch/de/private/konten-karten/pakete-junge-studierende.html'),
    ('asvz-sport', 'ASVZ Sportangebot', 'Sport für Studierende.', 'asvz', 'fitness', 'free', 350, 0, False, 'https://asvz.ch/'),
    ('mobility-student', 'Mobility Student', 'Carsharing für Studis.', 'mobility', 'mobility', 'reduced_price', 129, 79, False, 'https://www.mobility.ch/de/privatkunden/studierende'),
    ('amazon-prime-student', 'Amazon Prime Student', 'Prime für Studis.', 'amazon', 'tech', 'reduced_price', 8.99, 4.49, False, 'https://www.amazon.de/amazonprime/student'),
    ('adobe-cc-student', 'Adobe CC Student', '65% Rabatt auf Adobe CC.', 'adobe', 'tech', 'discount_percent', 65, 19.50, False, 'https://www.adobe.com/ch_de/creativecloud/buy/students.html'),
    ('microsoft-365-student', 'Microsoft 365 Education', 'Office 365 kostenlos für Studenten.', 'microsoft', 'tech', 'free', 69.95, 0, False, 'https://www.microsoft.com/de-ch/education/products/office'),
    ('uber-eats-student', 'Uber Eats 10%', '10% Rabatt auf Uber Eats.', 'uber', 'food', 'discount_percent', None, None, True, ''),
    ('mcdonalds-menu', 'McDonalds Gratis Getränk', 'Gratis Getränk zum Menü.', 'mcdonalds', 'food', 'free', None, None, True, ''),
    ('coop-mobile-young', 'Coop Mobile Young', 'Das günstige Abo.', 'coop', 'tech', 'reduced_price', 29.90, 19.90, True, ''),
    ('migros-club-student', 'Migros Klubschule Rabatt', '10% auf Kurse.', 'migros', 'education', 'discount_percent', None, None, True, ''),
    ('samsung-edu', 'Samsung Student', 'Bis zu 20% auf Handys.', 'samsung', 'tech', 'discount_percent', None, None, True, ''),
    ('basefit-gratis', 'Basefit 1 Monat', '1 Monat gratis trainieren.', 'basefit', 'fitness', 'free', None, None, True, ''),
    ('zuerich-opera-student', 'Opernhaus Zürich Student', 'Last Minute Tickets.', 'sbb', 'culture', 'reduced_price', 100, 20, True, ''),
    ('basel-art-student', 'Kunstmuseum Basel', 'Eintritt reduziert.', 'sbb', 'culture', 'reduced_price', 26, 8, True, ''),
    ('bern-museum', 'Naturhistorisches Museum', 'Studiratestarif.', 'sbb', 'culture', 'reduced_price', 15, 10, True, ''),
    ('genf-boat', 'CGN Genf Studenten', 'Bootstour Rabatt.', 'sbb', 'travel', 'reduced_price', 30, 20, True, ''),
    ('lausanne-olympic', 'Olympic Museum', 'Eintritt Studierende.', 'sbb', 'culture', 'reduced_price', 20, 14, True, ''),
    ('luzern-kkl', 'KKL Luzern Student', 'Konzertkarten.', 'sbb', 'culture', 'reduced_price', 80, 40, True, ''),
    ('lugano-lido', 'Lido di Lugano', 'Eintritt für Studis.', 'sbb', 'fitness', 'reduced_price', 11, 8, True, ''),
    ('fribourg-cafe', 'Café du Midi', 'Studentenmenü.', 'mcdonalds', 'food', 'reduced_price', 25, 18, True, ''),
    ('st-gallen-bibliothek', 'Stiftsbibliothek', 'Eintritt.', 'sbb', 'culture', 'reduced_price', 18, 12, True, ''),
    ('winterthur-technorama', 'Technorama', 'Ermässigung.', 'sbb', 'culture', 'reduced_price', 33, 29, True, ''),
    ('zalando-premium', 'Zalando Plus', 'Halber Preis.', 'zalando', 'fashion', 'reduced_price', 29.90, 14.90, True, ''),
    ('hm-conscious', 'H&M Conscious', '15% für Studis.', 'hm', 'fashion', 'discount_percent', None, None, True, ''),
    ('spotify-duo', 'Spotify Duo Student', 'Duo für WG.', 'spotify', 'entertainment', 'reduced_price', 18.90, 12.90, True, ''),
    ('netflix-basic', 'Netflix Basic', 'Reduziert.', 'netflix', 'entertainment', 'reduced_price', 11.90, 8.90, True, ''),
    ('netflix-premium', 'Netflix Premium', 'Rabatt.', 'netflix', 'entertainment', 'discount_percent', None, None, True, ''),
    ('apple-ipad', 'Apple iPad Edu', '15% auf iPad.', 'apple', 'tech', 'discount_percent', None, None, True, ''),
    ('apple-watch', 'Apple Watch Edu', '10% auf Watch.', 'apple', 'tech', 'discount_percent', None, None, True, ''),
    ('swisscom-internet', 'Swisscom Internet', 'Internet für WG.', 'swisscom', 'tech', 'reduced_price', 79, 49, True, ''),
    ('sunrise-internet', 'Sunrise Internet Youth', 'Internet.', 'sunrise', 'tech', 'reduced_price', 69, 39, True, ''),
    ('salt-home', 'Salt Home Student', 'Zuhause.', 'salt', 'tech', 'reduced_price', 49, 39, True, ''),
    ('neon-green', 'Neon Green', 'Fürs Klima.', 'neon', 'finance', 'reduced_price', 5, 2, True, ''),
    ('zkb-visa', 'ZKB Visa Student', 'Gratis KK.', 'zkb', 'finance', 'free', 0, 0, True, '')
]

articles_data = [
    ('zuerich-studentenrabatte', 'Die besten Studentenrabatte in Zürich', 'Da häts die beschtä Studirabätt i Züri.', 'Züri isch tüür, aber als Studi gits mega viel geili Rabätt, wo mer kenne muess...', 'https://example.com/art1.png', 'Guides'),
    ('sbb-youth-angebote', 'Welche SBB Angebote lohnen sich für Junge?', 'GA Night, Halbtax oder doch das normale GA?', 'Wänn du unter 25 bisch, chasch bi de SBB richtig viel Gäld spare. Mer zeiget dir, weles Abo am meiste Sinn macht...', 'https://example.com/art2.png', 'Tipps'),
    ('budget-apps', '5 Budget-Apps für Schweizer Studierende', 'So häsch dini Finanze im Griff.', 'S Läbe isch tüür - vor allem uswärts ässe und de Usgang. Mit dene Apps bisch immer uf de sichere Siite...', 'https://example.com/art3.png', 'Finanzen'),
    ('handy-abos-im-vergleich', 'Handy-Abos für Junge im Vergleich', 'Swisscom, Sunrise oder Salt?', 'Wer hät s bescht Netz und wer de bescht Priis für Jugendlichi? Eusi Übersicht...', 'https://example.com/art4.png', 'Vergleich'),
    ('kino-rabatte', 'So chunnsch günstiger is Kino', 'Rabatt bi Pathé, blue Cinema und Co.', 'En Kinoabig mit Popcorn cha schnäll mal 30 Stutz choschte. Zum Glück gits aber richtig gueti Jugend-Tarif...', 'https://example.com/art5.png', 'Entertainment')
]

os.makedirs('C:/Users/iamca/.gemini/antigravity/scratch/jungvorteil/supabase', exist_ok=True)
with open('C:/Users/iamca/.gemini/antigravity/scratch/jungvorteil/supabase/seed_phase2.sql', 'w', encoding='utf-8') as f:
    f.write('-- Seed Data Phase 2\n\n')
    f.write('BEGIN;\n\n')
    
    cat_uuids = {}
    f.write('-- Categories\n')
    for c in categories:
        uid = gen_uuid()
        cat_uuids[c[0]] = uid
        f.write(f"INSERT INTO public.categories (id, slug, name_de, name_fr, name_it, icon) VALUES ('{uid}', '{c[0]}', '{c[1]}', '{c[2]}', '{c[3]}', '{c[4]}');\n")
    
    city_uuids = {}
    f.write('\n-- Cities\n')
    for c in cities:
        uid = gen_uuid()
        city_uuids[c[0]] = uid
        f.write(f"INSERT INTO public.cities (id, slug, name_de, name_fr, name_it, canton) VALUES ('{uid}', '{c[0]}', '{c[1]}', '{c[2]}', '{c[3]}', '{c[4]}');\n")
    
    brand_uuids = {}
    f.write('\n-- Brands\n')
    for b in brands:
        uid = gen_uuid()
        brand_uuids[b[0]] = uid
        f.write(f"INSERT INTO public.brands (id, slug, name, logo_url) VALUES ('{uid}', '{b[0]}', '{b[1]}', '{b[2]}');\n")
    
    f.write('\n-- Offers & Verifications\n')
    for o in offers_data:
        uid = gen_uuid()
        brand_id = brand_uuids.get(o[3], 'NULL')
        if brand_id != 'NULL': brand_id = f"'{brand_id}'"
        cat_id = cat_uuids.get(o[4], 'NULL')
        if cat_id != 'NULL': cat_id = f"'{cat_id}'"
        
        norm = str(o[6]) if o[6] is not None else 'NULL'
        young = str(o[7]) if o[7] is not None else 'NULL'
        is_demo = str(o[8]).lower()
        
        f.write(f"INSERT INTO public.offers (id, slug, title_de, description_de, brand_id, category_id, advantage_type, normal_price, young_price, status, is_demo) VALUES ('{uid}', '{o[0]}', '{o[1]}', '{o[2]}', {brand_id}, {cat_id}, '{o[5]}', {norm}, {young}, 'published', {is_demo});\n")
        
        if not o[8] and o[9]:
            f.write(f"INSERT INTO public.offer_verifications (offer_id, source_url, source_name, status) VALUES ('{uid}', '{o[9]}', 'Offizielle Website', 'verified');\n")
            
    f.write('\n-- Articles\n')
    for a in articles_data:
        uid = gen_uuid()
        f.write(f"INSERT INTO public.articles (id, slug, title, excerpt, content, image_url, category, published_at) VALUES ('{uid}', '{a[0]}', '{a[1]}', '{a[2]}', '{a[3]}', '{a[4]}', '{a[5]}', now());\n")
        
    f.write('\nCOMMIT;\n')
