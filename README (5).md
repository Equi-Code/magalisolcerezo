# Magalí Sol Cerezo — Landing Page

Sitio web one-page bilingüe (ES/EN) para **Magalí Sol Cerezo — Psicóloga Holística**.
React + Tailwind CSS + Framer Motion. Estética "high-tech holístico": acuarelas
verde-turquesa, dorado, plumas y elementos místicos minimalistas.

---

## 🚀 Stack técnico

| Tecnología | Uso |
|---|---|
| **React** (functional components + hooks) | Estructura de la app |
| **Tailwind CSS** | Estilos utilitarios (combinado con `style` inline para theming dinámico) |
| **Framer Motion** | Animaciones (fade-in, stagger, spring, levitación de plumas) |
| **Google Fonts** | Cormorant Garamond (serif) + Quicksand (sans) — inyectadas en `App.jsx` |

No usa React Router — la navegación entre Home y Política de Privacidad es por
estado (`page` en `App.jsx`).

---

## 📁 Estructura de carpetas

```
src/
├── App.jsx                  # Componente raíz — orquesta toda la app
├── constants.jsx            # THEME (colores) + T (textos ES/EN)
└── components/
    ├── SplashScreen.jsx      # Pantalla de carga animada (3.2s)
    ├── Navbar.jsx            # Header fijo, scroll progress, switch idioma
    ├── HeroSection.jsx       # Wrapper con fondo acuarela + plumas (Hero/SobreMi/QuickCards)
    ├── Hero.jsx              # Sección principal — título, CTA, foto
    ├── QuickCards.jsx        # 5 tarjetas de navegación rápida
    ├── SobreMi.jsx           # Biografía, formación, herramientas
    ├── Terapias.jsx          # Grid de 6 terapias + modal de detalle
    ├── Sesiones.jsx          # Banner "Sesiones Online" + modal de reserva
    ├── FAQ.jsx               # Preguntas frecuentes (acordeón)
    ├── Testimonios.jsx       # Carrusel de testimonios
    ├── Contacto.jsx          # Banner de contacto + modal de formulario
    ├── Footer.jsx            # Footer teal + WhatsApp flotante
    ├── PrivacyPolicy.jsx     # Página de política de privacidad
    ├── ConstellationDivider.jsx  # Separador decorativo entre secciones
    ├── DividerLeaves.jsx     # Separador alternativo (botánico)
    ├── WhatsAppButton.jsx    # Botón flotante de WhatsApp
    └── ui.jsx                # Componentes compartidos (StarDeco, MoonDeco, FadeIn, etc.)
```

---

## 🎨 Sistema de diseño

Todo el theming vive en `constants.jsx`, en el objeto `THEME`:

```js
export const THEME = {
  bg:        "#F5F8F6",  // fondo base — crema con tinte teal
  bgA:       "#EAF3EF",  // fondo sección tipo A (Terapias, Testimonios)
  bgB:       "#F4F9F7",  // fondo sección tipo B (Sesiones, Contacto)
  card:      "#FDFCFA",  // tarjetas / superficies blancas
  sage:      "#8A9E8A",  // verde salvia — botones primarios
  rose:      "#C4968A",  // rosa empolvado — acentos secundarios
  gold:      "#C9A96E",  // dorado — detalles, separadores, tags
  teal:      "#2A6B5C",  // teal medio — links activos, navbar
  text:      "#2D2924",  // texto principal
  textMuted: "#7A6E66",  // texto secundario
  border:    "#E8E2DC",  // bordes sutiles
};
```

**Splash y Footer** usan un teal oscuro hardcodeado (`#1C4F4A` → `#0A2926`)
para "cerrar" la paleta — no están en THEME porque son únicos de esos
componentes.

**Tipografías:**
- `'Cormorant Garamond', 'Playfair Display', serif` → títulos (itálica, elegante)
- `'Quicksand', sans-serif` → texto de cuerpo (redondeada, suave)

---

## 🌍 Sistema de traducciones (ES/EN)

