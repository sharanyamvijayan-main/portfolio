export default function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  // Two-tone monogram — transparent background. Colours flip for the
  // dark-hero nav so both strokes stay legible.
  const primary = dark ? "#8578E6" : "#29149B";
  const secondary = dark ? "#F3EEE3" : "#191919";

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 964 534"
        className="h-6 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M268.756 392.846C290.728 392.846 301.354 382.175 301.354 364.615C301.354 347.055 290.728 337.149 268.036 337.149H150.339C67.3578 337.149 0 276.14 0 168.575C0 45.0253 78.7042 0 158.129 0H451.694V141.109H198.517C179.381 141.109 165.918 148.719 165.918 167.809C165.918 186.9 179.381 196.04 198.517 196.04H309.144C404.147 196.04 467.273 256.284 467.273 363.849C467.273 465.291 396.358 533.955 304.191 533.955H7.78938L9.90557 392.846H268.756Z"
          fill={primary}
          style={{ transition: "fill 300ms" }}
        />
        <path
          d="M784.562 0L694.467 392.891H688.838L607.568 38.6317C602.345 16.029 583.479 0.0900506 561.777 0.0900506H362.945V141.064H434.896C447.548 141.064 458.669 150.159 462.046 163.262L557.545 533.955H825.625L963.177 0H784.517H784.562Z"
          fill={secondary}
          style={{ transition: "fill 300ms" }}
        />
      </svg>
    </span>
  );
}
