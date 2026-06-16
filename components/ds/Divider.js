/**
 * Divider — a hairline rule. "axis" renders the brass measuring-axis motif:
 * a quiet vertical rhythm derived from the logo's construction lines.
 */
export function Divider({ variant = "line", tone = "light", style, ...rest }) {
  const inverse = tone === "dark";
  const hair = inverse ? "var(--border-on-ink)" : "var(--border-hair)";

  if (variant === "axis") {
    const lines = Array.from({ length: 9 }, (_, i) => 60 + i * 60);
    return (
      <div style={{ width: "100%", lineHeight: 0, ...style }} {...rest}>
        <svg viewBox="0 0 600 60" preserveAspectRatio="none" width="100%" height="44" aria-hidden="true">
          <g stroke="var(--tcmc-brass)" strokeWidth="1" opacity="0.35">
            {lines.map((x) => (
              <line key={x} x1={x} y1="8" x2={x} y2="52" />
            ))}
          </g>
          <path d="M300,12 C288,20 288,32 300,40 C312,48 312,52 300,52" fill="none" stroke={inverse ? "var(--tcmc-cream)" : "var(--tcmc-indigo)"} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <hr
      style={{
        border: "none",
        borderTop: `1px solid ${hair}`,
        width: "100%",
        margin: 0,
        ...style,
      }}
      {...rest}
    />
  );
}
