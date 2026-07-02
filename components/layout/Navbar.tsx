"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { nav, brand } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/80 bg-ink-900/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
              fill="#6E6BFF"
              stroke="#6E6BFF"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-semibold tracking-tight text-bone">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-bone-muted transition-colors hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-ghost">
            Contacto
          </Link>
          <Link href="/book-a-call" className="btn-primary">
            Reservar llamada
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-bone md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-700 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-bone-muted hover:bg-ink-800 hover:text-bone"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-bone-muted hover:bg-ink-800 hover:text-bone"
              >
                Contacto
              </Link>
              <Link
                href="/book-a-call"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Reservar llamada
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
