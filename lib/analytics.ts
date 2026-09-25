// lib/analytics.ts
// Google Analytics 4 event helpers

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("event", eventName, params);
}

export const Analytics = {
  offerView: (offerId: string, offerTitle: string) =>
    trackEvent("offer_view", { offer_id: offerId, offer_title: offerTitle }),

  offerClick: (offerId: string, offerTitle: string) =>
    trackEvent("offer_click", { offer_id: offerId, offer_title: offerTitle }),

  externalClick: (offerId: string, url: string) =>
    trackEvent("external_click", { offer_id: offerId, destination_url: url }),

  search: (query: string, resultsCount: number) =>
    trackEvent("search", { search_term: query, results_count: resultsCount }),

  filterUsed: (filterType: string, filterValue: string) =>
    trackEvent("filter_used", { filter_type: filterType, filter_value: filterValue }),

  favoriteAdded: (offerId: string) =>
    trackEvent("favorite_added", { offer_id: offerId }),

  favoriteRemoved: (offerId: string) =>
    trackEvent("favorite_removed", { offer_id: offerId }),

  citySelected: (city: string) =>
    trackEvent("city_selected", { city }),

  categorySelected: (category: string) =>
    trackEvent("category_selected", { category }),
};
