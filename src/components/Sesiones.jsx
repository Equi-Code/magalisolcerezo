// import { useState } from "react";
// import {
//   Globe,
//   Video,
//   Clock,
//   Shield,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { THEME, T } from "../constants";
// import { MoonDeco, StarDeco, Feather, FadeIn, SectionTagLeft } from "./ui";
// import { getNextBusinessDays } from "../utils/calendar";

// // ↓ REEMPLAZAR con el número real de WhatsApp de Magalí (formato internacional sin +)
// const WA_NUMBER = "5491100000000";

// export default function Sesiones({ lang }) {
//   const t = T[lang].sesiones;
//   const tr = (es, en) => (lang === "es" ? es : en);
//   const availableDays = getNextBusinessDays(4, lang);
//   const [name, setName] = useState("");
//   const [selectedDay, setSelectedDay] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");

//   const isReady = name.trim() && selectedDay && selectedTime;

//   const handleWhatsApp = () => {
//     if (!isReady) return;
//     const msg = t.waMsg(name.trim(), selectedDay, selectedTime);
//     window.open(
//       `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`,
//       "_blank"
//     );
//   };

//   const pillBase = {
//     fontFamily: "'Quicksand', sans-serif",
//     fontSize: "0.84rem",
//     fontWeight: 600,
//     padding: "0.45rem 1rem",
//     borderRadius: "0.75rem",
//     cursor: "pointer",
//     transition: "all 0.2s",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "0.75rem 1.1rem",
//     borderRadius: "0.85rem",
//     border: `1px solid ${THEME.border}`,
//     fontFamily: "'Quicksand', sans-serif",
//     color: THEME.text,
//     fontSize: "0.9rem",
//     backgroundColor: THEME.bg,
//     outline: "none",
//     marginBottom: "1.2rem",
//   };

//   return (
//     <section
//       id="sesiones"
//       className="py-24 px-6 md:px-12 relative overflow-hidden"
//       style={{ backgroundColor: `${THEME.rose}0A` }}
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <MoonDeco className="absolute top-10 right-20" />
//         <StarDeco className="absolute bottom-20 left-24" />
//         <Feather
//           filter="saturate(0.55) brightness(1.0) hue-rotate(10deg)"
//           style={{
//             bottom: "-8%", right: "5%",
//             width: "min(260px, 32vw)",
//             opacity: 0.16,
//             transform: "rotate(-8deg)",
//           }}
//         />
//       </div>





// <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_560px] gap-24 xl:gap-32 items-start">

//   {/* ── Info ── */}
//   <FadeIn delay={0.1}>
//     <div className="max-w-xl">
//       <SectionTagLeft label={t.tag} />

//       <h2
//         style={{
//           fontFamily:
//             "'Cormorant Garamond', 'Playfair Display', serif",
//           color: THEME.text,
//           fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
//           fontWeight: 400,
//           fontStyle: "italic",
//           lineHeight: 1.1,
//         }}
//         className="mb-7"
//       >
//         {t.title}
//       </h2>

//       <p
//         style={{
//           fontFamily: "'Quicksand', sans-serif",
//           color: THEME.textMuted,
//           lineHeight: 1.95,
//           marginBottom: "2.4rem",
//           fontSize: "1rem",
//         }}
//       >
//         {t.description}
//       </p>

//       <div className="flex flex-col gap-4">
//         {t.features.map((f, i) => (
//           <div key={i} className="flex items-center gap-3">
//             <div
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: "50%",
//                 backgroundColor: THEME.sage,
//                 flexShrink: 0,
//               }}
//             />

//             <span
//               style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: THEME.textMuted,
//                 fontSize: "0.96rem",
//               }}
//             >
//               {f}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </FadeIn>

//   {/* ── Widget de reserva ── */}
  
