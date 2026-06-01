// import { useState } from "react";
// import { THEME, T } from "../constants";
// import { StarDeco, MoonDeco, CircleDeco, Feather, FadeIn, SectionTag } from "./ui";

// export default function Testimonios({ lang }) {
//   const t = T[lang].testimonios;
//   const [active, setActive] = useState(0);

//   return (
//     <section
//       id="testimonios"
//       className="py-24 px-6 md:px-12 relative overflow-hidden"
//       style={{ backgroundColor: THEME.bg }}
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <StarDeco className="absolute top-16 left-12" />
//         <MoonDeco className="absolute bottom-16 right-16" />
//         <CircleDeco className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10" />
//         {/* Pluma tono celeste frío */}
//         <Feather
//           filter="saturate(0.45) brightness(1.0) hue-rotate(180deg)"
//           style={{
//             bottom: "-6%", right: "-4%",
//             width: "min(340px, 42vw)",
//             opacity: 0.22,
//             transform: "rotate(-10deg) scaleX(-1)",
//           }}
//         />
//       </div>

//       <div className="max-w-4xl mx-auto text-center">
//         <FadeIn>
//           <SectionTag label={t.tag} />
//           <h2 style={{
//             fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//             color: THEME.text,
//             fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
//             fontWeight: 400,
//             fontStyle: "italic",
//           }} className="mb-16">
//             {t.title}
//           </h2>
//         </FadeIn>

//         <FadeIn delay={0.15}>
//           {/* Tarjeta de testimonio */}
//           <div
//             className="rounded-3xl p-10 md:p-14 relative mb-8"
//             style={{
//               backgroundColor: THEME.card,
//               border: `1px solid ${THEME.border}`,
//               boxShadow: `0 8px 40px rgba(0,0,0,0.05)`,
//             }}
//           >
//             {/* Comilla decorativa */}
//             <div style={{
//               position: "absolute",
//               top: "1.5rem",
//               left: "2rem",
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "6rem",
//               lineHeight: 1,
//               color: THEME.gold,
//               opacity: 0.12,
//               fontStyle: "italic",
//               userSelect: "none",
//               pointerEvents: "none",
//             }}>
//               "
//             </div>

//             <p style={{
//               fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//               color: THEME.text,
//               fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
//               fontStyle: "italic",
//               lineHeight: 1.7,
//               fontWeight: 400,
//               position: "relative",
//               zIndex: 1,
//             }} className="mb-6">
//               {t.items[active].text}
//             </p>

//             <div className="flex items-center justify-center gap-3">
//               <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
//               <span style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: THEME.gold,
//                 fontSize: "0.8rem",
//                 letterSpacing: "0.12em",
//               }}>
//                 {t.items[active].author}
//               </span>
//               <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
//             </div>
//           </div>

//           {/* Dots de navegación */}
//           <div className="flex justify-center gap-2 flex-wrap">
//             {t.items.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 style={{
//                   width: i === active ? 24 : 8,
//                   height: 8,
//                   borderRadius: 9999,
//                   backgroundColor: i === active ? THEME.sage : THEME.border,
//                   transition: "all 0.3s ease",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               />
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// ============================================================
//  TestimonialsSlider.jsx
//  Carrusel de testimonios — Magalí Sol Cerezo
//
//  ESTRUCTURA ORIGINAL preservada íntegramente.
//  Se aplicaron los estilos del sistema de diseño del proyecto:
//    · Tipografía: Cormorant Garamond (serif) + Quicksand (sans)
//    · Paleta THEME centralizada
//    · Decoraciones: plumas, StarDeco, MoonDeco
//    · fondo: THEME.bgSage (verde agua) — sección posterior a OnlineSessions
//
//  DEPENDENCIAS ELIMINADAS (reemplazadas con CSS nativo):
//    · framer-motion  → transiciones CSS opacity + transform
//    · lucide-react   → SVG inline (ChevronLeft, ChevronRight, Quote)
//    · Sin instalación extra requerida — 0 dependencias externas
//
//  AUTOPLAY: cada 6 segundos, se pausa al hacer hover.
// ============================================================

import { useState, useEffect, useRef } from "react";
import DividerLeaves from "./DividerLeaves";

