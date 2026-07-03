// lib/prospectos-data.ts
//
// Acá vive toda la data del panel de prospección (/panel).
// Cada vez que le pases información nueva a Claude, este archivo se actualiza
// y solo hace falta volver a subirlo a GitHub para que se vea en la web.

export type Estado =
  | "Nuevo"
  | "Contactado"
  | "Interesado"
  | "En negociación"
  | "Cliente"
  | "No interesa"
  | "No contesta";

export type Prospecto = {
  id: string;
  fecha: string; // YYYY-MM-DD
  rubro: string;
  nombre: string;
  zona: string;
  direccion: string;
  telefono: string;
  email: string;
  redes: string;
  tieneSitio: "Sí" | "No";
  estado: Estado;
  fechaContacto: string;
  proximoSeguimiento: string;
  notas: string;
};

export const prospectos: Prospecto[] = [
  {
    id: "1",
    fecha: "2026-07-02",
    rubro: "Peluquería",
    nombre: "Peluquería Pepe",
    zona: "Caballito, CABA",
    direccion: "Av. Congreso 2292, C1428BVH, CABA",
    telefono: "011 4787-6724",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,8★ (404 opiniones en Google). Reseñas destacan: buen ambiente, atienden a chicos, ofrecen bebidas gratis mientras esperás.",
  },
  {
    id: "2",
    fecha: "2026-07-02",
    rubro: "Peluquería",
    nombre: "Laura Freitas",
    zona: "Belgrano, CABA",
    direccion: "Amenábar 1391, C1426 AJW, CABA",
    telefono: "011 6597-2209",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,8★ (87 opiniones). Servicios: alisado, tintura, cortes, depilación con cera, permanente, balayage, botox capilar, keratina. Reseñas destacan a Laura, Marilyn y Lucila por profesionalismo y limpieza.",
  },
  {
    id: "3",
    fecha: "2026-07-02",
    rubro: "Peluquería / Barbería",
    nombre: "Michelangelo Peluquería Barbería",
    zona: "Belgrano, CABA",
    direccion: "Mcal. Antonio José de Sucre 2518, C1428, CABA",
    telefono: "011 6465-8701",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,9★ (258 opiniones). Servicios: afeitado, alisado, balayage, tintura, cortes, peinados, tratamientos con keratina. Ofrecen café o cerveza según la hora. Muy recomendada boca en boca.",
  },
  {
    id: "4",
    fecha: "2026-07-02",
    rubro: "Restaurante",
    nombre: "Shami Shawarma Belgrano",
    zona: "Belgrano, CABA",
    direccion: "Monroe 2842, C1428BLV, CABA",
    telefono: "011 2534-8382",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,8★ (122 opiniones). Rango de precio $10.000-20.000 por persona. Comida árabe/shawarma. Reseñas destacan los shawarmas, buena atención, patio lindo, opciones vegetarianas y celíacas.",
  },
  {
    id: "5",
    fecha: "2026-07-02",
    rubro: "Restaurante",
    nombre: "Restaurante Muky",
    zona: "Florida, Vicente López (GBA)",
    direccion: "Av. Maipú 1499, B1602ABO, Florida, Pcia. de Buenos Aires",
    telefono: "011 4791-9090",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,2★ (6.868 opiniones). Rango de precio $20.000-50.000 por persona. Cocina argentina, menú extenso (pizzas, milanesas, pastas, parrilla). Hora feliz, buenos cócteles, menú para niños. Reseñas destacan rabas y buena atención.",
  },
  {
    id: "6",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Go Gym Fitness Villa Urquiza",
    zona: "Villa Urquiza, CABA",
    direccion: "Blanco Encalada 5661, C1431, CABA",
    telefono: "011 6057-8188",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,7★ (13 opiniones). Gimnasio chico con entrenamiento personalizado. Solo tiene Instagram/Facebook, no encontré sitio propio.",
  },
  {
    id: "7",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Urquiza Fitness (Olazábal)",
    zona: "Villa Urquiza, CABA",
    direccion: "Av. Olazábal 4612, C1431CGD, CABA",
    telefono: "011 2394-5497 (WhatsApp)",
    email: "",
    redes: "@urquiza_fitness",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,2★ (218 opiniones). Dos sedes en Villa Urquiza. Solo Instagram, sin sitio propio.",
  },
  {
    id: "8",
    fecha: "2026-07-02",
    rubro: "Gimnasio (Box/CrossFit)",
    nombre: "Mutar Box",
    zona: "Villa del Parque, CABA",
    direccion: "Baigorria 2886, C1417, CABA",
    telefono: "011 2599-0102",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,8★ (24 opiniones). Box de entrenamiento funcional. No se encontró sitio web propio en la búsqueda.",
  },
  {
    id: "9",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Buffalo Fitness",
    zona: "Villa del Parque, CABA",
    direccion: "Nogoyá 3051, C1417, CABA",
    telefono: "011 7244-9165",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "5,0★ (25 opiniones). Buen ambiente, especializado en CrossFit. No se encontró sitio web propio.",
  },
  {
    id: "10",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Onda Fitness",
    zona: "Flores, CABA",
    direccion: "Av. San Pedrito 66, C1406, CABA",
    telefono: "011 4768-0654",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,4★ (141 opiniones). Gimnasio de barrio con buena variedad de actividades. Solo Instagram, sin sitio propio.",
  },
  {
    id: "11",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Sportfitness Belgrano",
    zona: "Belgrano, CABA",
    direccion: "Blanco Encalada 2635, C1428DDQ, CABA",
    telefono: "",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,3★ (80 opiniones). Gimnasio 24 horas. Sin teléfono público en la ficha — contactar por Instagram. Sin sitio propio.",
  },
  {
    id: "12",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Magnum Gym Palermo",
    zona: "Palermo, CABA",
    direccion: "Jerónimo Salguero 1834, C1425, CABA",
    telefono: "011 4928-1233",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,4★ (170 opiniones). Gimnasio de barrio, buenos horarios. No se encontró sitio propio.",
  },
  {
    id: "13",
    fecha: "2026-07-02",
    rubro: "Gimnasio",
    nombre: "Pm Fitness Caballito",
    zona: "Caballito, CABA",
    direccion: "Av. Rivadavia 6034, C1499, CABA",
    telefono: "011 4431-2777",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,7★ (254 opiniones). Gimnasio especializado en musculación, dueño muy involucrado. Sin sitio propio.",
  },
  {
    id: "14",
    fecha: "2026-07-02",
    rubro: "Barbería",
    nombre: "Barber's Club",
    zona: "Villa Urquiza, CABA",
    direccion: "Monroe 5394, C1419, CABA",
    telefono: "011 2787-6747",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "4,9★ (65 opiniones). Reserva por WhatsApp/Instagram. No se encontró sitio propio.",
  },
  {
    id: "15",
    fecha: "2026-07-02",
    rubro: "Barbería",
    nombre: "Barbería Prestigio",
    zona: "Villa Urquiza, CABA",
    direccion: "Pacheco 2294, C1431, CABA",
    telefono: "011 7367-3974",
    email: "",
    redes: "",
    tieneSitio: "No",
    estado: "Nuevo",
    fechaContacto: "",
    proximoSeguimiento: "",
    notas:
      "5,0★ (118 opiniones). Muy buenas reseñas por atención y detalle en el corte. Sin sitio propio.",
  },
];

export type ClienteWeb = {
  id: string;
  nombre: string;
  rubro: string;
  eslogan: string;
  descripcion: string;
  servicios: string;
  horarios: string;
  direccion: string;
  telefono: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  tieneLogo: "Sí" | "No";
  tieneFotos: "Sí" | "No";
  testimonios: string;
  colores: string;
  dominio: string;
  referente: string;
  notas: string;
};

// Se completa solo con los negocios que ya confirmaron que quieren la web.
export const infoWeb: ClienteWeb[] = [];
