// import { THEME } from "../constants";

// // ============================================================
// //  HeroSection.jsx
// //  Wrapper acuarela unificado — contiene Hero + QuickCards + SobreMi
// //
// //  DECORACIONES que viven acá (una sola vez para toda la zona):
// //    · Fondo acuarela: 5 radial-gradients superpuestos
// //    · Plumas doradas: plumas1.png con filter sepia→dorado
// //    · Pluma SVG line-art: trazo fino ornamental
// //    · Lunas SVG doradas line-art
// //    · Estrellas de 4 puntas doradas
// //
// //  IMPORTANTE: Hero, QuickCards y SobreMi deben tener
// //  background: "transparent" para que este fondo se vea.
// // ============================================================

// // ─── Pluma SVG ornamental — trazo fino dorado ────────────────
// function FeatherLineSVG({ style = {}, size = 180, opacity = 0.45 }) {
//     return (
//         <svg
//             width={size}
//             height={size * 2.2}
//             viewBox="0 0 100 220"
//             fill="none"
//             style={{
//                 position: "absolute",
//                 pointerEvents: "none",
//                 userSelect: "none",
//                 opacity,
//                 ...style,
//             }}
//             aria-hidden="true"
//         >
//             {/* Cañón central */}
//             <path
//                 d="M50 210 Q52 160 54 100 Q56 50 58 10"
//                 stroke={THEME.gold}
//                 strokeWidth="0.8"
//                 fill="none"
//                 strokeOpacity="0.7"
//             />
//             {/* Barbas izquierda */}
//             {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map(
//                 (y, i) => (
//                     <path
//                         key={`l${i}`}
//                         d={`M${53 - i * 0.3} ${y} Q${38 - i * 1.2} ${y - 4} ${22 - i * 1.8
//                             } ${y + 2}`}
//                         stroke={THEME.gold}
//                         strokeWidth="0.5"
//                         fill="none"
//                         strokeOpacity={Math.max(0.15, 0.6 - i * 0.025)}
//                     />
//                 )
//             )}
//             {/* Barbas derecha */}
//             {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map(
//                 (y, i) => (
//                     <path
//                         key={`r${i}`}
//                         d={`M${55 + i * 0.3} ${y} Q${68 + i * 1.0} ${y - 3} ${80 + i * 1.5
//                             } ${y + 3}`}
//                         stroke={THEME.gold}
//                         strokeWidth="0.5"
//                         fill="none"
//                         strokeOpacity={Math.max(0.12, 0.55 - i * 0.025)}
//                     />
//                 )
//             )}
//             {/* Punta */}
//             <path
//                 d="M58 10 Q60 4 54 2 Q52 8 58 10Z"
//                 fill={THEME.gold}
//                 fillOpacity="0.5"
//             />
//         </svg>
//     );
// }

// // ─── Luna SVG line-art dorada ─────────────────────────────────
// function MoonSVG({ style = {}, size = 60 }) {
//     return (
//         <svg
//             width={size}
//             height={size}
//             viewBox="0 0 60 60"
//             fill="none"
//             style={{ position: "absolute", pointerEvents: "none", ...style }}
//             aria-hidden="true"
//         >
//             {/* Luna creciente */}
//             <path
//                 d="M42 30A18 18 0 0 1 24 12a18 18 0 1 0 18 18z"
//                 stroke={THEME.gold}
//                 strokeWidth="0.8"
//                 fill="none"
//                 strokeOpacity="0.55"
//             />
//             {/* Estrellita junto a la luna */}
//             <path
//                 d="M46 14 L47 17 L50 18 L47 19 L46 22 L45 19 L42 18 L45 17Z"
//                 fill={THEME.gold}
//                 fillOpacity="0.5"
//             />
//             <circle cx="38" cy="8" r="0.8" fill={THEME.gold} fillOpacity="0.4" />
//             <circle cx="52" cy="22" r="0.8" fill={THEME.gold} fillOpacity="0.4" />
//         </svg>
//     );
// }

