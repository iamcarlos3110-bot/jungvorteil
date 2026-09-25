// lib/favorites.ts
// Favorites management via localStorage (no account required)

const FAVORITES_KEY = "jv_favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function addFavorite(offerId: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(offerId)) {
    favorites.push(offerId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(offerId: string): void {
  const favorites = getFavorites().filter((id) => id !== offerId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(offerId: string): boolean {
  return getFavorites().includes(offerId);
}

export function toggleFavorite(offerId: string): boolean {
  if (isFavorite(offerId)) {
    removeFavorite(offerId);
    return false;
  } else {
    addFavorite(offerId);
    return true;
  }
}
