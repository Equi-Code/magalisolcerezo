import { THEME, T } from "../constants";
import { scrollTo } from "./ui";
import {
    Moon,
    Feather,
    Calendar,
    Heart,
    Mail
} from "lucide-react";
import ConstellationDivider from "./ConstellationDivider";

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
        <section className="py-6 w-full bg-transparent">
            <div className="
                grid 
                grid-cols-1 
                xs:grid-cols-2 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-5 
                gap-4 
                px-4 
                md:px-8 
                max-w-7xl 
                mx-auto
            ">
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
                                flex 
                                flex-col 
                                items-center 
                                justify-between
                                p-4 md:p-6
                                h-auto md:min-h-[250px]
                            "
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.72)",
                                backdropFilter: "blur(14px)",
                                border: `1px solid ${THEME.border}`,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                            }}
                        >
                            {/* Contenedor superior para agrupar icono + textos */}
                            <div className="w-full flex flex-col items-center">
                                {/* Círculo del icono optimizado para móvil/desktop */}
                                <div
                                    className="
                                        w-14 h-14 md:w-16 md:h-16
                                        rounded-full
                                        mb-2 md:mb-4
                                        flex items-center justify-center
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                    style={{
                                        backgroundColor: card.soft,
                                    }}
                                >
                                    {/* Icono más grande: pasó de size 20 a 24 (md:26) */}
                                    <Icon
                                        className="w-6 h-6 md:w-[26px] md:h-[26px]"
                                        strokeWidth={1.4}
                                        color={card.color}
                                    />
                                </div>

                                {/* Título de la tarjeta */}
                                <h3
                                    className="text-base md:text-lg font-medium px-1"
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        color: THEME.text,
                                        minHeight: "44px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {card.title}
                                </h3>

                                {/* Texto de la descripción */}
                                <p
                                    className="text-[0.80rem] md:text-[0.84rem] mt-1 px-1"
                                    style={{
                                        fontFamily: "'Quicksand', sans-serif",
                                        color: THEME.textMuted,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {card.text}
                                </p>
                            </div>

                            {/* Flecha indicadora inferior */}
                            <div
                                className="mt-3 transition-transform duration-300 group-hover:translate-x-1"
                                style={{
                                    color: card.color,
                                    fontSize: "1.1rem",
                                }}
                            >
                                →
                            </div>
                        </button>
                    );
                })}
            </div>

                  {/* Separador */}
                  <div className="mt-14">
                    <ConstellationDivider fromColor="transparent" toColor="transparent" />
                  </div>
        </section>
    );
}