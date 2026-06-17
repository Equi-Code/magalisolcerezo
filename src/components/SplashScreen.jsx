import { useState, useEffect } from "react";
import { THEME } from "../constants";

// ─────────────────────────────────────────────────────────────────────────────
// SplashScreen
// Se muestra durante ~3.5s al cargar la página, luego hace fade-out suave.
// Fondo: gradiente verde turquesa profundo — oscuro pero saturado y fresco.
// ─────────────────────────────────────────────────────────────────────────────

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
    0%, 100% { opacity: 0.18; transform: scale(1); }
    50%       { opacity: 0.42; transform: scale(1.04); }
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
    0%, 100% { opacity: 0.25; transform: scale(0.8); }
    50%       { opacity: 1;    transform: scale(1.25); }
  }
  @keyframes splash-fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  /*
    splash-text-in — ANTES animaba "letter-spacing" (propiedad de
    layout/paint, no compositada → Lighthouse la marca como
    "non-composited animation"). AHORA solo opacity + transform,
    que el navegador puede correr en la GPU sin recalcular layout.
  */
  @keyframes splash-text-in {
    0%   { opacity: 0; transform: translateY(6px) scale(0.97); }
    100% { opacity: 1; transform: translateY(0)    scale(1); }
  }
  /*
    splash-bar — ANTES animaba "width" (layout en cada frame).
    AHORA usa transform: scaleX, compositado en GPU.
    Requiere transform-origin: left en el elemento.
  */
  @keyframes splash-bar {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

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
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    if (!document.getElementById("splash-keyframes")) {
      const style = document.createElement("style");
      style.id = "splash-keyframes";
      style.textContent = SPLASH_STYLES;
      document.head.appendChild(style);
    }

    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setPhase("exit"), 3200);
    const exitTimer = setTimeout(() => {
      document.body.style.overflow = "";
      onFinish?.();
    }, 3900);

    // bfcache: el cleanup SIEMPRE corre al desmontar (cambio de
    // página, navegación atrás/adelante) y restaura overflow +
    // limpia los timers. Este componente no es la causa del
    // "Page prevented back/forward cache restoration" — revisar
    // si hay listeners de "unload"/"beforeunload" en otro lado
    // (p.ej. formularios con confirmación de salida).
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position:       "fixed",
        inset:          0,
        zIndex:         9999,
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        overflow:       "hidden",
        animation: phase === "exit" ? "splash-fadeout 0.7s ease forwards" : "none",

        // ── Fondo verde turquesa profundo ──────────────────────────────
        // Capas:
        //  1. Mancha de luz turquesa centrada (punto focal detrás del logo)
        //  2. Gradiente radial oscuro que va del teal al casi negro
        //  3. Toque de sage en la esquina inferior para dar profundidad
        background: [
          // Punto de luz cálido detrás del logo
          "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(56,120,112,0.55) 0%, transparent 65%)",
          // Gradiente base teal oscuro
          "radial-gradient(ellipse at 50% 40%, #1C4F4A 0%, #0E3330 38%, #072220 65%, #031615 100%)",
        ].join(", "),
      }}
    >
      {/* ── Textura de luz acuarela — simula lavado holístico ── */}
      <div style={{
        position:      "absolute",
        top:           "-10%",
        left:          "-10%",
        width:         "55%",
        height:        "55%",
        borderRadius:  "50%",
        background:    "radial-gradient(ellipse, rgba(80,160,145,0.18) 0%, transparent 70%)",
        filter:        "blur(30px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position:      "absolute",
        bottom:        "-5%",
        right:         "-5%",
        width:         "45%",
        height:        "45%",
        borderRadius:  "50%",
        background:    "radial-gradient(ellipse, rgba(138,158,138,0.14) 0%, transparent 70%)",
        filter:        "blur(25px)",
        pointerEvents: "none",
      }} />

      {/* ── Partículas de estrellas ── */}
      {[
        { top: "12%",  left:  "8%",   delay: "0s",   dur: "3.1s" },
        { top: "18%",  right: "12%",  delay: "0.4s", dur: "2.8s" },
        { top: "72%",  left:  "14%",  delay: "0.9s", dur: "3.4s" },
        { top: "80%",  right: "9%",   delay: "0.2s", dur: "2.6s" },
        { top: "45%",  left:  "4%",   delay: "1.1s", dur: "3.7s" },
        { top: "35%",  right: "5%",   delay: "0.6s", dur: "2.9s" },
        { top: "88%",  left:  "45%",  delay: "1.4s", dur: "3.2s" },
        { top: "5%",   left:  "55%",  delay: "0.7s", dur: "2.7s" },
        { top: "60%",  right: "25%",  delay: "1.2s", dur: "3.5s" },
        { top: "25%",  left:  "30%",  delay: "0.3s", dur: "2.5s" },
      ].map((s, i) => (
        <SplashStar
          key={i}
          style={{
            top: s.top, left: s.left, right: s.right,
            animationDelay: s.delay, animationDuration: s.dur,
          }}
        />
      ))}

      {/* ── Anillo exterior — gira lento ── */}
      <div style={{
        position:     "absolute",
        width:        "min(420px, 85vw)",
        height:       "min(420px, 85vw)",
        borderRadius: "50%",
        border:       `1px solid rgba(201,169,110,0.14)`,
        animation:    "splash-spin-slow 30s linear infinite",
      }}>
        {[0, 90, 180, 270].map((deg) => (
          <div key={deg} style={{
            position:        "absolute",
            top:             "50%",
            left:            "50%",
            width:           5,
            height:          5,
            borderRadius:    "50%",
            backgroundColor: THEME.gold,
            opacity:         0.55,
            transform:       `rotate(${deg}deg) translateX(calc(min(260px, 44vw))) translateY(-50%)`,
          }} />
        ))}
      </div>

      {/* ── Anillo medio pulsante ── */}
      <div style={{
        position:     "absolute",
        width:        "min(320px, 68vw)",
        height:       "min(320px, 68vw)",
        borderRadius: "50%",
        // Color del anillo adaptado al verde turquesa
        border:       `1px solid rgba(80,170,155,0.22)`,
        animation:    "splash-pulse-ring 4s ease-in-out infinite",
      }} />

      {/* ── Anillo interior — gira al revés ── */}
      <div style={{
        position:     "absolute",
        width:        "min(240px, 52vw)",
        height:       "min(240px, 52vw)",
        borderRadius: "50%",
        border:       `1px dashed rgba(201,169,110,0.18)`,
        animation:    "splash-spin-reverse 20s linear infinite",
      }}>
        {[45, 135, 225, 315].map((deg) => (
          <div key={deg} style={{
            position:  "absolute",
            top:       "50%",
            left:      "50%",
            transform: `rotate(${deg}deg) translateX(calc(min(160px, 27.5vw))) translateY(-50%)`,
          }}>
            <svg width="8" height="8" viewBox="0 0 10 10">
              <path d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3L5 0Z"
                fill={THEME.gold} opacity="0.65" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Logo flotante ── */}
      <div style={{
        position:  "relative",
        animation: "splash-float 4s ease-in-out infinite, splash-shimmer 1s ease forwards",
        zIndex:    10,
      }}>
        {/* Halo detrás del logo */}
        <div style={{
          position:     "absolute",
          inset:        "-20%",
          borderRadius: "50%",
          background:   `radial-gradient(ellipse, rgba(80,160,145,0.20) 0%, transparent 70%)`,
          animation:    "splash-pulse-ring 3s ease-in-out infinite",
        }} />

        {/*
          ↓ LOGO OFICIAL — /assets/Logo.webp
          El logo tiene fondo blanco con trazos dorados.
          mix-blend-mode: screen sobre fondo oscuro hace que el
          blanco desaparezca y queden solo los trazos dorados.
          width/height explícitos → evita layout shift (CLS)
          y satisface el audit "Image elements do not have
          explicit width and height".
        */}
        <img
          src="/assets/logo.webp"
          alt="Magalí Sol Cerezo"
          width={240}
          height={240}
          style={{
            width:        "clamp(140px, 40vw, 240px)",
            height:       "auto",
            objectFit:    "contain",
            position:     "relative",
            zIndex:       2,
            mixBlendMode: "screen",
            filter:       "brightness(1.2) saturate(1.1)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            const fallback = document.getElementById("splash-logo-fallback");
            if (fallback) fallback.style.display = "block";
          }}
        />

        {/* Fallback tipográfico */}
        <div id="splash-logo-fallback" style={{ display: "none", textAlign: "center" }}>
          <p style={{
            fontFamily:    "'Cormorant Garamond', serif",
            color:         THEME.gold,
            fontSize:      "clamp(1.8rem, 6vw, 2.8rem)",
            fontStyle:     "italic",
            fontWeight:    300,
            letterSpacing: "0.1em",
            margin:        0,
            lineHeight:    1.2,
          }}>
            Magalí Sol Cerezo
          </p>
          <p style={{
            fontFamily:    "'Quicksand', sans-serif",
            color:         `${THEME.gold}90`,
            fontSize:      "clamp(0.65rem, 2vw, 0.8rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop:     "0.5rem",
          }}>
            Psicóloga Holística
          </p>
        </div>
      </div>

      {/* ── Tagline ──
          letter-spacing ahora es FIJO (0.18em) — ya no se anima.
          La entrada usa el keyframe splash-text-in (opacity+transform,
          compositado) en lugar de animar letter-spacing. */}
      <p style={{
        position:      "absolute",
        bottom:        "max(90px, 12%)",
        fontFamily:    "'Cormorant Garamond', serif",
        color:         `rgba(210,175,110,0.75)`,
        fontSize:      "clamp(0.75rem, 2.2vw, 0.95rem)",
        fontStyle:     "italic",
        fontWeight:    300,
        letterSpacing: "0.18em",
        animation:     "splash-text-in 1.4s ease 0.6s both",
        textAlign:     "center",
        padding:       "0 2rem",
      }}>
        Un espacio para volver a vos
      </p>

      {/* ── Barra de progreso ──
          La animación ahora corre sobre el div interno con
          transform: scaleX (compositado), no sobre "width". */}
      <div style={{
        position:        "absolute",
        bottom:          "8%",
        width:           "min(180px, 40vw)",
        height:          1,
        backgroundColor: `rgba(80,160,145,0.22)`,
        borderRadius:    1,
        overflow:        "hidden",
      }}>
        <div style={{
          height:          "100%",
          width:           "100%",
          // La barra mezcla turquesa y dorado
          background:      `linear-gradient(to right, rgba(80,160,145,0.8), ${THEME.gold})`,
          borderRadius:    1,
          transformOrigin: "left",
          animation:       "splash-bar 3s ease forwards",
        }} />
      </div>
    </div>
  );
}