import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Casos de éxito",
  description:
    "Resultados reales de proyectos de automatización con IA, chatbots y sitios web de Volta — en bienes raíces, salud, logística y fitness.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">Casos de éxito</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            Sistemas que ya entregamos, y qué cambiaron realmente.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Cada número de abajo viene de reportes reales de clientes,
            medidos desde el lanzamiento. Sin estimaciones, sin proyecciones "hasta".
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="card-surface group flex flex-col p-8 transition-colors hover:border-volt-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-bone-dim">
                    {c.industry} · {c.timeline}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-bone-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt-400" />
                </div>
                <h2 className="mt-4 text-2xl font-medium text-bone">{c.client}</h2>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{c.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-ink-600 px-3 py-1 text-[11px] text-bone-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink-700 pt-5">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-lg font-medium text-volt-300">{r.metric}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-bone-dim">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
