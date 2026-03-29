import Image from "next/image";
import Link from "next/link";

export default function ExpedienteEnEstudioExtranjeriaPage() {
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
          Expediente en estudio en extranjería: qué significa y cuándo puede indicar un problema
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería aparece “en estudio”, es habitual que surjan dudas sobre si el procedimiento avanza correctamente o si existe algún tipo de incidencia. Este estado suele generar más incertidumbre que otros, precisamente porque no explica qué se está analizando ni cuánto puede durar esa fase.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Interpretar este estado como algo positivo o negativo sin más puede llevar a conclusiones erróneas. Para saber qué implica realmente, es necesario analizar el tipo de procedimiento, la fase en la que se encuentra y el tiempo transcurrido desde la solicitud.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa que un expediente esté en estudio
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En términos generales, el estado “en estudio” indica que el expediente está siendo analizado por la Administración. Esto puede implicar la revisión de la documentación presentada, la comprobación de requisitos o la valoración de determinados elementos del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, ese estado no permite saber si el análisis está en una fase inicial, si se han detectado incidencias o si el expediente está próximo a resolverse.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser un estado normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos procedimientos, que el expediente figure en estudio forma parte del curso normal de la tramitación. Es una fase habitual en la que la Administración revisa la solicitud antes de dictar resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de interpretar este estado como un problema, conviene valorar el tiempo transcurrido desde la solicitud,
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede generar dudas o requerir revisión
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estado “en estudio” puede requerir una valoración más cuidadosa cuando se prolonga en el tiempo, cuando existen antecedentes de incidencias o cuando el expediente no muestra avances durante un periodo relevante.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, no siempre es evidente si el procedimiento sigue su curso normal o si existe algún elemento que pueda afectar al resultado final.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el tiempo transcurrido empieza a ser significativo, puede ser necesario analizar si se ha producido alguna situación que requiera actuación,
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            como ocurre en determinados supuestos de silencio administrativo en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar en esta fase
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente este estado, conviene revisar varios aspectos del expediente:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>El tipo de procedimiento iniciado</li>
          <li>La documentación presentada</li>
          <li>La existencia de requerimientos previos</li>
          <li>El tiempo transcurrido desde la solicitud</li>
          <li>La evolución del estado del expediente</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite determinar si el expediente se encuentra dentro de una fase normal de estudio o si existen elementos que aconsejen revisar el caso con mayor detalle.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Si el expediente termina resolviéndose
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estado en estudio suele ser previo a la resolución. En algunos casos, el expediente finaliza favorablemente, pero en otros puede concluir con una resolución negativa que obligue a analizar las opciones disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya existe una resolución desfavorable o necesitas valorar sus efectos, el análisis debe centrarse en la resolución dictada,
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente aparece en estudio, lo recomendable no es asumir automáticamente que existe un problema ni dar por hecho que todo se resolverá favorablemente. Lo adecuado es analizar el procedimiento, el tiempo transcurrido y los posibles elementos que puedan influir en la resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esta valoración permite determinar si el expediente se encuentra en una fase normal o si conviene anticipar posibles escenarios en función de la situación concreta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre un expediente en estudio, una revisión jurídica permite identificar si el análisis administrativo sigue su curso habitual o si existen factores que aconsejan examinar el caso con mayor detalle.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, el estado en estudio puede tener un significado distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, es posible que el análisis forme parte del procedimiento normal y que no sea necesario actuar de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido es relevante o no existen avances visibles, puede ser necesario valorar si la situación requiere algún tipo de actuación o seguimiento más preciso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen incidencias, requerimientos o dudas sobre la documentación presentada, el estado en estudio puede no reflejar completamente la situación real del expediente y conviene analizar el caso con detalle.
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