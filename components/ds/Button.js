"use client";
import React from "react";

/**
 * Button — The Custom Music Company.
 * Primary = indigo fill with cream text; secondary = hairline outline;
 * ghost = quiet text with a brass underline on hover;
 * brass = the gold accent CTA (brass fill, deep-indigo text).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  tone = "light",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 18px", fontSize: "11px", letterSpacing: "0.18em" },
    md: { padding: "13px 28px", fontSize: "11.5px", letterSpacing: "0.2em" },
    lg: { padding: "17px 38px", fontSize: "12px", letterSpacing: "0.22em" },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition:
      "background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft), opacity var(--dur-fast)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
  };

  const onInk = tone === "dark";

  const variants = {
    primary: {
      background: onInk ? "var(--tcmc-cream)" : "var(--tcmc-indigo)",
      color: onInk ? "var(--tcmc-indigo)" : "var(--tcmc-cream)",
      borderColor: onInk ? "var(--tcmc-cream)" : "var(--tcmc-indigo)",
    },
    secondary: {
      background: "transparent",
      color: onInk ? "var(--tcmc-cream)" : "var(--tcmc-ink)",
      borderColor: onInk ? "var(--border-on-ink)" : "var(--border-hair)",
    },
    ghost: {
      background: "transparent",
      color: onInk ? "var(--tcmc-on-ink-muted)" : "var(--tcmc-muted)",
      borderColor: "transparent",
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    brass: {
      background: "var(--tcmc-brass)",
      color: "var(--tcmc-indigo-deep)",
      borderColor: "var(--tcmc-brass)",
    },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant, onInk) : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

function hoverFor(variant, onInk) {
  if (variant === "primary") {
    return { background: onInk ? "#FFFFFF" : "var(--tcmc-indigo-deep)", borderColor: onInk ? "#FFFFFF" : "var(--tcmc-indigo-deep)" };
  }
  if (variant === "secondary") {
    return { borderColor: "var(--tcmc-brass)", color: onInk ? "#FFFFFF" : "var(--tcmc-ink)" };
  }
  if (variant === "brass") {
    return { background: "#A98A4E", borderColor: "#A98A4E" };
  }
  return { color: onInk ? "var(--tcmc-cream)" : "var(--tcmc-ink)", boxShadow: "inset 0 -1px 0 var(--tcmc-brass)" };
}