//   <FadeIn delay={0.25}>
//     <div
//       className="rounded-[2rem] p-10 max-w-[500px] w-full ml-auto"
//       style={{
//         backgroundColor: THEME.card,
//         border: `1px solid ${THEME.border}`,
//         boxShadow: `0 20px 60px rgba(0,0,0,0.05)`,
//       }}
//     >
//       <h3
//         style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           color: THEME.text,
//           fontSize: "2rem",
//           fontStyle: "italic",
//           marginBottom: "2rem",
//         }}
//       >
//         {t.bookTitle}
//       </h3>

//       {/* Nombre */}
//       <input
//         type="text"
//         placeholder={t.namePlaceholder}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{
//           ...inputStyle,
//           padding: "0.95rem 1.2rem",
//           marginBottom: "1.8rem",
//         }}
//       />

//       {/* Días */}
//       <p
//         style={{
//           fontFamily: "'Quicksand', sans-serif",
//           color: THEME.textMuted,
//           fontSize: "0.72rem",
//           letterSpacing: "0.12em",
//           textTransform: "uppercase",
//           marginBottom: "0.8rem",
//         }}
//       >
//         {t.selectDay}
//       </p>

//       <div className="flex flex-wrap gap-3 mb-7">
//         {availableDays.map((d) => (
//           <button
//             key={d}
//             onClick={() => setSelectedDay(d)}
//             style={{
//               ...pillBase,
//               padding: "0.7rem 1.1rem",
//               border:
//                 selectedDay === d
//                   ? `1px solid ${THEME.sage}`
//                   : `1px solid ${THEME.border}`,
//               backgroundColor:
//                 selectedDay === d
//                   ? `${THEME.sage}15`
//                   : "transparent",
//               color:
//                 selectedDay === d
//                   ? THEME.sage
//                   : THEME.textMuted,
//             }}
//           >
//             {d}
//           </button>
//         ))}
//       </div>

//       {/* Horarios */}
//       <p
//         style={{
//           fontFamily: "'Quicksand', sans-serif",
//           color: THEME.textMuted,
//           fontSize: "0.72rem",
//           letterSpacing: "0.12em",
//           textTransform: "uppercase",
//           marginBottom: "0.8rem",
//         }}
//       >
//         {t.selectTime}
//       </p>

//       <div className="flex flex-wrap gap-3 mb-8">
//         {t.times.map((tt) => (
//           <button
//             key={tt}
//             onClick={() => setSelectedTime(tt)}
//             style={{
//               ...pillBase,
//               padding: "0.7rem 1rem",
//               border:
//                 selectedTime === tt
//                   ? `1px solid ${THEME.rose}`
//                   : `1px solid ${THEME.border}`,
//               backgroundColor:
//                 selectedTime === tt
//                   ? `${THEME.rose}15`
//                   : "transparent",
//               color:
//                 selectedTime === tt
//                   ? THEME.rose
//                   : THEME.textMuted,
//             }}
//           >
//             {tt}
//           </button>
//         ))}
//       </div>

//       {/* CTA */}
//       <button
//         onClick={handleWhatsApp}
//         disabled={!isReady}
//         style={{
//           width: "100%",
//           padding: "1rem",
//           borderRadius: "1rem",
//           fontFamily: "'Quicksand', sans-serif",
//           fontSize: "0.95rem",
//           fontWeight: 600,
//           color: "#fff",
//           backgroundColor: isReady
//             ? THEME.sage
//             : `${THEME.sage}50`,
//           cursor: isReady ? "pointer" : "not-allowed",
//           boxShadow: isReady
//             ? `0 8px 30px ${THEME.sage}30`
//             : "none",
//           transition: "all 0.25s ease",
//         }}
//       >
//         {t.cta}
//       </button>
//     </div>
//   </FadeIn>

