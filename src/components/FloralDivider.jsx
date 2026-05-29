
// ============================================================
//  FloralDivider.jsx
//  Separadores botánicos entre secciones — Magalí Sol Cerezo
//
//  EXPORTS:
//    FloralDivider          →  separador principal (ola + ornamento central)
//    FloralDividerSimple    →  solo línea con ornamento, sin ola de color
//    FloralDividerLeaves    →  variante con hojas a los lados
//    SectionTag             →  pill/etiqueta dorada de título de sección
//
//  CÓMO USAR FloralDivider:
//    Poné el componente ENTRE dos secciones con distintos bg.
//    Pasá el color de la sección de arriba (fromColor) y de abajo (toColor).
//    El SVG de ola hace la transición fluida entre ambos fondos.
//
//  EJEMPLO EN App.jsx:
//    <SectionA />                                          ← bg: #FCFBFA
//    <FloralDivider fromColor="#FCFBFA" toColor="#EEF3EE" />
//    <SectionB />                                          ← bg: #EEF3EE
// ============================================================
 
// 🎨 Paleta — sincronizá con el THEME global del proyecto
const THEME = {
  gold:     "#C9A96E",
  sage:     "#8A9E8A",
  rose:     "#C4968A",
  text:     "#2D2924",
  bg:       "#FCFBFA",
  bgSage:   "#EEF3EE",
  bgRose:   "#F7F0ED",
};
 
// ─────────────────────────────────────────────────────────────
//  FloralDivider — Separador principal
//
//  PROPS:
//    fromColor  {string}  Color de la sección superior (hex)
//    toColor    {string}  Color de la sección inferior (hex)
//    flip       {boolean} Invierte la ola verticalmente (default: false)
//    height     {number}  Altura del SVG de ola en px (default: 56)
//
//  FUNCIONAMIENTO INTERNO:
//    1. SVG de ola sinusoidal hace transición fromColor → toColor
//    2. Div absoluto centrado muestra el ornamento botánico
//    3. El ornamento tiene el mismo bg que toColor para "flotar" limpio
//    4. Ramas izquierda/derecha son el mismo SVG, la derecha va scaleX(-1)
// ─────────────────────────────────────────────────────────────
export const FloralDivider = ({
  fromColor = THEME.bg,
  toColor   = THEME.bgSage,
  flip      = false,
  height    = 56,
}) => (
  <div
    style={{
      position:   "relative",
      lineHeight: 0,
      zIndex:     2,
      backgroundColor: fromColor,  // El contenedor tiene el color "de arriba"
    }}
  >
    {/* ── Ola de transición de color ── */}
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      style={{
        display:   "block",
        width:     "100%",
        height:    height,
        transform: flip ? "scaleY(-1)" : "none",
      }}
      aria-hidden="true"
    >
      {/*
        Path de ola suave — curvas de Bézier cúbicas (C)
        La forma crea 3 "ondas" simétricas entre 0 y 1440px.
        Fill = toColor porque la forma rellena "hacia abajo" (la nueva sección).
      */}
      <path
        d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1350,14 1440,28 L1440,56 L0,56 Z"
        fill={toColor}
      />
    </svg>
 
    {/* ── Ornamento botánico centrado ── */}
    <div
      aria-hidden="true"
      style={{
        position:        "absolute",
        top:             "50%",
        left:            "50%",
        transform:       "translate(-50%, -50%)",
        display:         "flex",
        alignItems:      "center",
        gap:             "10px",
        backgroundColor: toColor,        // Mismo bg para que se vea "flotando"
        padding:         "4px 18px",
        borderRadius:    "9999px",
        zIndex:          3,
      }}
    >
      {/* Rama izquierda */}
      <BotanicalBranch />
 
      {/* Ornamento central — círculo con cruz y puntas */}
      <CenterOrnament />
 
      {/* Rama derecha — misma rama espejada */}
      <BotanicalBranch mirrored />
    </div>
  </div>
);
 
// ─────────────────────────────────────────────────────────────
//  Sub-componentes internos del FloralDivider
// ─────────────────────────────────────────────────────────────
 
