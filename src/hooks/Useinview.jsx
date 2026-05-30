// ============================================================
//  useInView.js
//  Custom hook de intersección + componente FadeIn
//  Magalí Sol Cerezo — Sistema de animaciones
//
//  EXPORTS:
//    useInView(threshold?)  →  [ref, inView]  hook puro
//    FadeIn                 →  wrapper component listo para usar
//
//  CÓMO FUNCIONA:
//    Usa IntersectionObserver nativo del browser para detectar
//    cuándo un elemento entra al viewport. Una vez visible,
//    dispara la animación y se desconecta (fire-once, sin re-render).
//    No depende de librerías externas — 0 dependencias.
// ============================================================

import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  useInView — Hook puro
//
//  @param threshold {number}
//    Qué porcentaje del elemento debe ser visible para disparar.
//    0.0 = apenas asoma · 0.5 = mitad visible · 1.0 = completo
//    Default: 0.15 (15% visible = animación arranca antes de llegar)
//
//  @returns [ref, inView]
//    ref    → asignalo con ref={ref} al elemento que querés observar
//    inView → boolean, true cuando el elemento fue visto al menos 1 vez
//
//  EJEMPLO BÁSICO:
//    const [ref, inView] = useInView();
//    return (
//      <div ref={ref} style={{ opacity: inView ? 1 : 0, transition: "opacity 0.8s" }}>
//        Hola mundo
//      </div>
//    );
// ─────────────────────────────────────────────────────────────
export function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // Creamos el observer con la opción threshold
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    // Fire-once: una vez visto, ya no necesitamos seguir observando
                    observer.disconnect();
                }
            },
            { threshold }
        );

        // Empezamos a observar si el ref ya apunta a un elemento
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup: si el componente se desmonta, dejamos de observar
        return () => observer.disconnect();
    }, [threshold]); // Solo re-corre si cambia threshold (casi nunca)

    return [ref, inView];
}

// ─────────────────────────────────────────────────────────────
//  FadeIn — Componente wrapper
//
//  Envuelve cualquier contenido y le aplica un fade-in + slide-up
//  suave cuando entra al viewport.
//
//  PROPS:
//    children   → cualquier JSX
//    delay      → retraso en segundos antes de que empiece (default: 0)
//                 Útil para escalonar elementos en un grid:
//                 items.map((item, i) => <FadeIn delay={i * 0.1}>...)
//    className  → clases de Tailwind adicionales para el div wrapper
//    distance   → cuántos px sube al aparecer (default: 24)
//    duration   → duración de la transición en segundos (default: 0.8)
//    threshold  → hereda el parámetro de useInView (default: 0.15)
//
//  EJEMPLO SIMPLE:
//    <FadeIn>
//      <h2>Título que aparece suave</h2>
//    </FadeIn>
//
//  EJEMPLO CON DELAY ESCALONADO EN GRID:
//    {terapias.map((t, i) => (
//      <FadeIn key={i} delay={i * 0.08}>
//        <TerapiaCard terapia={t} />
//      </FadeIn>
//    ))}
//
//  EJEMPLO CON DISTANCIA Y DURACIÓN CUSTOM:
//    <FadeIn delay={0.3} distance={40} duration={1.2}>
//      <HeroTitle />
//    </FadeIn>
// ─────────────────────────────────────────────────────────────
export const FadeIn = ({
    children,
    delay = 0,
    className = "",
    distance = 24,
    duration = 0.8,
    threshold = 0.15,
}) => {
    const [ref, inView] = useInView(threshold);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                // Estado inicial: invisible y desplazado hacia abajo
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : `translateY(${distance}px)`,

                // Transición suave con easing natural
                transition: [
                    `opacity  ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
                    `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
                ].join(", "),

                // Evita que el estado invisible ocupe espacio visualmente "vacío"
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

// ─────────────────────────────────────────────────────────────
//  FadeInLeft — Variante: entra desde la izquierda
//
//  Ideal para columna izquierda de layouts de 2 columnas
// ─────────────────────────────────────────────────────────────
export const FadeInLeft = ({ children, delay = 0, className = "", distance = 32, duration = 0.9 }) => {
    const [ref, inView] = useInView(0.15);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0px)" : `translateX(-${distance}px)`,
                transition: `opacity ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

// ─────────────────────────────────────────────────────────────
//  FadeInRight — Variante: entra desde la derecha
//
//  Ideal para columna derecha de layouts de 2 columnas
// ─────────────────────────────────────────────────────────────
export const FadeInRight = ({ children, delay = 0, className = "", distance = 32, duration = 0.9 }) => {
    const [ref, inView] = useInView(0.15);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0px)" : `translateX(${distance}px)`,
                transition: `opacity ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};

// ─────────────────────────────────────────────────────────────
//  FadeInScale — Variante: aparece con un leve zoom-in
//
//  Ideal para imágenes, cards destacadas, hero images
// ─────────────────────────────────────────────────────────────
export const FadeInScale = ({ children, delay = 0, className = "", from = 0.95, duration = 0.9 }) => {
    const [ref, inView] = useInView(0.1);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : `scale(${from})`,
                transition: `opacity ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform ${duration}s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
};