Todos los textos están en `constants.jsx`, dentro de `T.es` y `T.en`.
Cada sección tiene su propia clave:

```js
export const T = {
  es: {
    nav: { ... },
    hero: { ... },
    sobre: { ... },
    terapias: { ... },
    testimonios: { ... },
    footer: { ... },
    privacy: { ... },
  },
  en: { /* misma estructura */ },
};
```

Para cambiar un texto: buscar la clave correspondiente en `T.es` (español) y
`T.en` (inglés) y editar el string. **No hay textos hardcodeados en los
componentes** — todo viene de `constants.jsx`.

---

## 🖼️ Assets requeridos

Todas las imágenes van en `/public/assets/`. Lista completa:

| Archivo | Uso | Tratamiento CSS |
|---|---|---|
| `Logo.png` | Logo en Navbar, Footer, Splash | `mix-blend-mode: multiply` (fondo blanco) / `screen` (sobre fondo oscuro) |
| `plumas1.png` | Plumas decorativas (fondo negro) | `mix-blend-mode: multiply` |
| `plumas.png` | Plumas alternativas (fondo blanco) | `mix-blend-mode: multiply` |
| `luna_y_estrellas__1_.png` | Decoración luna+estrellas | `mix-blend-mode: multiply` |
| `foto-magali.jpg` | Foto Hero (oval) | — |
| `FotoSobreMi.JPG` | Foto Sobre Mí (oval) | `saturate(0.85)` |
| `sesiones-laptop.jpg` | Imagen banner Sesiones Online | — |
| `iconos_1` a `iconos_6` `-removebg-preview.png` | Íconos de las 6 terapias | fondo transparente |
| `icon-moon.png`, `icon-feather.png`, `icon-calendar.png`, `icon-heart.png`, `icon-mail.png` | Íconos QuickCards | — |

> Si una imagen falta, todos los componentes tienen `onError` con fallback
> visual (emoji o gradiente) — el sitio no se rompe, solo se ve "genérico"
> hasta subir el archivo real.

---

## 🔧 Configuración pendiente

Buscar y reemplazar antes de publicar:

| Placeholder | Ubicación | Reemplazar por |
|---|---|---|
| `WHATSAPP_NUMBER = "5491100000000"` | `Sesiones.jsx`, `Contacto.jsx` | Número real, formato `549...` sin `+` ni espacios |
| `WA_NUMBER = "5491160519556"` | `Footer.jsx` | Verificar que sea el número correcto |
| `INSTAGRAM_URL` | `Contacto.jsx`, `Footer.jsx` | URL de Instagram real |
| EmailJS / backend del formulario | `Contacto.jsx` → `ContactModal` | Conectar servicio de envío de mails (hay un `// TODO`) |

---

## ▶️ Cómo correr el proyecto

```bash
npm install
npm run dev       # desarrollo local
npm run build     # build de producción
```

---

## 🧩 Páginas / rutas

No hay React Router. La navegación es por estado en `App.jsx`:

- `page === "home"` → landing completa
- `page === "privacy"` → `PrivacyPolicy.jsx` (con su propio Navbar/Footer)

El cambio de página se dispara desde el Footer (`onPrivacy` prop) y vuelve
con el botón "Volver al inicio" (`onBack` prop).

---

## ✏️ Tareas comunes

**Cambiar un texto (ES/EN):** editar `constants.jsx` → `T.es.<sección>` y
`T.en.<sección>`.

**Cambiar un color:** editar `THEME` en `constants.jsx`. Se propaga a toda
la app automáticamente.

**Agregar/quitar una terapia:** editar el array `T[lang].terapias.items` y
el array `THERAPY_META` en `Terapias.jsx` (deben tener el mismo largo e
índices correspondientes).

**Agregar un testimonio:** editar `T[lang].testimonios.items` en
`constants.jsx`.

**Cambiar el número de WhatsApp:** ver tabla "Configuración pendiente"
arriba — hay que cambiarlo en 2-3 archivos distintos.