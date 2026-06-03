// import { useState } from "react";
// import { THEME, T } from "../constants";
// import { StarDeco, FadeIn, SectionTag, scrollTo, CircleDeco, MoonDeco } from "./ui";
// import DividerLeaves from "./DividerLeaves";

// export default function Terapias({ lang }) {
// const t = T[lang].terapias;
//   const [modalIdx, setModalIdx] = useState(null);
//   const activeItem = modalIdx !== null ? t.items[modalIdx] : null;

//   return (
//     <section id="terapias" className="py-12 px-6 md:px-12 relative" style={{ backgroundColor: THEME.bg }}>

//             <div className="absolute inset-0 pointer-events-none overflow-hidden">
//               <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
//               <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
//               <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
//               <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
//               <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
//               <MoonDeco className="absolute bottom-1/4 left-1/3" />
//             </div>



//       <div className="absolute inset-0 pointer-events-none">
//         <StarDeco className="absolute top-20 left-16" />
//         <StarDeco className="absolute bottom-24 right-24" />
//       </div>



//       <div className="max-w-6xl mx-auto">
//         <FadeIn>
//           <div className="text-center mb-16">
//             <div className="flex items-center justify-center gap-2 mb-4">
//               <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
//               <span style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.gold, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>{t.tag}</span>
//               <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
//             </div>
//             <h2 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: THEME.text, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 400, fontStyle: "italic" }} className="mb-4">
//               {t.title}
//             </h2>
//             <p style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted, maxWidth: "52ch", margin: "0 auto", lineHeight: 1.8 }}>
//               {t.description}
//             </p>
//           </div>
//         </FadeIn>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {t.items.map((item, i) => (
//             <FadeIn key={i} delay={i * 0.08}>
//               <div
//                 className="rounded-3xl p-7 flex flex-col h-full transition-all duration-300 cursor-pointer group"
//                 onClick={() => setModalIdx(i)}
//                 style={{
//                   backgroundColor: THEME.card,
//                   border: `1px solid ${THEME.border}`,
//                   boxShadow: `0 2px 12px rgba(0,0,0,0.04)`,
//                 }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.boxShadow = `0 16px 40px rgba(138,158,138,0.18)`;
//                   e.currentTarget.style.borderColor = `${THEME.sage}60`;
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = `0 2px 12px rgba(0,0,0,0.04)`;
//                   e.currentTarget.style.borderColor = THEME.border;
//                 }}
//               >
//                 {/* Icon + line */}
//                 <div className="mb-4 flex items-center justify-between">
//                   <div
//                     style={{
//                       width: 44, height: 44, borderRadius: "50%",
//                       backgroundColor: `${THEME.sage}18`,
//                       border: `1px solid ${THEME.sage}30`,
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                     }}
//                   >
//                     <span style={{ fontSize: "1.25rem", color: THEME.gold }}>{item.icon}</span>
//                   </div>
//                   <div style={{ width: 28, height: 1, backgroundColor: THEME.border }} />
//                 </div>

//                 <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: THEME.text, fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.6rem" }}>
//                   {item.title}
//                 </h3>
//                 <p style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted, fontSize: "0.88rem", lineHeight: 1.75, flexGrow: 1 }}>
//                   {item.short}
//                 </p>

//                 <div className="flex gap-3 mt-6">
//                   <button
//                     onClick={e => { e.stopPropagation(); setModalIdx(i); }}
//                     className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
//                     style={{
//                       border: `1px solid ${THEME.sage}`,
//                       color: THEME.sage,
//                       fontFamily: "'Quicksand', sans-serif",
//                       backgroundColor: "transparent",
//                       letterSpacing: "0.04em",
//                     }}
//                   >
//                     {t.btn}
//                   </button>
//                   <button
//                     onClick={e => { e.stopPropagation(); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
//                     className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
//                     style={{ backgroundColor: `${THEME.sage}18`, color: THEME.sage, fontFamily: "'Quicksand', sans-serif", letterSpacing: "0.04em" }}
//                   >
//                     {t.btnReservar}
//                   </button>
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>

