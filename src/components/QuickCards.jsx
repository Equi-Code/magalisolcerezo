import { THEME, T } from "../constants";
import { scrollTo } from "./ui";

export default function QuickCards({ lang }) {
  const t = T[lang].quickCards;

  const cards = [
    {
      title: t.terapias.title,
      text: t.terapias.text,
      id: "terapias",
      icon: "/assets/icon-moon.png",
      soft: "#e7f0eb",
    },
    {
      title: t.sobre.title,
      text: t.sobre.text,
      id: "sobre",
      icon: "/assets/icon-feather.png",
      soft: "#f6e7e7",
    },
    {
      title: t.sesiones.title,
      text: t.sesiones.text,
      id: "sesiones",
      icon: "/assets/icon-calendar.png",
      soft: "#e7f0eb",
    },
    {
      title: t.testimonios.title,
      text: t.testimonios.text,
      id: "testimonios",
      icon: "/assets/icon-heart.png",
      soft: "#f8ebeb",
    },
    {
      title: t.contacto.title,
      text: t.contacto.text,
      id: "contacto",
      icon: "/assets/icon-mail.png",
      soft: "#edf5f2",
    },
  ];

  return (
    <section
      className="relative z-20"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, #fcfbf8 100%)",
      }}
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-4
          mt-[-2rem]
          md:mt-[-4rem]
          relative
          z-20
          px-6
          md:px-10
          max-w-6xl
          mx-auto
        "
      >
        {cards.map((card, i) => (
          <button
            key={i}
            onClick={() => scrollTo(card.id)}
            className="
              group
              rounded-[2rem]
              p-6
              text-center
              transition-all
              duration-300
              hover:-translate-y-2
            "
            style={{
              backgroundColor: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(14px)",
              border: `1px solid ${THEME.border}`,
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            {/* Icono */}
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                backgroundColor: card.soft,
              }}
            >
              <img
                src={card.icon}
                alt=""
                className="w-7 h-7 object-contain opacity-80"
              />
            </div>

            {/* Título */}
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: THEME.text,
                fontSize: "1.55rem",
                fontWeight: 500,
              }}
            >
              {card.title}
            </h3>

            {/* Texto */}
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: THEME.textMuted,
                fontSize: "0.92rem",
                lineHeight: 1.7,
              }}
            >
              {card.text}
            </p>

            {/* Flecha */}
            <div
              className="
                mt-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
              style={{
                color: THEME.sage,
                fontSize: "1.2rem",
              }}
            >
              →
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}