
// ============================================================
//  decoratives.jsx
//  Elementos SVG decorativos reutilizables — Magalí Sol Cerezo
//
//  Uso:
//    import { StarDeco, MoonDeco, CircleDeco, SunDeco, DiamondDeco } from "./decoratives";
//
//  Todos aceptan `className` para posicionarlos con Tailwind
//  y `size` (número) para escalar sin romper proporciones.
//  Los colores se toman del objeto THEME centralizado.
// ============================================================

// 🎨 Paleta compartida — mantené este objeto sincronizado con el THEME global
const THEME = {
  gold: "#C9A96E",
  sage: "#8A9E8A",
  rose: "#C4968A",
};

// ─────────────────────────────────────────────
//  ✦  ESTRELLA DE CUATRO PUNTAS
//  Uso típico: dispersa en fondos como confeti sutil
//  Ejemplo: <StarDeco className="absolute top-1/4 left-1/4" size={12} />
// ─────────────────────────────────────────────
export const StarDeco = ({ className = "", size = 12, opacity = 0.5 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
      fill={THEME.gold}
      fillOpacity={opacity}
    />
  </svg>
);

// ─────────────────────────────────────────────
//  🌙  LUNA CRECIENTE MINIMALISTA
//  Uso típico: esquinas de sección, cerca de textos espirituales
//  Ejemplo: <MoonDeco className="absolute bottom-16 left-12" size={22} />
// ─────────────────────────────────────────────
export const MoonDeco = ({ className = "", size = 18, opacity = 0.4 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    {/* Luna creciente: círculo recortado por otro círculo desplazado */}
    <path
      d="M15 9.5A6 6 0 0 1 8.5 3a6 6 0 1 0 6.5 6.5z"
      stroke={THEME.gold}
      strokeWidth="1"
      fill="none"
      strokeOpacity={opacity}
    />
  </svg>
);

// ─────────────────────────────────────────────
//  ○  CÍRCULO DOBLE CONCÉNTRICO
//  Uso típico: fondo de hero o sección testimonios como aura decorativa
//  Ejemplo: <CircleDeco className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={320} />
// ─────────────────────────────────────────────
export const CircleDeco = ({ className = "", size = 80 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    aria-hidden="true"
  >
    {/* Anillo exterior — verde salvia */}
    <circle
      cx="40" cy="40" r="39"
      stroke={THEME.sage}
      strokeWidth="0.5"
      strokeOpacity="0.3"
    />
    {/* Anillo interior — dorado */}
    <circle
      cx="40" cy="40" r="30"
      stroke={THEME.gold}
      strokeWidth="0.5"
      strokeOpacity="0.2"
    />
  </svg>
);

// ─────────────────────────────────────────────
//  ☀️  SOL RADIANTE (inspirado en el logo)
//  Uso típico: separadores de sección, detalle en cards de terapia
//  Ejemplo: <SunDeco className="mx-auto mb-4" size={32} />
// ─────────────────────────────────────────────
export const SunDeco = ({ className = "", size = 32, opacity = 0.55 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    {/* Rayos largos en cruz */}
    <line x1="16" y1="1" x2="16" y2="31" stroke={THEME.gold} strokeWidth="0.7" strokeOpacity={opacity} />
    <line x1="1" y1="16" x2="31" y2="16" stroke={THEME.gold} strokeWidth="0.7" strokeOpacity={opacity} />
    {/* Rayos diagonales */}
    <line x1="5" y1="5" x2="27" y2="27" stroke={THEME.gold} strokeWidth="0.5" strokeOpacity={opacity * 0.7} />
    <line x1="27" y1="5" x2="5" y2="27" stroke={THEME.gold} strokeWidth="0.5" strokeOpacity={opacity * 0.7} />
    {/* Rayos intermedios */}
    <line x1="16" y1="1" x2="22" y2="8" stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.5} />
    <line x1="16" y1="1" x2="10" y2="8" stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.5} />
    <line x1="31" y1="16" x2="24" y2="10" stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.5} />
    <line x1="31" y1="16" x2="24" y2="22" stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.5} />
    {/* Núcleo circular */}
    <circle cx="16" cy="16" r="3.5" stroke={THEME.gold} strokeWidth="0.8" strokeOpacity={opacity} fill="none" />
    <circle cx="16" cy="16" r="1.5" fill={THEME.gold} fillOpacity={opacity * 0.6} />
    {/* Estrellas de 4 puntas en extremos */}
    <path d="M16 2 L16.5 4 L16 3.5 L15.5 4 Z" fill={THEME.gold} fillOpacity={opacity} />
    <path d="M16 30 L16.5 28 L16 28.5 L15.5 28 Z" fill={THEME.gold} fillOpacity={opacity} />
    <path d="M2 16 L4 16.5 L3.5 16 L4 15.5 Z" fill={THEME.gold} fillOpacity={opacity} />
    <path d="M30 16 L28 16.5 L28.5 16 L28 15.5 Z" fill={THEME.gold} fillOpacity={opacity} />
  </svg>
);

