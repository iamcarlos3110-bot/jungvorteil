// lib/studentAuth.ts
// Gestor de sesión y sincronización de cuentas de alumno en cliente

import { StudyStats, getStudyProgress } from "./studyProgress";
import { activatePremiumPass, getPremiumStatus } from "./premium";

export interface StudentUser {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
  premiumExpiresAt: string | null;
  stats: StudyStats;
  createdAt: string;
}

const STUDENT_STORAGE_KEY = "autotheorie_student_session_v1";

export function getLocalStudent(): StudentUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STUDENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveLocalStudent(student: StudentUser | null) {
  if (typeof window === "undefined") return;
  try {
    if (student) {
      localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(student));
      if (student.isPremium) {
        activatePremiumPass();
      }
    } else {
      localStorage.removeItem(STUDENT_STORAGE_KEY);
    }
    window.dispatchEvent(new Event("student_auth_changed"));
  } catch {}
}

export async function fetchCurrentStudent(): Promise<StudentUser | null> {
  try {
    const res = await fetch("/api/auth/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentialsAction: "me" }),
    });
    if (!res.ok) return getLocalStudent();
    const data = await res.json();
    if (data.student) {
      // Sync local progress with server
      saveLocalStudent(data.student);
      return data.student;
    }
    return getLocalStudent();
  } catch {
    return getLocalStudent();
  }
}

export async function syncStudentProgress(): Promise<boolean> {
  const local = getLocalStudent();
  const currentProgress = getStudyProgress();
  const isPro = getPremiumStatus();

  try {
    const res = await fetch("/api/auth/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        credentialsAction: "sync",
        email: local?.email,
        stats: currentProgress,
        isPremium: isPro || local?.isPremium,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.student) {
        saveLocalStudent(data.student);
      }
      return true;
    }
  } catch (e) {
    console.warn("Could not sync progress to cloud:", e);
  }
  return false;
}

export async function studentLogout(): Promise<void> {
  try {
    await fetch("/api/auth/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credentialsAction: "logout" }),
    });
  } catch {}
  saveLocalStudent(null);
}
