import { 
  getVerifiedTopOffers, getDemoOffers, getVerifiedNewOffers, getVerifiedExpiringOffers,
  getVerifiedStudentOffers, getVerifiedUnderAgeOffers, getVerifiedFreeOffers,
  getVorteilDerWoche
} from '@/services/offers';
import { getAllCategories } from '@/services/categories';
import { getAllCities } from '@/services/cities';
import { getTopBrands } from '@/services/brands';
import { getArticles } from '@/services/articles';

import SearchBar from '@/components/search/SearchBar';
import PersonalizationSelector from '@/components/PersonalizationSelector';
import OfferGrid from '@/components/offers/OfferGrid';
import CityCard from '@/components/cities/CityCard';
import BrandCard from '@/components/brands/BrandCard';
import ArticleCard from '@/components/magazin/ArticleCard';
import AdSlot from '@/components/ads/AdSlot';
import TrustBanner from '@/components/TrustBanner';
import Newsletter from '@/components/Newsletter';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, GraduationCap, Gift, ChevronRight, TrendingUp, Star, Zap, ExternalLink } from 'lucide-react';
import { safeJsonLd } from '@/lib/utils';
import SafeImage from '@/components/ui/SafeImage';
import { getBrandLogo, getOfferCover } from '@/lib/brandAssets';
import { Offer } from '@/types';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  return { title: t('title'), description: t('description') };
}

function getOfferExternalUrl(offer: Offer): string {
  const raw = offer.affiliate_url || offer.external_url;
  if (raw && raw.startsWith("http")) return raw;
  if (offer.brand?.website_url && offer.brand.website_url.startsWith("http")) return offer.brand.website_url;
  return `https://www.google.com/search?q=${encodeURIComponent(
    (offer.brand?.name ? offer.brand.name + " " : "") + offer.title_de + " Schweiz Angebot"
  )}`;
}

