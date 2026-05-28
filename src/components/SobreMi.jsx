import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, Feather, FadeIn, SectionTagLeft, scrollTo } from "./ui";
import { Award, BookOpen, Heart } from 'lucide-react';

export default function SobreMi({ lang }) {
  const t = T[lang].sobre;

  return (
    <section
      id="sobre"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: `${THEME.sage}0A` }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <StarDeco className="absolute top-12 right-20" />
        <MoonDeco className="absolute bottom-16 left-12" />
        {/* Pluma sutil centrada en la transición */}
        <Feather
          filter="saturate(0.5) brightness(0.95) hue-rotate(15deg)"
          style={{
            top: "-10%", left: "50%",
            width: "min(320px, 40vw)",
            opacity: 0.18,
            transform: "rotate(5deg)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── Imagen en arco ── */}
        <FadeIn delay={0.1}>
          <div className="relative flex justify-center">
            <div style={{
              width: "min(300px, 70vw)",
              aspectRatio: "0.78",
              borderRadius: "9999px 9999px 3rem 3rem",
              overflow: "hidden",
              border: `1px solid ${THEME.border}`,
              boxShadow: `0 16px 50px rgba(138,158,138,0.15)`,
              backgroundColor: `${THEME.rose}18`,
            }}>
              {/*
                ↓ FOTO SECUNDARIA (opcional) — reemplazar src con "/assets/foto-magali-2.jpg"
              */}
              <img
                src="/assets/foto-magali-2.jpg"
                alt="Magalí Sol Cerezo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = `linear-gradient(160deg, ${THEME.rose}30, ${THEME.sage}20)`;
                }}
              />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-6 -right-4 px-5 py-4 rounded-2xl"
              style={{ backgroundColor: THEME.card, boxShadow: `0 8px 30px rgba(0,0,0,0.07)`, border: `1px solid ${THEME.border}` }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", color: THEME.gold, fontSize: "1.1rem", fontStyle: "italic" }}>✦</div>
              <div style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted, fontSize: "0.7rem", marginTop: 2 }}>
                Lic. Psicología
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Texto ── */}
        <FadeIn delay={0.25}>
          <SectionTagLeft label={t.tag} />

          <h2 style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            color: THEME.text,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            fontStyle: "italic",
          }} className="mb-1">
            {t.title}
          </h2>

          <p style={{
            fontFamily: "'Quicksand', sans-serif",
            color: THEME.gold,
            fontSize: "0.82rem",
            letterSpacing: "0.1em",
          }} className="mb-8">
            {t.role}
          </p>

          {[t.p1, t.p2, t.p3].map((p, i) => (
            <p key={i} style={{
              fontFamily: "'Quicksand', sans-serif",
              color: THEME.textMuted,
              lineHeight: 1.85,
              marginBottom: "1.1rem",
              fontSize: "0.97rem",
            }}>
              {p}
            </p>
          ))}

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[
                { icon: Award, label: 'Certificada', sublabel: 'Psicología Integrativa' },
                { icon: BookOpen, label: 'Formación', sublabel: 'Terapia Humanista' },
                { icon: Heart, label: 'Enfoque', sublabel: 'Holístico & Consciente' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-start gap-2 bg-white/60 rounded-2xl p-4 border border-[#C9A96E]/10">
                    <Icon className="w-6 h-6 text-[#8A9E8A]" />
                    <div>
                      <div className="font-['Quicksand'] text-sm text-[#2D2924]" style={{ fontWeight: 700 }}>
                        {item.label}
                      </div>
                      <div className="font-['Quicksand'] text-xs text-[#2D2924]/60">
                        {item.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>



          <button
            onClick={() => scrollTo("sesiones")}
            style={{
              marginTop: "1rem",
              backgroundColor: THEME.rose,
              color: "#fff",
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 600,
              padding: "0.75rem 1.75rem",
              borderRadius: 9999,
              boxShadow: `0 4px 20px ${THEME.rose}35`,
            }}
            className="transition-all hover:opacity-90"
          >
            {t.cta}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
