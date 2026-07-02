import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Enter a valid email address"),
  company: z.string().max(120).optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)").max(5000),
  // honeypot field — bots fill this, humans never see it
  website: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid submission" },
        { status: 400 }
      );
    }

    const { name, email, company, budget, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFY_EMAIL || "hello@voltaautomation.com";

    if (apiKey) {
      // Lazily import so the build doesn't fail if the package isn't installed yet
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Volta Website <notifications@voltaautomation.com>",
        to: notifyEmail,
     reply_to: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          budget ? `Budget: ${budget}` : null,
          "",
          "Message:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } else {
      // No email provider configured yet — log so submissions are never silently lost.
      console.log("[contact] New submission (RESEND_API_KEY not set):", {
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
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
