// import { useState } from "react";
// import { THEME, T } from "../constants";
// import { StarDeco, MoonDeco, CircleDeco } from "./ui";
// import ConstellationDivider from "./ConstellationDivider";
// import { motion, AnimatePresence } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
//   },
// };

// const starConfig = [
//   { top: "25%", left: "25%", size: "w-3 h-3", duration: 3, delay: 0 },
//   { bottom: "33%", right: "33%", size: "w-2 h-2", duration: 4, delay: 1 },
//   { top: "12%", right: "20%", size: "w-4 h-4", duration: 3.5, delay: 0.5 },
// ];

// export default function SobreMi({ lang }) {
//   const t = T[lang].sobre;
//   const cardColors = [THEME.sage, THEME.rose, THEME.gold];
  
//   // Estado para controlar cuál punto del acordeón está expandido (por defecto el primero)
//   const [expandedIndex, setExpandedIndex] = useState(0);

//   return (
//     <section id="sobre" className="py-20 px-6 md:px-12 relative overflow-hidden bg-transparent">

      
      
//       {/* ════════ DECORACIONES DE FONDO ════════ */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
//         <CircleDeco className="absolute -top-10 -right-10 w-72 h-72 opacity-30" />
//         <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-15" />

        

//         {/* Estrellas Titilantes */}
//         {starConfig.map((star, idx) => (
//           <motion.div
//             key={idx}
//             className="absolute"
//             style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom }}
//             animate={{ opacity: [0.2, 0.7, 0.2] }}
//             transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <StarDeco className={star.size} />
//           </motion.div>
//         ))}

//         {/* Luna Flotante */}
//         <motion.div
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-16 left-12"
//         >
//           <MoonDeco />
//         </motion.div>

//         {/* Pluma Principal */}
//         <motion.img
//           initial={{ opacity: 0, x: 50, rotate: 15 }}
//           whileInView={{ opacity: 0.5, x: 0, rotate: 6 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           src="/assets/plumas.png"
//           alt=""
//           aria-hidden="true"
//           className="absolute top-[18%] -right-[4%] w-[min(300px,38vw)] select-none pointer-events-none object-contain scale-x-[-1] mix-blend-multiply"
//           onError={e => { e.target.style.display = "none"; }}
//         />

//         {/* Luna y estrellas */}
//         <motion.img
//           initial={{ opacity: 0, x: -30, y: 20 }}
//           whileInView={{ opacity: 0.4, x: 0, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
//           src="/assets/luna_y_estrellas__1_.png"
//           alt=""
//           aria-hidden="true"
//           className="absolute -bottom-[6%] -left-[3%] w-[min(260px,32vw)] select-none pointer-events-none object-contain mix-blend-multiply"
//           onError={e => { e.target.style.display = "none"; }}
//         />
//       </div>

//       {/* ════════ CONTENIDO PRINCIPAL ════════ */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-1">

//         {/* Columna Izquierda: Imagen */}
//         <motion.div
//           className="relative flex justify-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div 
//             className="w-[min(300px,70vw)] aspect-[0.72] rounded-full overflow-hidden"
//             style={{
//               border: `2px solid ${THEME.gold}40`,
//               boxShadow: `0 0 0 8px ${THEME.rose}14, 0 20px 50px rgba(196,150,138,0.18)`,
//               backgroundColor: `${THEME.rose}18`,
//             }}
//           >
//             <img
//               src="/assets/FotoSobreMi.JPG"
//               alt="Magalí Sol Cerezo"
//               className="w-full h-full object-cover object-center saturate-[0.85] brightness-[1.02]"
//             />
//           </div>

//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5, y: 15 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.6 }}
//             className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full flex flex-col items-center shadow-md border"
//             style={{ backgroundColor: THEME.card, borderColor: THEME.border }}
//           >
//             <div className="italic text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", color: THEME.gold }}>
//               ✦
//             </div>
//             <div className="text-[0.7rem] mt-0.5 tracking-wider font-medium" style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.textMuted }}>
//               Lic. Psicología
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Columna Derecha: Contenido */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//           className="flex flex-col"
//           style={{ fontFamily: "'Quicksand', sans-serif" }}
//         >
//           {/* Tag */}
//           <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
//             <div className="h-[1px]" style={{ width: 28, backgroundColor: THEME.gold }} />
//             <span className="text-[0.75rem] tracking-[0.18em] uppercase font-semibold" style={{ color: THEME.gold }}>
//               {t.tag}
//             </span>
//           </motion.div>

