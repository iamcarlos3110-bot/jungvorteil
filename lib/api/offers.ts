// lib/api/offers.ts
// Shim: re-exports from services for backward compatibility
export {
  getPublishedOffers,
  getDemoOffers,
  getTopOffers,
  getOfferBySlug,
  getSimilarOffers,
  getOffersByCategory,
  getOffersByCity,
  getOffersByBrand,
  incrementOfferView,
  searchOffers,
} from "@/services/offers";

export { getAllCategories, getCategoryBySlug } from "@/services/categories";
export { getAllCities, getCityBySlug } from "@/services/cities";
export { getAllBrands, getBrandBySlug } from "@/services/brands";

// Aliases used by pages subagent
export { getPublishedOffers as getStudentOffers } from "@/services/offers";
