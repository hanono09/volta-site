import { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Reservar una llamada",
  description: "Reservá una llamada de estrategia gratuita de 30 minutos con Volta para mapear tu mayor oportunidad de automatización.",
  path: "/book-a-call",
});

const expectations = [
  "Revisamos tu proceso o sitio web actual antes de la llamada",
  "Te vas con al menos una idea concreta de automatización — incluso si nunca trabajamos juntos",
  "Sin presentación de ventas genérica, sin presión para decidir en la llamada",
  "Si es un buen fit, definimos los próximos pasos y un cronograma aproximado",
];

export default function BookACallPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">Reservar una llamada</p>
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
              30 minutos. Una respuesta clara.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-bone-muted">
              Elegí un horario que te quede cómodo. Vamos a dedicar la
              llamada a entender tu operación y decirte con claridad si —
              y cómo — tiene sentido la automatización con IA para vos.
            </p>

            <ul className="mt-8 space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex items-start gap-2.5 text-sm text-bone-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt-400" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <CalendlyEmbed />
        </div>
      </Container>
    </section>
  );
}
