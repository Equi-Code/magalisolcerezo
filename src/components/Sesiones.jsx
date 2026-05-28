import { useState } from "react";
import {
  Globe,
  Video,
  Clock,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { THEME, T } from "../constants";
import { MoonDeco, StarDeco, Feather, FadeIn, SectionTagLeft } from "./ui";
import { getNextBusinessDays } from "../utils/calendar";

// ↓ REEMPLAZAR con el número real de WhatsApp de Magalí (formato internacional sin +)
const WA_NUMBER = "5491100000000";

export default function Sesiones({ lang }) {
  const t = T[lang].sesiones;
  const tr = (es, en) => (lang === "es" ? es : en);
  const availableDays = getNextBusinessDays(4, lang);
  const [name, setName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const isReady = name.trim() && selectedDay && selectedTime;

  const handleWhatsApp = () => {
    if (!isReady) return;
    const msg = t.waMsg(name.trim(), selectedDay, selectedTime);
    window.open(
      `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const pillBase = {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "0.84rem",
    fontWeight: 600,
    padding: "0.45rem 1rem",
    borderRadius: "0.75rem",
    cursor: "pointer",
    transition: "all 0.2s",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1.1rem",
    borderRadius: "0.85rem",
    border: `1px solid ${THEME.border}`,
    fontFamily: "'Quicksand', sans-serif",
    color: THEME.text,
    fontSize: "0.9rem",
    backgroundColor: THEME.bg,
    outline: "none",
    marginBottom: "1.2rem",
  };

  return (
    <section
      id="sesiones"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: `${THEME.rose}0A` }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <MoonDeco className="absolute top-10 right-20" />
        <StarDeco className="absolute bottom-20 left-24" />
        <Feather
          filter="saturate(0.55) brightness(1.0) hue-rotate(10deg)"
          style={{
            bottom: "-8%", right: "5%",
            width: "min(260px, 32vw)",
            opacity: 0.16,
            transform: "rotate(-8deg)",
          }}
        />
      </div>





<div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_560px] gap-24 xl:gap-32 items-start">

  {/* ── Info ── */}
  <FadeIn delay={0.1}>
    <div className="max-w-xl">
      <SectionTagLeft label={t.tag} />

      <h2
        style={{
          fontFamily:
            "'Cormorant Garamond', 'Playfair Display', serif",
          color: THEME.text,
          fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: 1.1,
        }}
        className="mb-7"
      >
        {t.title}
      </h2>

      <p
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: THEME.textMuted,
          lineHeight: 1.95,
          marginBottom: "2.4rem",
          fontSize: "1rem",
        }}
      >
        {t.description}
      </p>

      <div className="flex flex-col gap-4">
        {t.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: THEME.sage,
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "0.96rem",
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    </div>
  </FadeIn>

  {/* ── Widget de reserva ── */}
  
  <FadeIn delay={0.25}>
    <div
      className="rounded-[2rem] p-10 max-w-[500px] w-full ml-auto"
      style={{
        backgroundColor: THEME.card,
        border: `1px solid ${THEME.border}`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.05)`,
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: THEME.text,
          fontSize: "2rem",
          fontStyle: "italic",
          marginBottom: "2rem",
        }}
      >
        {t.bookTitle}
      </h3>

      {/* Nombre */}
      <input
        type="text"
        placeholder={t.namePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          ...inputStyle,
          padding: "0.95rem 1.2rem",
          marginBottom: "1.8rem",
        }}
      />

      {/* Días */}
      <p
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: THEME.textMuted,
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.8rem",
        }}
      >
        {t.selectDay}
      </p>

      <div className="flex flex-wrap gap-3 mb-7">
        {availableDays.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDay(d)}
            style={{
              ...pillBase,
              padding: "0.7rem 1.1rem",
              border:
                selectedDay === d
                  ? `1px solid ${THEME.sage}`
                  : `1px solid ${THEME.border}`,
              backgroundColor:
                selectedDay === d
                  ? `${THEME.sage}15`
                  : "transparent",
              color:
                selectedDay === d
                  ? THEME.sage
                  : THEME.textMuted,
            }}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Horarios */}
      <p
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: THEME.textMuted,
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.8rem",
        }}
      >
        {t.selectTime}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {t.times.map((tt) => (
          <button
            key={tt}
            onClick={() => setSelectedTime(tt)}
            style={{
              ...pillBase,
              padding: "0.7rem 1rem",
              border:
                selectedTime === tt
                  ? `1px solid ${THEME.rose}`
                  : `1px solid ${THEME.border}`,
              backgroundColor:
                selectedTime === tt
                  ? `${THEME.rose}15`
                  : "transparent",
              color:
                selectedTime === tt
                  ? THEME.rose
                  : THEME.textMuted,
            }}
          >
            {tt}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={handleWhatsApp}
        disabled={!isReady}
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "1rem",
          fontFamily: "'Quicksand', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#fff",
          backgroundColor: isReady
            ? THEME.sage
            : `${THEME.sage}50`,
          cursor: isReady ? "pointer" : "not-allowed",
          boxShadow: isReady
            ? `0 8px 30px ${THEME.sage}30`
            : "none",
          transition: "all 0.25s ease",
        }}
      >
        {t.cta}
      </button>
    </div>
  </FadeIn>

</div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto mt-12 lg:mt-16"
      >
        {[
          {
            icon: Globe,
            titleEs: "Desde cualquier lugar del mundo",
            titleEn: "From anywhere in the world",
            color: THEME.sage,
          },
          {
            icon: Video,
            titleEs: "Vía Zoom o Meet",
            titleEn: "Via Zoom or Meet",
            color: THEME.rose,
          },
          {
            icon: Clock,
            titleEs: "Horarios flexibles",
            titleEn: "Flexible schedules",
            color: THEME.gold,
          },
          {
            icon: Shield,
            titleEs: "Espacio seguro y confidencial",
            titleEn: "Safe & confidential space",
            color: THEME.sage,
          },
        ].map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-3xl p-5 text-center backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.72)",
              border: `1px solid ${THEME.border}`,
              boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{
                background: `${benefit.color}10`,
                border: `1px solid ${benefit.color}30`,
              }}
            >
              <benefit.icon
                className="w-6 h-6"
                style={{ color: benefit.color }}
              />
            </div>

            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.text,
                fontWeight: 600,
                fontSize: "0.9rem",
                lineHeight: 1.5,
              }}
            >
              {tr(benefit.titleEs, benefit.titleEn)}
            </p>
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
}
