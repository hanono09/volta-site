import { NextRequest, NextResponse } from "next/server";

// Respuesta simple basada en reglas para que el widget funcione sin configuración.
// Para conectarlo a un modelo real, reemplazá el bloque de reglas por una llamada
// a la API de Anthropic u OpenAI usando `messages` como historial de conversación,
// y devolvé { reply: <respuesta del modelo> }.

const RULES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["precio", "cuesta", "cuánto", "cuanto", "costo"],
    reply:
      "Nuestros planes arrancan en $2.900 para un proyecto Starter enfocado, $7.500 para nuestro paquete Professional (el más elegido), y precio a medida para Enterprise desde $18.000. ¿Querés el detalle completo? Mirá /pricing o puedo pedir que alguien te lo explique en una llamada.",
  },
  {
    keywords: ["cuánto tarda", "cuanto tarda", "tiempo", "semanas", "plazo"],
    reply:
      "La mayoría de los proyectos Starter se lanzan en 2–3 semanas, los proyectos Professional toman 4–6 semanas, y los proyectos Enterprise llevan 8–12+ semanas según el alcance. Vas a recibir un cronograma exacto después de una breve llamada de descubrimiento.",
  },
  {
    keywords: ["chatbot", "bot"],
    reply:
      "Construimos chatbots con IA personalizados entrenados en tu negocio — desplegados en tu sitio web, WhatsApp o Instagram, con traspaso a un humano incluido. ¿Querés ver cómo funcionaría específicamente para tu negocio?",
  },
  {
    keywords: ["llamada", "reservar", "reunión", "reunion", "demo", "agendar"],
    reply: "Podés reservar un horario directamente aquí: /book-a-call — sin ida y vuelta necesario.",
  },
];

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastUserMessage: string =
      messages?.filter((m: any) => m.role === "user").slice(-1)[0]?.content?.toLowerCase() || "";

    const match = RULES.find((rule) =>
      rule.keywords.some((kw) => lastUserMessage.includes(kw))
    );

    const reply =
      match?.reply ||
      "Buena pregunta — eso es exactamente lo que cubrimos en una llamada de descubrimiento. ¿Querés que te lleve a nuestro calendario, o prefieres enviarle un mensaje directo al equipo?";

    // Simula una breve demora de "pensamiento" para que se sienta más natural
    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: "Algo salió mal de nuestro lado — probá con el formulario de contacto." },
      { status: 500 }
    );
  }
}
