import { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Volta about an AI automation, chatbot, or website project.",
  path: "/contact",
});

const details = [
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Message us directly", href: "#" },
  { icon: MapPin, label: "Based in", value: brand.address },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              Tell us what's slowing you down.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-bone-muted">
              Whether you've got a fully scoped project or just a hunch that
              something should be automated, send us the details. We'll
              reply with a clear, honest take — even if that take is "this
              probably isn't worth automating yet."
            </p>

            <div className="mt-10 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-volt-500/10 text-volt-400">
                    <d.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-bone-dim">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm text-bone hover:text-volt-300">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm text-bone">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
