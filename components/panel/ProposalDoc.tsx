import { Placeholder, DocSection, DocTable, DocLetterhead, DocFooter } from "@/components/panel/DocUI";

export function ProposalDoc() {
  return (
    <div>
      <DocLetterhead />

      <h1 className="text-2xl font-medium tracking-tight text-bone">Propuesta Comercial</h1>
      <p className="mt-1 mb-6 italic text-volt-300">[Nombre del negocio del cliente]</p>

      <DocTable
        headers={["Preparado para", "Preparado por", "Fecha", "Válida hasta"]}
        rows={[[
          <Placeholder key="a">[Nombre del cliente]</Placeholder>,
          "Volta Automation",
          <Placeholder key="b">[DD/MM/AAAA]</Placeholder>,
          <Placeholder key="c">[DD/MM/AAAA]</Placeholder>,
        ]]}
      />

      <div className="mt-6" />

      <DocSection title="El desafío">
        <p>Durante la llamada de descubrimiento, identificamos lo siguiente:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li><Placeholder>[Ej: No cuentan con presencia online — no aparecen cuando alguien los busca en Google]</Placeholder></li>
          <li><Placeholder>[Ej: Reciben consultas por WhatsApp/Instagram que a veces se pierden o tardan en responder]</Placeholder></li>
          <li><Placeholder>[Ej: No tienen un sistema de reservas — todo se coordina manualmente]</Placeholder></li>
        </ul>
      </DocSection>

      <DocSection title="La solución propuesta">
        <p>Proponemos lo siguiente:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li><Placeholder>[Ej: Sitio web profesional de 5 páginas, optimizado para que aparezcan en búsquedas locales]</Placeholder></li>
          <li><Placeholder>[Ej: Botón de WhatsApp directo para que los clientes escriban al instante]</Placeholder></li>
          <li><Placeholder>[Ej: Sistema de reservas/turnos integrado al sitio]</Placeholder></li>
          <li><Placeholder>[Ej: Chatbot con IA para responder preguntas frecuentes fuera de horario]</Placeholder></li>
        </ul>
      </DocSection>

      <DocSection title="Cronograma">
        <DocTable
          headers={["Etapa", "Duración", "Qué incluye"]}
          rows={[
            ["1. Descubrimiento", "2-3 días", "Relevamiento de información, fotos, textos y branding"],
            ["2. Diseño y desarrollo", "1-2 semanas", "Construcción del sitio/sistema según lo acordado"],
            ["3. Revisión", "2-3 días", "Ajustes según feedback del cliente"],
            ["4. Lanzamiento", "1 día", "Publicación en vivo y capacitación de uso"],
          ]}
        />
      </DocSection>

      <DocSection title="Inversión">
        <DocTable
          headers={["Concepto", "Precio"]}
          align={["left", "right"]}
          rows={[
            [<Placeholder key="1">[Ej: Sitio web de 5 páginas + chatbot básico]</Placeholder>, "$[XXX.XXX]"],
            [<Placeholder key="2">[Ej: Sistema de reservas integrado]</Placeholder>, "$[XXX.XXX]"],
            [<span key="3" className="font-semibold text-bone">TOTAL</span>, <span key="4" className="font-semibold text-bone">$[XXX.XXX]</span>],
          ]}
        />
        <p className="text-xs italic text-bone-dim">
          Forma de pago: 50% al confirmar el proyecto, 50% contra entrega. Precio en pesos
          argentinos, pago único (no incluye hosting ni dominio, que se cotizan aparte si el
          cliente no los tiene).
        </p>
      </DocSection>

      <DocSection title="Qué necesitamos de vos">
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li>Fotos del local, productos o servicios (o coordinamos una sesión si no tenés)</li>
          <li>Textos básicos: nombre, horarios, dirección, redes sociales</li>
          <li>Un logo, si ya tenés uno (si no, te ayudamos a crear uno simple)</li>
          <li>Disponibilidad para una llamada breve de revisión antes del lanzamiento</li>
        </ul>
      </DocSection>

      <DocSection title="Próximos pasos">
        <p>
          Para avanzar, respondé este mensaje confirmando la propuesta, o coordinemos una
          llamada rápida para resolver dudas. Una vez confirmado, te enviamos el contrato y el
          link de pago del anticipo.
        </p>
      </DocSection>

      <DocFooter />
    </div>
  );
}
