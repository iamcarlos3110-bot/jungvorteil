// app/admin/page.tsx
// Admin Dashboard
import { createClient } from "@/lib/supabase/server";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { TrendingUp, Tag, Building2, MousePointerClick, Eye, AlertTriangle } from "lucide-react";

async function getDashboardStats() {
  const supabase = await createClient();

  const [activeOffers, expiredOffers, totalBrands, totalClicks, totalViews, topOffers] =
    await Promise.all([
      supabase
        .from("offers")
        .select("id", { count: "exact", head: true })
        .eq("status", "published"),
      supabase
        .from("offers")
        .select("id", { count: "exact", head: true })
        .eq("status", "expired"),
      supabase
        .from("brands")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("click_events")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("offer_views")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("offers")
        .select("id, slug, title_de, view_count, click_count, status")
        .eq("status", "published")
        .order("view_count", { ascending: false })
        .limit(5),
    ]);

  return {
    activeOffers: activeOffers.count ?? 0,
    expiredOffers: expiredOffers.count ?? 0,
    totalBrands: totalBrands.count ?? 0,
    totalClicks: totalClicks.count ?? 0,
    totalViews: totalViews.count ?? 0,
    topOffers: topOffers.data ?? [],
  };
}

async function getRecentOffers() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("offers")
    .select("id, slug, title_de, status, created_at, is_demo")
    .order("created_at", { ascending: false })
    .limit(10);
  return data ?? [];
}

export default async function AdminDashboard() {
  const [stats, recentOffers] = await Promise.all([
    getDashboardStats(),
    getRecentOffers(),
  ]);

  const statCards = [
    { label: "Angebote aktiv", value: stats.activeOffers, icon: Tag, color: "text-[#3F5E39]", bg: "bg-[#3F5E39]/20" },
    { label: "Angebote abgelaufen", value: stats.expiredOffers, icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-900/20" },
    { label: "Marken", value: stats.totalBrands, icon: Building2, color: "text-blue-400", bg: "bg-blue-900/20" },
    { label: "Total Clicks", value: stats.totalClicks.toLocaleString("de-CH"), icon: MousePointerClick, color: "text-green-400", bg: "bg-green-900/20" },
    { label: "Total Vistas", value: stats.totalViews.toLocaleString("de-CH"), icon: Eye, color: "text-pink-400", bg: "bg-pink-900/20" },
    { label: "CTR", value: stats.totalViews > 0 ? `${((stats.totalClicks / stats.totalViews) * 100).toFixed(1)}%` : "—", icon: TrendingUp, color: "text-cyan-400", bg: "bg-cyan-900/20" },
  ];

  const statusColors: Record<string, string> = {
    published: "bg-green-900/30 text-green-400",
    draft: "bg-gray-800 text-gray-400",
    pending: "bg-amber-900/30 text-amber-400",
    verified: "bg-blue-900/30 text-blue-400",
    expired: "bg-red-900/30 text-red-400",
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Bienvenido al panel de JungVorteil</p>
        </div>
        <Link
          href="/admin/angebote/new"
          className="bg-[#3F5E39] hover:bg-[#324B2D] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          + Nueva oferta
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-gray-900/90 rounded-2xl border border-gray-700/80 p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/60 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-2">{card.label}</p>
                  <p className="text-white text-2xl font-bold">{card.value}</p>
                </div>
                <div className={`p-2.5 rounded-xl ${card.bg}`}>
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Offers */}
        <div className="bg-gray-900/90 rounded-2xl border border-gray-700/80 p-6 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-white font-bold mb-4">Top 5 Angebote (nach Vistas)</h2>
          <div className="space-y-3">
            {stats.topOffers.length === 0 && (
              <p className="text-gray-500 text-sm">Noch keine Daten.</p>
            )}
            {stats.topOffers.map((offer, i) => (
              <div key={offer.id} className="flex items-center gap-3 p-2 rounded-xl bg-gray-850 border border-gray-800/80 hover:border-gray-700 transition-colors">
                <span className="text-gray-500 text-sm font-mono w-4">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{offer.title_de}</p>
                  <p className="text-gray-400 text-xs">{offer.view_count} Vistas · {offer.click_count} Clicks</p>
                </div>
                <Link
                  href={`/admin/angebote/${offer.id}`}
                  className="text-[#537A4B] text-xs hover:text-white"
                >
                  Editar
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Offers */}
        <div className="bg-gray-900/90 rounded-2xl border border-gray-700/80 p-6 shadow-lg hover:shadow-xl transition-all">
          <h2 className="text-white font-bold mb-4">Últimas ofertas</h2>
          <div className="space-y-3">
            {recentOffers.map((offer) => (
              <div key={offer.id} className="flex items-center gap-3 p-2 rounded-xl bg-gray-850 border border-gray-800/80 hover:border-gray-700 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-sm font-medium truncate">{offer.title_de}</p>
                    {offer.is_demo && (
                      <span className="bg-red-900/30 text-red-400 text-xs px-1.5 py-0.5 rounded font-medium">DEMO</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs">{formatDate(offer.created_at)}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[offer.status] ?? ""}`}>
                  {offer.status}
                </span>
                <Link
                  href={`/admin/angebote/${offer.id}`}
                  className="text-[#537A4B] text-xs hover:text-white flex-shrink-0"
                >
                  Editar
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/admin/angebote"
            className="mt-4 block text-center text-[#537A4B] text-sm hover:text-white transition-colors"
          >
            Ver todas las ofertas →
          </Link>
        </div>
      </div>
    </div>
  );
}
