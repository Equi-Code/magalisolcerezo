import { Divide } from "lucide-react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, FadeIn, scrollTo } from "./ui";
import DividerLeaves from "./DividerLeaves";

export default function SobreMi({ lang }) {
  const t = T[lang].sobre;

  return (
    <section
      id="sobre"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "transparent" }}
    >

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />
      </div>



      {/* Decoraciones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <StarDeco className="absolute top-12 right-20" />
        <MoonDeco className="absolute bottom-16 left-12" />

        {/* Pluma decorativa */}
        <img
          src="/assets/plumas1.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-8%",
            right: "-3%",
            width: "min(350px, 42vw)",
            opacity: 0.55,
            mixBlendMode: "multiply",
            transform: "rotate(8deg) scaleX(-1)",
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
        {/* Imagen */}

        <div className="relative flex justify-center">
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
            className=" absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full flex flex-col items-center"
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
        </div>


        {/* Texto */}
        <FadeIn delay={0.25}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                style={{
                  width: 28,
                  height: 1,
                  backgroundColor: THEME.gold,
                }}
              />

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
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', serif",
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

            {[t.p1, t.p2, t.p3, t.p4, t.p5, t.p6].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: THEME.textMuted,
                  lineHeight: 1.85,
                  marginBottom: "1.1rem",
                  fontSize: "0.97rem",
                }}
              >
                {p}
              </p>
            ))}

            <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              style={{
                display: "grid",
                
                gap: "1rem",
                marginTop: "2rem",
                transition: "all .35s ease",
                cursor: "default",
              }}
            >

              
              
{t.cards.map((item) => (
  <div
    key={item.title}
    style={{
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(6px)",
      border: `1px solid ${item.color}20`,
      padding: "1rem",
      borderRadius: "1rem",
      transition: "all .3s ease",
      minHeight: "120px",
    }}
  >
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: `${item.color}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.8rem",
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
        marginBottom: "0.25rem",
        fontSize: "0.8rem",
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
  </div>
))}
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("sesiones")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 px-7 py-3 rounded-full font-semibold transition-all"
              style={{
                backgroundColor: THEME.rose,
                color: "#fff",
                fontFamily: "'Quicksand', sans-serif",
                fontSize: "0.88rem",
                boxShadow: `0 4px 20px ${THEME.rose}35`,
              }}
            >
              {t.cta}
            </button>
          </div>
        </FadeIn>
      </div>
      {/* DividerLeaves al final */}
      <div style={{ marginTop: "1.5rem" }}>
        <DividerLeaves />
      </div>
    </section>
  );
}