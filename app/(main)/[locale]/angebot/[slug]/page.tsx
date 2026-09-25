import { getOfferBySlug, getSimilarOffers } from "@/lib/api/offers";
import SafeImage from "@/components/ui/SafeImage";
import { notFound } from "next/navigation";
import AdSlot from "@/components/ads/AdSlot";
import OfferGrid from "@/components/offers/OfferGrid";
import OfferCtaLink from "@/components/offers/OfferCtaLink";
import Script from "next/script";
import { incrementOfferView } from "@/lib/actions/offers";
import { formatDate, isExpired, getSavingDisplay, formatCHF, safeJsonLd } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, MapPin, GraduationCap, Globe, CheckCircle, Clock } from "lucide-react";
import { getBrandLogo, getOfferCover } from "@/lib/brandAssets";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const offer = await getOfferBySlug(slug);

  if (!offer) return { title: "Angebot nicht gefunden | JungVorteil" };

  const brandName = offer.brand?.name ?? "JungVorteil";
  return {
    title: `${brandName} – ${offer.title_de} | JungVorteil`,
    description: offer.description_de?.substring(0, 160) ?? `${brandName} Rabatt und Vorteile auf JungVorteil`,
    openGraph: {
      title: `${brandName} – ${offer.title_de}`,
      description: offer.description_de?.substring(0, 160) ?? "",
      images: offer.image_url ? [offer.image_url] : [],
    },
  };
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const offer = await getOfferBySlug(slug);

  if (!offer) notFound();

  // Fire and forget view increment
  incrementOfferView(offer.id);

  const expired = isExpired(offer.end_date);
  const similarOffers = await getSimilarOffers(offer.id, 4);
  const saving = getSavingDisplay(offer.discount_percent, offer.discount_amount, offer.normal_price, offer.young_price);
  const rawUrl = offer.affiliate_url || offer.external_url;
  const isValidUrl = rawUrl && rawUrl.startsWith("http");
  const externalUrl = isValidUrl
    ? rawUrl
    : offer.brand?.website_url && offer.brand.website_url.startsWith("http")
    ? offer.brand.website_url
    : `https://www.google.com/search?q=${encodeURIComponent(
        (offer.brand?.name ? offer.brand.name + " " : "") + offer.title_de + " Schweiz Angebot"
      )}`;

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": offer.title_de,
    "description": offer.description_de ?? "",
    "priceCurrency": "CHF",
    ...(offer.young_price && { "price": offer.young_price }),
    "availability": expired ? "https://schema.org/Discontinued" : "https://schema.org/InStock",
    ...(offer.end_date && { "priceValidUntil": offer.end_date }),
    "seller": {
      "@type": "Organization",
      "name": offer.brand?.name ?? "JungVorteil",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "JungVorteil", "item": "https://jungvorteil.ch/de" },
      { "@type": "ListItem", "position": 2, "name": offer.category?.name_de ?? "Angebote", "item": `https://jungvorteil.ch/de/rabatte/${offer.category?.slug ?? ""}` },
      { "@type": "ListItem", "position": 3, "name": offer.title_de },
    ],
  };

  return (
    <>
      <Script id="schema-offer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(offerSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link href={`/${locale}`} className="hover:text-[#3F5E39]">JungVorteil</Link>
          <span>/</span>
          {offer.category && (
            <>
              <Link href={`/${locale}/rabatte/${offer.category.slug}`} className="hover:text-[#3F5E39]">{offer.category.name_de}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900 truncate max-w-xs">{offer.title_de}</span>
        </div>
      </div>

      {/* DEMO warning */}
      {offer.is_demo && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 py-2 text-amber-800 text-sm font-medium text-center">
            ⚠️ DEMO – Beispielangebot. Dieses Angebot ist nicht real.
          </div>
        </div>
      )}

      {/* Expired warning */}
      {expired && (
        <div className="bg-red-50 border-b border-red-200">
          <div className="max-w-7xl mx-auto px-4 py-2 text-red-800 text-sm text-center">
            Dieses Angebot ist möglicherweise abgelaufen.
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {getOfferCover(offer.slug, offer.image_url) && (
                <div className="w-full h-56 bg-gray-100 relative overflow-hidden">
                  <SafeImage
                    src={getOfferCover(offer.slug, offer.image_url)!}
                    alt={offer.title_de}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative">
                  {getBrandLogo(offer.brand?.slug, offer.logo_url || offer.brand?.logo_url) ? (
                    <SafeImage
                      src={getBrandLogo(offer.brand?.slug, offer.logo_url || offer.brand?.logo_url)!}
                      alt={offer.brand?.name ?? ""}
                      fill
                      sizes="64px"
                      className="w-full h-full object-contain p-1"
                      fallback={
                        <span className="font-black text-2xl text-[#3F5E39] uppercase">
                          {(offer.brand?.name ?? offer.title_de).charAt(0)}
                        </span>
                      }
                    />
                  ) : (
                    <span className="font-black text-2xl text-[#3F5E39] uppercase">
                      {(offer.brand?.name ?? offer.title_de).charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  {offer.brand?.name && <p className="text-sm text-gray-500 font-medium mb-1">{offer.brand.name}</p>}
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">{offer.title_de}</h1>
                </div>
              </div>

              {/* Saving */}
              {saving && (
                <div className="mb-5">
                  <span className="text-3xl font-bold text-green-600">{saving}</span>
                </div>
              )}

              {/* Prices */}
              {(offer.normal_price || offer.young_price) && (
                <div className="flex items-center gap-4 mb-5">
                  {offer.normal_price && (
                    <span className="text-gray-400 line-through text-lg">{formatCHF(offer.normal_price)}</span>
                  )}
                  {offer.young_price && (
                    <span className="text-2xl font-bold text-gray-900">{formatCHF(offer.young_price)}</span>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                {offer.is_nationwide && (
                  <span className="flex items-center gap-1.5 text-green-700">
                    <Globe className="w-4 h-4" /> Schweizweit
                  </span>
                )}
                {offer.city && (
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <MapPin className="w-4 h-4" /> {offer.city.name_de}
                  </span>
                )}
                {offer.student_required && (
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <GraduationCap className="w-4 h-4" /> Für Studierende
                  </span>
                )}
                {(offer.age_min || offer.age_max) && (
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <Clock className="w-4 h-4" />
                    {offer.age_min && offer.age_max ? `${offer.age_min}–${offer.age_max} Jahre` :
                     offer.age_max ? `Bis ${offer.age_max} Jahre` :
                     `Ab ${offer.age_min} Jahren`}
                  </span>
                )}
                {offer.checked_at && (
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Geprüft am {formatDate(offer.checked_at)}
                  </span>
                )}
              </div>

              {/* Discount code */}
              {offer.discount_code && (
                <div className="bg-[#EAF0E5] border border-[#D6E2CE] rounded-xl p-4 mb-6">
                  <p className="text-xs text-[#3F5E39] font-semibold mb-1">RABATTCODE</p>
                  <p className="font-mono text-lg font-bold text-[#253D22]">{offer.discount_code}</p>
                </div>
              )}

              {/* CTA */}
              <OfferCtaLink
                offerId={offer.id}
                url={externalUrl}
                className="flex items-center justify-center gap-2 w-full bg-[#3F5E39] hover:bg-[#324B2D] text-white font-bold py-4 rounded-2xl text-lg transition-colors shadow-sm"
                id={`offer-cta-${offer.id}`}
              >
                Angebot ansehen <ExternalLink className="w-5 h-5" />
              </OfferCtaLink>

              {offer.end_date && !expired && (
                <p className="text-center text-xs text-gray-400 mt-3">
                  Gültig bis {formatDate(offer.end_date)}
                </p>
              )}
              {offer.is_sponsored && (
                <p className="text-center text-xs text-gray-400 mt-2">Gesponsert</p>
              )}
              </div>
            </div>

            {/* Description */}
            {offer.description_de && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold mb-3">Beschreibung</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{offer.description_de}</p>
              </div>
            )}

            {/* How to get */}
            {offer.how_to_get_de && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-bold mb-3">So bekommst du diesen Vorteil</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{offer.how_to_get_de}</p>
              </div>
            )}

            {/* Conditions */}
            {offer.conditions_de && (
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold mb-3">Das solltest du wissen</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{offer.conditions_de}</p>
              </div>
            )}

            <AdSlot slot="AD_BETWEEN_OFFERS_1" />

            {/* Similar offers */}
            {similarOffers.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-5">Ähnliche Vorteile</h2>
                <OfferGrid offers={similarOffers} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Summary card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Zusammenfassung</h3>
              <div className="space-y-3 text-sm">
                {offer.brand?.name && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Anbieter</span>
                    <span className="font-medium">{offer.brand.name}</span>
                  </div>
                )}
                {saving && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ersparnis</span>
                    <span className="font-bold text-green-600">{saving}</span>
                  </div>
                )}
                {offer.age_max && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Alter</span>
                    <span className="font-medium">Bis {offer.age_max} Jahre</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Studierende</span>
                  <span className="font-medium">{offer.student_required ? "Ja" : "Nein"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Verfügbar</span>
                  <span className="font-medium">{offer.is_nationwide ? "Schweizweit" : offer.city?.name_de ?? "Lokal"}</span>
                </div>
                {offer.end_date && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gültig bis</span>
                    <span className={`font-medium ${expired ? "text-red-500" : ""}`}>{formatDate(offer.end_date)}</span>
                  </div>
                )}
              </div>
              <OfferCtaLink
                offerId={offer.id}
                url={externalUrl}
                className="mt-5 flex items-center justify-center gap-2 w-full bg-[#3F5E39] hover:bg-[#324B2D] text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Angebot ansehen <ExternalLink className="w-4 h-4" />
              </OfferCtaLink>
            </div>

            <AdSlot slot="AD_SIDEBAR_TOP" />
          </aside>
        </div>
      </div>
    </>
  );
}
