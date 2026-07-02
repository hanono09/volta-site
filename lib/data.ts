// lib/data.ts
// Fuente única de contenido del sitio. Editá el copy aquí — los componentes son "tontos".

export const brand = {
  name: "Volta",
  legalName: "Volta Automation, LLC",
  domain: "voltaautomation.com",
  tagline: "Construimos los sistemas que hacen funcionar tu negocio mientras dormís.",
  shortTagline: "Automatización con IA para empresas que odian perder horas.",
  description:
    "Volta diseña, construye y lanza automatización con IA, chatbots, sitios web y herramientas internas a medida para empresas ambiciosas — en vivo en 2 a 6 semanas.",
  email: "hola@voltaautomation.com",
  phone: "+1 (555) 014-2024",
  address: "Austin, TX — trabajamos con clientes en todo el mundo",
  founded: "2022",
};

export const nav = [
  { label: "Servicios", href: "/services" },
  { label: "Precios", href: "/pricing" },
  { label: "Casos de éxito", href: "/case-studies" },
  { label: "Nosotros", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  company: [
    { label: "Nosotros", href: "/about" },
    { label: "Casos de éxito", href: "/case-studies" },
    { label: "Testimonios", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contact" },
  ],
  services: [
    { label: "Automatización con IA", href: "/services#automation" },
    { label: "Chatbots con IA", href: "/services#chatbots" },
    { label: "Sitios web y landing pages", href: "/services#websites" },
    { label: "Integraciones con CRM", href: "/services#crm" },
    { label: "Automatización de WhatsApp", href: "/services#whatsapp" },
    { label: "Dashboards personalizados", href: "/services#dashboards" },
  ],
  legal: [
    { label: "Política de privacidad", href: "/legal/privacy-policy" },
    { label: "Términos de servicio", href: "/legal/terms" },
    { label: "Política de cookies", href: "/legal/cookies" },
  ],
};

export const stats = [
  { value: "140+", label: "Automatizaciones implementadas" },
  { value: "$18.4M", label: "Ingresos de clientes influenciados" },
  { value: "62,000+", label: "Horas ahorradas anualmente a clientes" },
  { value: "97%", label: "Tasa de retención de clientes" },
];

export const trustBadges = [
  "Prácticas alineadas con SOC 2",
  "Desarrollos conformes con GDPR",
  "99.9% de disponibilidad en infraestructura",
  "Promedio de 11 días para el lanzamiento",
];

export const clientLogos = [
  "Northbeam Realty",
  "Lumen Dental Group",
  "Forge Logistics",
  "Hearth & Co.",
  "Atlas Legal Partners",
  "Periwinkle Studio",
  "Vantage Fitness",
  "Coral Bay Capital",
];

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  outcomes: string[];
  icon: string; // nombre de ícono de lucide
};

export const services: Service[] = [
  {
    id: "automation",
    title: "Automatización con IA",
    shortDescription:
      "Reemplazamos operaciones manuales y repetitivas con sistemas impulsados por IA que funcionan solos.",
    description:
      "La mayoría de las empresas pierden entre 15 y 30 horas por semana en ingreso manual de datos, seguimientos, aprobaciones y copiar-pegar entre herramientas. Mapeamos tus operaciones de punta a punta y luego construimos flujos automatizados que conectan tu stack — CRM, email, calendario, contabilidad, soporte — en un solo sistema que actúa sin que vos tengas que hacer nada. Se acabó cuidar planillas de cálculo.",
    bullets: [
      "Auditoría completa de operaciones y hoja de ruta de automatización",
      "Flujos personalizados construidos en n8n, Make o Zapier (a tu elección)",
      "Agentes de IA que leen, resumen, enrutan y actúan sobre datos entrantes",
      "Generación de documentos, facturación y reportes en modo automático",
      "Monitoreo de errores y alertas integrados en cada flujo",
    ],
    outcomes: [
      "Reducí el trabajo administrativo manual entre un 60% y 90%",
      "Tiempos de respuesta el mismo día en lugar de acumulación de días",
      "Menos errores humanos en procesos repetitivos",
    ],
    icon: "Workflow",
  },
  {
    id: "chatbots",
    title: "Chatbots con IA",
    shortDescription:
      "IA conversacional entrenada en tu negocio que califica leads y responde a clientes las 24 horas.",
    description:
      "Construimos chatbots personalizados con IA entrenados en tus productos, políticas y tono de voz — desplegados en tu sitio web, WhatsApp o Instagram. Califican leads, responden consultas de soporte, agendan reuniones y escalan a un humano solo cuando realmente importa.",
    bullets: [
      "Entrenado con tus documentos, preguntas frecuentes, precios y voz de marca",
      "Calificación de leads con traspaso al CRM",
      "Soporte multi-idioma de fábrica",
      "Traspaso a un humano con todo el contexto de la conversación",
      "Desplegado en web, WhatsApp, Instagram o SMS",
    ],
    outcomes: [
      "Tiempo de respuesta instantáneo, de día o de noche",
      "30–50% más leads calificados capturados",
      "Equipo de soporte liberado de preguntas repetitivas",
    ],
    icon: "MessageSquare",
  },
  {
    id: "websites",
    title: "Sitios web y landing pages de alta conversión",
    shortDescription:
      "Sitios web premium, rápidos y diseñados para convertir, sobre infraestructura moderna.",
    description:
      "Diseñamos y construimos sitios web como lo hace un equipo de producto — investigados, probados y optimizados para convertir, no solo para verse bien. Cada sitio está construido en Next.js para tiempos de carga por debajo de un segundo, viene con SEO integrado de fábrica, y está estructurado alrededor de un solo objetivo claro: convertir visitantes en clientes.",
    bullets: [
      "Diseño a medida — nunca una plantilla genérica",
      "Construido en Next.js para velocidad y confiabilidad",
      "Copywriting orientado a conversión incluido",
      "Arquitectura SEO y datos estructurados desde el día uno",
      "Analítica integrada, hooks para A/B testing y CMS",
    ],
    outcomes: [
      "Tiempos de carga por debajo de 1.5s en mobile",
      "Puntajes de Lighthouse 95+ en todas las categorías",
      "Aumento medible en la tasa de conversión post-lanzamiento",
    ],
    icon: "LayoutTemplate",
  },
  {
    id: "crm",
    title: "Integraciones con CRM",
    shortDescription:
      "Tu CRM se convierte en la única fuente de verdad — automáticamente, sin actualizaciones manuales.",
    description:
      "Conectamos HubSpot, Salesforce, Pipedrive, GoHighLevel o Airtable con cada herramienta que usás, para que leads, negociaciones y datos de clientes se sincronicen automáticamente. Se acabó que los vendedores registren llamadas manualmente o actualicen etapas — tu CRM se actualiza solo según la actividad real.",
    bullets: [
      "Sincronización bidireccional entre el CRM y tu stack actual",
      "Puntuación de leads y avance de etapas automatizado",
      "Pipelines personalizados según tu proceso de ventas real",
      "Deduplicación y limpieza de datos al ingresar información",
      "Dashboards de reportes extraídos directamente del CRM",
    ],
    outcomes: [
      "Un solo registro unificado de cada cliente",
      "Los vendedores dedican más tiempo a vender y menos a registrar datos",
      "La precisión del pronóstico mejora con datos limpios",
    ],
    icon: "Database",
  },
  {
    id: "whatsapp",
    title: "Automatización de WhatsApp",
    shortDescription:
      "Vendé, dá soporte y hacé seguimiento a clientes en el canal que ya usan.",
    description:
      "Construimos automatizaciones de WhatsApp Business que gestionan confirmaciones de pedidos, recordatorios de citas, recuperación de carritos abandonados y soporte — usando la API oficial de WhatsApp Business, totalmente compatible y con tu marca.",
    bullets: [
      "Integración con la API oficial de WhatsApp Business",
      "Confirmaciones automáticas de pedidos, reservas y pagos",
      "Secuencias de goteo para reactivación y recuperación",
      "Preguntas frecuentes atendidas por IA con escalamiento humano",
      "Campañas de difusión con cumplimiento de opt-in",
    ],
    outcomes: [
      "Tasas de apertura del 90%+ frente a ~20% del email",
      "Ingresos recuperados de carritos abandonados y ausencias",
      "Volumen de soporte atendido sin sumar personal",
    ],
    icon: "MessageCircle",
  },
  {
    id: "appointments",
    title: "Sistemas de citas y turnos",
    shortDescription:
      "Terminá con el ida y vuelta. Que los clientes reserven, reprogramen y paguen automáticamente.",
    description:
      "Construimos sistemas de reserva que conectan tu calendario, procesador de pagos y recordatorios en un solo flujo — para que los clientes se agenden solos, se presenten y paguen, sin intercambiar un solo email.",
    bullets: [
      "Flujo de reserva personalizado según tu marca",
      "Sincronización de calendario (Google, Outlook, compatible con Calendly)",
      "Recordatorios automáticos por SMS, email y WhatsApp",
      "Secuencias de reducción de ausencias",
      "Cobro de depósitos y pagos al momento de la reserva",
    ],
    outcomes: [
      "Hasta 40% menos de ausencias",
      "Cero agendamiento manual para tu equipo",
      "Mayor tasa de asistencia gracias a recordatorios automáticos",
    ],
    icon: "CalendarCheck",
  },
  {
    id: "support",
    title: "Soporte al cliente con IA",
    shortDescription:
      "Soporte de primera línea atendido por IA que realmente conoce tu negocio.",
    description:
      "Desplegamos agentes de soporte con IA entrenados en tus documentos de ayuda, tickets anteriores y políticas — resolviendo problemas comunes al instante y derivando casos complejos a tu equipo con todo el contexto adjunto, para que nada se tenga que repetir.",
    bullets: [
      "Entrenado con tu base de conocimiento e historial de tickets existente",
      "Resuelve tickets comunes sin intervención humana",
      "Traspaso con contexto completo cuando se necesita escalamiento",
      "Detección de sentimiento para priorizar la atención",
      "Reportes semanales sobre volumen, tasa de resolución y vacíos",
    ],
    outcomes: [
      "Hasta el 70% de los tickets resueltos sin un humano",
      "Primera respuesta en menos de 30 segundos",
      "Los costos de soporte crecen más lento que el volumen de tickets",
    ],
    icon: "Headset",
  },
  {
    id: "internal",
    title: "Automatización interna de negocio",
    shortDescription:
      "El trabajo operativo poco glamoroso — resuelto, para que tu equipo se enfoque en el negocio.",
    description:
      "Facturación, onboarding, reportes, aprobaciones, control de inventario — automatizamos los procesos internos que silenciosamente consumen la semana de tu equipo, a la medida de cómo realmente opera tu negocio.",
    bullets: [
      "Mapeo de procesos junto a tu equipo de operaciones",
      "Flujos automatizados de alta y baja de personal",
      "Cadenas de aprobación y ruteo de documentos",
      "Automatización de inventario, reportes y conciliación",
      "Notificaciones internas en Slack/Teams para eventos clave",
    ],
    outcomes: [
      "Días de trabajo administrativo reducidos a minutos",
      "Procesos estandarizados entre equipos",
      "Menos tareas perdidas y aprobaciones olvidadas",
    ],
    icon: "Settings2",
  },
  {
    id: "workflow",
    title: "Optimización de procesos",
    shortDescription:
      "Auditamos cómo funciona realmente tu negocio, y lo reconstruimos para que funcione más liviano.",
    description:
      "Antes de automatizar cualquier cosa, mapeamos tus flujos de trabajo reales — no la versión del organigrama. Encontramos los cuellos de botella, pasos redundantes y traspasos manuales, y después rediseñamos el proceso antes de sumarle automatización.",
    bullets: [
      "Auditoría completa de procesos y mapeo de flujos",
      "Análisis de cuellos de botella y redundancias",
      "Procedimientos rediseñados y preparados para automatizar",
      "Recomendaciones de consolidación de herramientas",
      "Apoyo en la gestión del cambio para tu equipo",
    ],
    outcomes: [
      "Procesos más livianos antes de construir una sola automatización",
      "Menos herramientas dispersas y menor gasto en software",
      "Tiempos de ciclo más rápidos entre departamentos",
    ],
    icon: "GitMerge",
  },
  {
    id: "dashboards",
    title: "Dashboards personalizados",
    shortDescription:
      "Visibilidad en tiempo real sobre los números que realmente mueven tu negocio.",
    description:
      "Construimos dashboards internos personalizados que traen datos en vivo de tu CRM, finanzas y herramientas operativas a una sola vista — hechos para las métricas que realmente seguís, no una plantilla genérica.",
    bullets: [
      "Datos en vivo extraídos de tus herramientas actuales",
      "Vistas por rol para liderazgo, ventas y operaciones",
      "Seguimiento de KPIs a medida de tu negocio",
      "Generación automática de reportes semanales y mensuales",
      "Alojado, seguro y accesible desde cualquier lugar",
    ],
    outcomes: [
      "Una sola fuente de verdad en lugar de cinco planillas",
      "Toma de decisiones más rápida y con más confianza",
      "Horas ahorradas en reportes manuales cada semana",
    ],
    icon: "LayoutDashboard",
  },
];

export const process = [
  {
    step: "01",
    title: "Descubrimiento",
    duration: "Días 1–3",
    description:
      "Auditamos tus operaciones, herramientas y cuellos de botella actuales. Te vas con un mapa claro de qué te está costando tiempo y una hoja de ruta priorizada — incluso si no trabajás con nosotros.",
  },
  {
    step: "02",
    title: "Arquitectura",
    duration: "Días 4–7",
    description:
      "Diseñamos el sistema técnico: integraciones, flujo de datos, lógica de IA y manejo de excepciones. Vos aprobás el plano antes de que se escriba una sola línea de código.",
  },
  {
    step: "03",
    title: "Construcción",
    duration: "Semana 2–4",
    description:
      "Nuestro equipo construye en sprints enfocados con demos semanales, así ves el avance de forma continua en vez de esperar semanas para una gran revelación.",
  },
  {
    step: "04",
    title: "Pruebas y lanzamiento",
    duration: "Semana 4–5",
    description:
      "Sometemos cada flujo a pruebas de estrés contra casos límite, capacitamos a tu equipo en el sistema, y lanzamos con monitoreo activo desde el primer día.",
  },
  {
    step: "05",
    title: "Optimización",
    duration: "Continuo",
    description:
      "Después del lanzamiento, monitoreamos el rendimiento y ajustamos según el uso real. La mayoría de los sistemas mejoran de forma medible en los primeros 60 días.",
  },
];

export const benefits = [
  {
    title: "Construido para tu negocio, no para una plantilla",
    description:
      "Cada flujo se mapea según cómo realmente operás. No vendemos bots pre-armados — construimos sistemas alrededor de tus procesos reales.",
    icon: "Fingerprint",
  },
  {
    title: "En vivo en semanas, no en trimestres",
    description:
      "La mayoría de los proyectos lanzan un sistema funcionando en 2 a 6 semanas. Ves avance semanal, no una sola revelación al final.",
    icon: "Zap",
  },
  {
    title: "Ingeniería real, no parches",
    description:
      "Infraestructura de nivel productivo con monitoreo de errores, lógica de respaldo y documentación — construida para sobrevivir al mundo real.",
    icon: "ShieldCheck",
  },
  {
    title: "Vos sos dueño de todo",
    description:
      "Sin ataduras. Cada flujo, integración y línea de código te pertenece, con documentación completa entregada al lanzamiento.",
    icon: "KeyRound",
  },
  {
    title: "Medido en horas e ingresos",
    description:
      "Hacemos seguimiento del tiempo ahorrado y los ingresos influenciados por cada sistema que construimos — así el retorno de inversión nunca es una suposición.",
    icon: "TrendingUp",
  },
  {
    title: "Un equipo, no un freelancer",
    description:
      "Líder de proyecto, ingeniero de automatización y control de calidad dedicados en cada proyecto — con un canal de Slack abierto durante toda la relación.",
    icon: "Users",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  services: string[];
  timeline: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northbeam-realty",
    client: "Northbeam Realty",
    industry: "Bienes raíces",
    summary:
      "Reemplazamos 4 procesos manuales de recepción de leads con un solo sistema de enrutamiento y seguimiento con IA para 12 agentes.",
    challenge:
      "Los 12 agentes de Northbeam calificaban leads manualmente desde seis fuentes distintas — sitio web, Zillow, Facebook, referidos, casas abiertas y consultas en frío. Los leads quedaban sin respuesta un promedio de 14 horas, y los agentes dedicaban 90 minutos diarios solo a ingresar datos.",
    solution:
      "Construimos un sistema de recepción unificado que trae leads de cada canal a un solo pipeline, usa IA para calificarlos y puntuarlos en tiempo real, los asigna automáticamente al agente correcto según territorio y disponibilidad, y dispara una respuesta instantánea por WhatsApp y SMS — todo sincronizado con su CRM sin ingreso manual de datos.",
    results: [
      { metric: "14hs → 90seg", label: "Tiempo promedio de respuesta a leads" },
      { metric: "31%", label: "Aumento en conversión de lead a visita" },
      { metric: "23hs/sem", label: "Tiempo administrativo eliminado en el equipo" },
    ],
    services: ["Automatización con IA", "Integraciones con CRM", "Automatización de WhatsApp"],
    timeline: "5 semanas",
  },
  {
    slug: "lumen-dental-group",
    client: "Lumen Dental Group",
    industry: "Salud",
    summary:
      "Construimos un sistema de reservas y recordatorios con IA en 4 clínicas, reduciendo las ausencias un 38% en el primer trimestre.",
    challenge:
      "El personal de recepción de Lumen en cuatro sucursales pasaba horas diarias agendando por teléfono y haciendo llamadas manuales de recordatorio, y aun así tenían una tasa de ausencia del 22% que costaba directamente tiempo de sillón y facturación.",
    solution:
      "Desplegamos un sistema de reserva autogestionado sincronizado con los calendarios de las cuatro clínicas, sumado a un chatbot con IA que gestiona reprogramaciones y preguntas frecuentes, y una secuencia automatizada de recordatorios por SMS/WhatsApp con confirmación obligatoria.",
    results: [
      { metric: "38%", label: "Reducción en la tasa de ausencias" },
      { metric: "4.200+", label: "Reservas gestionadas sin intervención del personal" },
      { metric: "$186K", label: "Ingresos anuales recuperados por sillones ocupados" },
    ],
    services: ["Sistemas de citas y turnos", "Chatbots con IA", "Automatización con IA"],
    timeline: "4 semanas",
  },
  {
    slug: "forge-logistics",
    client: "Forge Logistics",
    industry: "Logística y cadena de suministro",
    summary:
      "Automatizamos los reportes de despacho y las actualizaciones de estado a clientes, reemplazando un proceso manual de 6 personas.",
    challenge:
      "El equipo de operaciones de Forge compilaba manualmente reportes diarios de despacho desde cinco sistemas desconectados y atendía un flujo constante de llamadas y correos de clientes preguntando '¿dónde está mi envío?'",
    solution:
      "Construimos un dashboard operativo en tiempo real que extrae información de los cinco sistemas automáticamente, más un sistema de notificaciones a clientes con IA que envía actualizaciones proactivas del estado del envío por SMS y email — reduciendo drásticamente las consultas entrantes.",
    results: [
      { metric: "91%", label: "Caída en llamadas de consulta de estado" },
      { metric: "6 → 1", label: "Personal necesario para el reporte diario" },
      { metric: "$240K/año", label: "Ahorro en costos operativos" },
    ],
    services: ["Dashboards personalizados", "Automatización interna de negocio", "Optimización de procesos"],
    timeline: "7 semanas",
  },
  {
    slug: "vantage-fitness",
    client: "Vantage Fitness",
    industry: "Fitness y bienestar",
    summary:
      "Rediseñamos el sitio web y sumamos un asistente de ventas con IA, aumentando las inscripciones a prueba un 64% en 90 días.",
    challenge:
      "El sitio web desactualizado de Vantage cargaba en más de 6 segundos en mobile y convertía menos del 1% de las visitas. Su equipo de ventas tampoco tenía un sistema de seguimiento para leads de prueba, perdiendo a la mayoría en las primeras 48 horas.",
    solution:
      "Rediseñamos el sitio en Next.js con diseño y copy orientados a conversión, sumamos un asistente de chat con IA que responde preguntas sobre membresías y agenda visitas al instante, y montamos una secuencia automatizada de seguimiento de 7 días para cada inscripción de prueba.",
    results: [
      { metric: "64%", label: "Aumento en inscripciones de prueba" },
      { metric: "1.2s", label: "Nuevo tiempo de carga promedio en mobile" },
      { metric: "2.4x", label: "Tasa de conversión de prueba a membresía" },
    ],
    services: ["Sitios web de alta conversión", "Chatbots con IA", "Automatización con IA"],
    timeline: "6 semanas",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Volta no solo automatizó nuestra recepción de leads — rediseñó cómo funciona todo nuestro proceso de ventas. Pasamos de 14 horas de respuesta a menos de dos minutos, y nuestros agentes finalmente tienen tiempo para vender.",
    name: "Daniela Cruz",
    role: "Broker principal",
    company: "Northbeam Realty",
  },
  {
    quote:
      "Era escéptica de que un chatbot con IA pudiera sonar como nosotros. A la semana del lanzamiento, los pacientes no notaban la diferencia, y nuestra tasa de ausencias bajó casi un 40%. Se pagó solo en el primer mes.",
    name: "Dr. Marcus Webb",
    role: "Director de práctica",
    company: "Lumen Dental Group",
  },
  {
    quote:
      "Ya habíamos probado con dos agencias antes de Volta. La diferencia es que ellos realmente mapearon nuestras operaciones antes de construir nada. Nada se sintió genérico — cada flujo coincidía exactamente con cómo manejamos el despacho.",
    name: "Priya Anand",
    role: "VP de Operaciones",
    company: "Forge Logistics",
  },
  {
    quote:
      "Nuestro sitio anterior se veía bien y no convertía nada. El nuevo parece de una empresa el doble de grande, carga al instante, y el asistente de IA solo ya agendó más visitas que dos de nuestros empleados de recepción juntos.",
    name: "Jordan Lee",
    role: "Fundador y CEO",
    company: "Vantage Fitness",
  },
  {
    quote:
      "Lo que más me impresionó fue el traspaso final. Documentación completa, sesiones de capacitación grabadas, y un equipo que realmente responde cuando algo necesita un ajuste. Somos dueños del sistema por completo — sin depender de la agencia.",
    name: "Helena Ruiz",
    role: "COO",
    company: "Atlas Legal Partners",
  },
  {
    quote:
      "Trabajamos con tres estudios de desarrollo en cinco años. Volta es el primero que habla de retorno de inversión y horas ahorradas en vez de solo funcionalidades. El dashboard solo ya reemplazó un puesto de analista part-time.",
    name: "Tom Okafor",
    role: "Director de Estrategia",
    company: "Coral Bay Capital",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  timeline: string;
  bestFor: string;
  features: string[];
  deliverables: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2.900",
    cadence: "pago único",
    description:
      "Un proyecto de automatización o sitio web enfocado que resuelve un cuello de botella claro, rápido.",
    timeline: "2–3 semanas",
    bestFor: "Equipos chicos que automatizan un proceso o lanzan un sitio nuevo",
    features: [
      "1 flujo de automatización principal o un sitio a medida de 5 páginas",
      "Hasta 2 integraciones de herramientas",
      "Chatbot con IA básico (preguntas frecuentes + captura de leads)",
      "1 ronda de revisiones",
      "30 días de soporte post-lanzamiento",
      "Capacitación grabada en video para el traspaso",
    ],
    deliverables: [
      "Automatización funcionando o sitio web en vivo",
      "Documentación de todos los flujos",
      "Acceso y titularidad de todas las cuentas",
    ],
    cta: "Empezar con Starter",
  },
  {
    name: "Professional",
    price: "$7.500",
    cadence: "pago único",
    description:
      "Un sistema de automatización completo con múltiples flujos, chatbot con IA a medida y sincronización con el CRM.",
    timeline: "4–6 semanas",
    bestFor: "Empresas en crecimiento listas para automatizar toda su operación",
    features: [
      "Hasta 4 flujos de automatización",
      "Chatbot con IA personalizado entrenado en tu negocio",
      "Integración completa y sincronización bidireccional con el CRM",
      "Automatización de WhatsApp o SMS incluida",
      "Sitio web o landing page a medida (hasta 10 páginas)",
      "Hasta 3 rondas de revisiones",
      "90 días de soporte post-lanzamiento",
      "Sesión de capacitación en vivo para tu equipo",
    ],
    deliverables: [
      "Suite completa de automatización con monitoreo",
      "Chatbot con IA entrenado a medida, desplegado",
      "Configuración de CRM integrado y reportes",
      "Documentación completa y procedimientos",
    ],
    cta: "Ir con Professional",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    cadence: "desde $18.000",
    description:
      "Transformación integral: auditoría de procesos, automatización completa, dashboards personalizados y un equipo dedicado.",
    timeline: "8–12+ semanas",
    bestFor: "Operaciones multi-sucursal o de alto volumen con sistemas complejos",
    features: [
      "Auditoría completa de operaciones y hoja de ruta de automatización",
      "Automatizaciones de flujos ilimitadas",
      "Soporte con IA multicanal (web, WhatsApp, SMS, Instagram)",
      "Dashboards internos y reportes personalizados",
      "Líder de proyecto y equipo de ingeniería dedicados",
      "Soporte prioritario con SLA",
      "Revisiones de optimización trimestrales",
      "Plan de soporte e iteración de 12 meses",
    ],
    deliverables: [
      "Infraestructura de operaciones completamente automatizada",
      "Suite de dashboards personalizados",
      "Capacitación completa del equipo y apoyo en gestión del cambio",
      "Hoja de ruta de optimización continua",
    ],
    cta: "Hablar con ventas",
  },
];

export const maintenancePlans = [
  {
    name: "Care",
    price: "$390/mes",
    description: "Monitoreo, ajustes menores y garantía de disponibilidad para sistemas existentes.",
    features: [
      "Monitoreo y alertas automatizadas 24/7",
      "Hasta 2 horas de ajustes por mes",
      "Reporte mensual de rendimiento",
      "Soporte prioritario por email (respuesta en 24hs)",
    ],
  },
  {
    name: "Growth",
    price: "$890/mes",
    description: "Optimización activa y nuevos flujos agregados de forma continua.",
    features: [
      "Todo lo de Care",
      "Hasta 6 horas de desarrollo por mes",
      "Auditoría de automatización trimestral",
      "Soporte prioritario por Slack (respuesta el mismo día)",
      "1 nuevo flujo o integración por trimestre",
    ],
  },
  {
    name: "Scale",
    price: "$1.950/mes",
    description: "Un equipo de automatización fraccional integrado a tus operaciones.",
    features: [
      "Todo lo de Growth",
      "Hasta 16 horas de desarrollo por mes",
      "Llamada mensual de estrategia con tu líder de proyecto",
      "Soporte prioritario el mismo día",
      "Canal de Slack dedicado con tu equipo de ingeniería",
    ],
  },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tiempo lleva un proyecto típico?",
    answer:
      "La mayoría de los proyectos Starter se lanzan en 2 a 3 semanas. Los proyectos Professional toman 4 a 6 semanas. Los proyectos Enterprise con múltiples sistemas suelen durar 8 a 12 semanas, según el alcance. Vas a recibir un cronograma preciso después de la llamada de descubrimiento, y hacemos demos semanales para que siempre sepas exactamente en qué etapa está el proyecto.",
  },
  {
    question: "¿Necesito conocimientos técnicos para trabajar con ustedes?",
    answer:
      "No. Nosotros nos encargamos de todo el desarrollo técnico, y cada sistema se entrega con documentación y una sesión de capacitación grabada en lenguaje simple. Vas a saber exactamente cómo usar, ajustar y monitorear lo que construimos — sin necesidad de tocar código.",
  },
  {
    question: "¿Con qué herramientas y plataformas trabajan?",
    answer:
      "Somos agnósticos de plataforma y construimos alrededor de lo que ya usás — HubSpot, Salesforce, GoHighLevel, Airtable, n8n, Make, Zapier, Twilio, la API de WhatsApp Business, y la mayoría de los CRMs y sistemas de calendario más usados. Si no tenés una preferencia, te recomendamos la herramienta correcta según tu escala y presupuesto.",
  },
  {
    question: "¿Quién es dueño de los sistemas y el código después del proyecto?",
    answer:
      "Vos, por completo. Cada cuenta, flujo y línea de código se transfiere a tu titularidad al momento del lanzamiento. No hay ataduras ni dependencia de nosotros para que siga funcionando. La mayoría de los clientes elige quedarse con un plan de mantenimiento de todas formas, pero nunca es obligatorio.",
  },
  {
    question: "¿Qué pasa si algo se rompe después del lanzamiento?",
    answer:
      "Cada proyecto incluye una ventana de soporte post-lanzamiento (30 a 90 días según el plan) donde las correcciones están cubiertas sin costo adicional. Después de eso, nuestros planes de mantenimiento mensual cubren monitoreo, ajustes y soporte prioritario — o podés mantenerlo internamente usando la documentación que te entregamos.",
  },
  {
    question: "¿Pueden trabajar con nuestro sitio web actual o necesitamos uno nuevo?",
    answer:
      "Ambas opciones son posibles. Muchos de nuestros proyectos de automatización y chatbots se integran directamente en un sitio existente sin necesidad de rediseñarlo. Si tu sitio actual está perjudicando la conversión o el rendimiento, te lo vamos a marcar durante el descubrimiento y te vamos a dar una recomendación clara — nunca una venta forzada.",
  },
  {
    question: "¿Cómo se determina el precio de los proyectos Enterprise?",
    answer:
      "El precio de Enterprise depende de la cantidad de sistemas, integraciones y capacitación de equipo requeridos. Después de una auditoría de descubrimiento, vas a recibir una propuesta de alcance fijo con precios transparentes por ítem — nunca facturación por hora con un total abierto.",
  },
  {
    question: "¿Firman contratos y acuerdos de confidencialidad?",
    answer:
      "Sí. Cada proyecto empieza con un contrato de servicio firmado que detalla alcance, cronograma y entregables, y firmamos acuerdos de confidencialidad como práctica estándar antes de cualquier llamada de descubrimiento que involucre información sensible del negocio.",
  },
];

