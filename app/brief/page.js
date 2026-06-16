"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Button } from "@/components/ds/Button";
import { Input } from "@/components/ds/Input";
import { Divider } from "@/components/ds/Divider";

const NEEDS = ["Sonic branding", "Brand DNA sound", "Music & BGM", "Film score", "Not sure yet"];

export default function BriefPage() {
  const router = useRouter();
  const [need, setNeed] = React.useState("Sonic branding");
  const [sent, setSent] = React.useState(false);

  if (sent) {
    return (
      <section style={{ maxWidth: 620, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
        <Divider variant="axis" style={{ maxWidth: 280, margin: "0 auto 40px" }} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: 40, letterSpacing: "-0.01em", margin: 0 }}>
          The brief&apos;s <em style={{ fontStyle: "italic", fontWeight: 300 }}>in</em>.
        </h1>
        <p style={{ color: "var(--tcmc-muted)", fontSize: 15, lineHeight: 1.65, margin: "18px auto 0", maxWidth: "44ch" }}>
          We&apos;ll be back within a day with first ideas and a plan. Original music, with the hand still on it.
        </p>
        <div style={{ marginTop: 32 }}>
          <Button variant="secondary" onClick={() => { setSent(false); router.push("/"); }}>Back to studio</Button>
        </div>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 620, margin: "0 auto", padding: "80px 40px 110px" }}>
      <Eyebrow>Start a project</Eyebrow>
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.01em", margin: "16px 0 0" }}>
        Tell us about the brand.
      </h1>
      <p style={{ color: "var(--tcmc-muted)", fontSize: 15, lineHeight: 1.65, margin: "14px 0 0", maxWidth: "48ch" }}>
        A few lines is plenty to start. We read every brief ourselves.
      </p>

      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 30 }}>
        <div className="tcmc-name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
          <Input label="Your name" placeholder="Jane Composer" required />
          <Input label="Email" type="email" placeholder="you@brand.com" required />
        </div>
        <Input label="Brand / company" placeholder="The brand we'll be scoring" />

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tcmc-faint)" }}>What you need</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {NEEDS.map((n) => (
              <button type="button" key={n} onClick={() => setNeed(n)}
                style={{ cursor: "pointer", background: "transparent", padding: "7px 14px", borderRadius: "var(--radius-xs)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase",
                  border: `1px solid ${need === n ? "var(--tcmc-brass)" : "var(--border-hair)"}`,
                  color: need === n ? "var(--tcmc-ink)" : "var(--tcmc-muted)",
                  transition: "border-color var(--dur-base) var(--ease-soft)" }}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <Input label="Anything else" placeholder="Timeline, references, where it'll play…" />

        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 8, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" type="submit">Send the brief</Button>
          <span style={{ fontSize: 12, color: "var(--tcmc-faint)" }}>Composed by musicians · Delivered without the wait</span>
        </div>
      </form>
    </section>
  );
}
