// Small tool-badge marks for the "Built with" row. Figma's mark uses its
// well-known five-shape logo; Figma Make is represented as that same mark
// plus a small AI sparkle badge (it doesn't have a distinct public icon of
// its own yet); Gemini uses its four-point sparkle mark.

export function FigmaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size * (38 / 57)} height={size} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

export function FigmaMakeIcon({ size = 18 }: { size?: number }) {
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <FigmaIcon size={size * 0.78} />
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 24 24"
        className="absolute -right-0.5 -bottom-0.5"
        style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.6))" }}
      >
        <path d="M12 0c0 6-6 12-12 12 6 0 12 6 12 12 0-6 6-12 12-12-6 0-12-6-12-12z" fill="#F3F3F3" />
      </svg>
    </span>
  );
}

export function GeminiIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" fill="url(#gemini-grad)" />
    </svg>
  );
}
