"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Lo que dicen los clientes"
          align="center"
          title="No te quedes solo con nuestra palabra."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-surface flex h-full flex-col p-6"
            >
              <Quote className="h-5 w-5 text-volt-500" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-bone-muted">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-700 pt-4">
                <p className="text-sm font-medium text-bone">{t.name}</p>
                <p className="text-xs text-bone-dim">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
