import { Logo } from "@/components/ds/Logo";

export function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-hair)",
        padding: "56px 48px",
        color: "var(--tcmc-faint)",
        fontSize: 12,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
        <Logo variant="mark" size={18} />
        The Custom Music Company · Composed by musicians, delivered without the wait
      </span>
      <span>Raja, CEO · Sahir, Music Director</span>
    </footer>
  );
}
