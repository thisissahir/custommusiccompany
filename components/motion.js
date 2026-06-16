"use client";
import React from "react";

// motion.js — scroll-driven movement helpers for the TCMC site.
// Reveal: fades + lifts children in as they enter the viewport (respects reduced-motion).
// useScrollY: live scrollY for slow parallax drift.
// useScrollProgress / ScrollProgressBar: the thin brass hairline that fills as you scroll.

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({ children, as: Tag = "div", delay = 0, y = 22, style, ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  // animate = entrance transition plays (scroll-in). false = appear instantly,
  // used for content already in view on mount so it's never stuck pre-paint.
  const [animate, setAnimate] = React.useState(true);

  const inView = React.useCallback(() => {
    const el = ref.current;
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight || 0;
    return r.top < vh * 0.9 && r.bottom > 0;
  }, []);

  // Synchronous, pre-paint: anything already on screen shows instantly.
  React.useLayoutEffect(() => {
    if (prefersReduced()) { setShown(true); return; }
    if (inView()) { setAnimate(false); setShown(true); }
  }, [inView]);

  // Reveal below-the-fold items with the entrance transition as they enter view.
  React.useEffect(() => {
    if (prefersReduced() || shown) return;
    const el = ref.current;
    if (!el) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) { setShown(true); io.disconnect(); }
        },
        { rootMargin: "0px 0px -10% 0px" }
      );
      io.observe(el);
      return () => io.disconnect();
    }

    // Fallback: scroll listener.
    const check = () => { if (inView()) { setShown(true); cleanup(); } };
    const onScroll = () => requestAnimationFrame(check);
    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return cleanup;
  }, [shown, inView]);

  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: animate
          ? `opacity var(--dur-slow) var(--ease-draw) ${delay}ms, transform var(--dur-slow) var(--ease-draw) ${delay}ms`
          : "none",
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Returns live scrollY so callers can derive parallax.
export function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    if (prefersReduced()) return;
    let scheduled = false;
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => { scheduled = false; setY(window.scrollY || 0); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export function useScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let scheduled = false;
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? Math.min(1, Math.max(0, (window.scrollY || 0) / max)) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

// Thin brass hairline that fills as you scroll the page.
export function ScrollProgressBar() {
  const p = useScrollProgress();
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 50, pointerEvents: "none" }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: "var(--tcmc-brass)", transition: "width 80ms linear" }} />
    </div>
  );
}