// </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto mt-12 lg:mt-16"
//       >
//         {[
//           {
//             icon: Globe,
//             titleEs: "Desde cualquier lugar del mundo",
//             titleEn: "From anywhere in the world",
//             color: THEME.sage,
//           },
//           {
//             icon: Video,
//             titleEs: "Vía Zoom o Meet",
//             titleEn: "Via Zoom or Meet",
//             color: THEME.rose,
//           },
//           {
//             icon: Clock,
//             titleEs: "Horarios flexibles",
//             titleEn: "Flexible schedules",
//             color: THEME.gold,
//           },
//           {
//             icon: Shield,
//             titleEs: "Espacio seguro y confidencial",
//             titleEn: "Safe & confidential space",
//             color: THEME.sage,
//           },
//         ].map((benefit, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.92 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: i * 0.08 }}
//             className="rounded-3xl p-5 text-center backdrop-blur-xl"
//             style={{
//               backgroundColor: "rgba(255,255,255,0.72)",
//               border: `1px solid ${THEME.border}`,
//               boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
//             }}
//           >
//             <div
//               className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
//               style={{
//                 background: `${benefit.color}10`,
//                 border: `1px solid ${benefit.color}30`,
//               }}
//             >
//               <benefit.icon
//                 className="w-6 h-6"
//                 style={{ color: benefit.color }}
//               />
//             </div>

//             <p
//               style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: THEME.text,
//                 fontWeight: 600,
//                 fontSize: "0.9rem",
//                 lineHeight: 1.5,
//               }}
//             >
//               {tr(benefit.titleEs, benefit.titleEn)}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>


//     </section>
//   );
// }

// ============================================================
//  OnlineSessions.jsx
//  Sección de reserva de turnos — Magalí Sol Cerezo
//
//  ESTRUCTURA ORIGINAL preservada íntegramente.
//  Se aplicaron los estilos del sistema de diseño del proyecto:
//    · Tipografía: Cormorant Garamond (serif) + Quicksand (sans)
//    · Paleta THEME centralizada
//    · Decoraciones: plumas, StarDeco, MoonDeco, FadeIn
//    · Efectos: sombras difuminadas, bordes dorados, backdrop-blur
//
//  NOTA: Se eliminó el import de "../utils/calendar" porque
//  la función getNextWorkdays ya está definida inline en este
//  archivo. Si querés extraerla a utils/, exportala desde ahí
//  y reactivá el import.
//
//  REEMPLAZAR antes de publicar:
//    · WHATSAPP_NUMBER → número real con código de país, sin "+"
// ============================================================

import { useState } from "react";
import DividerLeaves from "./DividerLeaves";

// ─── Número de WhatsApp de Magalí ────────────────────────────
// Formato: código país + número, sin "+" ni espacios
// Ejemplo Argentina: "5491112345678"
const WHATSAPP_NUMBER = "5491100000000"; // ← REEMPLAZAR

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

// ─── Horarios disponibles ────────────────────────────────────
const TIMES = ["15:00", "16:00", "17:00", "18:00", "19:00"];

