import { useState, useEffect } from "react";
import { THEME, T } from "../constants";
import { scrollTo } from "./ui";



export default function Navbar({ lang, setLang }) {
  const t = T[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.inicio, id: "inicio" },
    { label: t.sobre, id: "sobre" },
    { label: t.terapias, id: "terapias" },
    { label: t.testimonios, id: "testimonios" },
    { label: t.contacto, id: "contacto" },
  ];

  const handleLink = (id) => { setMenuOpen(false); scrollTo(id); };

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(252,251,250,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${THEME.border}` : "none",
        transition: "all 0.4s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <button onClick={() => handleLink("inicio")} className="flex items-center gap-4">
          {/*
            ↓ LOGO OFICIAL — reemplazar src con "/assets/logo.png"
            El logo tiene fondo blanco; sobre la navbar clara se ve perfecto.
          */}
          <img
            src=" public/assets/logos_2.png"
            alt="Magalí Sol Cerezo"
            style={{
              height: scrolled ? 88 : 110,
              width: "auto",
              objectFit: "contain",
              transition: "all 0.35s ease",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span style={{
            display: "none",
            fontFamily: "'Cormorant Garamond', serif",
            color: THEME.text,
            fontSize: "1.1rem",
            letterSpacing: "0.08em",
            fontStyle: "italic",
          }}>
            Magalí Sol Cerezo
          </span>
        </button>

        {/* ── Desktop nav ──────────────────────────────── */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleLink(l.id)}
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "0.82rem",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
              className="hover:opacity-60 transition-opacity"
            >
              {l.label}
            </button>
          ))}

          {/* Lang switch */}
          <div
            className="flex items-center gap-0.5 rounded-full px-2 py-1"
            style={{ border: `1px solid ${THEME.border}`, backgroundColor: "rgba(255,255,255,0.55)" }}
          >
            {["es", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: lang === l ? 700 : 400,
                  color: lang === l ? THEME.sage : THEME.textMuted,
                  padding: "2px 8px",
                  borderRadius: 9999,
                  backgroundColor: lang === l ? `${THEME.sage}18` : "transparent",
                  transition: "all 0.2s",
                  letterSpacing: "0.06em",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLink("sesiones")}
            style={{
              backgroundColor: THEME.sage,
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "0.5rem 1.3rem",
              borderRadius: 9999,
              boxShadow: `0 2px 16px ${THEME.sage}44`,
            }}
            className="transition-all hover:opacity-90"
          >
            {t.reservar}
          </button>
        </div>

        {/* ── Mobile hamburger ─────────────────────────── */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 22, height: 1.5, backgroundColor: THEME.text, display: "block", borderRadius: 2 }} />
          ))}
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────── */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-4"
          style={{ backgroundColor: "rgba(252,251,250,0.97)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${THEME.border}` }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleLink(l.id)}
              style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.text, textAlign: "left", fontSize: "0.9rem" }}
            >
              {l.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            {["es", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: lang === l ? 700 : 400,
                  color: lang === l ? THEME.sage : THEME.textMuted,
                  padding: "4px 14px",
                  borderRadius: 9999,
                  border: `1px solid ${lang === l ? THEME.sage : THEME.border}`,
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleLink("sesiones")}
            style={{
              backgroundColor: THEME.sage,
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              padding: "0.75rem",
              borderRadius: 9999,
              fontWeight: 600,
              marginTop: "0.5rem",
            }}
          >
            {t.reservar}
          </button>
        </div>
      )}
    </nav>
  );
}
