import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, FadeIn, SectionTag, scrollTo } from "./ui";

export default function Terapias({ lang }) {
  const t = T[lang].terapias;
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="terapias"
      className="py-24 px-6 md:px-12 relative"
      style={{ backgroundColor: THEME.bg }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <StarDeco className="absolute top-20 left-16" />
        <StarDeco className="absolute bottom-24 right-24" />
      </div>

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
              maxWidth: "52ch",
              margin: "0 auto",
              lineHeight: 1.8,
            }}>
              {t.description}
            </p>
          </div>
        </FadeIn>

        {/* ── Grid de tarjetas ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="rounded-3xl p-7 flex flex-col h-full transition-all duration-300"
                style={{
                  backgroundColor: THEME.card,
                  border: `1px solid ${THEME.border}`,
                  boxShadow: expanded === i
                    ? `0 12px 40px rgba(138,158,138,0.18)`
                    : `0 2px 12px rgba(0,0,0,0.04)`,
                  transform: expanded === i ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span style={{ fontSize: "1.6rem", color: THEME.gold }}>{item.icon}</span>
                  <div style={{ width: 28, height: 1, backgroundColor: THEME.border }} />
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: THEME.text,
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  marginBottom: "0.6rem",
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.textMuted,
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  flexGrow: 1,
                }}>
                  {expanded === i ? item.full : item.short}
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{
                      border: `1px solid ${THEME.sage}`,
                      color: THEME.sage,
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "0.4rem 1rem",
                      borderRadius: 9999,
                      backgroundColor: "transparent",
                      letterSpacing: "0.04em",
                    }}
                    className="transition-all hover:opacity-80"
                  >
                    {expanded === i ? t.btnClose : t.btn}
                  </button>
                  <button
                    onClick={() => scrollTo("sesiones")}
                    style={{
                      backgroundColor: `${THEME.sage}18`,
                      color: THEME.sage,
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "0.4rem 1rem",
                      borderRadius: 9999,
                      letterSpacing: "0.04em",
                    }}
                    className="transition-all hover:opacity-80"
                  >
                    {t.btnReservar}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
