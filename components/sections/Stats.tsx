"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats, trustBadges } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-3xl font-medium tracking-tight text-bone sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-bone-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-ink-700 pt-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-ink-600 bg-ink-800/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-bone-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