export const blogPosts = [
  {
    slug: "real-cost-of-manual-operations",
    title: "El costo real de las operaciones manuales (y cómo calcular el tuyo)",
    excerpt:
      "La mayoría de los equipos directivos subestima cuánto les cuesta el trabajo manual entre 3 y 5 veces. Este es el marco que usamos con clientes para encontrar el número real.",
    date: "2026-05-12",
    readTime: "7 min de lectura",
    category: "Operaciones",
  },
  {
    slug: "ai-chatbot-vs-live-chat",
    title: "Chatbot con IA vs. chat en vivo: qué convierte mejor en 2026",
    excerpt:
      "Analizamos datos de conversión de más de 40 implementaciones con clientes para resolver el debate. La respuesta depende de un factor que la mayoría de las empresas ignora.",
    date: "2026-04-28",
    readTime: "6 min de lectura",
    category: "Chatbots con IA",
  },
  {
    slug: "choosing-automation-platform",
    title: "n8n vs. Make vs. Zapier: cómo elegir la plataforma de automatización correcta",
    excerpt:
      "Cada plataforma tiene su punto fuerte. Desglosamos cuándo gana cada una, con comparaciones reales de precio y escala de proyectos con clientes.",
    date: "2026-04-09",
    readTime: "9 min de lectura",
    category: "Automatización",
  },
  {
    slug: "whatsapp-business-api-guide",
    title: "Guía práctica de la API de WhatsApp Business para empresas de servicios",
    excerpt:
      "Las tasas de apertura por encima del 90% son reales, pero la API tiene reglas que sorprenden a la mayoría de las empresas. Esto es lo que hay que saber antes de empezar.",
    date: "2026-03-22",
    readTime: "8 min de lectura",
    category: "Automatización de WhatsApp",
  },
];
