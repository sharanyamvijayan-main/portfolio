import { NextResponse } from "next/server";
import { ABBVIE_COOKIE, abbvieToken, safeEqual, safeNext } from "@/lib/abbvieAccess";

export async function POST(request: Request) {
  const expected = process.env.ABBVIE_PASSWORD;
  const body = await request.json().catch(() => null);
  const attempt = typeof body?.password === "string" ? body.password : "";

  if (!expected || !attempt || !safeEqual(await abbvieToken(attempt), await abbvieToken(expected))) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, next: safeNext(body?.next) });
  res.cookies.set(ABBVIE_COOKIE, await abbvieToken(expected), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
