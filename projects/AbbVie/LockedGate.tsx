"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const RB = "var(--font-roboto)";
const NR = "var(--font-newsreader)";
const INK = "#26262A";
const BODY = "#4A4A46";
const BLUE = "#0066F5";

export function LockedGate({ next, title, requestHref }: { next: string; title: string; requestHref: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const res = await fetch("/api/abbvie-unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, next }),
    }).catch(() => null);
    if (res?.ok) {
      const data = await res.json();
      router.push(data.next);
      router.refresh();
    } else {
      setError(true);
      setBusy(false);
    }
  }

  return (
    <div className="max-w-[460px] w-full mx-auto px-6 text-center">
      <div
        className="mx-auto mb-6 flex items-center justify-center rounded-full"
        style={{ width: 52, height: 52, background: "rgba(0,102,245,0.1)" }}
        aria-hidden
      >
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="9" width="16" height="11" rx="2.5" />
          <path d="M6 9V6a4 4 0 0 1 8 0v3" />
        </svg>
      </div>
      <p className="mb-2" style={{ fontFamily: RB, fontWeight: 500, fontSize: 10, letterSpacing: "0.15em", color: BLUE }}>
        PASSWORD PROTECTED
      </p>
      <h1 className="mb-3" style={{ fontFamily: NR, fontWeight: 400, fontSize: 32, lineHeight: "1.24em", color: INK }}>
        {title}
      </h1>
      <p className="mb-8" style={{ fontFamily: RB, fontSize: 13, lineHeight: "1.76em", color: BODY }}>
        This case study contains internal work and is shared on request. Enter the password to view it.
      </p>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="off"
          autoFocus
          aria-label="Password"
          aria-invalid={error}
          className="w-full rounded-full px-5 py-3 outline-none"
          style={{ fontFamily: RB, fontSize: 13, color: INK, border: `1px solid ${error ? "#C0392B" : "#D9D9D2"}`, background: "#FFF" }}
        />
        {error && (
          <p role="alert" style={{ fontFamily: RB, fontSize: 12, color: "#C0392B" }}>
            That password didn&rsquo;t work. Try again or request access below.
          </p>
        )}
        <button
          type="submit"
          disabled={busy || !password}
          className="rounded-full px-5 py-3 transition-opacity hover:opacity-85 disabled:opacity-50"
          style={{ fontFamily: RB, fontWeight: 500, fontSize: 11, letterSpacing: "0.1364em", color: "#FFF", background: BLUE }}
        >
          {busy ? "CHECKING…" : "UNLOCK"}
        </button>
      </form>

      <p className="mt-8" style={{ fontFamily: RB, fontSize: 13, color: BODY }}>
        Don&rsquo;t have the password?{" "}
        <a href={requestHref} className="underline underline-offset-4 hover:opacity-70" style={{ color: BLUE }}>
          Request access
        </a>
      </p>
    </div>
  );
}
