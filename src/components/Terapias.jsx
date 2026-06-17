import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, FadeIn, CircleDeco, MoonDeco } from "./ui";
import ConstellationDivider from "./ConstellationDivider";

// ============================================================
//  THERAPY_META — mapa ícono ↔ terapia ↔ colores
// ============================================================
const THERAPY_META = [
  {
    icon: "/assets/iconos_1.webp",
    iconAlt: "Cristal — Sanación Energética",
    circleBg: "#C5DDD4",
    accent: "#4a8b79",
    btnFill: "#436a5f",
  },
  {
    icon: "/assets/iconos_5.webp",
    iconAlt: "Cadena — Corte de Lazos Etéricos",
    circleBg: "#acacac",
    accent: "#567A6E",
    btnFill: "#567A6E",
  },
  {
    icon: "/assets/iconos_2.webp",
    iconAlt: "Luna — Regresión a Vidas Pastadas",
    circleBg: "#BDD4DF",
    accent: "#5A8FA4",
    btnFill: "#5A8FA4",
  },
  {
    icon: "/assets/iconos_3.webp",
    iconAlt: "Loto — Mindfulness y Meditación",
    circleBg: "#F0CBCB",
    accent: "#B5736B",
    btnFill: "#B5736B",
  },
  {
    icon: "/assets/iconos_4.webp",
    iconAlt: "Mano con corazón — Tapping EFT",
    circleBg: "#F2DEC8",
    accent: "#B8884A",
    btnFill: "#B8884A",
  },
  {
    icon: "/assets/iconos_6.webp",
    iconAlt: "Mandala floral — Terapias Florales",
    circleBg: "#EAC5CE",
    accent: "#A85F72",
    btnFill: "#A85F72",
  },
  {
    icon: "/assets/icono_7.svg",
    iconAlt: "Árbol de vida — Biodecodificación",
    circleBg: "#D7D7C7",
    accent: "#8A8D6F",
    btnFill: "#8A8D6F",
  },
];

