import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco, FadeIn, scrollTo } from "./ui";
import DividerLeaves from "./DividerLeaves";

export default function FAQ({ lang }) {
  const t = T?.[lang]?.faq;

  const [open, setOpen] = useState(null);

  if (!t) return null;



  return (



    <div
      id="faq"
      className="relative pt-24 pb-10 px-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #EFF3EF 0%, #FCFBFA 100%)",
      }}
    >


      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-40" />
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20" />
        <StarDeco className="absolute top-1/4 left-1/4 w-3 h-3" />
        <StarDeco className="absolute top-3/4 right-1/3 w-2 h-2" />
        <StarDeco className="absolute top-1/3 right-1/4 w-4 h-4" />
        <MoonDeco className="absolute bottom-1/4 left-1/3" />
      </div>

      <div className="max-w-3xl mx-auto">


        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="font-sans text-xs uppercase tracking-[0.35em] font-semibold"
            style={{ color: "#C9A96E" }}
          >
            ✦ &nbsp; {t.tag}
          </span>

          <h2
            className="font-serif text-4xl md:text-5xl font-light mt-3"
            style={{ color: "#2D2924" }}
          >
            {t.title}
          </h2>

          <div className="flex justify-center items-center gap-4 mt-5">
            <div
              style={{
                width: 70,
                height: 1,
                background: "rgba(201,169,110,.35)",
              }}
            />

            <span
              style={{
                color: THEME.gold,
                fontSize: "1rem",
              }}
            >
              ✦
            </span>

            <div
              style={{
                width: 70,
                height: 1,
                background: "rgba(201,169,110,.35)",
              }}
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-3">
          {t.faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border:
                  open === i
                    ? "1px solid rgba(201,169,110,0.3)"
                    : "1px solid rgba(201,169,110,0.12)",

                background:
                  open === i
                    ? "linear-gradient(180deg,#FFFFFF,#FAF7F3)"
                    : "#FDFCFA",

                boxShadow:
                  open === i
                    ? "0 4px 24px rgba(138,158,138,0.1)"
                    : "0 2px 8px rgba(45,41,36,0.03)",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  className="font-sans text-sm font-semibold pr-4"
                  style={{ color: "#2D2924" }}
                >
                  {faq.q}
                </span>

                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background:
                      open === i
                        ? "#C9A96E"
                        : "rgba(201,169,110,0.12)",

                    color:
                      open === i
                        ? "#FDFCFA"
                        : "#C9A96E",

                    transform:
                      open === i
                        ? "rotate(45deg)"
                        : "rotate(0deg)",

                    fontSize: 18,
                    fontWeight: 300,
                    transition: "all .35s ease",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="accordion-content transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: open === i ? "300px" : "0",
                }}
              >
                <div className="px-6 pb-6">
                  <div
                    className="w-full h-px mb-4"
                    style={{
                      background:
                        "rgba(201,169,110,0.15)",
                    }}
                  />

                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "#6B5E54" }}
                  >
                    {faq.a}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p
            style={{
              color: THEME.textMuted,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {t.searchPlaceholder}
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-5 px-7 py-3 rounded-full transition-all hover:scale-105"
            style={{
              background: THEME.sage,
              color: "#fff",
            }}
          >
            {t.bookBtn}
          </button>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <DividerLeaves />
        </div>


      </div>

    </div>


  );
}
