import { useState } from "react";
import { THEME, T } from "../constants";
import { FadeIn, SectionTag } from "./ui";

export default function Contacto({ lang }) {
  const t        = T[lang].contacto;
  const terapias = T[lang].terapias.items.map((i) => i.title);

  const [form, setForm] = useState({ name: "", email: "", terapia: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  /*
    ↓ DESTINO FINAL: mscerezopsicoholistica@gmail.com
    Conectar EmailJS (npm install @emailjs/browser) reemplazando el console.log:
      emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY')
  */
  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    console.log("[Contacto] Nueva consulta →", form, "→ mscerezopsicoholistica@gmail.com");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", terapia: "", message: "" });
    }, 4000);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1.1rem",
    borderRadius: "0.85rem",
    border: `1px solid ${THEME.border}`,
    fontFamily: "'Quicksand', sans-serif",
    color: THEME.text,
    fontSize: "0.9rem",
    backgroundColor: THEME.bg,
    outline: "none",
    marginBottom: "1rem",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 md:px-12 relative"
      style={{ backgroundColor: `${THEME.sage}0A` }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <FadeIn>
          <div className="text-center mb-16">
            <SectionTag label={t.tag} />
            <h2 style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: THEME.text,
              fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
              fontWeight: 400,
              fontStyle: "italic",
            }} className="mb-4">
              {t.title}
            </h2>
            <p style={{
              fontFamily: "'Quicksand', sans-serif",
              color: THEME.textMuted,
              maxWidth: "48ch",
              margin: "0 auto",
              lineHeight: 1.8,
            }}>
              {t.description}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Formulario ── */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-3xl p-8"
              style={{
                backgroundColor: THEME.card,
                border: `1px solid ${THEME.border}`,
                boxShadow: `0 4px 30px rgba(0,0,0,0.05)`,
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <span style={{ fontSize: "2.5rem" }}>🌿</span>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: THEME.sage,
                    fontSize: "1.4rem",
                    fontStyle: "italic",
                  }}>
                    {t.successMsg}
                  </p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                  <select
                    value={form.terapia}
                    onChange={(e) => setForm({ ...form, terapia: e.target.value })}
                    style={{ ...inputStyle, color: form.terapia ? THEME.text : THEME.textMuted }}
                  >
                    <option value="">{t.terapiaDefault}</option>
                    {terapias.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <textarea
                    placeholder={t.msgPlaceholder}
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      width: "100%",
                      padding: "0.9rem",
                      borderRadius: "1rem",
                      backgroundColor: THEME.sage,
                      color: "#fff",
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      boxShadow: `0 4px 20px ${THEME.sage}35`,
                      cursor: "pointer",
                      marginTop: "0.25rem",
                    }}
                    className="transition-all hover:opacity-90"
                  >
                    {t.btn}
                  </button>
                </>
              )}
            </div>
          </FadeIn>

          {/* ── FAQ Acordeón ── */}
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
