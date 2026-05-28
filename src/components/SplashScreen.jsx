import { useState, useEffect } from "react";
import { THEME } from "../constants";

// ─────────────────────────────────────────────────────────────────────────────
// SplashScreen
// Se muestra durante ~3.5s al cargar la página, luego hace fade-out suave.
// Usa el logo oficial de Magalí con anillos orbitales animados y partículas.
// ─────────────────────────────────────────────────────────────────────────────

// Animaciones CSS inyectadas una sola vez
const SPLASH_STYLES = `
  @keyframes splash-spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes splash-spin-reverse {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes splash-pulse-ring {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50%       { opacity: 0.35; transform: scale(1.04); }
  }
  @keyframes splash-float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes splash-shimmer {
    0%   { opacity: 0; transform: scale(0.88) translateY(8px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes splash-star-twinkle {
    0%, 100% { opacity: 0.2; transform: scale(0.8); }
    50%       { opacity: 1;   transform: scale(1.2); }
  }
  @keyframes splash-fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  @keyframes splash-text-in {
    0%   { opacity: 0; letter-spacing: 0.5em; }
    100% { opacity: 1; letter-spacing: 0.25em; }
  }
  @keyframes splash-bar {
    from { width: 0%; }
    to   { width: 100%; }
  }
`;

// Mini estrella SVG animada
const SplashStar = ({ style }) => (
  <svg
    width="10" height="10" viewBox="0 0 10 10"
    style={{ position: "absolute", animation: "splash-star-twinkle 2s ease-in-out infinite", ...style }}
  >
    <path
      d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3L5 0Z"
      fill={THEME.gold}
    />
  </svg>
);

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("enter"); // "enter" | "exit"

  useEffect(() => {
    // Inyectar estilos de animación
    if (!document.getElementById("splash-keyframes")) {
      const style = document.createElement("style");
      style.id = "splash-keyframes";
      style.textContent = SPLASH_STYLES;
      document.head.appendChild(style);
    }

    // Bloquear scroll mientras el splash está activo
    document.body.style.overflow = "hidden";

    // Después de 3.2s → iniciar fade-out
    const fadeTimer = setTimeout(() => setPhase("exit"), 3200);

    // Después de 3.9s → desmontar completamente y restaurar scroll
    const exitTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish?.();
    }, 3900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(ellipse at 50% 40%, #2A2118 0%, #1A1510 50%, #0E0C09 100%)`,
        animation: phase === "exit" ? "splash-fadeout 0.7s ease forwards" : "none",
        overflow: "hidden",
      }}
    >
      {/* ── Partículas de fondo ── */}
      {[
        { top: "12%", left: "8%",  delay: "0s",    duration: "3.1s" },
        { top: "18%", right: "12%", delay: "0.4s", duration: "2.8s" },
        { top: "72%", left: "14%", delay: "0.9s",  duration: "3.4s" },
        { top: "80%", right: "9%", delay: "0.2s",  duration: "2.6s" },
        { top: "45%", left: "4%",  delay: "1.1s",  duration: "3.7s" },
        { top: "35%", right: "5%", delay: "0.6s",  duration: "2.9s" },
        { top: "88%", left: "45%", delay: "1.4s",  duration: "3.2s" },
        { top: "5%",  left: "55%", delay: "0.7s",  duration: "2.7s" },
      ].map((s, i) => (
        <SplashStar
          key={i}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      {/* ── Anillo exterior girando ── */}
      <div
        style={{
          position: "absolute",
          width: "min(520px, 88vw)",
          height: "min(520px, 88vw)",
          borderRadius: "50%",
          border: `1px solid rgba(201,169,110,0.12)`,
          animation: "splash-spin-slow 30s linear infinite",
        }}
      >
        {/* Puntos cardinales en el anillo exterior */}
        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: THEME.gold,
              opacity: 0.5,
              transform: `rotate(${deg}deg) translateX(calc(min(260px, 44vw))) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* ── Anillo medio pulsante ── */}
      <div
        style={{
          position: "absolute",
          width: "min(420px, 72vw)",
          height: "min(420px, 72vw)",
          borderRadius: "50%",
          border: `1px solid rgba(201,169,110,0.18)`,
          animation: "splash-pulse-ring 4s ease-in-out infinite",
        }}
      />

      {/* ── Anillo interior girando al revés ── */}
      <div
        style={{
          position: "absolute",
          width: "min(320px, 55vw)",
          height: "min(320px, 55vw)",
          borderRadius: "50%",
          border: `1px dashed rgba(201,169,110,0.15)`,
          animation: "splash-spin-reverse 20s linear infinite",
        }}
      >
        {/* Estrellas en el anillo interior */}
        {[45, 135, 225, 315].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(calc(min(160px, 27.5vw))) translateY(-50%)`,
            }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10">
              <path d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3L5 0Z" fill={THEME.gold} opacity="0.6" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Logo flotante ── */}
      <div
        style={{
          position: "relative",
          animation: "splash-float 4s ease-in-out infinite, splash-shimmer 1s ease forwards",
          zIndex: 10,
        }}
      >
        {/* Halo detrás del logo */}
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            borderRadius: "50%",
            background: `radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)`,
            animation: "splash-pulse-ring 3s ease-in-out infinite",
          }}
        />

        {/*
          ↓ LOGO OFICIAL — IMG_6194.PNG (fondo blanco)
          Se invierte con filter para que se vea dorado sobre oscuro.
          Reemplazar src con "/assets/logo.png" al montar el proyecto.
        */}
        <img
          src="/assets/logo."
          alt="Magalí Sol Cerezo"
          style={{
            width: "min(240px, 52vw)",
            height: "auto",
            objectFit: "contain",
            position: "relative",
            zIndex: 2,
            // El logo tiene fondo blanco con trazos dorados.
            // mix-blend-mode: screen hace que el blanco se vuelva transparente
            // y los trazos dorados brillen sobre el fondo oscuro.
            mixBlendMode: "screen",
            filter: "brightness(1.15) saturate(1.1)",
          }}
          onError={(e) => {
            // Fallback tipográfico si no encuentra el archivo
            e.target.style.display = "none";
            const fallback = document.getElementById("splash-logo-fallback");
            if (fallback) fallback.style.display = "block";
          }}
        />

        {/* Fallback tipográfico */}
        <div
          id="splash-logo-fallback"
          style={{
            display: "none",
            textAlign: "center",
            animation: "splash-shimmer 1s ease forwards",
          }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: THEME.gold,
            fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.1em",
            margin: 0,
            lineHeight: 1.2,
          }}>
            Magalí Sol Cerezo
          </p>
          <p style={{
            fontFamily: "'Quicksand', sans-serif",
            color: `${THEME.gold}90`,
            fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "0.5rem",
          }}>
            Psicóloga Holística
          </p>
        </div>
      </div>

      {/* ── Tagline ── */}
      <p
        style={{
          position: "absolute",
          bottom: "calc(10% + 36px)",
          fontFamily: "'Cormorant Garamond', serif",
          color: `${THEME.gold}70`,
          fontSize: "clamp(0.75rem, 2.2vw, 0.95rem)",
          fontStyle: "italic",
          fontWeight: 300,
          letterSpacing: "0.18em",
          animation: "splash-text-in 1.4s ease 0.6s both",
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        Un espacio para volver a vos
      </p>

      {/* ── Barra de progreso ── */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          width: "min(180px, 40vw)",
          height: 1,
          backgroundColor: `rgba(201,169,110,0.15)`,
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: THEME.gold,
            borderRadius: 1,
            animation: "splash-bar 3s ease forwards",
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  );
}
