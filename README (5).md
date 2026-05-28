# ✦ Magalí Sol Cerezo — Landing Page

**Psicóloga Holística · One Page · React + Tailwind CSS**

Landing page de alta conversión y estética holística minimalista para Magalí Sol Cerezo.

---

## 🗂 Estructura del proyecto

```
magali/
├── index.html                  ← Entry point HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx                ← Punto de entrada React
    ├── App.jsx                 ← Raíz: estado de idioma, splash screen
    │
    ├── components/
    │   ├── SplashScreen.jsx    ← Pantalla de carga animada
    │   ├── Navbar.jsx          ← Sticky navbar + switch ES/EN
    │   ├── Hero.jsx            ← Sección principal con CTA
    │   ├── Therapies.jsx       ← Grid de tarjetas de terapias
    │   ├── About.jsx           ← Sección "Sobre mí"
    │   ├── OnlineSessions.jsx  ← Booking con WhatsApp
    │   ├── Testimonials.jsx    ← Carrusel de testimonios
    │   ├── Contact.jsx         ← Formulario + FAQ acordeón
    │   ├── Footer.jsx          ← Footer oscuro con CTA
    │   └── WhatsAppButton.jsx  ← Botón flotante WhatsApp
    │
    ├── utils/
    │   └──calendar.js ← calendario
    │
    └── styles/
        └── index.css           ← Google Fonts + Tailwind base
```

---

## 🎨 Sistema de diseño

| Token          | Valor       | Uso                                  |
|----------------|-------------|--------------------------------------|
| `cream`        | `#FCFBFA`   | Fondo principal                      |
| `card`         | `#FDFCFA`   | Tarjetas y bloques                   |
| `sage`         | `#8A9E8A`   | Verde salvia — acento principal      |
| `rose`         | `#C4968A`   | Rosa empolvado — acento secundario   |
| `gold`         | `#C9A96E`   | Dorado — detalles místico/premium    |
| `pine`         | `#2D2924`   | Gris pino — texto base               |
| `muted`        | `#6B6560`   | Texto secundario suave               |

**Tipografía:**
- Títulos: `Cormorant Garamond` (serif elegante, itálica)
- Cuerpo: `Quicksand` (sans-serif redondo y amigable)

---

## 🚀 Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:3000

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## 🖼 Assets pendientes (reemplazar placeholders)

Los componentes tienen comentarios explícitos indicando dónde colocar cada archivo:

| Archivo             | Ruta de destino         | Componente donde se usa         |
|---------------------|-------------------------|---------------------------------|
| `Logo.png`          | `public/assets/logo.png` | `Navbar.jsx`, `Footer.jsx`, `SplashScreen.jsx` |
| `iconos.png`        | `public/assets/iconos.png` | `About.jsx`                   |
| `plumas1.png`       | `public/assets/plumas1.png` | `Hero.jsx`, `About.jsx`       |
| Foto de Magalí      | `public/assets/magali-foto.jpg` | `Hero.jsx`               |
| Foto sobre mí       | `public/assets/magali-sobre-mi.jpg` | `About.jsx`          |

**Buscar en el código la cadena `─── REEMPLAZÁ` para localizar exactamente cada placeholder.**

---

## 📲 Configuración de WhatsApp

En los componentes `OnlineSessions.jsx`, `WhatsAppButton.jsx` y `Footer.jsx` hay una variable:

```js
const phoneNumber = "5491100000000"; // ─── REEMPLAZÁ con el número real ───
```

Reemplazá `5491100000000` con el número real en formato internacional **sin `+`**:
- Argentina: `549` + código de área + número → ej: `5491155667788`

---

## 📧 Configuración de EmailJS (formulario de contacto)

El formulario de `Contact.jsx` está preparado para conectar con EmailJS.

**Destino final:** `mscerezopiscoholistica@gmail.com`

### Pasos para activarlo:

```bash
npm install @emailjs/browser
```

En `Contact.jsx`:
```js
import emailjs from '@emailjs/browser';

// Reemplazá la función handleSubmit con:
const handleSubmit = () => {
  emailjs.send(
    'TU_SERVICE_ID',
    'TU_TEMPLATE_ID',
    { from_name: form.name, from_email: form.email, therapy: form.therapy, message: form.message },
    'TU_PUBLIC_KEY'
  ).then(() => setSubmitted(true));
};
```

Configurar template en [dashboard.emailjs.com](https://dashboard.emailjs.com) con destino `mscerezopiscoholistica@gmail.com`.

---

## 🌐 Funcionalidades

- ✅ **Splash Screen** animado con atmósfera espiritual
- ✅ **Navbar sticky** con scroll suave y transparencia dinámica
- ✅ **Switch de idioma ES / EN** con textos holísticos en ambos idiomas
- ✅ **Hero Section** con máscara de arco orgánico y CTAs
- ✅ **7 tarjetas de terapias** expandibles con animación on-scroll
- ✅ **Sección Sobre Mí** con imagen en arco y texto dinámico
- ✅ **Booking de sesiones** con selector de día/horario → enlace WhatsApp preformateado
- ✅ **Carrusel de testimonios** con auto-avance y paginación
- ✅ **Formulario de contacto** + **FAQ acordeón** interactivo
- ✅ **Footer oscuro** con CTA y links sociales
- ✅ **Botón flotante WhatsApp** con animación hover expandida
- ✅ **Mobile-first** responsive completo
- ✅ **Fade-in con IntersectionObserver** en cada sección
- ✅ **Decoraciones SVG** sutiles (estrellas, lunas, patrones)

---

## 📱 Responsive

| Breakpoint | Descripción              |
|------------|--------------------------|
| `sm`       | ≥ 640px — tablet pequeña |
| `md`       | ≥ 768px — tablet         |
| `lg`       | ≥ 1024px — desktop       |
| `xl`       | ≥ 1280px — large desktop |

---

*Desarrollado con ❤️ para Magalí Sol Cerezo — Psicóloga Holística*
