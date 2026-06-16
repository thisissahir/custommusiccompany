"use client";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { Tag } from "@/components/ds/Tag";
import { Divider } from "@/components/ds/Divider";
import { Reveal, useScrollY } from "@/components/motion";

const PEOPLE = [
  { name: "Raja", role: "Chief Executive", note: "Runs the studio and the room. Twenty years putting music next to brands that had never thought about how they sound." },
  { name: "Sahir", role: "Music Director", note: "Holds the baton on every project — the composer who decides what stays human and what the tools can carry." },
];

const STATS = [
  { v: "120+", l: "Brands scored" },
  { v: "9", l: "Composers & engineers" },
  { v: "~6 days", l: "Median first delivery" },
];

const CAPS = [
  "Original composition", "Sonic logos", "Brand anthems", "Adaptive cuts & stems",
  "Film & ad scoring", "Retail & space BGM", "Mix & master", "Rights, fully cleared",
];

export default function AboutPage() {
  const router = useRouter();
  const scrollY = useScrollY();

  return (
    <div>
      {/* Hero — manifesto */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px 80px" }}>
        <Reveal><Eyebrow>The studio</Eyebrow></Reveal>
        <Reveal as="h1" delay={70} style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(30px,5vw,52px)", letterSpacing: "-0.01em", lineHeight: 1.1, margin: "16px 0 0", maxWidth: "20ch" }}>
          A music studio that kept the <em style={{ fontStyle: "italic", fontWeight: 300 }}>hand</em> and dropped the <em style={{ fontStyle: "italic", fontWeight: 300 }}>wait</em>.
        </Reveal>
        <Reveal as="p" delay={140} style={{ color: "var(--tcmc-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: "56ch", margin: "26px 0 0" }}>
          We make original music for brands — written by people, the way it has always been made. The difference is what we put around the people: AI inside the workflow that erases the round trips, so a brand goes from brief to finished score in days, not quarters.
        </Reveal>
      </section>

      {/* The helix idea — on ink, mark drifts */}
      <section style={{ background: "var(--tcmc-indigo)", padding: "96px 40px", overflow: "hidden" }}>
        <div className="tcmc-about-helix" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 72, alignItems: "center" }}>
          <div style={{ transform: `translateY(${(scrollY - 700) * -0.04}px)` }}>
            <Logo variant="mark" tone="inverse" size={120} axis />
          </div>
          <div>
            <Reveal><Eyebrow tone="inverse">Why two strands</Eyebrow></Reveal>
            <Reveal as="h2" delay={70} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px,3.2vw,30px)", letterSpacing: "-0.01em", margin: "14px 0 0", color: "var(--tcmc-cream)" }}>
              One line leads. One line follows.
            </Reveal>
            <Reveal as="p" delay={140} style={{ color: "var(--tcmc-on-ink-muted)", fontSize: 15, lineHeight: 1.7, maxWidth: "50ch", margin: "18px 0 0" }}>
              The heavier strand is the musician — the taste, the melody, the call on what&apos;s right. The lighter strand is the tool, following close, doing the repetitions a human shouldn&apos;t have to. The brass axis is the brief they&apos;re both measured against. That&apos;s the whole company, drawn once.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 40px", borderBottom: "1px solid var(--border-hair)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "var(--border-hair)", border: "1px solid var(--border-hair)" }}>
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 110} style={{ background: "var(--tcmc-paper)", padding: "44px 32px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: 46, letterSpacing: "-0.01em", color: "var(--tcmc-ink)" }}>{s.v}</div>
              <div style={{ fontSize: 10.5, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--tcmc-faint)", marginTop: 12 }}>{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* People */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px", borderBottom: "1px solid var(--border-hair)" }}>
        <Reveal><Eyebrow>Who holds the baton</Eyebrow></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, marginTop: 44 }}>
          {PEOPLE.map((p, i) => (
            <Reveal key={i} delay={i * 120} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <Logo variant="avatar" size={72} />
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 24, margin: 0 }}>{p.name}</h3>
                <div style={{ fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--tcmc-brass)", margin: "6px 0 12px" }}>{p.role}</div>
                <p style={{ color: "var(--tcmc-muted)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "96px 40px" }}>
        <Reveal><Eyebrow>What we can do</Eyebrow></Reveal>
        <Reveal as="div" delay={60} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
          {CAPS.map((c, i) => (
            <Tag key={i} variant={i === CAPS.length - 1 ? "brass" : "outline"}>{c}</Tag>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "20px 40px 110px" }}>
        <Reveal><Divider variant="axis" style={{ maxWidth: 360, margin: "0 auto 44px" }} /></Reveal>
        <Reveal as="h2" delay={80} style={{ fontFamily: "var(--font-serif)", fontWeight: 200, fontSize: "clamp(26px,4vw,40px)", letterSpacing: "-0.01em", lineHeight: 1.1, margin: 0, maxWidth: "18ch", marginInline: "auto" }}>
          Bring us the brand. We&apos;ll bring the <em style={{ fontStyle: "italic", fontWeight: 300 }}>sound</em>.
        </Reveal>
        <Reveal delay={160} style={{ marginTop: 32 }}>
          <Button variant="brass" size="lg" onClick={() => router.push("/brief")}>Start a project</Button>
        </Reveal>
      </section>
    </div>
  );
}
