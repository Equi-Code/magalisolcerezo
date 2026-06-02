import { useState, useEffect } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, Feather, scrollTo } from "./ui";


export default function Hero({ lang }) {
  const t = T[lang].hero;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section id="inicio" className="relative flex items-center overflow-hidden" style={{ minHeight: "calc(100vh - 75px)", backgroundColor: "transparent" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />

        {/*
          ↓ PLUMAS — plumas1.png tiene fondo negro.
          mix-blend-mode "multiply" sobre fondo claro hace que el negro desaparezca
          y las plumas crema/celeste quedan flotando de forma orgánica.
          Pluma 1: superior derecha, rotada, grande
        */}
        <img
          src="/assets/plumas1.png"
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 md:pt-20 pb-12 md:pb-16 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Text */}
        {/* Text */}
        <div
          className="order-2 md:order-1 flex justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease 0.1s",
          }}
        >
          <div className="text-center max-w-xl">

            {/* Nombre */}
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.text,
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1.05,
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              Magalí Sol Cerezo
            </h1>

            {/* Subtitulo */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.sage,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontStyle: "italic",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              Sanar es permitirte volver a habitarte en paz
            </h2>

            {/* Separador */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                style={{
                  width: "90px",
                  height: "1px",
                  backgroundColor: `${THEME.gold}70`,
                }}
              />

              <span
                style={{
                  color: THEME.gold,
                  fontSize: "1.2rem",
                }}
              >
                ♡
              </span>

              <div
                style={{
                  width: "90px",
                  height: "1px",
                  backgroundColor: `${THEME.gold}70`,
                }}
              />
            </div>

            {/* Frase */}
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "1.08rem",
                lineHeight: 1.9,
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              Acompaño tu proceso de sanación para ayudarte a transformar tu energía,
              manifestar bienestar y reconectar con tu esencia.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("sesiones")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: THEME.sage,
                  color: "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  boxShadow: `0 10px 30px ${THEME.sage}35`,
                }}
              >
                Reservar sesión
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("terapias")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{
                  border: `1.5px solid ${THEME.sage}`,
                  color: THEME.sage,
                  backgroundColor: "transparent",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Conocer mis terapias
              </button>
            </div>
          </div>
        </div>

        {/* Image with arch mask */}
        <div
          className="order-1 md:order-2 flex justify-center"
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
                width: "clamp(300px, 88vw, 420px)",
                aspectRatio: "0.72",
                borderRadius: "9999px",          /* full oval — elipse perfecta */
                overflow: "hidden",
                border: `2px solid ${THEME.gold}40`,
                boxShadow: `
0 0 0 10px rgba(138,158,138,0.08),
0 30px 80px rgba(138,158,138,0.18),
0 8px 24px rgba(201,169,110,0.12)
`,
                position: "relative",
                backgroundColor: `
linear-gradient(
  to bottom,
  rgba(255,255,255,0.03),
  rgba(138,158,138,0.10)
)
`,
              }}
            >

              <div
  style={{
    position: "absolute",
    width: "450px",
    height: "450px",
    borderRadius: "9999px",
    background:
      "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)",
    filter: "blur(40px)",
    zIndex: 0,
  }}
/>

              {/* ↓ IMAGEN PRINCIPAL DE MAGALÍ — reemplazar src con la foto real de la cliente */}
              <img
                src="/assets/FotoHero.JPG"
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
                  width: "min(420px, 82vw)",
                  inset: 0,
                  filter: "saturate(0.82) brightness(1.03)",
                  background: `linear-gradient(to bottom, transparent 60%, ${THEME.sage}20)`,
                }}
              />
            </div>

            {/* Floating decorative badge */}
            <div
              className="absolute -bottom-2 md:-bottom-4 left-1/2 md:left-auto md:-left-4 -translate-x-1/2 md:translate-x-0 px-4 py-2 md:px-5 md:py-3 rounded-2xl"
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