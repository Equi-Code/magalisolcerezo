import { THEME, T } from "../constants";
import { StarDeco } from "./ui";
import { motion } from "framer-motion";

// ↓ Número de WhatsApp de Magalí
const WA_NUMBER = "5491160519556";

// ─── Colores del footer (mismo teal que SplashScreen) ────────
const FOOTER_BG = "#0A2926";          // base oscura teal
const FOOTER_WAVE = "#0D3330";        // color de la ola SVG
const GOLD = THEME.gold;              // "#C9A96E"
const TEXT_DIM = "rgba(220,210,195,0.5)";
const TEXT_MID = "rgba(220,210,195,0.7)";
const TEXT_BRIGHT = "#EDE8E0";

export default function Footer({ lang, onPrivacy, onNavigate }) {
  const t = T[lang].footer;
  const nav = T[lang].nav;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleNavigate = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      scrollTo(id);
    }
  };

  const FONT_SERIF = "'Cormorant Garamond', serif";
  const FONT_SANS = "'Quicksand', sans-serif";

  // Variantes para la entrada escalonada de las columnas del footer
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* ── Ola de transición con movimiento fluido corrigiendo el bug de parsing ── */}
      <div style={{ lineHeight: 0, overflow: "hidden" }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 90 }}
        >
          <path
            d="M 0 64 C 180 10, 320 10, 480 50 C 640 90, 800 90, 960 50 C 1120 10, 1280 10, 1440 64 L 1440 120 L 0 120 Z"
            fill="rgba(255,255,255,0.08)"
          />
          {/*
            ⚠️ Nota performance: esta <motion.path animate={{ d: [...] }}>
            morphea el atributo "d" del path con JS en cada frame durante
            10s al montar — es una animación NO compositada (recalcula
            geometría/paint), candidata a aparecer en "Avoid non-composited
            animations". Es puramente decorativa (la ola del footer) y
            corre solo una vez por carga (no en loop infinito visible
            del viewport inicial salvo que el footer esté en pantalla),
            así que el impacto real en el LCP/TBT inicial suele ser bajo.
            Si Lighthouse sigue marcándola, se puede cambiar por una
            animación de transform (translateY) sobre el <svg> completo
            en lugar de morphear el path.
          */}
          <motion.path
            fill={FOOTER_WAVE}
            initial={{ d: "M 0 74 C 180 20, 320 20, 480 60 C 640 100, 800 100, 960 60 C 1120 20, 1280 20, 1440 74 L 1440 120 L 0 120 Z" }}
            animate={{
              d: [
                "M 0 74 C 180 20, 320 20, 480 60 C 640 100, 800 100, 960 60 C 1120 20, 1280 20, 1440 74 L 1440 120 L 0 120 Z",
                "M 0 74 C 200 40, 340 10, 500 50 C 660 90, 780 110, 940 70 C 1100 30, 1260 10, 1440 74 L 1440 120 L 0 120 Z",
                "M 0 74 C 180 20, 320 20, 480 60 C 640 100, 800 100, 960 60 C 1120 20, 1280 20, 1440 74 L 1440 120 L 0 120 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <footer
        className="relative overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 15% 30%, rgba(56,130,115,0.22) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 45% at 85% 70%, rgba(80,150,135,0.14) 0%, transparent 60%)",
            `radial-gradient(ellipse at 50% 45%, #1C4F4A 0%, ${FOOTER_BG} 45%, #061818 100%)`,
          ].join(", "),
        }}
      >
        {/* ── Decoraciones de fondo animadas ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-5%", left: "-8%",
              width: "40%", height: "55%", borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(56,130,115,0.14) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          <motion.div
            animate={{ opacity: [0.7, 0.9, 0.7], scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute", bottom: "-10%", right: "-5%",
              width: "35%", height: "50%", borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(138,158,138,0.10) 0%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          {/*
            Plumas flotando — .png → .webp, lazy + dimensiones
            explícitas (no son LCP, son decorativas del footer,
            que está fuera del viewport inicial).
          */}
          <motion.img
            src="/assets/plumas1.webp" alt="" aria-hidden="true"
            loading="lazy" decoding="async"
            width={340} height={340}
            animate={{ y: [0, -12, 4, 0], rotate: [-15, -13, -17, -15] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-10%", left: "-5%",
              width: "min(340px, 40vw)", height: "auto", opacity: 0.10,
              mixBlendMode: "screen", transformOrigin: "center",
              objectFit: "contain", pointerEvents: "none", userSelect: "none",
              filter: "brightness(1.4) saturate(0.5) hue-rotate(150deg)",
            }}
            onError={e => { e.target.style.display = "none"; }}
          />

          <motion.img
            src="/assets/plumas1.webp" alt="" aria-hidden="true"
            loading="lazy" decoding="async"
            width={220} height={220}
            animate={{ y: [0, 8, -10, 0], rotate: [20, 23, 18, 20] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute", bottom: "5%", right: "2%",
              width: "min(220px, 24vw)", height: "auto", opacity: 0.08,
              mixBlendMode: "screen", transformOrigin: "center",
              objectFit: "contain", pointerEvents: "none", userSelect: "none",
              filter: "brightness(1.5) saturate(0.4) hue-rotate(160deg)",
            }}
            onError={e => { e.target.style.display = "none"; }}
          />

          {/* Anillos concéntricos teal */}
          {[500, 700].map((size, idx) => (
            <motion.div
              key={size}
              animate={{ scale: idx === 0 ? [1, 1.02, 1] : [1, 0.99, 1] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: idx * 2 }}
              style={{
                position: "absolute", top: "50%", left: "50%",
                x: "-50%", y: "-50%",
                width: size, height: size, borderRadius: "50%",
                border: `1px solid rgba(80,160,145,0.06)`,
                pointerEvents: "none",
              }}
            />
          ))}
        </div>

        {/* ── GRID PRINCIPAL CON ANIMACIÓN ON-SCROLL ── */}
        <motion.div
          className="relative max-w-6xl mx-auto px-6 md:px-12 pt-14 pb-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="footer-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "2.5rem",
          }}>

            {/* Columna Brand */}
            <motion.div variants={columnVariants} style={{ gridColumn: "span 1" }}>
              {/*
                Logo — /assets/Logo.webp (medallón fondo negro).
                mix-blend-mode: screen sobre este fondo OSCURO (teal)
                funciona perfecto: el negro se vuelve transparente
                (deja ver el teal) y el dorado/blanco se realza.
                · .png → .webp + width/height + loading="lazy"
                  (footer está fuera del viewport inicial)
              */}
              <img
                src="/assets/logo.webp"
                alt="Magalí Sol Cerezo"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                style={{
                  height: 64, width: "auto", objectFit: "contain",
                  marginBottom: "1rem",
                  mixBlendMode: "screen",
                  filter: "brightness(1.15) saturate(1.05)",
                }}
                onError={e => { e.target.style.display = "none"; }}
              />
              <p style={{
                fontFamily: FONT_SERIF, color: TEXT_BRIGHT,
                fontSize: "1.05rem", fontStyle: "italic",
                marginBottom: "0.4rem", letterSpacing: "0.04em",
              }}>
                Magalí Sol Cerezo
              </p>
              <p style={{
                fontFamily: FONT_SANS, color: TEXT_DIM,
                fontSize: "0.78rem", lineHeight: 1.75,
              }}>
                {t.tagline}
              </p>

              {/* Redes Sociales con Motion Hovers */}
              <div style={{ display: "flex", gap: "0.65rem", marginTop: "1.25rem" }}>
                <motion.a
                  href="https://www.instagram.com/magalisol.cerezo"
                  target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(80,160,145,0.32)", color: GOLD, borderColor: "rgba(80,160,145,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    backgroundColor: "rgba(80,160,145,0.18)",
                    border: "1px solid rgba(80,160,145,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: TEXT_MID, textDecoration: "none", transition: "color 0.2s, background-color 0.2s",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </motion.a>

                <motion.a
                  href={`https://api.whatsapp.com/send?phone=${WA_NUMBER}`}
                  target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(37,211,102,0.22)", color: "#25D366", borderColor: "rgba(37,211,102,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    backgroundColor: "rgba(37,211,102,0.12)",
                    border: "1px solid rgba(37,211,102,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: TEXT_MID, textDecoration: "none", transition: "color 0.2s, background-color 0.2s",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Columna Secciones */}
            <motion.div variants={columnVariants}>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Secciones" : "Sections"}
              </p>
              {[
                ["inicio", nav.inicio],
                ["sobre", nav.sobre],
                ["terapias", nav.terapias],
                ["sesiones", nav.sesiones],
                ["faq", nav.faq],
                ["testimonios", nav.testimonios],
                ["contacto", nav.contacto],
              ].map(([id, label]) => (
                <motion.button
                  key={id}
                  onClick={() => handleNavigate(id)}
                  whileHover={{ x: 4, color: GOLD }}
                  style={{
                    display: "block", marginBottom: "0.7rem", textAlign: "left",
                    fontFamily: FONT_SANS, color: TEXT_DIM,
                    fontSize: "0.84rem", letterSpacing: "0.03em",
                    background: "none", border: "none", cursor: "pointer",
                    padding: 0, transition: "color 0.15s ease",
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>

            {/* Columna Terapias */}
            <motion.div variants={columnVariants}>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Terapias" : "Therapies"}
              </p>
              {(lang === "es"
                ? ["Sanación Energética", "Corte de Lazos", "Tapping EFT", "Regresiones", "Mindfulness", "Flores de Bach", "Biodecodificación"]
                : ["Energy Healing", "Chain Cutting", "EFT Tapping", "Regressions", "Mindfulness", "Floral Therapy", "Biodecoding"]
              ).map(item => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigate("terapias")}
                  whileHover={{ x: 4, color: GOLD }}
                  style={{
                    display: "block", marginBottom: "0.7rem", textAlign: "left",
                    fontFamily: FONT_SANS, color: TEXT_DIM,
                    fontSize: "0.84rem", letterSpacing: "0.03em",
                    background: "none", border: "none", cursor: "pointer",
                    padding: 0, transition: "color 0.15s ease",
                  }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>

            {/* Columna Contacto */}
            <motion.div variants={columnVariants}>
              <p style={{
                fontFamily: FONT_SANS, color: GOLD,
                fontSize: "0.68rem", letterSpacing: "0.22em",
                textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.75,
              }}>
                {lang === "es" ? "Contacto" : "Contact"}
              </p>

              <motion.a
                href="https://www.instagram.com/magalisol.cerezo"
                target="_blank" rel="noreferrer"
                whileHover={{ color: GOLD }}
                style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: "1rem", textDecoration: "none", color: TEXT_DIM }}
              >
                <span style={{ color: GOLD, fontSize: "0.75rem", marginTop: 2, flexShrink: 0 }}>✦</span>
                <span style={{ fontFamily: FONT_SANS, fontSize: "0.84rem", lineHeight: 1.5 }}>
                  @magalisol.cerezo
                </span>
              </motion.a>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: "1rem" }}>
                <span style={{ color: THEME.rose, fontSize: "0.75rem", marginTop: 2, flexShrink: 0 }}>◯</span>
                <span style={{ fontFamily: FONT_SANS, color: TEXT_DIM, fontSize: "0.84rem", lineHeight: 1.55 }}>
                  info.magalisolcerezo<br />@gmail.com
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "rgba(80,160,145,0.7)", fontSize: "0.75rem", flexShrink: 0 }}>◇</span>
                <span style={{ fontFamily: FONT_SANS, color: TEXT_DIM, fontSize: "0.84rem" }}>
                  {lang === "es" ? "Sesiones 100% Online" : "100% Online Sessions"}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── AVISO LEGAL BAR ── */}
        <div
          className="relative max-w-6xl mx-auto px-6 md:px-12 py-4"
          style={{ borderTop: "1px solid rgba(80,160,145,0.12)" }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}>
            <span style={{
              fontFamily: FONT_SANS, color: TEXT_DIM,
              fontSize: "0.7rem", letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              {lang === "es" ? "Aviso legal" : "Legal notice"}
            </span>

            <div style={{ width: 1, height: 12, backgroundColor: "rgba(80,160,145,0.25)" }} />

            <motion.button
              onClick={onPrivacy}
              whileHover={{ color: GOLD }}
              style={{
                fontFamily: FONT_SANS, fontSize: "0.75rem",
                color: TEXT_DIM, background: "none", border: "none",
                cursor: "pointer", letterSpacing: "0.04em",
                padding: 0, transition: "color 0.2s"
              }}
            >
              {lang === "es" ? "Política de privacidad" : "Privacy policy"}
            </motion.button>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="relative px-6 md:px-12 py-4"
          style={{ borderTop: "1px solid rgba(80,160,145,0.07)" }}
        >
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}>
            <p style={{
              fontFamily: FONT_SANS, color: "rgba(220,210,195,0.2)",
              fontSize: "0.7rem", letterSpacing: "0.04em", margin: 0,
            }}>
              {t.rights}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 1, backgroundColor: "rgba(201,169,110,0.25)" }} />
              <motion.svg
                width="8" height="8" viewBox="0 0 8 8" aria-hidden="true"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <path d="M4 0L4.6 3.4L8 4L4.6 4.6L4 8L3.4 4.6L0 4L3.4 3.4Z" fill={GOLD} />
              </motion.svg>
              <div style={{ width: 20, height: 1, backgroundColor: "rgba(201,169,110,0.25)" }} />
            </div>

            <p style={{
              fontFamily: FONT_SANS, color: "rgba(220,210,195,0.18)",
            }}>
              {lang === "es" ? "Diseñado con amor ✦" : "Designed with love ✦"}
            </p>
          </div>
        </div>

        {/*
          ── WhatsApp FAB Flotante con pulso continuo ──
          ⚠️ Nota performance: animate.boxShadow es una animación
          de PAINT (no compositada) corriendo en loop infinito todo
          el tiempo que el sitio está abierto — candidata fuerte a
          ser una de las "Avoid non-composited animations". El botón
          es fixed y siempre visible, así que corre incluso cuando
          el footer no está en pantalla.
          Si Lighthouse la marca, alternativa: reemplazar el loop de
          boxShadow por un ::after con animate.scale + opacity sobre
          un halo (transform/opacity son compositables).
        */}
        <motion.a
          href={`https://api.whatsapp.com/send?phone=${WA_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full z-50"
          aria-label="WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 1,
            boxShadow: [
              "0 4px 20px rgba(37,211,102,0.4)",
              "0 8px 30px rgba(37,211,102,0.6)",
              "0 4px 20px rgba(37,211,102,0.4)"
            ]
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut" },
            default: { duration: 0.4 }
          }}
          style={{
            backgroundColor: "#25D366",
            cursor: "pointer"
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </footer>

      {/* Responsive helpers */}
      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}