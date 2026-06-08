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
import DividerLeaves from "./components/DividerLeaves";
import HeroSection from "./components/HeroSection";
import QuickCards from "./components/QuickCards";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/Privacypolicy";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [lang, setLang] = useState("es");
  const [splashDone, setSplashDone] = useState(false);
  const [page, setPage] = useState("home");


  const navigateToSection = (id) => {
    console.log("App recibió:", id);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };



  useEffect(() => {
    console.log("APP LANG:", lang);
  }, [lang]);

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

  if (page === "privacy") {
    return (
<PrivacyPolicy
  lang={lang}
  setLang={setLang}
  onBack={goToHome}
  onNavigate={navigateToSection}
/>
    );
  }

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


        <OnlineSessions lang={lang} />


        <FAQ lang={lang} />

        <TestimonialsSlider lang={lang} />

        <Contacto lang={lang} />

        <Footer lang={lang}
          lang={lang}
          onPrivacy={goToPrivacy}
          onNavigate={navigateToSection} />


        <WhatsAppButton />

      </div>
    </>
  );
}
