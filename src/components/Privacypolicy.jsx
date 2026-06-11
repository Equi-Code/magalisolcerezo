// import { T, THEME } from "../constants";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import {
//   StarDeco,
//   MoonDeco,
//   CircleDeco
// } from "./ui";

// const FONT = {
//   serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
//   sans: "'Quicksand', 'Nunito', system-ui, sans-serif",
// };

// // ─── Separador ornamental ─────────────────────────────────
// const Divider = () => (
//   <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2.25rem 0 1.75rem" }}>
//     <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}45)` }} />
//     <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
//       <path d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3Z"
//         fill={THEME.gold} fillOpacity="0.55" />
//     </svg>
//     <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}45)` }} />
//   </div>
// );

// // ─── Párrafo ──────────────────────────────────────────────
// const P = ({ children }) => (
//   <p style={{
//     fontFamily: FONT.sans,
//     fontSize: "0.94rem",
//     lineHeight: 1.88,
//     color: THEME.textMuted,
//     marginBottom: "1rem",
//     marginTop: 0,
//   }}>
//     {children}
//   </p>
// );

// // ─── Lista con ✦ ─────────────────────────────────────────
// const Ul = ({ items, card = false }) => {
//   const inner = (
//     <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
//       {items.map((item, i) => (
//         <li key={i} style={{
//           display: "flex",
//           gap: "0.6rem",
//           alignItems: "flex-start",
//           marginBottom: "0.55rem",
//           fontFamily: FONT.sans,
//           fontSize: "0.92rem",
//           lineHeight: 1.75,
//           color: THEME.textMuted,
//         }}>
//           <span style={{ color: THEME.gold, flexShrink: 0, marginTop: "0.28rem", fontSize: "0.58rem" }}>✦</span>
//           {item}
//         </li>
//       ))}
//     </ul>
//   );

//   if (!card) return <div style={{ marginBottom: "1rem" }}>{inner}</div>;

//   return (
//     <div style={{
//       backgroundColor: THEME.bgSage,
//       borderRadius: "1rem",
//       padding: "1.2rem 1.5rem",
//       border: `1px solid rgba(138,158,138,0.2)`,
//       marginBottom: "1rem",
//     }}>
//       {inner}
//     </div>
//   );
// };

// // ─── Artículo ────────────────────────────────────────────
// const Article = ({ article }) => (
//   <div>
//     <Divider />
//     <h2 style={{
//       fontFamily: FONT.serif,
//       fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
//       fontWeight: 400,
//       fontStyle: "italic",
//       color: THEME.text,
//       marginBottom: "1rem",
//       marginTop: 0,
//       display: "flex",
//       alignItems: "baseline",
//       gap: "0.55rem",
//     }}>
//       <span style={{ color: THEME.gold, fontStyle: "normal", fontSize: "0.88em", fontFamily: FONT.sans, fontWeight: 500 }}>
//         {article.number}.
//       </span>
//       {article.title}
//     </h2>

//     {article.paragraphs?.map((p, i) => <P key={i}>{p}</P>)}

//     {article.list?.length > 0 && (
//       <Ul items={article.list} card={!!article.cardList} />
//     )}

//     {article.paragraphsAfter?.map((p, i) => <P key={i}>{p}</P>)}

//     {article.blockquote && (
//       <div style={{
//         borderLeft: `3px solid ${THEME.gold}55`,
//         paddingLeft: "1.25rem",
//         marginTop: "0.5rem",
//         marginBottom: "0.5rem",
//         fontFamily: FONT.serif,
//         fontStyle: "italic",
//         fontSize: "1rem",
//         color: THEME.text,
//         opacity: 0.82,
//         lineHeight: 1.7,
//       }}>
//         {article.blockquote}
//       </div>
//     )}
//   </div>
// );

// // ══════════════════════════════════════════════════════════
// //  COMPONENTE PRINCIPAL
// // ══════════════════════════════════════════════════════════
// export default function PrivacyPolicy({ lang = "es", setLang, onBack }) {
//   const c = T[lang]?.privacy || T.es.privacy;

//   return (
//     <div style={{
//       backgroundColor: "transparent", minHeight: "100vh", position: "relative",
//       overflow: "hidden"
//     }}>

