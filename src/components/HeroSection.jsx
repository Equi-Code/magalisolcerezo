import { THEME } from "../constants";
 
// ============================================================
//  HeroSection.jsx
//  Wrapper acuarela unificado — contiene Hero + QuickCards + SobreMi
//
//  DECORACIONES que viven acá (una sola vez para toda la zona):
//    · Fondo acuarela: 5 radial-gradients superpuestos
//    · Plumas doradas: plumas1.png con filter sepia→dorado
//    · Pluma SVG line-art: trazo fino ornamental
//    · Lunas SVG doradas line-art
//    · Estrellas de 4 puntas doradas
//
//  IMPORTANTE: Hero, QuickCards y SobreMi deben tener
//  background: "transparent" para que este fondo se vea.
// ============================================================
 
// ─── Pluma SVG ornamental — trazo fino dorado ────────────────
function FeatherLineSVG({ style = {}, size = 180, opacity = 0.45 }) {
  return (
    <svg
      width={size}
      height={size * 2.2}
      viewBox="0 0 100 220"
      fill="none"
      style={{
        position: "absolute",
        pointerEvents: "none",
        userSelect: "none",
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Cañón central */}
      <path
        d="M50 210 Q52 160 54 100 Q56 50 58 10"
        stroke={THEME.gold}
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.7"
      />
      {/* Barbas izquierda */}
      {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map(
        (y, i) => (
          <path
            key={`l${i}`}
            d={`M${53 - i * 0.3} ${y} Q${38 - i * 1.2} ${y - 4} ${
              22 - i * 1.8
            } ${y + 2}`}
            stroke={THEME.gold}
            strokeWidth="0.5"
            fill="none"
            strokeOpacity={Math.max(0.15, 0.6 - i * 0.025)}
          />
        )
      )}
      {/* Barbas derecha */}
      {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map(
        (y, i) => (
          <path
            key={`r${i}`}
            d={`M${55 + i * 0.3} ${y} Q${68 + i * 1.0} ${y - 3} ${
              80 + i * 1.5
            } ${y + 3}`}
            stroke={THEME.gold}
            strokeWidth="0.5"
            fill="none"
            strokeOpacity={Math.max(0.12, 0.55 - i * 0.025)}
          />
        )
      )}
      {/* Punta */}
      <path
        d="M58 10 Q60 4 54 2 Q52 8 58 10Z"
        fill={THEME.gold}
        fillOpacity="0.5"
      />
    </svg>
  );
}
 
// ─── Luna SVG line-art dorada ─────────────────────────────────
function MoonSVG({ style = {}, size = 60 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      aria-hidden="true"
    >
      {/* Luna creciente */}
      <path
        d="M42 30A18 18 0 0 1 24 12a18 18 0 1 0 18 18z"
        stroke={THEME.gold}
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.55"
      />
      {/* Estrellita junto a la luna */}
      <path
        d="M46 14 L47 17 L50 18 L47 19 L46 22 L45 19 L42 18 L45 17Z"
        fill={THEME.gold}
        fillOpacity="0.5"
      />
      <circle cx="38" cy="8"  r="0.8" fill={THEME.gold} fillOpacity="0.4" />
      <circle cx="52" cy="22" r="0.8" fill={THEME.gold} fillOpacity="0.4" />
    </svg>
  );
}
 
// ─── Estrella de 4 puntas dorada ──────────────────────────────
function StarGold({ style = {}, size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      aria-hidden="true"
    >
      <path
        d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
        fill={THEME.gold}
        fillOpacity="0.55"
      />
    </svg>
  );
}
 
// ─── WRAPPER PRINCIPAL ────────────────────────────────────────
export default function HeroSection({ children }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // ── Fondo acuarela — 5 capas superpuestas ──────────────
        background: [
          // mancha verde agua principal — superior izquierda
          "radial-gradient(ellipse 65% 55% at 8% 22%, rgba(168,210,190,0.30) 0%, transparent 65%)",
          // lavado verde difuso — centro superior
          "radial-gradient(ellipse 75% 45% at 52% 8%,  rgba(185,215,200,0.18) 0%, transparent 60%)",
          // mancha verde suave — izquierda media
          "radial-gradient(ellipse 50% 55% at 12% 58%, rgba(155,195,172,0.16) 0%, transparent 62%)",
          // toque rosa muy sutil — inferior derecha
          "radial-gradient(ellipse 45% 38% at 88% 82%, rgba(196,150,138,0.07) 0%, transparent 55%)",
          // base crema cálida
          "linear-gradient(165deg, #F1F6F3 0%, #FCFBFA 50%, #FAF7F5 100%)",
        ].join(", "),
      }}
    >
      {/* ══════════════════════════════════════════════════════
          PLUMAS PNG — ancladas al filo, sangran fuera del borde
          mix-blend-mode: multiply elimina el fondo negro del PNG
          filter sepia+hue convierte crema → grisáceo/sage suave
          (igual al estilo de la foto de referencia)
      ══════════════════════════════════════════════════════ */}
 
      {/* Pluma grande — filo izquierdo, ocupa toda la altura */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "-5%",
          left:          "-14%",         // sale del borde → anclada
          width:         "clamp(200px, 26vw, 380px)",
          height:        "auto",
          opacity:       0.55,
          mixBlendMode:  "multiply",
          transform:     "rotate(-6deg)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          // Tono grisáceo-sage, igual que la foto de referencia
          filter:        "saturate(0.15) brightness(0.82) contrast(0.9)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />
 
      {/* Pluma mediana — filo derecho superior */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position:      "absolute",
          top:           "-3%",
          right:         "-12%",         // sale del borde → anclada
          width:         "clamp(170px, 22vw, 320px)",
          height:        "auto",
          opacity:       0.45,
          mixBlendMode:  "multiply",
          transform:     "rotate(8deg) scaleX(-1)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          filter:        "saturate(0.12) brightness(0.85) contrast(0.88)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />
 
      {/* Pluma inferior derecha — zona SobreMi, filo derecho */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "5%",
          right:         "-10%",         // sale del borde
          width:         "clamp(150px, 18vw, 260px)",
          height:        "auto",
          opacity:       0.35,
          mixBlendMode:  "multiply",
          transform:     "rotate(-12deg) scaleX(-1)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          filter:        "saturate(0.1) brightness(0.88) contrast(0.85)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />
 
      {/* Pluma extra — filo izquierdo inferior, muy sutil */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position:      "absolute",
          bottom:        "10%",
          left:          "-10%",
          width:         "clamp(130px, 16vw, 220px)",
          height:        "auto",
          opacity:       0.28,
          mixBlendMode:  "multiply",
          transform:     "rotate(10deg)",
          objectFit:     "contain",
          pointerEvents: "none",
          userSelect:    "none",
          filter:        "saturate(0.12) brightness(0.90) contrast(0.85)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />
 
      {/* ══════════════════════════════════════════════════════
          PLUMAS SVG LINE-ART — trazo fino, ancladas al filo
          Grandes y parcialmente recortadas = integradas
      ══════════════════════════════════════════════════════ */}
 
      {/* SVG izquierdo — filo izquierdo, zona media-baja */}
      <FeatherLineSVG
        size={200}
        opacity={0.22}
        style={{
          top:       "38%",
          left:      "-7%",            // anclada al borde
          transform: "rotate(-5deg)",
        }}
      />
 
      {/* SVG derecho — filo derecho, zona hero */}
      <FeatherLineSVG
        size={175}
        opacity={0.18}
        style={{
          top:       "5%",
          right:     "-7%",            // anclada al borde
          transform: "rotate(8deg) scaleX(-1)",
        }}
      />
 
      {/* ── LUNAS DORADAS — reducidas, solo las más significativas ── */}
      <MoonSVG size={52} style={{ top: "6%",    right: "14%", opacity: 0.55 }} />
      <MoonSVG size={36} style={{ bottom: "18%",left:  "7%",  opacity: 0.32, transform: "scaleX(-1)" }} />
 
      {/* ── ESTRELLAS — discretas, no saturan ── */}
      <StarGold size={10} style={{ top: "12%",   left: "22%",  opacity: 0.5  }} />
      <StarGold size={12} style={{ top: "8%",    right: "28%", opacity: 0.45 }} />
      <StarGold size={8}  style={{ top: "32%",   right: "6%",  opacity: 0.32 }} />
      <StarGold size={9}  style={{ bottom: "22%",right: "16%", opacity: 0.35 }} />
      <StarGold size={11} style={{ bottom: "14%",left: "16%",  opacity: 0.38 }} />
 
      {/* ── Blob verde extra — refuerza la mancha acuarela ────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top:    "15%",
          left:   "0",
          width:  "30%",
          height: "40%",
          background:
            "radial-gradient(circle at top left, rgba(168,205,185,0.22), transparent 70%)",
          filter: "blur(22px)",
        }}
      />
 
      {/* ── Slot para los componentes hijo ─────────────────────── */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}