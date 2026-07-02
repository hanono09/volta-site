import { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Servicios",
  description:
    "Automatización con IA, chatbots, sitios web, integraciones con CRM, automatización de WhatsApp, sistemas de citas, soporte con IA, automatización interna, optimización de procesos y dashboards personalizados.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">Servicios</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            Todo lo que necesitás para operar más liviano — construido, integrado y de tu propiedad.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Rara vez vendemos esto por separado. La mayoría de los proyectos
            combinan dos o tres de los siguientes en un solo sistema. Abajo
            está el menú completo — explorá lo que sea relevante para dónde
            tu operación está perdiendo tiempo hoy.
          </p>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <div className="flex flex-wrap gap-2 border-y border-ink-700 py-5">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-ink-600 px-3.5 py-1.5 text-xs text-bone-muted transition-colors hover:border-volt-400 hover:text-bone"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="space-y-px">
            {services.map((s, i) => {
              const Icon = (Icons as any)[s.icon] || Icons.Sparkle;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 border-b border-ink-700 py-14 first:pt-0"
                >
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <span className="font-mono text-xs text-bone-dim">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10 text-volt-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-2xl font-medium tracking-tight text-bone">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-bone-muted">
                        {s.description}
                      </p>

                      <div className="mt-6 space-y-2">
                        <p className="eyebrow">Resultados típicos</p>
                        <ul className="space-y-1.5">
                          {s.outcomes.map((o) => (
                            <li key={o} className="text-sm text-bone-muted">
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href="/book-a-call" className="btn-secondary mt-6">
                        Hablar sobre esto para tu negocio
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div className="card-surface p-7">
                      <p className="eyebrow mb-4">Qué incluye</p>
                      <ul className="space-y-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-bone-muted">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
