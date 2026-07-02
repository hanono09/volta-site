"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-ink-600 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-radial-volt opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-tight text-bone sm:text-4xl">
              Every week you wait is another week your competitors automate first.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bone-muted">
              Book a free 30-minute strategy call. We'll map your biggest
              automation opportunity — no obligation, no generic pitch deck.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/book-a-call" className="btn-primary">
                Book a free strategy call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Send a message instead
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
