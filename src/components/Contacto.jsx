
import { useState } from "react";
import { THEME, T } from "../constants";
import DividerLeaves from "./DividerLeaves";
import { StarDeco, MoonDeco, CircleDeco } from "./ui";
import emailjs from "@emailjs/browser";

// ─── Config ───────────────────────────────────────────────
const WHATSAPP_NUMBER = "5491160519556"; // ← REEMPLAZAR
const INSTAGRAM_URL = "https://instagram.com/magalisol.cerezo";

// ─── Tipografías ──────────────────────────────────────────
const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans: "'Quicksand', 'Nunito', system-ui, sans-serif",
};

// ─── Opciones de terapia ──────────────────────────────────
const therapyOptions = {
  es: ["Tapping EFT", "Regresión a Vidas Pasadas", "Sanación Energética",
    "Mindfulness & Meditación", "Terapias Florales", "Biodecodificación", "Consulta general"],
  en: ["EFT Tapping", "Past Life Regression", "Energy Healing",
    "Mindfulness & Meditation", "Floral Therapies", "Biodecoding", "General inquiry"],
};

// ─── Traducciones ─────────────────────────────────────────
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
      {
        id: "whatsapp",
        icon: "whatsapp",
        label: "WhatsApp",
        desc: "Escribime y reservá tu turno",
        btn: "Escribir ahora",
        color: "sage",
      },
      {
        id: "sesiones",
        icon: "calendar",
        label: "Reservar online",
        desc: "Elegí el día y horario que mejor te convenga",
        btn: "Agendar ahora",
        color: "rose",
      },
      {
        id: "instagram",
        icon: "instagram",
        label: "Instagram",
        desc: "Seguime para más contenido y novedades",
        btn: "@magalisol.cerezo",
        color: "gold",
      },
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
      {
        id: "whatsapp",
        icon: "whatsapp",
        label: "WhatsApp",
        desc: "Message me and book your session",
        btn: "Write now",
        color: "sage",
      },
      {
        id: "sesiones",
        icon: "calendar",
        label: "Book online",
        desc: "Choose the day and time that works best for you",
        btn: "Book now",
        color: "rose",
      },
      {
        id: "instagram",
        icon: "instagram",
        label: "Instagram",
        desc: "Follow me for more content and updates",
        btn: "@magalisol.cerezo",
        color: "gold",
      },
    ],
  },
};



// ─── Colores de botones por variante ──────────────────────
const BTN_COLORS = {
  sage: {
    bg: THEME.sage,
    color: "#fff",
    shadow: `0 4px 18px rgba(138,158,138,0.38)`,
    hover: "#9AAF9A",
  },
  rose: {
    bg: THEME.rose,
    color: "#fff",
    shadow: `0 4px 18px rgba(196,150,138,0.38)`,
    hover: "#CF9F93",
  },
  gold: {
    bg: "transparent",
    color: THEME.gold,
    shadow: "none",
    hover: `${THEME.gold}14`,
    border: `1.5px solid ${THEME.gold}60`,
  },
};


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

