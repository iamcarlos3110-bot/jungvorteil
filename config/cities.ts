// config/cities.ts

export interface CityConfig {
  slug: string;
  name_de: string;
  name_fr: string;
  name_it: string;
  canton: string;
  urlSlug: string; // SEO-friendly, sin caracteres especiales
}

export const CITIES: CityConfig[] = [
  { slug: "zuerich", name_de: "Zürich", name_fr: "Zurich", name_it: "Zurigo", canton: "ZH", urlSlug: "zuerich" },
  { slug: "bern", name_de: "Bern", name_fr: "Berne", name_it: "Berna", canton: "BE", urlSlug: "bern" },
  { slug: "basel", name_de: "Basel", name_fr: "Bâle", name_it: "Basilea", canton: "BS", urlSlug: "basel" },
  { slug: "genf", name_de: "Genf", name_fr: "Genève", name_it: "Ginevra", canton: "GE", urlSlug: "genf" },
  { slug: "lausanne", name_de: "Lausanne", name_fr: "Lausanne", name_it: "Losanna", canton: "VD", urlSlug: "lausanne" },
  { slug: "winterthur", name_de: "Winterthur", name_fr: "Winterthour", name_it: "Winterthur", canton: "ZH", urlSlug: "winterthur" },
  { slug: "luzern", name_de: "Luzern", name_fr: "Lucerne", name_it: "Lucerna", canton: "LU", urlSlug: "luzern" },
  { slug: "st-gallen", name_de: "St. Gallen", name_fr: "Saint-Gall", name_it: "San Gallo", canton: "SG", urlSlug: "st-gallen" },
  { slug: "lugano", name_de: "Lugano", name_fr: "Lugano", name_it: "Lugano", canton: "TI", urlSlug: "lugano" },
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return CITIES.find((c) => c.slug === slug);
}
