import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/*",
          "/*/suche",
          "/_next/",
        ],
      },
      {
        // Block scrapers/AI content aggregators if needed, but allow Search Engines
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
