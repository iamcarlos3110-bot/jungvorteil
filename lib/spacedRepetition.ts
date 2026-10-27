// lib/spacedRepetition.ts
// Algoritmo de Repaso Espaciado SM-2 (5 Niveles) adaptado para AutoTheorie Schweiz

export interface SpacedCard {
  questionId: number;
  level: number; // 1 to 5
  consecutiveCorrect: number;
  nextReview: number; // timestamp ms
  lastReview: number; // timestamp ms
}

const STORAGE_KEY_SPACED = "autotheorie_sm2_spaced_v1";

// Intervalos en milisegundos:
// Nivel 1: 4 horas | Nivel 2: 1 día | Nivel 3: 3 días | Nivel 4: 7 días | Nivel 5: 21 días (Graduada)
const INTERVALS_MS = [
  0,
  4 * 3600 * 1000,
  24 * 3600 * 1000,
  3 * 86400 * 1000,
  7 * 86400 * 1000,
  21 * 86400 * 1000,
];

export function getSpacedCards(): Record<number, SpacedCard> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SPACED);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSpacedCards(cards: Record<number, SpacedCard>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_SPACED, JSON.stringify(cards));
  } catch {}
}

export function recordSpacedAnswer(questionId: number, isCorrect: boolean): SpacedCard {
  const cards = getSpacedCards();
  const now = Date.now();
  let card = cards[questionId] || {
    questionId,
    level: 0,
    consecutiveCorrect: 0,
    nextReview: now,
    lastReview: now,
  };

  if (isCorrect) {
    card.consecutiveCorrect += 1;
    card.level = Math.min(5, card.level + 1);
  } else {
    card.consecutiveCorrect = 0;
    card.level = 1; // Vuelve al primer nivel para reincidir
  }

  card.lastReview = now;
  card.nextReview = now + INTERVALS_MS[card.level];

  cards[questionId] = card;
  saveSpacedCards(cards);
  return card;
}

export function getDueSpacedQuestionIds(): number[] {
  const cards = getSpacedCards();
  const now = Date.now();
  const dueIds: number[] = [];

  for (const qIdStr in cards) {
    const card = cards[qIdStr];
    if (card && card.nextReview <= now && card.level < 5) {
      dueIds.push(card.questionId);
    }
  }

  return dueIds;
}

export function getSpacedStats() {
  const cards = getSpacedCards();
  const now = Date.now();
  let due = 0;
  let mastered = 0;
  const levelsCount: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const qIdStr in cards) {
    const card = cards[qIdStr];
    if (!card) continue;
    if (card.level >= 1 && card.level <= 5) {
      levelsCount[card.level] = (levelsCount[card.level] || 0) + 1;
    }
    if (card.level === 5) {
      mastered += 1;
    } else if (card.nextReview <= now) {
      due += 1;
    }
  }

  return {
    totalTracked: Object.keys(cards).length,
    due,
    mastered,
    levels: levelsCount,
  };
}