// ─── Paleta THEME — sincronizá con App.jsx ───────────────────
const THEME = {
  bg:        "#FCFBFA",
  bgSage:    "#EEF3EE",
  bgRose:    "#F7F0ED",
  card:      "#FDFCFA",
  sage:      "#8A9E8A",
  rose:      "#C4968A",
  gold:      "#C9A96E",
  text:      "#2D2924",
  textMuted: "#7A6E66",
  border:    "#E8E2DC",
};

// ─── Tipografías ─────────────────────────────────────────────
const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans:  "'Quicksand', 'Nunito', system-ui, sans-serif",
};

// ─── Testimonios ─────────────────────────────────────────────
// Podés reemplazar o ampliar este array con los datos reales
const testimonials = [
  {
    text:   "Hoy siento desde mi ser que estoy sanando, con una visión mucho más clara. Gracias por acompañarme en este proceso.",
    author: "C. M.",
    role:   "Proceso de sanación energética",
  },
  {
    text:   "Después de meditar sentí mucha paz. Me siento agradecida y sobre todo en calma.",
    author: "L. P.",
    role:   "Mindfulness y meditación",
  },
  {
    text:   "La limpieza energética que nos hiciste en el departamento realmente se sintió. Todo se siente mucho más liviano y tranquilo.",
    author: "A. R.",
    role:   "Sanación energética en espacios",
  },
  {
    text:   "Cada sesión me deja mucha paz y claridad. Maga sabe acompañar incluso después del encuentro terapéutico.",
    author: "V. S.",
    role:   "Terapia holística integral",
  },
  {
    text:   "Tu acompañamiento me ayudó muchísimo emocionalmente. Gracias por tu dulzura, dedicación y contención.",
    author: "M. G.",
    role:   "Corte de lazos etéricos",
  },
  {
    text:   "La meditación que me enviaste me ayudó muchísimo en un momento muy difícil. Sentí alivio y una conexión muy profunda conmigo.",
    author: "F. T.",
    role:   "Meditación guiada",
  },
  {
    text:   "Gracias por ayudarme a bajar mil revoluciones y poder ver las situaciones desde otro lugar.",
    author: "J. N.",
    role:   "Tapping EFT",
  },
  {
    text:   "Sos un ser de luz realmente. Escucharte me transmite muchísima paz.",
    author: "S. B.",
    role:   "Proceso de transformación personal",
  },
];

// ─── Traducciones del header ──────────────────────────────────
const t = {
  es: {
    tag:   "Testimonios",
    title: "Voces que sanan",
  },
  en: {
    tag:   "Testimonials",
    title: "Voices that heal",
  },
};

// ─── Iconos SVG inline ────────────────────────────────────────
// Reemplazan ChevronLeft / ChevronRight / Quote de lucide-react