//       {/* Capa de Fondos Astrales */}
//       <div
//         className="absolute inset-0 pointer-events-none overflow-hidden"
//         style={{ zIndex: 1 }}
//       >
//         <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-15" />
//         <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-10" />

//         <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3 opacity-30" />
//         <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
//         <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />

//         <MoonDeco className="absolute bottom-1/4 left-1/3" />
//       </div>

//       {/* Imagen decorativa Plumas */}
//       <img
//         src="/assets/plumas1.png"
//         alt=""
//         aria-hidden="true"
//         style={{
//           position: "absolute",
//           top: "2%",
//           right: "-5%",
//           width: "min(420px, 38vw)",
//           opacity: 0.16,
//           transform: "rotate(8deg)",
//           filter: "sepia(30%) saturate(70%)",
//           pointerEvents: "none",
//           zIndex: 1,
//         }}
//       />

//       {/* Navbar con enrutamiento suave integrado */}
//       <Navbar
//         lang={lang}
//         setLang={setLang}
//         onNavigate={(section) => {
//           onBack();
//           setTimeout(() => {
//             document
//               .getElementById(section)
//               ?.scrollIntoView({ behavior: "smooth" });
//           }, 200);
//         }}
//       />

//       {/* Contenido principal */}
//       <main
//         style={{
//           position: "relative",
//           zIndex: 2,
//           maxWidth: "52rem",
//           margin: "0 auto",
//           padding: "10rem 1.5rem 5rem"
//         }}
//       >
//         {/* Hero de la página */}
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <div style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: 10,
//             marginBottom: "1rem",
//           }}>
//             <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
//             <span style={{
//               fontFamily: FONT.sans,
//               fontSize: "0.7rem",
//               letterSpacing: "0.22em",
//               textTransform: "uppercase",
//               fontWeight: 600,
//               color: THEME.gold,
//             }}>
//               {c.tag}
//             </span>
//             <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
//           </div>

//           <h1 style={{
//             fontFamily: FONT.serif,
//             fontSize: "clamp(2rem, 5vw, 3.2rem)",
//             fontWeight: 400,
//             fontStyle: "italic",
//             lineHeight: 1.2,
//             color: THEME.text,
//             marginBottom: "0.75rem",
//           }}>
//             {c.title}
//           </h1>

//           <p style={{
//             fontFamily: FONT.sans,
//             fontSize: "0.82rem",
//             color: THEME.textMuted,
//             letterSpacing: "0.04em",
//             opacity: 0.75,
//           }}>
//             {c.updatedLabel} {c.lastUpdated}
//           </p>
//         </div>

//         {/* Card contenedora de las políticas */}
//         <div style={{
//           backgroundColor: THEME.card,
//           borderRadius: "1.5rem",
//           border: `1px solid ${THEME.border}`,
//           padding: "clamp(1.5rem, 4vw, 3rem)",
//           boxShadow: `0 4px 32px rgba(45,41,36,0.05)`,
//         }}>
//           {/* Intro */}
//           {c.intro.map((p, i) => <P key={i}>{p}</P>)}

//           {/* Artículos */}
//           {c.articles.map((article, i) => (
//             <Article key={i} article={article} />
//           ))}

//           {/* Cierre */}
//           <Divider />
//           <p style={{
//             fontFamily: FONT.serif,
//             fontSize: "1.1rem",
//             fontStyle: "italic",
//             color: THEME.textMuted,
//             textAlign: "center",
//             marginTop: "1rem",
//             marginBottom: "0.5rem",
//           }}>
//             {c.closingQuote}
//           </p>
//           <p style={{
//             fontFamily: FONT.sans,
//             fontSize: "0.75rem",
//             color: THEME.textMuted,
//             textAlign: "center",
//             opacity: 0.5,
//             margin: 0,
//           }}>
//             — Magalí Sol Cerezo ✦
//           </p>
//         </div>

