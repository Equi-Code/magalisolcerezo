import { THEME, T } from "../constants";
import { StarDeco, Feather, scrollTo } from "./ui";

// ↓ REEMPLAZAR con el número real de WhatsApp de Magalí (formato internacional sin +)
const WA_NUMBER = "5491100000000";



export default function Footer({ lang, onPrivacy }) {
  const t = T[lang].footer;
  const nav = T[lang].nav;
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* Wave divider between last section and footer */}
      <div style={{ lineHeight: 0, backgroundColor: `${THEME.sage}0A` }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#1E1B17"
          />
        </svg>
      </div>

      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1E1B17" }}
      >
        {/* Feather decorations inside footer — mix-blend-mode: screen over dark bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Pluma grande izquierda */}
          <img
            src="/assets/plumas1.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: "min(380px, 45vw)",
              opacity: 0.12,
              mixBlendMode: "screen",
              transform: "rotate(-15deg)",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
              filter: "brightness(1.3) saturate(0.6)",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          {/* Pluma derecha pequeña */}
          <img
            src="/assets/plumas1.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "5%",
              right: "3%",
              width: "min(240px, 28vw)",
              opacity: 0.09,
              mixBlendMode: "screen",
              transform: "rotate(20deg) scaleX(-1)",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
              filter: "brightness(1.4) saturate(0.5) hue-rotate(180deg)",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          {/* Círculo decorativo central */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: `1px solid rgba(201,169,110,0.06)`,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            border: `1px solid rgba(201,169,110,0.04)`,
            pointerEvents: "none",
          }} />
        </div>

        {/* Links grid */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="sm:col-span-2 md:col-span-1">
              {/* ↓ LOGO EN FOOTER — versión clara o usar texto fallback */}
              <img
                src="/assets/logo-light.png"
                alt="Magalí Sol Cerezo"
                className="h-9 w-auto object-contain mb-4"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#F5F0EA",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.04em",
                }}
              >
                Magalí Sol Cerezo
              </p>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "rgba(245,240,234,0.38)",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                  letterSpacing: "0.03em",
                }}
              >
                {t.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.gold,
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  opacity: 0.7,
                }}
              >
                {lang === "es" ? "Secciones" : "Sections"}
              </p>
              {[
                ["inicio", nav.inicio],
                ["sobre", nav.sobre],
                ["terapias", nav.terapias],
                ["testimonios", nav.testimonios],
                ["contacto", nav.contacto],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block mb-3 text-left transition-opacity hover:opacity-100"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "rgba(245,240,234,0.5)",
                    fontSize: "0.84rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Terapias quick links */}
            <div>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.gold,
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  opacity: 0.7,
                }}
              >
                {lang === "es" ? "Terapias" : "Therapies"}
              </p>
              {[
                lang === "es" ? "Sanación Energética" : "Energy Healing",
                lang === "es" ? "Tapping EFT" : "Tapping EFT",
                lang === "es" ? "Regresiones" : "Regressions",
                lang === "es" ? "Mindfulness" : "Mindfulness",
                lang === "es" ? "Flores de Bach" : "Floral Therapy",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo("terapias")}
                  className="block mb-3 text-left transition-opacity hover:opacity-100"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "rgba(245,240,234,0.5)",
                    fontSize: "0.84rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Contact info */}
            <div>
              <p
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.gold,
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "1.2rem",
                  opacity: 0.7,
                }}
              >
                {lang === "es" ? "Contacto" : "Contact"}
              </p>
              <a
                href="https://www.instagram.com/magalisol.cerezo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 mb-4 group"
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: THEME.gold, fontSize: "0.8rem" }}>✦</span>
                <span
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "rgba(245,240,234,0.55)",
                    fontSize: "0.84rem",
                  }}
                >
                  {t.instagram}
                </span>
              </a>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: THEME.rose, fontSize: "0.8rem" }}>◯</span>
                <span
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "rgba(245,240,234,0.55)",
                    fontSize: "0.84rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  mscerezopsicoholistica<br />@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: THEME.sage, fontSize: "0.8rem" }}>◇</span>
                <span
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    color: "rgba(245,240,234,0.55)",
                    fontSize: "0.84rem",
                  }}
                >
                  {lang === "es" ? "Sesiones 100% Online" : "100% Online Sessions"}
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
<div
  className="relative px-6 md:px-12 py-5"
  style={{
    borderTop: "1px solid rgba(245,240,234,0.07)",
  }}
>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <p
      style={{
        fontFamily: "'Quicksand', sans-serif",
        color: "rgba(245,240,234,0.2)",
        fontSize: "0.72rem",
        letterSpacing: "0.04em",
      }}
    >
      {t.rights}
    </p>

    <button
      onClick={onPrivacy}
      style={{
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "0.72rem",
        color: "rgba(245,240,234,0.35)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        letterSpacing: "0.04em",
        transition: "all .2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = THEME.gold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(245,240,234,0.35)";
      }}
    >
      {lang === "es"
        ? "Política de privacidad"
        : "Privacy Policy"}
    </button>

    <p
      style={{
        fontFamily: "'Quicksand', sans-serif",
        color: "rgba(245,240,234,0.18)",
        fontSize: "0.72rem",
        letterSpacing: "0.04em",
      }}
    >
      {lang === "es"
        ? "Diseñado con amor ✦"
        : "Designed with love ✦"}
    </p>
  </div>
</div>

        {/* WhatsApp FAB — siempre visible */}
        {/* ↓ REEMPLAZAR el número con el número real de WhatsApp de Magalí (sin +, con código país) */}
        <a
          href="https://api.whatsapp.com/send?phone=5491100000000"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full z-50 transition-transform hover:scale-110 active:scale-95"
          style={{
            backgroundColor: "#25D366",
            boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
          }}
          aria-label="WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </footer >
    </>
  );
};

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
