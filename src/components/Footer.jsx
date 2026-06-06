import { THEME, T } from "../constants";
import { StarDeco } from "./ui";

// ↓ REEMPLAZAR con el número real de WhatsApp de Magalí
const WA_NUMBER = "5491160519556";

// ─── Colores del footer (mismo teal que SplashScreen) ────────
const FOOTER_BG = "#0A2926";          // base oscura teal
const FOOTER_WAVE = "#0D3330";          // color de la ola SVG
const GOLD = THEME.gold;         // "#C9A96E"
const TEXT_DIM = "rgba(220,210,195,0.5)";
const TEXT_MID = "rgba(220,210,195,0.7)";
const TEXT_BRIGHT = "#EDE8E0";

export default function Footer({ lang, onPrivacy, onNavigate }) {
  console.log("onNavigate:", onNavigate);
  const t = T[lang].footer;
  const nav = T[lang].nav;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleNavigate = (id) => {
    console.log("navegando a:", id);

    if (onNavigate) {
      onNavigate(id);
    } else {
      scrollTo(id);
    }
  };

  const FONT_SERIF = "'Cormorant Garamond', serif";
  const FONT_SANS = "'Quicksand', sans-serif";

  return (
    <>
      {/* ── Ola de transición — misma paleta teal ── */}
<div style={{ lineHeight: 0, backgroundColor: THEME.bgRose  }}>
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    style={{ display: "block", width: "100%", height: 90 }}
  >
    <path
      d="M0,64 C180,10 320,10 480,50 C640,90 800,90 960,50 C1120,10 1280,10 1440,64 L1440,120 L0,120 Z"
      fill="rgba(255,255,255,0.08)"
    />

    <path
      d="M0,74 C180,20 320,20 480,60 C640,100 800,100 960,60 C1120,20 1280,20 1440,74 L1440,120 L0,120 Z"
      fill={FOOTER_WAVE}
    />
  </svg>
</div>

      <footer
        className="relative overflow-hidden"
        style={{
          // ── Fondo teal igual que el SplashScreen ──────────────
          background: [
            "radial-gradient(ellipse 60% 50% at 15% 30%, rgba(56,130,115,0.22) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 45% at 85% 70%, rgba(80,150,135,0.14) 0%, transparent 60%)",
            `radial-gradient(ellipse at 50% 45%, #1C4F4A 0%, ${FOOTER_BG} 45%, #061818 100%)`,
          ].join(", "),
        }}
      >

        {/* ── Decoraciones de fondo ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Blob de luz acuarela — izquierda */}
          <div style={{
            position: "absolute", top: "-5%", left: "-8%",
            width: "40%", height: "55%", borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(56,130,115,0.14) 0%, transparent 70%)",
            filter: "blur(32px)",
          }} />

          {/* Blob de luz — derecha inferior */}
          <div style={{
            position: "absolute", bottom: "-10%", right: "-5%",
            width: "35%", height: "50%", borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(138,158,138,0.10) 0%, transparent 70%)",
            filter: "blur(28px)",
          }} />

          {/* Pluma izquierda */}
          <img src="/assets/plumas1.png" alt="" aria-hidden="true" style={{
            position: "absolute", top: "-10%", left: "-5%",
            width: "min(340px, 40vw)", opacity: 0.10,
            mixBlendMode: "screen", transform: "rotate(-15deg)",
            objectFit: "contain", pointerEvents: "none", userSelect: "none",
            filter: "brightness(1.4) saturate(0.5) hue-rotate(150deg)",
          }} onError={e => { e.target.style.display = "none"; }} />

          {/* Pluma derecha */}
          <img src="/assets/plumas1.png" alt="" aria-hidden="true" style={{
            position: "absolute", bottom: "5%", right: "2%",
            width: "min(220px, 24vw)", opacity: 0.08,
            mixBlendMode: "screen", transform: "rotate(20deg) scaleX(-1)",
            objectFit: "contain", pointerEvents: "none", userSelect: "none",
            filter: "brightness(1.5) saturate(0.4) hue-rotate(160deg)",
          }} onError={e => { e.target.style.display = "none"; }} />

          {/* Anillos concéntricos teal */}
          {[500, 700].map(size => (
            <div key={size} style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: size, height: size, borderRadius: "50%",
              border: `1px solid rgba(80,160,145,0.06)`,
              pointerEvents: "none",
            }} />
          ))}
        </div>

        {/* ══════════════════════════════════════════
            GRID PRINCIPAL
        ══════════════════════════════════════════ */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-14 pb-8">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "2.5rem",
          }}>

            {/* ── Columna brand ── */}
            <div style={{ gridColumn: "span 1" }}>
              {/* Logo */}
              <img
                src="/assets/Logo.png"
                alt="Magalí Sol Cerezo"
                style={{
                  height: 64, width: "auto", objectFit: "contain",
                  marginBottom: "1rem",
                  mixBlendMode: "screen",
                  filter: "brightness(1.15) saturate(1.05)",
                }}
                onError={e => { e.target.style.display = "none"; }}
              />
              <p style={{
                fontFamily: FONT_SERIF, color: TEXT_BRIGHT,
                fontSize: "1.05rem", fontStyle: "italic",
                marginBottom: "0.4rem", letterSpacing: "0.04em",
              }}>
                Magalí Sol Cerezo
              </p>
              <p style={{
                fontFamily: FONT_SANS, color: TEXT_DIM,
                fontSize: "0.78rem", lineHeight: 1.75,
              }}>
                {t.tagline}
              </p>

              {/* Redes sociales — íconos pequeños */}
              <div style={{ display: "flex", gap: "0.65rem", marginTop: "1.25rem" }}>
                {/* Instagram */}
                <a href="https://www.instagram.com/magalisol.cerezo"
                  target="_blank" rel="noreferrer"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    backgroundColor: "rgba(80,160,145,0.18)",
                    border: "1px solid rgba(80,160,145,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: TEXT_MID, textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(80,160,145,0.32)"; e.currentTarget.style.color = GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(80,160,145,0.18)"; e.currentTarget.style.color = TEXT_MID; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a href={`https://api.whatsapp.com/send?phone=${WA_NUMBER}`}
                  target="_blank" rel="noreferrer"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    backgroundColor: "rgba(37,211,102,0.12)",
                    border: "1px solid rgba(37,211,102,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: TEXT_MID, textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.22)"; e.currentTarget.style.color = "#25D366"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.12)"; e.currentTarget.style.color = TEXT_MID; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Navegación ── */}
            <div>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Secciones" : "Sections"}
              </p>
              {[
                ["inicio", nav.inicio],
                ["sobre", nav.sobre],
                ["terapias", nav.terapias],
                ["sesiones", nav.sesiones],
                ["faq", nav.faq],
                ["testimonios", nav.testimonios],
                ["contacto", nav.contacto],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleNavigate(id)}
                  style={{
                    display: "block", marginBottom: "0.7rem", textAlign: "left",
                    fontFamily: FONT_SANS, color: TEXT_DIM,
                    fontSize: "0.84rem", letterSpacing: "0.03em",
                    background: "none", border: "none", cursor: "pointer",
                    transition: "color 0.2s", padding: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.color = TEXT_DIM; }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── Terapias ── */}
            <div>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Terapias" : "Therapies"}
              </p>
              {(lang === "es"
                ? ["Sanación Energética", "Corte de Lazos", "Tapping EFT", "Regresiones", "Mindfulness", "Flores de Bach", "Biodecodificación"]
                : ["Energy Healing", "Chain Cutting", "EFT Tapping", "Regressions", "Mindfulness", "Floral Therapy", "Biodecoding"]
              ).map(item => (
                <button
                  key={item}
                  onClick={() => handleNavigate("terapias")}
                  style={{
                    display: "block", marginBottom: "0.7rem", textAlign: "left",
                    fontFamily: FONT_SANS, color: TEXT_DIM,
                    fontSize: "0.84rem", letterSpacing: "0.03em",
                    background: "none", border: "none", cursor: "pointer",
                    transition: "color 0.2s", padding: 0,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.color = TEXT_DIM; }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* ── Contacto ── */}
            <div>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Contacto" : "Contact"}
              </p>

              {/* Instagram */}
              <a href="https://www.instagram.com/magalisol.cerezo"
                target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: "1rem", textDecoration: "none" }}>
                <span style={{ color: GOLD, fontSize: "0.75rem", marginTop: 2, flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: FONT_SANS, color: TEXT_DIM, fontSize: "0.84rem", lineHeight: 1.5 }}>
                  @magalisol.cerezo
                </span>
              </a>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: "1rem" }}>
                <span style={{ color: THEME.rose, fontSize: "0.75rem", marginTop: 2, flexShrink: 0 }}>◯</span>
                <span style={{ fontFamily: FONT_SANS, color: TEXT_DIM, fontSize: "0.84rem", lineHeight: 1.55 }}>
                  info.magalisolcerezo<br />@gmail.com
                </span>
              </div>

              {/* Modalidad */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "rgba(80,160,145,0.7)", fontSize: "0.75rem", flexShrink: 0 }}>◇</span>
                <span style={{ fontFamily: FONT_SANS, color: TEXT_DIM, fontSize: "0.84rem" }}>
                  {lang === "es" ? "Sesiones 100% Online" : "100% Online Sessions"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            AVISO LEGAL — sobre el bottom bar
        ══════════════════════════════════════════ */}
        <div
          className="relative max-w-6xl mx-auto px-6 md:px-12 py-4"
          style={{ borderTop: "1px solid rgba(80,160,145,0.12)" }}
        >
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem 1.5rem",
          }}>
            <span style={{
              fontFamily: FONT_SANS, color: TEXT_DIM,
              fontSize: "0.7rem", letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              {lang === "es" ? "Aviso legal" : "Legal notice"}
            </span>

            <div style={{ width: 1, height: 12, backgroundColor: "rgba(80,160,145,0.25)" }} />

            {/* Política de privacidad */}
            <button
              onClick={onPrivacy}
              style={{
                fontFamily: FONT_SANS, fontSize: "0.75rem",
                color: TEXT_DIM, background: "none", border: "none",
                cursor: "pointer", letterSpacing: "0.04em",
                transition: "color 0.2s", padding: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.color = TEXT_DIM; }}
            >
              {lang === "es" ? "Política de privacidad" : "Privacy policy"}
            </button>

            <div style={{ width: 1, height: 12, backgroundColor: "rgba(80,160,145,0.25)" }} />

            {/* Términos de uso (placeholder para futuro) */}
            <span style={{
              fontFamily: FONT_SANS, color: TEXT_DIM,
              fontSize: "0.75rem", letterSpacing: "0.04em",
              opacity: 0.7,
            }}>
              {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}
            </span>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BOTTOM BAR
        ══════════════════════════════════════════ */}
        <div
          className="relative px-6 md:px-12 py-4"
          style={{ borderTop: "1px solid rgba(80,160,145,0.07)" }}
        >
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}>
            <p style={{
              fontFamily: FONT_SANS, color: "rgba(220,210,195,0.2)",
              fontSize: "0.7rem", letterSpacing: "0.04em", margin: 0,
            }}>
              {t.rights}
            </p>

            {/* Ornamento central */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 1, backgroundColor: "rgba(201,169,110,0.25)" }} />
              <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z"
                  fill={GOLD} fillOpacity="0.45" />
              </svg>
              <div style={{ width: 20, height: 1, backgroundColor: "rgba(201,169,110,0.25)" }} />
            </div>

            <p style={{
              fontFamily: FONT_SANS, color: "rgba(220,210,195,0.18)",
              fontSize: "0.7rem", letterSpacing: "0.04em", margin: 0,
            }}>
              {lang === "es" ? "Diseñado con amor ✦" : "Designed with love ✦"}
            </p>
          </div>
        </div>

        {/* ── WhatsApp FAB — fijo en la esquina ── */}
        <a
          href={`https://api.whatsapp.com/send?phone=${WA_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full z-50 active:scale-95"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          aria-label="WhatsApp"
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.55)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.45)";
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </footer>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}









// export default function Footer({ lang, onPrivacy }) {
//   const t = T[lang].footer;
//   const nav = T[lang].nav;

//   const therapyLinks = [
//     lang === "es" ? "Sanación Energética" : "Energy Healing",
//     "Tapping EFT",
//     lang === "es" ? "Regresiones" : "Regressions",
//     "Mindfulness",
//     lang === "es" ? "Flores de Bach" : "Floral Therapy",
//   ];

//   const navLinks = [
//     ["inicio", nav.inicio],
//     ["sobre", nav.sobre],
//     ["terapias", nav.terapias],
//     ["testimonios", nav.testimonios],
//     ["contacto", nav.contacto],
//   ];

//   const colLabel = (text) => (
//     <p style={{
//       fontFamily: "'Quicksand', sans-serif",
//       color: THEME.gold,
//       fontSize: "0.68rem",
//       letterSpacing: "0.22em",
//       textTransform: "uppercase",
//       marginBottom: "1.2rem",
//       opacity: 0.7,
//     }}>
//       {text}
//     </p>
//   );

//   const ghostLink = { fontFamily: "'Quicksand', sans-serif", color: "rgba(245,240,234,0.5)", fontSize: "0.84rem", display: "block", marginBottom: "0.75rem", textAlign: "left" };

//   return (
//     <>
//       {/* ── Wave SVG divider ── */}
//       <div style={{ lineHeight: 0, backgroundColor: `${THEME.sage}0A` }}>
//         <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
//           <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#1E1B17" />
//         </svg>
//       </div>

//       <footer className="relative overflow-hidden" style={{ backgroundColor: "#1E1B17" }}>

//         {/* ── Decoraciones ── */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Pluma izquierda con screen sobre oscuro */}
//           <Feather
//             blendMode="screen"
//             filter="brightness(1.3) saturate(0.6)"
//             style={{
//               top: "-10%", left: "-5%",
//               width: "min(380px, 45vw)",
//               opacity: 0.12,
//               transform: "rotate(-15deg)",
//             }}
//           />
//           {/* Pluma derecha pequeña */}
//           <Feather
//             blendMode="screen"
//             filter="brightness(1.4) saturate(0.5) hue-rotate(180deg)"
//             style={{
//               bottom: "5%", right: "3%",
//               width: "min(240px, 28vw)",
//               opacity: 0.09,
//               transform: "rotate(20deg) scaleX(-1)",
//             }}
//           />
//           {/* Anillos de fondo */}
//           {[500, 700].map((size) => (
//             <div key={size} style={{
//               position: "absolute",
//               top: "50%", left: "50%",
//               transform: "translate(-50%, -50%)",
//               width: size, height: size,
//               borderRadius: "50%",
//               border: `1px solid rgba(201,169,110,0.05)`,
//               pointerEvents: "none",
//             }} />
//           ))}
//         </div>

//         {/* ── CTA banner superior ── */}
//         <div
//           className="relative text-center py-16 px-6"
//           style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
//         >
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <div style={{ width: 40, height: 1, backgroundColor: THEME.gold, opacity: 0.4 }} />
//             <StarDeco />
//             <div style={{ width: 40, height: 1, backgroundColor: THEME.gold, opacity: 0.4 }} />
//           </div>

//           <h2 style={{
//             fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//             color: "#F5F0EA",
//             fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//             fontWeight: 300,
//             fontStyle: "italic",
//             letterSpacing: "0.02em",
//             marginBottom: "1rem",
//             lineHeight: 1.3,
//           }}>
//             {t.ctaTitle}
//           </h2>

//           <p style={{
//             fontFamily: "'Quicksand', sans-serif",
//             color: "rgba(245,240,234,0.45)",
//             fontSize: "0.92rem",
//             marginBottom: "2rem",
//             letterSpacing: "0.03em",
//           }}>
//             {t.ctaSubtitle}
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               onClick={() => scrollTo("sesiones")}
//               style={{
//                 backgroundColor: THEME.sage,
//                 color: "#fff",
//                 fontFamily: "'Quicksand', sans-serif",
//                 fontSize: "0.88rem",
//                 fontWeight: 600,
//                 padding: "0.7rem 2rem",
//                 borderRadius: 9999,
//                 letterSpacing: "0.04em",
//                 boxShadow: `0 4px 24px ${THEME.sage}50`,
//                 cursor: "pointer",
//               }}
//               className="transition-all hover:opacity-90"
//             >
//               {nav.reservar}
//             </button>
//             <a
//               href="https://www.instagram.com/magalisol.cerezo"
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 border: `1px solid rgba(201,169,110,0.35)`,
//                 color: THEME.gold,
//                 fontFamily: "'Quicksand', sans-serif",
//                 fontSize: "0.88rem",
//                 fontWeight: 600,
//                 padding: "0.7rem 2rem",
//                 borderRadius: 9999,
//                 letterSpacing: "0.04em",
//                 textDecoration: "none",
//                 display: "inline-block",
//               }}
//               className="transition-all hover:opacity-80"
//             >
//               Instagram ✦
//             </a>
//           </div>
//         </div>

//         {/* ── Links grid ── */}
//         <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-14">
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

//             {/* Marca */}
//             <div className="sm:col-span-2 md:col-span-1">
//               {/*
//                 ↓ LOGO FOOTER — versión clara. reemplazar src con "/assets/logo-light.png"
//                 Si no existe versión clara, el fallback tipográfico se muestra automáticamente.
//               */}
//               <img
//                 src="/assets/logo-light.png"
//                 alt="Magalí Sol Cerezo"
//                 style={{ height: 36, width: "auto", objectFit: "contain", marginBottom: "1rem" }}
//                 onError={(e) => { e.target.style.display = "none"; }}
//               />
//               <p style={{
//                 fontFamily: "'Cormorant Garamond', serif",
//                 color: "#F5F0EA",
//                 fontSize: "1.05rem",
//                 fontStyle: "italic",
//                 marginBottom: "0.5rem",
//                 letterSpacing: "0.04em",
//               }}>
//                 Magalí Sol Cerezo
//               </p>
//               <p style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: "rgba(245,240,234,0.35)",
//                 fontSize: "0.78rem",
//                 lineHeight: 1.7,
//               }}>
//                 {t.tagline}
//               </p>
//             </div>

//             {/* Navegación */}
//             <div>
//               {colLabel(t.navLabel)}
//               {navLinks.map(([id, label]) => (
//                 <button key={id} onClick={() => scrollTo(id)} style={ghostLink}>
//                   {label}
//                 </button>
//               ))}
//             </div>

//             {/* Terapias */}
//             <div>
//               {colLabel(t.therapiesLabel)}
//               {therapyLinks.map((item) => (
//                 <button key={item} onClick={() => scrollTo("terapias")} style={ghostLink}>
//                   {item}
//                 </button>
//               ))}
//             </div>

//             {/* Contacto */}
//             <div>
//               {colLabel(t.contactLabel)}
//               <a
//                 href="https://www.instagram.com/magalisol.cerezo"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 mb-4"
//                 style={{ textDecoration: "none" }}
//               >
//                 <span style={{ color: THEME.gold, fontSize: "0.78rem" }}>✦</span>
//                 <span style={{ fontFamily: "'Quicksand', sans-serif", color: "rgba(245,240,234,0.5)", fontSize: "0.84rem" }}>
//                   {t.instagram}
//                 </span>
//               </a>
//               <div className="flex items-start gap-2 mb-4">
//                 <span style={{ color: THEME.rose, fontSize: "0.78rem", marginTop: 2 }}>◯</span>
//                 <span style={{ fontFamily: "'Quicksand', sans-serif", color: "rgba(245,240,234,0.5)", fontSize: "0.84rem", lineHeight: 1.5 }}>
//                   mscerezopsicoholistica<br />@gmail.com
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span style={{ color: THEME.sage, fontSize: "0.78rem" }}>◇</span>
//                 <span style={{ fontFamily: "'Quicksand', sans-serif", color: "rgba(245,240,234,0.5)", fontSize: "0.84rem" }}>
//                   {t.onlineLabel}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="relative px-6 md:px-12 py-5"
//           style={{ borderTop: "1px solid rgba(245,240,234,0.07)" }}
//         >
//           <div style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "0.75rem",
//           }}>
//             {/* Fila superior: copyright | ornamento | privacidad */}
//             <div style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexWrap: "wrap",
//               gap: "1.25rem",
//               width: "100%",
//             }}>
//               <p style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: "rgba(245,240,234,0.22)",
//                 fontSize: "0.72rem",
//                 letterSpacing: "0.04em",
//                 margin: 0,
//               }}>
//                 {T[lang].footer.rights}
//               </p>

//               {/* Ornamento central */}
//               <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//                 <div style={{ width: 16, height: 1, backgroundColor: "rgba(201,169,110,0.3)" }} />
//                 <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
//                   <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z"
//                     fill="#C9A96E" fillOpacity="0.5" />
//                 </svg>
//                 <div style={{ width: 16, height: 1, backgroundColor: "rgba(201,169,110,0.3)" }} />
//               </div>

//               {/* Link política de privacidad */}
//               <button
//                 onClick={onPrivacy}
//                 style={{
//                   fontFamily: "'Quicksand', sans-serif",
//                   fontSize: "0.72rem",
//                   color: "rgba(245,240,234,0.35)",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   letterSpacing: "0.04em",
//                   padding: 0,
//                   transition: "color 0.2s",
//                   textDecoration: "none",
//                 }}
//                 onMouseEnter={e => { e.currentTarget.style.color = "rgba(201,169,110,0.8)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,240,234,0.35)"; }}
//               >
//                 {lang === "es" ? "Política de privacidad" : "Privacy policy"}
//               </button>
//             </div>

//             {/* Fila inferior: "Diseñado con amor" */}
//             <p style={{
//               fontFamily: "'Quicksand', sans-serif",
//               color: "rgba(245,240,234,0.18)",
//               fontSize: "0.68rem",
//               letterSpacing: "0.04em",
//               margin: 0,
//             }}>
//               {lang === "es" ? "Diseñado con amor ✦" : "Designed with love ✦"}
//             </p>
//           </div>
//         </div>

//         {/* ── WhatsApp FAB — fijo en pantalla ── */}
//         <a
//           href={`https://api.whatsapp.com/send?phone=${WA_NUMBER}`}
//           target="_blank"
//           rel="noreferrer"
//           className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full z-50 transition-transform hover:scale-110 active:scale-95"
//           style={{ backgroundColor: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
//           aria-label="WhatsApp"
//         >
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//           </svg>
//         </a>
//       </footer>
//     </>
//   );
// }
