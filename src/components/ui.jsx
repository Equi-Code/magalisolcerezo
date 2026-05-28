import { useState, useEffect, useRef } from "react";
import { THEME } from "../constants";

// ─────────────────────────────────────────
// Decorative SVG atoms
// ─────────────────────────────────────────
export const StarDeco = ({ className = "" }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z" fill={THEME.gold} fillOpacity="0.5" />
  </svg>
);

export const MoonDeco = ({ className = "" }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M15 9.5A6 6 0 0 1 8.5 3a6 6 0 1 0 6.5 6.5z" stroke={THEME.gold} strokeWidth="1" fill="none" strokeOpacity="0.4" />
  </svg>
);

export const CircleDeco = ({ className = "" }) => (
  <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="39" stroke={THEME.sage} strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="40" cy="40" r="30" stroke={THEME.gold} strokeWidth="0.5" strokeOpacity="0.2" />
  </svg>
);

// ─────────────────────────────────────────
// Section tag — small uppercase label
// ─────────────────────────────────────────
export const SectionTag = ({ label }) => (
  <div className="flex items-center gap-2 mb-4">
    <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
    <span style={{
      fontFamily: "'Quicksand', sans-serif",
      color: THEME.gold,
      fontSize: "0.75rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    }}>
      {label}
    </span>
    <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
  </div>
);

export const SectionTagLeft = ({ label }) => (
  <div className="flex items-center gap-2 mb-4">
    <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
    <span style={{
      fontFamily: "'Quicksand', sans-serif",
      color: THEME.gold,
      fontSize: "0.75rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    }}>
      {label}
    </span>
  </div>
);

// ─────────────────────────────────────────
// Feather image — reusable with blend mode
// ─────────────────────────────────────────
export const Feather = ({ style = {}, blendMode = "multiply", filter = "saturate(0.65) brightness(0.92)" }) => (
  // ↓ PLUMAS — mix-blend-mode elimina el fondo negro de plumas1.png
  <img
    src="/assets/plumas1.png"
    alt=""
    aria-hidden="true"
    style={{
      position: "absolute",
      objectFit: "contain",
      pointerEvents: "none",
      userSelect: "none",
      mixBlendMode: blendMode,
      filter,
      ...style,
    }}
    onError={(e) => { e.target.style.display = "none"; }}
  />
);

// ─────────────────────────────────────────
// Hook: fade-in on intersection
// ─────────────────────────────────────────
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─────────────────────────────────────────
// FadeIn wrapper component
// ─────────────────────────────────────────
export const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ─────────────────────────────────────────
// Shared scroll helper
// ─────────────────────────────────────────
export const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
