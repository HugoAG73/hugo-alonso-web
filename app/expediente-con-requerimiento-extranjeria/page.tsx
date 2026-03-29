import Image from "next/image";
import Link from "next/link";

export default function ExpedienteConRequerimientoExtranjeriaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[70px] w-auto md:h-[85px]"
              priority
            />
          </Link>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Expediente con requerimiento en extranjería: qué significa y cómo actuar dentro de plazo
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Recibir un requerimiento en un expediente de extranjería indica que la Administración necesita que aportes documentación adicional o que subsanes algún aspecto de tu solicitud. A partir de ese momento, el procedimiento queda condicionado a la respuesta que se presente dentro del plazo concedido.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Aunque en muchos casos el requerimiento puede resolverse sin mayores consecuencias, también puede influir directamente en el resultado del expediente si no se responde adecuadamente o si la documentación presentada no resulta suficiente, lo que puede condicionar el sentido de la resolución.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué implica jurídicamente un requerimiento
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un requerimiento no es una resolución negativa, pero sí una actuación relevante dentro del procedimiento. Supone que la Administración ha detectado una falta de documentación, una posible incidencia o la necesidad de aclarar determinados aspectos antes de resolver.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          A partir de ese momento, el expediente no puede resolverse hasta que se conteste al requerimiento o hasta que finalice el plazo concedido sin respuesta.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si no se responde dentro de plazo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El plazo para contestar un requerimiento es limitado. Si no se responde dentro de ese plazo, la Administración puede continuar el procedimiento con la documentación disponible o incluso considerar que se desiste de la solicitud, dependiendo del caso concreto, lo que puede cerrar la vía iniciada sin que llegue a valorarse adecuadamente el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, más allá de responder, es importante hacerlo correctamente, ya que una respuesta incompleta o mal planteada puede afectar al resultado final del expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué no basta con aportar lo que se solicita
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Aunque el requerimiento suele indicar qué documentación debe aportarse, no siempre es suficiente limitarse a enviar exactamente lo que se pide. En algunos casos, es necesario contextualizar la documentación, aclarar determinados extremos o completar la información para evitar una posible denegación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La forma en que se responde al requerimiento puede influir directamente en la valoración que haga la Administración.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cómo afecta el requerimiento al estado del expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Tras un requerimiento, el expediente puede permanecer sin avances visibles durante un tiempo o reflejar estados que no siempre permiten interpretar con claridad la situación real del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser útil entender en qué punto se encuentra el expediente tras la respuesta,
          <Link href="/estado-expediente-extranjeria" className="underline">
            especialmente en relación con cómo interpretar el estado del expediente en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo un requerimiento puede anticipar una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los requerimientos tienen la misma importancia. En algunos casos, pueden ser meramente formales, mientras que en otros pueden reflejar que la Administración ha detectado problemas relevantes en la solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el requerimiento está relacionado con requisitos esenciales o con aspectos determinantes del expediente, puede ser un indicio de que el resultado final podría ser desfavorable,
          <Link href="/denegacion-extranjeria" className="underline">
            especialmente en relación con los supuestos en los que puede producirse una denegación en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer tras recibir un requerimiento
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido un requerimiento, lo recomendable no es limitarse a recopilar documentación sin más, sino analizar qué está solicitando realmente la Administración y qué implicaciones puede tener en el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La respuesta debe plantearse teniendo en cuenta el conjunto del procedimiento, los requisitos aplicables y la situación concreta del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este contexto, una revisión jurídica permite valorar si la documentación solicitada es suficiente, cómo debe presentarse y si es necesario reforzar determinados aspectos antes de responder.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, el requerimiento puede tener un impacto distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el requerimiento es formal y la documentación puede aportarse sin dificultad, es posible que el expediente continúe su tramitación con normalidad tras la respuesta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si afecta a aspectos relevantes del expediente o existen dudas sobre cómo responder, puede ser necesario analizar la situación para evitar que la respuesta condicione negativamente el resultado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si no se responde correctamente o dentro de plazo, el requerimiento puede tener consecuencias que conviene valorar antes de que el procedimiento avance.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Revisar requerimiento de mi expediente
          </a>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Consultar por WhatsApp
          </a>

          <Link
            href="/estado-expediente-extranjeria"
            className="inline-flex items-center justify-center rounded-2xl border border-stone-300 px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-stone-100"
          >
            Volver a estado del expediente
          </Link>
        </div>
      </section>
    </main>
  );
}