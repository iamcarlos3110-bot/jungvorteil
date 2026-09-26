import { getArticleBySlug, getArticles } from "@/services/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, BookOpen } from "lucide-react";
import { safeJsonLd, formatDate } from "@/lib/utils";
import AdSlot from "@/components/ads/AdSlot";
import ArticleCard from "@/components/magazin/ArticleCard";
import ShareButton from "@/components/magazin/ShareButton";
import Script from "next/script";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) return { title: "Artikel nicht gefunden | JungVorteil Magazin" };

  return {
    title: `${article.title} | JungVorteil Magazin`,
    description: article.excerpt ?? "Lies nützliche Spartipps, Ratgeber und Finanz-Guides für junge Leute in der Schweiz.",
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const allArticles = await getArticles(4);
  const relatedArticles = allArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt ?? "",
    "datePublished": article.published_at ?? article.created_at,
    "author": {
      "@type": "Organization",
      "name": "JungVorteil Redaktion",
      "url": "https://jungvorteil.ch"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JungVorteil",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jungvorteil.ch/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "JungVorteil", "item": `https://jungvorteil.ch/${locale}` },
      { "@type": "ListItem", "position": 2, "name": "Magazin", "item": `https://jungvorteil.ch/${locale}/magazin` },
      { "@type": "ListItem", "position": 3, "name": article.title }
    ]
  };

  return (
    <>
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }} />
      <Script id="schema-article-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      <article className="bg-[#F8FAF6] min-h-screen pb-20">
        {/* Top Header & Breadcrumb */}
        <div className="bg-white border-b border-gray-100 pt-20 lg:pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link href={`/${locale}/magazin`} className="inline-flex items-center gap-2 text-sm text-[#3F5E39] font-medium hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Magazin
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#EAF0E5] text-[#3F5E39] rounded-full text-xs font-bold uppercase tracking-wider">
                {article.category || "Ratgeber"}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" /> 5 Min. Lesezeit
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5" /> {formatDate(article.published_at || article.created_at)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
                {article.excerpt}
              </p>
            )}
          </div>
        </div>

        {/* Content Body Container */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
            
            {/* Article Content Render */}
            <div className="prose prose-emerald lg:prose-lg max-w-none text-gray-800 leading-relaxed">
              {article.content ? (
                article.content.split('\n').map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  if (trimmed.startsWith('# ')) {
                    return null; // Heading 1 is already in header
                  } else if (trimmed.startsWith('## ')) {
                    return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
                  } else if (trimmed.startsWith('### ')) {
                    return <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
                  } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                    return <li key={idx} className="ml-4 list-disc my-1 text-gray-700">{trimmed.replace(/^[*|-]\s*/, '')}</li>;
                  } else if (trimmed.startsWith('---')) {
                    return <hr key={idx} className="my-8 border-gray-200" />;
                  }

                  return <p key={idx} className="mb-4 text-gray-700">{trimmed}</p>;
                })
              ) : (
                <p>Dieser Artikel hat noch keinen Inhalt.</p>
              )}
            </div>

            <AdSlot slot="AD_BETWEEN_OFFERS_1" className="my-10" />

            {/* Author Footer & Share */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold text-sm">
                  JV
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">JungVorteil Redaktion</p>
                  <p className="text-xs text-gray-500">Geprüfte Spartipps & Ratgeber für die Schweiz</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShareButton title={article.title} />
              </div>
            </div>


          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#3F5E39]" /> Weitere interessante Artikel
                </h3>
                <Link href={`/${locale}/magazin`} className="text-sm font-bold text-[#3F5E39] hover:underline">
                  Alle ansehen &rarr;
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.id} article={rel} locale={locale} />
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  );
}
