// import { useState, useEffect } from "react";
// import { THEME } from "./constants";
// import SplashScreen from "./components/SplashScreen";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import SobreMi from "./components/SobreMi";
// import Terapias from "./components/Terapias";
// import OnlineSessions from "./components/Sesiones";
// import TestimonialsSlider from "./components/Testimonios";
// import Contacto from "./components/Contacto";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import QuickCards from "./components/QuickCards";
// import FAQ from "./components/FAQ";
// import PrivacyPolicy from "./components/Privacypolicy";
// import WhatsAppButton from "./components/WhatsAppButton";

// export default function App() {
//   const [lang, setLang] = useState("es");
//   const [splashDone, setSplashDone] = useState(false);
//   const [page, setPage] = useState("home");


//   const navigateToSection = (id) => {
//     console.log("App recibió:", id);

//     setTimeout(() => {
//       document.getElementById(id)?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }, 100);
//   };



//   useEffect(() => {
//     console.log("APP LANG:", lang);
//   }, [lang]);

//   const goToPrivacy = () => {
//     setPage("privacy");
//     window.scrollTo({ top: 0, behavior: "instant" });
//   };

//   const goToHome = () => {
//     setPage("home");
//     window.scrollTo({ top: 0, behavior: "instant" });
//   };

//   // ── Inyectar Google Fonts + estilos globales ──────────────────────────────
//   useEffect(() => {
//     // Fonts
//     if (!document.getElementById("magali-fonts")) {
//       const link = document.createElement("link");
//       link.id = "magali-fonts";
//       link.rel = "stylesheet";
//       link.href =
//         "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Quicksand:wght@400;500;600;700&display=swap";
//       document.head.appendChild(link);
//     }

//     // Global reset / scrollbar / selection
//     if (!document.getElementById("magali-globals")) {
//       const style = document.createElement("style");
//       style.id = "magali-globals";
//       style.textContent = `
//         *, *::before, *::after { box-sizing: border-box; }
//         html { scroll-behavior: smooth; }
//         body { margin: 0; background-color: ${THEME.bg}; }
//         button { background: none; border: none; cursor: pointer; padding: 0; }
//         input, select, textarea { box-sizing: border-box; }
//         input:focus, select:focus, textarea:focus {
//           outline: 2px solid ${THEME.sage}60;
//           outline-offset: 1px;
//         }
//         ::selection { background-color: ${THEME.sage}30; }
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: ${THEME.bg}; }
//         ::-webkit-scrollbar-thumb { background: ${THEME.sage}50; border-radius: 3px; }
//       `;
//       document.head.appendChild(style);
//     }
//   }, []);

//   if (page === "privacy") {
//     return (
// <PrivacyPolicy
//   lang={lang}
//   setLang={setLang}
//   onBack={goToHome}
//   onNavigate={navigateToSection}
// />
//     );
//   }


//   return (

    
//     <>
//       {/* ── Splash screen ── */}
//       {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

//       {/* ── Main site (montado desde el inicio, visible tras el splash) ── */}



//       <div
//         style={{
//           backgroundColor: THEME.bg,
//           minHeight: "100vh",
//           opacity: splashDone ? 1 : 0,
//           transition: "opacity 0.6s ease",
//         }}
//       >
//         <Navbar lang={lang} setLang={setLang} />


//         <HeroSection>
//           <Hero lang={lang} />

//           <QuickCards lang={lang} />
//           <SobreMi lang={lang} />
//         </HeroSection>

//         <Terapias lang={lang} />


//         <OnlineSessions lang={lang} />

        

//         <FAQ lang={lang} />

//         <TestimonialsSlider lang={lang} />

//         <Contacto lang={lang} />

//         <Footer lang={lang}
//           lang={lang}
//           onPrivacy={goToPrivacy}
//           onNavigate={navigateToSection} />


//         <WhatsAppButton />

//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { THEME } from "./constants";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Terapias from "./components/Terapias";
import OnlineSessions from "./components/Sesiones";
import TestimonialsSlider from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import QuickCards from "./components/QuickCards";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/Privacypolicy";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion } from "framer-motion";

