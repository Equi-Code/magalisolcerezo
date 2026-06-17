import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco } from "./ui";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const t = T[lang].hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 75px)", backgroundColor: "transparent" }}
    >
      {/* ── Background decorations y Plumas Flotantes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />

        {/*
          Pluma 1 — superior derecha.
          · .png → .webp (más liviana)
          · loading="lazy" + decoding="async": NO es el LCP
            (la foto principal lo es), así que no debe competir
            por ancho de banda en la carga inicial.
          · animate.rotate/y son `transform` → ya compositados,
            no aparecen en "Avoid non-composited animations".
        */}
        <motion.img
          src="/assets/plumas1.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={500}
          height={500}
          initial={{ opacity: 0, x: 20, rotate: 5 }}
          animate={{
            opacity: 0.75,
            x: 0,
            rotate: [10, 8, 12, 10],
            y: [0, -10, 5, 0]
          }}
          transition={{
            opacity: { duration: 1.2 },
            x: { duration: 1.2 },
            rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          style={{
            position: "absolute",
            top: "-5%",
            right: "-3%",
            width: "min(500px, 55vw)",
            height: "auto",
            mixBlendMode: "multiply",
            transformOrigin: "center",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "saturate(0.6) brightness(0.88)",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />

        {/* Pluma 2 — inferior izquierda */}
        <motion.img
          src="/assets/plumas1.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={320}
          height={320}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 0.45,
            x: 0,
            y: [0, 8, -6, 0],
            rotate: [-22, -24, -20, -22]
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.2 },
            x: { duration: 1.2, delay: 0.2 },
            y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 9, ease: "easeInOut" }
          }}
          style={{
            position: "absolute",
            bottom: "-2%",
            left: "-5%",
            width: "min(320px, 38vw)",
            height: "auto",
            mixBlendMode: "multiply",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "saturate(0.4) brightness(0.95) hue-rotate(40deg)",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      {/* ── Main Grid Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 md:pt-20 pb-12 md:pb-16 grid md:grid-cols-2 gap-8 md:gap-20 items-center">

        {/* ── COLUMNA TEXTO ── */}
        <motion.div
          className="order-2 md:order-1 flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-xl">
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.text,
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1.05,
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              Magalí Sol Cerezo
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.sage,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontStyle: "italic",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              {t.title}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
              <div style={{ width: "90px", height: "1px", backgroundColor: `${THEME.gold}70` }} />
              <span style={{ color: THEME.gold, fontSize: "1.2rem" }}>♡</span>
              <div style={{ width: "90px", height: "1px", backgroundColor: `${THEME.gold}70` }} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "1.08rem",
                lineHeight: 1.9,
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              {t.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, backgroundColor: "#9AAF9A", boxShadow: `0 12px 35px ${THEME.sage}50` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "0.75rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  backgroundColor: THEME.sage,
                  color: "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: `0 10px 30px ${THEME.sage}35`,
                  transition: "background-color 0.25s ease",
                }}
              >
                {t.cta1}
              </motion.button>

              <motion.button
                onClick={() => document.getElementById("terapias")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, backgroundColor: `${THEME.sage}08`, borderColor: "#9AAF9A" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "0.75rem 2rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  border: `1.5px solid ${THEME.sage}`,
                  backgroundColor: THEME.rose,
                  color: "#fff",
                  fontFamily: "'Quicksand', sans-serif",
                  cursor: "pointer",
                  transition: "border-color 0.25s ease, background-color 0.25s ease",
                }}
              >
                {t.cta2}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* ── COLUMNA IMAGEN PRINCIPAL ── */}
        <div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="relative">
            {/* Contenedor Oval / Espejo */}
            <div
              style={{
                width: "clamp(300px, 88vw, 420px)",
                aspectRatio: "0.72",
                borderRadius: "9999px",
                overflow: "hidden",
                border: `2px solid ${THEME.gold}40`,
                boxShadow: `
                  0 0 0 10px rgba(138,158,138,0.08),
                  0 30px 80px rgba(138,158,138,0.18),
                  0 8px 24px rgba(201,169,110,0.12)
                `,
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Resplandor místico interno */}
              <div
                style={{
                  position: "absolute",
                  width: "450px",
                  height: "450px",
                  borderRadius: "9999px",
                  background: "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/*
                ↓ FOTO PRINCIPAL — LCP del sitio.
                · ya está en .webp ✔
                · width/height explícitos → resuelve "Image elements
                  do not have explicit width and height" + evita CLS
                · fetchpriority="high" (minúscula — React <18.3 no
                  reconoce "fetchPriority" en camelCase y tira warning)
                · decoding="async" → no bloquea el primer paint
              */}
              <img
                src="/assets/FotoHero.webp"
                alt="Magalí Sol Cerezo — Psicóloga Holística"
                width={420}
                height={583}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = `linear-gradient(160deg, ${THEME.sage}30, ${THEME.rose}20, ${THEME.gold}15)`;
                }}
              />

              {/* Overlay sutil degradado sobre la foto */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  filter: "saturate(0.82) brightness(1.03)",
                  background: `linear-gradient(to bottom, transparent 60%, ${THEME.sage}20)`,
                  pointerEvents: "none"
                }}
              />
            </div>

            {/* Badge flotante — "Sesiones Online" */}
            <div
              className="absolute -bottom-2 md:-bottom-4 left-1/2 md:left-auto md:-left-4 -translate-x-1/2 md:translate-x-0 px-4 py-2 md:px-5 md:py-3 rounded-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                backgroundColor: THEME.card,
                boxShadow: `0 8px 30px rgba(0,0,0,0.08)`,
                border: `1px solid ${THEME.border}`,
                whiteSpace: "nowrap"
              }}
            >
              <div style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.sage, fontSize: "0.75rem", fontWeight: 600 }}>
                ✦ {t.badge}
              </div>
            </div>

            {/*
              Logotipo flotante — pluma+luna+sol dorado sobre fondo
              NEGRO (logos_2.png/.webp). mix-blend-mode: screen hace
              que el negro se vuelva transparente y quede solo el
              brillo dorado/crema; opacity 0.6 evita que se "lave".
              · .png → .webp
              · loading="lazy": decorativo, no es LCP
              · width/height explícitos
            */}
            <img
              src="/assets/logos_2.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={56}
              height={56}
              className="absolute -top-6 -right-6 w-14 h-14 opacity-60 object-contain"
              style={{ mixBlendMode: "screen" }}
              // animate={{ rotate: 360 }}
              // transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.2 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}