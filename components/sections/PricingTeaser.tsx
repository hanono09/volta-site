"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingTiers } from "@/lib/data";

export function PricingTeaser() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Precios"
          align="center"
          title="Alcance fijo. Precio fijo. Sin sorpresas."
          description="Tres planes armados según cuánto de tu operación necesita automatizarse — no según cuántas horas podamos facturar."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                tier.highlighted
                  ? "border-volt-500 bg-ink-800"
                  : "border-ink-600 bg-ink-800/40"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-volt-500 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                  Más elegido
                </span>
              )}
              <h3 className="text-lg font-medium text-bone">{tier.name}</h3>
              <p className="mt-2 text-3xl font-medium tracking-tight text-bone">
                {tier.price}
                <span className="ml-1.5 text-sm font-normal text-bone-dim">
                  {tier.cadence}
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-bone-muted">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {tier.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-bone-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className={`mt-8 w-full text-center ${
                  tier.highlighted ? "btn-primary" : "btn-secondary"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
