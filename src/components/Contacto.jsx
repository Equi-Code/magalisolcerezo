import { useState } from "react";
import { THEME } from "../constants";
import { StarDeco, MoonDeco, CircleDeco } from "./ui";
import emailjs from "@emailjs/browser";
import ConstellationDivider from "./ConstellationDivider"; // Con 'c' minúscula si es el caso
import { motion, AnimatePresence } from "framer-motion";

// ─── Config ───────────────────────────────────────────────
const WHATSAPP_NUMBER = "5491160519556";
const INSTAGRAM_URL = "https://instagram.com/magalisol.cerezo";

const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans: "'Quicksand', 'Nunito', system-ui, sans-serif",
};

const therapyOptions = {
  es: ["Tapping EFT", "Regresión a Vidas Pasadas", "Sanación Energética",
    "Mindfulness & Meditación", "Terapias Florales", "Biodecodificación", "Consulta general"],
  en: ["EFT Tapping", "Past Life Regression", "Energy Healing",
    "Mindfulness & Meditation", "Floral Therapies", "Biodecoding", "General inquiry"],
};

const t = {
  es: {
    tag: "Contacto",
    title: "¿Lista para tu transformación?",
    sub: "Estoy aquí para acompañarte en tu proceso.",
    formBtn: "Consulta general",
    formTitle: "Consultas generales",
    name: "Tu nombre",
    email: "Tu email",
    therapy: "Terapia de interés",
    messagePlaceholder: "Contame cómo puedo ayudarte...",
    send: "Enviar mensaje",
    successMsg: "¡Gracias por escribirme! Te respondo a la brevedad. 🌿",
    selectDefault: "Seleccioná una terapia",
    cards: [
      { id: "whatsapp", icon: "whatsapp", label: "WhatsApp", desc: "Escribime y reservá tu turno", btn: "Escribir ahora", color: "sage" },
      { id: "sesiones", icon: "calendar", label: "Reservar online", desc: "Elegí el día y horario que mejor te convenga", btn: "Agendar ahora", color: "rose" },
      { id: "instagram", icon: "instagram", label: "Instagram", desc: "Seguime para más contenido y novedades", btn: "@magalisol.cerezo", color: "gold" },
    ],
  },
  en: {
    tag: "Contact",
    title: "Ready for your transformation?",
    sub: "I am here to accompany you in your process.",
    formBtn: "General inquiry",
    formTitle: "General inquiries",
    name: "Your name",
    email: "Your email",
    therapy: "Therapy of interest",
    messagePlaceholder: "Tell me how I can help you...",
    send: "Send message",
    successMsg: "Thank you for writing! I will respond shortly. 🌿",
    selectDefault: "Select a therapy",
    cards: [
      { id: "whatsapp", icon: "whatsapp", label: "WhatsApp", desc: "Message me and book your session", btn: "Write now", color: "sage" },
      { id: "sesiones", icon: "calendar", label: "Book online", desc: "Choose the day and time that works best for you", btn: "Book now", color: "rose" },
      { id: "instagram", icon: "instagram", label: "Instagram", desc: "Follow me for more content and updates", btn: "@magalisol.cerezo", color: "gold" },
    ],
  },
};

