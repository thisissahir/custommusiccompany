"use client";
import React from "react";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Tag } from "@/components/ds/Tag";
import { Logo } from "@/components/ds/Logo";

const TRACKS = [
  { client: "Aman Resorts", title: "Stillness — Brand Theme", kind: "Sonic branding", len: "2:14" },
  { client: "Ola Electric", title: "Forward — Anthem (full)", kind: "Brand DNA sound", len: "1:48" },
  { client: "Blue Tokai", title: "Slow Pour — Café Bed", kind: "Retail BGM", len: "3:32" },
  { client: "Tanishq", title: "Inheritance — Film Cue", kind: "Film score", len: "2:57" },
  { client: "Zomato", title: "Midnight Cravings — Sting Pack", kind: "Music & BGM", len: "0:42" },
  { client: "Mahindra", title: "Built Different — Launch Theme", kind: "Brand DNA sound", len: "1:30" },
];

export default function WorkPage() {
  const [playing, setPlaying] = React.useState(1);
  const [progress, setProgress] = React.useState(0.38);

  return (
    <div style={{ minHeight: "70vh", paddingBottom: 96 }}>
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 40px 32px" }}>
        <Eyebrow>The work</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(30px,4.5vw,46px)", letterSpacing: "-0.01em", margin: "16px 0 0", maxWidth: "20ch" }}>
          Music written for a brand, not borrowed from a library.
        </h1>
      </section>

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "16px 40px" }}>
        {TRACKS.map((t, i) => {
          const isPlaying = i === playing;
          return (
            <button
              key={i}
              onClick={() => { setPlaying(i); setProgress(0.12); }}
              style={{
                width: "100%", textAlign: "left", cursor: "pointer",
                background: isPlaying ? "var(--surface-sunken)" : "transparent",
                border: "none", borderTop: "1px solid var(--border-hair)",
                display: "grid", gridTemplateColumns: "40px 1fr 1fr auto", alignItems: "center", gap: 24,
                padding: "20px 16px", transition: "background var(--dur-base) var(--ease-soft)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, color: isPlaying ? "var(--tcmc-brass)" : "var(--tcmc-faint)" }}>
                {isPlaying
                  ? <svg width="11" height="13" viewBox="0 0 11 13"><rect x="0" y="0" width="3.5" height="13" fill="currentColor" /><rect x="7.5" y="0" width="3.5" height="13" fill="currentColor" /></svg>
                  : <svg width="12" height="13" viewBox="0 0 12 13"><path d="M0 0 L12 6.5 L0 13 Z" fill="currentColor" /></svg>}
              </span>
              <span>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 19, color: "var(--tcmc-ink)", display: "block" }}>{t.title}</span>
                <span style={{ fontSize: 12, color: "var(--tcmc-faint)", letterSpacing: "0.04em" }}>{t.client}</span>
              </span>
              <span><Tag variant="outline">{t.kind}</Tag></span>
              <span style={{ fontSize: 12, color: "var(--tcmc-muted)", fontVariantNumeric: "tabular-nums" }}>{t.len}</span>
            </button>
          );
        })}
        <div style={{ borderTop: "1px solid var(--border-hair)" }} />
      </section>

      {/* Player bar */}
      <div style={{ position: "sticky", bottom: 0, background: "var(--tcmc-indigo)", borderTop: "1px solid var(--border-on-ink)", padding: "16px 40px", display: "flex", alignItems: "center", gap: 24 }}>
        <button onClick={() => setProgress(0)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--tcmc-cream)", display: "inline-flex" }} aria-label="Restart">
          <svg width="14" height="16" viewBox="0 0 14 16"><rect x="0" y="0" width="4.5" height="16" fill="currentColor" /><rect x="9.5" y="0" width="4.5" height="16" fill="currentColor" /></svg>
        </button>
        <div style={{ minWidth: 180 }}>
          <div style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 15, color: "var(--tcmc-cream)" }}>{TRACKS[playing].title}</div>
          <div style={{ fontSize: 11, color: "var(--tcmc-on-ink-muted)", letterSpacing: "0.04em" }}>{TRACKS[playing].client}</div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 14 }}>
          <div
            onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setProgress((e.clientX - r.left) / r.width); }}
            style={{ flex: 1, height: 2, background: "var(--border-on-ink)", cursor: "pointer", position: "relative" }}
          >
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${progress * 100}%`, background: "var(--tcmc-brass)" }} />
          </div>
          <span style={{ fontSize: 11, color: "var(--tcmc-on-ink-muted)", fontVariantNumeric: "tabular-nums" }}>{TRACKS[playing].len}</span>
        </div>
        <div style={{ opacity: 0.6 }}><Logo variant="mark" tone="inverse" size={22} /></div>
      </div>
    </div>
  );
}
