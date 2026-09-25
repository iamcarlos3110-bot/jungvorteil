import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- Admin protection ---
  if (pathname.startsWith("/admin")) {
    // Allow /admin/login always
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Check for admin session cookie
    const sessionCookie =
      request.cookies.get("sb-access-token") ||
      request.cookies.get("sb-refresh-token") ||
      request.cookies.get(
        `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL?.split("//")[1]?.split(".")[0]}-auth-token`
      );

    if (!sessionCookie) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirected", "1");
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  // --- i18n for public routes ---
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Skip internals
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|manifest.json|icons|images).*)",
  ],
};
