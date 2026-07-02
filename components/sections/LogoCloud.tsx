import { Container } from "@/components/ui/Container";
import { clientLogos } from "@/lib/data";

export function LogoCloud() {
  const list = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-ink-700 py-10">
      <Container>
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-bone-dim">
          La confianza de equipos que prefieren construir antes que cuidar planillas
        </p>
      </Container>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {list.map((logo, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xl font-semibold tracking-tight text-bone-dim/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
