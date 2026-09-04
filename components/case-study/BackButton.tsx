import Link from "next/link";

export function BackButton() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body transition-colors"
        style={{
          background: "rgba(25,25,25,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        ← Back to work
      </Link>
    </div>
  );
}
