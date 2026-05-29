// export default function DividerLeaves({ flip }) {
//   return (
//     <div
//       className="flex items-center justify-center py-8 overflow-hidden select-none"
//       style={{ transform: flip ? "scaleX(-1)" : "none" }}
//     >
//       <svg
//         width="320"
//         height="32"
//         viewBox="0 0 320 32"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         {/* Left branch */}
//         <path
//           d="M10 16 Q30 8 50 14 Q40 20 20 18"
//           stroke="#8A9E8A"
//           strokeWidth="1"
//           fill="none"
//           opacity="0.5"
//         />
//         <path
//           d="M10 16 Q25 4 45 12"
//           stroke="#8A9E8A"
//           strokeWidth="0.8"
//           fill="none"
//           opacity="0.35"
//         />
//         {/* Left leaf 1 */}
//         <ellipse cx="55" cy="13" rx="8" ry="4" fill="#8A9E8A" opacity="0.25" transform="rotate(-20 55 13)" />
//         {/* Left leaf 2 */}
//         <ellipse cx="40" cy="20" rx="6" ry="3" fill="#8A9E8A" opacity="0.2" transform="rotate(15 40 20)" />
//         {/* Left stem */}
//         <path d="M60 14 L130 16" stroke="#C9A96E" strokeWidth="0.6" opacity="0.3" />

//         {/* Center ornament */}
//         <path
//           d="M155 10 L158 15 L163 16 L158 17 L160 22 L155 18 L150 22 L152 17 L147 16 L152 15 Z"
//           fill="#C9A96E"
//           opacity="0.4"
//         />
//         <circle cx="160" cy="16" r="2.5" fill="none" stroke="#C9A96E" strokeWidth="0.7" opacity="0.3" />

//         {/* Right stem */}
//         <path d="M190 16 L260 14" stroke="#C9A96E" strokeWidth="0.6" opacity="0.3" />
//         {/* Right leaf 1 */}
//         <ellipse cx="265" cy="13" rx="8" ry="4" fill="#8A9E8A" opacity="0.25" transform="rotate(20 265 13)" />
//         {/* Right leaf 2 */}
//         <ellipse cx="278" cy="20" rx="6" ry="3" fill="#8A9E8A" opacity="0.2" transform="rotate(-15 278 20)" />
//         {/* Right branch */}
//         <path
//           d="M310 16 Q290 8 270 14 Q280 20 300 18"
//           stroke="#8A9E8A"
//           strokeWidth="1"
//           fill="none"
//           opacity="0.5"
//         />
//         <path
//           d="M310 16 Q295 4 275 12"
//           stroke="#8A9E8A"
//           strokeWidth="0.8"
//           fill="none"
//           opacity="0.35"
//         />
//       </svg>
//     </div>
//   );
// }

// ============================================================
//  DividerLeaves.jsx
//  Separador botánico floral — Magalí Sol Cerezo
//
//  ESTRUCTURA original conservada (div wrapper + svg + flip prop).
//  El SVG fue completamente rediseñado con:
//    · Ramas curvas orgánicas con múltiples hojas en par (sup/inf)
//    · Nervios de hoja finos
//    · Flores de 5 pétalos en rosa empolvado con núcleo dorado
//    · Línea de conexión punteada dorada hacia el centro
//    · Puntitos flotantes dorados (como partículas de luz)
//    · Ornamento central: círculo doble + estrella de 8 puntas + puntas de brújula
//
//  PROPS:
//    flip {boolean}  — espeja horizontalmente (default: false)
//                      útil para alternar la orientación entre secciones
//    size {number}   — escala el SVG (default: 480). Reducir en mobile.
//    opacity {number}— opacidad global del ornamento (default: 1)
//
//  USO:
//    <DividerLeaves />                          → normal
//    <DividerLeaves flip />                     → espejado
//    <DividerLeaves size={320} />               → más compacto
//    <DividerLeaves opacity={0.7} />            → más sutil
// ============================================================

