import { getStudentOffers, getAllCities } from '@/lib/api/offers';
import OfferGrid from '@/components/offers/OfferGrid';
import { safeJsonLd } from '@/lib/utils';

export const metadata = {
  title: 'Studentenrabatte Schweiz – Die besten Deals | JungVorteil',
  description: 'Finde die besten Studentenrabatte in der Schweiz. Apple, Spotify, SBB und mehr mit Studirabatt.'
};

export default async function StudentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const offers = await getStudentOffers();
  const cities = await getAllCities();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wer hat Anspruch auf Studentenrabatte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meistens alle an einer anerkannten Hochschule oder Universität immatrikulierten Studierenden mit einem gültigen Legi (Studierendenausweis)."
        }
      },
      {
        "@type": "Question",
        "name": "Brauche ich einen UNiDAYS Account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für einige internationale Marken (wie Apple oder Nike) wird zur Verifizierung ein UNiDAYS oder StudentBeans Account benötigt."
        }
      }
    ]
  };

  return (
    <>
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      
      <div className="bg-[#1C331B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Studentenrabatte Schweiz</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Spare Geld mit deiner Legi. Wir sammeln die besten Vergünstigungen für Studierende.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            <span className="font-medium py-2">Nach Stadt:</span>
            {cities.map(city => (
              <a key={city.id} href={`/${locale}/stadt/${city.slug}`} className="px-4 py-2 bg-white rounded-full text-sm hover:bg-[#EAF0E5] hover:text-[#3F5E39] transition shadow-sm">
                {city.name_de}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Alle Studentenrabatte</h2>
        <OfferGrid offers={offers.offers} locale={locale} />

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Häufige Fragen (FAQ)</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2">Wer hat Anspruch auf Studentenrabatte?</h3>
              <p className="text-gray-600">Meistens alle an einer anerkannten Hochschule oder Universität immatrikulierten Studierenden mit einem gültigen Legi (Studierendenausweis).</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-bold text-lg mb-2">Brauche ich einen UNiDAYS Account?</h3>
              <p className="text-gray-600">Für einige internationale Marken (wie Apple oder Nike) wird zur Verifizierung ein UNiDAYS oder StudentBeans Account benötigt. Bei vielen lokalen Anbietern in der Schweiz reicht das Vorzeigen der Legi.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
