import { useState, useEffect } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, Feather, scrollTo } from "./ui";


export default function Hero({ lang }) {
  const t = T[lang].hero;
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const id = setTimeout(() => setMounted(true), 100); return () => clearTimeout(id); }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: THEME.bg }}
    >
      {/* ── Decoraciones de fondo ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4" />
        <StarDeco className="absolute top-3/4 right-1/3" />
        <StarDeco className="absolute top-1/3 right-1/4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />

        {/* Pluma 1 — superior derecha, grande */}
        <Feather style={{
          top: "-8%", right: "-5%",
          width: "min(460px, 52vw)",
          opacity: 0.5,
          transform: "rotate(12deg) scaleX(-1)",
        }} />

        {/* Pluma 2 — inferior izquierda, pequeña, tono frío */}
        <Feather
          filter="saturate(0.4) brightness(1.05) hue-rotate(30deg)"
          style={{
            bottom: "-4%", left: "-7%",
            width: "min(300px, 36vw)",
            opacity: 0.25,
            transform: "rotate(-25deg)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">

        {/* ── Texto ── */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.1s",
        }}>
          <div className="flex items-center gap-2 mb-6">
            <div style={{ width: 32, height: 1, backgroundColor: THEME.gold }} />
            <span style={{
              fontFamily: "'Quicksand', sans-serif",
              color: THEME.gold,
              fontSize: "0.78rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              {t.subtitle}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            color: THEME.text,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            lineHeight: 1.2,
            fontWeight: 400,
            fontStyle: "italic",
          }} className="mb-6">
            {t.title}
          </h1>

          <p style={{
            fontFamily: "'Quicksand', sans-serif",
            color: THEME.textMuted,
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "42ch",
          }} className="mb-10">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4">


            <button
              onClick={() => scrollTo("sesiones")}
              style={{
                backgroundColor: THEME.sage,
                color: "#fff",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "0.75rem 1.75rem",
                borderRadius: 9999,
                letterSpacing: "0.03em",
                boxShadow: `0 4px 24px ${THEME.sage}40`,
              }}
              className="transition-all hover:opacity-90"
            >
              {t.cta1}
            </button>
            <button
              onClick={() => scrollTo("terapias")}
              style={{
                border: `1.5px solid ${THEME.sage}`,
                color: THEME.sage,
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "0.75rem 1.75rem",
                borderRadius: 9999,
                letterSpacing: "0.03em",
                backgroundColor: "transparent",
              }}
              className="transition-all hover:bg-opacity-10"
            >
              {t.cta2}
            </button>
          </div>
        </div>

        {/* ── Imagen con arco ── */}
        <div
          className="flex justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            transition: "all 1s ease 0.3s",
          }}
        >
          <div className="relative">
            {/* Marco en arco */}
            <div style={{
              width: "min(340px, 75vw)",
              aspectRatio: "0.75",
              borderRadius: "9999px 9999px 2rem 2rem",
              overflow: "hidden",
              border: `1px solid ${THEME.border}`,
              boxShadow: `0 20px 60px rgba(138,158,138,0.18), 0 4px 20px rgba(201,169,110,0.12)`,
              position: "relative",
              backgroundColor: `${THEME.sage}18`,
            }}>
              {/*
                ↓ FOTO PRINCIPAL DE MAGALÍ
                Reemplazar src con "/assets/foto-magali.jpg"
              */}
              <img
                src="/assets/foto-magali.jpg"
                alt="Magalí Sol Cerezo — Psicóloga Holística"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = `linear-gradient(160deg, ${THEME.sage}30, ${THEME.rose}20, ${THEME.gold}15)`;
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to bottom, transparent 60%, ${THEME.sage}20)`,
              }} />
            </div>

            {/* Badge flotante */}
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

            {/*
              ↓ ICONOS DE MARCA — reemplazar src con "/assets/iconos.png"
            */}
            <img
              src="/assets/iconos.png"
              alt=""
              aria-hidden="true"
              style={{ position: "absolute", top: -24, right: -24, width: 56, height: 56, opacity: 0.6, objectFit: "contain" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
