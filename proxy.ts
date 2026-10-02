import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ABBVIE_COOKIE, abbvieToken, safeEqual } from "@/lib/abbvieAccess";

// Runs before the three AbbVie case studies render. No valid cookie, no page.
export async function proxy(request: NextRequest) {
  const password = process.env.ABBVIE_PASSWORD;
  const cookie = request.cookies.get(ABBVIE_COOKIE)?.value;

  // Fails closed: if the env var is missing, nothing unlocks.
  if (password && cookie && safeEqual(cookie, await abbvieToken(password))) {
    return NextResponse.next();
  }

  const url = new URL("/work/abbvie/locked", request.url);
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

// Must be a static literal — Next can't read a matcher built from imports.
// Keep in sync with ABBVIE_LOCKED_SLUGS.
export const config = {
  matcher: [
    "/work/abbvie/celebration-of-technology/:path*",
    "/work/abbvie/arc/:path*",
    "/work/abbvie/ai-learning-hub/:path*",
  ],
};