//       {/* ===== MODAL OVERLAY ===== */}
//       {activeItem && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           style={{ backgroundColor: "rgba(45,41,36,0.55)", backdropFilter: "blur(8px)" }}
//           onClick={() => setModalIdx(null)}
//         >
//           <div
//             className="relative max-w-lg w-full rounded-3xl p-10"
//             style={{
//               backgroundColor: THEME.card,
//               boxShadow: `0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px ${THEME.gold}30`,
//               animation: "modalIn 0.3s ease",
//             }}
//             onClick={e => e.stopPropagation()}
//           >
//             {/* Decorative top line */}
//             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.8rem" }}>
//               <div style={{ width: 32, height: 1, backgroundColor: THEME.gold, opacity: 0.5 }} />
//               <span style={{ fontSize: "1.4rem", color: THEME.gold }}>{activeItem.icon}</span>
//               <div style={{ flex: 1, height: 1, backgroundColor: THEME.gold, opacity: 0.2 }} />
//             </div>

//             <h3
//               style={{
//                 fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//                 color: THEME.text,
//                 fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 marginBottom: "1.2rem",
//                 lineHeight: 1.25,
//               }}
//             >
//               {activeItem.title}
//             </h3>

//             <p
//               style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: THEME.textMuted,
//                 fontSize: "0.96rem",
//                 lineHeight: 1.9,
//                 marginBottom: "2rem",
//               }}
//             >
//               {activeItem.full}
//             </p>

//             {/* Divider */}
//             <div style={{ height: 1, backgroundColor: THEME.border, marginBottom: "1.6rem" }} />

//             <div className="flex gap-3 flex-wrap">
//               <button
//                 onClick={() => { setModalIdx(null); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
//                 className="px-6 py-3 rounded-full font-semibold transition-all"
//                 style={{
//                   backgroundColor: THEME.sage,
//                   color: "#fff",
//                   fontFamily: "'Quicksand', sans-serif",
//                   fontSize: "0.88rem",
//                   boxShadow: `0 4px 20px ${THEME.sage}40`,
//                   letterSpacing: "0.03em",
//                 }}
//               >
//                 {t.btnReservar}
//               </button>
//               <button
//                 onClick={() => setModalIdx(null)}
//                 className="px-6 py-3 rounded-full font-semibold transition-all"
//                 style={{
//                   border: `1px solid ${THEME.border}`,
//                   color: THEME.textMuted,
//                   fontFamily: "'Quicksand', sans-serif",
//                   fontSize: "0.88rem",
//                   backgroundColor: "transparent",
//                 }}
//               >
//                 {t.btnClose}
//               </button>
//             </div>

//             {/* Close X */}
//             <button
//               onClick={() => setModalIdx(null)}
//               style={{
//                 position: "absolute",
//                 top: "1.2rem",
//                 right: "1.5rem",
//                 color: THEME.textMuted,
//                 fontSize: "1.3rem",
//                 lineHeight: 1,
//                 fontFamily: "sans-serif",
//                 opacity: 0.5,
//               }}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//               {/* DividerLeaves al final */}
//               <div style={{ marginTop: "1.5rem" }}>
//                 <DividerLeaves />
//               </div>


//     </section>



//   );
// };


import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, FadeIn, CircleDeco, MoonDeco } from "./ui";
import DividerLeaves from "./DividerLeaves";

