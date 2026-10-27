// data/questions.ts
import { Question } from "./questions/types";
import { VORTRITT_QUESTIONS } from "./questions/vortritt";
import { SIGNALE_QUESTIONS } from "./questions/signale";
import { GESCHWINDIGKEIT_QUESTIONS } from "./questions/geschwindigkeit";
import { AUTOBAHN_QUESTIONS } from "./questions/autobahn";
import { SICHERHEIT_QUESTIONS } from "./questions/sicherheit";
import { TECHNIK_UMWELT_QUESTIONS } from "./questions/technik_umwelt";
import { FALLEN_QUESTIONS } from "./questions/fallen";
import { ASA_EXTRA_QUESTIONS } from "./questions/asa_katalog_komplett";

export * from "./questions/types";
export * from "./questions/tests_catalog";

export const QUESTIONS_DATABASE: Question[] = [
  ...VORTRITT_QUESTIONS,
  ...SIGNALE_QUESTIONS,
  ...GESCHWINDIGKEIT_QUESTIONS,
  ...AUTOBAHN_QUESTIONS,
  ...SICHERHEIT_QUESTIONS,
  ...TECHNIK_UMWELT_QUESTIONS,
  ...FALLEN_QUESTIONS,
  ...ASA_EXTRA_QUESTIONS,
];

const countCat = (catId: string) => QUESTIONS_DATABASE.filter((q) => q.category === catId).length;

export const CATEGORIES = [
  { id: "vortritt" as const, name: "Vortritt & Kreuzungen", icon: "Car", count: countCat("vortritt") },
  { id: "signale" as const, name: "Verkehrssignale (SSV)", icon: "AlertTriangle", count: countCat("signale") },
  { id: "geschwindigkeit" as const, name: "Geschwindigkeit & Abstand", icon: "Gauge", count: countCat("geschwindigkeit") },
  { id: "autobahn" as const, name: "Autobahn & Autostrasse", icon: "Milestone", count: countCat("autobahn") },
  { id: "sicherheit" as const, name: "Sicherheit & Promille", icon: "ShieldCheck", count: countCat("sicherheit") },
  { id: "umwelt" as const, name: "Fahrzeugtechnik & Umwelt", icon: "Leaf", count: countCat("umwelt") },
  { id: "spezial" as const, name: "ASA-Prüfungsfallen", icon: "Flame", count: countCat("spezial") },
];
