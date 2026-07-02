"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="Five stages. Zero guesswork."
          description="Every engagement follows the same disciplined process — because the systems we build only work if the process building them does too."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-600 bg-ink-600 md:grid-cols-5">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-ink-900 p-6"
            >
              <p className="font-mono text-xs text-volt-400">{p.step}</p>
              <h3 className="mt-3 text-base font-medium text-bone">{p.title}</h3>
              <p className="mt-1 font-mono text-[11px] text-bone-dim">{p.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-bone-muted">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
