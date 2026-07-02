import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-lg text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-3xl font-medium tracking-tight text-bone sm:text-4xl">
          Esta página no llegó a formar parte del flujo.
        </h1>
        <p className="mt-4 text-base text-bone-muted">
          La página que buscás no existe o fue movida. Volvamos a encaminarte.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Volver al inicio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contactanos
          </Link>
        </div>
      </Container>
    </section>
  );
}
