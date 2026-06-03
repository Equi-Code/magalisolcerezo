import { useState } from "react";
import { StarDeco, MoonDeco, CircleDeco, FadeIn, scrollTo } from "./ui";
import DividerLeaves from "./DividerLeaves";
 
// ─── WhatsApp ────────────────────────────────────────────
const WHATSAPP_NUMBER = "5491160519556"; // ← REEMPLAZAR
 
const THEME = {
  bg:        "#FCFBFA",
  bgSage:    "#EEF3EE",
  card:      "#FDFCFA",
  sage:      "#8A9E8A",
  rose:      "#C4968A",
  gold:      "#C9A96E",
  text:      "#2D2924",
  textMuted: "#7A6E66",
  border:    "#E8E2DC",
};
 
const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans:  "'Quicksand', 'Nunito', system-ui, sans-serif",
};
 
const TIMES = ["15:00", "16:00", "17:00", "18:00", "19:00"];
 
const t = {
  es: {
    title:  "Sesiones Online",
    sub:    "Te acompaño estés donde estés.\nSesiones personalizadas por videollamada para tu comodidad y bienestar.",
    features: [
      { icon: "🌍", label: "Desde cualquier\nlugar del mundo" },
      { icon: "💻", label: "Vía Zoom\no Meet"                },
      { icon: "🕐", label: "Horarios flexibles\npara vos"    },
      { icon: "🔒", label: "Espacio seguro\ny confidencial"  },
    ],
    cta:             "Reservar mi sesión online",
    modalTitle:      "Elegí tu turno",
    namePlaceholder: "Tu nombre completo",
    selectDay:       "Seleccioná un día",
    selectTime:      "Elegí un horario",
    ctaModal:        "Confirmar por WhatsApp",
    ctaNote:         "Te redirigiremos a WhatsApp para confirmar.",
    available:       "Disponible",
    msgTemplate: (name, day, time) =>
      `Hola Magalí, mi nombre es ${name}. Me interesa reservar una sesión online para el día ${day} a las ${time}. ¿Está disponible?`,
    days:   ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
    months: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
  },
  en: {
    title:  "Online Sessions",
    sub:    "I accompany you wherever you are.\nPersonalized video call sessions for your comfort and wellbeing.",
    features: [
      { icon: "🌍", label: "From anywhere\nin the world"  },
      { icon: "💻", label: "Via Zoom\nor Meet"            },
      { icon: "🕐", label: "Flexible hours\nfor you"      },
      { icon: "🔒", label: "Safe and\nconfidential"       },
    ],
    cta:             "Book my online session",
    modalTitle:      "Choose your slot",
    namePlaceholder: "Your full name",
    selectDay:       "Select a day",
    selectTime:      "Choose a time",
    ctaModal:        "Confirm via WhatsApp",
    ctaNote:         "We'll redirect you to WhatsApp to confirm.",
    available:       "Available",
    msgTemplate: (name, day, time) =>
      `Hello Magalí, my name is ${name}. I would like to book an online session for ${day} at ${time}. Is it available?`,
    days:   ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  },
};
 