//           {/* Título */}
//           <motion.h2 
//             variants={itemVariants}
//             className="mb-1 font-normal leading-tight text-[clamp(2.2rem,4vw,3.2rem)]"
//             style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: THEME.text }}
//           >
//             {t.title}
//           </motion.h2>

//           {/* Rol */}
//           <motion.p variants={itemVariants} className="mb-6 text-[0.85rem] tracking-widest uppercase font-medium" style={{ color: THEME.gold }}>
//             {t.role}
//           </motion.p>

//           {/* Párrafos Principales (FIJOS de nuevo) */}
//           <motion.div variants={itemVariants} className="space-y-4 mb-6 text-[0.97rem] leading-relaxed" style={{ color: THEME.textMuted }}>
//             {[t.p1, t.p2, t.p3].map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}
//           </motion.div>

//           {/* ── ACORDEÓN DINÁMICO (Reemplazo interactivo para image_c51535.png) ── */}
//           <motion.div variants={containerVariants} className="mb-8 flex flex-col gap-2">
//             {t.points?.map((item, index) => {
//               const isExpanded = expandedIndex === index;
//               const colorBase = cardColors[index % cardColors.length];
              
//               return (
//                 <motion.div 
//                   key={item.title} 
//                   variants={itemVariants}
//                   onClick={() => setExpandedIndex(isExpanded ? null : index)}
//                   className="p-3.5 rounded-xl border transition-all cursor-pointer select-none"
//                   style={{ 
//                     backgroundColor: isExpanded ? `${colorBase}08` : "transparent",
//                     borderColor: isExpanded ? `${colorBase}50` : `${THEME.border}40`,
//                   }}
//                   whileHover={{ x: 4 }}
//                 >
//                   <div className="flex gap-[0.9rem] items-center">
//                     {/* Círculo dinámico de la lista */}
//                     <motion.div 
//                       className="w-2.5 h-2.5 rounded-full flex-shrink-0"
//                       style={{ background: colorBase }}
//                       animate={{ scale: isExpanded ? [1, 1.3, 1] : 1 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                     <h4 
//                       className="font-semibold text-[1.05rem] flex-1 transition-colors"
//                       style={{ color: isExpanded ? THEME.text : THEME.textMuted }}
//                     >
//                       {item.title}
//                     </h4>
//                     {/* Indicador sutil de apertura */}
//                     <span className="text-xs opacity-40">{isExpanded ? "✕" : "＋"}</span>
//                   </div>

//                   {/* Animación del texto interior con colapso de altura */}
//                   <motion.div
//                     initial={false}
//                     animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
//                     transition={{ duration: 0.35, ease: "easeInOut" }}
//                     className="overflow-hidden pl-6"
//                   >
//                     <p className="pt-2 leading-relaxed text-[0.94rem]" style={{ color: THEME.textMuted }}>
//                       {item.text}
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>

//           {/* Cards Grid */}
//           <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
//             {t.cards?.map(item => (
//               <motion.div
//                 key={item.title}
//                 variants={itemVariants}
//                 whileHover={{ y: -6, scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}
//                 transition={{ type: "spring", stiffness: 400, damping: 22 }}
//                 className="p-4 min-h-[105px] rounded-xl bg-white/80 backdrop-blur-md border shadow-sm cursor-default"
//                 style={{ borderColor: `${item.color}25` }}
//               >
//                 <div 
//                   className="w-8 h-8 rounded-full flex items-center justify-center mb-3 text-base"
//                   style={{ background: `${item.color}15`, color: item.color }}
//                 >
//                   {item.icon}
//                 </div>
//                 <div className="font-bold text-[0.85rem] mb-1" style={{ color: THEME.text }}>
//                   {item.title}
//                 </div>
//                 <div className="text-[0.75rem] leading-normal" style={{ color: THEME.textMuted }}>
//                   {item.subtitle}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Button */}
//           <motion.div variants={itemVariants} className="mt-8">
//             <motion.button
//               whileHover={{ scale: 1.04, boxShadow: `0 8px 24px ${THEME.rose}50` }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" })}
//               className="px-8 py-3.5 rounded-full font-semibold cursor-pointer border-none text-[0.88rem] text-white tracking-wide"
//               style={{
//                 backgroundColor: THEME.rose,
//                 boxShadow: `0 4px 20px ${THEME.rose}30`,
//               }}
//             >
//               {t.cta}
//             </motion.button>
//           </motion.div>