//         {/* Botón volver */}
//         <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
//           <button
//             onClick={onBack}
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "0.5rem",
//               padding: "0.75rem 2rem",
//               borderRadius: "9999px",
//               border: "none",
//               backgroundColor: THEME.sage,
//               color: "#fff",
//               fontFamily: FONT.sans,
//               fontSize: "0.88rem",
//               fontWeight: 600,
//               cursor: "pointer",
//               boxShadow: `0 5px 22px rgba(138,158,138,0.35)`,
//               transition: "all 0.25s",
//               letterSpacing: "0.03em",
//             }}
//             onMouseEnter={e => {
//               e.currentTarget.style.transform = "translateY(-2px)";
//               e.currentTarget.style.boxShadow = `0 10px 32px rgba(138,158,138,0.45)`;
//             }}
//             onMouseLeave={e => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = `0 5px 22px rgba(138,158,138,0.35)`;
//             }}
//           >
//             {c.backBtn}
//           </button>
//         </div>
//       </main>

//       {/* Footer dinámico integrado y limpio */}
//       <Footer
//         lang={lang}
//         onPrivacy={onBack}
//         onNavigate={(section) => {
//           onBack();
//           setTimeout(() => {
//             document.getElementById(section)?.scrollIntoView({
//               behavior: "smooth",
//             });
//           }, 200);
//         }}
//       />
//     </div>
//   );
// }

import { T, THEME } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  StarDeco,
  MoonDeco,
  CircleDeco
} from "./ui";