// // ─── Estrella de 4 puntas dorada ──────────────────────────────
// function StarGold({ style = {}, size = 12 }) {
//     return (
//         <svg
//             width={size}
//             height={size}
//             viewBox="0 0 12 12"
//             fill="none"
//             style={{ position: "absolute", pointerEvents: "none", ...style }}
//             aria-hidden="true"
//         >
//             <path
//                 d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
//                 fill={THEME.gold}
//                 fillOpacity="0.55"
//             />
//         </svg>
//     );
// }

// // ─── WRAPPER PRINCIPAL ────────────────────────────────────────
// export default function HeroSection({ children }) {
//     return (
//         <section
//             className="relative overflow-hidden"
//             style={{
//                 // ── Fondo acuarela — 5 capas superpuestas ──────────────
//                 background: [
//                     // mancha verde agua principal — superior izquierda
//                     "radial-gradient(ellipse 65% 55% at 8% 22%, rgba(168,210,190,0.30) 0%, transparent 65%)",
//                     // lavado verde difuso — centro superior
//                     "radial-gradient(ellipse 75% 45% at 52% 8%,  rgba(185,215,200,0.18) 0%, transparent 60%)",
//                     // mancha verde suave — izquierda media
//                     "radial-gradient(ellipse 50% 55% at 12% 58%, rgba(155,195,172,0.16) 0%, transparent 62%)",
//                     // toque rosa muy sutil — inferior derecha
//                     "radial-gradient(ellipse 45% 38% at 88% 82%, rgba(196,150,138,0.07) 0%, transparent 55%)",
//                     // base crema cálida
//                     "linear-gradient(165deg, #F1F6F3 0%, #FCFBFA 50%, #FAF7F5 100%)",
//                 ].join(", "),
//             }}
//         >
//             {/* ── PLUMAS DORADAS ─────────────────────────────────────
//           plumas1.png tiene fondo negro.
//           mix-blend-mode: multiply lo elimina.
//           filter sepia+saturate+hue convierte crema → dorado.
//       ─────────────────────────────────────────────────────── */}

//             {/* Pluma grande — superior izquierda */}
//             <img
//                 src="/assets/plumas1.png"
//                 alt=""
//                 aria-hidden="true"
//                 style={{
//                     position: "absolute",
//                     top: "-2%",
//                     left: "-4%",
//                     width: "clamp(160px, 20vw, 300px)",
//                     opacity: 0.68,
//                     mixBlendMode: "multiply",
//                     transform: "rotate(-10deg)",
//                     objectFit: "contain",
//                     pointerEvents: "none",
//                     userSelect: "none",
//                     // 🔑 Convierte la pluma crema en dorada
//                     filter: "sepia(1) saturate(2.5) hue-rotate(5deg) brightness(0.86)",
//                 }}
//                 onError={(e) => { e.target.style.display = "none"; }}
//             />

//             {/* Pluma mediana — superior derecha */}
//             <img
//                 src="/assets/plumas1.png"
//                 alt=""
//                 aria-hidden="true"
//                 style={{
//                     position: "absolute",
//                     top: "-3%",
//                     right: "-2%",
//                     width: "clamp(130px, 16vw, 240px)",
//                     opacity: 0.52,
//                     mixBlendMode: "multiply",
//                     transform: "rotate(14deg) scaleX(-1)",
//                     objectFit: "contain",
//                     pointerEvents: "none",
//                     userSelect: "none",
//                     filter: "sepia(1) saturate(2.2) hue-rotate(8deg) brightness(0.9)",
//                 }}
//                 onError={(e) => { e.target.style.display = "none"; }}
//             />

//             {/* Pluma inferior derecha — zona SobreMi */}
//             <img
//                 src="/assets/plumas1.png"
//                 alt=""
//                 aria-hidden="true"
//                 style={{
//                     position: "absolute",
//                     bottom: "2%",
//                     right: "4%",
//                     width: "clamp(110px, 14vw, 200px)",
//                     opacity: 0.38,
//                     mixBlendMode: "multiply",
//                     transform: "rotate(-16deg) scaleX(-1)",
//                     objectFit: "contain",
//                     pointerEvents: "none",
//                     userSelect: "none",
//                     filter: "sepia(1) saturate(2.0) hue-rotate(6deg) brightness(0.88)",
//                 }}
//                 onError={(e) => { e.target.style.display = "none"; }}
//             />

