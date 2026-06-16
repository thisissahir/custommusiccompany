"use client";
import React from "react";

/**
 * Input — quiet text field defined by a hairline underline,
 * which warms to brass on focus. Optional bordered variant.
 */
export function Input({
  label,
  variant = "underline",
  tone = "light",
  type = "text",
  id,
  style,
  ...rest
}) {
  const inverse = tone === "dark";
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;

  const text = inverse ? "var(--tcmc-cream)" : "var(--tcmc-ink)";
  const hair = inverse ? "var(--border-on-ink)" : "var(--border-hair)";

  const fieldBase = {
    width: "100%",
    fontFamily: "var(--font-sans)",
    fontSize: "14.5px",
    color: text,
    background: "transparent",
    border: "none",
    outline: "none",
    padding: variant === "bordered" ? "12px 14px" : "10px 0",
    transition: "border-color var(--dur-base) var(--ease-soft)",
  };

  const fieldVariant =
    variant === "bordered"
      ? { border: `1px solid ${focus ? "var(--tcmc-brass)" : hair}`, borderRadius: "var(--radius-sm)" }
      : { borderBottom: `1px solid ${focus ? "var(--tcmc-brass)" : hair}` };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: inverse ? "var(--tcmc-on-ink-faint)" : "var(--tcmc-faint)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ ...fieldBase, ...fieldVariant }}
        {...rest}
      />
    </div>
  );
}
