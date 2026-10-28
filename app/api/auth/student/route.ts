// app/api/auth/student/route.ts
// API de autenticación, sincronización de progreso y restauración de suscripción PRO para alumnos

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { getStripe } from "@/lib/stripe";

interface StoredStudent {
  id: string;
  email: string;
  passwordHash: string;
  salt: string;
  name: string;
  isPremium: boolean;
  premiumExpiresAt: string | null;
  stripeSessionId?: string;
  stats: {
    streak: number;
    lastStudyDate: string | null;
    testsCompleted: number;
    failedQuestionIds: number[];
    favoriteQuestionIds: number[];
  };
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const STUDENTS_FILE = path.join(DATA_DIR, "students.json");

function ensureFile(): StoredStudent[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(STUDENTS_FILE)) {
      fs.writeFileSync(STUDENTS_FILE, JSON.stringify([]), "utf8");
      return [];
    }
    const raw = fs.readFileSync(STUDENTS_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}

function saveStudents(list: StoredStudent[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STUDENTS_FILE, JSON.stringify(list, null, 2), "utf8");
  } catch (e) {
    console.error("Failed to save students to disk:", e);
  }
}

function hashPassword(password: string, salt: string): string {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function sanitizeStudent(s: StoredStudent) {
  const { passwordHash, salt, ...rest } = s;
  return rest;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const action = body.credentialsAction || "me";
    const students = ensureFile();

    // 1. ME: Get current session from cookie or body email
    if (action === "me") {
      const emailCookie = req.cookies.get("student_email")?.value;
      const targetEmail = (emailCookie || body.email || "").toLowerCase().trim();
      if (!targetEmail) {
        return NextResponse.json({ student: null });
      }

      const found = students.find((s) => s.email.toLowerCase() === targetEmail);
      if (!found) {
        return NextResponse.json({ student: null });
      }
      return NextResponse.json({ student: sanitizeStudent(found) });
    }

    // 2. REGISTER
    if (action === "register") {
      const email = (body.email || "").toLowerCase().trim();
      const password = body.password || "";
      const name = (body.name || email.split("@")[0] || "Schüler").trim();

      if (!email || !email.includes("@")) {
        return NextResponse.json({ error: "Gültige E-Mail-Adresse erforderlich" }, { status: 400 });
      }
      if (!password || password.length < 6) {
        return NextResponse.json({ error: "Das Passwort muss mindestens 6 Zeichen lang sein" }, { status: 400 });
      }

      const existing = students.find((s) => s.email.toLowerCase() === email);
      if (existing) {
        return NextResponse.json({ error: "Diese E-Mail ist bereits registriert. Bitte anmelden." }, { status: 400 });
      }

      const salt = crypto.randomBytes(16).toString("hex");
      const passwordHash = hashPassword(password, salt);

      const newStudent: StoredStudent = {
        id: "stu_" + crypto.randomUUID().slice(0, 12),
        email,
        passwordHash,
        salt,
        name,
        isPremium: Boolean(body.isPremium),
        premiumExpiresAt: body.isPremium ? new Date(Date.now() + 90 * 86400000).toISOString() : null,
        stats: body.stats || {
          streak: 1,
          lastStudyDate: new Date().toISOString(),
          testsCompleted: 0,
          failedQuestionIds: [],
          favoriteQuestionIds: [],
        },
        createdAt: new Date().toISOString(),
      };

      students.push(newStudent);
      saveStudents(students);

      const res = NextResponse.json({ student: sanitizeStudent(newStudent), success: true });
      res.cookies.set("student_email", email, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 90, // 90 days
        sameSite: "lax",
      });
      return res;
    }

    // 3. LOGIN
    if (action === "login") {
      const email = (body.email || "").toLowerCase().trim();
      const password = body.password || "";

      if (!email || !password) {
        return NextResponse.json({ error: "E-Mail und Passwort erforderlich" }, { status: 400 });
      }

      const found = students.find((s) => s.email.toLowerCase() === email);
      if (!found) {
        return NextResponse.json({ error: "Kein Konto mit dieser E-Mail gefunden" }, { status: 404 });
      }

      const computedHash = hashPassword(password, found.salt);
      if (computedHash !== found.passwordHash) {
        return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
      }

      // Merge local stats if provided
      if (body.stats) {
        found.stats.streak = Math.max(found.stats.streak || 1, body.stats.streak || 1);
        found.stats.testsCompleted = Math.max(found.stats.testsCompleted || 0, body.stats.testsCompleted || 0);
        found.stats.failedQuestionIds = Array.from(new Set([...(found.stats.failedQuestionIds || []), ...(body.stats.failedQuestionIds || [])]));
        found.stats.favoriteQuestionIds = Array.from(new Set([...(found.stats.favoriteQuestionIds || []), ...(body.stats.favoriteQuestionIds || [])]));
      }
      if (body.isPremium) {
        found.isPremium = true;
      }
      saveStudents(students);

      const res = NextResponse.json({ student: sanitizeStudent(found), success: true });
      res.cookies.set("student_email", email, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 90,
        sameSite: "lax",
      });
      return res;
    }

    // 4. SYNC PROGRESS
    if (action === "sync") {
      const emailCookie = req.cookies.get("student_email")?.value;
      const targetEmail = (emailCookie || body.email || "").toLowerCase().trim();
      if (!targetEmail) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
      }

      const found = students.find((s) => s.email.toLowerCase() === targetEmail);
      if (!found) {
        return NextResponse.json({ error: "Schüler nicht gefunden" }, { status: 404 });
      }

      if (body.stats) {
        found.stats = {
          streak: body.stats.streak || found.stats.streak || 1,
          lastStudyDate: body.stats.lastStudyDate || new Date().toISOString(),
          testsCompleted: body.stats.testsCompleted ?? found.stats.testsCompleted ?? 0,
          failedQuestionIds: body.stats.failedQuestionIds || found.stats.failedQuestionIds || [],
          favoriteQuestionIds: body.stats.favoriteQuestionIds || found.stats.favoriteQuestionIds || [],
        };
      }
      if (typeof body.isPremium === "boolean" && body.isPremium) {
        found.isPremium = true;
        if (!found.premiumExpiresAt) {
          found.premiumExpiresAt = new Date(Date.now() + 90 * 86400000).toISOString();
        }
      }

      saveStudents(students);
      return NextResponse.json({ student: sanitizeStudent(found), success: true });
    }

    // 5. RESTORE STRIPE PRO PASS
    if (action === "restore-stripe") {
      const email = (body.email || req.cookies.get("student_email")?.value || "").toLowerCase().trim();
      if (!email || !email.includes("@")) {
        return NextResponse.json({ error: "Bitte gib die E-Mail ein, die du beim Kauf verwendet hast." }, { status: 400 });
      }

      const stripe = getStripe();
      let hasPaid = false;
      let stripeSessionId = "";

      if (stripe) {
        try {
          const sessions = await stripe.checkout.sessions.list({ limit: 100 });
          const match = sessions.data.find(
            (s) =>
              s.payment_status === "paid" &&
              (s.customer_details?.email?.toLowerCase() === email || s.customer_email?.toLowerCase() === email)
          );
          if (match) {
            hasPaid = true;
            stripeSessionId = match.id;
          }
        } catch (err) {
          console.error("Stripe search error:", err);
        }
      }

      // If matched or simulated
      if (hasPaid) {
        let student = students.find((s) => s.email.toLowerCase() === email);
        if (!student) {
          // Create student account automatically for them
          const salt = crypto.randomBytes(16).toString("hex");
          student = {
            id: "stu_" + crypto.randomUUID().slice(0, 12),
            email,
            passwordHash: hashPassword(email.slice(0, 8), salt),
            salt,
            name: email.split("@")[0],
            isPremium: true,
            premiumExpiresAt: new Date(Date.now() + 90 * 86400000).toISOString(),
            stripeSessionId,
            stats: { streak: 1, lastStudyDate: new Date().toISOString(), testsCompleted: 0, failedQuestionIds: [], favoriteQuestionIds: [] },
            createdAt: new Date().toISOString(),
          };
          students.push(student);
        } else {
          student.isPremium = true;
          student.premiumExpiresAt = new Date(Date.now() + 90 * 86400000).toISOString();
          student.stripeSessionId = stripeSessionId;
        }

        saveStudents(students);
        const res = NextResponse.json({
          success: true,
          restored: true,
          student: sanitizeStudent(student),
          message: "Dein AutoTheorie PRO-Pass wurde erfolgreich wiederhergestellt!",
        });
        res.cookies.set("student_email", email, {
          path: "/",
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 90,
          sameSite: "lax",
        });
        return res;
      }

      return NextResponse.json(
        {
          success: false,
          restored: false,
          error: "Keine bezahlte PRO-Bestellung für diese E-Mail auf Stripe gefunden. Bitte überprüfe deine E-Mail-Adresse.",
        },
        { status: 404 }
      );
    }

    // 6. LOGOUT
    if (action === "logout") {
      const res = NextResponse.json({ success: true });
      res.cookies.delete("student_email");
      return res;
    }

    return NextResponse.json({ error: "Ungültige Aktion" }, { status: 400 });
  } catch (error: any) {
    console.error("Auth student API error:", error);
    return NextResponse.json({ error: error?.message || "Serverfehler" }, { status: 500 });
  }
}
