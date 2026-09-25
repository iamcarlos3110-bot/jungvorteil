// app/robots.ts
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/de/",
          "/de/angebot/",
          "/de/marken/",
          "/de/rabatte/",
          "/de/studentenrabatte/",
          "/de/stadt/",
          "/de/angebote-unter-30",
          "/de/angebote-unter-25",
          "/de/junge-leute",
          "/de/kontakt",
          "/de/datenschutz",
          "/de/impressum",
          "/de/nutzungsbedingungen",
          "/de/magazin",
        ],
        disallow: [
          "/admin",
          "/admin/",
          "/api/",
          "/de/suche",
          "/_next/",
        ],
      },
      {
        // Block AI training bots
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "CCBot", "anthropic-ai"],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
