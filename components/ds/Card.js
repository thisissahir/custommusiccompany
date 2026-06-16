"use client";
import React from "react";

/**
 * Card — a flat, hairline-defined surface. No drop shadows by default;
 * the brand defines surfaces with hairlines, not elevation.
 */
export function Card({
  children,
  tone = "paper",
  padding = "32px",
  interactive = false,
  style,
  ...rest
}) {
  const ink = tone === "ink";
  const [hover, setHover] = React.useState(false);

  const base = {
    background: ink ? "var(--tcmc-indigo)" : tone === "sunken" ? "var(--surface-sunken)" : "var(--tcmc-paper)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: ink ? "var(--border-on-ink)" : "var(--border-hair)",
    borderRadius: "var(--radius-sm)",
    padding,
    color: ink ? "var(--tcmc-cream)" : "var(--tcmc-ink)",
    transition: "border-color var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)",
    ...(interactive ? { cursor: "pointer" } : null),
    ...(interactive && hover ? { borderColor: "var(--tcmc-brass)" } : null),
    ...style,
  };

  return (
    <div
      style={base}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
