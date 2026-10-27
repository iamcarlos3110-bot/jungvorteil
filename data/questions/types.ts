// data/questions/types.ts

export type QuestionCategory =
  | "vortritt"
  | "signale"
  | "geschwindigkeit"
  | "autobahn"
  | "sicherheit"
  | "umwelt"
  | "technik"
  | "spezial";

export interface QuestionOption {
  id: "a" | "b" | "c";
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  testId?: number; // Test numerado (1 a 20)
  category: QuestionCategory;
  categoryName: string;
  question: string;
  image?: string;
  svgType?: string; // Identifier for the SVG traffic situation / sign
  options: QuestionOption[];
  points: number; // Error points (1 or 2)
  explanation: string;
  ruleReference?: string;
}

export interface TestMetadata {
  id: number;
  title: string;
  description: string;
  category: "B" | "A" | "M";
  questionCount: number;
  timeMinutes: number;
  maxErrorPoints: number;
}