const BTN_COLORS = {
  sage: { bg: THEME.sage, color: "#fff", shadow: `0 4px 18px rgba(138,158,138,0.38)`, hover: "#9AAF9A" },
  rose: { bg: THEME.rose, color: "#fff", shadow: `0 4px 18px rgba(196,150,138,0.38)`, hover: "#CF9F93" },
  gold: { bg: "transparent", color: THEME.gold, shadow: "none", hover: `${THEME.gold}14`, border: `1.5px solid ${THEME.gold}60` },
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

// ─── Íconos SVG inline ─────────────────────────────────────
function IconWhatsApp({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconCalendar({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="12" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function IconInstagram({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONS = {
  whatsapp: IconWhatsApp,
  calendar: IconCalendar,
  instagram: IconInstagram,
};

// ─── Modal de Formulario con Framer Motion ──────────────────────
function ContactModal({ lang, onClose }) {
  const tx = t[lang];
  const options = therapyOptions[lang];

  const [form, setForm] = useState({ name: "", email: "", therapy: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, therapy: form.therapy || "Consulta General", message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        { name: form.name, email: form.email, therapy: form.therapy || "Consulta General", message: form.message },
        EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", therapy: "", message: "" });
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 1800);
    } catch (error) {
      alert(`Error: ${error.text}`);
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.82rem 1.1rem", borderRadius: "0.8rem",
    border: `1px solid rgba(201,169,110,0.22)`, background: "#F5F0EC",
    fontFamily: FONT.sans, fontSize: "0.9rem", color: THEME.text,
    outline: "none", boxSizing: "border-box", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
        backgroundColor: "rgba(45,41,36,0.52)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <motion.div
        initial={{ scale: 0.92, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ type: "spring", duration: 0.45 }}
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative", width: "100%", maxWidth: "28rem",
          backgroundColor: THEME.card, borderRadius: "1.75rem", padding: "2.25rem",
          boxShadow: `0 40px 90px rgba(0,0,0,0.22), 0 0 0 1px ${THEME.gold}20`,
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 90, height: 2, background: `linear-gradient(to right, transparent, ${THEME.gold}90, transparent)`,
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.75rem" }}>
          <span style={{ color: THEME.gold, fontSize: "1rem" }}>🌿</span>
          <h3 style={{ fontFamily: FONT.serif, fontSize: "1.6rem", fontStyle: "italic", fontWeight: 400, color: THEME.text, margin: 0 }}>
            {tx.formTitle}
          </h3>
        </div>

        {sent ? (
          <div style={{ textAlign: "center", padding: "2rem 1rem", background: `rgba(138,158,138,0.08)`, borderRadius: "1rem", border: `1px solid rgba(138,158,138,0.2)` }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🌿</div>
            <p style={{ fontFamily: FONT.serif, fontSize: "1.1rem", fontStyle: "italic", color: THEME.sage, margin: 0 }}>
              {tx.successMsg}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={tx.name} required style={inputStyle} />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={tx.email} required style={inputStyle} />
            <select name="therapy" value={form.therapy} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", color: form.therapy ? THEME.text : THEME.textMuted }}>
              <option value="">{tx.selectDefault}</option>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder={tx.messagePlaceholder} rows={4} required style={{ ...inputStyle, resize: "none" }} />

            <div style={{ height: 1, backgroundColor: THEME.border, margin: "0.25rem 0" }} />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01, backgroundColor: "#9AAF9A" }}
              whileTap={{ scale: 0.99 }}
              style={{
                padding: "0.9rem", borderRadius: "0.85rem", border: "none",
                backgroundColor: THEME.sage, color: "#fff", fontFamily: FONT.sans,
                fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: `0 5px 20px rgba(138,158,138,0.35)`,
              }}
            >
              {tx.send}
            </motion.button>
            <p style={{ fontFamily: FONT.sans, fontSize: "0.72rem", textAlign: "center", color: THEME.textMuted, opacity: 0.6, margin: 0 }}>
              info.magalisolcerezo@gmail.com
            </p>
          </form>
        )}

        <button onClick={onClose} style={{ position: "absolute", top: "1.1rem", right: "1.4rem", background: "transparent", border: "none", color: THEME.textMuted, fontSize: "1rem", opacity: 0.4, cursor: "pointer" }}>
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Componente Principal ────────────────────────────────────────
export default function Contacto({ lang = "es" }) {
  const tx = t[lang];
  const [modal, setModal] = useState(false);

  const handleCardAction = (cardId) => {
    if (cardId === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
    } else if (cardId === "sesiones") {
      document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" });
    } else if (cardId === "instagram") {
      window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <section
        id="contacto"
        style={{
          position: "relative",
          padding: "4.5rem 1.5rem", // Reducido el padding vertical para compactar el espacio muerto
          backgroundColor: THEME.bgB,
          overflow: "visible", 
        }}
      >
        {/* 1. Capa de Fondo Base y Acuarela */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 0% 50%, rgba(168,205,185,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0
        }} />

        {/* Decoraciones de Fondo con micro-animaciones */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
          <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />

          {/* Estrellas titilando suavemente */}
          <motion.div animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
          </motion.div>
          <motion.div animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}>
            <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
          </motion.div>
          <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
            <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
          </motion.div>

          {/* Luna con un leve balanceo/flotado */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3"
          >
            <MoonDeco />
          </motion.div>
        </div>

        <div style={{ maxWidth: "68rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Grid de Diseño Principal Mejorado */}
          <div 
            className="contact-main-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr", // 2 columnas fijas balanceadas para pantallas de escritorio
              gap: "3.5rem",
              alignItems: "center", // Centrado vertical impecable entre textos y tarjetas
            }}
          >

            {/* ── COLUMNA IZQUIERDA: Header y Call to Action ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.4rem" }}>
                <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
                <span style={{ fontFamily: FONT.sans, fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, color: THEME.gold }}>
                  {tx.tag}
                </span>
              </div>

              <h2 style={{ fontFamily: FONT.serif, fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.2, color: THEME.text, margin: 0 }}>
                {tx.title}
              </h2>

              <p style={{ fontFamily: FONT.sans, fontSize: "0.95rem", lineHeight: 1.6, color: THEME.textMuted, margin: "0 0 1.2rem 0", maxWidth: "34ch" }}>
                {tx.sub}
              </p>

              <motion.button
                onClick={() => setModal(true)}
                whileHover={{ scale: 1.03, backgroundColor: `${THEME.text}08`, borderColor: `${THEME.text}60` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem", alignSelf: "flex-start",
                  padding: "0.7rem 1.5rem", borderRadius: "9999px",
                  border: `1.5px solid ${THEME.text}30`, backgroundColor: "transparent",
                  color: THEME.text, fontFamily: FONT.sans, fontSize: "0.84rem",
                  fontWeight: 600, cursor: "pointer", letterSpacing: "0.03em",
                }}
              >
                ✉ {tx.formBtn}
              </motion.button>
            </motion.div>

            {/* ── COLUMNA DERECHA: Sub-grilla interna simétrica para las 3 tarjetas ── */}
            <div 
              className="contact-cards-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Estructura de 2 columnas idénticas
                gap: "1.2rem",
                width: "100%"
              }}
            >
              {tx.cards.map((card, idx) => {
                const Icon = ICONS[card.icon];
                const colors = BTN_COLORS[card.color];
                const isInstagram = card.id === "instagram";

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.12 }}
                    whileHover={{ y: -5, boxShadow: "0 14px 38px rgba(45,41,36,0.09)", borderColor: "rgba(201,169,110,0.25)" }}
                    style={{
                      backgroundColor: "rgba(253,252,250,0.82)", backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)", border: `1px solid rgba(232,226,220,0.8)`,
                      borderRadius: "1.35rem", padding: "1.5rem 1.2rem",
                      display: "flex", 
                      flexDirection: isInstagram ? "row" : "column", // Instagram horizontal, las otras verticales
                      alignItems: isInstagram ? "center" : "flex-start",
                      justifyContent: isInstagram ? "space-between" : "flex-start",
                      textAlign: "left",
                      gap: "0.75rem", 
                      boxShadow: "0 4px 20px rgba(45,41,36,0.04)",
                      gridColumn: isInstagram ? "span 2" : "span 1", // Instagram se estira abajo ocupando las 2 columnas
                    }}
                  >
                    {/* Contenedor Izquierdo/Superior (Icono + Textos) */}
                    <div style={{ display: "flex", flexDirection: isInstagram ? "row" : "column", alignItems: "center", gap: "0.75rem", flexGrow: isInstagram ? 0 : 1, width: isInstagram ? "auto" : "100%" }}>
                      {/* Contenedor del Icono */}
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        backgroundColor: `${colors.bg === "transparent" ? THEME.sage : colors.bg}18`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: colors.bg === "transparent" ? THEME.gold : colors.bg, flexShrink: 0,
                      }}>
                        <Icon size={19} />
                      </div>

                      {/* Textos */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", width: "100%" }}>
                        <p style={{ fontFamily: FONT.serif, fontSize: "1.15rem", fontWeight: 500, color: THEME.text, margin: 0, lineHeight: 1.2 }}>
                          {card.label}
                        </p>
                        <p style={{ fontFamily: FONT.sans, fontSize: "0.78rem", color: THEME.textMuted, lineHeight: 1.4, margin: 0 }}>
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    {/* Botón de Acción */}
                    <motion.button
                      onClick={() => handleCardAction(card.id)}
                      whileHover={{ scale: 1.02, backgroundColor: colors.hover }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        marginTop: isInstagram ? "0" : "auto", // Elimina margen superior si es horizontal
                        padding: "0.6rem 1.1rem", borderRadius: "9999px",
                        border: colors.border || "none", backgroundColor: colors.bg,
                        color: colors.color, fontFamily: FONT.sans, fontSize: "0.78rem",
                        fontWeight: 600, cursor: "pointer", letterSpacing: "0.03em",
                        boxShadow: colors.shadow, 
                        width: isInstagram ? "auto" : "100%", 
                        minWidth: isInstagram ? "150px" : "none",
                        textAlign: "center",
                      }}
                    >
                      {card.btn}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Separador de constelación al fondo */}
        <div style={{ marginTop: "4rem" }}>
          <ConstellationDivider fromColor="transparent" toColor="transparent" />
        </div>

        {/* Inyección de Media Queries nativas para asegurar responsividad total */}
        <style>{`
          @media (max-width: 868px) {
            .contact-main-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
          @media (max-width: 520px) {
            .contact-cards-grid {
              grid-template-columns: 1fr !important;
            }
            div[style*="grid-column: span 2"] {
              grid-column: span 1 !important; 
              flex-direction: column !important;
              align-items: flex-start !important;
              text-align: left !important;
            }
            div[style*="grid-column: span 1"] button, 
            div[style*="grid-column: span 2"] button {
              width: 100% !important;
              margin-top: 0.5rem !important;
            }
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}</style>
      </section>

      {/* Renderizado Condicional del Modal */}
      <AnimatePresence>
        {modal && <ContactModal lang={lang} onClose={() => setModal(false)} />}
      </AnimatePresence>
    </>
  );
}