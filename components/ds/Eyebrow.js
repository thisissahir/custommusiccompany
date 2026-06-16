/**
 * Eyebrow — the signature wide-tracked uppercase label that opens a section.
 */
export function Eyebrow({ children, tone = "default", as: Tag = "span", style, ...rest }) {
  const color =
    tone === "inverse" ? "var(--tcmc-on-ink-faint)" :
    tone === "brass" ? "var(--tcmc-brass)" :
    "var(--tcmc-faint)";
  return (
    <Tag
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "10.5px",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.36em",
        textTransform: "uppercase",
        color,
        display: "block",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