//         </motion.div>
//       </div>

//       {/* Separador */}
//       <div className="mt-14">
//         <ConstellationDivider fromColor="transparent" toColor="transparent" />
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { THEME, T } from "../constants";
import { StarDeco, MoonDeco, CircleDeco } from "./ui";
import ConstellationDivider from "./ConstellationDivider";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  },
};

const starConfig = [
  { top: "25%", left: "25%", size: "w-3 h-3", duration: 3, delay: 0 },
  { bottom: "33%", right: "33%", size: "w-2 h-2", duration: 4, delay: 1 },
  { top: "12%", right: "20%", size: "w-4 h-4", duration: 3.5, delay: 0.5 },
];

export default function SobreMi({ lang }) {
  // Consumimos el objeto correcto según el idioma activo
  const t = T[lang]?.sobre || {};
  const cardColors = [THEME.sage, THEME.rose, THEME.gold];
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="sobre" className="py-20 px-6 md:px-12 relative overflow-hidden bg-transparent">
      
      {/* ════════ DECORACIONES GENERALES DE FONDO ════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <CircleDeco className="absolute -bottom-20 -left-20 w-96 h-96 opacity-15" />

        {/* Estrellas Titilantes */}
        {starConfig.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <StarDeco className={star.size} />
          </motion.div>
        ))}

        {/* Luna Flotante */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-12"
        >
          <MoonDeco />
        </motion.div>
      </div>

      {/* ════════ CONTENIDO PRINCIPAL ════════ */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-1">

        {/* Columna Izquierda: Imagen y Elementos de Soporte Visual */}
        <motion.div
          className="relative flex justify-center md:justify-end pr-0 md:pr-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Círculo difuminado de fondo */}
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            style={{ backgroundColor: THEME.rose }}
          />

          {/* Pluma Decorativa */}
          <motion.img
            initial={{ opacity: 0, x: -30, rotate: -10 }}
            whileInView={{ opacity: 0.45, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            src="/assets/plumas.png"
            alt=""
            aria-hidden="true"
            className="absolute -top-[10%] -left-[5%] w-[180px] select-none pointer-events-none object-contain mix-blend-multiply z-0"
            onError={e => { e.currentTarget.style.display = "none"; }}
          />

          {/* Contenedor de la Imagen Principal */}
          <div className="relative z-10">
            <div 
              className="w-[min(290px,65vw)] aspect-[0.74] rounded-full overflow-hidden"
              style={{
                border: `2px solid ${THEME.gold}35`,
                boxShadow: `0 0 0 8px ${THEME.rose}12, 0 20px 45px rgba(196,150,138,0.15)`,
                backgroundColor: `${THEME.rose}15`,
              }}
            >
              <img
                src="/assets/FotoSobreMi.JPG"
                alt={t.title || "Magalí Sol Cerezo"}
                className="w-full h-full object-cover object-center saturate-[0.9] brightness-[1.01]"
              />
            </div>

            {/* Badge de la foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full flex flex-col items-center shadow-sm border whitespace-nowrap backdrop-blur-md"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.85)", borderColor: THEME.border }}
            >
              <div className="text-[0.68rem] tracking-widest font-semibold uppercase" style={{ fontFamily: "'Quicksand', sans-serif", color: THEME.gold }}>
                ✦ {lang === "es" ? "Lic. Psicología" : "Psychologist"}
              </div>
            </motion.div>
          </div>

          {/* Luna y estrellas decorativas secundarias inferiores */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.35, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            src="/assets/luna_y_estrellas__1_.png"
            alt=""
            aria-hidden="true"
            className="absolute -bottom-[12%] right-[5%] w-[140px] select-none pointer-events-none object-contain mix-blend-multiply z-0"
            onError={e => { e.currentTarget.style.display = "none"; }}
          />
        </motion.div>

        {/* Columna) Derecha: Contenido */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col text-left"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <div className="h-[1px]" style={{ width: 28, backgroundColor: THEME.gold }} />
            <span className="text-[0.75rem] tracking-[0.18em] uppercase font-semibold" style={{ color: THEME.gold }}>
              {t.tag}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h2
            variants={itemVariants}
            className="mb-1 font-normal leading-tight text-[clamp(2.2rem,4vw,3.2rem)]"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", color: THEME.text }}
          >
            {t.title}
          </motion.h2>

          {/* Rol */}
          <motion.p variants={itemVariants} className="mb-6 text-[0.85rem] tracking-widest uppercase font-medium" style={{ color: THEME.gold }}>
            {t.role}
          </motion.p>

          {/* Párrafos Principales */}
          <motion.div variants={itemVariants} className="space-y-4 mb-6 text-[0.97rem] leading-relaxed" style={{ color: THEME.textMuted }}>
            {[t.p1, t.p2, t.p3].map((p, i) => p && (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* ── ACORDEÓN DINÁMICO (Mapea 'points' de constants.jsx) ── */}
          <motion.div variants={containerVariants} className="mb-8 flex flex-col gap-2">
            {t.points?.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const colorBase = cardColors[index % cardColors.length];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="p-3.5 rounded-xl border transition-all cursor-pointer select-none"
                  style={{
                    backgroundColor: isExpanded ? `${colorBase}05` : "transparent",
                    borderColor: isExpanded ? `${colorBase}40` : `${THEME.border}30`,
                  }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex gap-[0.9rem] items-center">
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: colorBase }}
                      animate={{ scale: isExpanded ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <h4
                      className="font-semibold text-[1.02rem] flex-1 transition-colors"
                      style={{ color: isExpanded ? THEME.text : THEME.textMuted }}
                    >
                      {item.title}
                    </h4>
                    <span className="text-xs opacity-40">{isExpanded ? "✕" : "＋"}</span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden pl-6"
                  >
                    <p className="pt-2 leading-relaxed text-[0.94rem]" style={{ color: THEME.textMuted }}>
                      {item.text}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── FORMACIÓN ACADÉMICA (Mapea 'formacion' de constants.jsx) ── */}
          {t.formacion && (
            <motion.div variants={itemVariants} className="mb-2">
              <div className="flex items-center gap-2 mb-3.5">
                <div className="h-[1px]" style={{ width: 20, backgroundColor: `${THEME.gold}80` }} />
                <span className="text-[0.7rem] tracking-[0.16em] uppercase font-semibold" style={{ color: THEME.textMuted }}>
                  {lang === "es" ? "Formación" : "Education"}
                </span>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {t.formacion.map((item, i) => {
                  const color = cardColors[i % cardColors.length];
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border bg-white/40"
                      style={{ borderColor: `${color}20` }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full flex-shrink-0 text-[0.85rem]"
                        style={{ width: 32, height: 32, background: `${color}12`, color }}
                      >
                        🎓
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-semibold text-[0.85rem] leading-snug truncate" style={{ color: THEME.text }}>
                          {item.title}
                        </h5>
                        <p className="text-[0.74rem] leading-snug truncate" style={{ color: THEME.textMuted }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* Botón de Acción Principal */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: `0 8px 24px ${THEME.rose}40` }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 rounded-full font-semibold cursor-pointer border-none text-[0.88rem] text-white tracking-wide"
              style={{
                backgroundColor: THEME.rose,
                boxShadow: `0 4px 20px ${THEME.rose}25`,
              }}
            >
              {t.cta}
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      {/* Separador */}
      <div className="mt-14">
        <ConstellationDivider fromColor="transparent" toColor="transparent" />
      </div>
    </section>
  );
}