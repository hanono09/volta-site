import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Stats } from "@/components/sections/Stats";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";
import { Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Volta es un estudio de automatización con IA que construye los sistemas que empresas ambiciosas usan para operar más liviano, responder más rápido y crecer sin sumar personal.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Resultados, no horas facturadas",
    description:
      "No medimos el éxito en horas registradas o funcionalidades entregadas. Lo medimos en horas ahorradas e ingresos generados — y reportamos ambos.",
  },
  {
    icon: Eye,
    title: "Sin cajas negras",
    description:
      "Cada sistema que construimos queda documentado, explicado y entregado por completo. Nunca deberías necesitarnos a nosotros para entender lo que construimos para vos.",
  },
  {
    icon: Heart,
    title: "Construido para durar después del lanzamiento",
    description:
      "Diseñamos para la versión real y desordenada de tu negocio — casos límite, excepciones y todo — no para la versión prolija de una demo.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-10 sm:pt-28">
        <Container className="max-w-3xl">
          <p className="eyebrow mb-4">Nosotros</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
            Empezamos Volta porque la mayoría de la "automatización" era solo cinta adhesiva cara.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-bone-muted">
            Fundada en {brand.founded}, Volta nació después de ver a demasiadas
            empresas comprar chatbots pre-armados y plantillas rígidas de
            Zapier que se rompían apenas un cliente real hacía algo
            inesperado. Construimos distinto: primero mapeamos cómo opera
            realmente un negocio, y después diseñamos la automatización
            alrededor de esa realidad — no al revés.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-bone-muted">
            Hoy trabajamos con inmobiliarias, consultorios de salud,
            operadores logísticos, estudios legales y empresas de servicios
            en rápido crecimiento — en cualquier lugar donde el trabajo
            repetitivo esté costando silenciosamente más de lo que el
            liderazgo se da cuenta.
          </p>
        </Container>
      </section>

      <Stats />

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Lo que creemos"
            title="Tres principios que dan forma a cada proyecto."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card-surface p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-volt-500/10 text-volt-400">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-medium text-bone">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="El equipo"
            title="Un equipo senior chico. Sin gerentes de cuenta que solo pasan mensajes."
            description="Cada proyecto lo lleva un líder de proyecto e ingeniero de automatización dedicados, con quienes hablás directamente — no un elenco rotativo de juniors aprendiendo a costa tuya."
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
