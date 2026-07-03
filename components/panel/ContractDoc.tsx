import { Placeholder, DocSection, DocTable, DocLetterhead, DocFooter } from "@/components/panel/DocUI";

function Clause({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return <DocSection title={`Cláusula ${num} — ${title}`}>{children}</DocSection>;
}

export function ContractDoc() {
  return (
    <div>
      <DocLetterhead />

      <h1 className="text-2xl font-medium tracking-tight text-bone">
        Contrato de Prestación de Servicios
      </h1>

      <p className="mt-6 mb-6 text-sm leading-relaxed text-bone">
        Entre <span className="font-semibold">Volta Automation</span>, con domicilio en Buenos
        Aires, Argentina, en adelante <span className="font-semibold">"el Prestador"</span>, por
        una parte; y <Placeholder>[NOMBRE COMPLETO / RAZÓN SOCIAL DEL CLIENTE]</Placeholder>,
        CUIT/DNI <Placeholder>[XX-XXXXXXXX-X]</Placeholder>, con domicilio en{" "}
        <Placeholder>[DIRECCIÓN DEL CLIENTE]</Placeholder>, en adelante "el Cliente", por la
        otra, se celebra el presente contrato de prestación de servicios, sujeto a las
        siguientes cláusulas:
      </p>

      <Clause num="1" title="Objeto">
        <p>
          El Prestador se compromete a desarrollar y entregar al Cliente los servicios
          detallados en la Propuesta Comercial de fecha <Placeholder>[DD/MM/AAAA]</Placeholder>,
          que se adjunta como Anexo I y forma parte integral del presente contrato.
        </p>
      </Clause>

      <Clause num="2" title="Alcance de los servicios">
        <p>
          El alcance del trabajo incluye exclusivamente lo detallado en el Anexo I. Cualquier
          solicitud fuera de dicho alcance será considerada un trabajo adicional y cotizada por
          separado antes de ser ejecutada.
        </p>
      </Clause>

      <Clause num="3" title="Plazo de ejecución">
        <p>
          El plazo estimado de entrega es de <Placeholder>[X semanas]</Placeholder>, contado a
          partir de la recepción de toda la información y materiales solicitados al Cliente
          (textos, fotos, accesos, etc.). Las demoras atribuibles al Cliente en la entrega de
          dicha información extienden el plazo de forma proporcional.
        </p>
      </Clause>

      <Clause num="4" title="Precio y forma de pago">
        <DocTable
          headers={["Concepto", "Monto"]}
          align={["left", "right"]}
          rows={[
            [<Placeholder key="1">[Anticipo — 50% al firmar]</Placeholder>, "$[XXX.XXX]"],
            [<Placeholder key="2">[Saldo — 50% contra entrega]</Placeholder>, "$[XXX.XXX]"],
            [<span key="3" className="font-semibold text-bone">TOTAL</span>, <span key="4" className="font-semibold text-bone">$[XXX.XXX]</span>],
          ]}
        />
        <p className="text-xs italic text-bone-dim">
          El trabajo comienza una vez acreditado el pago del anticipo. El saldo se abona antes
          de la publicación final del sitio/sistema en producción.
        </p>
      </Clause>

      <Clause num="5" title="Propiedad intelectual">
        <p>
          Una vez abonado el saldo total, todo el código, diseño y contenido desarrollado
          específicamente para el Cliente pasa a ser de su exclusiva propiedad. El Prestador
          conserva el derecho de reutilizar herramientas, componentes genéricos y metodologías
          propias en otros proyectos. Las licencias de software o plataformas de terceros
          (hosting, dominio, WhatsApp Business API, etc.) quedan sujetas a los términos de sus
          respectivos proveedores.
        </p>
      </Clause>

      <Clause num="6" title="Confidencialidad">
        <p>
          Ambas partes se comprometen a mantener confidencialidad sobre la información
          comercial, técnica o financiera no pública a la que accedan durante la relación
          contractual, tanto durante su vigencia como después de finalizada.
        </p>
      </Clause>

      <Clause num="7" title="Garantía y soporte">
        <p>
          El Prestador ofrece <Placeholder>[30 días]</Placeholder> de soporte gratuito
          posteriores a la entrega, cubriendo correcciones de errores del desarrollo original.
          No incluye cambios de alcance, contenido nuevo, o fallas originadas por modificaciones
          realizadas por el Cliente o terceros.
        </p>
      </Clause>

      <Clause num="8" title="Modificaciones al alcance">
        <p>
          Cualquier cambio al alcance original deberá acordarse por escrito entre ambas partes,
          incluyendo su impacto en plazo y precio, antes de ser ejecutado.
        </p>
      </Clause>

      <Clause num="9" title="Terminación anticipada">
        <p>
          Cualquiera de las partes puede rescindir este contrato con un aviso previo de 7 días
          corridos. En caso de rescisión, el Cliente abona el trabajo efectivamente realizado
          hasta ese momento, calculado proporcionalmente sobre el total acordado.
        </p>
      </Clause>

      <Clause num="10" title="Jurisdicción">
        <p>
          Para cualquier controversia derivada del presente contrato, las partes se someten a
          los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, Argentina,
          renunciando a cualquier otro fuero o jurisdicción.
        </p>
      </Clause>

      <p className="my-6 text-xs italic leading-relaxed text-bone-dim">
        Este documento es una plantilla general de referencia y no reemplaza el asesoramiento
        de un profesional legal. Se recomienda su revisión por un abogado antes de utilizarlo en
        proyectos de mayor envergadura o valor.
      </p>

      <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2">
        <div>
          <div className="mb-2 border-b border-ink-500 pb-8" />
          <p className="font-semibold text-bone">Volta Automation</p>
          <p className="text-bone-muted">Prestador</p>
          <p className="mt-1 italic text-volt-300">Fecha: ___/___/______</p>
        </div>
        <div>
          <div className="mb-2 border-b border-ink-500 pb-8" />
          <p className="italic text-volt-300">[Nombre del Cliente]</p>
          <p className="text-bone-muted">Cliente</p>
          <p className="mt-1 italic text-volt-300">Fecha: ___/___/______</p>
        </div>
      </div>

      <DocFooter />
    </div>
  );
}
