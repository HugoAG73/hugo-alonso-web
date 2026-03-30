import Image from "next/image";
import Link from "next/link";

export default function DenegacionExtranjeriaPage() {
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
          Denegación de extranjería: qué significa la resolución y qué opciones puedes valorar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Recibir una denegación en un expediente de extranjería implica que la Administración ha considerado que no se cumplen los requisitos necesarios para conceder la autorización solicitada. A partir de ese momento, la situación cambia: ya no se trata de esperar una resolución, sino de decidir cómo actuar frente a ella.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin analizar la resolución o retrasar la decisión puede hacer que se pierda margen de actuación o que determinadas opciones dejen de ser viables.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, no todas las denegaciones tienen el mismo alcance ni deben abordarse de la misma forma. El contenido de la resolución, su motivación y el plazo disponible para reaccionar son determinantes para valorar qué opciones existen y si conviene actuar de inmediato.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa realmente una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La denegación no siempre implica que la solicitud carezca completamente de viabilidad dentro de un proceso de{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de asumir que no existen alternativas, es importante analizar el contenido de la resolución y los motivos concretos en los que se basa.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué se ha producido la denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La causa de la denegación suele encontrarse en la fundamentación de la resolución. En muchos casos, está relacionada con la falta de cumplimiento de requisitos, con la valoración de la documentación presentada o con la forma en que se ha planteado el expediente,{" "}
          <Link href="/por-que-deniegan-extranjeria" className="underline">
            especialmente en relación con los motivos más habituales de denegación en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué opciones existen tras una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Tras una resolución desfavorable, pueden existir distintas vías de actuación. Entre ellas, la posibilidad de presentar un recurso administrativo o, en determinados supuestos, acudir a la vía judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La elección de una u otra opción depende del contenido de la resolución y de la viabilidad de cada alternativa. En muchos casos, puede valorarse la interposición de un{" "}
          <Link href="/recurso-denegacion-extranjeria" className="underline">
            recurso administrativo en extranjería
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En determinados supuestos, también puede ser necesario acudir a la vía judicial mediante un{" "}
          <Link href="/recurso-contencioso-extranjeria" className="underline">
            recurso contencioso en extranjería
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La cuestión no es solo si existe alguna vía de reacción, sino cuál resulta adecuada en función de la resolución recibida, ya que una decisión precipitada o una inacción prolongada pueden limitar opciones posteriores.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué es importante decidir a tiempo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Las opciones tras una denegación están sujetas a plazos, por lo que conviene conocer el{" "}
          <Link href="/plazo-recurso-extranjeria" className="underline">
            plazo para recurrir en extranjería
          </Link>{" "}
          aplicable en cada caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, no se trata solo de conocer las opciones, sino de valorar cuál es la más adecuada en función del caso concreto antes de que el plazo expire.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer tras recibir una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una denegación, lo recomendable no es tomar una decisión automática, sino analizar el contenido de la resolución, los motivos en los que se basa y las opciones disponibles en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de tomar decisiones, conviene revisar el{" "}
          <Link href="/estado-expediente-extranjeria" className="underline">
            estado del expediente de extranjería
          </Link>{" "}
          y la documentación que consta en el procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una revisión jurídica permite determinar si la resolución presenta margen de impugnación, si conviene iniciar un nuevo procedimiento o si existe alguna alternativa que resulte más adecuada antes de que la situación se consolide.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el tipo de denegación, las opciones pueden ser distintas
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la denegación se basa en un defecto subsanable, puede ser posible corregirlo en una nueva solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si afecta a la interpretación jurídica del expediente, puede ser necesario valorar la interposición de un recurso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen dudas sobre el contenido de la resolución, conviene revisar el caso antes de decidir cómo actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando ya existe una resolución denegatoria, analizar el caso a tiempo permite decidir con más precisión si conviene recurrir, replantear la solicitud o evitar actuaciones que puedan cerrar opciones útiles.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Revisar mi denegación
          </Link>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}