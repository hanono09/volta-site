const objeciones: [string, string][] = [
  [
    "No tengo tiempo para esto ahora",
    "Justamente por eso — nosotros hacemos todo el trabajo. Solo necesito 10 minutos tuyos para entender el negocio, el resto lo armamos nosotros.",
  ],
  [
    "Es caro / no tengo presupuesto",
    "Entiendo. Arrancamos desde $2.900 y se paga una sola vez, no es mensual. Pensalo así: un cliente nuevo por semana ya lo paga solo.",
  ],
  [
    "Ya tengo Instagram, no necesito página",
    "Instagram está buenísimo, pero se pierde en el feed y no aparece cuando alguien te busca en Google. La web trabaja las 24 horas, incluso mientras dormís.",
  ],
  [
    "Lo tengo que pensar / hablarlo con mi socio",
    '"Perfecto, tiene sentido. ¿Te parece si te mando la info por WhatsApp para que la vean con calma, y te llamo el [día] para ver qué les pareció?"',
  ],
  [
    "¿Y ustedes quiénes son?",
    "Somos Volta, armamos páginas web y sistemas de automatización para negocios locales. Te puedo mandar ejemplos de trabajos que ya hicimos si querés verlos.",
  ],
  [
    "No confío en esto por teléfono",
    "Totalmente entendible. Te propongo esto: te mando toda la info por WhatsApp con ejemplos reales, así lo ves con calma antes de decidir nada.",
  ],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="rounded-t-xl bg-volt-500 px-4 py-2.5 text-sm font-bold text-white">
        {title}
      </div>
      <div className="rounded-b-xl border border-t-0 border-ink-600 bg-ink-800 p-5 space-y-3 text-sm leading-relaxed text-bone">
        {children}
      </div>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border-l-2 border-volt-500 bg-ink-700 px-4 py-3 italic">
      {children}
    </div>
  );
}

export function CallScript() {
  return (
    <div>
      <h1 className="text-2xl font-medium tracking-tight text-bone">Guión de Llamada</h1>
      <p className="mt-2 mb-8 text-sm text-bone-muted">
        Es una guía, no un libreto. Usalo para no quedarte en blanco, pero hablá
        natural — la idea es sonar como una persona, no como alguien leyendo un guion.
      </p>

      <Section title="1. Apertura (los primeros 15 segundos)">
        <Quote>
          "Hola, ¿hablo con [nombre del dueño/encargado]? Te llamo de Volta — ayudamos a
          negocios como el tuyo a conseguir más clientes con una página web propia.
          Estaba viendo [rubro] en Google y noté que [Nombre del negocio] todavía no
          tiene sitio web. ¿Tenés dos minutos para que te cuente de qué se trata?"
        </Quote>
        <p className="text-xs italic text-bone-dim">
          Tip: decí el nombre del negocio en voz alta — demuestra que investigaste antes
          de llamar, no es un llamado al azar.
        </p>
      </Section>

      <Section title="2. Preguntas para entender su situación">
        <p>
          El objetivo acá no es vender todavía — es que hable el dueño y vos entiendas su
          realidad. Elegí 2 o 3, no las hagas todas de una:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li>¿Hoy cómo hacen para que gente nueva los encuentre? ¿Es más boca en boca, Instagram, o pasan por la puerta?</li>
          <li>¿Reciben consultas por WhatsApp o Instagram para pedir turno?</li>
          <li>¿Alguna vez se les complicó responder rápido y terminaron perdiendo un cliente?</li>
          <li>¿Ya intentaron tener una página o siempre quedó pendiente?</li>
        </ul>
      </Section>

      <Section title="3. La propuesta (el pitch corto)">
        <Quote>
          "Lo que hacemos es armarles una página web profesional y rápida, con un botón
          directo a WhatsApp para que la gente que los busca en Google les escriba al
          toque. Si querés, también podemos sumar un sistema para que los clientes pidan
          turno solos, sin que ustedes tengan que estar atendiendo el teléfono todo el día."
        </Quote>
        <Quote>
          "Nosotros nos encargamos de todo el trabajo — vos solo nos contás sobre el
          negocio, y en 2 o 3 semanas está lista."
        </Quote>
        <p className="text-xs italic text-bone-dim">
          Tip: si preguntan precio, mencionás que arranca en $2.900 y depende de lo que
          necesiten — no cierres el precio en la primera llamada, llevalos a agendar una
          charla más tranquila.
        </p>
      </Section>

      <Section title="4. Objeciones más comunes y cómo responder">
        <div className="divide-y divide-ink-700">
          {objeciones.map(([objecion, respuesta]) => (
            <div key={objecion} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[36%_1fr] sm:gap-4">
              <p className="font-semibold text-bone">{objecion}</p>
              <p className="text-bone-muted">{respuesta}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="5. Cierre — pedí el próximo paso, siempre">
        <p>Nunca termines la llamada sin un próximo paso concreto. Elegí uno según cómo vino la charla:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li>Si está interesado: "Genial, te mando por WhatsApp un par de preguntas para armar todo. ¿Cuál es tu número?"</li>
          <li>Si duda: "Sin drama, te mando la info igual y te escribo en unos días para ver qué te pareció, ¿te parece?"</li>
          <li>Si dice que no: "Perfecto, igual te dejo mi contacto por si más adelante te sirve. ¡Que tengas buen día!"</li>
        </ul>
      </Section>

      <Section title="6. Tips generales">
        <ul className="list-disc space-y-1.5 pl-5 text-bone-muted">
          <li>Sonreí mientras hablás — se nota en la voz, aunque no te vean.</li>
          <li>Escuchá más de lo que hablás. Si el dueño está contando algo, no lo cortes con el pitch.</li>
          <li>No suenes apurado. Una llamada tranquila genera más confianza que una rápida.</li>
          <li>Anotá todo apenas cortás, mientras lo tenés fresco.</li>
          <li>Si te dicen que no, agradecé igual — quizás en 3 meses cambian de opinión.</li>
        </ul>
      </Section>
    </div>
  );
}
