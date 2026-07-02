import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { brand } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Términos de Servicio",
  description: `Los términos que rigen el uso de ${brand.domain} y la contratación de los servicios de ${brand.name}.`,
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-2xl">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="text-4xl font-medium tracking-tight text-bone">Términos de Servicio</h1>
        <p className="mt-3 text-sm text-bone-dim">Última actualización: 1 de junio de 2026</p>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-bone prose-p:leading-relaxed prose-p:text-bone-muted prose-li:text-bone-muted prose-strong:text-bone">
          <p>
            Estos Términos de Servicio ("Términos") rigen tu uso de{" "}
            {brand.domain} (el "Sitio") y cualquier servicio brindado por{" "}
            {brand.legalName} ("Volta," "nosotros"). Al acceder al Sitio o
            contratar nuestros servicios, aceptás estos Términos.
          </p>

          <h2>1. Servicios</h2>
          <p>
            Volta brinda automatización con IA, desarrollo de chatbots,
            diseño de sitios web y landing pages, integración de CRM, y
            servicios digitales relacionados ("Servicios"). El alcance,
            cronograma y entregables específicos de cada proyecto se
            definirán en una propuesta o contrato de servicio por escrito
            firmado por ambas partes, el cual tiene prioridad sobre estos
            Términos generales en caso de conflicto.
          </p>

          <h2>2. Contratación y pago</h2>
          <ul>
            <li>
              Los proyectos se cotizan con alcance fijo salvo que se acuerde
              lo contrario por escrito. Se requiere un depósito
              (típicamente 50%) para comenzar el trabajo, con el saldo
              restante a pagar al completar el proyecto o según el
              cronograma detallado en la propuesta firmada.
            </li>
            <li>
              Los planes mensuales de mantenimiento y retainer se facturan
              por adelantado y se renuevan automáticamente hasta que se
              cancelen con 30 días de aviso por escrito.
            </li>
            <li>
              Los pagos atrasados pueden resultar en una pausa del trabajo
              activo y, para montos con más de 30 días de mora, pueden
              acumular intereses del 1.5% mensual o la tasa máxima permitida
              por ley.
            </li>
          </ul>

          <h2>3. Responsabilidades del cliente</h2>
          <p>
            La entrega a tiempo depende de que el cliente brinde el acceso,
            contenido, feedback y aprobaciones necesarios dentro de los
            plazos acordados. Las demoras causadas por el cliente pueden
            extender los cronogramas del proyecto correspondientemente y no
            constituyen un incumplimiento por parte de Volta.
          </p>

          <h2>4. Propiedad intelectual y titularidad</h2>
          <p>
            Al efectuarse el pago final, todo el código a medida, diseños,
            flujos y contenido creado específicamente para el cliente pasan
            a ser propiedad exclusiva del cliente. Esto no incluye las
            herramientas, frameworks o metodologías generales preexistentes
            de Volta, que Volta conserva el derecho de reutilizar en otros
            proyectos. El software, plataformas y licencias de terceros
            (por ejemplo, suscripciones a CRM, cuentas de plataformas de
            automatización) permanecen sujetos a los términos de sus
            respectivos proveedores.
          </p>

          <h2>5. Revisiones</h2>
          <p>
            Cada plan de precios incluye una cantidad definida de rondas de
            revisión según lo especificado en la propuesta. Los pedidos que
            excedan ese alcance, o cambios al alcance de trabajo
            originalmente acordado, se cotizarán por separado.
          </p>

          <h2>6. Garantías y soporte</h2>
          <p>
            Volta garantiza que el trabajo entregado funcionará
            sustancialmente como se describe en la propuesta firmada. Las
            ventanas de soporte post-lanzamiento (30 a 90 días según el
            plan) cubren la corrección de defectos sin costo adicional.
            Esta garantía no cubre problemas derivados de cambios en
            plataformas de terceros, modificaciones hechas por el cliente,
            o uso fuera del alcance previsto.
          </p>

          <h2>7. Limitación de responsabilidad</h2>
          <p>
            En la máxima medida permitida por la ley, la responsabilidad
            total de Volta por cualquier reclamo derivado de estos Términos
            o nuestros Servicios se limita al monto total pagado por el
            cliente por los Servicios que originaron el reclamo. Volta no
            es responsable por daños indirectos, incidentales o
            consecuentes, incluyendo pérdida de ganancias o datos,
            derivados del uso de los sistemas entregados.
          </p>

          <h2>8. Terminación</h2>
          <p>
            Cualquiera de las partes puede dar por terminado un proyecto
            activo con 14 días de aviso por escrito. Al finalizar, el
            cliente es responsable del pago de todo el trabajo completado
            hasta la fecha de terminación.
          </p>

          <h2>9. Confidencialidad</h2>
          <p>
            Ambas partes acuerdan mantener la confidencialidad de cualquier
            información comercial, técnica o financiera no pública
            divulgada durante el proyecto, y firmarán un acuerdo mutuo de
            confidencialidad a pedido, antes de cualquier llamada de
            descubrimiento que involucre información sensible.
          </p>

          <h2>10. Ley aplicable</h2>
          <p>
            Estos Términos se rigen por las leyes del Estado de Texas, sin
            considerar principios de conflicto de leyes, y cualquier
            disputa se resolverá en los tribunales estatales o federales
            ubicados en el condado de Travis, Texas.
          </p>

          <h2>11. Cambios a estos Términos</h2>
          <p>
            Podemos actualizar estos Términos de tanto en tanto. El uso
            continuado del Sitio o los Servicios después de que se publiquen
            cambios constituye la aceptación de los Términos revisados.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Las consultas sobre estos Términos pueden dirigirse a{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