// ─── Traducciones ────────────────────────────────────────────
const t = {
  es: {
    tag:   "Sesiones Online",
    title: "Sesiones desde donde estés",
    sub:   "Las sesiones online permiten acceder al acompañamiento terapéutico desde cualquier lugar del mundo, con la misma calidez y presencia de un encuentro presencial.",

    features: [
      { icon: "🌍", label: "Desde cualquier lugar del mundo" },
      { icon: "💻", label: "Vía Zoom o Google Meet"          },
      { icon: "🕐", label: "Horarios flexibles para vos"     },
      { icon: "🔒", label: "Espacio seguro y confidencial"   },
    ],

    bookTitle:        "Elegí tu turno",
    namePlaceholder:  "Tu nombre completo",
    selectDay:        "Seleccioná un día",
    selectTime:       "Elegí un horario",
    cta:              "Elegir fecha y horario",
    ctaNote:          "Te redirigiremos a WhatsApp para confirmar.",
    available:        "Disponible",

    msgTemplate: (name, day, time) =>
      `Hola Magalí, mi nombre es ${name}. Me interesa reservar una sesión online para el día ${day} a las ${time}. ¿Está disponible?`,

    days:   ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    months: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],

    quote: "Un espacio para volver a vos, desde donde estés.",
  },

  en: {
    tag:   "Online Sessions",
    title: "Sessions from wherever you are",
    sub:   "Online sessions allow access to therapeutic support from anywhere in the world, with the same warmth and presence as an in-person encounter.",

    features: [
      { icon: "🌍", label: "From anywhere in the world"  },
      { icon: "💻", label: "Via Zoom or Google Meet"     },
      { icon: "🕐", label: "Flexible hours for you"      },
      { icon: "🔒", label: "Safe and confidential space" },
    ],

    bookTitle:        "Choose your slot",
    namePlaceholder:  "Your full name",
    selectDay:        "Select a day",
    selectTime:       "Choose a time",
    cta:              "Choose date and time",
    ctaNote:          "We'll redirect you to WhatsApp to confirm.",
    available:        "Available",

    msgTemplate: (name, day, time) =>
      `Hello Magalí, my name is ${name}. I would like to book an online session for ${day} at ${time}. Is it available?`,

    days:   ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

    quote: "A space to return to yourself, from wherever you are.",
  },
};

// ─── Utilidad: próximos N días hábiles ───────────────────────
// Devuelve un array de objetos { date: Date, label: string }
// Si tenés un utils/calendar.js, podés exportar esta función
// desde ahí y reemplazar esta definición por el import.
function getNextWorkdays(count, lang = "es") {
  const tx   = t[lang] || t.es;
  const days = [];
  const d    = new Date();
  d.setDate(d.getDate() + 1); // empezamos mañana

  while (days.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {        // excluye sábado (6) y domingo (0)
      const label = `${tx.days[dow]} ${d.getDate()} ${tx.months[d.getMonth()]}`;
      days.push({ date: new Date(d), label });
    }
    d.setDate(d.getDate() + 1);
  }

  return days;
}

