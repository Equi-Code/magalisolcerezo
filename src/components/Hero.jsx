import { useState, useEffect } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, Feather, scrollTo } from "./ui";


export default function Hero({ lang }) {
  const t = T[lang].hero;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "transparent" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" /> */}
        
        {/*
          ↓ PLUMAS — plumas1.png tiene fondo negro.
          mix-blend-mode "multiply" sobre fondo claro hace que el negro desaparezca
          y las plumas crema/celeste quedan flotando de forma orgánica.
          Pluma 1: superior derecha, rotada, grande
        */}
        <img
          src="./assets/plumas1.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-5%",
            right: "-3%",
            width: "min(500px, 55vw)",
            opacity: 0.75,
            mixBlendMode: "multiply",
            transform: "rotate(10deg) scaleX(-1)",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "saturate(0.6) brightness(0.88)",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {/* Pluma 2: inferior izquierda, tono frío-celeste */}
        <img
          src="/assets/plumas1.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-2%",
            left: "-5%",
            width: "min(320px, 38vw)",
            opacity: 0.45,
            mixBlendMode: "multiply",
            transform: "rotate(-22deg)",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "saturate(0.4) brightness(0.95) hue-rotate(40deg)",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div style={{ width: 32, height: 1, backgroundColor: THEME.gold }} />
              <span style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.gold, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                {t.subtitle}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: THEME.text,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.2,
                fontWeight: 400,
                fontStyle: "italic",
              }}
              className="mb-6"
            >
              {t.title}
            </h1>

            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "42ch",
              }}
              className="mb-10"
            >
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-full font-semibold transition-all"
                style={{
                  backgroundColor: THEME.sage,
                  color: "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.9rem",
                  boxShadow: `0 4px 24px ${THEME.sage}40`,
                  letterSpacing: "0.03em",
                }}
              >
                {t.cta1}
              </button>
              <button
                onClick={() => document.getElementById("terapias")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-full font-semibold transition-all"
                style={{
                  border: `1.5px solid ${THEME.sage}`,
                  color: THEME.sage,
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.9rem",
                  backgroundColor: "transparent",
                  letterSpacing: "0.03em",
                }}
              >
                {t.cta2}
              </button>
            </div>
          </div>
        </div>

        {/* Image with arch mask */}
        <div
          className="flex justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            transition: "all 1s ease 0.3s",
          }}
        >
          <div className="relative">
            {/* Image with OVAL mask */}
            <div
              style={{
                width: "min(320px, 72vw)",
                aspectRatio: "0.72",
                borderRadius: "9999px",          /* full oval — elipse perfecta */
                overflow: "hidden",
                border: `2px solid ${THEME.gold}40`,
                boxShadow: `0 0 0 8px ${THEME.sage}14, 0 24px 60px rgba(138,158,138,0.22), 0 4px 20px rgba(201,169,110,0.14)`,
                position: "relative",
                backgroundColor: `${THEME.sage}18`,
              }}
            >
              {/* ↓ IMAGEN PRINCIPAL DE MAGALÍ — reemplazar src con la foto real de la cliente */}
              <img
                src="/assets/foto-magali.jpg"
                alt="Magalí Sol Cerezo — Psicóloga Holística"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = `linear-gradient(160deg, ${THEME.sage}30, ${THEME.rose}20, ${THEME.gold}15)`;
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 60%, ${THEME.sage}20)`,
                }}
              />
            </div>

            {/* Floating decorative badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl"
              style={{
                backgroundColor: THEME.card,
                boxShadow: `0 8px 30px rgba(0,0,0,0.08)`,
                border: `1px solid ${THEME.border}`,
              }}
            >
              <div style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.sage, fontSize: "0.75rem", fontWeight: 600 }}>
                ✦ Sesiones Online
              </div>
            </div>

            {/* ↓ ICONOS DE MARCA — reemplazar src con /assets/iconos.png */}
            <img
              src="../public/assets/logos_2.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-14 h-14 opacity-60 object-contain"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};