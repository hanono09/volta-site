import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="max-w-lg text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-3xl font-medium tracking-tight text-bone sm:text-4xl">
          This page didn't make it into the workflow.
        </h1>
        <p className="mt-4 text-base text-bone-muted">
          The page you're looking for doesn't exist or has moved. Let's get
          you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
