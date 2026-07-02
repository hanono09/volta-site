import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return buildMetadata({ title: "Caso de éxito", description: "", path: "/case-studies" });
  return buildMetadata({
    title: `${study.client} — Caso de éxito`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl">
          <Link href="/case-studies" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            Todos los casos de éxito
          </Link>

          <p className="eyebrow mb-4 mt-8">
            {study.industry} · {study.timeline}
          </p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            {study.client}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-bone-muted">{study.summary}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {study.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-600 px-3 py-1 text-xs text-bone-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {study.results.map((r) => (
              <div key={r.label} className="card-surface p-6 text-center">
                <p className="text-2xl font-medium text-volt-300">{r.metric}</p>
                <p className="mt-1 text-xs text-bone-dim">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-10">
            <div>
              <p className="eyebrow mb-3">El desafío</p>
              <p className="text-base leading-relaxed text-bone-muted">{study.challenge}</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Qué construimos</p>
              <p className="text-base leading-relaxed text-bone-muted">{study.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
