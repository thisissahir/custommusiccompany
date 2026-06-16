/**
 * Tag — a small tracked label for services, genres, statuses.
 * Quiet by default; "brass" outline for the single accent moment.
 */
export function Tag({ children, variant = "outline", tone = "default", style, ...rest }) {
  const inverse = tone === "inverse";
  const variants = {
    outline: {
      border: `1px solid ${inverse ? "var(--border-on-ink)" : "var(--border-hair)"}`,
      color: inverse ? "var(--tcmc-on-ink-muted)" : "var(--tcmc-muted)",
      background: "transparent",
    },
    brass: {
      border: "1px solid var(--tcmc-brass-axis)",
      color: "var(--tcmc-brass)",
      background: "transparent",
    },
    solid: {
      border: "1px solid transparent",
      color: inverse ? "var(--tcmc-indigo)" : "var(--tcmc-cream)",
      background: inverse ? "var(--tcmc-cream)" : "var(--tcmc-indigo)",
    },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        fontSize: "10px",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-xs)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
