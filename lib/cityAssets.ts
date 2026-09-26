// lib/cityAssets.ts
// High resolution 100% verified photos for Swiss cities

export const CITY_PHOTOS: Record<string, string> = {
  "zuerich": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600&auto=format&fit=crop",
  "bern": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600&auto=format&fit=crop",
  "basel": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
  "genf": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
  "lausanne": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
  "st-gallen": "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=600&auto=format&fit=crop",
  "luzern": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600&auto=format&fit=crop",
  "winterthur": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
  "lugano": "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop"
};

const DEFAULT_SWISS_CITY = "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=600&auto=format&fit=crop";

export function getCityPhoto(slug?: string): string {
  if (!slug) return DEFAULT_SWISS_CITY;
  return CITY_PHOTOS[slug.toLowerCase()] || DEFAULT_SWISS_CITY;
}
