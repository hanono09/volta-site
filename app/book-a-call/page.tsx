import { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Call",
  description: "Book a free 30-minute strategy call with Volta to map your biggest automation opportunity.",
  path: "/book-a-call",
});

const expectations = [
  "We review your current process or website before the call",
  "You'll leave with at least one concrete automation idea — even if we never work together",
  "No generic sales deck, no pressure to decide on the call",
  "If it's a fit, we'll outline next steps and a rough timeline",
];

export default function BookACallPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">Book a call</p>
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              30 minutes. One clear answer.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-bone-muted">
              Pick a time that works. We'll spend the call understanding
              your operation and tell you plainly whether — and how — AI
              automation makes sense for you.
            </p>

            <ul className="mt-8 space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-sm text-bone-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <CalendlyEmbed />
        </div>
      </Container>
    </section>
  );
}
