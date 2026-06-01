import { THEME } from "../constants";

function MoonSVG({ style = {}, size = 60 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 60 60"
            fill="none"
            style={{ position: "absolute", pointerEvents: "none", ...style }}
        >
            <path
                d="M42 30A18 18 0 0 1 24 12a18 18 0 1 0 18 18z"
                stroke={THEME.gold}
                strokeWidth="1"
                strokeOpacity="0.5"
            />
        </svg>
    );
}

function StarGold({ style = {}, size = 10 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            style={{ position: "absolute", pointerEvents: "none", ...style }}
        >
            <path
                d="M6 0L6.8 5.2L12 6L6.8 6.8L6 12L5.2 6.8L0 6L5.2 5.2L6 0Z"
                fill={THEME.gold}
                fillOpacity="0.5"
            />
        </svg>
    );
}

export default function HeroSection({ children }) {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: [`
    radial-gradient(
      circle at top right,
      rgba(201,169,110,0.12),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(196,150,138,0.10),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      #FCFBFA,
      #F7F0ED,
      #EEF3EE
    )
`
                    ,
                ].join(","),
            }}
        >
            {/* MARCO IZQUIERDO */}
            <img
                src="/assets/rama-left.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    left: 0,
                    top: "3%",
                    height: "94%",
                    width: "auto",
                    opacity: 0.18,
                    objectFit: "contain",
                    pointerEvents: "none",
                }}
            />

            {/* MARCO DERECHO */}
            <img
                src="/assets/rama-right.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: 0,
                    top: "3%",
                    height: "94%",
                    width: "auto",
                    opacity: 0.18,
                    objectFit: "contain",
                    pointerEvents: "none",
                }}
            />

            {/* RAMA SUPERIOR */}
            <img
                src="/assets/rama-top.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 0,
                    left: "10%",
                    width: "280px",
                    opacity: 0.12,
                    pointerEvents: "none",
                }}
            />

            {/* RAMA INFERIOR */}
            <img
                src="/assets/rama-bottom.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: "10%",
                    width: "260px",
                    opacity: 0.12,
                    pointerEvents: "none",
                }}
            />

            {/* LINEA HERO -> CARDS */}
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "15%",
                    width: "70%",
                    height: "1px",
                    background:
                        "linear-gradient(to right, transparent, rgba(201,169,110,.35), transparent)",
                }}
            />

            {/* LINEA CARDS -> SOBRE MI */}
            <div
                style={{
                    position: "absolute",
                    top: "68%",
                    left: "15%",
                    width: "70%",
                    height: "1px",
                    background:
                        "linear-gradient(to right, transparent, rgba(201,169,110,.25), transparent)",
                }}
            />

            {/* LUNAS */}
            <MoonSVG
                size={70}
                style={{
                    top: "4%",
                    right: "10%",
                }}
            />

            <MoonSVG
                size={40}
                style={{
                    bottom: "15%",
                    left: "10%",
                    transform: "scaleX(-1)",
                    opacity: 0.4,
                }}
            />

            {/* ESTRELLAS */}
            <StarGold
                size={10}
                style={{
                    top: "10%",
                    left: "20%",
                }}
            />

            <StarGold
                size={12}
                style={{
                    top: "55%",
                    right: "15%",
                }}
            />

            <StarGold
                size={8}
                style={{
                    bottom: "20%",
                    left: "25%",
                }}
            />

            {/* ACUARELA EXTRA */}
            <div
                style={{
                    position: "absolute",
                    left: "-10%",
                    top: "10%",
                    width: "45%",
                    height: "45%",
                    borderRadius: "999px",
                    background:
                        "radial-gradient(circle, rgba(160,205,185,.25), transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
}