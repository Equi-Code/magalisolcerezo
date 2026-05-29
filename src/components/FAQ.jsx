// import { useState } from "react";

// const t = {
//   es: {
//     tag: "Preguntas frecuentes",
//     title: "Todo lo que querés saber",
//     faqs: [
//       {
//         q: "¿Cómo se realizan las sesiones?",
//         a: "Todas las sesiones son online, vía Zoom o Google Meet. Podés conectarte desde cualquier lugar del mundo, con tu computadora, tablet o celular. Solo necesitás una conexión estable a internet y un espacio tranquilo y privado.",
//       },
//       {
//         q: "¿Cuánto dura cada sesión?",
//         a: "La duración varía según la terapia. En general, las sesiones individuales tienen una duración de 60 a 90 minutos. Al reservar, te informo exactamente cuánto tiempo necesitamos para tu proceso.",
//       },
//       {
//         q: "¿Cuáles son las formas de pago?",
//         a: "Acepto transferencia bancaria, MercadoPago, PayPal y otras plataformas digitales. El pago se coordina al momento de confirmar el turno. Consultame por opciones para tu país o moneda.",
//       },
//       {
//         q: "¿Necesito experiencia previa en meditación o terapias alternativas?",
//         a: "No es necesario ningún conocimiento previo. Mis sesiones están diseñadas para acompañarte desde donde estés, sea tu primera vez o tengas experiencia previa. Cada proceso es único y a tu ritmo.",
//       },
//       {
//         q: "¿Con qué frecuencia se recomienda hacer las sesiones?",
//         a: "Depende de tu proceso y las terapias que elijas. En general, se recomienda comenzar con sesiones quincenales o mensuales, ajustando según tu evolución. En nuestra primera sesión evaluamos juntas el plan más adecuado para vos.",
//       },
//       {
//         q: "¿Puedo combinar varias terapias?",
//         a: "¡Absolutamente! De hecho, muchas veces el abordaje más efectivo es integrador. Trabajo con una mirada holística que combina diferentes herramientas según lo que cada persona necesita en su proceso.",
//       },
//     ],
//   },
//   en: {
//     tag: "Frequently asked questions",
//     title: "Everything you want to know",
//     faqs: [
//       {
//         q: "How are the sessions conducted?",
//         a: "All sessions are online, via Zoom or Google Meet. You can connect from anywhere in the world, with your computer, tablet or phone. You only need a stable internet connection and a quiet, private space.",
//       },
//       {
//         q: "How long does each session last?",
//         a: "Duration varies by therapy. Individual sessions generally last 60 to 90 minutes. When booking, I will inform you exactly how much time we need for your process.",
//       },
//       {
//         q: "What are the payment options?",
//         a: "I accept bank transfer, MercadoPago, PayPal and other digital platforms. Payment is coordinated when confirming the appointment. Ask me about options for your country or currency.",
//       },
//       {
//         q: "Do I need prior experience in meditation or alternative therapies?",
//         a: "No prior knowledge is needed. My sessions are designed to accompany you from wherever you are, whether it's your first time or you have prior experience. Each process is unique and at your own pace.",
//       },
//       {
//         q: "How often are sessions recommended?",
//         a: "It depends on your process and the therapies you choose. Generally, it is recommended to start with bi-weekly or monthly sessions, adjusting according to your evolution. In our first session we will evaluate together the most suitable plan for you.",
//       },
//       {
//         q: "Can I combine multiple therapies?",
//         a: "Absolutely! In fact, the most effective approach is often integrative. I work with a holistic perspective that combines different tools according to what each person needs in their process.",
//       },
//     ],
//   },
// };

// 

import { useState } from "react";
import { THEME, T } from "../constants";

export default function FAQ({ lang }) {
  const t = T?.[lang]?.faq;

  const [open, setOpen] = useState(null);

  if (!t) return null;

  return (
    <div
      className="py-24 px-5"
      style={{
        background:
          "linear-gradient(180deg, #EFF3EF 0%, #FCFBFA 100%)",
      }}
    >
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

          <span className="gold-line mt-5" />
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

                background: "#FDFCFA",

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

                    fontSize: 16,
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

      </div>
    </div>
  );
}
