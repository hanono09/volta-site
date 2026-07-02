import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Política de Cookies",
  description: `Cómo usa ${brand.name} las cookies en ${brand.domain}.`,
  path: "/legal/cookies",
});

const cookieTable = [
  {
    category: "Esenciales",
    purpose: "Necesarias para el funcionamiento principal del Sitio (navegación, envío de formularios, seguridad).",
    canDisable: "No",
  },
  {
    category: "Analíticas",
    purpose: "Nos ayudan a entender cómo los visitantes usan el Sitio para poder mejorarlo.",
    canDisable: "Sí",
  },
  {
    category: "Agendamiento",
    purpose: "Configuradas por Calendly cuando usás el widget de reservas en /book-a-call.",
    canDisable: "Sí (desactiva el widget de reservas)",
  },
];

export default function CookiesPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Política de Cookies</h1>
        <p className="mt-3 text-sm text-bone-dim">Última actualización: 1 de junio de 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            Esta Política de Cookies explica cómo {brand.legalName} ("Volta")
            usa cookies y tecnologías de seguimiento similares en{" "}
            {brand.domain}.
          </p>

          <h2>1. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos de texto que se guardan en tu
            dispositivo cuando visitás un sitio web. Ayudan a los sitios a
            recordar información sobre tu visita, lo que puede facilitar el
            uso del sitio y hacerlo más útil para vos.
          </p>

          <h2>2. Cookies que usamos</h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-ink-600">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-800">
              <tr>
                <th className="px-4 py-3 font-medium text-bone">Categoría</th>
                <th className="px-4 py-3 font-medium text-bone">Propósito</th>
                <th className="px-4 py-3 font-medium text-bone">¿Se puede desactivar?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700">
              {cookieTable.map((row) => (
                <tr key={row.category}>
                  <td className="px-4 py-3 text-bone-muted">{row.category}</td>
                  <td className="px-4 py-3 text-bone-muted">{row.purpose}</td>
                  <td className="px-4 py-3 text-bone-muted">{row.canDisable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <h2>3. Gestión de cookies</h2>
          <p>
            Podés controlar y eliminar cookies desde la configuración de tu
            navegador. La mayoría de los navegadores te permiten rechazar
            cookies por completo o recibir un aviso cuando se está
            configurando una cookie. Desactivar las cookies esenciales
            puede afectar el funcionamiento del Sitio; desactivar las
            cookies analíticas o de agendamiento no afectará tu capacidad
            de navegar el Sitio o contactarnos directamente.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            Algunas cookies son configuradas por servicios de terceros
            incorporados en nuestro Sitio, como Calendly para agendamiento.
            Estos terceros son responsables de sus propias prácticas de
            cookies, que se rigen por sus respectivas políticas de
            privacidad y cookies.
          </p>

          <h2>5. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política de Cookies periódicamente para
            reflejar cambios en las cookies que usamos o por razones
            legales, operativas o regulatorias.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Las consultas sobre esta Política de Cookies pueden dirigirse a{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