const IconChevronLeft = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconChevronRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconQuote = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none"
    style={{ position: "absolute", ...style }} aria-hidden="true">
    <path d="M15 9.5A6 6 0 0 1 8.5 3a6 6 0 1 0 6.5 6.5z"
      stroke={THEME.gold} strokeWidth="1" strokeOpacity="0.35" fill="none" />
  </svg>
);

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────
export default function TestimonialsSlider({ language = "es" }) {
  const tx = t?.[language] || t.es;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating,    setAnimating   ] = useState(false);
  const [direction,    setDirection   ] = useState("next"); // "next" | "prev"
  const [paused,       setPaused      ] = useState(false);
  const timeoutRef = useRef(null);

  // ── Autoplay — se pausa al hacer hover sobre el slider ──
  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setInterval(() => {
      transitionTo((currentIndex + 1) % testimonials.length, "next");
    }, 6000);
    return () => clearInterval(timeoutRef.current);
  }, [currentIndex, paused]);

  // ── Transición animada ────────────────────────────────────
  const transitionTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    // Espera a que el fade-out termine, luego cambia el índice
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 380);
  };

  const goToNext = () =>
    transitionTo((currentIndex + 1) % testimonials.length, "next");

  const goToPrevious = () =>
    transitionTo((currentIndex - 1 + testimonials.length) % testimonials.length, "prev");

  // ── Estilos de transición del contenido ──────────────────
  const contentStyle = {
    transition: "opacity 0.38s ease, transform 0.38s ease",
    opacity:    animating ? 0 : 1,
    transform:  animating
      ? direction === "next" ? "translateY(14px)" : "translateY(-14px)"
      : "translateY(0)",
  };

  // ── Estilos compartidos ───────────────────────────────────
  const arrowBtnBase = {
    width:          48,
    height:         48,
    borderRadius:   "50%",
    backgroundColor: THEME.card,
    border:         `1.5px solid rgba(138,158,138,0.3)`,
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    cursor:         "pointer",
    transition:     "all 0.22s ease",
    color:          THEME.textMuted,
    boxShadow:      `0 2px 12px rgba(45,41,36,0.06)`,
    flexShrink:     0,
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <section


      id="testimonios"
      style={{
        position:        "relative",
        // padding:         "6rem 1.5rem",
        backgroundColor: THEME.bg,
        overflow:        "hidden",
      }}
    >
      {/* ── Decoraciones de fondo ── */}
      <StarDeco style={{ top: "2rem",    left: "8%"   }} />
      <StarDeco style={{ top: "2rem",    right: "12%" }} />
      <StarDeco style={{ bottom: "3rem", left: "18%", width: 8, height: 8 }} />
      <StarDeco style={{ bottom: "2rem", right: "8%", width: 16, height: 16 }} />
      <MoonDeco style={{ top: "1.5rem",  right: "6%" }} />
      <MoonDeco style={{ bottom: "2rem", left: "5%"  }} />

      {/* Círculo ornamental central — muy sutil */}
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        width:        600,
        height:       600,
        borderRadius: "50%",
        border:       `1px solid rgba(201,169,110,0.07)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%, -50%)",
        width:        400,
        height:       400,
        borderRadius: "50%",
        border:       `1px solid rgba(138,158,138,0.07)`,
        pointerEvents: "none",
      }} />

      {/* Pluma derecha — tono celeste */}
      {/* ↓ plumas1.png: mix-blend-mode multiply elimina el fondo negro */}
      <img
        src=""
        alt=""
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "-5%",
          right:         "-3%",
          width:         "clamp(200px, 32vw, 380px)",
          opacity:       0.55,
          mixBlendMode:  "multiply",
          transform:     "rotate(-8deg) scaleX(-1)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          filter:        "saturate(0.4) brightness(0.88) hue-rotate(170deg)",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
      />

      <div style={{ maxWidth: "56rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ════════════════════════════════
            HEADER
        ════════════════════════════════ */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>

          {/* Tag dorado */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1rem" }}>
            <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
            <span style={{
              fontFamily:    FONT.sans,
              fontSize:      "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight:    600,
              color:         THEME.gold,
            }}>
              {tx.tag}
            </span>
            <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
          </div>

          {/* Título */}
          <h2 style={{
            fontFamily:  FONT.serif,
            fontSize:    "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight:  400,
            fontStyle:   "italic",
            lineHeight:  1.2,
            color:       THEME.text,
          }}>
            {tx.title}
          </h2>
        </div>

        {/* ════════════════════════════════
            SLIDER
        ════════════════════════════════ */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Ícono de comillas — flotante sobre la card */}
          <div style={{
            position:       "absolute",
            top:            "-2rem",
            left:           "50%",
            transform:      "translateX(-50%)",
            zIndex:         10,
            color:          THEME.gold,
            opacity:        0.18,
            lineHeight:     1,
            pointerEvents:  "none",
          }}>
            <IconQuote />
          </div>

          {/* ── Card principal del testimonio ── */}
          <div
            style={{
              backgroundColor: THEME.card,
              borderRadius:    "1.5rem",
              boxShadow:       `0 16px 56px rgba(45,41,36,0.08), 0 2px 8px rgba(201,169,110,0.08)`,
              border:          `1px solid rgba(201,169,110,0.14)`,
              padding:         "clamp(2rem, 5vw, 4rem)",
              minHeight:       320,
              display:         "flex",
              flexDirection:   "column",
              justifyContent:  "center",
              position:        "relative",
              overflow:        "hidden",
            }}
          >
            {/* Detalle de borde dorado superior */}
            <div style={{
              position:     "absolute",
              top:          0,
              left:         "50%",
              transform:    "translateX(-50%)",
              width:        80,
              height:       2,
              borderRadius: "0 0 4px 4px",
              background:   `linear-gradient(to right, transparent, ${THEME.gold}80, transparent)`,
            }} />

            {/* Contenido animado */}
            <div style={{ textAlign: "center", ...contentStyle }}>

              {/* Texto del testimonio */}
              <p style={{
                fontFamily:   FONT.serif,
                fontSize:     "clamp(1.2rem, 2.8vw, 1.65rem)",
                fontStyle:    "italic",
                fontWeight:   400,
                lineHeight:   1.72,
                color:        THEME.text,
                marginBottom: "2rem",
              }}>
                "{testimonials[currentIndex].text}"
              </p>

              {/* Separador ornamental */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1.25rem" }}>
                <div style={{ width: 32, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}60)` }} />
                <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                  <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z"
                    fill={THEME.gold} fillOpacity="0.7" />
                </svg>
                <div style={{ width: 32, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}60)` }} />
              </div>

              {/* Autor */}
              <div>
                <div style={{
                  fontFamily:   FONT.sans,
                  fontSize:     "1rem",
                  fontWeight:   700,
                  color:        THEME.text,
                  marginBottom: "0.25rem",
                  letterSpacing: "0.02em",
                }}>
                  {testimonials[currentIndex].author}
                </div>
                <div style={{
                  fontFamily:    FONT.sans,
                  fontSize:      "0.78rem",
                  color:         THEME.sage,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight:    500,
                }}>
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* ── Navegación: flechas + dots ── */}
          <div style={{
            display:        "flex",
            justifyContent: "center",
            alignItems:     "center",
            gap:            "1.25rem",
            marginTop:      "2rem",
          }}>

            {/* Flecha izquierda */}
            <button
              onClick={goToPrevious}
              aria-label="Testimonio anterior"
              style={arrowBtnBase}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = THEME.sage;
                e.currentTarget.style.color           = "#fff";
                e.currentTarget.style.borderColor     = THEME.sage;
                e.currentTarget.style.boxShadow       = `0 6px 20px rgba(138,158,138,0.35)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = THEME.card;
                e.currentTarget.style.color           = THEME.textMuted;
                e.currentTarget.style.borderColor     = "rgba(138,158,138,0.3)";
                e.currentTarget.style.boxShadow       = `0 2px 12px rgba(45,41,36,0.06)`;
              }}
            >
              <IconChevronLeft />
            </button>

            {/* Dots de navegación */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {testimonials.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    onClick={() => transitionTo(index, index > currentIndex ? "next" : "prev")}
                    aria-label={`Testimonio ${index + 1}`}
                    style={{
                      width:        isActive ? 28  : 8,
                      height:       8,
                      borderRadius: "9999px",
                      border:       "none",
                      cursor:       "pointer",
                      padding:      0,
                      transition:   "all 0.3s ease",
                      backgroundColor: isActive ? THEME.sage : `rgba(138,158,138,0.28)`,
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.backgroundColor = `rgba(138,158,138,0.5)`;
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.backgroundColor = `rgba(138,158,138,0.28)`;
                    }}
                  />
                );
              })}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={goToNext}
              aria-label="Siguiente testimonio"
              style={arrowBtnBase}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = THEME.sage;
                e.currentTarget.style.color           = "#fff";
                e.currentTarget.style.borderColor     = THEME.sage;
                e.currentTarget.style.boxShadow       = `0 6px 20px rgba(138,158,138,0.35)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = THEME.card;
                e.currentTarget.style.color           = THEME.textMuted;
                e.currentTarget.style.borderColor     = "rgba(138,158,138,0.3)";
                e.currentTarget.style.boxShadow       = `0 2px 12px rgba(45,41,36,0.06)`;
              }}
            >
              <IconChevronRight />
            </button>
          </div>

          {/* ── Indicador de progreso automático ── */}
          {!paused && (
            <div style={{
              position:  "relative",
              height:    2,
              maxWidth:  200,
              margin:    "1.25rem auto 0",
              borderRadius: "9999px",
              backgroundColor: `rgba(138,158,138,0.15)`,
              overflow:  "hidden",
            }}>
              <div
                key={currentIndex}          /* Re-monta la animación en cada cambio */
                style={{
                  position:   "absolute",
                  inset:      0,
                  borderRadius: "9999px",
                  backgroundColor: THEME.sage,
                  transformOrigin: "left center",
                  animation:  "progressBar 6s linear forwards",
                }}
              />
            </div>
          )}
        </div>
        {/* ── FIN SLIDER ── */}

      </div>

      {/* Animación de barra de progreso — inyectada una sola vez */}
      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>


                {/* DividerLeaves al final */}
                <div style={{ marginTop: "1.5rem" }}>
                  <DividerLeaves />
                </div>

    </section>
  );
}