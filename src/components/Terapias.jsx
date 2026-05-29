import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, FadeIn, SectionTag, scrollTo } from "./ui";
import DividerLeaves from "./DividerLeaves";

export default function Terapias({ lang }) {
const t = T[lang].terapias;
  const [modalIdx, setModalIdx] = useState(null);
  const activeItem = modalIdx !== null ? t.items[modalIdx] : null;
 
  return (
    <section id="terapias" className="py-24 px-6 md:px-12 relative" style={{ backgroundColor: THEME.bg }}>
      <div className="absolute inset-0 pointer-events-none">
        <StarDeco className="absolute top-20 left-16" />
        <StarDeco className="absolute bottom-24 right-24" />
      </div>
 
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
              <span style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.gold, fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>{t.tag}</span>
              <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: THEME.text, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", fontWeight: 400, fontStyle: "italic" }} className="mb-4">
              {t.title}
            </h2>
            <p style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted, maxWidth: "52ch", margin: "0 auto", lineHeight: 1.8 }}>
              {t.description}
            </p>
          </div>
        </FadeIn>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="rounded-3xl p-7 flex flex-col h-full transition-all duration-300 cursor-pointer group"
                onClick={() => setModalIdx(i)}
                style={{
                  backgroundColor: THEME.card,
                  border: `1px solid ${THEME.border}`,
                  boxShadow: `0 2px 12px rgba(0,0,0,0.04)`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(138,158,138,0.18)`;
                  e.currentTarget.style.borderColor = `${THEME.sage}60`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 2px 12px rgba(0,0,0,0.04)`;
                  e.currentTarget.style.borderColor = THEME.border;
                }}
              >
                {/* Icon + line */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      backgroundColor: `${THEME.sage}18`,
                      border: `1px solid ${THEME.sage}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", color: THEME.gold }}>{item.icon}</span>
                  </div>
                  <div style={{ width: 28, height: 1, backgroundColor: THEME.border }} />
                </div>
 
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: THEME.text, fontSize: "1.35rem", fontWeight: 600, marginBottom: "0.6rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted, fontSize: "0.88rem", lineHeight: 1.75, flexGrow: 1 }}>
                  {item.short}
                </p>
 
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={e => { e.stopPropagation(); setModalIdx(i); }}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                    style={{
                      border: `1px solid ${THEME.sage}`,
                      color: THEME.sage,
                      fontFamily: "'Quicksand', sans-serif",
                      backgroundColor: "transparent",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.btn}
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                    style={{ backgroundColor: `${THEME.sage}18`, color: THEME.sage, fontFamily: "'Quicksand', sans-serif", letterSpacing: "0.04em" }}
                  >
                    {t.btnReservar}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
 
      {/* ===== MODAL OVERLAY ===== */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(45,41,36,0.55)", backdropFilter: "blur(8px)" }}
          onClick={() => setModalIdx(null)}
        >
          <div
            className="relative max-w-lg w-full rounded-3xl p-10"
            style={{
              backgroundColor: THEME.card,
              boxShadow: `0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px ${THEME.gold}30`,
              animation: "modalIn 0.3s ease",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative top line */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.8rem" }}>
              <div style={{ width: 32, height: 1, backgroundColor: THEME.gold, opacity: 0.5 }} />
              <span style={{ fontSize: "1.4rem", color: THEME.gold }}>{activeItem.icon}</span>
              <div style={{ flex: 1, height: 1, backgroundColor: THEME.gold, opacity: 0.2 }} />
            </div>
 
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                color: THEME.text,
                fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                fontWeight: 400,
                fontStyle: "italic",
                marginBottom: "1.2rem",
                lineHeight: 1.25,
              }}
            >
              {activeItem.title}
            </h3>
 
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "0.96rem",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              {activeItem.full}
            </p>
 
            {/* Divider */}
            <div style={{ height: 1, backgroundColor: THEME.border, marginBottom: "1.6rem" }} />
 
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => { setModalIdx(null); document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-full font-semibold transition-all"
                style={{
                  backgroundColor: THEME.sage,
                  color: "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.88rem",
                  boxShadow: `0 4px 20px ${THEME.sage}40`,
                  letterSpacing: "0.03em",
                }}
              >
                {t.btnReservar}
              </button>
              <button
                onClick={() => setModalIdx(null)}
                className="px-6 py-3 rounded-full font-semibold transition-all"
                style={{
                  border: `1px solid ${THEME.border}`,
                  color: THEME.textMuted,
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.88rem",
                  backgroundColor: "transparent",
                }}
              >
                {t.btnClose}
              </button>
            </div>
 
            {/* Close X */}
            <button
              onClick={() => setModalIdx(null)}
              style={{
                position: "absolute",
                top: "1.2rem",
                right: "1.5rem",
                color: THEME.textMuted,
                fontSize: "1.3rem",
                lineHeight: 1,
                fontFamily: "sans-serif",
                opacity: 0.5,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <DividerLeaves flip style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} />


    </section>



  );
};
