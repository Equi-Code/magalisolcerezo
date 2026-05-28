// import { useState } from "react";
// import { THEME, T } from "../constants";
// import { StarDeco, MoonDeco, CircleDeco, Feather, FadeIn, SectionTag } from "./ui";

// export default function Testimonios({ lang }) {
//   const t = T[lang].testimonios;
//   const [active, setActive] = useState(0);

//   return (
//     <section
//       id="testimonios"
//       className="py-24 px-6 md:px-12 relative overflow-hidden"
//       style={{ backgroundColor: THEME.bg }}
//     >
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <StarDeco className="absolute top-16 left-12" />
//         <MoonDeco className="absolute bottom-16 right-16" />
//         <CircleDeco className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10" />
//         {/* Pluma tono celeste frío */}
//         <Feather
//           filter="saturate(0.45) brightness(1.0) hue-rotate(180deg)"
//           style={{
//             bottom: "-6%", right: "-4%",
//             width: "min(340px, 42vw)",
//             opacity: 0.22,
//             transform: "rotate(-10deg) scaleX(-1)",
//           }}
//         />
//       </div>

//       <div className="max-w-4xl mx-auto text-center">
//         <FadeIn>
//           <SectionTag label={t.tag} />
//           <h2 style={{
//             fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//             color: THEME.text,
//             fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
//             fontWeight: 400,
//             fontStyle: "italic",
//           }} className="mb-16">
//             {t.title}
//           </h2>
//         </FadeIn>

//         <FadeIn delay={0.15}>
//           {/* Tarjeta de testimonio */}
//           <div
//             className="rounded-3xl p-10 md:p-14 relative mb-8"
//             style={{
//               backgroundColor: THEME.card,
//               border: `1px solid ${THEME.border}`,
//               boxShadow: `0 8px 40px rgba(0,0,0,0.05)`,
//             }}
//           >
//             {/* Comilla decorativa */}
//             <div style={{
//               position: "absolute",
//               top: "1.5rem",
//               left: "2rem",
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "6rem",
//               lineHeight: 1,
//               color: THEME.gold,
//               opacity: 0.12,
//               fontStyle: "italic",
//               userSelect: "none",
//               pointerEvents: "none",
//             }}>
//               "
//             </div>

//             <p style={{
//               fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//               color: THEME.text,
//               fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
//               fontStyle: "italic",
//               lineHeight: 1.7,
//               fontWeight: 400,
//               position: "relative",
//               zIndex: 1,
//             }} className="mb-6">
//               {t.items[active].text}
//             </p>

//             <div className="flex items-center justify-center gap-3">
//               <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
//               <span style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 color: THEME.gold,
//                 fontSize: "0.8rem",
//                 letterSpacing: "0.12em",
//               }}>
//                 {t.items[active].author}
//               </span>
//               <div style={{ width: 24, height: 1, backgroundColor: THEME.gold }} />
//             </div>
//           </div>

//           {/* Dots de navegación */}
//           <div className="flex justify-center gap-2 flex-wrap">
//             {t.items.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setActive(i)}
//                 style={{
//                   width: i === active ? 24 : 8,
//                   height: 8,
//                   borderRadius: 9999,
//                   backgroundColor: i === active ? THEME.sage : THEME.border,
//                   transition: "all 0.3s ease",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               />
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: 'Magalí me ayudó a reconectar con partes de mí que había olvidado. Su escucha profunda y su calidez crearon un espacio donde pude sanar desde la raíz.',
    author: 'Lucía M.',
    role: 'Cliente desde 2024',
  },
  {
    text: 'Cada sesión es un viaje de autoconocimiento. Magalí tiene una forma única de integrar cuerpo y mente que me permitió soltar bloqueos muy antiguos.',
    author: 'Martín S.',
    role: 'Cliente desde 2023',
  },
  {
    text: 'Encontré en Magalí no solo una profesional excelente, sino un ser humano profundamente empático. Su enfoque holístico transformó mi relación con la ansiedad.',
    author: 'Carolina R.',
    role: 'Cliente desde 2025',
  },
  {
    text: 'Gracias a este proceso pude entender patrones que repetía sin darme cuenta. Magalí me acompañó con tanta presencia y sin juicio, que pude permitirme ser vulnerable.',
    author: 'Sofía L.',
    role: 'Cliente desde 2024',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 bg-[#FDFCFA] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C4968A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['Quicksand'] text-sm uppercase tracking-wider text-[#C9A96E]" style={{ fontWeight: 600 }}>
              Testimonios
            </span>
          </motion.div>
          <motion.h2
            className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl text-[#2D2924]"
            style={{ fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Voces que sanan
          </motion.h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
            <Quote className="w-16 h-16 text-[#C9A96E]/20" fill="currentColor" />
          </div>

          {/* Testimonial Content */}
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-16 min-h-[320px] flex flex-col justify-center relative overflow-hidden border border-[#C9A96E]/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <p
                  className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl text-[#2D2924] leading-relaxed italic"
                  style={{ fontWeight: 500 }}
                >
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="pt-4">
                  <div className="font-['Quicksand'] text-lg text-[#2D2924]" style={{ fontWeight: 700 }}>
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="font-['Quicksand'] text-sm text-[#2D2924]/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#8A9E8A]/30 flex items-center justify-center hover:bg-[#8A9E8A] hover:text-white hover:border-[#8A9E8A] transition-all shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-[#8A9E8A]'
                      : 'w-2 h-2 bg-[#8A9E8A]/30 hover:bg-[#8A9E8A]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white border-2 border-[#8A9E8A]/30 flex items-center justify-center hover:bg-[#8A9E8A] hover:text-white hover:border-[#8A9E8A] transition-all shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