//             {/* ── PLUMAS SVG LINE-ART — trazo fino ornamental ───────── */}
//             {/* Lateral izquierdo — zona QuickCards/SobreMi */}
//             <FeatherLineSVG
//                 size={80}
//                 opacity={0.32}
//                 style={{ top: "52%", left: "2%", transform: "rotate(-8deg)" }}
//             />
//             {/* Lateral derecho — zona Hero */}
//             <FeatherLineSVG
//                 size={65}
//                 opacity={0.28}
//                 style={{ top: "10%", right: "2%", transform: "rotate(10deg) scaleX(-1)" }}
//             />

//             {/* ── LUNAS DORADAS ─────────────────────────────────────── */}
//             <MoonSVG size={70} style={{ top: "5%", right: "11%", opacity: 0.65 }} />
//             <MoonSVG size={48} style={{ top: "40%", left: "5%", opacity: 0.42, transform: "scaleX(-1)" }} />
//             <MoonSVG size={38} style={{ bottom: "14%", right: "7%", opacity: 0.36 }} />
//             <MoonSVG size={32} style={{ bottom: "32%", left: "8%", opacity: 0.28, transform: "rotate(30deg)" }} />

//             {/* ── ESTRELLAS ─────────────────────────────────────────── */}
//             <StarGold size={10} style={{ top: "11%", left: "20%", opacity: 0.6 }} />
//             <StarGold size={14} style={{ top: "7%", right: "26%", opacity: 0.52 }} />
//             <StarGold size={8} style={{ top: "26%", left: "7%", opacity: 0.42 }} />
//             <StarGold size={12} style={{ top: "33%", right: "4%", opacity: 0.38 }} />
//             <StarGold size={9} style={{ top: "48%", left: "16%", opacity: 0.32 }} />
//             <StarGold size={11} style={{ top: "58%", right: "14%", opacity: 0.38 }} />
//             <StarGold size={8} style={{ bottom: "26%", right: "19%", opacity: 0.38 }} />
//             <StarGold size={13} style={{ bottom: "11%", left: "14%", opacity: 0.42 }} />
//             <StarGold size={8} style={{ bottom: "18%", right: "40%", opacity: 0.32 }} />
//             <StarGold size={10} style={{ top: "72%", left: "30%", opacity: 0.28 }} />

//             {/* ── Blob verde extra — refuerza la mancha acuarela ────── */}
//             <div
//                 className="absolute pointer-events-none"
//                 style={{
//                     top: "15%",
//                     left: "0",
//                     width: "30%",
//                     height: "40%",
//                     background:
//                         "radial-gradient(circle at top left, rgba(168,205,185,0.22), transparent 70%)",
//                     filter: "blur(22px)",
//                 }}
//             />

//             {/* ── Slot para los componentes hijo ─────────────────────── */}
//             <div className="relative z-10">
//                 {children}
//             </div>

//             <div className="absolute inset-0 pointer-events-none">
//                 <img
//                     src="/assets/rama-top-left.png"
//                     className="absolute"
//                     style={{
//                         top: "3%",
//                         left: "-2%",
//                         width: "280px",
//                         opacity: 0.18,
//                     }}
//                 />

//                 <img
//                     src="/assets/rama-top-right.png"
//                     className="absolute"
//                     style={{
//                         top: "8%",
//                         right: "-2%",
//                         width: "220px",
//                         opacity: 0.16,
//                     }}
//                 />

//                 <img
//                     src="/assets/rama-bottom-left.png"
//                     className="absolute"
//                     style={{
//                         bottom: "12%",
//                         left: "-2%",
//                         width: "240px",
//                         opacity: 0.15,
//                     }}
//                 />

