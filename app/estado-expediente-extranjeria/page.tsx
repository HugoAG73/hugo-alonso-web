import Image from "next/image";

export default function EstadoExpedienteExtranjeriaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <a href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[70px] w-auto md:h-[85px]"
              priority
            />
          </a>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Estado del expediente de extranjería: qué significa y qué conviene revisar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has presentado una solicitud de extranjería y quieres saber en qué
          situación se encuentra tu expediente, es importante interpretar
          correctamente el estado administrativo y revisar qué implicaciones puede
          tener en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los estados del expediente significan lo mismo ni todas las situaciones requieren actuar del mismo modo. En algunos casos, una interpretación incorrecta puede hacer que no se detecten incidencias relevantes o que se retrase una actuación que convendría valorar a tiempo.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede indicar el estado del expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estado que aparece asociado al expediente puede ofrecer una idea de
          la fase en la que se encuentra la tramitación, pero no siempre permite
          conocer por sí solo cuál será el resultado final del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante no interpretar de forma automática un estado
          determinado sin revisar antes el contexto del expediente y la situación
          concreta del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar antes de interpretar el expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para valorar correctamente el estado del expediente, conviene revisar
          varios elementos que pueden influir en la tramitación y en el alcance
          de la información disponible.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha exacta de presentación de la solicitud</li>
          <li>El tipo de autorización o procedimiento iniciado</li>
          <li>La existencia de requerimientos o incidencias previas</li>
          <li>La documentación aportada durante la tramitación</li>
          <li>El tiempo transcurrido desde la última actuación</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si el expediente sigue una tramitación
          normal o si conviene revisar con más detalle la situación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuando el expediente no avanza o no ofrece información clara
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la preocupación no surge solo por el estado que
          aparece reflejado, sino por la falta de movimiento, la ausencia de
          resolución o la incertidumbre sobre lo que puede suceder a
          continuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tienes dudas sobre si el tiempo transcurrido entra dentro de lo
          normal, puedes consultar también la página sobre{" "}
          <a href="/cuanto-tarda-extranjeria" className="underline">
            cuánto tarda extranjería en resolver
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si no hay resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el expediente sigue en tramitación durante un tiempo prolongado
          sin resolución expresa, puede ser necesario revisar si el plazo
          aplicable ha transcurrido y qué efecto puede producir la falta de
          respuesta en ese procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas valorar esa situación, puedes consultar también la página
          sobre{" "}
          <a href="/silencio-administrativo-extranjeria" className="underline">
            silencio administrativo en extranjería
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el estado del expediente puede convertirse en un problema
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En ocasiones, el problema no es solo desconocer el significado del
          estado del expediente, sino no detectar a tiempo una incidencia, una
          demora relevante o una situación que exija una actuación concreta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin revisar el expediente puede retrasar decisiones útiles o
          hacer que determinadas opciones se valoren demasiado tarde.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Si el expediente termina en una resolución desfavorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, tras una fase prolongada de tramitación, el
          expediente puede terminar en una resolución negativa o en una
          denegación que obligue a replantear la estrategia.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya existe una resolución desfavorable o necesitas valorar qué puede hacerse tras ella, puedes consultar la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>{" "}
          y, si necesitas valorar cómo impugnar una resolución, puedes consultar también la página sobre{" "}
          <a href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </a>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Expedientes frecuentes en regularización o arraigo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Muchas consultas sobre el estado del expediente se producen en
          procedimientos de regularización, arraigo o residencia, donde la falta
          de claridad sobre la tramitación genera especial incertidumbre por su
          impacto en la situación administrativa del interesado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente está relacionado con una vía de arraigo o con otra
          fórmula de regularización, también puedes consultar las páginas sobre{" "}
          <a href="/arraigo-social" className="underline">
            arraigo social o arraigo sociolaboral
          </a>{" "}
          y{" "}
          <a href="/regularizacion-espana" className="underline">
            regularización en España
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si quieres saber qué significa el estado de tu expediente de
          extranjería y si conviene adoptar alguna actuación, lo más prudente es
          revisar el procedimiento concreto, la fecha de presentación, las
          incidencias previas y la situación real de la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esa revisión permite determinar si el expediente sigue un curso normal,
          si conviene seguir esperando o si resulta necesario valorar otras
          opciones en función del estado del caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar el estado de tu expediente de extranjería y qué
          puede hacerse en tu situación, puedes solicitar una revisión inicial
          para valorar las opciones disponibles en tu caso.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Solicitar revisión de mi caso
          </a>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Consultar por WhatsApp
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-stone-300 px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-stone-100"
          >
            Volver a la web
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            <br />
            © 2026 Hugo Alonso Abogado. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="/despacho">Despacho</a>
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-privacidad">Política de privacidad</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}