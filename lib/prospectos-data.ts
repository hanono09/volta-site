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
