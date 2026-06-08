import { useState, useEffect, useRef } from "react";
import { THEME, T } from "../constants";


const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', serif",
  sans: "'Quicksand', sans-serif",
};

const SECTION_IDS = ["inicio", "sobre", "terapias", "testimonios", "sesiones", "contacto"];


// ── Sección visible por IntersectionObserver (sin scroll listener) ──
function useActiveSection() {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const obs = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);
  return active;
}

// ── Progreso de scroll ──────────────────────────────────────
function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const d = document.documentElement;
      setPct(Math.min(100, (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return pct;
}

// ── Scroll detectado ────────────────────────────────────────
function useScrolled(t = 30) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const fn = () => setS(window.scrollY > t);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [t]);
  return s;
}

export default function Navbar({ lang, setLang, onNavigate }) {
  const t = T[lang].nav;
  const active = useActiveSection();
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const linkRefs = useRef({});
  const navRef = useRef(null);
  const [ul, setUl] = useState({ left: 0, width: 0, opacity: 0 });


  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const teal = "#2A6B5C";

  const links = [
    { label: t.inicio, id: "inicio" },
    { label: t.sobre, id: "sobre" },
    { label: t.terapias, id: "terapias" },
    { label: t.testimonios, id: "testimonios" },
    { label: t.sesiones, id: "sesiones" },
    // { label: t.faq, id: "faq" },
    { label: t.contacto, id: "contacto" },
  ];

  const handleLink = (id) => {
    setMenuOpen(false);

    if (onNavigate) {
      onNavigate(id);
      return;
    }

    scrollTo(id);
  };

  return (

    <>
      {/* Barra de progreso */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          width: "100%",
          height: 3,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: `linear-gradient(to right, ${teal}, ${THEME.gold})`,
            transition: "width 0.1s linear",
            borderRadius: "0 1px 1px 0",
            boxShadow: `0 0 10px ${THEME.gold}55`
          }}
        />
      </div>





      <nav
        style={{

          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9997,
          height: 64, padding: "0 2rem",
          backgroundColor: scrolled ? "rgba(245,248,246,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? `1px solid rgba(42,107,92,0.12)` : "1px solid transparent",
          transition: "background-color 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-10px)",
        }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────── */}
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate("inicio");
              } else {
                handleLink("inicio");
              }
            }}


            style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              display: "flex", alignItems: "center", gap: 8,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0.92)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}
          >
            <img
              src="/assets/Logos_2.png"
              alt="Magalí Sol Cerezo"
              style={{
                height: 50, width: "auto", objectFit: "contain",
                mixBlendMode: "multiply", filter: "saturate(1.1) brightness(0.95)"
              }}
              onError={e => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />

            {/* Texto al lado del logo */}
            <div
              className="flex"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                lineHeight: 1.1,
                fontSize: "0.65rem"
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: THEME.text,
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                Magalí Sol Cerezo
              </span>

              <span
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.textMuted,
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                Psicóloga Holística
              </span>
            </div>
          </button>





          {/* ── Desktop nav ──────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6">
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
                fontFamily: FONT.sans, fontSize: "0.79rem", fontWeight: 600,
                letterSpacing: "0.04em", padding: "0.52rem 1.3rem", borderRadius: "9999px",
                border: "none", cursor: "pointer", position: "relative", overflow: "hidden",
                backgroundColor: THEME.sage, color: "#fff",
                boxShadow: `0 3px 16px rgba(138,158,138,0.32)`,
                transition: "transform 0.25s, box-shadow 0.25s",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-8px)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(138,158,138,0.44)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 3px 16px rgba(138,158,138,0.32)`;
              }}
              className="transition-all hover:opacity-90"
            >
              <span style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)",
                backgroundSize: "250% 100%",
                animation: "navShimmer 5s ease-in-out infinite",
                borderRadius: "9999px",
              }} />
              <span style={{ position: "relative", zIndex: 1 }}>{t.reservar}</span>
            </button>
          </div>

          {/* ── Mobile hamburger ─────────────────────────── */}
          <button className="md:hidden flex flex-col items-end gap-[5px] p-[0.35rem]"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}

          >

            {[0, 1, 2].map((i) => (
              <span key={i}
                style={{
                  display: "block", height: 1.5, borderRadius: 2,
                  backgroundColor: THEME.text,
                  transition: "all 0.3s ease",
                  width: menuOpen ? (i === 1 ? 0 : 22) : (i === 1 ? 14 : 22),
                  transform: menuOpen && i === 0 ? "rotate(45deg) translate(4.5px,4.5px)"
                    : menuOpen && i === 2 ? "rotate(-45deg) translate(4.5px,-4.5px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
            ))}
          </button>
        </div>

        {/* ── Mobile menu ──────────────────────────────────── */}
        {
          menuOpen && (
            <div
              className="md:hidden absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-4"
              style={{
                position: "fixed", top: 64, left: 0, right: 0, zIndex: 9996,
                backgroundColor: "rgba(245,248,246,0.97)",
                backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                borderBottom: `1px solid rgba(42,107,92,0.10)`,
                padding: menuOpen ? "1.25rem 2rem 1.5rem" : "0 2rem",
                maxHeight: menuOpen ? "80vh" : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s ease",
              }}
            >

              {links.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleLink(item.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    fontFamily: FONT.sans,
                    fontSize: "1rem",
                    fontWeight: active === item.id ? 700 : 400,
                    color: active === item.id ? teal : THEME.text,
                    padding: "0.65rem 0",
                    background: "none",
                    border: "none",
                    borderBottom: `1px solid rgba(42,107,92,0.08)`,
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-14px)",
                    transition: `opacity 0.32s ease ${i * 0.05}s, transform 0.32s ease ${i * 0.05}s`,
                  }}
                >
                  {active === item.id && (
                    <span
                      style={{
                        color: THEME.gold,
                        marginRight: 8,
                        fontSize: "0.62rem",
                      }}
                    >
                      ✦
                    </span>
                  )}

                  {item.label}
                </button>
              ))}


              <div className="flex gap-2 pt-2">



                {["es", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      fontFamily: FONT.sans, fontSize: "0.76rem",
                      fontWeight: lang === l ? 700 : 400,
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      padding: "0.38rem 1rem", borderRadius: "9999px",
                      border: `1px solid ${lang === l ? teal : THEME.border}`,
                      backgroundColor: lang === l ? teal : "transparent",
                      color: lang === l ? "#fff" : THEME.textMuted,
                      cursor: "pointer"
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>



              <button
                onClick={() => handleLink("sesiones")}
                style={{
                  flex: 1, fontFamily: FONT.sans, fontSize: "0.85rem", fontWeight: 600,
                  padding: "0.52rem 1.25rem", borderRadius: "9999px", border: "none",
                  backgroundColor: THEME.sage, color: "#fff",
                  boxShadow: `0 3px 14px rgba(138,158,138,0.28)`, cursor: "pointer",
                }}
              >
                {t.reservar}
              </button>
            </div>


          )
        }
      </nav >

      <style>
        {`
    @keyframes navShimmer {
      0% {
        background-position: 200% center;
      }
      100% {
        background-position: -200% center;
      }
    }
  `}
      </style>
    </>
  );
}