//                 <img
//                     src="/assets/rama-bottom-right.png"
//                     className="absolute"
//                     style={{
//                         bottom: "5%",
//                         right: "-2%",
//                         width: "260px",
//                         opacity: 0.15,
//                     }}
//                 />


//             </div>

//         </section>
//     );
// }

import { THEME } from "../constants";

function MoonSVG({ style = {}, size = 60 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 60 60"
            fill="none"
            style={{ position: "absolute", pointerEvents: "none", ...style }}
        >
            <path
                d="M42 30A18 18 0 0 1 24 12a18 18 0 1 0 18 18z"
                stroke={THEME.gold}
                strokeWidth="1"
                strokeOpacity="0.5"
            />
        </svg>
    );
}

function StarGold({ style = {}, size = 10 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            style={{ position: "absolute", pointerEvents: "none", ...style }}
        >
            <path
                d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
                fill={THEME.gold}
                fillOpacity="0.5"
            />
        </svg>
    );
}

export default function HeroSection({ children }) {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: [
                    "radial-gradient(circle at 8% 15%, rgba(170,210,190,.42), transparent 45%)",
                    "radial-gradient(circle at 22% 45%, rgba(170,210,190,.22), transparent 40%)",
                    "radial-gradient(circle at 80% 80%, rgba(205,170,160,.08), transparent 35%)",
                    "linear-gradient(180deg,#f5faf7 0%,#fcfbfa 45%,#faf8f6 100%)",
                ].join(","),
            }}
        >
            {/* MARCO IZQUIERDO */}
            <img
                src="/assets/rama-left.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    left: 0,
                    top: "3%",
                    height: "94%",
                    width: "auto",
                    opacity: 0.18,
                    objectFit: "contain",
                    pointerEvents: "none",
                }}
            />

            {/* MARCO DERECHO */}
            <img
                src="/assets/rama-right.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: 0,
                    top: "3%",
                    height: "94%",
                    width: "auto",
                    opacity: 0.18,
                    objectFit: "contain",
                    pointerEvents: "none",
                }}
            />

            {/* RAMA SUPERIOR */}
            <img
                src="/assets/rama-top.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    width: "280px",
                    opacity: 0.12,
                    pointerEvents: "none",
                }}
            />

            {/* RAMA INFERIOR */}
            <img
                src="/assets/rama-bottom.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: "10%",
                    width: "260px",
                    opacity: 0.12,
                    pointerEvents: "none",
                }}
            />

            {/* LINEA HERO -> CARDS */}
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "15%",
                    width: "70%",
                    height: "1px",
                    background:
                        "linear-gradient(to right, transparent, rgba(201,169,110,.35), transparent)",
                }}
            />

            {/* LINEA CARDS -> SOBRE MI */}
            <div
                style={{
                    position: "absolute",
                    top: "68%",
                    left: "15%",
                    width: "70%",
                    height: "1px",
                    background:
                        "linear-gradient(to right, transparent, rgba(201,169,110,.25), transparent)",
                }}
            />

            {/* LUNAS */}
            <MoonSVG
                size={70}
                style={{
                    top: "4%",
                    right: "10%",
                }}
            />

            <MoonSVG
                size={40}
                style={{
                    bottom: "15%",
                    left: "10%",
                    transform: "scaleX(-1)",
                    opacity: 0.4,
                }}
            />

            {/* ESTRELLAS */}
            <StarGold
                size={10}
                style={{
                    top: "10%",
                    left: "20%",
                }}
            />

            <StarGold
                size={12}
                style={{
                    top: "55%",
                    right: "15%",
                }}
            />

            <StarGold
                size={8}
                style={{
                    bottom: "20%",
                    left: "25%",
                }}
            />

            {/* ACUARELA EXTRA */}
            <div
                style={{
                    position: "absolute",
                    left: "-10%",
                    top: "10%",
                    width: "45%",
                    height: "45%",
                    borderRadius: "999px",
                    background:
                        "radial-gradient(circle, rgba(160,205,185,.25), transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}