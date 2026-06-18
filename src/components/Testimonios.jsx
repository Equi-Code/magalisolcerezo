
import { useState, useEffect } from "react";
import { T, THEME } from "../constants";
import ConstellationDivider from "./ConstellationDivider"; 
import { CircleDeco } from "./ui"; 

const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans: "'Quicksand', 'Nunito', system-ui, sans-serif",
};

// ─── Iconos SVG inline ────────────────────────────────────────
const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconQuote = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

// ─── Decoraciones SVG inline ──────────────────────────────────
const StarDeco = ({ style = {} }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
    style={{ position: "absolute", ...style }} aria-hidden="true">
    <path d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
      fill={THEME.gold} fillOpacity="0.45" />
  </svg>
);

const MoonDeco = ({ style = {} }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
    style={{ position: "absolute", ...style }} aria-hidden="true">
    <path d="M15 9.5A6 6 0 0 1 8.5 3a6 6 0 1 0 6.5 6.5z"
      stroke={THEME.gold} strokeWidth="1" strokeOpacity="0.35" fill="none" />
  </svg>
);

export default function TestimonialsSlider({ lang }) {
  const tx = T[lang].testimonios;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);

  // ── Autoplay ──
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tx.items.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused, tx.items.length]);

  // ── Transición animada ────────────────────────────────────
  const transitionTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 380);
  };

  const goToNext = () =>
    transitionTo((currentIndex + 1) % tx.items.length, "next");

  const goToPrevious = () =>
    transitionTo(
      (currentIndex - 1 + tx.items.length) % tx.items.length,
      "prev"
    );

  const contentStyle = {
    transition: "opacity 0.38s ease, transform 0.38s ease",
    opacity: animating ? 0 : 1,
    transform: animating
      ? direction === "next" ? "translateY(10px)" : "translateY(-10px)"
      : "translateY(0)",
  };

  const arrowBtnBase = {
    width: 44,
    height: 44,
    borderRadius: "50%",
    backgroundColor: THEME.card,
    border: `1.5px solid rgba(138,158,138,0.25)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.22s ease",
    color: THEME.textMuted,
    boxShadow: `0 3px 10px rgba(45,41,36,0.04)`,
    flexShrink: 0,
  };

  return (
    <section
      id="testimonios"
      style={{
        paddingTop: "3.5rem",
        paddingBottom: "4.5rem",
        backgroundColor: THEME.bgB,
        overflow: "hidden",
        position: "relative", // Clave para que los absolutos se queden adentro
      }}
    >
      {/* Capa de Decoraciones de Fondo Unificada */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-4rem", right: "-4rem", width: "18rem", height: "18rem", opacity: 0.35 }}>
          <CircleDeco />
        </div>
        <div style={{ position: "absolute", bottom: "-5rem", left: "-5rem", width: "22rem", height: "22rem", opacity: 0.25 }}>
          <CircleDeco />
        </div>

        <StarDeco style={{ top: "20%", left: "15%", width: 10, height: 10, animation: "twinkle 3s ease-in-out infinite" }} />
        <StarDeco style={{ top: "80%", right: "18%", width: 8, height: 8, animation: "twinkle 4s ease-in-out infinite 1s" }} />
        <StarDeco style={{ top: "30%", right: "12%", width: 14, height: 14, animation: "twinkle 3.5s ease-in-out infinite 0.5s" }} />

        <div style={{ position: "absolute", bottom: "30%", left: "12%", animation: "floatDeco 5s ease-in-out infinite" }}>
          <MoonDeco />
        </div>
      </div>

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", border: `1px solid rgba(201,169,110,0.05)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 320, height: 320, borderRadius: "50%", border: `1px solid rgba(138,158,138,0.05)`, pointerEvents: "none" }} />

      {/* ── PLUMA CORREGIDA: Responsiva y con animación de flotación sutil ── */}
      <img
        src="/assets/plumas1.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "25%", // Posición estable respecto al bloque
          left: "-5%",
          width: "min(320px, 38vw)", // Escalado perfecto en responsive
          opacity: 0.42, // Subido de 0.14 a 0.42 para que se note y unifique con el Home
          mixBlendMode: "multiply",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 2,
          filter: "saturate(0.5) brightness(0.9) hue-rotate(15deg)",
          animation: "floatDeco 8s ease-in-out infinite", // Reutiliza tu animación nativa de CSS
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 3 }}>
        
        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "0.75rem" }}>
            <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
            <span style={{
              fontFamily: FONT.sans,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: THEME.gold,
            }}>
              {tx.tag}
            </span>
            <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
          </div>

          <h2 style={{
            fontFamily: FONT.serif,
            fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.25,
            color: THEME.text,
            margin: 0
          }}>
            {tx.title}
          </h2>
        </div>

        {/* ── SLIDER CARD ── */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div style={{ position: "absolute", top: "-1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10, color: THEME.gold, opacity: 0.15, lineHeight: 1, pointerEvents: "none" }}>
            <IconQuote />
          </div>

          <div
            style={{
              backgroundColor: THEME.card,
              borderRadius: "1.25rem",
              boxShadow: `0 12px 40px rgba(45,41,36,0.05), 0 2px 6px rgba(201,169,110,0.04)`,
              border: `1px solid rgba(201,169,110,0.12)`,
              padding: "3.5rem 2.2rem 2.5rem 2.2rem", 
              minHeight: 260,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 2, background: `linear-gradient(to right, transparent, ${THEME.gold}60, transparent)` }} />

            <div style={{ textAlign: "center", ...contentStyle }}>
              <p style={{
                fontFamily: FONT.serif,
                fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.68,
                color: THEME.text,
                margin: "0 0 1.75rem 0",
              }}>
                "{tx.items[currentIndex].text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1rem" }}>
                <div style={{ width: 24, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}40)` }} />
                <svg width="6" height="6" viewBox="0 0 8 8" aria-hidden="true">
                  <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z" fill={THEME.gold} fillOpacity="0.6" />
                </svg>
                <div style={{ width: 24, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}40)` }} />
              </div>

              <div>
                <div style={{ fontFamily: FONT.sans, fontSize: "0.92rem", fontWeight: 700, color: THEME.text, margin: 0, letterSpacing: "0.02em" }}>
                  {tx.items[currentIndex].author}
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "1.75rem" }}>
            <button
              onClick={goToPrevious}
              aria-label="Testimonio anterior"
              style={arrowBtnBase}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = THEME.sage;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = THEME.sage;
                e.currentTarget.style.boxShadow = `0 4px 15px rgba(138,158,138,0.28)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = THEME.card;
                e.currentTarget.style.color = THEME.textMuted;
                e.currentTarget.style.borderColor = "rgba(138,158,138,0.25)";
                e.currentTarget.style.boxShadow = `0 3px 10px rgba(45,41,36,0.04)`;
              }}
            >
              <IconChevronLeft />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              {tx.items.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    onClick={() => transitionTo(index, index > currentIndex ? "next" : "prev")}
                    aria-label={`Testimonio ${index + 1}`}
                    style={{
                      width: isActive ? 24 : 7,
                      height: 7,
                      borderRadius: "9999px",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s ease",
                      backgroundColor: isActive ? THEME.sage : `rgba(138,158,138,0.25)`,
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = `rgba(138,158,138,0.45)`; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = `rgba(138,158,138,0.25)`; }}
                  />
                );
              })}
            </div>

            <button
              onClick={goToNext}
              aria-label="Siguiente testimonio"
              style={arrowBtnBase}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = THEME.sage;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = THEME.sage;
                e.currentTarget.style.boxShadow = `0 4px 15px rgba(138,158,138,0.28)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = THEME.card;
                e.currentTarget.style.color = THEME.textMuted;
                e.currentTarget.style.borderColor = "rgba(138,158,138,0.25)";
                e.currentTarget.style.boxShadow = `0 3px 10px rgba(45,41,36,0.04)`;
              }}
            >
              <IconChevronRight />
            </button>
          </div>

          {!paused && (
            <div style={{ position: "relative", height: 2, maxWidth: 140, margin: "1rem auto 0", borderRadius: "9999px", backgroundColor: `rgba(138,158,138,0.12)`, overflow: "hidden" }}>
              <div
                key={currentIndex}
                style={{ position: "absolute", inset: 0, borderRadius: "9999px", backgroundColor: THEME.sage, transformOrigin: "left center", animation: "progressBar 6s linear forwards" }}
              />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        @keyframes floatDeco {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div style={{ marginTop: "2.5rem" }}>
        <ConstellationDivider fromColor="transparent" toColor="transparent" />
      </div>
    </section>
  );
}