"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";

const NAV = [
  { href: "/", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader({ tone = "light" }) {
  const pathname = usePathname();
  const inverse = tone === "dark";

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "26px 48px",
        borderBottom: `1px solid ${inverse ? "var(--border-on-ink)" : "var(--border-hair)"}`,
        background: inverse ? "var(--tcmc-indigo)" : "var(--tcmc-paper)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link href="/" style={{ display: "inline-flex" }} aria-label="The Custom Music Company — home">
        <Logo variant="horizontal" tone={inverse ? "inverse" : "ink"} size={30} />
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {NAV.map(({ href, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "6px 0",
                color: inverse
                  ? active ? "var(--tcmc-cream)" : "var(--tcmc-on-ink-muted)"
                  : active ? "var(--tcmc-ink)" : "var(--tcmc-muted)",
                borderBottom: `1px solid ${active ? "var(--tcmc-brass)" : "transparent"}`,
                transition: "color var(--dur-base) var(--ease-soft)",
              }}
            >
              {label}
            </Link>
          );
        })}
        <Link href="/brief" style={{ display: "inline-flex" }}>
          <Button size="sm" variant="brass">Get in touch</Button>
        </Link>
      </nav>
    </header>
  );
}
