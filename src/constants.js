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

      cards: [
      {
        icon: "✦",
        title: "Acompañamiento",
        subtitle: "Psicología Integrativa",
      },
      {
        icon: "❋",
        title: "Formación Continua",
        subtitle: "Herramientas terapéuticas",
      },
      {
        icon: "♡",
        title: "Mirada Integral",
        subtitle: "Cuerpo, mente y emoción",
      },
    ],

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

  privacy: {
  lastUpdated:  "Mayo 2025",
  tag:          "Documento legal",
  title:        "Política de Privacidad",
  backBtn:      "← Volver al inicio",
  updatedLabel: "Última actualización:",
  intro: [
    "En Magalí Sol Cerezo — Psicóloga Holística valoramos profundamente tu privacidad. Este documento describe cómo recopilamos, usamos y protegemos la información personal que nos compartís al utilizar nuestro sitio web o al contratar nuestros servicios.",
    "Al navegar este sitio web o completar cualquier formulario de contacto o reserva, aceptás los términos descritos en esta política.",
  ],
  closingQuote: "\"Tu bienestar y tu privacidad son igualmente importantes.\"",
  articles: [
    {
      number: "1",
      title:  "Responsable del tratamiento de datos",
      paragraphs: [
        "El responsable del tratamiento de los datos personales recabados a través de este sitio es:",
      ],
      list: [
        "Nombre: Magalí Sol Cerezo",
        "Profesión: Licenciada en Psicología — Terapeuta Holística",
        "Correo electrónico: mscerezopsicoholistica@gmail.com",
        "Instagram: @magalisol.cerezo",
        "Modalidad: Atención 100% online",
      ],
      cardList: true,
    },
    {
      number: "2",
      title:  "Información que recopilamos",
      paragraphs: ["Podemos recopilar los siguientes datos personales:"],
      list: [
        "Nombre y apellido, cuando completás formularios de contacto o reserva.",
        "Dirección de correo electrónico, para responder consultas o enviar información relevante.",
        "Número de teléfono o cuenta de WhatsApp, cuando iniciás una conversación para reservar una sesión.",
        "Información sobre el motivo de consulta, solo la que vos elegís compartir voluntariamente.",
        "Datos de navegación anónimos (páginas visitadas, tiempo en el sitio), a través de cookies técnicas.",
      ],
      paragraphsAfter: [
        "No recopilamos datos sensibles como número de documento, datos bancarios ni información médica a través de este sitio web.",
      ],
    },
    {
      number: "3",
      title:  "Finalidad del tratamiento",
      paragraphs: ["Los datos recopilados se utilizan exclusivamente para:"],
      list: [
        "Responder tus consultas o mensajes de contacto.",
        "Coordinar y confirmar la reserva de sesiones terapéuticas.",
        "Enviarte información sobre el proceso terapéutico cuando lo solicitás expresamente.",
        "Mejorar la experiencia de navegación del sitio web.",
        "Cumplir con obligaciones legales vigentes.",
      ],
      paragraphsAfter: [
        "Nunca utilizaremos tus datos para enviar comunicaciones comerciales no solicitadas ni los cederemos a terceros con fines publicitarios.",
      ],
    },
    {
      number: "4",
      title:  "Confidencialidad y secreto profesional",
      paragraphs: [
        "Como profesional de la salud mental, Magalí Sol Cerezo está sujeta al secreto profesional establecido por el Código de Ética del Psicólogo y la legislación argentina vigente.",
        "Toda la información compartida en el contexto de las sesiones terapéuticas es estrictamente confidencial y no será divulgada bajo ninguna circunstancia, salvo las excepciones contempladas por ley (riesgo inminente para la vida del consultante o de terceros, o requerimiento judicial).",
      ],
      blockquote: "\"La confianza es la base del proceso terapéutico. Tu información está segura.\"",
    },
    {
      number: "5",
      title:  "Base legal para el tratamiento",
      paragraphs: ["El tratamiento de tus datos personales se fundamenta en:"],
      list: [
        "Tu consentimiento explícito al completar formularios o iniciar contacto.",
        "La ejecución de un contrato de servicios terapéuticos.",
        "El cumplimiento de obligaciones legales aplicables.",
        "El interés legítimo en responder consultas y brindar el servicio solicitado.",
      ],
    },
    {
      number: "6",
      title:  "Conservación de los datos",
      paragraphs: [
        "Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados, y en todo caso durante los plazos legalmente establecidos.",
        "Los datos de personas que hayan sido consultantes activos se conservan por un período mínimo de 5 años desde la última sesión, en cumplimiento de las normativas de documentación clínica.",
      ],
    },
    {
      number: "7",
      title:  "Tus derechos",
      paragraphs: [
        "De acuerdo con la Ley N.º 25.326 de Protección de Datos Personales de Argentina (y normativas aplicables en otros países), tenés derecho a:",
      ],
      list: [
        "Acceder a tus datos personales que obran en nuestros registros.",
        "Solicitar la rectificación de datos inexactos o incompletos.",
        "Solicitar la supresión de tus datos cuando ya no sean necesarios.",
        "Oponerte al tratamiento de tus datos en determinadas circunstancias.",
        "Solicitar la limitación del tratamiento de tus datos.",
        "Presentar una reclamación ante la Dirección Nacional de Protección de Datos Personales (DNPDP).",
      ],
      paragraphsAfter: [
        "Para ejercer cualquiera de estos derechos, podés escribirnos a mscerezopsicoholistica@gmail.com. Responderemos tu solicitud en un plazo máximo de 30 días hábiles.",
      ],
    },
    {
      number: "8",
      title:  "Cookies y tecnologías de seguimiento",
      paragraphs: [
        "Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento. No utilizamos cookies de publicidad ni de seguimiento comportamental de terceros.",
        "Tipos de cookies que podemos usar:",
      ],
      list: [
        "Cookies técnicas o de sesión: imprescindibles para la navegación básica del sitio.",
        "Cookies de preferencias: recuerdan configuraciones como el idioma seleccionado (ES/EN).",
        "Cookies analíticas anónimas: nos ayudan a entender cómo se utiliza el sitio (datos agregados, sin identificar personas).",
      ],
      paragraphsAfter: [
        "Podés configurar tu navegador para rechazar o eliminar cookies, aunque esto puede afectar la funcionalidad de algunas secciones del sitio.",
      ],
    },
    {
      number: "9",
      title:  "Seguridad de los datos",
      paragraphs: ["Adoptamos medidas técnicas y organizativas adecuadas para proteger tus datos, incluyendo:"],
      list: [
        "Comunicaciones cifradas mediante HTTPS en todo el sitio.",
        "Acceso restringido a los datos únicamente al personal autorizado.",
        "Uso de plataformas seguras para las sesiones online (Zoom, Google Meet).",
        "No almacenamiento de datos de pago — las transacciones se procesan por plataformas certificadas.",
      ],
    },
    {
      number: "10",
      title:  "Transferencias internacionales",
      paragraphs: [
        "Dado que las sesiones son 100% online y podemos atender personas de cualquier país, tus datos podrían procesarse en servidores ubicados fuera de Argentina. Nos aseguramos de que los servicios utilizados cuenten con las garantías adecuadas (ej. Google Workspace, Zoom, WhatsApp Business).",
      ],
    },
    {
      number: "11",
      title:  "Menores de edad",
      paragraphs: [
        "Este sitio y los servicios ofrecidos están dirigidos a personas mayores de 18 años. No recopilamos conscientemente datos de menores. Si sos menor de edad y deseás consultar sobre terapia, requerimos el consentimiento de tu tutor o representante legal.",
        "Si detectamos que hemos recopilado datos de un menor sin el consentimiento apropiado, procederemos a eliminarlos de forma inmediata.",
      ],
    },
    {
      number: "12",
      title:  "Cambios en esta política",
      paragraphs: [
        "Nos reservamos el derecho de actualizar esta Política de Privacidad cuando sea necesario, por ejemplo, ante cambios en la legislación aplicable o en la forma en que operamos.",
        "La fecha de última actualización se indica al inicio de este documento. Te recomendamos revisarla periódicamente. El uso continuado del sitio tras la publicación de cambios implica la aceptación de los mismos.",
      ],
    },
    {
      number: "13",
      title:  "Contacto",
      paragraphs: ["Si tenés preguntas o querés ejercer tus derechos, podés contactarnos:"],
      list: [
        "📧 Email: mscerezopsicoholistica@gmail.com",
        "📸 Instagram: @magalisol.cerezo",
        "💬 WhatsApp: disponible desde el sitio web",
      ],
      cardList: true,
    },
  ],
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

          cards: [
      {
        icon: "✦",
        title: "Support",
        subtitle: "Integrative Psychology",
      },
      {
        icon: "❋",
        title: "Continuous Learning",
        subtitle: "Therapeutic Tools",
      },
      {
        icon: "♡",
        title: "Holistic Vision",
        subtitle: "Body, Mind & Emotion",
      },
    ],
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

    privacy: {
  lastUpdated:  "May 2025",
  tag:          "Legal document",
  title:        "Privacy Policy",
  backBtn:      "← Back to home",
  updatedLabel: "Last updated:",
  intro: [
    "At Magalí Sol Cerezo — Holistic Psychologist, we deeply value your privacy. This document describes how we collect, use, and protect the personal information you share with us when using our website or hiring our services.",
    "By browsing this website or completing any contact or booking form, you accept the terms described in this policy.",
  ],
  closingQuote: "\"Your wellbeing and your privacy are equally important.\"",
  articles: [
    {
      number: "1",
      title:  "Data controller",
      paragraphs: ["The data controller responsible for the personal information collected through this website is:"],
      list: [
        "Name: Magalí Sol Cerezo",
        "Profession: Licensed Psychologist — Holistic Therapist",
        "Email: mscerezopsicoholistica@gmail.com",
        "Instagram: @magalisol.cerezo",
        "Format: 100% online sessions",
      ],
      cardList: true,
    },
    { number:"2", title:"Information we collect",
      paragraphs:["We may collect the following personal data:"],
      list:["Full name, when you complete contact or booking forms.","Email address, to respond to inquiries or send relevant information.","Phone number or WhatsApp account, when you initiate a conversation to book a session.","Information about your reason for consulting, only what you voluntarily choose to share.","Anonymous browsing data (pages visited, time on site) through technical cookies."],
      paragraphsAfter:["We do not collect sensitive data such as ID numbers, banking information, or medical records through this website."] },
    { number:"3", title:"Purpose of data processing",
      paragraphs:["The collected data is used exclusively to:"],
      list:["Respond to your inquiries or contact messages.","Coordinate and confirm therapeutic session bookings.","Send you information about the therapeutic process when you explicitly request it.","Improve the website browsing experience.","Comply with applicable legal obligations."],
      paragraphsAfter:["We will never use your data to send unsolicited commercial communications, nor share it with third parties for advertising purposes."] },
    { number:"4", title:"Confidentiality and professional secrecy",
      paragraphs:["As a mental health professional, Magalí Sol Cerezo is bound by professional secrecy as established by the Psychologist's Code of Ethics and applicable Argentine legislation.","All information shared within the context of therapeutic sessions is strictly confidential and will not be disclosed under any circumstances, except for the exceptions provided by law (imminent risk to the life of the client or third parties, or a court order)."],
      blockquote:"\"Trust is the foundation of the therapeutic process. Your information is safe.\"" },
    { number:"5", title:"Legal basis for processing",
      paragraphs:["The processing of your personal data is based on:"],
      list:["Your explicit consent when completing forms or initiating contact.","The performance of a therapeutic services contract.","Compliance with applicable legal obligations.","Legitimate interest in responding to inquiries and providing the requested service."] },
    { number:"6", title:"Data retention",
      paragraphs:["Personal data will be retained for as long as necessary to fulfill the purpose for which it was collected, and in any case for the legally established periods.","Data of active clients is retained for a minimum period of 5 years from the last session, in compliance with clinical documentation regulations."] },
    { number:"7", title:"Your rights",
      paragraphs:["In accordance with Argentina's Personal Data Protection Law No. 25,326 (and applicable regulations in other countries), you have the right to:"],
      list:["Access the personal data we hold about you.","Request the rectification of inaccurate or incomplete data.","Request the deletion of your data when it is no longer necessary.","Object to the processing of your data in certain circumstances.","Request the restriction of processing of your data.","Lodge a complaint with the National Directorate for Personal Data Protection (DNPDP)."],
      paragraphsAfter:["To exercise any of these rights, you can write to us at mscerezopsicoholistica@gmail.com. We will respond to your request within a maximum of 30 business days."] },
    { number:"8", title:"Cookies and tracking technologies",
      paragraphs:["This website may use technical cookies necessary for its proper functioning. We do not use advertising or third-party behavioral tracking cookies.","Types of cookies we may use:"],
      list:["Technical or session cookies: essential for basic website navigation.","Preference cookies: remember settings such as the selected language (ES/EN).","Anonymous analytics cookies: help us understand how the site is used (aggregated data, no personal identification)."],
      paragraphsAfter:["You can configure your browser to reject or delete cookies, although this may affect the functionality of some sections of the site."] },
    { number:"9", title:"Data security",
      paragraphs:["We adopt appropriate technical and organizational measures to protect your personal data, including:"],
      list:["Encrypted communications via HTTPS throughout the site.","Access to data restricted to authorized personnel only.","Use of secure communication platforms for online sessions (Zoom, Google Meet).","No payment data storage — transactions are processed by certified platforms."] },
    { number:"10", title:"International data transfers",
      paragraphs:["Since sessions are 100% online and we can serve clients from any country, your data may be processed on servers located outside Argentina. We ensure that the services used provide adequate data protection guarantees (e.g. Google Workspace, Zoom, WhatsApp Business)."] },
    { number:"11", title:"Minors",
      paragraphs:["This website and the services offered are directed at people over 18 years of age. We do not knowingly collect data from minors. If you are under 18 and wish to inquire about therapy, we require the consent of your guardian or legal representative.","If we detect that we have collected data from a minor without appropriate consent, we will proceed to delete it immediately."] },
    { number:"12", title:"Changes to this policy",
      paragraphs:["We reserve the right to update this Privacy Policy when necessary, for example, in response to changes in applicable legislation or in the way we operate.","The date of the last update is indicated at the top of this document. Continued use of the site after the publication of changes implies acceptance of those changes."] },
    { number:"13", title:"Contact",
      paragraphs:["If you have questions or would like to exercise your rights regarding this policy, you can contact us:"],
      list:["📧 Email: mscerezopsicoholistica@gmail.com","📸 Instagram: @magalisol.cerezo","💬 WhatsApp: available from the website"],
      cardList: true },
  ],
},

  },
};
