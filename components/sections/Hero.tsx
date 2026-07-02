"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NodeGraph } from "@/components/ui/NodeGraph";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-volt" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="flex items-center gap-1.5 rounded-full border border-ink-500 bg-ink-800/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bone-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-soft" />
            Currently onboarding Q3 2026 clients
          </span>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-medium leading-[1.08] tracking-tight text-bone sm:text-5xl lg:text-6xl"
            >
              We build the systems that run your{" "}
              <span className="gradient-text">business while you sleep.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-bone-muted"
            >
              Volta designs and ships custom AI automation, chatbots, and
              high-converting websites for ambitious companies — fully
              built, fully integrated, live in 2–6 weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/book-a-call" className="btn-primary">
                Book a free strategy call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                <Sparkles className="h-4 w-4" />
                See client results
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 font-mono text-xs text-bone-dim"
            >
              No contracts longer than the work itself. You own everything we build.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="card-surface relative p-6 sm:p-10"
          >
            <NodeGraph />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