// ─────────────────────────────────────────────
//  ◇  ROMBO / DIAMANTE ELEGANTE
//  Uso típico: separadores de texto, badges de terapia, listas
//  Ejemplo: <DiamondDeco size={10} className="inline-block mr-2" />
// ─────────────────────────────────────────────
export const DiamondDeco = ({ className = "", size = 10, color = THEME.gold, opacity = 0.6 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
  >
    {/* Rombo exterior */}
    <path
      d="M5 0.5 L9.5 5 L5 9.5 L0.5 5 Z"
      stroke={color}
      strokeWidth="0.8"
      strokeOpacity={opacity}
      fill="none"
    />
    {/* Punto central */}
    <circle cx="5" cy="5" r="1" fill={color} fillOpacity={opacity * 0.7} />
  </svg>
);

// ─────────────────────────────────────────────
//  🌿  HOJA SIMPLE
//  Uso típico: íconos en listas de features, badges holísticos
//  Ejemplo: <LeafDeco size={16} className="text-sage inline" />
// ─────────────────────────────────────────────
export const LeafDeco = ({ className = "", size = 16, color = THEME.sage, opacity = 0.7 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    {/* Hoja curva */}
    <path
      d="M8 14 C8 14 2 10 2 5 C2 2 5 1 8 2 C11 1 14 2 14 5 C14 10 8 14 8 14Z"
      stroke={color}
      strokeWidth="0.8"
      strokeOpacity={opacity}
      fill={color}
      fillOpacity={opacity * 0.15}
    />
    {/* Nervio central */}
    <path
      d="M8 14 C8 14 8 8 8 2"
      stroke={color}
      strokeWidth="0.6"
      strokeOpacity={opacity * 0.8}
    />
    {/* Nervios laterales */}
    <path d="M8 6  Q6 5 4 6" stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.5} fill="none" />
    <path d="M8 8  Q6 7 4 8" stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.5} fill="none" />
    <path d="M8 6  Q10 5 12 6" stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.5} fill="none" />
    <path d="M8 8  Q10 7 12 8" stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.5} fill="none" />
  </svg>
);

// ─────────────────────────────────────────────
//  ✤  FLOR DE CUATRO PÉTALOS
//  Uso típico: divisores de texto premium, encabezados de sección
//  Ejemplo: <FlowerDeco size={18} className="mx-auto" />
// ─────────────────────────────────────────────
export const FlowerDeco = ({ className = "", size = 18, opacity = 0.55 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    {/* Pétalos — elipses rotadas 45° cada una */}
    <ellipse cx="9" cy="9" rx="2.5" ry="6" fill={THEME.gold} fillOpacity={opacity * 0.4} stroke={THEME.gold} strokeWidth="0.5" strokeOpacity={opacity} />
    <ellipse cx="9" cy="9" rx="2.5" ry="6" fill={THEME.gold} fillOpacity={opacity * 0.4} stroke={THEME.gold} strokeWidth="0.5" strokeOpacity={opacity} transform="rotate(90 9 9)" />
    <ellipse cx="9" cy="9" rx="2.5" ry="6" fill={THEME.gold} fillOpacity={opacity * 0.25} stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.7} transform="rotate(45 9 9)" />
    <ellipse cx="9" cy="9" rx="2.5" ry="6" fill={THEME.gold} fillOpacity={opacity * 0.25} stroke={THEME.gold} strokeWidth="0.4" strokeOpacity={opacity * 0.7} transform="rotate(135 9 9)" />
    {/* Núcleo */}
    <circle cx="9" cy="9" r="2" fill={THEME.gold} fillOpacity={opacity * 0.5} />
    <circle cx="9" cy="9" r="0.8" fill={THEME.gold} fillOpacity={opacity} />
  </svg>
);



