import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad",
  description: `Cómo ${brand.name} recopila, usa y protege tu información.`,
  path: "/legal/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Política de Privacidad</h1>
        <p className="mt-3 text-sm text-bone-dim">Última actualización: 1 de junio de 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            {brand.legalName} ("Volta," "nosotros," o "nuestro") respeta tu
            privacidad. Esta Política de Privacidad explica cómo
            recopilamos, usamos, divulgamos y protegemos tu información
            cuando visitás {brand.domain} (el "Sitio") o contratás nuestros
            servicios.
          </p>

          <h2>1. Información que recopilamos</h2>
          <p>Recopilamos información de las siguientes maneras:</p>
          <ul>
            <li>
              <strong>Información que proporcionás directamente:</strong>{" "}
              Nombre, dirección de email, nombre de empresa, número de
              teléfono, y cualquier dato enviado a través de nuestro
              formulario de contacto, formulario de reserva o widget de chat.
            </li>
            <li>
              <strong>Información recopilada automáticamente:</strong>{" "}
              Dirección IP, tipo de navegador, información del dispositivo,
              páginas visitadas, y tiempo de permanencia en el Sitio,
              recopilados mediante cookies y herramientas de análisis.
            </li>
            <li>
              <strong>Datos de agendamiento de terceros:</strong> Cuando
              reservás una llamada a través de nuestra integración con
              Calendly, Calendly recopila y procesa tu información de
              agendamiento bajo su propia política de privacidad.
            </li>
          </ul>

          <h2>2. Cómo usamos tu información</h2>
          <ul>
            <li>Para responder consultas y brindar los servicios solicitados</li>
            <li>Para agendar y gestionar consultas y trabajos de proyectos</li>
            <li>Para enviar actualizaciones de proyecto, facturas y comunicaciones administrativas</li>
            <li>Para mejorar nuestro Sitio, servicios y marketing en base a datos de uso agregados</li>
            <li>Para cumplir con obligaciones legales</li>
          </ul>
          <p>
            No vendemos tu información personal a terceros bajo ninguna
            circunstancia.
          </p>

          <h2>3. Cookies y seguimiento</h2>
          <p>
            Usamos cookies y tecnologías similares para operar y mejorar el
            Sitio. Para conocer en detalle las categorías de cookies que
            usamos y cómo gestionar tus preferencias, consultá nuestra{" "}
            <a href="/legal/cookies">Política de Cookies</a>.
          </p>

          <h2>4. Servicios de terceros</h2>
          <p>
            Usamos proveedores externos de confianza para operar nuestro
            negocio, incluyendo Calendly (agendamiento), Resend (email
            transaccional), y herramientas estándar de análisis web. Estos
            proveedores solo reciben la información necesaria para cumplir
            su función y están contractualmente obligados a protegerla.
          </p>

          <h2>5. Retención de datos</h2>
          <p>
            Retenemos la información personal solo el tiempo necesario para
            cumplir los propósitos descritos en esta política, o según lo
            requiera la ley. Los envíos del formulario de contacto y las
            comunicaciones relacionadas con proyectos se conservan
            típicamente durante la duración de nuestra relación comercial
            más un período razonable posterior para fines de registro.
          </p>

          <h2>6. Tus derechos</h2>
          <p>
            Según tu ubicación, es posible que tengas derecho a acceder,
            corregir, eliminar o restringir el uso de tu información
            personal, y a recibir una copia de los datos que tenemos sobre
            vos. Para ejercer cualquiera de estos derechos, contactanos a{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <h2>7. Seguridad de datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas razonables para
            proteger tu información contra acceso no autorizado, pérdida o
            uso indebido. Ningún método de transmisión por internet es 100%
            seguro, y no podemos garantizar seguridad absoluta.
          </p>

          <h2>8. Privacidad de menores</h2>
          <p>
            Nuestros servicios están destinados a empresas e individuos
            mayores de 18 años. No recopilamos conscientemente información
            personal de menores.
          </p>

          <h2>9. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad de tanto en
            tanto. Los cambios importantes se reflejarán con una fecha de
            "Última actualización" renovada al inicio de esta página.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Las consultas sobre esta Política de Privacidad pueden
            dirigirse a <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