console.log("SERVICE:", EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", EMAILJS_TEMPLATE_ID);
console.log("PUBLIC:", EMAILJS_PUBLIC_KEY);

console.log(
  "PUBLIC KEY:",
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

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

// ─── Modal de formulario de contacto ──────────────────────
function ContactModal({ lang, onClose }) {
  const tx = t[lang];
  const options = therapyOptions[lang];

  const [form, setForm] = useState({ name: "", email: "", therapy: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    // Email para Magalí
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        therapy: form.therapy || "Consulta General",
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    );

        setSent(true);

    // Respuesta automática al usuario
await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_AUTOREPLY_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    therapy: form.therapy || "Consulta General",
    message: form.message,
  },
  EMAILJS_PUBLIC_KEY
);

    setForm({
      name: "",
      email: "",
      therapy: "",
      message: "",
    });

    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1800);

  } catch (error) {
  console.error("Error completo:", error);
  console.error("Status:", error.status);
  console.error("Text:", error.text);
  console.log("Enviando correo a Magali...");
  console.log("Enviando autorespuesta...");

  alert(`Error: ${error.text}`);
  }
};

  const inputStyle = {
    width: "100%",
    padding: "0.82rem 1.1rem",
    borderRadius: "0.8rem",
    border: `1px solid rgba(201,169,110,0.22)`,
    background: "#F5F0EC",
    fontFamily: FONT.sans,
    fontSize: "0.9rem",
    color: THEME.text,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = `${THEME.sage}80`;
    e.target.style.boxShadow = `0 0 0 3px ${THEME.sage}14`;
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = "rgba(201,169,110,0.22)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
        backgroundColor: "rgba(45,41,36,0.48)",
        backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem",
          backgroundColor: THEME.card,
          borderRadius: "1.75rem",
          padding: "2.25rem",
          boxShadow: `0 40px 90px rgba(0,0,0,0.18), 0 0 0 1px ${THEME.gold}28`,
          animation: "modalIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Borde dorado top */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 90, height: 2, borderRadius: "0 0 4px 4px",
          background: `linear-gradient(to right, transparent, ${THEME.gold}90, transparent)`,
        }} />

        {/* Header modal */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.75rem" }}>
          <span style={{ color: THEME.gold, fontSize: "1rem" }}>🌿</span>
          <h3 style={{
            fontFamily: FONT.serif, fontSize: "1.6rem", fontStyle: "italic",
            fontWeight: 400, color: THEME.text, margin: 0,
          }}>
            {tx.formTitle}
          </h3>
        </div>

        {sent ? (
          <div style={{
            textAlign: "center", padding: "2rem 1rem",
            background: `rgba(138,158,138,0.08)`,
            borderRadius: "1rem", border: `1px solid rgba(138,158,138,0.2)`,
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🌿</div>
            <p style={{ fontFamily: FONT.serif, fontSize: "1.1rem", fontStyle: "italic", color: THEME.sage, margin: 0 }}>
              {tx.successMsg}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <input
              type="text" name="name" value={form.name}
              onChange={handleChange} placeholder={tx.name} required
              style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
            />
            <input
              type="email" name="email" value={form.email}
              onChange={handleChange} placeholder={tx.email} required
              style={inputStyle} onFocus={focusStyle} onBlur={blurStyle}
            />
            <select
              name="therapy" value={form.therapy} onChange={handleChange}
              style={{
                ...inputStyle, cursor: "pointer",
                color: form.therapy ? THEME.text : THEME.textMuted
              }}
            >
              <option value="">{tx.selectDefault}</option>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder={tx.messagePlaceholder} rows={4} required
              style={{ ...inputStyle, resize: "none" }}
              onFocus={focusStyle} onBlur={blurStyle}
            />

            <div style={{ height: 1, backgroundColor: THEME.border, margin: "0.25rem 0" }} />

            <button
              type="submit"
              style={{
                padding: "0.9rem", borderRadius: "0.85rem", border: "none",
                backgroundColor: THEME.sage, color: "#fff",
                fontFamily: FONT.sans, fontSize: "0.9rem", fontWeight: 600,
                cursor: "pointer", letterSpacing: "0.03em",
                boxShadow: `0 5px 20px rgba(138,158,138,0.35)`,
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#9AAF9A"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = THEME.sage; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {tx.send}
            </button>

            <p style={{
              fontFamily: FONT.sans, fontSize: "0.72rem", textAlign: "center",
              color: THEME.textMuted, opacity: 0.6, margin: 0
            }}>
              info.magalisolcerezo@gmail.com
            </p>
          </form>
        )}

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "1.1rem", right: "1.4rem",
            background: "transparent", border: "none", color: THEME.textMuted,
            fontSize: "1rem", opacity: 0.4, cursor: "pointer", transition: "opacity 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "0.4"; }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
//  COMPONENTE PRINCIPAL
// ══════════════════════════════════════════════════════════
export default function Contacto({ lang = "es" }) {
  const tx = t[lang];
  const [modal, setModal] = useState(false);

  // Acción de cada card
  const handleCardAction = (cardId) => {
    if (cardId === "whatsapp") {
      window.open(
        `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`,
        "_blank", "noopener,noreferrer"
      );
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
          padding: "7rem 1.5rem 6rem",
          backgroundColor: THEME.bgB,
          overflow: "hidden",

        }}
      >

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
          <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
          <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
          <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
          <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
          <MoonDeco className="absolute bottom-1/4 left-1/3" />
        </div>





        {/* Acuarela de fondo — misma técnica que HeroSection */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 0% 50%, rgba(168,205,185,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "68rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* ── Banner principal — izquierda | cards ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(240px, 320px) 1fr",  // izquierda fija, derecha flexible
            gap: "3rem",
            alignItems: "center",
          }}
            className="contacto-outer-grid"
          >

            {/* ── COLUMNA IZQUIERDA — Título ── */}
            <div>
              {/* Tag */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
                <span style={{
                  fontFamily: FONT.sans, fontSize: "0.7rem", letterSpacing: "0.22em",
                  textTransform: "uppercase", fontWeight: 600, color: THEME.gold,
                }}>
                  {tx.tag}
                </span>
              </div>

              <h2 style={{
                fontFamily: FONT.serif,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.2,
                color: THEME.text,
                marginBottom: "0.85rem",
              }}>
                {tx.title}
              </h2>

              <p style={{
                fontFamily: FONT.sans,
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: THEME.textMuted,
                marginBottom: "1.5rem",
                maxWidth: "32ch",
              }}>
                {tx.sub}
              </p>

              {/* Botón consulta general — abre el modal del formulario */}
              <button
                onClick={() => setModal(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.7rem 1.6rem",
                  borderRadius: "9999px",
                  border: `1.5px solid ${THEME.text}30`,
                  backgroundColor: "transparent",
                  color: THEME.text,
                  fontFamily: FONT.sans,
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  transition: "all 0.25s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = `${THEME.text}08`;
                  e.currentTarget.style.borderColor = `${THEME.text}60`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = `${THEME.text}30`;
                }}
              >
                ✉ {tx.formBtn}
              </button>
            </div>

            {/* ── COLUMNA DERECHA — 3 contact cards ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",   // siempre 3 columnas iguales en desktop
              gap: "1rem",
            }}
              // En mobile pasan a columna única
              className="contact-cards-grid"
            >
              {tx.cards.map((card) => {
                const Icon = ICONS[card.icon];
                const colors = BTN_COLORS[card.color];

                return (
                  <div
                    key={card.id}
                    style={{
                      backgroundColor: "rgba(253,252,250,0.78)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: `1px solid rgba(232,226,220,0.75)`,
                      borderRadius: "1.25rem",
                      padding: "1.75rem 1.5rem",
                      minHeight: "220px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      boxShadow: "0 4px 20px rgba(45,41,36,0.05)",
                      transition: "transform 0.25s, box-shadow 0.25s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 12px 36px rgba(45,41,36,0.10)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,41,36,0.05)";
                    }}
                  >
                    {/* Ícono */}
                    <div style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      backgroundColor: `${colors.bg === "#fff" || colors.bg === "transparent"
                        ? THEME.sage : colors.bg}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.bg === "transparent" ? THEME.gold : colors.bg,
                      flexShrink: 0,
                    }}>
                      <Icon size={20} />
                    </div>

                    {/* Label */}
                    <p style={{
                      fontFamily: FONT.serif,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: THEME.text,
                      margin: 0,
                      lineHeight: 1.2,
                    }}>
                      {card.label}
                    </p>

                    {/* Descripción */}
                    <p style={{
                      fontFamily: FONT.sans,
                      fontSize: "0.78rem",
                      color: THEME.textMuted,
                      lineHeight: 1.6,
                      margin: 0,
                      flexGrow: 1,
                    }}>
                      {card.desc}
                    </p>

                    {/* Botón de acción */}
                    <button
                      onClick={() => handleCardAction(card.id)}
                      style={{
                        marginTop: "0.4rem",
                        padding: "0.55rem 1.1rem",
                        borderRadius: "9999px",
                        border: colors.border || "none",
                        backgroundColor: colors.bg,
                        color: colors.color,
                        fontFamily: FONT.sans,
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        letterSpacing: "0.03em",
                        boxShadow: colors.shadow,
                        transition: "all 0.22s",
                        width: "100%",
                        textAlign: "center",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = colors.hover;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = colors.bg;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {card.btn}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Separador botánico al final */}
        <div style={{ marginTop: "3rem" }}>
          <DividerLeaves />
        </div>
      </section>

      {/* Modal formulario de contacto */}
      {modal && <ContactModal lang={lang} onClose={() => setModal(false)} />}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(18px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        /* Cards responsivas */
        @media (max-width: 640px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .contacto-outer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .contact-cards-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}