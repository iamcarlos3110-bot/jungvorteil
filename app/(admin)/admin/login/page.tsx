// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("E-Mail oder Passwort falsch. Bitte erneut versuchen.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-[#3F5E39] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <span className="text-white text-2xl font-bold">JungVorteil</span>
          </div>
          <p className="text-gray-400 text-sm">Admin Panel</p>
        </div>

        {/* Card */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
          <h1 className="text-white text-xl font-bold mb-6 text-center">
            Anmelden
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1.5">
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3F5E39] transition-colors"
                placeholder="admin@jungvorteil.ch"
                id="admin-email"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-1.5">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3F5E39] transition-colors"
                placeholder="••••••••"
                id="admin-password"
              />
            </div>

            {error && (
              <div className="bg-red-900/30 border border-red-700 text-red-400 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3F5E39] hover:bg-[#324B2D] text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-60 cursor-pointer shadow-sm"
              id="admin-login-btn"
            >
              {loading ? "Anmelden..." : "Anmelden"}
            </button>
          </form>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">
          © {new Date().getFullYear()} JungVorteil Admin
        </p>
      </div>
    </div>
  );
}