// ─── Decoraciones SVG inline ─────────────────────────────────
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
export default function OnlineSessions({ language = "es" }) {
  const tx = t?.[language] || t.es;

  const [name,         setName        ] = useState("");
  const [selectedDay,  setSelectedDay ] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Días hábiles dinámicos — se recalculan según idioma
  const workdays = getNextWorkdays(4, language);

  // ── Handler de reserva ──────────────────────────────────────
  const handleBook = () => {
    if (!name.trim() || !selectedDay || !selectedTime) {
      // Alerta suave (podrías reemplazar por un toast custom)
      alert(
        language === "es"
          ? "Por favor completá todos los campos."
          : "Please fill all fields."
      );
      return;
    }

    const msg = encodeURIComponent(
      tx.msgTemplate(name, selectedDay.label, selectedTime)
    );
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ── Helpers de estilo reutilizables ────────────────────────
  const cardBase = {
    background:  THEME.card,
    border:      `1px solid rgba(201,169,110,0.18)`,
    borderRadius: "1.25rem",
    boxShadow:   `0 4px 28px rgba(45,41,36,0.05), 0 1px 4px rgba(45,41,36,0.03)`,
  };

  // ── Render ─────────────────────────────────────────────────
  return (
    <section
      id="sesiones"
      style={{
        position:        "relative",
        padding:         "6rem 1.25rem",
        backgroundColor: THEME.bg,
        overflow:        "hidden",
      }}
    >
      {/* ── Decoraciones de fondo ── */}
      <StarDeco style={{ top: "2.5rem",   right: "14%",  width: 10, height: 10 }} />
      <StarDeco style={{ bottom: "3rem",  left: "8%",    width: 14, height: 14 }} />
      <StarDeco style={{ top: "40%",      left: "3%",    width: 8,  height: 8  }} />
      <MoonDeco style={{ top: "1.5rem",   left: "12%"  }} />
      <MoonDeco style={{ bottom: "2rem",  right: "10%" }} />

      {/* Pluma decorativa — superior derecha */}
      {/* ↓ plumas1.png: mix-blend-mode multiply elimina el fondo negro */}
      <img
        src="/assets/plumas1.png"
        alt=""
        aria-hidden="true"
        style={{
          position:     "absolute",
          top:          "-6%",
          right:        "-4%",
          width:        "clamp(180px, 30vw, 340px)",
          opacity:      0.55,
          mixBlendMode: "multiply",
          transform:    "rotate(14deg) scaleX(-1)",
          objectFit:    "contain",
          pointerEvents:"none",
          userSelect:   "none",
          filter:       "saturate(0.55) brightness(0.9)",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      {/* Pluma inferior izquierda — tono frío */}
      <img
        src="/assets/plumas1.png"
        alt=""
        aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "-5%",
          left:          "-5%",
          width:         "clamp(140px, 22vw, 240px)",
          opacity:       0.35,
          mixBlendMode:  "multiply",
          transform:     "rotate(-18deg)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          filter:        "saturate(0.4) brightness(1.0) hue-rotate(40deg)",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
      />

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

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

          {/* Título principal */}
          <h2 style={{
            fontFamily:  FONT.serif,
            fontSize:    "clamp(2rem, 4.5vw, 3rem)",
            fontWeight:  300,
            fontStyle:   "italic",
            lineHeight:  1.2,
            color:       THEME.text,
            marginBottom: "1.25rem",
          }}>
            {tx.title}
          </h2>

          {/* Subtítulo */}
          <p style={{
            fontFamily:  FONT.sans,
            fontSize:    "0.97rem",
            lineHeight:  1.85,
            color:       THEME.textMuted,
            maxWidth:    "52ch",
            margin:      "0 auto 1.75rem",
          }}>
            {tx.sub}
          </p>

          {/* Línea ornamental dorada */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}70)` }} />
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3Z"
                fill={THEME.gold} fillOpacity="0.7" />
            </svg>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}70)` }} />
          </div>
        </div>

        {/* ════════════════════════════════
            GRID — Columna izquierda + Card reserva
        ════════════════════════════════ */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap:                 "3rem",
          alignItems:          "start",
        }}>

          {/* ── COLUMNA IZQUIERDA ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* FEATURES — grid 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {tx.features.map((f) => (
                <div
                  key={f.label}
                  style={{
                    ...cardBase,
                    padding:    "1.35rem",
                    display:    "flex",
                    flexDirection: "column",
                    gap:        "0.75rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor:     "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform  = "translateY(-4px)";
                    e.currentTarget.style.boxShadow  = `0 12px 32px rgba(138,158,138,0.16)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform  = "translateY(0)";
                    e.currentTarget.style.boxShadow  = cardBase.boxShadow;
                  }}
                >
                  {/* Icono con fondo pill suave */}
                  <div style={{
                    width:           40,
                    height:          40,
                    borderRadius:    "50%",
                    backgroundColor: `${THEME.sage}18`,
                    border:          `1px solid ${THEME.sage}30`,
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    fontSize:        "1.15rem",
                  }}>
                    {f.icon}
                  </div>

                  <p style={{
                    fontFamily:  FONT.sans,
                    fontSize:    "0.84rem",
                    fontWeight:  500,
                    lineHeight:  1.5,
                    color:       THEME.text,
                  }}>
                    {f.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CITA / QUOTE */}
            <div style={{
              borderRadius: "1.25rem",
              padding:      "1.75rem",
              position:     "relative",
              overflow:     "hidden",
              background:   `linear-gradient(135deg, rgba(138,158,138,0.10) 0%, rgba(201,169,110,0.07) 100%)`,
              border:       `1px solid rgba(201,169,110,0.22)`,
            }}>
              {/* Comilla decorativa grande */}
              <span style={{
                fontFamily:  FONT.serif,
                fontSize:    "5rem",
                lineHeight:  1,
                position:    "absolute",
                top:         "-0.5rem",
                left:        "1.2rem",
                color:       THEME.gold,
                opacity:     0.18,
                userSelect:  "none",
                fontStyle:   "italic",
              }}>
                "
              </span>

              <p style={{
                fontFamily:   FONT.serif,
                fontSize:     "clamp(1.1rem, 2vw, 1.3rem)",
                fontStyle:    "italic",
                fontWeight:   300,
                lineHeight:   1.7,
                color:        THEME.text,
                position:     "relative",
                zIndex:       1,
                marginBottom: "1rem",
              }}>
                {tx.quote}
              </p>

              {/* Firma */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 1, backgroundColor: THEME.gold, opacity: 0.5 }} />
                <span style={{
                  fontFamily:    FONT.sans,
                  fontSize:      "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color:         THEME.sage,
                  fontWeight:    600,
                }}>
                  Magalí Sol Cerezo
                </span>
              </div>
            </div>
          </div>

          {/* ── BOOKING CARD ── */}
          <div style={{
            ...cardBase,
            padding:   "2.25rem",
            boxShadow: `0 12px 48px rgba(45,41,36,0.08), 0 2px 8px rgba(201,169,110,0.08)`,
          }}>

            {/* Título de la card */}
            <h3 style={{
              fontFamily:   FONT.serif,
              fontSize:     "clamp(1.4rem, 2.5vw, 1.75rem)",
              fontWeight:   400,
              fontStyle:    "italic",
              color:        THEME.text,
              marginBottom: "1.75rem",
              display:      "flex",
              alignItems:   "center",
              gap:          "0.5rem",
            }}>
              <span style={{ color: THEME.gold, fontSize: "1rem" }}>✦</span>
              {tx.bookTitle}
            </h3>

            {/* ── INPUT — Nombre ── */}
            <div style={{ marginBottom: "1.5rem" }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={tx.namePlaceholder}
                style={{
                  width:        "100%",
                  padding:      "0.85rem 1.2rem",
                  borderRadius: "0.85rem",
                  border:       `1px solid rgba(201,169,110,0.22)`,
                  background:   "#F5F0EC",
                  fontFamily:   FONT.sans,
                  fontSize:     "0.9rem",
                  color:        THEME.text,
                  outline:      "none",
                  transition:   "border-color 0.2s, box-shadow 0.2s",
                  boxSizing:    "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = `${THEME.sage}80`;
                  e.target.style.boxShadow   = `0 0 0 3px ${THEME.sage}18`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(201,169,110,0.22)";
                  e.target.style.boxShadow   = "none";
                }}
              />
            </div>

            {/* ── DÍAS hábiles ── */}
            <div style={{ marginBottom: "1.25rem" }}>
              <p style={{
                fontFamily:    FONT.sans,
                fontSize:      "0.7rem",
                fontWeight:    600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color:         THEME.sage,
                marginBottom:  "0.75rem",
              }}>
                {tx.selectDay}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {workdays.map((day, i) => {
                  const isSelected = selectedDay?.label === day.label;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDay(day)}
                      style={{
                        padding:      "0.8rem 1rem",
                        borderRadius: "0.85rem",
                        fontFamily:   FONT.sans,
                        fontSize:     "0.84rem",
                        fontWeight:   500,
                        textAlign:    "left",
                        cursor:       "pointer",
                        transition:   "all 0.25s ease",
                        border:       isSelected
                          ? `1px solid rgba(138,158,138,0.45)`
                          : "1px solid transparent",
                        background:   isSelected
                          ? `linear-gradient(135deg, ${THEME.sage} 0%, #A8B9A8 100%)`
                          : `rgba(138,158,138,0.08)`,
                        color:       isSelected ? "#FDFCFA" : THEME.textMuted,
                        boxShadow:   isSelected
                          ? `0 8px 24px rgba(138,158,138,0.28)`
                          : "none",
                        transform:   isSelected ? "translateY(-2px)" : "translateY(0)",
                      }}
                      onMouseEnter={e => {
                        if (!isSelected) e.currentTarget.style.background = `rgba(138,158,138,0.14)`;
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) e.currentTarget.style.background = `rgba(138,158,138,0.08)`;
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                        <span style={{
                          fontSize:      "0.65rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          opacity:       0.65,
                        }}>
                          {tx.available}
                        </span>
                        <span style={{ fontWeight: 600, fontSize: "0.88rem" }}>
                          {day.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── HORARIOS ── */}
            <div style={{ marginBottom: "1.75rem" }}>
              <p style={{
                fontFamily:    FONT.sans,
                fontSize:      "0.7rem",
                fontWeight:    600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color:         THEME.sage,
                marginBottom:  "0.75rem",
              }}>
                {tx.selectTime}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {TIMES.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding:      "0.5rem 1.1rem",
                        borderRadius: "9999px",
                        fontFamily:   FONT.sans,
                        fontSize:     "0.84rem",
                        fontWeight:   500,
                        cursor:       "pointer",
                        transition:   "all 0.2s ease",
                        border:       isSelected
                          ? `1px solid ${THEME.gold}`
                          : "1px solid transparent",
                        background:   isSelected
                          ? THEME.gold
                          : `rgba(201,169,110,0.10)`,
                        color:       isSelected ? "#FDFCFA" : THEME.textMuted,
                        boxShadow:   isSelected
                          ? `0 4px 14px rgba(201,169,110,0.32)`
                          : "none",
                      }}
                      onMouseEnter={e => {
                        if (!isSelected) e.currentTarget.style.background = `rgba(201,169,110,0.18)`;
                      }}
                      onMouseLeave={e => {
                        if (!isSelected) e.currentTarget.style.background = `rgba(201,169,110,0.10)`;
                      }}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Línea divisoria */}
            <div style={{ height: 1, backgroundColor: THEME.border, marginBottom: "1.5rem" }} />

            {/* ── BOTÓN CTA ── */}
            <button
              onClick={handleBook}
              style={{
                width:          "100%",
                padding:        "1rem 1.5rem",
                borderRadius:   "0.85rem",
                fontFamily:     FONT.sans,
                fontSize:       "0.9rem",
                fontWeight:     600,
                letterSpacing:  "0.03em",
                cursor:         "pointer",
                border:         "none",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                gap:            "0.5rem",
                transition:     "all 0.3s ease",
                background:     THEME.sage,
                color:          "#FDFCFA",
                boxShadow:      `0 6px 24px rgba(138,158,138,0.35)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform  = "translateY(-2px)";
                e.currentTarget.style.boxShadow  = `0 10px 32px rgba(138,158,138,0.45)`;
                e.currentTarget.style.background = "#9AAF9A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform  = "translateY(0)";
                e.currentTarget.style.boxShadow  = `0 6px 24px rgba(138,158,138,0.35)`;
                e.currentTarget.style.background = THEME.sage;
              }}
            >
              {/* Ícono WhatsApp inline */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {tx.cta}
            </button>

            {/* Nota debajo del botón */}
            <p style={{
              fontFamily:  FONT.sans,
              fontSize:    "0.75rem",
              textAlign:   "center",
              marginTop:   "0.75rem",
              color:       THEME.sage,
              opacity:     0.8,
              letterSpacing: "0.02em",
            }}>
              {tx.ctaNote}
            </p>
          </div>
          {/* ── FIN BOOKING CARD ── */}

        </div>
        {/* ── FIN GRID ── */}

      </div>

            <DividerLeaves flip style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} />

    </section>
  );
}