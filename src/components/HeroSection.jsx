import { THEME } from "../constants";

export default function HeroSection({ children }) {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: `
          linear-gradient(
            180deg,
            #fdfbf8 0%,
            #fdfbf8 55%,
            #f7f5f2 100%
          )
        `,
            }}
        >
            {/* textura acuarela izquierda */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[32%] opacity-30 pointer-events-none"
                style={{
                    background: `
            radial-gradient(circle at top left,
            rgba(181, 214, 205, 0.45),
            transparent 70%)
          `,
                    filter: "blur(20px)",
                }}
            />

            {/* decoración derecha */}
            <div
                className="absolute right-0 top-0 bottom-0 w-[28%] opacity-20 pointer-events-none"
                style={{
                    background: `
            radial-gradient(circle at center,
            rgba(230, 210, 180, 0.4),
            transparent 70%)
          `,
                    filter: "blur(25px)",
                }}
            />

            {/* estrellas suaves */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-20 left-1/4 text-5xl text-[#caa874]">
                    ✦
                </div>

                <div className="absolute top-80 right-1/4 text-4xl text-[#caa874]">
                    ✦
                </div>

                <div className="absolute bottom-40 left-1/3 text-3xl text-[#caa874]">
                    ✦
                </div>
            </div>

            {children}
        </section>
    );
}