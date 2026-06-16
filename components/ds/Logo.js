const FOLLOWER = "M80,64 C58,74 58,90 80,101.3 C102,112 102,128 80,138.7 C58,149 58,165 80,176";
const LEADER = "M80,64 C102,74 102,90 80,101.3 C58,112 58,128 80,138.7 C102,149 102,165 80,176";

/**
 * Logo — the double-helix mark and its lock-ups.
 * Heavier line leads (human), lighter line follows (tool), brass axis measures.
 */
export function Logo({
  variant = "mark",
  tone = "ink",
  axis = false,
  size = 48,
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  const strokeColor = inverse ? "var(--tcmc-cream)" : "var(--tcmc-indigo)";
  const axisColor = inverse ? "var(--tcmc-brass-strong)" : "var(--tcmc-brass-axis)";
  const wordTone = inverse ? "var(--tcmc-cream)" : "var(--tcmc-ink)";
  const eyebrowTone = inverse ? "var(--tcmc-on-ink-faint)" : "var(--tcmc-faint)";

  const Mark = ({ w }) => (
    <svg viewBox="0 0 160 240" width={w} fill="none" style={{ display: "block", flex: "none" }} aria-hidden="true">
      {axis && (
        <>
          <line x1="72" y1="22" x2="72" y2="218" stroke={axisColor} strokeWidth="1" />
          <line x1="88" y1="22" x2="88" y2="218" stroke={axisColor} strokeWidth="1" />
        </>
      )}
      <path d={FOLLOWER} stroke={strokeColor} strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      <path d={LEADER} stroke={strokeColor} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );

  const eyebrowCss = {
    fontFamily: "var(--font-serif)",
    fontWeight: 300,
    fontSize: "10.5px",
    letterSpacing: "0.42em",
    textTransform: "uppercase",
    color: eyebrowTone,
    display: "block",
  };
  const nameCss = {
    fontFamily: "var(--font-serif)",
    fontWeight: 300,
    letterSpacing: "0.04em",
    color: wordTone,
    display: "block",
    lineHeight: 1,
  };

  if (variant === "mark") {
    return <div style={{ display: "inline-flex", ...style }} {...rest}><Mark w={size} /></div>;
  }

  if (variant === "wordmark") {
    return (
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: size, letterSpacing: "0.08em", color: wordTone, ...style }} {...rest}>
        tcmc
      </div>
    );
  }

  if (variant === "avatar") {
    return (
      <div style={{ width: size, height: size, borderRadius: "var(--radius-round)", border: `1px solid ${inverse ? "var(--border-on-ink)" : "var(--border-hair)"}`, display: "inline-flex", alignItems: "center", justifyContent: "center", ...style }} {...rest}>
        <Mark w={size * 0.42} />
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "18px", ...style }} {...rest}>
        <Mark w={size * 0.8} />
        <div style={{ width: 1, height: size, background: "currentColor", opacity: 0.18, color: wordTone }} />
        <div style={{ textAlign: "left" }}>
          <span style={{ ...eyebrowCss, fontSize: "9.5px", letterSpacing: "0.4em" }}>The Custom</span>
          <span style={{ ...nameCss, fontSize: size * 0.4, marginTop: 5 }}>Music Company</span>
        </div>
      </div>
    );
  }

  // stacked (default lock-up)
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "18px", ...style }} {...rest}>
      <Mark w={size} />
      <div style={{ textAlign: "center" }}>
        <span style={{ ...eyebrowCss }}>The Custom</span>
        <span style={{ ...nameCss, fontSize: size * 0.52, marginTop: 9 }}>Music Company</span>
      </div>
    </div>
  );
}
