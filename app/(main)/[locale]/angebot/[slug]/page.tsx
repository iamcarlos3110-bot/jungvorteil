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
import { ExternalLink, MapPin, GraduationCap, Globe, CheckCircle, Clock, Tag, HelpCircle, ShieldCheck, UserCheck, DollarSign } from "lucide-react";
import { getBrandLogo, getOfferCover } from "@/lib/brandAssets";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const offer = await getOfferBySlug(slug);

  if (!offer) return { title: "Angebot nicht gefunden | JungVorteil" };

  const brandName = offer.brand?.name ?? "JungVorteil";
  const title = `${brandName} – ${offer.title_de} | JungVorteil`;
  const description = offer.description_de?.substring(0, 160) ?? `${brandName} Rabatt und Vorteile auf JungVorteil`;
  const url = `https://jungvorteil.ch/${locale}/angebot/${offer.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "JungVorteil",
      locale,
      type: "article",
      images: offer.image_url ? [{ url: offer.image_url }] : [],
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

  // Target audience text
  const targetAudienceText = offer.student_required
    ? `Dieses Angebot richtet sich speziell an Studierende und Auszubildende in der Schweiz${offer.age_max ? ` bis ${offer.age_max} Jahre` : ""}.`
    : offer.age_max
    ? `Dieses Angebot steht allen Jugendlichen und jungen Erwachsenen bis maximal ${offer.age_max} Jahre zur Verfügung.`
    : offer.age_min
    ? `Dieses Angebot ist für Jugendliche und junge Erwachsene ab ${offer.age_min} Jahren verfügbar.`
    : "Dieses Vorteil steht allen Jugendlichen, Studierenden und jungen Erwachsenen in der Schweiz offen.";

  // Dynamic FAQs for schema and display
  const faqs = [
    {
      question: `Wer kann das Angebot "${offer.title_de}" nutzen?`,
      answer: targetAudienceText,
    },
    {
      question: `Wie viel spare ich bei diesem Angebot?`,
      answer: saving
        ? `Mit diesem Vorteil sparst du ${saving}.${
            offer.normal_price && offer.young_price
              ? ` Der Normalpreis liegt bei ${formatCHF(offer.normal_price)}, während der reduzierte Jugendpreis nur ${formatCHF(offer.young_price)} beträgt.`
              : ""
          }`
        : `Der Vorteil bietet exklusive Konditionen bei ${offer.brand?.name ?? "dem Anbieter"}.`,
    },
    {
      question: `Wie erhalte ich den Rabatt bei ${offer.brand?.name ?? "dem Anbieter"}?`,
      answer: offer.how_to_get_de
        ? offer.how_to_get_de
        : `Klicke einfach auf den Button "Angebot ansehen", um direkt zur offiziellen Aktionsseite weitergeleitet zu werden${
            offer.discount_code ? ` und nutze den Gutscheincode "${offer.discount_code}"` : ""
          }.`,
    },
    {
      question: `Welche Bedingungen gelten für diesen Vorteil?`,
      answer: offer.conditions_de
        ? offer.conditions_de
        : `Gültig solange der Vorrat reicht. Es gelten die Allgemeinen Geschäftsbedingungen des Anbieters.`,
    },
  ];

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Script id="schema-offer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(offerSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs
            items={[
              ...(offer.category ? [{ label: offer.category.name_de, href: `/${locale}/rabatte/${offer.category.slug}` }] : []),
              { label: offer.title_de },
            ]}
            locale={locale}
          />
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
            {/* Header Card */}
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

                {/* Saving & Prices Box */}
                <div className="bg-[#F8FAF7] border border-[#E2EBDD] rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    {saving && (
                      <div className="text-2xl font-black text-green-700">{saving}</div>
                    )}
                    {(offer.normal_price || offer.young_price) && (
                      <div className="flex items-center gap-3 mt-1 text-sm">
                        {offer.normal_price && (
                          <span className="text-gray-500 line-through">Normalpreis: {formatCHF(offer.normal_price)}</span>
                        )}
                        {offer.young_price && (
                          <span className="font-bold text-gray-900">Jugendpreis: {formatCHF(offer.young_price)}</span>
                        )}
                      </div>
                    )}
                  </div>
                  {offer.discount_code && (
                    <div className="bg-white border border-[#D6E2CE] rounded-lg px-4 py-2 text-center">
                      <span className="text-[10px] uppercase font-bold text-[#3F5E39] block">Code</span>
                      <span className="font-mono text-base font-bold text-[#253D22]">{offer.discount_code}</span>
                    </div>
                  )}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-3 mb-6 text-sm">
                  {offer.is_nationwide && (
                    <span className="flex items-center gap-1.5 text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                      <Globe className="w-4 h-4" /> Schweizweit
                    </span>
                  )}
                  {offer.city && (
                    <span className="flex items-center gap-1.5 text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                      <MapPin className="w-4 h-4" /> {offer.city.name_de}
                    </span>
                  )}
                  {offer.student_required && (
                    <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      <GraduationCap className="w-4 h-4" /> Studentennachweis erforderlich
                    </span>
                  )}
                  {(offer.age_min || offer.age_max) && (
                    <span className="flex items-center gap-1.5 text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                      <Clock className="w-4 h-4" />
                      {offer.age_min && offer.age_max ? `${offer.age_min}–${offer.age_max} Jahre` :
                       offer.age_max ? `Bis ${offer.age_max} Jahre` :
                       `Ab ${offer.age_min} Jahren`}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium">
                    Veröffentlicht: {formatDate(offer.created_at)}
                  </span>
                  {offer.updated_at && (
                    <span className="flex items-center gap-1.5 text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md font-medium">
                      Aktualisiert am: {formatDate(offer.updated_at)}
                    </span>
                  )}
                  {offer.checked_at && (
                    <span className="flex items-center gap-1.5 text-emerald-900 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600" /> Zuletzt geprüft: {formatDate(offer.checked_at)}
                    </span>
                  )}
                </div>

                {/* Primary CTA */}
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

            {/* Structured Details Grid */}
            <div className="space-y-6">

              {/* 1. Was ist die Angebot (Description) */}
              {offer.description_de && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                    <Tag className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-gray-900">Was ist das Angebot?</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{offer.description_de}</p>
                </div>
              )}

              {/* 2. Was ist im Vorteil enthalten? (Qué incluye) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                  <CheckCircle className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">Was ist im Vorteil enthalten?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-emerald-950">Exklusiver Jugend- Sonderpreis</span>
                  </div>
                  {saving && (
                    <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-emerald-950">Ersparnis: {saving}</span>
                    </div>
                  )}
                  {offer.is_nationwide && (
                    <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-emerald-950">Gültig in der gesamten Schweiz</span>
                    </div>
                  )}
                  {offer.is_online && (
                    <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-emerald-950">Bequem online einlösbar</span>
                    </div>
                  )}
                  {offer.discount_code && (
                    <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-emerald-950">Gutscheincode direkt verfügbar</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-emerald-950">Manuell geprüfte Aktion von {offer.brand?.name ?? "JungVorteil"}</span>
                  </div>
                </div>
              </div>

              {/* 2. Wer kann es nutzen & Requisite (Target Audience) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                  <UserCheck className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">Wer kann diese Aktion nutzen?</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{targetAudienceText}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
                  <div>
                    <span className="text-gray-500 block text-xs font-semibold uppercase">Altersgrenze</span>
                    <span className="font-semibold text-gray-900">
                      {offer.age_max ? `Bis max. ${offer.age_max} Jahre` : offer.age_min ? `Ab ${offer.age_min} Jahren` : "Keine spezifische Altersgrenze"}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs font-semibold uppercase">Status-Nachweis</span>
                    <span className="font-semibold text-gray-900">
                      {offer.student_required ? "Gültiger Studenten-/Schülerausweis nötig" : "Kein Studentenausweis erforderlich"}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Normalpreis vs. Jugendpreis (Price Comparison) */}
              {(offer.normal_price || offer.young_price || saving) && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                    <DollarSign className="w-5 h-5" />
                    <h2 className="text-lg font-bold text-gray-900">Preisvergleich & Preisvorteil</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-xs text-gray-500 uppercase font-semibold block">Normalpreis</span>
                      <span className="text-lg font-bold text-gray-500 line-through">
                        {offer.normal_price ? formatCHF(offer.normal_price) : "Standardtarif"}
                      </span>
                    </div>
                    <div className="bg-[#EAF0E5] p-4 rounded-xl border border-[#D6E2CE]">
                      <span className="text-xs text-[#3F5E39] uppercase font-semibold block">Jugendpreis</span>
                      <span className="text-xl font-black text-[#253D22]">
                        {offer.young_price ? formatCHF(offer.young_price) : saving ?? "Sondertarif"}
                      </span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                      <span className="text-xs text-green-700 uppercase font-semibold block">Deine Ersparnis</span>
                      <span className="text-xl font-black text-green-700">
                        {saving ?? "Exklusiver Rabatt"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. So bekommst du den Vorteil (How to get it - Schritt-für-Schritt) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                  <ShieldCheck className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">So sicherst du dir den Vorteil (Schritt-für-Schritt)</h2>
                </div>
                {offer.how_to_get_de && (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">{offer.how_to_get_de}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="w-7 h-7 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs mb-2">1</span>
                      <h3 className="font-bold text-gray-900 mb-1">Angebot aufrufen</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">Klicke auf &quot;Angebot ansehen&quot;, um direkt zur offiziellen Aktionsseite weitergeleitet zu werden.</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="w-7 h-7 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs mb-2">2</span>
                      <h3 className="font-bold text-gray-900 mb-1">Nachweis & Rabatt</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {offer.discount_code
                          ? `Gib beim Checkout den Gutscheincode "${offer.discount_code}" ein.`
                          : offer.student_required
                          ? "Halte deinen gültigen Studenten-/Schülerausweis beim Anbieter bereit."
                          : "Der Rabatt wird direkt im Bestellprozess beim Anbieter angewendet."}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="w-7 h-7 rounded-full bg-[#3F5E39] text-white flex items-center justify-center font-bold text-xs mb-2">3</span>
                      <h3 className="font-bold text-gray-900 mb-1">Sparen & Geniessen</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">Schliesse die Registrierung oder Bestellung zum reduzierten Jugendpreis ab.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wie du das Angebot nutzt & einlöst (Cómo utilizarla) */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4 text-[#3F5E39]">
                  <ExternalLink className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">Einlösung & Nutzung des Vorteils</h2>
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <span className="font-bold text-[#3F5E39] shrink-0 min-w-[110px]">Einlöse-Weg:</span>
                    <span>
                      {offer.is_online
                        ? "Online über die offizielle Website oder App des Anbieters."
                        : offer.city
                        ? `Vor Ort in den Filialen / Standorten in ${offer.city.name_de}.`
                        : "Online oder vor Ort am Schalter / an der Kasse."}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <span className="font-bold text-[#3F5E39] shrink-0 min-w-[110px]">Verifizierung:</span>
                    <span>
                      {offer.student_required
                        ? "Gültigen Studenten-/Schülerausweis (Legi, ISIC, Switch edu-ID) vorweisen oder im Checkout hochladen."
                        : offer.age_max
                        ? `Offiziellen Ausweis (ID, Pass, Swisspass) bereit halten, um das Alter unter ${offer.age_max} Jahren nachzuweisen.`
                        : "Kein separater Ausweis erforderlich – der Rabatt ist direkt für die Zielgruppe anwendbar."}
                    </span>
                  </div>
                  {offer.discount_code && (
                    <div className="flex items-start gap-3 bg-[#EAF0E5] p-3.5 rounded-xl border border-[#D6E2CE]">
                      <span className="font-bold text-[#253D22] shrink-0 min-w-[110px]">Gutscheincode:</span>
                      <span className="font-mono font-bold text-[#253D22]">{offer.discount_code}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 5. Condiciones importantes */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-3 text-gray-800">
                  <ShieldCheck className="w-5 h-5 text-[#3F5E39]" />
                  <h2 className="text-lg font-bold text-gray-900">Wichtige Bedingungen & Hinweise</h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {offer.conditions_de || "Gültig für Neukunden und bestehende Nutzer gemäss den Aktionsbestimmungen des Anbieters."}
                </p>
                <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-200/80">
                  ℹ️ Transparency & Prüfzyklus: Alle Angebote auf JungVorteil.ch werden regelmässig (mindestens monatlich sowie bei bekannten Tarifanpassungen) von unserer Redaktion manuell verifiziert. Preise und Bedingungen können sich beim Anbieter ändern. Alle Angaben ohne Gewähr.
                </p>
              </div>

              {/* Clearly visible section: Verifizierung & Prüfungsdatum (Fecha de verificación) */}
              <div className="bg-white rounded-2xl border border-emerald-200/90 shadow-sm p-6 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3 text-[#3F5E39]">
                  <CheckCircle className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">Redaktionelles Verifizierungsdatum</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-2">
                  <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-xl">
                    <span className="text-xs text-[#3F5E39] uppercase font-bold block mb-1">Status & Datum</span>
                    <span className="text-base font-bold text-emerald-800 block">
                      Zuletzt geprüft: {offer.checked_at ? formatDate(offer.checked_at) : "Kürzlich verifiziert"}
                    </span>
                  </div>
                  <div className="bg-[#F8FAF7] border border-[#E2EBDD] p-4 rounded-xl">
                    <span className="text-xs text-[#3F5E39] uppercase font-bold block mb-1">Prüfmethode</span>
                    <span className="text-base font-bold text-gray-900 block">
                      Manuelle Überprüfung durch JungVorteil Redaktion
                    </span>
                  </div>
                </div>
              </div>

              {/* 6. FAQ Section */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6 text-[#3F5E39]">
                  <HelpCircle className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-900">Häufig gestellte Fragen (FAQ)</h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                        <span className="text-[#3F5E39] font-bold">Q:</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

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
              <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Zusammenfassung</h3>
              <div className="space-y-3 text-sm">
                {offer.brand?.name && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Anbieter</span>
                    <span className="font-medium text-gray-900">{offer.brand.name}</span>
                  </div>
                )}
                {offer.normal_price && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Normalpreis</span>
                    <span className="font-medium text-gray-500 line-through">{formatCHF(offer.normal_price)}</span>
                  </div>
                )}
                {offer.young_price && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jugendpreis</span>
                    <span className="font-bold text-gray-900">{formatCHF(offer.young_price)}</span>
                  </div>
                )}
                {saving && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ersparnis</span>
                    <span className="font-bold text-green-600">{saving}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Altersgrenze</span>
                  <span className="font-medium text-gray-900">
                    {offer.age_max ? `Bis ${offer.age_max} Jahre` : offer.age_min ? `Ab ${offer.age_min} Jahre` : "Alle Altersgruppen"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Studierende</span>
                  <span className="font-medium text-gray-900">{offer.student_required ? "Ja (Ausweis nötig)" : "Nein"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Verfügbarkeit</span>
                  <span className="font-medium text-gray-900">{offer.is_nationwide ? "Schweizweit" : offer.city?.name_de ?? "Lokal"}</span>
                </div>
                {offer.end_date && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gültig bis</span>
                    <span className={`font-medium ${expired ? "text-red-500" : "text-gray-900"}`}>{formatDate(offer.end_date)}</span>
                  </div>
                )}
                {offer.checked_at && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Zuletzt geprüft</span>
                    <span className="font-medium text-emerald-700">{formatDate(offer.checked_at)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Prüfintervall</span>
                  <span className="font-medium text-gray-900">Monatlich manuell</span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100">
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-xs text-[#3F5E39] font-semibold hover:underline flex items-center gap-1.5 truncate"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    Quelle: Offizielle Website des Anbieters ({offer.brand?.website_url ? offer.brand.website_url.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : offer.brand?.name ?? "Anbieter"})
                  </a>
                </div>
              </div>
              <OfferCtaLink
                offerId={offer.id}
                url={externalUrl}
                className="mt-5 flex items-center justify-center gap-2 w-full bg-[#3F5E39] hover:bg-[#324B2D] text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Angebot aufrufen <ExternalLink className="w-4 h-4" />
              </OfferCtaLink>
            </div>

            <AdSlot slot="AD_SIDEBAR_TOP" />
          </aside>
        </div>
      </div>
    </>
  );
}
