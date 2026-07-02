"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por qué Volta"
          title="Construido como software. Con el precio de un servicio."
          description="La mayoría de las agencias vende horas. Nosotros vendemos resultados — sistemas diseñados para funcionar solos, de tu propiedad absoluta, y medidos contra el tiempo e ingresos que realmente generan."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = (Icons as any)[b.icon] || Icons.Sparkle;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-surface p-6 transition-colors hover:border-volt-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500/10 text-volt-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-medium text-bone">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
