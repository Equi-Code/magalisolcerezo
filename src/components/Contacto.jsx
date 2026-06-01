import { useState } from "react";
import { THEME, T } from "../constants";
import DividerLeaves from "./DividerLeaves";

const WHATSAPP_NUMBER = "5491100000000"; // Reemplazar por número real
const INSTAGRAM_URL = "https://instagram.com/magalisol.cerezo";

const therapyOptions = {
  es: [
    "Tapping EFT",
    "Regresión a Vidas Pasadas",
    "Sanación Energética",
    "Mindfulness & Meditación",
    "Terapias Florales",
    "Biodecodificación",
    "Consulta general",
  ],

  en: [
    "EFT Tapping",
    "Past Life Regression",
    "Energy Healing",
    "Mindfulness & Meditation",
    "Floral Therapies",
    "Biodecoding",
    "General inquiry",
  ],
};

const t = {
  es: {
    tag: "Contacto",
    title: "Empezá tu camino",
    sub: "Si sentís que es momento de comenzar tu proceso, estoy aquí para acompañarte. Escribime sin compromiso.",

    formTitle: "Consultas generales",

    name: "Tu nombre",
    email: "Tu email",
    therapy: "Terapia de interés",
    messagePlaceholder: "Contame cómo puedo ayudarte...",

    send: "Enviar mensaje",

    successMsg:
      "¡Gracias por escribirme! Te respondo a la brevedad. 🌿",

    connectTitle: "¿Lista para tu transformación?",
    connectSub:
      "También podés contactarme directamente por:",

    whatsapp: "Escribime por WhatsApp",
    instagram: "Seguime en Instagram",

    bookLabel: "Reservar sesión online",

    selectDefault: "Seleccioná una terapia",
  },

  en: {
    tag: "Contact",

    title: "Begin your journey",

    sub: "If you feel it is time to start your process, I am here to accompany you. Write to me without commitment.",

    formTitle: "General inquiries",

    name: "Your name",
    email: "Your email",
    therapy: "Therapy of interest",

    messagePlaceholder:
      "Tell me how I can help you...",

    send: "Send message",

    successMsg:
      "Thank you for writing! I will respond shortly. 🌿",

    connectTitle: "Ready for your transformation?",

    connectSub:
      "You can also contact me directly via:",

    whatsapp: "Message me on WhatsApp",
    instagram: "Follow me on Instagram",

    bookLabel: "Book an online session",

    selectDefault: "Select a therapy",
  },
};