function getNextWorkdays(count, lang = "es") {
  const tx = t[lang] || t.es;
  const days = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (days.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push({ date: new Date(d), label: `${tx.days[dow]} ${d.getDate()} ${tx.months[d.getMonth()]}` });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}
 
// ── Modal de reserva ────────────────────────────────────
function BookingModal({ language, onClose }) {
  const tx = t[language] || t.es;
  const [name, setName] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const workdays = getNextWorkdays(4, language);
 
  const handleBook = () => {
    if (!name.trim() || !selectedDay || !selectedTime) {
      alert(language === "es" ? "Por favor completá todos los campos." : "Please fill all fields.");
      return;
    }
    const msg = encodeURIComponent(tx.msgTemplate(name, selectedDay.label, selectedTime));
    window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${msg}`, "_blank", "noopener,noreferrer");
    onClose();
  };
 
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
      backgroundColor: "rgba(45,41,36,0.48)",
      backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        position: "relative", width: "100%", maxWidth: "26rem",
        backgroundColor: THEME.card, borderRadius: "1.75rem", padding: "2rem 2.25rem",
        boxShadow: `0 40px 90px rgba(0,0,0,0.18), 0 0 0 1px ${THEME.gold}28`,
        animation: "modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* Línea dorada top */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 80, height: 2, borderRadius: "0 0 4px 4px",
          background: `linear-gradient(to right, transparent, ${THEME.gold}90, transparent)`,
        }} />
 
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
          <span style={{ color: THEME.gold }}>✦</span>
          <h3 style={{ fontFamily: FONT.serif, fontSize: "1.55rem", fontStyle: "italic", fontWeight: 400, color: THEME.text, margin: 0 }}>
            {tx.modalTitle}
          </h3>
        </div>
 
        {/* Nombre */}
        <input type="text" value={name} onChange={e => setName(e.target.value)}
          placeholder={tx.namePlaceholder}
          style={{
            width: "100%", padding: "0.8rem 1rem", borderRadius: "0.75rem",
            border: `1px solid rgba(201,169,110,0.22)`, background: "#F5F0EC",
            fontFamily: FONT.sans, fontSize: "0.88rem", color: THEME.text,
            outline: "none", boxSizing: "border-box", marginBottom: "1.1rem",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={e => { e.target.style.borderColor = `${THEME.sage}80`; e.target.style.boxShadow = `0 0 0 3px ${THEME.sage}14`; }}
          onBlur={e => { e.target.style.borderColor = "rgba(201,169,110,0.22)"; e.target.style.boxShadow = "none"; }}
        />
 
        {/* Días */}
        <p style={{ fontFamily: FONT.sans, fontSize: "0.65rem", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.18em", color: THEME.sage, marginBottom: "0.5rem" }}>
          {tx.selectDay}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.45rem", marginBottom: "1.1rem" }}>
          {workdays.map((day, i) => {
            const sel = selectedDay?.label === day.label;
            return (
              <button key={i} onClick={() => setSelectedDay(day)} style={{
                padding: "0.6rem 0.8rem", borderRadius: "0.65rem",
                fontFamily: FONT.sans, fontSize: "0.8rem", fontWeight: 500,
                textAlign: "left", cursor: "pointer", transition: "all 0.2s",
                border: sel ? `1px solid rgba(138,158,138,0.4)` : "1px solid transparent",
                background: sel ? `linear-gradient(135deg, ${THEME.sage}, #A8B9A8)` : `rgba(138,158,138,0.08)`,
                color: sel ? "#FDFCFA" : THEME.textMuted,
                boxShadow: sel ? `0 5px 16px rgba(138,158,138,0.25)` : "none",
              }}>
                <span style={{ display: "block", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.65, marginBottom: 2 }}>{tx.available}</span>
                <span style={{ fontWeight: 700, fontSize: "0.82rem" }}>{day.label}</span>
              </button>
            );
          })}
        </div>
 
        {/* Horarios */}
        <p style={{ fontFamily: FONT.sans, fontSize: "0.65rem", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.18em", color: THEME.sage, marginBottom: "0.5rem" }}>
          {tx.selectTime}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.4rem" }}>
          {TIMES.map(time => {
            const sel = selectedTime === time;
            return (
              <button key={time} onClick={() => setSelectedTime(time)} style={{
                padding: "0.4rem 0.95rem", borderRadius: "9999px",
                fontFamily: FONT.sans, fontSize: "0.8rem", fontWeight: 500,
                cursor: "pointer", transition: "all 0.18s",
                border: sel ? `1px solid ${THEME.gold}` : "1px solid transparent",
                background: sel ? THEME.gold : `rgba(201,169,110,0.10)`,
                color: sel ? "#FDFCFA" : THEME.textMuted,
                boxShadow: sel ? `0 3px 12px rgba(201,169,110,0.30)` : "none",
              }}>
                {time}
              </button>
            );
          })}
        </div>
 
        <div style={{ height: 1, backgroundColor: THEME.border, marginBottom: "1.1rem" }} />
 
        <button onClick={handleBook} style={{
          width: "100%", padding: "0.9rem", borderRadius: "0.75rem", border: "none",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
          background: THEME.sage, color: "#fff", fontFamily: FONT.sans,
          fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.03em",
          cursor: "pointer", boxShadow: `0 5px 20px rgba(138,158,138,0.35)`, transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "#9AAF9A"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = THEME.sage; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {tx.ctaModal}
        </button>
        <p style={{ fontFamily: FONT.sans, fontSize: "0.7rem", textAlign: "center", marginTop: "0.5rem", color: THEME.sage, opacity: 0.7 }}>
          {tx.ctaNote}
        </p>
 
        <button onClick={onClose} aria-label="Cerrar" style={{
          position: "absolute", top: "1rem", right: "1.25rem",
          background: "transparent", border: "none", color: THEME.textMuted,
          fontSize: "1rem", opacity: 0.4, cursor: "pointer", transition: "opacity 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "0.4"; }}
        >✕</button>
      </div>
    </div>
  );
}
 
// ══════════════════════════════════════════════════════════
//  COMPONENTE PRINCIPAL — Banner compacto tipo card
// ══════════════════════════════════════════════════════════
export default function OnlineSessions({ language = "es" }) {
  const tx = t[language] || t.es;
  const [modalOpen, setModalOpen] = useState(false);
 
  return (
    <>
      <section id="sesiones" style={{
        padding: "3rem 1.5rem",
        backgroundColor: THEME.bg,
        position: "relative",
        overflow: "hidden",
      }}>

              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
                <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
                <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
                <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
                <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
                <MoonDeco className="absolute bottom-1/4 left-1/3" />
              </div>
 
        {/* Pluma dorada decorativa — derecha, muy sutil */}
        <img src="/assets/plumas1.png" alt="" aria-hidden="true" style={{
          position: "absolute", top: "-10%", right: "-2%",
          width: "clamp(140px, 18vw, 240px)", opacity: 0.35, mixBlendMode: "multiply",
          transform: "rotate(12deg) scaleX(-1)", objectFit: "contain",
          pointerEvents: "none", userSelect: "none",
          filter: "sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9)",
        }} onError={e => { e.target.style.display = "none"; }} />
 
        {/* ── CARD BANNER — el contenedor principal ── */}
        <div style={{
          maxWidth:        "62rem",
          margin:          "0 auto",
          borderRadius:    "2rem",
          overflow:        "hidden",
          display:         "grid",
          // En mobile: columna; en desktop: imagen fija + contenido flexible
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          // Fondo acuarela suave — igual que la referencia
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(168,205,185,0.25) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 60% at 100% 50%, rgba(168,205,185,0.12) 0%, transparent 60%)",
            "linear-gradient(135deg, #F2F8F4 0%, #FDFCFA 60%, #F6F2EF 100%)",
          ].join(", "),
          boxShadow: `0 8px 48px rgba(138,158,138,0.14), 0 2px 12px rgba(201,169,110,0.08)`,
          border:    `1px solid rgba(201,169,110,0.18)`,
          position:  "relative",
        }}>
 
          {/* ── Rama/pluma SVG decorativa dentro del card — derecha ── */}
          <svg
            width="120" height="220" viewBox="0 0 100 220" fill="none"
            style={{ position: "absolute", right: "2%", top: "50%", transform: "translateY(-50%)", opacity: 0.2, pointerEvents: "none" }}
            aria-hidden="true"
          >
            <path d="M50 210 Q52 160 54 100 Q56 50 58 10" stroke={THEME.gold} strokeWidth="0.8" fill="none" strokeOpacity="0.8"/>
            {[20,38,56,72,88,104,120,136,150,164,176].map((y,i)=>(
              <path key={i}
                d={`M${53-i*0.3} ${y} Q${40-i*1.1} ${y-4} ${26-i*1.5} ${y+2}`}
                stroke={THEME.gold} strokeWidth="0.5" fill="none" strokeOpacity={0.7-i*0.04}/>
            ))}
            {[20,38,56,72,88,104,120,136,150,164,176].map((y,i)=>(
              <path key={`r${i}`}
                d={`M${55+i*0.3} ${y} Q${66+i*0.9} ${y-3} ${76+i*1.3} ${y+2}`}
                stroke={THEME.gold} strokeWidth="0.5" fill="none" strokeOpacity={0.65-i*0.04}/>
            ))}
          </svg>
 
          {/* ── COLUMNA IZQUIERDA — Imagen de laptop centrada ── */}
          <div style={{
            position:       "relative",
            minHeight:      260,
            display:        "flex",
            alignItems:     "center",       // ← centrado vertical
            justifyContent: "center",       // ← centrado horizontal
            padding:        "2rem 1.5rem",
            overflow:       "visible",      // permite que el badge sobresalga
          }}>
            {/* Wrapper relativo para imagen + badge */}
            <div style={{ position: "relative", display: "inline-block" }}>
 
              {/*
                ↓ IMAGEN DE LAPTOP/MAQUINA
                Reemplazar src="/assets/sesiones-laptop.jpg" con tu imagen real.
              */}
              <img
                src="/assets/computadora.jpeg"
                alt="Sesión online — Magalí Sol Cerezo"
                style={{
                  width:       "clamp(200px, 88%, 300px)",
                  maxHeight:   260,
                  objectFit:   "contain",
                  display:     "block",
                  margin:      "0 auto",
                  transform:   "perspective(800px) rotateY(3deg) rotateX(1deg)",
                  filter:      "drop-shadow(0 14px 28px rgba(45,41,36,0.14))",
                }}
                onError={e => {
                  e.target.style.display = "none";
                  // Fallback visual si no existe la imagen
                  const wrapper = e.target.parentElement;
                  const fb = document.createElement("div");
                  fb.style.cssText = `
                    width:200px; height:140px; margin:0 auto;
                    background:rgba(255,255,255,0.75);
                    border-radius:14px;
                    display:flex; flex-direction:column;
                    align-items:center; justify-content:center; gap:10px;
                    box-shadow:0 8px 28px rgba(45,41,36,0.10);
                    border:1px solid rgba(201,169,110,0.2);
                  `;
                  fb.innerHTML = `
                    <span style="font-size:2.4rem">💻</span>
                    <span style="font-family:'Quicksand',sans-serif;font-size:0.72rem;
                      color:${THEME.sage};letter-spacing:0.08em;font-weight:600">
                      Sesiones Online
                    </span>`;
                  wrapper.appendChild(fb);
                }}
              />
 
              {/* Badge "Sesiones Online" — centrado debajo de la imagen */}
              <div style={{
                position:        "absolute",
                bottom:          "-1rem",
                left:            "50%",
                transform:       "translateX(-50%)",
                backgroundColor: "rgba(253,252,250,0.94)",
                backdropFilter:  "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border:          `1px solid ${THEME.gold}38`,
                borderRadius:    "9999px",
                padding:         "0.4rem 1.2rem",
                boxShadow:       `0 6px 20px rgba(201,169,110,0.18)`,
                whiteSpace:      "nowrap",
                display:         "flex",
                alignItems:      "center",
                gap:             6,
                zIndex:          2,
              }}>
                <span style={{ color: THEME.gold, fontSize: "0.65rem", lineHeight: 1 }}>✦</span>
                <span style={{
                  fontFamily:    FONT.sans,
                  fontSize:      "0.7rem",
                  fontWeight:    600,
                  color:         THEME.sage,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  Sesiones Online
                </span>
              </div>
            </div>
          </div>
 
          {/* ── COLUMNA DERECHA — Contenido centrado ── */}
          <div style={{
            display:        "flex",
            flexDirection:  "column",
            alignItems:     "center",
            justifyContent: "center",
            textAlign:      "center",
            padding:        "2.5rem 2rem 2rem",
            gap:            "0",
          }}>
 
            {/* Título */}
            <h2 style={{
              fontFamily:   FONT.serif,
              fontSize:     "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight:   400,
              fontStyle:    "italic",
              lineHeight:   1.15,
              color:        THEME.text,
              marginBottom: "0.5rem",
            }}>
              {tx.title}
            </h2>
 
            {/* Ornamento corazón — igual que la referencia */}
            <div style={{ marginBottom: "0.85rem" }}>
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" aria-hidden="true">
                <path d="M12 19.5C12 19.5 2 13.5 2 7C2 4.2 4.2 2 7 2C9 2 10.7 3 12 4.5C13.3 3 15 2 17 2C19.8 2 22 4.2 22 7C22 13.5 12 19.5 12 19.5Z"
                  stroke={THEME.gold} strokeWidth="1" fill="none" strokeOpacity="0.55"/>
              </svg>
            </div>
 
            {/* Subtítulo */}
            <p style={{
              fontFamily:   FONT.sans,
              fontSize:     "0.88rem",
              lineHeight:   1.75,
              color:        THEME.textMuted,
              maxWidth:     "38ch",
              marginBottom: "1.5rem",
              whiteSpace:   "pre-line",
            }}>
              {tx.sub}
            </p>
 
            {/* Features — 4 íconos en fila */}
            <div style={{
              display:  "flex",
              gap:      "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "1.75rem",
            }}>
              {tx.features.map((f, i) => (
                <div key={i} style={{
                  display:       "flex",
                  flexDirection: "column",
                  alignItems:    "center",
                  gap:           "0.35rem",
                  minWidth:      72,
                  maxWidth:      90,
                }}>
                  {/* Círculo ícono */}
                  <div style={{
                    width:           44,
                    height:          44,
                    borderRadius:    "50%",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    border:          `1px solid rgba(138,158,138,0.22)`,
                    boxShadow:       `0 2px 10px rgba(45,41,36,0.06)`,
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    fontSize:        "1.15rem",
                  }}>
                    {f.icon}
                  </div>
                  <span style={{
                    fontFamily: FONT.sans,
                    fontSize:   "0.7rem",
                    fontWeight: 500,
                    color:      THEME.textMuted,
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                    textAlign:  "center",
                  }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
 
            {/* CTA — abre modal */}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.55rem",
                padding:        "0.8rem 1.75rem",
                borderRadius:   "9999px",
                border:         "none",
                background:     THEME.sage,
                color:          "#fff",
                fontFamily:     FONT.sans,
                fontSize:       "0.88rem",
                fontWeight:     600,
                letterSpacing:  "0.03em",
                cursor:         "pointer",
                boxShadow:      `0 5px 22px rgba(138,158,138,0.38)`,
                transition:     "all 0.28s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform  = "translateY(-2px)";
                e.currentTarget.style.boxShadow  = `0 10px 32px rgba(138,158,138,0.48)`;
                e.currentTarget.style.background = "#9AAF9A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform  = "translateY(0)";
                e.currentTarget.style.boxShadow  = `0 5px 22px rgba(138,158,138,0.38)`;
                e.currentTarget.style.background = THEME.sage;
              }}
            >
              {/* Ícono calendario */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3" ry="3"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              {tx.cta}
            </button>
          </div>
        </div>
        {/* ── FIN card banner ── */}

              <div style={{ marginTop: "1.5rem" }}>
                <DividerLeaves />
              </div>
 
      </section>
 
      {/* Modal */}
      {modalOpen && <BookingModal language={language} onClose={() => setModalOpen(false)} />}
 
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </>
  );
}