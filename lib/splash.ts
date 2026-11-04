// Session key for the splash. Read and set by the inline head script in
// layout.tsx (server-rendered), so it lives outside any client component.
export const SPLASH_KEY = "sv-splash-seen";

// True while the intro splash still covers the page (it starts fading once
// Splash.tsx adds .splash-leaving).
export function splashCovering(): boolean {
  const root = document.documentElement;
  return root.classList.contains("splash-active") && !root.classList.contains("splash-leaving");
}

// Runs `cb` as soon as the splash starts fading, or right away if it isn't up.
// Returns a cancel function. Client-only.
export function whenSplashDone(cb: () => void): () => void {
  if (!splashCovering()) {
    cb();
    return () => {};
  }
  const mo = new MutationObserver(() => {
    if (splashCovering()) return;
    mo.disconnect();
    cb();
  });
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => mo.disconnect();
}
