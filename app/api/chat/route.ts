import { NextRequest, NextResponse } from "next/server";

// Lightweight rule-based fallback so the widget works out of the box with
// zero configuration. To power this with a real model, drop your provider
// call in here (Anthropic / OpenAI) using the ANTHROPIC_API_KEY or
// OPENAI_API_KEY env var, and pass `messages` straight through.

const RULES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["price", "pricing", "cost", "how much"],
    reply:
      "Our plans start at $2,900 for a focused Starter build, $7,500 for our most popular Professional package, and custom Enterprise pricing from $18,000. Want the full breakdown? Check out /pricing or I can have someone walk you through it on a call.",
  },
  {
    keywords: ["timeline", "how long", "weeks"],
    reply:
      "Most Starter projects launch in 2–3 weeks, Professional builds take 4–6 weeks, and Enterprise engagements run 8–12+ weeks depending on scope. You'll get an exact timeline after a quick discovery call.",
  },
  {
    keywords: ["chatbot", "bot"],
    reply:
      "We build custom AI chatbots trained on your business — deployed on your website, WhatsApp, or Instagram, with human hand-off built in. Want to see how it'd work for your business specifically?",
  },
  {
    keywords: ["call", "book", "meeting", "demo"],
    reply: "You can grab a time directly here: /book-a-call — no back-and-forth needed.",
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
      "Good question — that's exactly what we cover on a discovery call. Want me to point you to our calendar, or would you rather send a quick message to the team?";

    // Simulate a brief thinking delay for a natural feel
    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: "Something went wrong on my end — try the contact form instead." },
      { status: 500 }
    );
  }
}
