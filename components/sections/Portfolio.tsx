"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data";

export function Portfolio() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resultados de clientes"
            title="Sistemas reales. Números reales."
            description="Una muestra de lo que ya entregamos — cada cifra sale de reportes de clientes reales, no de métricas de vanidad."
          />
          <Link href="/case-studies" className="btn-ghost shrink-0">
            Ver todos los casos de éxito
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Link
                href={`/case-studies/${c.slug}`}
                className="card-surface group flex h-full flex-col p-7 transition-colors hover:border-volt-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-bone-dim">
                    {c.industry}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-bone-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt-400" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-bone">{c.client}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">{c.summary}</p>

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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
