// lib/studyProgress.ts
// Gestor de progreso, racha y banco de fallos en localStorage (inspirado en AprobadosYA)

export interface StudyStats {
  streak: number;
  lastStudyDate: string | null;
  testsCompleted: number;
  failedQuestionIds: number[];
  favoriteQuestionIds: number[];
}

const STORAGE_KEY = "autotheorie_progress_v1";

export function getStudyProgress(): StudyStats {
  if (typeof window === "undefined") {
    return { streak: 0, lastStudyDate: null, testsCompleted: 0, failedQuestionIds: [], favoriteQuestionIds: [] };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { streak: 1, lastStudyDate: new Date().toISOString(), testsCompleted: 0, failedQuestionIds: [], favoriteQuestionIds: [] };
    
    const parsed: StudyStats = JSON.parse(raw);
    
    // Check streak
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = parsed.lastStudyDate ? parsed.lastStudyDate.slice(0, 10) : null;
    
    if (lastDate && lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastDate === yesterday) {
        // Consecutive day
        parsed.streak = (parsed.streak || 0) + 1;
      } else {
        // Streak broken
        parsed.streak = 1;
      }
      parsed.lastStudyDate = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }

    return parsed;
  } catch {
    return { streak: 1, lastStudyDate: new Date().toISOString(), testsCompleted: 0, failedQuestionIds: [], favoriteQuestionIds: [] };
  }
}

export function recordQuestionResult(questionId: number, isCorrect: boolean) {
  if (typeof window === "undefined") return;

  const progress = getStudyProgress();
  const failedSet = new Set(progress.failedQuestionIds || []);

  if (!isCorrect) {
    failedSet.add(questionId);
  } else {
    failedSet.delete(questionId);
  }

  progress.failedQuestionIds = Array.from(failedSet);
  progress.lastStudyDate = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

export function toggleFavoriteQuestion(questionId: number): boolean {
  if (typeof window === "undefined") return false;

  const progress = getStudyProgress();
  const favSet = new Set(progress.favoriteQuestionIds || []);
  let isFav = false;

  if (favSet.has(questionId)) {
    favSet.delete(questionId);
    isFav = false;
  } else {
    favSet.add(questionId);
    isFav = true;
  }

  progress.favoriteQuestionIds = Array.from(favSet);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}

  return isFav;
}

export function recordCompletedTest() {
  if (typeof window === "undefined") return;
  const progress = getStudyProgress();
  progress.testsCompleted = (progress.testsCompleted || 0) + 1;
  progress.lastStudyDate = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}
