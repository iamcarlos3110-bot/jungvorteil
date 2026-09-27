import { getBrandBySlug, getOffersByBrand } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { safeJsonLd } from '@/lib/utils';
import SafeImage from '@/components/ui/SafeImage';
import Link from 'next/link';
import { ExternalLink, ChevronRight, Building2, CheckCircle2 } from 'lucide-react';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale?: string }> }) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  
  if (!brand) return { title: 'Marke nicht gefunden | JungVorteil' };
  
  return {
    title: `${brand.name} Rabatt & Angebote Schweiz (2026) | JungVorteil`,
    description: brand.description_de || `Finde alle aktuellen Rabatte, Gutscheine und Sonderkonditionen von ${brand.name} für Jugendliche und Studierende in der Schweiz.`
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string; locale?: string }> }) {
  const { slug, locale = "de" } = await params;
  const brand = await getBrandBySlug(slug);
  
  if (!brand) {
    notFound();
  }

  const offers = await getOffersByBrand(slug);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brand.name,
    "url": brand.website_url || "https://jungvorteil.ch",
    ...(brand.logo_url && { "logo": brand.logo_url })
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jungvorteil.ch" },
      { "@type": "ListItem", "position": 2, "name": "Unternehmen", "item": `https://jungvorteil.ch/${locale}/marken` },
      { "@type": "ListItem", "position": 3, "name": brand.name, "item": `https://jungvorteil.ch/${locale}/marken/${brand.slug}` }
    ]
  };

  return (
    <>
      <Script id="schema-brand-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
      <Script id="schema-brand-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      <div className="bg-[#F8FAF6] min-h-screen pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-emerald-200 mb-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-emerald-400" />
              <Link href={`/${locale}/marken`} className="hover:text-white transition-colors">Unternehmen</Link>
              <ChevronRight className="w-3 h-3 text-emerald-400" />
              <span className="text-white font-semibold">{brand.name}</span>
            </nav>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl p-3 flex-shrink-0 flex items-center justify-center border border-white/20 shadow-md relative overflow-hidden">
                {brand.logo_url ? (
                  <SafeImage src={brand.logo_url} alt={brand.name} fill sizes="112px" className="object-contain p-2" />
                ) : (
                  <Building2 className="w-10 h-10 text-[#2E4D28]" />
                )}
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" /> Verifizierter Schweizer Partner
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white">{brand.name} Rabatte &amp; Vorteile</h1>
                {brand.description_de && (
                  <p className="text-gray-200 text-sm sm:text-base max-w-2xl leading-relaxed">{brand.description_de}</p>
                )}
                {brand.website_url && (
                  <a
                    href={brand.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-bold hover:underline pt-1"
                  >
                    Offizielle Website besuchen <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Aktuelle Angebote von {brand.name}
            </h2>
            <span className="text-xs text-stone-500 font-medium">
              {offers.length} {offers.length === 1 ? 'Angebot' : 'Angebote'} gefunden
            </span>
          </div>

          <OfferGrid offers={offers} locale={locale} />
        </div>
      </div>
    </>
  );
}

