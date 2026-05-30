import { useState, useEffect } from "react";
import { THEME } from "./constants";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Terapias from "./components/Terapias";
import Sesiones from "./components/Sesiones";
import TestimonialsSlider from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import DividerLeaves from "./components/DividerLeaves";
import HeroSection from "./components/HeroSection";
import QuickCards from "./components/QuickCards";


export default function App() {
  const [lang, setLang] = useState("es");
  const [splashDone, setSplashDone] = useState(false);

  // ── Inyectar Google Fonts + estilos globales ──────────────────────────────
  useEffect(() => {
    // Fonts
    if (!document.getElementById("magali-fonts")) {
      const link = document.createElement("link");
      link.id = "magali-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Quicksand:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }

    // Global reset / scrollbar / selection
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

  return (
    <>
      {/* ── Splash screen ── */}
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      {/* ── Main site (montado desde el inicio, visible tras el splash) ── */}
      <div
        style={{
          backgroundColor: THEME.bg,
          minHeight: "100vh",
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar lang={lang} setLang={setLang} />


        <HeroSection>
          <Hero lang={lang} />
          
          <QuickCards lang={lang} />
          <SobreMi lang={lang} />
        </HeroSection>

        <Terapias lang={lang} />


        <Sesiones lang={lang} />

        <TestimonialsSlider lang={lang} />

        <Contacto lang={lang} />

        <Footer lang={lang} />
      </div>
    </>
  );
}
