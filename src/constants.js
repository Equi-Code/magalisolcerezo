// ============================================================
// THEME — Paleta de colores centralizada
// ============================================================
export const THEME = {
  bg: "#FCFBFA",
  card: "#FDFCFA",
  sage: "#8A9E8A",
  rose: "#C4968A",
  gold: "#C9A96E",
  text: "#2D2924",
  textMuted: "#7A6E66",
  border: "#E8E2DC",
};

// ============================================================
// TRANSLATIONS — Todos los textos ES / EN
// ============================================================
export const T = {
  es: {
    nav: {
      inicio: "Inicio",
      sobre: "Sobre mí",
      terapias: "Terapias",
      testimonios: "Testimonios",
      contacto: "Contacto",
      reservar: "Reservar sesión",
    },
    hero: {
      subtitle: "Psicóloga Holística",
      title: "Sanar es permitirte volver a habitarte en paz.",
      description:
        "Acompaño tu proceso de sanación para ayudarte a transformar tu energía, manifestar bienestar y reconectar con tu esencia.",
      cta1: "Reservar sesión",
      cta2: "Conocer mis terapias",
    },

    quickCards: {
      terapias: {
        title: "Terapias",
        text: "Conocé todas las terapias y herramientas que pueden ayudarte.",
      },

      sobre: {
        title: "Sobre mí",
        text: "Mi historia, mi propósito y cómo puedo acompañarte.",
      },

      sesiones: {
        title: "Reservar sesión",
        text: "Elegí el día y horario que mejor se adapte a vos.",
      },

      testimonios: {
        title: "Testimonios",
        text: "Experiencias reales de personas que ya transitaron su proceso.",
      },

      contacto: {
        title: "Contacto",
        text: "Escribime por WhatsApp, Instagram o correo electrónico.",
      },
    },



    sobre: {
      tag: "Sobre mí",
      title: "Magalí Sol Cerezo",
      role: "Licenciada en Psicología & Terapeuta Holística",
      p1: "Acompaño a personas en su camino de sanación y transformación personal desde una mirada integradora y consciente.",
      p2: "A través de herramientas terapéuticas como mindfulness, tapping, sanación energética, terapias florales y otras técnicas holísticas, busco ayudarte a recuperar el equilibrio, la claridad y el bienestar emocional.",
      p3: "Creo profundamente que sanar es un proceso personal y único, y mi intención es brindarte un espacio seguro, amoroso y libre de juicios donde puedas reconectar con tu esencia.",
      cta: "Agendá tu sesión",
    },
    terapias: {
      tag: "Terapias",
      title: "Cada proceso es único",
      description:
        "Las terapias buscan ayudarte a liberar emociones, armonizar tu energía y reconectar con tu bienestar físico, emocional y espiritual.",
      items: [
        { icon: "✦", title: "Sanación Energética", short: "Libera energías estancadas y promueve armonía, claridad y bienestar.", full: "La sanación energética ayuda a liberar energías estancadas o de baja vibración, promoviendo armonía, claridad y bienestar. Puede realizarse en personas, viviendas, negocios y animales. Muchas veces, cuando la energía vuelve a fluir, sentimos más liviandad, claridad y equilibrio emocional." },
        { icon: "◇", title: "Corte de Lazos Etéricos", short: "Trabaja energéticamente sobre vínculos y emociones que generan malestar.", full: "El corte de lazos etéricos de apego trabaja a nivel energético sobre vínculos, emociones o situaciones que generan malestar. Especialmente recomendado para procesos de separación, relaciones que afectan el bienestar emocional o momentos de cambio personal." },
        { icon: "◯", title: "Regresión a Vidas Pasadas", short: "Explorá memorias profundas que puedan estar influyendo en tu presente.", full: "Una terapia orientada a explorar memorias profundas que puedan estar influyendo en tu presente. A través de este proceso, muchas personas logran comprender patrones, emociones o bloqueos para iniciar un camino de transformación y sanación." },
        { icon: "✿", title: "Mindfulness & Meditación", short: "Conectá con el presente, reducí el estrés y generá equilibrio emocional.", full: "Prácticas orientadas a conectar con el presente, reducir el estrés y generar mayor equilibrio emocional y mental. Incluye mindfulness, meditación guiada y respiración consciente. Un espacio para volver a vos." },
        { icon: "∿", title: "Tapping (EFT)", short: "Liberación emocional a través de suaves toques en puntos energéticos.", full: "Técnica de liberación emocional que ayuda a trabajar emociones, ansiedad, estrés y bloqueos energéticos a través de suaves toques sobre puntos energéticos del cuerpo. Una herramienta poderosa para acompañar procesos de bienestar emocional." },
        { icon: "✾", title: "Terapias Florales", short: "Flores de Bach, Bush, Saint Germain y California en preparaciones personalizadas.", full: "Las flores trabajan de manera sutil sobre el equilibrio físico, emocional y energético. Trabajo con Flores de Bach, Bush, Saint Germain y California. Cada preparación es personalizada según las necesidades de la persona." },
      ],
      btn: "Leer más",
      btnClose: "Cerrar",
      btnReservar: "Reservar sesión",
    },
    sesiones: {
      tag: "Sesiones Online",
      title: "Desde donde estés",
      description: "Las sesiones online permiten acceder al acompañamiento terapéutico desde cualquier lugar del mundo. Un espacio seguro, confidencial y personalizado.",
      features: ["Atención personalizada", "Espacio seguro y confidencial", "Sesiones por videollamada"],
      bookTitle: "Reservá tu turno",
      namePlaceholder: "Tu nombre",
      times: ["15:00", "16:00", "17:00", "18:00"],
      selectDay: "Seleccioná un día",
      selectTime: "Seleccioná un horario",
      cta: "Confirmar por WhatsApp",
      waMsg: (name, day, time) =>
        `Hola Magalí, mi nombre es ${name}. Me interesa reservar una sesión online para el día ${day} a las ${time}. ¿Está disponible?`,
    },
    testimonios: {
      tag: "Testimonios",
      title: "Palabras que sanan",
      items: [
        { text: "Hoy siento desde mi ser que estoy sanando, con una visión mucho más clara. Gracias por acompañarme en este proceso.", author: "C.M." },
        { text: "Después de meditar sentí mucha paz. Me siento agradecida y sobre todo en calma.", author: "L.P." },
        { text: "La limpieza energética que nos hiciste en el departamento realmente se sintió. Todo se siente mucho más liviano y tranquilo.", author: "A.R." },
        { text: "Cada sesión me deja mucha paz y claridad. Maga sabe acompañar incluso después del encuentro terapéutico.", author: "V.S." },
        { text: "Tu acompañamiento me ayudó muchísimo emocionalmente. Gracias por tu dulzura, dedicación y contención.", author: "M.G." },
        { text: "La meditación que me enviaste me ayudó muchísimo en un momento muy difícil. Sentí alivio y una conexión muy profunda conmigo.", author: "F.T." },
        { text: "Gracias por ayudarme a bajar mil revoluciones y poder ver las situaciones desde otro lugar.", author: "J.N." },
        { text: "Sos un ser de luz realmente. Escucharte me transmite muchísima paz.", author: "S.B." },
      ],
    },
    contacto: {
      tag: "Contacto",
      title: "Comenzá tu proceso",
      description: "Si sentís que es momento de iniciar tu camino de sanación, podés escribirme. Estaré encantada de acompañarte.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      terapiaDefault: "Seleccioná una terapia",
      msgPlaceholder: "¿Qué te gustaría contarme?",
      btn: "Enviar consulta",
      successMsg: "¡Gracias por escribir! Te respondo a la brevedad 🌿",
    },
    faq: {
      tag: "Preguntas frecuentes",
      title: "Todo lo que querés saber",
      faqs: [
        {
          q: "¿Cómo se realizan las sesiones?",
          a: "Las sesiones son 100% online por videollamada (Zoom o Meet). Podés conectarte desde cualquier lugar del mundo."
        },
        {
          q: "¿Cuánto dura una sesión?",
          a: "Cada sesión tiene una duración aproximada de 60 a 90 minutos, dependiendo del proceso y la terapia elegida."
        },
        {
          q: "¿Cuáles son las formas de pago?",
          a: "Acepto transferencia bancaria, Mercado Pago y PayPal para sesiones internacionales. Consultame por los valores actualizados."
        },
        {
          q: "¿Necesito experiencia previa?",
          a: "No es necesaria ninguna experiencia previa. Solo necesitás predisposición y apertura hacia el proceso."
        },
        {
          q: "¿Con qué frecuencia se realizan las sesiones?",
          a: "Esto se define de manera personalizada según cada proceso. Generalmente se trabaja de forma semanal o quincenal."
        }
      ]
    },


    footer: {
      tagline: "Un espacio para volver a vos.",
      instagram: "@magalisol.cerezo",
      rights: "© 2025 Magalí Sol Cerezo. Todos los derechos reservados.",
      ctaTitle: "¿Lista para comenzar tu proceso?",
      ctaSubtitle: "Un espacio para volver a vos — seguro, amoroso y libre de juicios.",
      navLabel: "Secciones",
      therapiesLabel: "Terapias",
      contactLabel: "Contacto",
      onlineLabel: "Sesiones 100% Online",
      designedWith: "Diseñado con amor ✦",
    },
  },


  en: {
    nav: {
      inicio: "Home",
      sobre: "About",
      terapias: "Therapies",
      testimonios: "Testimonials",
      contacto: "Contact",
      reservar: "Book a session",
    },
    hero: {
      subtitle: "Holistic Psychologist",
      title: "Healing is allowing yourself to return home to peace.",
      description: "I accompany your healing journey to help you transform your energy, manifest wellbeing, and reconnect with your essence.",
      cta1: "Book a session",
      cta2: "Explore my therapies",
    },

    quickCards: {
      terapias: {
        title: "Therapies",
        text: "Discover all therapies and healing tools available for you.",
      },

      sobre: {
        title: "About me",
        text: "My story, my purpose, and how I can support you.",
      },

      sesiones: {
        title: "Book a session",
        text: "Choose the day and time that suits you best.",
      },

      testimonios: {
        title: "Testimonials",
        text: "Real experiences from people who went through their healing process.",
      },

      contacto: {
        title: "Contact",
        text: "Reach me through WhatsApp, Instagram or email.",
      },
    },


    sobre: {
      tag: "About",
      title: "Magalí Sol Cerezo",
      role: "Psychologist & Holistic Therapist",
      p1: "I accompany people on their path of healing and personal transformation from an integrative and conscious perspective.",
      p2: "Through therapeutic tools such as mindfulness, tapping, energy healing, floral therapies and other holistic techniques, I help you recover balance, clarity and emotional wellbeing.",
      p3: "I deeply believe that healing is a personal and unique process, and my intention is to offer you a safe, loving and judgment-free space where you can reconnect with your essence.",
      cta: "Schedule your session",
    },
    terapias: {
      tag: "Therapies",
      title: "Each journey is unique",
      description: "These therapies help you release emotions, harmonize your energy, and reconnect with your physical, emotional and spiritual wellbeing.",
      items: [
        { icon: "✦", title: "Energy Healing", short: "Release stagnant energies and promote harmony, clarity and wellbeing.", full: "Energy healing helps release stagnant or low-vibration energies, promoting harmony, clarity and wellbeing. It can be performed on people, homes, businesses and animals." },
        { icon: "◇", title: "Etheric Bond Cutting", short: "Works energetically on bonds and emotions that cause discomfort.", full: "Etheric bond cutting works at an energetic level on bonds, emotions, or situations that cause discomfort. Especially recommended for separation processes or moments of personal change." },
        { icon: "◯", title: "Past Life Regression", short: "Explore deep memories that may be influencing your present.", full: "A therapy aimed at exploring deep memories that may be influencing your present. Many people gain understanding of patterns, emotions, or blocks to begin a path of transformation." },
        { icon: "✿", title: "Mindfulness & Meditation", short: "Connect with the present, reduce stress, and create emotional balance.", full: "Practices aimed at connecting with the present, reducing stress and generating greater emotional and mental balance. Includes mindfulness, guided meditation and conscious breathing." },
        { icon: "∿", title: "Tapping (EFT)", short: "Emotional release through gentle tapping on energy points.", full: "Emotional release technique that helps address emotions, anxiety, stress and energetic blocks through gentle tapping on the body's energy points." },
        { icon: "✾", title: "Floral Therapies", short: "Bach, Bush, Saint Germain and California flower essences, personalized for you.", full: "Flowers work subtly on physical, emotional and energetic balance. I work with Bach Flowers, Bush, Saint Germain and California. Each preparation is personalized." },
      ],
      btn: "Learn more",
      btnClose: "Close",
      btnReservar: "Book session",
    },
    sesiones: {
      tag: "Online Sessions",
      title: "Wherever you are",
      description: "Online sessions allow you to access therapeutic support from anywhere in the world. A safe, confidential and personalized space.",
      features: ["Personalized care", "Safe and confidential space", "Video call sessions"],
      bookTitle: "Book your appointment",
      namePlaceholder: "Your name",
      times: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
      selectDay: "Select a day",
      selectTime: "Select a time",
      cta: "Confirm via WhatsApp",
      waMsg: (name, day, time) =>
        `Hello Magalí, my name is ${name}. I would like to book an online session for ${day} at ${time}. Is it available?`,
    },
    testimonios: {
      tag: "Testimonials",
      title: "Words that heal",
      items: [
        { text: "Today I feel from within that I am healing, with a much clearer vision. Thank you for accompanying me in this process.", author: "C.M." },
        { text: "After meditating I felt so much peace. I feel grateful and above all calm.", author: "L.P." },
        { text: "The energy cleansing you did in our apartment was truly felt. Everything feels so much lighter and calmer.", author: "A.R." },
        { text: "Each session leaves me with great peace and clarity. Maga knows how to accompany even after the therapeutic encounter.", author: "V.S." },
        { text: "Your support helped me enormously emotionally. Thank you for your sweetness, dedication and care.", author: "M.G." },
        { text: "The meditation you sent me helped me so much in a very difficult moment. I felt relief and a very deep connection with myself.", author: "F.T." },
        { text: "Thank you for helping me slow down and see situations from a different perspective.", author: "J.N." },
        { text: "You are a being of light, truly. Listening to you transmits so much peace to me.", author: "S.B." },
      ],
    },
    contacto: {
      tag: "Contact",
      title: "Begin your journey",
      description: "If you feel it's time to start your healing path, you can write to me. I'll be delighted to accompany you.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      terapiaDefault: "Select a therapy",
      msgPlaceholder: "What would you like to share?",
      btn: "Send inquiry",
      successMsg: "Thank you for reaching out! I'll reply shortly 🌿",
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything you want to know",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How are sessions conducted?", a: "Sessions are 100% online via video call (Zoom or Meet). You can connect from anywhere in the world." },
        { q: "How long is a session?", a: "Each session lasts approximately 60 to 90 minutes, depending on the process and chosen therapy." },
        { q: "What payment methods are accepted?", a: "I accept bank transfer, Mercado Pago and PayPal for international sessions. Ask me for current rates." },
        { q: "Do I need prior experience?", a: "No prior experience is needed. You only need openness and willingness to engage with the process." },
        { q: "How often are sessions held?", a: "This is defined personally according to each process. Generally, sessions are held weekly or bi-weekly." },
      ],
    },
    footer: {
      tagline: "A space to return to yourself.",
      instagram: "@magalisol.cerezo",
      rights: "© 2025 Magalí Sol Cerezo. All rights reserved.",
      ctaTitle: "Ready to begin your journey?",
      ctaSubtitle: "A space to return to yourself — safe, loving and judgment-free.",
      navLabel: "Sections",
      therapiesLabel: "Therapies",
      contactLabel: "Contact",
      onlineLabel: "100% Online Sessions",
      designedWith: "Designed with love ✦",
    },
  },
};
