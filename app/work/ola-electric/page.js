"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Tag } from "@/components/ds/Tag";
import { Card } from "@/components/ds/Card";
import { Reveal } from "@/components/motion";

const DELIVERABLES = [
  { t: "Brand anthem", d: "A 90-second original theme — the emotional centre everything else is cut from." },
  { t: "Sonic logo", d: "A 2-second signature for product start-ups, app opens, and end-frames." },
  { t: "Adaptive stems", d: "Stem-separated cuts at 6s / 15s / 30s / 60s for every channel." },
  { t: "Motor texture bed", d: "A loopable ambient layer built from the vehicle's own recorded hum." },
];

// A fixed pseudo-waveform (deterministic so it doesn't reflow on re-render).
const BARS = Array.from({ length: 76 }, (_, i) =>
  0.18 + 0.82 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21) * Math.sin(i * 0.09 + 1))
);

export default function ProjectPage() {
  const router = useRouter();
  const [progress, setProgress] = React.useState(0.32);
  const [playing, setPlaying] = React.useState(true);

  return (
    <div>
      {/* Hero on ink */}
      <section style={{ background: "var(--tcmc-indigo)", padding: "80px 40px 96px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => router.push("/work")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--tcmc-on-ink-muted)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", padding: 0 }}>← All work</button>
            <Tag variant="brass" tone="inverse">Brand DNA sound</Tag>
          </Reveal>
          <Reveal as="h1" delay={80} style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(32px,5.5vw,58px)", letterSpacing: "-0.01em", lineHeight: 1.05, margin: "26px 0 0", color: "var(--tcmc-cream)", maxWidth: "16ch" }}>
            Ola Electric — <em style={{ fontStyle: "italic", fontWeight: 300 }}>Forward</em>
          </Reveal>
          <Reveal as="p" delay={150} style={{ color: "var(--tcmc-on-ink-muted)", fontSize: 15.5, lineHeight: 1.65, maxWidth: "48ch", margin: "20px 0 0" }}>
            A brand anthem for a company whose whole promise is motion — built from the sound of their own motors, then lifted into melody.
          </Reveal>

          {/* Player */}
          <Reveal delay={220} style={{ marginTop: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              <button onClick={() => setPlaying((p) => !p)} style={{ flex: "none", width: 52, height: 52, borderRadius: "var(--radius-round)", border: "1px solid var(--tcmc-brass-axis)", background: "transparent", cursor: "pointer", color: "var(--tcmc-cream)", display: "inline-flex", alignItems: "center", justifyContent: "center" }} aria-label={playing ? "Pause" : "Play"}>
                {playing
                  ? <svg width="14" height="16" viewBox="0 0 14 16"><rect x="0" width="4.5" height="16" fill="currentColor" /><rect x="9.5" width="4.5" height="16" fill="currentColor" /></svg>
                  : <svg width="14" height="16" viewBox="0 0 14 16"><path d="M0 0 L14 8 L0 16 Z" fill="currentColor" /></svg>}
              </button>
              <div
                onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setProgress(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))); }}
                style={{ flex: 1, display: "flex", alignItems: "center", gap: 2, height: 56, cursor: "pointer" }}
              >
                {BARS.map((h, i) => {
                  const on = i / BARS.length <= progress;
                  return <div key={i} style={{ flex: 1, height: `${h * 100}%`, background: on ? "var(--tcmc-brass)" : "var(--border-on-ink)", transition: "background 120ms linear" }} />;
                })}
              </div>
              <span style={{ fontSize: 12, color: "var(--tcmc-on-ink-muted)", fontVariantNumeric: "tabular-nums", flex: "none" }}>1:48</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brief / approach */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px", borderBottom: "1px solid var(--border-hair)" }}>
        <div className="tcmc-brief-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
          <Reveal>
            <Eyebrow>The brief</Eyebrow>
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 18, fontSize: 13.5, color: "var(--tcmc-muted)" }}>
              <div><span style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tcmc-faint)", marginBottom: 5 }}>Client</span>Ola Electric</div>
              <div><span style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tcmc-faint)", marginBottom: 5 }}>Year</span>2025</div>
              <div><span style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--tcmc-faint)", marginBottom: 5 }}>Delivered in</span>8 days</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px,3vw,30px)", letterSpacing: "-0.01em", margin: 0 }}>Make the future audible.</h2>
            <p style={{ color: "var(--tcmc-muted)", fontSize: 15, lineHeight: 1.7, margin: "20px 0 0" }}>
              Electric means the engine note is gone — and with it, a century of how a vehicle announces itself. We recorded Ola&apos;s actual motor whine and tyre hum, tuned those frequencies to a key, and wrote a melody that rises through them. The brand doesn&apos;t sit on top of a track; the track is made of the brand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px" }}>
        <Reveal><Eyebrow>What we delivered</Eyebrow></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 44 }}>
          {DELIVERABLES.map((d, i) => (
            <Reveal key={i} delay={(i % 2) * 90}>
              <Card padding="28px" style={{ height: "100%" }}>
                <Tag variant="outline">{String(i + 1).padStart(2, "0")}</Tag>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 20, margin: "16px 0 10px" }}>{d.t}</h3>
                <p style={{ color: "var(--tcmc-muted)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{d.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section style={{ background: "var(--tcmc-indigo)", padding: "110px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal as="blockquote" style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(24px,3.4vw,36px)", letterSpacing: "-0.01em", lineHeight: 1.3, color: "var(--tcmc-cream)", margin: 0 }}>
            &ldquo;They didn&apos;t score our ad. They gave the company a <em style={{ fontStyle: "italic", fontWeight: 300 }}>voice</em> — and shipped it before our launch even had a date.&rdquo;
          </Reveal>
          <Reveal delay={120} style={{ marginTop: 28, fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--tcmc-on-ink-faint)" }}>
            Brand Lead · Ola Electric
          </Reveal>
        </div>
      </section>

      {/* Next */}
      <section style={{ textAlign: "center", padding: "100px 40px" }}>
        <Reveal as="h2" style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(24px,3.6vw,38px)", letterSpacing: "-0.01em", margin: 0 }}>
          Want one of these for your brand?
        </Reveal>
        <Reveal delay={120} style={{ marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="brass" size="lg" onClick={() => router.push("/brief")}>Start a project</Button>
          <Button variant="secondary" size="lg" onClick={() => router.push("/work")}>More work</Button>
        </Reveal>
      </section>
    </div>
  );
}
