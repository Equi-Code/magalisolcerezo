import { THEME, T } from "../constants";
import { scrollTo } from "./ui";
import {
    Moon,
    Feather,
    Calendar,
    Heart,
    Mail
} from "lucide-react";


export default function QuickCards({ lang }) {
    const t = T[lang].quickCards;

    const cards = [
        {
            title: t.terapias.title,
            text: t.terapias.text,
            id: "terapias",
            icon: Moon,
            soft: "#e7f0eb",
            color: THEME.sage,
        },
        {
            title: t.sobre.title,
            text: t.sobre.text,
            id: "sobre",
            icon: Feather,
            soft: "#f6e7e7",
            color: THEME.rose,
        },
        {
            title: t.sesiones.title,
            text: t.sesiones.text,
            id: "sesiones",
            icon: Calendar,
            soft: "#e7f0eb",
            color: THEME.sage,
        },
        {
            title: t.testimonios.title,
            text: t.testimonios.text,
            id: "testimonios",
            icon: Heart,
            soft: "#f8ebeb",
            color: THEME.rose,
        },
        {
            title: t.contacto.title,
            text: t.contacto.text,
            id: "contacto",
            icon: Mail,
            soft: "#edf5f2",
            color: THEME.sage,
        },
    ];

    return (
        <section
            className="
group
rounded-[2rem]
p-6
text-center
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
flex
flex-col
items-center
h-full
"
            style={{
                background: "transparent",
            }}
        >
            <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-5
    gap-4
    px-4
    md:px-8
    max-w-7xl
    mx-auto
  "
            >
{cards.map((card, i) => {
  const Icon = card.icon;

  return (
    <button
      key={i}
      onClick={() => scrollTo(card.id)}
  className="
    group
    rounded-[1.75rem]
    text-center
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
  style={{
    backgroundColor: "rgba(255,255,255,0.72)",
    backdropFilter: "blur(14px)",
    border: `1px solid ${THEME.border}`,
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    padding: "1.5rem",
    minHeight: window.innerWidth < 768 ? "180px" : "220px",
  }}
    >
      <div
        className="
    w-12 h-12 md:w-16 md:h-16
    rounded-full
    mx-auto
    mb-3 md:mb-4
    flex items-center justify-center
  "
        style={{
          backgroundColor: card.soft,
        }}
      >
        <Icon
  size={20}
  strokeWidth={1.5}
  color={card.iconColor}
        />
      </div>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: THEME.text,
          fontSize: "1.25rem",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: THEME.textMuted,
          fontSize: "0.82rem",
          lineHeight: 1.6,
          minHeight: "70px",
        }}
      >
        {card.text}
      </p>

      <div
        className="mt-3"
        style={{
          color: card.color,
          fontSize: "1rem",
        }}
      >
        →
      </div>
    </button>
  );
})}
                
            </div>
        </section>
    );
}