export default function Terapias({ lang }) {
  const t = T[lang].terapias;
  const [modalIdx, setModalIdx] = useState(null);
  const activeItem = modalIdx !== null ? t.items[modalIdx] : null;
  const activeMeta = modalIdx !== null ? THERAPY_META[modalIdx] : null;

  return (
    <section
      id="terapias"
      className="py-12 px-6 md:px-12 relative"
      style={{ 
        backgroundColor: THEME.bg,
        overflow: "visible" // ← PASO 1: Permitimos que los fondos floten libremente entre secciones
      }}
    >
      
      {/* Capa de Decoraciones y Flujo Zigzag */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Elementos del lado derecho heredados */}
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        
        {/* PASO 2: Inyección del flujo izquierdo (Zigzag) */}
        {/* Círculo expansivo tenue abajo a la izquierda */}
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-25" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        
        {/* Pluma de flujo del lateral izquierdo que rompe el inicio de la grilla */}
        <img 
          src="/assets/plumas1.png" 
          style={{
            position: "absolute",
            top: "20%",
            left: "-4rem", // Sobresale levemente del contenedor para dar fluidez
            width: "16rem",
            opacity: 0.18,
            transform: "rotate(-35deg) scaleX(-1)", // Espejada y rotada para equilibrar la de arriba
            mixBlendMode: "multiply",
            pointerEvents: "none"
          }}
          alt=""
        />
      </div>

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
              <span style={{
                fontFamily: "'Quicksand', sans-serif", color: THEME.gold,
                fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase"
              }}>
                {t.tag}
              </span>
              <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: THEME.text, fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400, fontStyle: "italic"
            }} className="mb-4">
              {t.title}
            </h2>
            <p style={{
              fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted,
              maxWidth: "52ch", margin: "0 auto", lineHeight: 1.8
            }}>
              {t.description}
            </p>
          </div>
        </FadeIn>

        {/* Grid de tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.items.map((item, i) => {
            const meta = THERAPY_META[i];
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="rounded-3xl p-7 flex flex-col h-full transition-all duration-300 cursor-pointer"
                  onClick={() => setModalIdx(i)}
                  style={{
                    backgroundColor: THEME.card, border: `1px solid ${THEME.border}`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.04)`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 16px 40px ${meta.circleBg}70`;
                    e.currentTarget.style.borderColor = `${meta.accent}50`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 2px 12px rgba(0,0,0,0.04)`;
                    e.currentTarget.style.borderColor = THEME.border;
                  }}
                >
                  {/* Ícono + línea */}
                  <div className="mb-5 flex items-center justify-between">
                    <div style={{
                      width: 56, height: 56, borderRadius: "50%",
                      backgroundColor: meta.circleBg,
                      border: `1px solid ${meta.accent}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 14px ${meta.circleBg}90`,
                    }}>
                      <img
                        src={meta.icon}
                        alt={meta.iconAlt}
                        style={{ width: 36, height: 36, objectFit: "contain" }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                    </div>
                    <div style={{
                      flex: 1, height: 1, marginLeft: "0.85rem",
                      background: `linear-gradient(to right, ${meta.accent}40, transparent)`,
                    }} />
                  </div>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", color: THEME.text,
                    fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.6rem", lineHeight: 1.25
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted,
                    fontSize: "0.88rem", lineHeight: 1.75, flexGrow: 1
                  }}>
                    {item.short}
                  </p>

                  {/* Botones */}
                  <div className="flex gap-3 mt-6 flex-wrap">
                    <button
                      onClick={e => { e.stopPropagation(); setModalIdx(i); }}
                      style={{
                        padding: "0.45rem 1.1rem", borderRadius: "9999px",
                        border: `1px solid ${meta.accent}`,
                        color: meta.accent, fontFamily: "'Quicksand', sans-serif",
                        fontSize: "0.78rem", fontWeight: 600,
                        backgroundColor: "transparent", letterSpacing: "0.04em",
                        cursor: "pointer", transition: "background 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${meta.accent}12`; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                      {t.btn}
                    </button>
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{
                        padding: "0.45rem 1.1rem", borderRadius: "9999px",
                        border: "none",
                        backgroundColor: `${meta.accent}18`,
                        color: meta.accent, fontFamily: "'Quicksand', sans-serif",
                        fontSize: "0.78rem", fontWeight: 600,
                        letterSpacing: "0.04em", cursor: "pointer", transition: "background 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${meta.accent}28`; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = `${meta.accent}18`; }}
                    >
                      {t.btnReservar}
                    </button>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Separador de constelación */}
      <div style={{ marginTop: "3rem" }}>
        <ConstellationDivider
          fromColor="transparent"
          toColor="transparent"
        />
      </div>

      {/* MODAL */}
      {/* MODAL */}
      {activeItem && activeMeta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          style={{
            backgroundColor: "rgba(45,41,36,0.52)",
            backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)"
          }}
          onClick={() => setModalIdx(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl p-6 sm:p-8 md:p-10"
            style={{
              backgroundColor: THEME.card,
              boxShadow: `0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px ${activeMeta.accent}28`,
              animation: "modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
              overflowY: "auto",
              maxHeight: "calc(100vh - 2rem)", // Evita que se choque con los extremos en celulares
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Línea decorativa superior */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: 100, height: 3, borderRadius: "0 0 6px 6px",
              background: `linear-gradient(to right, transparent, ${activeMeta.accent}, transparent)`,
            }} />

            {/* Gradiente de fondo difuminado */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 140, height: 140,
              borderRadius: "0 1.75rem 0 100%",
              background: `radial-gradient(circle at 100% 0%, ${activeMeta.circleBg}35, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Fila del Ícono principal */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.25rem" }}>
              <div style={{
                width: 54, height: 54, borderRadius: "50%",
                backgroundColor: activeMeta.circleBg,
                border: `1px solid ${activeMeta.accent}28`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 6px 22px ${activeMeta.circleBg}80`,
              }} backdrop-blur="md">
                <img src={activeMeta.icon} alt={activeMeta.iconAlt}
                  style={{ width: 34, height: 34, objectFit: "contain", margin: "auto" }}
                  onError={e => { e.target.style.display = "none"; }} />
              </div>
              <div style={{ flex: 1, height: 1, backgroundColor: activeMeta.accent, opacity: 0.15 }} />
            </div>

            {/* Badge de Categoría */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              backgroundColor: `${activeMeta.accent}12`,
              border: `1px solid ${activeMeta.accent}28`,
              borderRadius: "9999px", padding: "0.22rem 0.8rem", marginBottom: "0.6rem",
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                backgroundColor: activeMeta.accent, opacity: 0.7
              }} />
              <span style={{
                fontFamily: "'Quicksand', sans-serif", fontSize: "0.65rem",
                color: activeMeta.accent, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Terapia holística
              </span>
            </div>

            {/* Título Adaptable */}
            <h3 style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: THEME.text, fontSize: "clamp(1.4rem, 4vw, 2.1rem)", // Más elástico para pantallas chicas
              fontWeight: 400, fontStyle: "italic", marginBottom: "1rem", lineHeight: 1.2
            }}>
              {activeItem.title}
            </h3>

            {/* Texto Descriptivo con tamaño controlado */}
            <p style={{
              fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted,
              fontSize: "clamp(0.88rem, 2.5vw, 0.96rem)", lineHeight: 1.75, marginBottom: "1.5rem"
            }}>
              {activeItem.full}
            </p>

            <div style={{ height: 1, backgroundColor: activeMeta.circleBg, opacity: 0.5, marginBottom: "1.25rem" }} />

            {/* Botones de acción flexibles (Pasan a columna en pantallas mini si no entran) */}
            <div className="flex gap-3 flex-wrap sm:flex-nowrap">
              <button
                onClick={() => { setModalIdx(null); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  flex: "1 1 auto", padding: "0.7rem 1.5rem", borderRadius: "9999px", border: "none",
                  backgroundColor: activeMeta.btnFill, color: "#fff",
                  fontFamily: "'Quicksand', sans-serif", fontSize: "0.85rem", fontWeight: 600,
                  boxShadow: `0 4px 18px ${activeMeta.btnFill}35`, letterSpacing: "0.03em",
                  cursor: "pointer", transition: "all 0.22s", textWith: "nowrap"
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {t.btnReservar}
              </button>
              <button
                onClick={() => setModalIdx(null)}
                style={{
                  flex: "1 1 auto", padding: "0.7rem 1.5rem", borderRadius: "9999px",
                  border: `1px solid ${THEME.border}`, color: THEME.textMuted,
                  fontFamily: "'Quicksand', sans-serif", fontSize: "0.85rem", fontWeight: 600,
                  backgroundColor: "transparent", cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = activeMeta.accent;
                  e.currentTarget.style.color = activeMeta.accent;
                  e.currentTarget.style.backgroundColor = `${activeMeta.accent}0A`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = THEME.border;
                  e.currentTarget.style.color = THEME.textMuted;
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {t.btnClose}
              </button>
            </div>

            {/* Botón flotante 'X' de cierre */}
            <button onClick={() => setModalIdx(null)} style={{
              position: "absolute", top: "1rem", right: "1.2rem",
              color: THEME.textMuted, fontSize: "1.1rem", lineHeight: 1, opacity: 0.4,
              background: "transparent", border: "none", cursor: "pointer", transition: "opacity 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "0.4"; }}
            >✕</button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </section>
  );
}