export default function Contacto({ lang = "es" }) {
  const tx = t[lang];
  const options = therapyOptions[lang];

  const [form, setForm] = useState({
    name: "",
    email: "",
    therapy: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Consulta enviada:", form);

    setSent(true);

    setForm({
      name: "",
      email: "",
      therapy: "",
      message: "",
    });

    setTimeout(() => setSent(false), 5000);
  };

  const inputStyle = {
    background: "#F5F0EC",
    border: "1px solid rgba(201,169,110,0.2)",
    color: "#2D2924",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <section
      id="contacto"
      className="py-10 px-5"
      style={{ background: "#FCFBFA" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="font-sans text-xs uppercase tracking-[0.35em] font-semibold"
            style={{ color: "#C9A96E" }}
          >
            ✦ &nbsp; {tx.tag}
          </span>

          <h2
            className="font-serif text-4xl md:text-5xl font-light mt-3 mb-5"
            style={{ color: "#2D2924" }}
          >
            {tx.title}
          </h2>

          <p
            className="font-sans text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: "#6B5E54" }}
          >
            {tx.sub}
          </p>

          <span className="gold-line mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#FDFCFA",
              border:
                "1px solid rgba(201,169,110,0.15)",

              boxShadow:
                "0 8px 40px rgba(45,41,36,0.05)",
            }}
          >
            <h3
              className="font-serif text-2xl font-light mb-7"
              style={{ color: "#2D2924" }}
            >
              🌿 {tx.formTitle}
            </h3>

            {sent ? (
              <div
                className="rounded-xl p-6 text-center"
                style={{
                  background:
                    "rgba(138,158,138,0.1)",

                  border:
                    "1px solid rgba(138,158,138,0.2)",
                }}
              >
                <p
                  className="font-serif text-lg"
                  style={{ color: "#8A9E8A" }}
                >
                  {tx.successMsg}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={tx.name}
                  required
                  style={inputStyle}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={tx.email}
                  required
                  style={inputStyle}
                />

                <select
                  name="therapy"
                  value={form.therapy}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                  }}
                >
                  <option value="">
                    {tx.selectDefault}
                  </option>

                  {options.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={tx.messagePlaceholder}
                  rows={5}
                  required
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                />

                <button
                  type="submit"
                  className="py-4 rounded-xl font-sans text-sm font-semibold transition-all duration-300"
                  style={{
                    background: "#8A9E8A",
                    color: "#FDFCFA",
                    border: "none",
                    cursor: "pointer",

                    boxShadow:
                      "0 4px 20px rgba(138,158,138,0.3)",
                  }}
                >
                  🌿 {tx.send}
                </button>

                <p
                  className="font-sans text-xs text-center"
                  style={{ color: "#8A9E8A" }}
                >
                  mscerezopsicoholistica@gmail.com
                </p>
              </form>
            )}
          </div>

          {/* CONNECT OPTIONS */}
          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="font-serif text-2xl font-light mb-2"
                style={{ color: "#2D2924" }}
              >
                {tx.connectTitle}
              </h3>

              <p
                className="font-sans text-sm"
                style={{ color: "#6B5E54" }}
              >
                {tx.connectSub}
              </p>

              <span
                className="block w-8 h-px mt-4"
                style={{ background: "#C9A96E" }}
              />
            </div>

            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}

              target="_blank"
              rel="noopener noreferrer"

              className="flex items-center gap-4 rounded-2xl p-6 no-underline transition-all duration-300"

              style={{
                background: "#FDFCFA",

                border:
                  "1px solid rgba(138,158,138,0.2)",

                boxShadow:
                  "0 2px 16px rgba(45,41,36,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background:
                    "rgba(138,158,138,0.12)",
                }}
              >
                📱
              </div>

              <div>
                <p
                  className="font-sans text-sm font-semibold"
                  style={{ color: "#2D2924" }}
                >
                  {tx.whatsapp}
                </p>

                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: "#8A9E8A" }}
                >
                  {lang === "es"
                    ? "Respuesta rápida"
                    : "Quick response"}
                </p>
              </div>

              <span
                className="ml-auto text-sm"
                style={{ color: "#C9A96E" }}
              >
                →
              </span>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"

              className="flex items-center gap-4 rounded-2xl p-6 no-underline transition-all duration-300"

              style={{
                background: "#FDFCFA",

                border:
                  "1px solid rgba(196,150,138,0.2)",

                boxShadow:
                  "0 2px 16px rgba(45,41,36,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background:
                    "rgba(196,150,138,0.12)",
                }}
              >
                📷
              </div>

              <div>
                <p
                  className="font-sans text-sm font-semibold"
                  style={{ color: "#2D2924" }}
                >
                  {tx.instagram}
                </p>

                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: "#C4968A" }}
                >
                  @magalisol.cerezo
                </p>
              </div>

              <span
                className="ml-auto text-sm"
                style={{ color: "#C9A96E" }}
              >
                →
              </span>
            </a>

            {/* BOOK */}
            <a
              href="#sesiones"

              className="flex items-center gap-4 rounded-2xl p-6 no-underline transition-all duration-300"

              style={{
                background:
                  "linear-gradient(135deg, rgba(138,158,138,0.12) 0%, rgba(201,169,110,0.08) 100%)",

                border:
                  "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background:
                    "rgba(201,169,110,0.12)",
                }}
              >
                📅
              </div>

              <div>
                <p
                  className="font-sans text-sm font-semibold"
                  style={{ color: "#2D2924" }}
                >
                  {tx.bookLabel}
                </p>

                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: "#C9A96E" }}
                >
                  {lang === "es"
                    ? "Elegí tu día y horario"
                    : "Choose your day and time"}
                </p>
              </div>

              <span
                className="ml-auto text-sm"
                style={{ color: "#C9A96E" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

                {/* DividerLeaves al final */}
                <div style={{ marginTop: "1.5rem" }}>
                  <DividerLeaves />
                </div>

    </section>
  );
}


// FAQ

          {/* ── FAQ Acordeón ──
          <FadeIn delay={0.2}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: THEME.text,
              fontSize: "1.7rem",
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}>
              {t.faqTitle}
            </h3>

            <div className="flex flex-col gap-3">
              {t.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    border: `1px solid ${openFaq === i ? THEME.sage + "50" : THEME.border}`,
                    transition: "border 0.3s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                    style={{ backgroundColor: openFaq === i ? `${THEME.sage}08` : THEME.card }}
                  >
                    <span style={{
                      fontFamily: "'Quicksand', sans-serif",
                      color: THEME.text,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}>
                      {faq.q}
                    </span>
                    <span style={{
                      color: THEME.sage,
                      fontSize: "1.2rem",
                      flexShrink: 0,
                      transition: "transform 0.3s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "block",
                    }}>
                      +
                    </span>
                  </button>

                  {openFaq === i && (
                    <div className="px-6 pb-5" style={{ backgroundColor: `${THEME.sage}06` }}>
                      <p style={{
                        fontFamily: "'Quicksand', sans-serif",
                        color: THEME.textMuted,
                        fontSize: "0.88rem",
                        lineHeight: 1.8,
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn> */}