export default function DividerLeaves({ flip = false, size = 480, opacity = 1 }) {
  const h = 60;
  const cx = size / 2; // centro horizontal dinámico
  const scale = size / 480; // factor de escala para adaptar el SVG

  return (
    <div
      className="flex items-center justify-center py-8 overflow-hidden select-none"
      style={{
        transform: flip ? "scaleX(-1)" : "none",
        opacity,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={h}
        viewBox={`0 0 480 ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ══════════════════════════════
            RAMA IZQUIERDA
        ══════════════════════════════ */}

        {/* Tallo principal — curva suave */}
        <path
          d="M20 30 C50 28 80 26 110 30"
          stroke="#8A9E8A" strokeWidth="0.9" fill="none" opacity="0.55"
        />

        {/* Par de hojas 1 — superiores, cerca del arranque */}
        <path d="M45 30 Q48 21 56 23 Q52 30 45 30 Z" fill="#8A9E8A" opacity="0.28" />
        <path d="M45 30 Q42 21 34 23 Q38 30 45 30 Z" fill="#8A9E8A" opacity="0.18" />
        {/* Nervio hoja sup derecha */}
        <path d="M45 30 Q50 25 55 23" stroke="#8A9E8A" strokeWidth="0.4" fill="none" opacity="0.4" />

        {/* Par de hojas 2 — inferiores, más al centro */}
        <path d="M68 30 Q72 39 80 37 Q75 30 68 30 Z" fill="#8A9E8A" opacity="0.25" />
        <path d="M68 30 Q64 39 56 37 Q61 30 68 30 Z" fill="#8A9E8A" opacity="0.16" />
        {/* Nervio hoja inf derecha */}
        <path d="M68 30 Q73 35 79 37" stroke="#8A9E8A" strokeWidth="0.4" fill="none" opacity="0.35" />

        {/* Hojitas pequeñas — extremo antes de la flor */}
        <path d="M90 30 Q93 24 99 25 Q96 30 90 30 Z" fill="#8A9E8A" opacity="0.2" />
        <path d="M90 30 Q87 24 81 25 Q84 30 90 30 Z" fill="#8A9E8A" opacity="0.14" />

        {/* ── Flor de 5 pétalos izquierda ── */}
        {/* Pétalos: elipses desplazadas hacia arriba, rotadas cada 72° */}
        <g transform="translate(108,30)">
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.35" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(72  0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(144 0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(216 0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(288 0 0)" />
          {/* Núcleo dorado */}
          <circle cx="0" cy="0" r="2.8" fill="#C9A96E" opacity="0.55" />
          <circle cx="0" cy="0" r="1.2" fill="#C9A96E" opacity="0.75" />
        </g>

        {/* Línea punteada izq → centro */}
        <path
          d="M114 30 L185 30"
          stroke="#C9A96E" strokeWidth="0.5" opacity="0.28" strokeDasharray="2 3"
        />

        {/* Partículas de luz — puntitos flotantes izquierda */}
        <circle cx="130" cy="27" r="1"   fill="#C9A96E" opacity="0.3"  />
        <circle cx="144" cy="33" r="0.8" fill="#C9A96E" opacity="0.22" />
        <circle cx="160" cy="26" r="1.2" fill="#C9A96E" opacity="0.28" />
        <circle cx="173" cy="34" r="0.7" fill="#C9A96E" opacity="0.2"  />

        {/* ══════════════════════════════
            ORNAMENTO CENTRAL
            Círculo doble + estrella de 8 puntas +
            puntas de brújula + núcleo
        ══════════════════════════════ */}
        <g transform="translate(240,30)">

          {/* Anillos concéntricos */}
          <circle cx="0" cy="0" r="14" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.30" />
          <circle cx="0" cy="0" r="10" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.22" />

          {/* Estrella de 8 puntas — relleno muy sutil */}
          <path
            d="M0,-12 L1.5,-5 L5,-9 L2,-3 L8,0 L2,3 L5,9 L1.5,5
               L0,12 L-1.5,5 L-5,9 L-2,3 L-8,0 L-2,-3 L-5,-9 L-1.5,-5 Z"
            fill="#C9A96E" opacity="0.22"
          />

          {/* Cruz de guía — muy fina */}
          <line x1="0" y1="-14" x2="0"   y2="14"  stroke="#C9A96E" strokeWidth="0.4" opacity="0.20" />
          <line x1="-14" y1="0" x2="14"  y2="0"   stroke="#C9A96E" strokeWidth="0.4" opacity="0.20" />

          {/* Puntas de brújula — arriba, abajo, izq, der */}
          <path d="M0,-12 L1.4,-8  L0,-9.5  L-1.4,-8  Z" fill="#C9A96E" opacity="0.55" />
          <path d="M0, 12 L1.4, 8  L0, 9.5  L-1.4, 8  Z" fill="#C9A96E" opacity="0.55" />
          <path d="M-12,0 L-8, 1.4 L-9.5,0  L-8,-1.4  Z" fill="#C9A96E" opacity="0.45" />
          <path d="M 12,0 L 8, 1.4 L 9.5,0  L 8,-1.4  Z" fill="#C9A96E" opacity="0.45" />

          {/* Núcleo — punto central */}
          <circle cx="0" cy="0" r="3.5" fill="#C9A96E" opacity="0.35" />
          <circle cx="0" cy="0" r="1.5" fill="#C9A96E" opacity="0.65" />
        </g>

        {/* ══════════════════════════════
            LADO DERECHO — espejo exacto
        ══════════════════════════════ */}

        {/* Partículas de luz derecha */}
        <circle cx="307" cy="27" r="0.7" fill="#C9A96E" opacity="0.2"  />
        <circle cx="320" cy="34" r="1.2" fill="#C9A96E" opacity="0.28" />
        <circle cx="336" cy="26" r="0.8" fill="#C9A96E" opacity="0.22" />
        <circle cx="350" cy="33" r="1"   fill="#C9A96E" opacity="0.3"  />

        {/* Línea punteada centro → der */}
        <path
          d="M295 30 L366 30"
          stroke="#C9A96E" strokeWidth="0.5" opacity="0.28" strokeDasharray="2 3"
        />

        {/* Flor de 5 pétalos derecha */}
        <g transform="translate(372,30)">
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.35" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(72  0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(144 0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(216 0 0)" />
          <ellipse cx="0" cy="-6" rx="2.8" ry="4.5" fill="#C4968A" opacity="0.3"  transform="rotate(288 0 0)" />
          <circle cx="0" cy="0" r="2.8" fill="#C9A96E" opacity="0.55" />
          <circle cx="0" cy="0" r="1.2" fill="#C9A96E" opacity="0.75" />
        </g>

        {/* Rama derecha — espejo de la izquierda */}
        <path
          d="M460 30 C430 28 400 26 370 30"
          stroke="#8A9E8A" strokeWidth="0.9" fill="none" opacity="0.55"
        />

        {/* Par de hojas 1 derecha */}
        <path d="M435 30 Q432 21 424 23 Q428 30 435 30 Z" fill="#8A9E8A" opacity="0.28" />
        <path d="M435 30 Q438 21 446 23 Q442 30 435 30 Z" fill="#8A9E8A" opacity="0.18" />
        <path d="M435 30 Q430 25 425 23" stroke="#8A9E8A" strokeWidth="0.4" fill="none" opacity="0.4" />

        {/* Par de hojas 2 derecha */}
        <path d="M412 30 Q408 39 400 37 Q405 30 412 30 Z" fill="#8A9E8A" opacity="0.25" />
        <path d="M412 30 Q416 39 424 37 Q419 30 412 30 Z" fill="#8A9E8A" opacity="0.16" />
        <path d="M412 30 Q407 35 401 37" stroke="#8A9E8A" strokeWidth="0.4" fill="none" opacity="0.35" />

        {/* Hojitas pequeñas derecha */}
        <path d="M390 30 Q387 24 381 25 Q384 30 390 30 Z" fill="#8A9E8A" opacity="0.2"  />
        <path d="M390 30 Q393 24 399 25 Q396 30 390 30 Z" fill="#8A9E8A" opacity="0.14" />

      </svg>
    </div>
  );
}
