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
import { ArrowRight, Sparkles } from 'lucide-react';
import { safeJsonLd } from '@/lib/utils';
import SafeImage from '@/components/ui/SafeImage';
import { getBrandLogo, getOfferCover } from '@/lib/brandAssets';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Fetch everything in parallel
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
    getVerifiedTopOffers(12),
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

  // We strictly use topOffers for the main section, no fallback to demo.
  const mainOffers = topOffers;

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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white pt-24 lg:pt-28 pb-20 px-4 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span className="text-sm font-medium text-emerald-50">Die Plattform für junge Schweizer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Entdecke alle deine <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-lime-200 to-green-100">
              Vorteile in der Schweiz.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-10 text-emerald-100 max-w-3xl mx-auto font-medium">
            Finde hunderte geprüfte Rabatte, kostenlose Angebote und Studenten-Deals an einem Ort.
          </p>
          
          <div className="max-w-2xl mx-auto mb-10">
            {/* Server component wrapping the client search bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl border border-white/20">
              <SearchBar placeholder="Nach Marken oder Kategorien suchen..." onNavigate={true} locale={locale} />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm font-medium text-emerald-200 py-1.5 mr-2">Oft gesucht:</span>
            {['SBB', 'Sunrise', 'Kino', 'Fitness', 'Apple', 'Spotify'].map(tag => (
              <Link key={tag} href={`/${locale}/suche?q=${tag}`} className="px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm transition-all cursor-pointer text-white">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Guarantee Banner */}
      <TrustBanner />

      {/* Ad slot after hero */}
      <div className="hidden md:block">
        <AdSlot slot="AD_AFTER_HERO" />
      </div>
      <div className="block md:hidden">
        <AdSlot slot="AD_MOBILE_AFTER_HERO" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        
        {/* Quick Filter Personalization */}
        <section>
          <PersonalizationSelector />
        </section>

        {/* Vorteil der Woche */}
        {vorteilDerWoche && (
          <section className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-3xl p-8 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full text-sm mb-4">
                   <Sparkles className="w-4 h-4" /> Vorteil der Woche
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">{vorteilDerWoche.title_de}</h2>
                <p className="text-gray-600 mb-6 text-lg">{vorteilDerWoche.description_de || vorteilDerWoche.brand?.name}</p>
                <Link href={`/${locale}/angebot/${vorteilDerWoche.slug}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3F5E39] text-white font-semibold rounded-xl hover:bg-[#324B2D] transition-colors">
                  Angebot sichern <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
             <div className="w-full md:w-1/3 flex-shrink-0">
                {getOfferCover(vorteilDerWoche.slug, vorteilDerWoche.image_url) ? (
                   <SafeImage src={getOfferCover(vorteilDerWoche.slug, vorteilDerWoche.image_url)!} alt={vorteilDerWoche.title_de || ""} width={600} height={400} className="w-full h-auto rounded-2xl shadow-lg border border-emerald-100/50 bg-white object-cover" />
                ) : (
                   <div className="w-full aspect-video bg-emerald-100 rounded-2xl shadow-inner flex items-center justify-center">
                      <span className="text-emerald-700 font-bold text-xl">{vorteilDerWoche.brand?.name}</span>
                   </div>
                )}
             </div>
          </section>
        )}

        {/* Top Offers Section */}
        {mainOffers.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Beliebteste Vorteile</h2>
                <p className="text-gray-500">Die meistgenutzten Angebote der Woche</p>
              </div>
              <Link href={`/${locale}/angebote`} className="hidden md:flex items-center gap-1 text-[#3F5E39] font-semibold hover:text-[#284024] transition-colors">
                Alle ansehen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <OfferGrid offers={mainOffers} locale={locale} />
            <div className="mt-8 text-center md:hidden">
               <Link href={`/${locale}/angebote`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EAF0E5] text-[#3F5E39] font-semibold rounded-xl hover:bg-[#D6E2CE] transition-colors w-full">
                Alle ansehen
              </Link>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="bg-gray-50 -mx-4 px-4 py-16 md:rounded-3xl md:mx-0 md:px-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Nach Kategorien stöbern</h2>
              <p className="text-gray-500">Finde genau das, was du suchst</p>
            </div>
            <Link href={`/${locale}/kategorien`} className="hidden md:flex items-center gap-1 text-[#3F5E39] font-semibold hover:text-[#284024] transition-colors">
              Alle Kategorien <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.slice(0, 15).map(cat => (
              <Link key={cat.id} href={`/${locale}/angebote?category=${cat.slug}`} className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-[#3F5E39]/30 transition-all group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {cat.icon?.startsWith('fas ') || cat.icon?.startsWith('fab ') || cat.icon?.startsWith('far ') ? (
                    <i className={cat.icon}></i>
                  ) : (
                    cat.icon
                  )}
                </div>
                <div className="text-base font-bold text-gray-900 text-center">{cat.name_de}</div>
                {cat.offer_count !== undefined && cat.offer_count > 0 && (
                  <div className="text-xs text-[#3F5E39] font-semibold mt-2 bg-[#EAF0E5] px-2 py-1 rounded-full">
                    {cat.offer_count} Angebote
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot="AD_BETWEEN_OFFERS_1" />

        {/* New Offers Section */}
        {newOffers.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Neu auf JungVorteil</h2>
                <p className="text-gray-500">Frisch hinzugefügt und geprüft</p>
              </div>
            </div>
            <OfferGrid offers={newOffers} locale={locale} />
          </section>
        )}

        {/* Specific Hubs: Student, Under 25, Free */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Student Hub */}
          {studentOffers.length > 0 && (
            <div className="bg-blue-50 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-blue-900">Für Studierende</h3>
              </div>
              <div className="space-y-4 mb-6">
                {studentOffers.map(offer => {
                  const logo = getBrandLogo(offer.brand?.slug, offer.brand?.logo_url);
                  return (
                    <Link key={offer.id} href={`/${locale}/angebot/${offer.slug}`} className="flex items-center gap-4 bg-white p-3 rounded-xl hover:shadow-sm transition-shadow">
                       <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 relative p-1">
                          {logo ? (
                             <SafeImage src={logo} alt={offer.brand?.name ?? ""} fill sizes="48px" className="w-full h-full object-contain p-1" fallback={<span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>} />
                          ) : (
                             <span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>
                          )}
                       </div>
                       <div>
                         <div className="font-bold text-sm text-gray-900 line-clamp-1">{offer.title_de}</div>
                         <div className="text-xs text-green-600 font-bold">{offer.discount_percent ? `${offer.discount_percent}% Rabatt` : 'Angebot ansehen'}</div>
                       </div>
                    </Link>
                  );
                })}
              </div>
              <Link href={`/${locale}/studentenrabatte`} className="block text-center text-sm font-bold text-blue-700 hover:text-blue-800">
                Alle Studentenrabatte &rarr;
              </Link>
            </div>
          )}

          {/* Under 25 Hub */}
          {under25Offers.length > 0 && (
            <div className="bg-teal-50 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-600 text-white p-2 rounded-lg font-bold">
                  &lt;25
                </div>
                <h3 className="text-xl font-bold text-teal-900">Unter 25 Jahre</h3>
              </div>
              <div className="space-y-4 mb-6">
                {under25Offers.map(offer => {
                  const logo = getBrandLogo(offer.brand?.slug, offer.brand?.logo_url);
                  return (
                    <Link key={offer.id} href={`/${locale}/angebot/${offer.slug}`} className="flex items-center gap-4 bg-white p-3 rounded-xl hover:shadow-sm transition-shadow">
                       <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 relative p-1">
                          {logo ? (
                             <SafeImage src={logo} alt={offer.brand?.name ?? ""} fill sizes="48px" className="w-full h-full object-contain p-1" fallback={<span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>} />
                          ) : (
                             <span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>
                          )}
                       </div>
                       <div>
                         <div className="font-bold text-sm text-gray-900 line-clamp-1">{offer.title_de}</div>
                         <div className="text-xs text-green-600 font-bold">{offer.discount_percent ? `${offer.discount_percent}% Rabatt` : 'Angebot ansehen'}</div>
                       </div>
                    </Link>
                  );
                })}
              </div>
              <Link href={`/${locale}/unter-25`} className="block text-center text-sm font-bold text-teal-700 hover:text-teal-800">
                Alle Unter 25 Angebote &rarr;
              </Link>
            </div>
          )}

          {/* Free Hub */}
          {freeOffers.length > 0 && (
            <div className="bg-green-50 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white p-2 rounded-lg">
                  🎁
                </div>
                <h3 className="text-xl font-bold text-green-900">Kostenlos</h3>
              </div>
              <div className="space-y-4 mb-6">
                {freeOffers.map(offer => {
                  const logo = getBrandLogo(offer.brand?.slug, offer.brand?.logo_url);
                  return (
                    <Link key={offer.id} href={`/${locale}/angebot/${offer.slug}`} className="flex items-center gap-4 bg-white p-3 rounded-xl hover:shadow-sm transition-shadow">
                       <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 relative p-1">
                          {logo ? (
                             <SafeImage src={logo} alt={offer.brand?.name ?? ""} fill sizes="48px" className="w-full h-full object-contain p-1" fallback={<span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>} />
                          ) : (
                             <span className="font-bold text-[#3F5E39]">{offer.brand?.name?.charAt(0)}</span>
                          )}
                       </div>
                       <div>
                         <div className="font-bold text-sm text-gray-900 line-clamp-1">{offer.title_de}</div>
                         <div className="text-xs text-green-600 font-bold">Gratis</div>
                       </div>
                    </Link>
                  );
                })}
              </div>
              <Link href={`/${locale}/gratis`} className="block text-center text-sm font-bold text-green-700 hover:text-green-800">
                Alle Gratis-Angebote &rarr;
              </Link>
            </div>
          )}
        </div>

        {/* Brands Section */}
        {brands.length > 0 && (
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Beliebte Unternehmen</h2>
                <p className="text-gray-500">Wer bietet die besten Konditionen?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map(brand => (
                <BrandCard key={brand.id} brand={brand} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Expiring Soon */}
        {expiringOffers.length > 0 && (
          <section className="bg-amber-50 -mx-4 px-4 py-16 md:rounded-3xl md:mx-0 md:px-12 border border-amber-100">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-block bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                  Letzte Chance
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Bald ablaufend</h2>
                <p className="text-gray-600">Diese Angebote sind nur noch für kurze Zeit gültig.</p>
              </div>
            </div>
            <OfferGrid offers={expiringOffers} locale={locale} />
          </section>
        )}

        {/* Cities */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Lokale Vorteile entdecken</h2>
              <p className="text-gray-500">Angebote direkt in deiner Stadt</p>
            </div>
            <Link href={`/${locale}/staedte`} className="hidden md:flex items-center gap-1 text-[#3F5E39] font-semibold hover:text-[#284024] transition-colors">
              Alle Städte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cities.slice(0, 10).map(city => (
              <CityCard key={city.id} city={city} locale={locale} />
            ))}
          </div>
        </section>
        
        {/* Deal Alert Newsletter */}
        <section>
          <Newsletter />
        </section>

        <AdSlot slot="AD_BEFORE_FOOTER" />

        {/* Articles / Magazin */}
        {articles.length > 0 && (
          <section className="border-t border-gray-100 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Magazin & Ratgeber</h2>
                <p className="text-gray-500">Tipps, Tricks und Wissen rund ums Sparen und Erwachsenwerden.</p>
              </div>
              <Link href={`/${locale}/magazin`} className="hidden md:flex items-center gap-1 text-[#3F5E39] font-semibold hover:text-[#284024] transition-colors">
                Alle Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} locale={locale} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
               <Link href={`/${locale}/magazin`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EAF0E5] text-[#3F5E39] font-semibold rounded-xl hover:bg-[#D6E2CE] transition-colors w-full">
                Alle Artikel
              </Link>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
