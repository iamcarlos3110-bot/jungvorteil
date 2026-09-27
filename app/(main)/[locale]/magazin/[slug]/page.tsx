import React from "react";
import { getArticleBySlug, getArticles } from "@/services/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, BookOpen, ShieldCheck } from "lucide-react";
import { safeJsonLd, formatDate } from "@/lib/utils";
import AdSlot from "@/components/ads/AdSlot";
import ArticleCard from "@/components/magazin/ArticleCard";
import ShareButton from "@/components/magazin/ShareButton";
import Script from "next/script";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

function renderInlineMarkdown(text: string, locale: string): React.ReactNode {
  if (!text) return null;

  const tokens: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.substring(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      const linkText = match[1];
      const url = match[2];
      const isExternal = url.startsWith("http://") || url.startsWith("https://");

      if (isExternal) {
        tokens.push(
          <a
            key={`link-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-[#3F5E39] underline font-semibold hover:text-[#253D22] transition-colors"
          >
            {linkText}
          </a>
        );
      } else {
        tokens.push(
          <Link
            key={`link-${match.index}`}
            href={url}
            className="text-[#3F5E39] underline font-semibold hover:text-[#253D22] transition-colors"
          >
            {linkText}
          </Link>
        );
      }
    } else if (match[3] !== undefined) {
      tokens.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-gray-900">
          {match[3]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(text.substring(lastIndex));
  }

  return tokens.length > 0 ? tokens : text;
}

function renderArticleContent(content: string | null, locale: string) {
  if (!content) return <p>Dieser Artikel hat noch keinen Inhalt.</p>;

  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      i++;
      continue; // Heading 1 is in header
    }

    if (trimmed.startsWith("## ")) {
      blocks.push(
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {renderInlineMarkdown(trimmed.replace("## ", ""), locale)}
        </h2>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {renderInlineMarkdown(trimmed.replace("### ", ""), locale)}
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      blocks.push(
        <blockquote key={i} className="bg-[#F4F8F3] border-l-4 border-[#3F5E39] p-4 rounded-r-2xl text-sm text-stone-800 my-4 shadow-sm font-medium leading-relaxed">
          {renderInlineMarkdown(trimmed.replace(/^>\s*/, ""), locale)}
        </blockquote>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("---")) {
      blocks.push(<hr key={i} className="my-8 border-gray-200" />);
      i++;
      continue;
    }

    // Table rendering
    if (trimmed.startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }

      if (tableRows.length > 0) {
        const parsedRows = tableRows
          .filter((r) => !r.includes(":---") && !r.includes("---:"))
          .map((r) => r.split("|").map((c) => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1));

        if (parsedRows.length > 0) {
          const header = parsedRows[0];
          const body = parsedRows.slice(1);

          blocks.push(
            <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm text-gray-800">
                <thead className="bg-[#EAF0E5] text-stone-900 font-bold text-xs uppercase tracking-wider">
                  <tr>
                    {header.map((col, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 border-b border-gray-200">
                        {renderInlineMarkdown(col, locale)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {body.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-stone-50/80 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 font-medium text-gray-700">
                          {renderInlineMarkdown(cell, locale)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      continue;
    }

    if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || /^\d+\.\s/.test(trimmed)) {
      const listItems: { text: string; num?: string }[] = [];
      while (i < lines.length) {
        const lTrim = lines[i].trim();
        if (lTrim.startsWith("* ") || lTrim.startsWith("- ")) {
          listItems.push({ text: lTrim.replace(/^[*|-]\s*/, "") });
          i++;
        } else if (/^\d+\.\s/.test(lTrim)) {
          const m = lTrim.match(/^(\d+)\.\s*(.*)/);
          listItems.push({ text: m ? m[2] : lTrim, num: m ? m[1] : undefined });
          i++;
        } else {
          break;
        }
      }

      const isOrdered = listItems.length > 0 && listItems[0].num !== undefined;
      if (isOrdered) {
        blocks.push(
          <ol key={`ol-${i}`} className="my-4 space-y-2 list-decimal list-inside text-gray-700 font-medium">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="leading-relaxed">
                {renderInlineMarkdown(item.text, locale)}
              </li>
            ))}
          </ol>
        );
      } else {
        blocks.push(
          <ul key={`ul-${i}`} className="my-4 space-y-1.5 list-disc list-inside text-gray-700 font-medium">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="leading-relaxed">
                {renderInlineMarkdown(item.text, locale)}
              </li>
            ))}
          </ul>
        );
      }
      continue;
    }

    // Default paragraph
    blocks.push(
      <p key={i} className="mb-4 text-gray-700 leading-relaxed">
        {renderInlineMarkdown(trimmed, locale)}
      </p>
    );
    i++;
  }

  return blocks;
}

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
      "@type": "Person",
      "name": "Carlos Piñeiro",
      "jobTitle": "Gründer & Chefredaktor",
      "worksFor": {
        "@type": "Organization",
        "name": "JungVorteil Redaktion",
        "url": "https://jungvorteil.ch"
      }
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
                <Clock className="w-3.5 h-3.5" /> {Math.max(1, Math.ceil((article.content ? article.content.trim().split(/\s+/).length : 0) / 180))} Min. Lesezeit
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
              {renderArticleContent(article.content, locale)}
            </div>

            {/* Editorial Transparency Notice Card */}
            <div className="my-8 bg-[#EAF0E5]/60 border border-[#C7D9C0] rounded-2xl p-5 text-xs text-stone-700 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <ShieldCheck className="w-4 h-4 text-[#2E4D28]" />
                <span>Redaktioneller Transparenzhinweis</span>
              </div>
              <p className="leading-relaxed">
                Alle in diesem Ratgeber genannten Tarife, Ersparnisse und Konditionen wurden anhand der offiziellen Angaben der Schweizer Anbieter recherchiert und am <strong>{formatDate(article.updated_at || article.published_at || article.created_at)}</strong> manuell überprüft. Angebote können sich ändern. Ergänzende Informationen findest du in unseren <Link href={`/${locale}/redaktionelle-richtlinien`} className="text-[#2E4D28] underline font-semibold">Redaktionellen Richtlinien</Link>.
              </p>
            </div>

            <AdSlot slot="AD_BETWEEN_OFFERS_1" className="my-10" />

            {/* Author Footer & Share */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold text-sm">
                  CP
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Carlos Piñeiro (JungVorteil Redaktion)</p>
                  <p className="text-xs text-gray-500">
                    Verantwortlich für Inhalt &amp; Faktenprüfung • Zuletzt geprüft: {formatDate(article.updated_at || article.published_at || article.created_at)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/${locale}/redaktionelle-richtlinien`}
                  className="text-xs text-[#3F5E39] font-semibold underline hover:text-[#253D22]"
                >
                  Redaktionelle Richtlinien
                </Link>
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
