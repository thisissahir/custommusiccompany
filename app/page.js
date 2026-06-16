"use client";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Tag } from "@/components/ds/Tag";
import { Card } from "@/components/ds/Card";
import { Divider } from "@/components/ds/Divider";
import { Reveal, useScrollY } from "@/components/motion";

const SERVICES = [
  { t: "Sonic branding", d: "A complete sonic identity — logo sound, brand themes, and the rules for how your brand sounds everywhere." },
  { t: "Brand DNA sound", d: "One original anthem that carries your brand, arranged into a family of cuts for every length and place it plays." },
  { t: "Music & BGM", d: "Original scores and background beds for film, product, retail, and social — written for the moment, never stock." },
];

const PROCESS = [
  { n: "01", t: "Composed by musicians", d: "A team of composers, producers, and engineers builds the music by hand, around your brand." },
  { n: "02", t: "AI cuts the round trips", d: "AI sits inside the workflow — handling revisions and variations — so the back-and-forth disappears." },
  { n: "03", t: "Delivered in days", d: "The work arrives in days, not months, with the hand still on it and full rights cleared." },
];

const WORK = [
  { client: "Aman Resorts", kind: "Sonic branding", year: "2025" },
  { client: "Ola Electric", kind: "Brand DNA sound", year: "2025" },
  { client: "Blue Tokai", kind: "Retail BGM", year: "2024" },
  { client: "Tanishq", kind: "Film score", year: "2024" },
];

export default function HomePage() {
  const router = useRouter();
  const scrollY = useScrollY();

  return (
    <div>
      {/* Hero — mark drifts up slowly, copy fades in on load */}
      <section style={{ textAlign: "center", padding: "120px 40px 96px", borderBottom: "1px solid var(--border-hair)", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 44, transform: `translateY(${scrollY * -0.08}px)`, opacity: Math.max(0, 1 - scrollY / 520) }}>
          <Logo variant="mark" size={84} axis />
        </div>
        <Reveal><Eyebrow style={{ marginBottom: 22 }}>Composed by musicians · Delivered without the wait</Eyebrow></Reveal>
        <Reveal as="h1" delay={80} style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(30px,5vw,52px)", letterSpacing: "-0.01em", lineHeight: 1.08, margin: "0 auto", maxWidth: "16ch" }}>
          Sound that <em style={{ fontStyle: "italic", fontWeight: 300 }}>becomes</em> a brand.
        </Reveal>
        <Reveal as="p" delay={160} style={{ color: "var(--tcmc-muted)", fontSize: 15.5, lineHeight: 1.65, maxWidth: "52ch", margin: "22px auto 0" }}>
          Original music written around your brand by a team of composers, producers, and engineers — with AI in the workflow to cut the round trips.
        </Reveal>
        <Reveal delay={240} style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
          <Button variant="brass" onClick={() => router.push("/brief")}>Start a project</Button>
          <Button variant="secondary" onClick={() => router.push("/work")}>Hear the work</Button>
        </Reveal>
      </section>

      {/* Services */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px", borderBottom: "1px solid var(--border-hair)" }}>
        <Reveal><Eyebrow>What we make</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px,3.2vw,32px)", letterSpacing: "-0.01em", margin: "14px 0 0" }}>Three ways a brand can sound.</Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginTop: 48 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 110}>
              <Card interactive padding="32px" onClick={() => router.push("/about")} style={{ height: "100%" }}>
                <Tag variant="outline">{String(i + 1).padStart(2, "0")}</Tag>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 22, margin: "20px 0 12px" }}>{s.t}</h3>
                <p style={{ color: "var(--tcmc-muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process — on ink */}
      <section style={{ background: "var(--tcmc-indigo)", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal><Eyebrow tone="inverse">How it works</Eyebrow></Reveal>
          <Reveal as="h2" delay={60} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px,3.2vw,32px)", letterSpacing: "-0.01em", margin: "14px 0 0", color: "var(--tcmc-cream)" }}>
            The craft of a studio, at the speed of a tool.
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, marginTop: 48, background: "var(--border-on-ink)", border: "1px solid var(--border-on-ink)" }}>
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 110} style={{ background: "var(--tcmc-indigo)", padding: "40px 32px" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: 34, color: "var(--tcmc-brass)" }}>{p.n}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 19, color: "var(--tcmc-cream)", margin: "18px 0 10px" }}>{p.t}</h3>
                <p style={{ color: "var(--tcmc-on-ink-muted)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px", borderBottom: "1px solid var(--border-hair)" }}>
        <Reveal style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px,3.2vw,32px)", letterSpacing: "-0.01em", margin: "14px 0 0" }}>Recently in the studio.</h2>
          </div>
          <Button variant="ghost" onClick={() => router.push("/work")}>All work →</Button>
        </Reveal>
        <div style={{ marginTop: 36 }}>
          {WORK.map((w, i) => (
            <Reveal key={i} delay={i * 80}>
              <button onClick={() => router.push("/work/ola-electric")} style={{ width: "100%", textAlign: "left", background: "none", border: "none", borderTop: "1px solid var(--border-hair)", cursor: "pointer", display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center", gap: 24, padding: "22px 0" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 22, color: "var(--tcmc-ink)" }}>{w.client}</span>
                <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--tcmc-muted)" }}>{w.kind}</span>
                <span style={{ fontSize: 12, color: "var(--tcmc-faint)", width: 48, textAlign: "right" }}>{w.year}</span>
              </button>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid var(--border-hair)" }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "110px 40px" }}>
        <Reveal><Divider variant="axis" style={{ maxWidth: 360, margin: "0 auto 44px" }} /></Reveal>
        <Reveal as="h2" delay={80} style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(26px,4vw,42px)", letterSpacing: "-0.01em", lineHeight: 1.1, margin: 0, maxWidth: "18ch", marginInline: "auto" }}>
          Let&apos;s give your brand a <em style={{ fontStyle: "italic", fontWeight: 300 }}>sound</em>.
        </Reveal>
        <Reveal delay={160} style={{ marginTop: 32 }}>
          <Button variant="brass" size="lg" onClick={() => router.push("/brief")}>Start a project</Button>
        </Reveal>
      </section>
    </div>
  );
}
