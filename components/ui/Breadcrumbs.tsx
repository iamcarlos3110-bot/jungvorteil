import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";
import { safeJsonLd } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: string;
  className?: string;
}

export default function Breadcrumbs({ items, locale = "de", className = "" }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { label: "Home", href: `/${locale}` },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://jungvorteil.ch${item.href}` } : {}),
    })),
  };

  const schemaId = `schema-bc-${items.map(i => i.label).join("-").toLowerCase().replace(/[^a-z0-9]/g, "")}`;

  return (
    <>
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className={`my-4 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}
                {isLast || !item.href ? (
                  <span className="text-stone-900 font-bold truncate max-w-[200px] sm:max-w-[300px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#3F5E39] hover:underline transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 text-[#3F5E39] inline" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
