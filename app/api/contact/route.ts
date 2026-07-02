import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto").max(120),
  email: z.string().email("Ingresá un email válido"),
  company: z.string().max(120).optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Contanos un poco más (mínimo 10 caracteres)").max(5000),
  // campo trampa — los bots lo completan, los humanos nunca lo ven
  website: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Envío inválido" },
        { status: 400 }
      );
    }

    const { name, email, company, budget, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "hola@voltaautomation.com";

    if (apiKey) {
      // Import diferido para que el build no falle si el paquete todavía no está instalado
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Sitio de Volta <notifications@voltaautomation.com>",
        to: notifyEmail,
        reply_to: email,
        subject: `Nueva consulta de ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Nombre: ${name}`,
          `Email: ${email}`,
          company ? `Empresa: ${company}` : null,
          budget ? `Presupuesto: ${budget}` : null,
          "",
          "Mensaje:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } else {
      // Todavía no hay proveedor de email configurado — se registra en consola
      // para que ninguna consulta se pierda silenciosamente.
      console.log("[contact] Nueva consulta (RESEND_API_KEY no configurada):", {
        name,
        email,
        company,
        budget,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] error", error);
    return NextResponse.json({ error: "Algo salió mal. Por favor, intentá de nuevo." }, { status: 500 });
  }
}
