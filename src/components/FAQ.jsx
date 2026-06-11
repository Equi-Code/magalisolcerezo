import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco } from "./ui";
import ConstellationDivider from "./ConstellationDivider"; // Con 'c' minúscula si es el caso
import { motion, AnimatePresence } from "framer-motion"; // ← Importamos framer-motion

export default function FAQ({ lang }) {
  const t = T?.[lang]?.faq;
  const [open, setOpen] = useState(null);

  if (!t) return null;

  // Variantes para la entrada escalonada (stagger) de los acordeones
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div
      id="faq"
      className="relative pt-24 pb-10 px-5 overflow-hidden"
      style={{
        backgroundColor: THEME.bgB,
      }}
    >
      {/* Decorative background con estrellas tintineantes sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }}>
          <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        </motion.div>
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }}>
          <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        </motion.div>
        <motion.div animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3.5, delay: 1, repeat: Infinity }}>
          <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        </motion.div>
        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <MoonDeco className="absolute bottom-1/4 left-1/3" />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto">
        
        {/* Header con fade-in hacia arriba */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span
            className="font-sans text-xs uppercase tracking-[0.35em] font-semibold"
            style={{ color: "#C9A96E" }}
          >
            ✦ &nbsp; {t.tag}
          </span>

          <h2
            className="font-serif text-4xl md:text-5xl font-light mt-3"
            style={{ color: "#2D2924", fontStyle: "italic" }}
          >
            {t.title}
          </h2>

          <div className="flex justify-center items-center gap-4 mt-5">
            <div style={{ width: 70, height: 1, background: "rgba(201,169,110,.35)" }} />
            <span style={{ color: THEME.gold, fontSize: "1rem" }}>✦</span>
            <div style={{ width: 70, height: 1, background: "rgba(201,169,110,.35)" }} />
          </div>
        </motion.div>

        {/* Accordions List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-3"
        >
          {t.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: isOpen ? 0 : -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: isOpen
                    ? "1px solid rgba(201,169,110,0.3)"
                    : "1px solid rgba(201,169,110,0.12)",
                  background: isOpen
                    ? "linear-gradient(180deg,#FFFFFF,#FAF7F3)"
                    : "#FDFCFA",
                  boxShadow: isOpen
                    ? "0 10px 25px rgba(138,158,138,0.08)"
                    : "0 2px 8px rgba(45,41,36,0.03)",
                  transition: "border 0.3s ease, background 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left select-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="font-sans text-sm font-semibold pr-4 transition-colors duration-200"
                    style={{ color: isOpen ? THEME.gold : "#2D2924" }}
                  >
                    {faq.q}
                  </span>

                  {/* Icono + / ✕ Animado */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? "#C9A96E" : "rgba(201,169,110,0.12)",
                      color: isOpen ? "#FDFCFA" : "#C9A96E",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      fontSize: 18,
                      fontWeight: 300,
                      transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)", // efecto spring nativo en CSS
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Contenedor colapsable inteligente con Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.25, delay: 0.05 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }, opacity: { duration: 0.15 } }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div
                          className="w-full h-px mb-4"
                          style={{ background: "rgba(201,169,110,0.15)" }}
                        />
                        <p
                          className="font-sans text-sm leading-relaxed"
                          style={{ color: "#6B5E54" }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer de la sección */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p
            style={{
              color: THEME.textMuted,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {t.searchPlaceholder}
          </p>

          <motion.button
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(138,158,138,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="mt-5 px-7 py-3 rounded-full border-none font-sans font-semibold text-sm cursor-pointer"
            style={{
              background: THEME.sage,
              color: "#fff",
            }}
          >
            {t.bookBtn}
          </motion.button>
        </motion.div>

        {/* Separador de constelación */}
        <div style={{ marginTop: "3rem" }}>
          <ConstellationDivider
            fromColor="transparent"
            toColor="transparent"
          />
        </div>

      </div>
    </div>
  );
}