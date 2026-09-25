// app/admin/layout.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  Tag,
  Building2,
  Grid3X3,
  MapPin,
  Database,
  TrendingUp,
  Megaphone,
  Settings,
  LogOut,
  Menu,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/angebote", label: "Angebote", icon: Tag },
  { href: "/admin/marken", label: "Marcas", icon: Building2 },
  { href: "/admin/kategorien", label: "Categorías", icon: Grid3X3 },
  { href: "/admin/staedte", label: "Ciudades", icon: MapPin },
  { href: "/admin/quellen", label: "Fuentes", icon: Database },
  { href: "/admin/clicks", label: "Clicks & Stats", icon: TrendingUp },
  { href: "/admin/ads", label: "Publicidad (Ads)", icon: Megaphone },
  { href: "/admin/einstellungen", label: "Configuración", icon: Settings },
];

interface SidebarContentProps {
  pathname: string;
  userEmail: string | null;
  onNavigate: () => void;
  onLogout: () => void;
}

function SidebarContent({ pathname, userEmail, onNavigate, onLogout }: SidebarContentProps) {
  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-4 py-5 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#3F5E39] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">J</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">JungVorteil</p>
            <p className="text-gray-500 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href, item.exact);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-[#3F5E39] text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
              {active && <ChevronRight className="w-3 h-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-gray-800">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {userEmail?.charAt(0).toUpperCase() ?? "A"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium truncate">{userEmail}</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-900/30 hover:text-red-400 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const isLoginPage = pathname === "/admin/login";
  const [loading, setLoading] = useState(() => !isLoginPage);
  const supabase = createClient();

  useEffect(() => {
    if (isLoginPage) return;

    let isMounted = true;

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!isMounted) return;
      if (!user) {
        router.replace("/admin/login");
      } else {
        setUserEmail(user.email ?? null);
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && !isLoginPage) {
        setUserEmail(null);
        router.replace("/admin/login");
      } else if (session?.user) {
        setUserEmail(session.user.email ?? null);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [isLoginPage, pathname, router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (isLoginPage) {
    return (
      <html lang="es">
        <body className="bg-gray-950 min-h-screen">{children}</body>
      </html>
    );
  }

  if (loading) {
    return (
      <html lang="es">
        <body className="bg-gray-950 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-[#3F5E39] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm font-medium">Cargando panel...</p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body className="bg-gray-950 min-h-screen">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - mobile */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform lg:hidden",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SidebarContent
            pathname={pathname}
            userEmail={userEmail}
            onNavigate={() => setSidebarOpen(false)}
            onLogout={handleLogout}
          />
        </div>

        {/* Sidebar - desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-64 lg:flex lg:flex-col bg-gray-900 border-r border-gray-800">
          <SidebarContent
            pathname={pathname}
            userEmail={userEmail}
            onNavigate={() => setSidebarOpen(false)}
            onLogout={handleLogout}
          />
        </div>

        {/* Main content */}
        <div className="lg:pl-64">
          {/* Top bar */}
          <div className="sticky top-0 z-30 bg-gray-950 border-b border-gray-800 px-4 py-3 flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex-1" />
            <Link
              href="/de"
              target="_blank"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Ver sitio web →
            </Link>
          </div>

          {/* Page content */}
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
