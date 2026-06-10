// ============================================================
//  ConstellationDivider.jsx
//  Separador de secciones estilo constelación
//  Reemplaza DividerLeaves entre secciones.
//
//  PROPS:
//    fromColor  {string}  color de la sección de arriba
//    toColor    {string}  color de la sección de abajo
//    flip       {boolean} invierte la ola (default: false)
//    height     {number}  altura de la ola
// ============================================================

const GOLD = "#C9A96E";

// ─── Constelación izquierda ───────────────────────────────
const ConstellLeft = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" aria-hidden="true">
    {/* Líneas de conexión */}
    <line x1="8" y1="8" x2="28" y2="20" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="28" y1="20" x2="52" y2="12" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="52" y1="12" x2="72" y2="22" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="72" y1="22" x2="95" y2="16" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="95" y1="16" x2="115" y2="24" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.45" />
    
    {/* Línea base horizontal */}
    <line x1="0" y1="28" x2="120" y2="28" stroke={GOLD} strokeWidth="0.4" strokeOpacity="0.25"
      strokeDasharray="2 4" />
      
    {/* Puntos estrella */}
    <circle cx="8" cy="8" r="2.2" fill={GOLD} fillOpacity="0.7" />
    <circle cx="28" cy="20" r="1.6" fill={GOLD} fillOpacity="0.55" />
    <circle cx="52" cy="12" r="2.8" fill={GOLD} fillOpacity="0.8" />  {/* estrella principal */}
    <circle cx="72" cy="22" r="1.6" fill={GOLD} fillOpacity="0.55" />
    <circle cx="95" cy="16" r="2.0" fill={GOLD} fillOpacity="0.65" />
    <circle cx="115" cy="24" r="1.4" fill={GOLD} fillOpacity="0.45" />
    
    {/* Punto destello centrado matemáticamente a la estrella principal (52, 12) sin usar transform */}
    <path d="M52,9.5 L52.4,11.6 L54.5,12 L52.4,12.4 L52,14.5 L51.6,12.4 L49.5,12 L51.6,11.6 Z"
      fill={GOLD} fillOpacity="0.6" />
      
    {/* Estrella de 4 puntas chica */}
    <path d="M8,5 L8.5,7.5 L11,8 L8.5,8.5 L8,11 L7.5,8.5 L5,8 L7.5,7.5 Z"
      fill={GOLD} fillOpacity="0.5" />
  </svg>
);

// ─── Ornamento central ────────────────────────────────────
const CenterOrnament = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Círculos */}
    <circle cx="22" cy="22" r="18" stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.35" fill="none" />
    <circle cx="22" cy="22" r="12" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.22" fill="none" />
    
    {/* Estrella de 8 puntas */}
    <path d="M22,4 L23.5,13 L30,7 L24.5,15 L33,16 L24.5,19 L30,27 L22,22.5 L14,27 L19.5,19 L11,16 L19.5,15 L14,7 L20.5,13 Z"
      fill={GOLD} fillOpacity="0.28" />
      
    {/* Cruz cardinal */}
    <line x1="22" y1="4" x2="22" y2="40" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="4" y1="22" x2="40" y2="22" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.2" />
    
    {/* Puntas de brújula */}
    <path d="M22,4 L23.2,9 L22,7.5 L20.8,9 Z" fill={GOLD} fillOpacity="0.65" />
    <path d="M22,40 L23.2,35 L22,36.5 L20.8,35 Z" fill={GOLD} fillOpacity="0.65" />
    <path d="M4,22 L9,23.2 L7.5,22 L9,20.8 Z" fill={GOLD} fillOpacity="0.55" />
    <path d="M40,22 L35,23.2 L36.5,22 L35,20.8 Z" fill={GOLD} fillOpacity="0.55" />
    
    {/* Núcleo */}
    <circle cx="22" cy="22" r="3.5" fill={GOLD} fillOpacity="0.4" />
    <circle cx="22" cy="22" r="1.5" fill={GOLD} fillOpacity="0.7" />
  </svg>
);

// ─── Constelación derecha (espejo) ────────────────────────
const ConstellRight = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none"
    style={{ transform: "scaleX(-1)" }} aria-hidden="true">
    <line x1="8" y1="8" x2="28" y2="20" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="28" y1="20" x2="52" y2="12" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="52" y1="12" x2="72" y2="22" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="72" y1="22" x2="95" y2="16" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.5" />
    <line x1="95" y1="16" x2="115" y2="24" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.45" />
    <line x1="0" y1="28" x2="120" y2="28" stroke={GOLD} strokeWidth="0.4" strokeOpacity="0.25"
      strokeDasharray="2 4" />
    <circle cx="8" cy="8" r="2.2" fill={GOLD} fillOpacity="0.7" />
    <circle cx="28" cy="20" r="1.6" fill={GOLD} fillOpacity="0.55" />
    <circle cx="52" cy="12" r="2.8" fill={GOLD} fillOpacity="0.8" />
    <circle cx="72" cy="22" r="1.6" fill={GOLD} fillOpacity="0.55" />
    <circle cx="95" cy="16" r="2.0" fill={GOLD} fillOpacity="0.65" />
    <circle cx="115" cy="24" r="1.4" fill={GOLD} fillOpacity="0.45" />
    
    {/* Mismo destello precalibrado sin transform */}
    <path d="M52,9.5 L52.4,11.6 L54.5,12 L52.4,12.4 L52,14.5 L51.6,12.4 L49.5,12 L51.6,11.6 Z"
      fill={GOLD} fillOpacity="0.6" />

    <path d="M8,5 L8.5,7.5 L11,8 L8.5,8.5 L8,11 L7.5,8.5 L5,8 L7.5,7.5 Z"
      fill={GOLD} fillOpacity="0.5" />
  </svg>
);

// ══════════════════════════════════════════════════════════
//  ConstellationDivider — separador principal entre secciones
// ══════════════════════════════════════════════════════════
export default function ConstellationDivider({
  fromColor = "#F5F8F6",
  toColor = "#EAF3EF",
  flip = false,
  height = 56,
}) {
  return (
    <div style={{ position: "relative", lineHeight: 0, zIndex: 2, backgroundColor: fromColor }}>
      {/* Ola de transición de color */}
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height, transform: flip ? "scaleY(-1)" : "none" }}
        aria-hidden="true"
      >
        <path
          d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1350,14 1440,28 L1440,56 L0,56 Z"
          fill={toColor}
        />
      </svg>

      {/* Ornamento de constelación centrado */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: toColor,
          padding: "4px 20px",
          borderRadius: "9999px",
          zIndex: 3,
        }}
      >
        <ConstellLeft />
        <CenterOrnament />
        <ConstellRight />
      </div>
    </div>
  );
}

// ── Variante simple — solo constelación, sin ola ─────────
export function ConstellationSimple() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: "12px", padding: "1.5rem 0"
    }} aria-hidden="true">
      <ConstellLeft />
      <CenterOrnament />
      <ConstellRight />
    </div>
  );
}