// === HUB CARD - Premium visual card for offer hubs ===
function HubOfferRow({ offer, accentColor }: { offer: Offer; accentColor: string }) {
  const logo = getBrandLogo(offer.brand?.slug, offer.brand?.logo_url);
  const url = getOfferExternalUrl(offer);
  const discount = offer.discount_percent ? `−${offer.discount_percent}%` : offer.discount_amount ? `−CHF ${offer.discount_amount}` : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group flex items-center gap-3 bg-white/70 hover:bg-white rounded-2xl p-3 border border-white/80 hover:border-white hover:shadow-md transition-all duration-250 cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl bg-white border border-stone-100 shadow-sm flex items-center justify-center overflow-hidden shrink-0 relative p-1">
        {logo ? (
          <SafeImage
            src={logo}
            alt={offer.brand?.name ?? ""}
            fill
            sizes="44px"
            className="object-contain p-1"
            fallback={
              <span className="font-black text-[#2E4D28] text-base">
                {offer.brand?.name?.charAt(0)}
              </span>
            }
          />
        ) : (
          <span className="font-black text-[#2E4D28] text-base">
            {offer.brand?.name?.charAt(0)}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm text-stone-900 line-clamp-1 group-hover:text-[#2E4D28] transition-colors">
          {offer.title_de}
        </div>
        <div className="text-xs text-stone-500 truncate">{offer.brand?.name}</div>
      </div>
      {discount ? (
        <div className={`text-xs font-black px-2 py-1 rounded-lg shrink-0 ${accentColor}`}>
          {discount}
        </div>
      ) : (
        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#2E4D28] group-hover:translate-x-0.5 transition-all shrink-0" />
      )}
    </a>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const [
    vorteilDerWoche,
    topOffers, 
    newOffers, 
    expiringOffers, 
    studentOffers, 
    under25Offers,
    ,
    freeOffers,
    , 
    categories, 
    cities, 
    brands, 
    articles
  ] = await Promise.all([
    getVorteilDerWoche(),
    getVerifiedTopOffers(6),
    getVerifiedNewOffers(8),
    getVerifiedExpiringOffers(8),
    getVerifiedStudentOffers(8),
    getVerifiedUnderAgeOffers(25, 8),
    getVerifiedUnderAgeOffers(30, 8),
    getVerifiedFreeOffers(8),
    getDemoOffers(20),
    getAllCategories(),
    getAllCities(),
    getTopBrands(12),
    getArticles(3)
  ]);

  const seenIds = new Set<string>();
  if (vorteilDerWoche) seenIds.add(vorteilDerWoche.id);

  const mainOffers = topOffers.filter(o => !seenIds.has(o.id));
  mainOffers.forEach(o => seenIds.add(o.id));

  const filteredNewOffers = newOffers.filter(o => !seenIds.has(o.id));
  filteredNewOffers.forEach(o => seenIds.add(o.id));

  const filteredStudentOffers = studentOffers.filter(o => !seenIds.has(o.id));
  filteredStudentOffers.forEach(o => seenIds.add(o.id));

  const filteredUnder25Offers = under25Offers.filter(o => !seenIds.has(o.id));
  filteredUnder25Offers.forEach(o => seenIds.add(o.id));

  const filteredFreeOffers = freeOffers.filter(o => !seenIds.has(o.id));
  filteredFreeOffers.forEach(o => seenIds.add(o.id));

  const filteredExpiringOffers = expiringOffers.filter(o => !seenIds.has(o.id));

  const schema = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "Organization"],
    "name": "JungVorteil",
    "url": "https://jungvorteil.ch",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jungvorteil.ch/de/suche?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />

      {/* ================================================================
          HERO SECTION — Cinematic Dark Green
      ================================================================ */}
      <section className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0A1C09 0%, #152B13 30%, #1E3D1B 55%, #0D1F0C 100%)",
          paddingTop: "7rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Animated gradient orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #86efac 0%, transparent 70%)", filter: "blur(100px)" }}
        />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)", filter: "blur(80px)" }}
        />

        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 pointer-events-none hero-dots opacity-40" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,0.15)"
            }}
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-semibold text-emerald-100 tracking-wide">Die Plattform für junge Schweizer</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </div>

          {/* Main headline */}
          <h1 className="font-black mb-6 tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontFamily: "'Outfit', sans-serif" }}>
            Entdecke alle deine<br />
            <span style={{
              background: "linear-gradient(90deg, #86efac, #4ade80, #bbf7d0, #86efac)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 3s linear infinite"
            }}>
              Vorteile in der Schweiz.
            </span>
          </h1>

          <p className="text-emerald-100/80 font-medium mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", lineHeight: 1.6 }}>
            Hunderte geprüfte Rabatte, kostenlose Angebote und Studenten-Deals — täglich aktualisiert.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="rounded-2xl p-2 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.98)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <SearchBar placeholder="Nach Marken oder Kategorien suchen..." onNavigate={true} locale={locale} />
            </div>
          </div>

          {/* Quick tags */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            <span className="text-sm font-medium text-emerald-300/80">Oft gesucht:</span>
            {['SBB', 'Sunrise', 'Kino', 'Fitness', 'Apple', 'Spotify'].map(tag => (
              <Link key={tag} href={`/${locale}/suche?q=${tag}`}
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)"
                }}
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { value: "500+", label: "Angebote" },
              { value: "100%", label: "Geprüft" },
              { value: "Gratis", label: "Nutzung" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-black text-2xl text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-emerald-300/70 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <TrustBanner />

      {/* Ad slot */}
      <div className="hidden md:block"><AdSlot slot="AD_AFTER_HERO" /></div>
      <div className="block md:hidden"><AdSlot slot="AD_MOBILE_AFTER_HERO" /></div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-20">

        {/* Personalization */}
        <section>
          <PersonalizationSelector />
        </section>

        {/* ================================================================
            VORTEIL DER WOCHE — Cinematic Feature Card
        ================================================================ */}
        {vorteilDerWoche && (() => {
          const vdwUrl = getOfferExternalUrl(vorteilDerWoche);
          const vdwCover = getOfferCover(vorteilDerWoche.slug, vorteilDerWoche.image_url);
          return (
            <section>
              <a
                href={vdwUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group block relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #0D1F0B 0%, #1A3C17 40%, #264F22 70%, #0D1F0B 100%)",
                  boxShadow: "0 24px 80px rgba(46,77,40,0.35), 0 8px 32px rgba(0,0,0,0.15)"
                }}
              >
                {/* Glow orb */}
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-30"
                  style={{ background: "radial-gradient(circle, #4ade80, transparent 70%)", filter: "blur(60px)" }}
                />

                <div className="flex flex-col md:flex-row items-stretch min-h-[300px]">
                  {/* Content side */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 text-xs font-black px-3 py-1.5 rounded-full mb-5 self-start tracking-widest uppercase">
                      <Star className="w-3.5 h-3.5 fill-emerald-300" />
                      Vorteil der Woche
                    </div>
                    <h2 className="font-black text-white mb-3 leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontFamily: "'Outfit', sans-serif" }}>
                      {vorteilDerWoche.title_de}
                    </h2>
                    {(vorteilDerWoche.description_de || vorteilDerWoche.brand?.name) && (
                      <p className="text-emerald-100/70 text-base mb-6 max-w-md">
                        {vorteilDerWoche.description_de || `Exklusives Angebot von ${vorteilDerWoche.brand?.name}`}
                      </p>
                    )}
                    <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm self-start transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                      style={{ background: "linear-gradient(135deg, #4ade80, #16a34a)", color: "#0a1c09", boxShadow: "0 6px 20px rgba(74,222,128,0.4)" }}>
                      Jetzt Angebot sichern
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="w-full md:w-2/5 min-h-[220px] relative overflow-hidden">
                    {vdwCover ? (
                      <SafeImage
                        src={vdwCover}
                        alt={vorteilDerWoche.title_de || ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        fallback={
                          <div className="w-full h-full flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #1a3c17, #264f22)" }}>
                            <span className="text-white/20 text-9xl font-black">
                              {vorteilDerWoche.brand?.name?.charAt(0)}
                            </span>
                          </div>
                        }
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #1a3c17, #264f22)" }}>
                        <span className="text-white/20 text-9xl font-black">
                          {vorteilDerWoche.brand?.name?.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 md:bg-gradient-to-r from-[#0D1F0B]/80 via-transparent to-transparent" />
                  </div>
                </div>
              </a>
            </section>
          );
        })()}

        {/* ================================================================
            BELIEBTESTE VORTEILE
        ================================================================ */}
        {mainOffers.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#2E4D28]" />
                  <span className="text-xs font-black text-[#2E4D28] uppercase tracking-widest">Diese Woche</span>
                </div>
                <h2 className="text-3xl font-black text-stone-900" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                  Beliebteste Vorteile
                </h2>
                <p className="text-stone-500 mt-1">Die meistgenutzten Angebote — täglich geprüft</p>
              </div>
              <Link href={`/${locale}/angebote`} className="hidden md:flex items-center gap-1.5 text-[#2E4D28] font-bold hover:gap-3 transition-all duration-200 text-sm">
                Alle ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <OfferGrid offers={mainOffers} locale={locale} />
            <div className="mt-6 text-center md:hidden">
              <Link href={`/${locale}/angebote`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2E4D28] text-white font-bold rounded-2xl w-full text-sm">
                Alle Angebote ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

        {/* ================================================================
            CATEGORIES GRID — Visual pills
        ================================================================ */}
        <section className="rounded-3xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #f0f7ef 0%, #e4ede1 100%)", border: "1px solid #d8e3d5" }}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-stone-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                Nach Kategorien stöbern
              </h2>
              <p className="text-stone-500">Finde genau das, was du suchst</p>
            </div>
            <Link href={`/${locale}/kategorien`} className="hidden md:flex items-center gap-1.5 text-[#2E4D28] font-bold hover:gap-3 transition-all text-sm">
              Alle <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categories.slice(0, 15).map((cat, i) => (
              <Link
                key={cat.id}
                href={`/${locale}/angebote?category=${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-stone-200/80 hover:border-[#7CB87A]/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="text-3xl transform group-hover:scale-125 transition-transform duration-300">
                  {cat.icon?.startsWith('fas ') || cat.icon?.startsWith('fab ') || cat.icon?.startsWith('far ') ? (
                    <i className={cat.icon} />
                  ) : (
                    cat.icon || '🎁'
                  )}
                </div>
                <div className="text-sm font-bold text-stone-800 text-center group-hover:text-[#2E4D28] transition-colors leading-tight">
                  {cat.name_de}
                </div>
                {cat.offer_count !== undefined && cat.offer_count > 0 && (
                  <div className="text-[10px] text-[#2E4D28] font-black bg-[#e4ede1] px-2.5 py-0.5 rounded-full">
                    {cat.offer_count}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot="AD_BETWEEN_OFFERS_1" />

        {/* ================================================================
            NEUE ANGEBOTE
        ================================================================ */}
        {filteredNewOffers.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-black text-amber-600 uppercase tracking-widest">Frisch hinzugefügt</span>
                </div>
                <h2 className="text-3xl font-black text-stone-900" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                  Neu auf JungVorteil
                </h2>
                <p className="text-stone-500 mt-1">Täglich neue Angebote — frisch geprüft</p>
              </div>
            </div>
            <OfferGrid offers={filteredNewOffers} locale={locale} />
          </section>
        )}

        {/* ================================================================
            DREI HUBS: Student | U25 | Free — Premium visual layout
        ================================================================ */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* === STUDIERENDE HUB === */}
          {filteredStudentOffers.length > 0 && (
            <div className="rounded-3xl overflow-hidden border border-violet-200/60 flex flex-col"
              style={{ background: "linear-gradient(145deg, #f5f3ff 0%, #ede9fe 50%, #f5f3ff 100%)" }}>
              {/* Hub Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #8b5cf6)", boxShadow: "0 6px 16px rgba(124,58,237,0.4)" }}>
                    🎓
                  </div>
                  <div>
                    <h3 className="font-black text-violet-900 text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Für Studierende
                    </h3>
                    <p className="text-xs text-violet-600 font-medium">{filteredStudentOffers.length} Angebote</p>
                  </div>
                </div>
              </div>
              {/* Offer list */}
              <div className="px-4 pb-4 space-y-2 flex-1">
                {filteredStudentOffers.slice(0, 6).map(offer => (
                  <HubOfferRow key={offer.id} offer={offer} accentColor="bg-violet-100 text-violet-700" />
                ))}
              </div>
              {/* Footer CTA */}
              <div className="p-4 pt-2">
                <Link href={`/${locale}/studentenrabatte`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-violet-700 bg-violet-100 hover:bg-violet-200 transition-colors">
                  Alle Studentenrabatte <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* === UNTER 25 HUB === */}
          {filteredUnder25Offers.length > 0 && (
            <div className="rounded-3xl overflow-hidden border border-sky-200/60 flex flex-col"
              style={{ background: "linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%)" }}>
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-lg"
                    style={{ background: "linear-gradient(135deg, #0284c7, #0ea5e9)", boxShadow: "0 6px 16px rgba(2,132,199,0.4)" }}>
                    &lt;25
                  </div>
                  <div>
                    <h3 className="font-black text-sky-900 text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Unter 25 Jahre
                    </h3>
                    <p className="text-xs text-sky-600 font-medium">{filteredUnder25Offers.length} Angebote</p>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4 space-y-2 flex-1">
                {filteredUnder25Offers.slice(0, 6).map(offer => (
                  <HubOfferRow key={offer.id} offer={offer} accentColor="bg-sky-100 text-sky-700" />
                ))}
              </div>
              <div className="p-4 pt-2">
                <Link href={`/${locale}/unter-25`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-sky-700 bg-sky-100 hover:bg-sky-200 transition-colors">
                  Alle U25 Angebote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* === GRATIS HUB === */}
          {filteredFreeOffers.length > 0 && (
            <div className="rounded-3xl overflow-hidden border border-emerald-200/60 flex flex-col"
              style={{ background: "linear-gradient(145deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)" }}>
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shadow-lg"
                    style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 6px 16px rgba(22,163,74,0.4)" }}>
                    🎁
                  </div>
                  <div>
                    <h3 className="font-black text-emerald-900 text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Kostenlos
                    </h3>
                    <p className="text-xs text-emerald-600 font-medium">{filteredFreeOffers.length} Angebote</p>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4 space-y-2 flex-1">
                {filteredFreeOffers.slice(0, 6).map(offer => (
                  <HubOfferRow key={offer.id} offer={offer} accentColor="bg-emerald-100 text-emerald-700" />
                ))}
              </div>
              <div className="p-4 pt-2">
                <Link href={`/${locale}/gratis`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-sm text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-colors">
                  Alle Gratis-Angebote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ================================================================
            BRANDS
        ================================================================ */}
        {brands.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-stone-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                  Beliebte Unternehmen
                </h2>
                <p className="text-stone-500">Wer bietet die besten Konditionen?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map(brand => (
                <BrandCard key={brand.id} brand={brand} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* ================================================================
            EXPIRING SOON — Urgency Banner
        ================================================================ */}
        {filteredExpiringOffers.length > 0 && (
          <section className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #431407 0%, #7c2d12 40%, #9a3412 70%, #431407 100%)",
              boxShadow: "0 20px 60px rgba(124,45,18,0.3)"
            }}
          >
            {/* Glow orb */}
            <div className="absolute -top-20 right-10 w-64 h-64 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, #fb923c, transparent 70%)", filter: "blur(50px)" }}
            />
            <div className="flex items-end justify-between mb-10 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-400/20 border border-orange-400/30 text-orange-300 text-xs font-black px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  Letzte Chance
                </div>
                <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                  Bald ablaufend
                </h2>
                <p className="text-orange-200/70">Diese Angebote sind nur noch für kurze Zeit gültig.</p>
              </div>
            </div>
            <OfferGrid offers={filteredExpiringOffers} locale={locale} />
          </section>
        )}

        {/* ================================================================
            CITIES
        ================================================================ */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-stone-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                Lokale Vorteile entdecken
              </h2>
              <p className="text-stone-500">Angebote direkt in deiner Stadt</p>
            </div>
            <Link href={`/${locale}/staedte`} className="hidden md:flex items-center gap-1.5 text-[#2E4D28] font-bold hover:gap-3 transition-all text-sm">
              Alle Städte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.slice(0, 10).map(city => (
              <CityCard key={city.id} city={city} locale={locale} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section>
          <Newsletter />
        </section>

        <AdSlot slot="AD_BEFORE_FOOTER" />

        {/* ================================================================
            MAGAZIN — Editorial cards
        ================================================================ */}
        {articles.length > 0 && (
          <section className="border-t border-stone-100 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-stone-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em" }}>
                  Magazin &amp; Ratgeber
                </h2>
                <p className="text-stone-500">Tipps, Tricks und Wissen rund ums Sparen.</p>
              </div>
              <Link href={`/${locale}/magazin`} className="hidden md:flex items-center gap-1.5 text-[#2E4D28] font-bold hover:gap-3 transition-all text-sm">
                Alle Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} locale={locale} />
              ))}
            </div>
            <div className="mt-6 text-center md:hidden">
              <Link href={`/${locale}/magazin`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2E4D28] text-white font-bold rounded-2xl w-full text-sm">
                Alle Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
