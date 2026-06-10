import { THEME } from "../constants";
import { useEffect, useState } from "react";

// ─── Pluma SVG ornamental — trazo fino dorado ────────────────
function FeatherLineSVG({ size = 180, opacity = 0.45, style = {} }) {
  // Valores fijos de opacidad precalculados para evitar operaciones matemáticas en el render
  const opacitiesLeft = [0.6, 0.57, 0.55, 0.52, 0.5, 0.47, 0.45, 0.42, 0.4, 0.37, 0.35, 0.32, 0.3, 0.27];
  const opacitiesRight = [0.55, 0.52, 0.5, 0.47, 0.45, 0.42, 0.4, 0.37, 0.35, 0.32, 0.3, 0.27, 0.25, 0.22];

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
        willChange: "transform",
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
      {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map((y, i) => (
        <path
          key={`l${i}`}
          d={`M${53 - i * 0.3} ${y} Q${38 - i * 1.2} ${y - 4} ${22 - i * 1.8} ${y + 2}`}
          stroke={THEME.gold}
          strokeWidth="0.5"
          fill="none"
          strokeOpacity={opacitiesLeft[i]}
        />
      ))}
      {/* Barbas derecha */}
      {[15, 30, 45, 58, 70, 82, 95, 108, 122, 135, 148, 160, 172, 182].map((y, i) => (
        <path
          key={`r${i}`}
          d={`M${55 + i * 0.3} ${y} Q${68 + i * 1.0} ${y - 3} ${80 + i * 1.5} ${y + 3}`}
          stroke={THEME.gold}
          strokeWidth="0.5"
          fill="none"
          strokeOpacity={opacitiesRight[i]}
        />
      ))}
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
      <path
        d="M42 30A18 18 0 0 1 24 12a18 18 0 1 0 18 18z"
        stroke={THEME.gold}
        strokeWidth="0.8"
        fill="none"
        strokeOpacity="0.55"
      />
      <path
        d="M46 14 L47 17 L50 18 L47 19 L46 22 L45 19 L42 18 L45 17Z"
        fill={THEME.gold}
        fillOpacity="0.5"
      />
      <circle cx="38" cy="8" r="0.8" fill={THEME.gold} fillOpacity="0.4" />
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
  const [scrollY, setScrollY] = useState(0);

  // Efecto Parallax pasivo de alto rendimiento (usando requestAnimationFrame)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{
        background: [
          "radial-gradient(ellipse 65% 55% at 8% 22%, rgba(168,210,190,0.30) 0%, transparent 65%)",
          "radial-gradient(ellipse 75% 45% at 52% 8%,  rgba(185,215,200,0.18) 0%, transparent 60%)",
          "radial-gradient(ellipse 50% 55% at 12% 58%, rgba(155,195,172,0.16) 0%, transparent 62%)",
          "radial-gradient(ellipse 45% 38% at 88% 82%, rgba(196,150,138,0.07) 0%, transparent 55%)",
          "linear-gradient(165deg, #F1F6F3 0%, #FCFBFA 50%, #FAF7F5 100%)",
        ].join(", "),
      }}
    >
      {/* ══════════════════════════════════════════════════════
          PLUMAS PNG CON EFECTO PARALLAX CONTROLADO
          Se desplazan levemente al hacer scroll multiplicando scrollY
          willChange: transform le avisa al navegador que use la GPU
      ══════════════════════════════════════════════════════ */}

      {/* Pluma grande — filo izquierdo */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          left: "-12%",
          width: "clamp(160px, 24vw, 360px)",
          height: "auto",
          opacity: 0.55,
          mixBlendMode: "multiply",
          transform: `rotate(-6deg) translateY(${scrollY * 0.06}px)`,
          willChange: "transform",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0.15) brightness(0.82) contrast(0.9)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />

      {/* Pluma mediana — filo derecho superior */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position: "absolute",
          top: "-3%",
          right: "-10%",
          width: "clamp(140px, 20vw, 300px)",
          height: "auto",
          opacity: 0.45,
          mixBlendMode: "multiply",
          transform: `rotate(8deg) scaleX(-1) translateY(${scrollY * -0.04}px)`,
          willChange: "transform",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0.12) brightness(0.85) contrast(0.88)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />

      {/* Pluma inferior derecha — zona SobreMi */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-8%",
          width: "clamp(120px, 16vw, 240px)",
          height: "auto",
          opacity: 0.35,
          mixBlendMode: "multiply",
          transform: `rotate(-12deg) scaleX(-1) translateY(${scrollY * 0.03}px)`,
          willChange: "transform",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0.1) brightness(0.88) contrast(0.85)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />

      {/* Pluma extra — filo izquierdo inferior */}
      <img
        src="/assets/plumas1.png"
        alt="" aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-8%",
          width: "clamp(110px, 14vw, 200px)",
          height: "auto",
          opacity: 0.28,
          mixBlendMode: "multiply",
          transform: `rotate(10deg) translateY(${scrollY * -0.05}px)`,
          willChange: "transform",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          filter: "saturate(0.12) brightness(0.90) contrast(0.85)",
        }}
        onError={e => { e.target.style.display = "none"; }}
      />

      {/* ── PLUMAS SVG LINE-ART (Acomodadas con leve desfase) ── */}
      <FeatherLineSVG
        size={200}
        opacity={0.22}
        style={{
          top: "38%",
          left: "-6%",
          transform: `rotate(-5deg) translateY(${scrollY * 0.04}px)`,
        }}
      />

      <FeatherLineSVG
        size={175}
        opacity={0.18}
        style={{
          top: "5%",
          right: "-6%",
          transform: `rotate(8deg) scaleX(-1) translateY(${scrollY * -0.03}px)`,
        }}
      />

      {/* ── LUNAS DORADAS ── */}
      <MoonSVG size={52} style={{ top: "6%", right: "14%", opacity: 0.55 }} />
      <MoonSVG size={36} style={{ bottom: "18%", left: "7%", opacity: 0.32, transform: "scaleX(-1)" }} />

      {/* ── ESTRELLAS DISCRETAS ── */}
      <StarGold size={10} style={{ top: "12%", left: "22%", opacity: 0.5 }} />
      <StarGold size={12} style={{ top: "8%", right: "28%", opacity: 0.45 }} />
      <StarGold size={8}  style={{ top: "32%", right: "6%", opacity: 0.32 }} />
      <StarGold size={9}  style={{ bottom: "22%", right: "16%", opacity: 0.35 }} />
      <StarGold size={11} style={{ bottom: "14%", left: "16%", opacity: 0.38 }} />

      {/* ── Blob verde extra acuarela ── */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: "15%",
          left: "0",
          width: "30%",
          height: "40%",
          background: "radial-gradient(circle at top left, rgba(168,205,185,0.22), transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* ── Contenedor de Hijos ── */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}