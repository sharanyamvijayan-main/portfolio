// Shared by proxy.ts (gate) and the unlock route handler (sets the cookie).
// Uses Web Crypto only, so it runs in any Next runtime.
export const ABBVIE_COOKIE = "abbvie_access";
export const ABBVIE_LOCKED_SLUGS = ["celebration-of-technology", "arc", "ai-learning-hub"] as const;

// The cookie holds a hash derived from the password, never the password itself.
// Changing ABBVIE_PASSWORD invalidates every previously issued cookie.
export async function abbvieToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`abbvie-case-studies:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Only allow redirecting back into one of the locked case studies.
export function safeNext(next: string | null | undefined): string {
  const fallback = "/work/abbvie";
  if (!next) return fallback;
  const ok = ABBVIE_LOCKED_SLUGS.some((s) => next === `/work/abbvie/${s}` || next.startsWith(`/work/abbvie/${s}/`));
  return ok ? next : fallback;
}