// ============================================================
//  THERAPY_META — mapa ícono ↔ terapia ↔ colores
//
//  Índices corresponden a T[lang].terapias.items[i]:
//    0  Sanación Energética     → cristal     verde menta   iconos_1
//    1  Corte de Lazos          → cadena      sage verde    iconos_5
//    2  Regresión               → luna        azul celeste  iconos_2
//    3  Mindfulness             → loto        rosa          iconos_3
//    4  Tapping EFT             → mano corazón  durazno     iconos_4
//    5  Terapias Florales       → mandala flor  rosa mauve  iconos_6
//
//  circleBg  = fondo del círculo (extraído del PNG original)
//  accent    = color texto/borde
//  btnFill   = relleno botón "Reservar" en modal
// ============================================================
const THERAPY_META = [
  {
    icon: "/assets/iconos_1.png",
    iconAlt: "Cristal — Sanación Energética",
    circleBg: "#C5DDD4",
    accent: "#5F9183",
    btnFill: "#5F9183",
  },
  {
    icon: "/assets/iconos_5.png",
    iconAlt: "Cadena — Corte de Lazos Etéricos",
    circleBg: "#C4D4CC",
    accent: "#567A6E",
    btnFill: "#567A6E",
  },
  {
    icon: "/assets/iconos_2.png",
    iconAlt: "Luna — Regresión a Vidas Pasadas",
    circleBg: "#BDD4DF",
    accent: "#5A8FA4",
    btnFill: "#5A8FA4",
  },
  {
    icon: "/assets/iconos_3.png",
    iconAlt: "Loto — Mindfulness y Meditación",
    circleBg: "#F0CBCB",
    accent: "#B5736B",
    btnFill: "#B5736B",
  },
  {
    icon: "/assets/iconos_4.png",
    iconAlt: "Mano con corazón — Tapping EFT",
    circleBg: "#F2DEC8",
    accent: "#B8884A",
    btnFill: "#B8884A",
  },
  {
    icon: "/assets/iconos_6.png",
    iconAlt: "Mandala floral — Terapias Florales",
    circleBg: "#EAC5CE",
    accent: "#A85F72",
    btnFill: "#A85F72",
  },
  {
    icon: "/assets/iconos_7.png",
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
      style={{ backgroundColor: THEME.bg }}
    >
      {/* Decoraciones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />
      </div>

      <div className="max-w-6xl mx-auto">

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
                      {/* ↓ PNG con fondo transparente — /assets/iconos_X-removebg-preview.png */}
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

                  {/* Botones con el color propio de la terapia */}
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

      <div style={{ marginTop: "1.5rem" }}>
        <DividerLeaves />
      </div>

      {/* MODAL */}
      {activeItem && activeMeta && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(45,41,36,0.52)",
            backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)"
          }}
          onClick={() => setModalIdx(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl p-10"
            style={{
              backgroundColor: THEME.card,
              boxShadow: `0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px ${activeMeta.accent}28`,
              animation: "modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
              overflow: "hidden",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Borde top del color de la terapia */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: 100, height: 3, borderRadius: "0 0 6px 6px",
              background: `linear-gradient(to right, transparent, ${activeMeta.accent}, transparent)`,
            }} />

            {/* Reflejo de color en esquina */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 160, height: 160,
              borderRadius: "0 1.75rem 0 100%",
              background: `radial-gradient(circle at 100% 0%, ${activeMeta.circleBg}35, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Ícono grande + línea */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.5rem" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                backgroundColor: activeMeta.circleBg,
                border: `1px solid ${activeMeta.accent}28`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 6px 22px ${activeMeta.circleBg}80`,
              }}>
                <img src={activeMeta.icon} alt={activeMeta.iconAlt}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                  onError={e => { e.target.style.display = "none"; }} />
              </div>
              <div style={{ flex: 1, height: 1, backgroundColor: activeMeta.accent, opacity: 0.2 }} />
            </div>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              backgroundColor: `${activeMeta.accent}12`,
              border: `1px solid ${activeMeta.accent}28`,
              borderRadius: "9999px", padding: "0.22rem 0.85rem", marginBottom: "0.75rem",
            }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                backgroundColor: activeMeta.accent, opacity: 0.7
              }} />
              <span style={{
                fontFamily: "'Quicksand', sans-serif", fontSize: "0.68rem",
                color: activeMeta.accent, fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Terapia holística
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: THEME.text, fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              fontWeight: 400, fontStyle: "italic", marginBottom: "1.2rem", lineHeight: 1.2
            }}>
              {activeItem.title}
            </h3>

            <p style={{
              fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted,
              fontSize: "0.96rem", lineHeight: 1.9, marginBottom: "2rem"
            }}>
              {activeItem.full}
            </p>

            <div style={{ height: 1, backgroundColor: activeMeta.circleBg, marginBottom: "1.5rem" }} />

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => { setModalIdx(null); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  padding: "0.75rem 1.75rem", borderRadius: "9999px", border: "none",
                  backgroundColor: activeMeta.btnFill, color: "#fff",
                  fontFamily: "'Quicksand', sans-serif", fontSize: "0.88rem", fontWeight: 600,
                  boxShadow: `0 4px 20px ${activeMeta.btnFill}40`, letterSpacing: "0.03em",
                  cursor: "pointer", transition: "all 0.22s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {t.btnReservar}
              </button>
              <button
                onClick={() => setModalIdx(null)}
                style={{
                  padding: "0.75rem 1.75rem", borderRadius: "9999px",
                  border: `1px solid ${THEME.border}`, color: THEME.textMuted,
                  fontFamily: "'Quicksand', sans-serif", fontSize: "0.88rem", fontWeight: 600,
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

            <button onClick={() => setModalIdx(null)} style={{
              position: "absolute", top: "1.2rem", right: "1.5rem",
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