// Rama botánica de un lado
const BotanicalBranch = ({ mirrored = false }) => (
  <svg
    width="72"
    height="22"
    viewBox="0 0 72 22"
    fill="none"
    style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
    aria-hidden="true"
  >
    {/* Tallo principal — línea horizontal de derecha a izquierda */}
    <path d="M70,11 Q55,11 38,11"  stroke={THEME.gold} strokeWidth="0.8" strokeOpacity="0.65" />
 
    {/* Hoja superior grande */}
    <path d="M54,11 Q50,4  44,6"   stroke={THEME.gold} strokeWidth="0.7" strokeOpacity="0.55" fill="none" />
    {/* Hoja inferior grande */}
    <path d="M60,11 Q56,16 50,15"  stroke={THEME.gold} strokeWidth="0.7" strokeOpacity="0.55" fill="none" />
 
    {/* Hoja superior pequeña */}
    <path d="M46,11 Q43,5  38,7"   stroke={THEME.gold} strokeWidth="0.7" strokeOpacity="0.42" fill="none" />
    {/* Hoja inferior pequeña */}
    <path d="M48,11 Q45,17 40,16"  stroke={THEME.gold} strokeWidth="0.7" strokeOpacity="0.42" fill="none" />
 
    {/* Punto terminal del tallo */}
    <circle cx="70" cy="11" r="1.5" fill={THEME.gold} fillOpacity="0.5"  />
    {/* Punto intermedio decorativo */}
    <circle cx="64" cy="11" r="1"   fill={THEME.gold} fillOpacity="0.35" />
  </svg>
);
 
// Ornamento central — rombo con círculo y detalles de punta
const CenterOrnament = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    {/* Círculo exterior */}
    <circle cx="14" cy="14" r="5.5" stroke={THEME.gold} strokeWidth="0.8" strokeOpacity="0.55" />
    {/* Cruz de guía */}
    <path d="M14 2 L14 26 M2 14 L26 14" stroke={THEME.gold} strokeWidth="0.6" strokeOpacity="0.25" />
    {/* Puntas de flecha en los extremos de la cruz */}
    <path d="M14 2  L15 6  L14 5  L13 6  Z" fill={THEME.gold} fillOpacity="0.45" />
    <path d="M14 26 L15 22 L14 23 L13 22 Z" fill={THEME.gold} fillOpacity="0.45" />
    {/* Punto interior */}
    <circle cx="14" cy="14" r="2" fill={THEME.gold} fillOpacity="0.35" />
  </svg>
);
 
// ─────────────────────────────────────────────────────────────
//  FloralDividerSimple — Sin ola, solo ornamento centrado
//
//  Ideal para separar subsecciones dentro de una misma sección
//  (mismo fondo, solo decoración botánica).
//
//  EJEMPLO:
//    <FloralDividerSimple bgColor="#EEF3EE" my={32} />
// ─────────────────────────────────────────────────────────────
export const FloralDividerSimple = ({
  bgColor = THEME.bg,
  my      = 24,   // margen vertical en px
}) => (
  <div
    aria-hidden="true"
    style={{
      display:        "flex",
      alignItems:     "center",
      gap:            "12px",
      justifyContent: "center",
      marginTop:      my,
      marginBottom:   my,
    }}
  >
    {/* Línea izquierda */}
    <div style={{ flex: 1, maxWidth: 120, height: 1, background: `linear-gradient(to right, transparent, ${THEME.gold}50)` }} />
 
    {/* Ornamento: tres estrellas de cuatro puntas */}
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <svg width="8"  height="8"  viewBox="0 0 8 8"  fill="none">
        <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z" fill={THEME.gold} fillOpacity="0.35" />
      </svg>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z" fill={THEME.gold} fillOpacity="0.6" />
      </svg>
      <svg width="8"  height="8"  viewBox="0 0 8 8"  fill="none">
        <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z" fill={THEME.gold} fillOpacity="0.35" />
      </svg>
    </div>
 
    {/* Línea derecha */}
    <div style={{ flex: 1, maxWidth: 120, height: 1, background: `linear-gradient(to left, transparent, ${THEME.gold}50)` }} />
  </div>
);
 
