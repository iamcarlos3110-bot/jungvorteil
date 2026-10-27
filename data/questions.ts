// data/questions.ts
import { Question } from "./questions/types";
import { VORTRITT_QUESTIONS } from "./questions/vortritt";
import { SIGNALE_QUESTIONS } from "./questions/signale";
import { GESCHWINDIGKEIT_QUESTIONS } from "./questions/geschwindigkeit";
import { AUTOBAHN_QUESTIONS } from "./questions/autobahn";
import { SICHERHEIT_QUESTIONS } from "./questions/sicherheit";
import { TECHNIK_UMWELT_QUESTIONS } from "./questions/technik_umwelt";

export * from "./questions/types";
export * from "./questions/tests_catalog";

export const CATEGORIES = [
  { id: "vortritt" as const, name: "Vortritt & Kreuzungen", icon: "Car", count: VORTRITT_QUESTIONS.length },
  { id: "signale" as const, name: "Verkehrssignale (SSV)", icon: "AlertTriangle", count: SIGNALE_QUESTIONS.length },
  { id: "geschwindigkeit" as const, name: "Geschwindigkeit & Abstand", icon: "Gauge", count: GESCHWINDIGKEIT_QUESTIONS.length },
  { id: "autobahn" as const, name: "Autobahn & Autostrasse", icon: "Milestone", count: AUTOBAHN_QUESTIONS.length },
  { id: "sicherheit" as const, name: "Sicherheit & Promille", icon: "ShieldCheck", count: SICHERHEIT_QUESTIONS.length },
  { id: "umwelt" as const, name: "Fahrzeugtechnik & Umwelt", icon: "Leaf", count: TECHNIK_UMWELT_QUESTIONS.length },
];

export const QUESTIONS_DATABASE: Question[] = [
  ...VORTRITT_QUESTIONS,
  ...SIGNALE_QUESTIONS,
  ...GESCHWINDIGKEIT_QUESTIONS,
  ...AUTOBAHN_QUESTIONS,
  ...SICHERHEIT_QUESTIONS,
  ...TECHNIK_UMWELT_QUESTIONS,
];