const FONT = {
  serif: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
  sans: "'Quicksand', 'Nunito', system-ui, sans-serif",
};

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2.25rem 0 1.75rem" }}>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}45)` }} />
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M5 0L5.7 4.3L10 5L5.7 5.7L5 10L4.3 5.7L0 5L4.3 4.3Z"
        fill={THEME.gold} fillOpacity="0.55" />
    </svg>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}45)` }} />
  </div>
);

const P = ({ children }) => (
  <p style={{
    fontFamily: FONT.sans,
    fontSize: "0.94rem",
    lineHeight: 1.88,
    color: THEME.textMuted,
    marginBottom: "1rem",
    marginTop: 0,
  }}>
    {children}
  </p>
);

const Ul = ({ items, card = false }) => {
  const inner = (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <li key={i} style={{
          display: "flex",
          gap: "0.6rem",
          alignItems: "flex-start",
          marginBottom: "0.55rem",
          fontFamily: FONT.sans,
          fontSize: "0.92rem",
          lineHeight: 1.75,
          color: THEME.textMuted,
        }}>
          <span style={{ color: THEME.gold, flexShrink: 0, marginTop: "0.28rem", fontSize: "0.58rem" }}>✦</span>
          {item}
        </li>
      ))}
    </ul>
  );

  if (!card) return <div style={{ marginBottom: "1rem" }}>{inner}</div>;

  return (
    <div style={{
      backgroundColor: THEME.bgSage,
      borderRadius: "1rem",
      padding: "1.2rem 1.5rem",
      border: `1px solid rgba(138,158,138,0.2)`,
      marginBottom: "1rem",
    }}>
      {inner}
    </div>
  );
};

const Article = ({ article }) => (
  <div>
    <Divider />
    <h2 style={{
      fontFamily: FONT.serif,
      fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
      fontWeight: 400,
      fontStyle: "italic",
      color: THEME.text,
      marginBottom: "1rem",
      marginTop: 0,
      display: "flex",
      alignItems: "baseline",
      gap: "0.55rem",
    }}>
      <span style={{ color: THEME.gold, fontStyle: "normal", fontSize: "0.88em", fontFamily: FONT.sans, fontWeight: 500 }}>
        {article.number}.
      </span>
      {article.title}
    </h2>

    {article.paragraphs?.map((p, i) => <P key={i}>{p}</P>)}

    {article.list?.length > 0 && (
      <Ul items={article.list} card={!!article.cardList} />
    )}

    {article.paragraphsAfter?.map((p, i) => <P key={i}>{p}</P>)}

    {article.blockquote && (
      <div style={{
        borderLeft: `3px solid ${THEME.gold}55`,
        paddingLeft: "1.25rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        fontFamily: FONT.serif,
        fontStyle: "italic",
        fontSize: "1rem",
        color: THEME.text,
        opacity: 0.82,
        lineHeight: 1.7,
      }}>
        {article.blockquote}
      </div>
    )}
  </div>
);

export default function PrivacyPolicy({ lang = "es", setLang, onBack }) {
  const c = T[lang]?.privacy || T.es.privacy;

  return (
    <div style={{
      backgroundColor: "transparent", 
      minHeight: "100vh", 
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Capa de Fondos Astrales */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-15" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-10" />

        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3 opacity-30" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />

        <MoonDeco className="absolute bottom-1/4 left-1/3" />
      </div>

      {/* ── PLUMA PRIVACIDAD 1: Superior Derecha Dinámica ── */}
      <img
        src="/assets/plumas1.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "4%",
          right: "-6%",
          width: "min(380px, 40vw)",
          opacity: 0.45, // Unificado con la estética de las plumas del home
          mixBlendMode: "multiply",
          transform: "rotate(8deg)",
          filter: "saturate(0.5) brightness(0.9)",
          pointerEvents: "none",
          zIndex: 1,
          animation: "floatPrivacy 9s ease-in-out infinite",
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      {/* ── PLUMA PRIVACIDAD 2: Inferior Izquierda Espejada ── */}
      <img
        src="/assets/plumas1.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "12%",
          left: "-6%",
          width: "min(300px, 32vw)",
          opacity: 0.35,
          mixBlendMode: "multiply",
          transform: "scaleX(-1) rotate(-15deg)", // Espejada horizontalmente
          filter: "saturate(0.4) brightness(0.92) hue-rotate(20deg)",
          pointerEvents: "none",
          zIndex: 1,
          animation: "floatPrivacy 7.5s ease-in-out infinite 0.5s", // Desfasada para naturalidad
        }}
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />

      {/* Navbar con enrutamiento suave integrado */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onNavigate={(section) => {
          onBack();
          setTimeout(() => {
            document
              .getElementById(section)
              .scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
      />

      {/* Contenido principal */}
      <main
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "10rem 1.5rem 5rem"
        }}
      >
        {/* Hero de la página */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: "1rem",
          }}>
            <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
            <span style={{
              fontFamily: FONT.sans,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: THEME.gold,
            }}>
              {c.tag}
            </span>
            <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
          </div>

          <h1 style={{
            fontFamily: FONT.serif,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.2,
            color: THEME.text,
            marginBottom: "0.75rem",
          }}>
            {c.title}
          </h1>

          <p style={{
            fontFamily: FONT.sans,
            fontSize: "0.82rem",
            color: THEME.textMuted,
            letterSpacing: "0.04em",
            opacity: 0.75,
          }}>
            {c.updatedLabel} {c.lastUpdated}
          </p>
        </div>

        {/* Card contenedora de las políticas */}
        <div style={{
          backgroundColor: THEME.card,
          borderRadius: "1.5rem",
          border: `1px solid ${THEME.border}`,
          padding: "clamp(1.5rem, 4vw, 3rem)",
          boxShadow: `0 4px 32px rgba(45,41,36,0.05)`,
        }}>
          {c.intro.map((p, i) => <P key={i}>{p}</P>)}

          {c.articles.map((article, i) => (
            <Article key={i} article={article} />
          ))}

          <Divider />
          <p style={{
            fontFamily: FONT.serif,
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: THEME.textMuted,
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}>
            {c.closingQuote}
          </p>
          <p style={{
            fontFamily: FONT.sans,
            fontSize: "0.75rem",
            color: THEME.textMuted,
            textAlign: "center",
            opacity: 0.5,
            margin: 0,
          }}>
            — Magalí Sol Cerezo ✦
          </p>
        </div>

        {/* Botón volver */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: THEME.sage,
              color: "#fff",
              fontFamily: FONT.sans,
              fontSize: "0.88rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: `0 5px 22px rgba(138,158,138,0.35)`,
              transition: "all 0.25s",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 10px 32px rgba(138,158,138,0.45)`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 5px 22px rgba(138,158,138,0.35)`;
            }}
          >
            {c.backBtn}
          </button>
        </div>
      </main>

      {/* Estilo local para animar la flotación de las plumas de privacidad */}
      <style>{`
        @keyframes floatPrivacy {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-7px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}