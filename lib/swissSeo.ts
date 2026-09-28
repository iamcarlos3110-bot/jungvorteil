// lib/swissSeo.ts
import { Metadata } from "next";

export const SITE_URL = "https://jungvorteil.ch";

export interface SwissSeoOptions {
  title: string;
  description: string;
  path: string; // e.g. "/studentenrabatte/zuerich"
  locale?: string; // "de", "fr", "it"
  noIndex?: boolean;
}

export function generateSwissMetadata({
  title,
  description,
  path,
  locale = "de",
  noIndex = false,
}: SwissSeoOptions): Metadata {
  const cleanPath = path === "" || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath}`;

  const langMap: Record<string, string> = {
    de: "de-CH",
    fr: "fr-CH",
    it: "it-CH",
  };

  const currentLang = langMap[locale] || "de-CH";

  return {
    title: `${title} | JungVorteil.ch`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "de-CH": `${SITE_URL}/de${cleanPath}`,
        "fr-CH": `${SITE_URL}/fr${cleanPath}`,
        "it-CH": `${SITE_URL}/it${cleanPath}`,
        "x-default": `${SITE_URL}/de${cleanPath}`,
      },
    },
    openGraph: {
      title: `${title} | JungVorteil.ch`,
      description,
      url: canonicalUrl,
      siteName: "JungVorteil",
      locale: currentLang.replace("-", "_"),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: "JungVorteil Schweizer Vorteilsportal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | JungVorteil.ch`,
      description,
      images: [`${SITE_URL}/logo.png`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