export default function App() {
  const [lang, setLang] = useState("es");
  const [splashDone, setSplashDone] = useState(false);
  const [page, setPage] = useState("home");

  const navigateToSection = (id) => {
    // Si estamos en privacidad y tocan un link del navbar, volvemos al home primero
    if (page !== "home") {
      setPage("home");
    }
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  const goToPrivacy = () => {
    setPage("privacy");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const goToHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // ── Inyectar Google Fonts + estilos globales ──────────────────────────────
  useEffect(() => {
    if (!document.getElementById("magali-fonts")) {
      const link = document.createElement("link");
      link.id = "magali-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Quicksand:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }

    if (!document.getElementById("magali-globals")) {
      const style = document.createElement("style");
      style.id = "magali-globals";
      style.textContent = `
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background-color: ${THEME.bg}; }
        button { background: none; border: none; cursor: pointer; padding: 0; }
        input, select, textarea { box-sizing: border-box; }
        input:focus, select:focus, textarea:focus {
          outline: 2px solid ${THEME.sage}60;
          outline-offset: 1px;
        }
        ::selection { background-color: ${THEME.sage}30; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${THEME.bg}; }
        ::-webkit-scrollbar-thumb { background: ${THEME.sage}50; border-radius: 3px; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // ── Renderizado condicional de la página de Privacidad con layout estético ──
  if (page === "privacy") {
    return (
      <div style={{ backgroundColor: THEME.bg, minHeight: "100vh" }} className="relative flex flex-col justify-between">
        <Navbar lang={lang} setLang={setLang} onNavigate={navigateToSection} />
        
        <div className="pt-24 pb-12 flex-grow">
          <PrivacyPolicy
            lang={lang}
            setLang={setLang}
            onBack={goToHome}
            onNavigate={navigateToSection}
          />
        </div>

        <Footer
          lang={lang}
          onPrivacy={goToPrivacy}
          onNavigate={navigateToSection}
        />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <>
      {/* ── Splash screen ── */}
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      {/* ── Main site ── */}
      <div
        style={{
          backgroundColor: THEME.bg,
          minHeight: "100vh",
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar lang={lang} setLang={setLang} onNavigate={navigateToSection} />

        {/* El Hero queda arriba independiente */}
        <HeroSection>
          <Hero lang={lang} />
        </HeroSection>

        {/* ════════════════════════════════════════════════
            CONTENEDOR GLOBAL ENVOLVENTE (Estructura Grid)
            ════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 grid-rows-1 w-full bg-transparent relative">

          {/* CAPA 1: Secciones de contenido (z-10) */}
          <div className="col-start-1 row-start-1 relative z-10 w-full h-full">
            <QuickCards lang={lang} />
            <SobreMi lang={lang} />
            <Terapias lang={lang} />
            <OnlineSessions lang={lang} />
            <FAQ lang={lang} />
            <TestimonialsSlider lang={lang} />
            <Contacto lang={lang} />
          </div>

          {/* ════════════════════════════════════════════════
              CAPA 2: Plumas flotantes — Distribución de 5 puntos
              Asegura cobertura total desde SobreMí hasta Contacto.
              ════════════════════════════════════════════════ */}
          <div className="col-start-1 row-start-1 pointer-events-none overflow-hidden z-20 relative w-full h-full min-h-full">

            {/* ── Pluma 1 — zona SobreMi / QuickCards (Sup. Derecha) ── */}
            <motion.img
              src="/assets/plumas1.png"
              alt="" aria-hidden="true"
              initial={{ opacity: 0, x: 20, rotate: 5 }}
              animate={{
                opacity: 0.75,
                x: 0,
                rotate: [10, 8, 12, 10],
                y: [0, -10, 5, 0],
              }}
              transition={{
                opacity: { duration: 1.2 },
                x:       { duration: 1.2 },
                rotate:  { repeat: Infinity, duration: 8, ease: "easeInOut" },
                y:       { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
              style={{
                position:      "absolute",
                top:           "1.5%",
                right:         "-3%",
                width:         "min(420px, 48vw)",
                mixBlendMode:  "multiply",
                transformOrigin: "center",
                objectFit:     "contain",
                pointerEvents: "none",
                userSelect:    "none",
                filter:        "saturate(0.6) brightness(0.88)",
              }}
              onError={e => { e.target.style.display = "none"; }}
            />

            {/* ── Pluma 2 — zona Terapias (Izquierda Media) ── */}
            <motion.img
              src="/assets/plumas1.png"
              alt="" aria-hidden="true"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 0.40,
                x: 0,
                y:      [0, 8, -6, 0],
                rotate: [-22, -24, -20, -22],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.15 },
                x:       { duration: 1.2, delay: 0.15 },
                y:       { repeat: Infinity, duration: 7, ease: "easeInOut" },
                rotate:  { repeat: Infinity, duration: 9, ease: "easeInOut" },
              }}
              style={{
                position:      "absolute",
                top:           "22%",
                left:          "-5%",
                width:         "min(300px, 36vw)",
                mixBlendMode:  "multiply",
                objectFit:     "contain",
                pointerEvents: "none",
                userSelect:    "none",
                filter:        "saturate(0.4) brightness(0.95) hue-rotate(40deg)",
              }}
              onError={e => { e.target.style.display = "none"; }}
            />

            {/* ── Pluma 3 — zona Sesiones Online / FAQ (Derecha Media) ── */}
            <motion.img
              src="/assets/plumas1.png"
              alt="" aria-hidden="true"
              initial={{ opacity: 0, x: 20, rotate: -10 }}
              animate={{
                opacity: 0.38,
                x: 0,
                rotate: [16, 13, 18, 16],
                y:      [0, -8, 6, 0],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.25 },
                x:       { duration: 1.2, delay: 0.25 },
                rotate:  { repeat: Infinity, duration: 9, ease: "easeInOut" },
                y:       { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
              }}
              style={{
                position:      "absolute",
                top:           "46%",
                right:         "-4%",
                width:         "min(320px, 38vw)",
                mixBlendMode:  "multiply",
                transform:     "scaleX(-1)",
                objectFit:     "contain",
                pointerEvents: "none",
                userSelect:    "none",
                filter:        "saturate(0.45) brightness(0.92)",
              }}
              onError={e => { e.target.style.display = "none"; }}
            />

            {/* ── Pluma 4 — zona Testimonios EXCLUSIVA (Izquierda Baja) ── */}
            <motion.img
              src="/assets/plumas1.png"
              alt="" aria-hidden="true"
              initial={{ opacity: 0, x: -25, rotate: -5 }}
              animate={{
                opacity: 0.42,
                x: 0,
                rotate: [-12, -15, -9, -12],
                y:      [0, 10, -5, 0],
              }}
              transition={{
                opacity: { duration: 1.3, delay: 0.3 },
                x:       { duration: 1.3, delay: 0.3 },
                rotate:  { repeat: Infinity, duration: 8.5, ease: "easeInOut" },
                y:       { repeat: Infinity, duration: 7.5, ease: "easeInOut" },
              }}
              style={{
                position:      "absolute",
                top:           "70%",
                left:          "-3%",
                width:         "min(340px, 40vw)",
                mixBlendMode:  "multiply",
                objectFit:     "contain",
                pointerEvents: "none",
                userSelect:    "none",
                filter:        "saturate(0.5) brightness(0.9) hue-rotate(15deg)",
              }}
              onError={e => { e.target.style.display = "none"; }}
            />

            {/* ── Pluma 5 — zona Contacto (Inferior Derecha/Cierre) ── */}
            <motion.img
              src="/assets/plumas1.png"
              alt="" aria-hidden="true"
              initial={{ opacity: 0, y: 30, rotate: 10 }}
              animate={{
                opacity: 0.45,
                y: [0, 8, -6, 0],
                rotate: [5, 2, 8, 5],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.4 },
                y:       { repeat: Infinity, duration: 7, ease: "easeInOut" },
                rotate:  { repeat: Infinity, duration: 9, ease: "easeInOut" },
              }}
              style={{
                position:      "absolute",
                bottom:        "0.8%",
                right:         "-4%",
                width:         "min(360px, 42vw)",
                mixBlendMode:  "multiply",
                objectFit:     "contain",
                pointerEvents: "none",
                userSelect:    "none",
                filter:        "saturate(0.4) brightness(0.95) hue-rotate(40deg)",
              }}
              onError={e => { e.target.style.display = "none"; }}
            />
          </div>

        </div>

        {/* Footer + WhatsApp flotante */}
        <Footer
          lang={lang}
          onPrivacy={goToPrivacy}
          onNavigate={navigateToSection}
        />

        <WhatsAppButton />
      </div>
    </>
  );
}