// ─────────────────────────────────────────────────────────────
//  FloralDividerLeaves — Ola + hojas decorativas a los lados
//
//  Variante más elaborada con hojas de helecho a izquierda/derecha
//  del ornamento central. Más "botánica", menos "mística".
//
//  EJEMPLO:
//    <FloralDividerLeaves fromColor="#FCFBFA" toColor="#F7F0ED" />
// ─────────────────────────────────────────────────────────────
export const FloralDividerLeaves = ({
  fromColor = THEME.bg,
  toColor   = THEME.bgRose,
  height    = 56,
}) => (
  <div style={{ position: "relative", lineHeight: 0, zIndex: 2, backgroundColor: fromColor }}>
    {/* Ola de color */}
    <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height }} aria-hidden="true">
      <path d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1350,14 1440,28 L1440,56 L0,56 Z"
        fill={toColor} />
    </svg>
 
    {/* Ornamento con hojas */}
    <div
      aria-hidden="true"
      style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex", alignItems: "center", gap: 8,
        backgroundColor: toColor,
        padding: "6px 20px",
        borderRadius: "9999px",
        zIndex: 3,
      }}
    >
      {/* Hoja izquierda */}
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path d="M40,10 C30,10 20,10 10,10" stroke={THEME.sage} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M30,10 Q27,5 22,6"  stroke={THEME.sage} strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
        <path d="M30,10 Q27,15 22,14" stroke={THEME.sage} strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
        <path d="M22,10 Q19,5 14,6"  stroke={THEME.sage} strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
        <path d="M22,10 Q19,15 14,14" stroke={THEME.sage} strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
        <circle cx="40" cy="10" r="1.2" fill={THEME.sage} fillOpacity="0.45" />
      </svg>
 
      {/* Centro con luna + estrella */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="7"  stroke={THEME.gold} strokeWidth="0.7" strokeOpacity="0.5" />
        <circle cx="16" cy="16" r="11" stroke={THEME.gold} strokeWidth="0.4" strokeOpacity="0.25" />
        {/* Estrella central */}
        <path d="M16 9L16.9 14.1L22 16L16.9 17.9L16 23L15.1 17.9L10 16L15.1 14.1Z"
          fill={THEME.gold} fillOpacity="0.5" />
      </svg>
 
      {/* Hoja derecha (espejada) */}
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ transform: "scaleX(-1)" }}>
        <path d="M40,10 C30,10 20,10 10,10" stroke={THEME.sage} strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M30,10 Q27,5 22,6"  stroke={THEME.sage} strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
        <path d="M30,10 Q27,15 22,14" stroke={THEME.sage} strokeWidth="0.7" strokeOpacity="0.45" fill="none" />
        <path d="M22,10 Q19,5 14,6"  stroke={THEME.sage} strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
        <path d="M22,10 Q19,15 14,14" stroke={THEME.sage} strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
        <circle cx="40" cy="10" r="1.2" fill={THEME.sage} fillOpacity="0.45" />
      </svg>
    </div>
  </div>
);
 
// ─────────────────────────────────────────────────────────────
//  SectionTag — Pill/etiqueta dorada de título de sección
//
//  Componente de UI que aparece encima del H2 de cada sección.
//  Incluye líneas laterales doradas + texto en mayúsculas tracked.
//
//  EJEMPLO:
//    <SectionTag label="Terapias" />
//    <h2>Cada proceso es único</h2>
// ─────────────────────────────────────────────────────────────
export const SectionTag = ({ label = "", centered = true }) => (
  <div
    style={{
      display:        "flex",
      alignItems:     "center",
      gap:            "10px",
      justifyContent: centered ? "center" : "flex-start",
      marginBottom:   "1rem",
    }}
  >
    <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
    <span
      style={{
        fontFamily:    "'Quicksand', sans-serif",
        color:         THEME.gold,
        fontSize:      "0.72rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontWeight:    600,
      }}
    >
      {label}
    </span>
    {centered && <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />}
  </div>
);
 


