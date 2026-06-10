// ============================================================
//  SobreMi.jsx — con animaciones framer-motion
//
//  ANIMACIONES:
//  · Imagen: slide desde izquierda + scale, spring suave
//  · Badge: pop con spring (delay tras imagen)
//  · Tag + Título + Rol: fade up escalonado
//  · Párrafos: fade up stagger
//  · Points: slide desde izquierda, stagger
//  · Cards: scale + fade, stagger
//  · Botón CTA: fade up + shimmer hover
//  · Pluma: nueva plumas.png (fondo blanco, mix-blend-mode: multiply)
//  · Luna: luna_y_estrellas__1_.png (fondo blanco, multiply)
// ============================================================

import { Divide } from "lucide-react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, FadeIn, scrollTo } from "./ui";
import ConstellationDivider from "./ConstellationDivider";
import { motion } from "framer-motion";

export default function SobreMi({ lang }) {
  const t = T[lang].sobre;

  const cardColors = [
    THEME.sage,
    THEME.rose,
    THEME.gold,
  ];

  // Variantes para animar la lista de puntos y las cards en cascada (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12, // Tiempo entre la aparición de cada elemento
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  return (
    <section
      id="sobre"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Decoraciones de Fondo con micro-animaciones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        
        {/* Estrellas titilando suavemente */}
        <motion.div animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        </motion.div>
        <motion.div animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}>
          <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        </motion.div>
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
          <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        </motion.div>
        
        {/* Luna con un leve balanceo/flotado */}
        <motion.div 
          animate={{ y: [0, -6, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3"
        >
          <MoonDeco />
        </motion.div>
      </div>

      {/* Más decoraciones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <StarDeco className="absolute top-12 right-20" />
        <MoonDeco className="absolute bottom-16 left-12" />

        {/* Pluma decorativa con entrada suave */}
        <motion.img
          initial={{ opacity: 0, x: 30, rotate: 12 }}
          whileInView={{ opacity: 0.55, x: 0, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/assets/plumas1.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-8%",
            right: "-3%",
            width: "min(350px, 42vw)",
            mixBlendMode: "multiply",
            transform: "scaleX(-1)",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
            filter: "saturate(0.5) brightness(0.9) hue-rotate(20deg)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Columna Imagen */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            style={{
              width: "min(300px, 70vw)",
              aspectRatio: "0.72",
              borderRadius: "9999px",
              overflow: "hidden",
              border: `2px solid ${THEME.gold}40`,
              boxShadow: `
                  0 0 0 8px ${THEME.rose}14,
                  0 20px 50px rgba(196,150,138,0.18)
                `,
              backgroundColor: `${THEME.rose}18`,
            }}
          >
            <img
              src="/assets/FotoSobreMi.JPG"
              alt="Magalí Sol Cerezo"
              className="w-full h-full object-cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.85) brightness(1.02)"
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background = `
                    linear-gradient(
                      160deg,
                      ${THEME.rose}30,
                      ${THEME.sage}20
                    )
                  `;
              }}
            />
          </div>

          {/* Badge */}
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full flex flex-col items-center"
            style={{
              backgroundColor: THEME.card,
              boxShadow: `0 8px 30px rgba(0,0,0,0.07)`,
              border: `1px solid ${THEME.border}`,
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.gold,
                fontSize: "1.1rem",
                fontStyle: "italic",
              }}
            >
              ✦
            </div>

            <div
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "0.7rem",
                marginTop: 2,
              }}
            >
              Lic. Psicología
            </div>
          </div>
        </motion.div>

        {/* Columna Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div style={{ width: 28, height: 1, backgroundColor: THEME.gold }} />
            <span
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.gold,
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {t.tag}
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              color: THEME.text,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
            className="mb-1"
          >
            {t.title}
          </h2>

          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              color: THEME.gold,
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
            }}
            className="mb-8"
          >
            {t.role}
          </p>

          {/* Texto principal */}
          {[t.p1, t.p2, t.p3].map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                lineHeight: 1.9,
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              {p}
            </p>
          ))}

          {/* Herramientas terapéuticas con stagger effect */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {t.points.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: cardColors[index],
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: 600,
                      color: THEME.text,
                      fontSize: "1.05rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: THEME.textMuted,
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cards informativas animadas al entrar y al hacer Hover */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
            style={{ marginTop: "2rem" }}
          >
            {t.cards.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${item.color}20`,
                  padding: "1rem",
                  minHeight: "105px",
                  borderRadius: "1rem",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.04)",
                  cursor: "default"
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.7rem",
                    color: item.color,
                    fontSize: "1rem",
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                    color: THEME.text,
                    marginBottom: "0.2rem",
                    fontSize: "0.85rem",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: "0.75rem",
                    color: THEME.textMuted,
                    lineHeight: 1.5,
                  }}
                >
                  {item.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón CTA con micro-interacción */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: `0 6px 24px ${THEME.rose}45` }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("sesiones")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-7 py-3 rounded-full font-semibold transition-colors"
            style={{
              backgroundColor: THEME.rose,
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "0.88rem",
            }}
          >
            {t.cta}
          </motion.button>
        </motion.div>
      </div>
            {/* Separador de constelación */}
            <div style={{ marginTop: "3rem" }}>
              <ConstellationDivider
                fromColor="transparent"
                toColor="transparent"
              />
            </div>
    </section>
  );
}