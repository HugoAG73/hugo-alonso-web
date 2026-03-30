import Image from "next/image";
import Link from "next/link";

export default function ExpedienteEnTramiteCuantoTardaPage() {
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
          Cuánto tarda un expediente en trámite en extranjería y cuándo puede indicar una incidencia relevante
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería aparece “en trámite”, una de las preguntas más habituales es cuánto tiempo puede mantenerse en ese estado. Sin embargo, no existe una duración única, ya que el tiempo depende del tipo de procedimiento, de la carga administrativa y de las circunstancias concretas de cada expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El problema es que muchas personas interpretan que, si el expediente permanece en trámite durante un periodo prolongado, necesariamente existe una incidencia. En la práctica, esto no siempre es así, aunque sí puede ser un indicio que conviene analizar con más detalle.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin analizar la situación puede hacer que se pierda margen de actuación o que no se detecte a tiempo una posible incidencia en el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuánto puede durar un expediente en trámite
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un expediente en trámite puede mantenerse en ese estado durante varias semanas o meses. La duración depende del tipo de autorización solicitada, del momento en el que se haya presentado la solicitud y de la carga de trabajo de la Administración en ese periodo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, para valorar si el tiempo es razonable, no basta con fijarse en el estado “en trámite”, sino que es necesario tener en cuenta el plazo global del procedimiento,
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente la duración, también es importante entender qué implica exactamente que un expediente se encuentre en esta fase,
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            especialmente en relación con qué significa que un expediente esté en trámite en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede considerarse un tiempo normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, que el expediente permanezca en trámite durante un tiempo determinado forma parte del curso normal del procedimiento. Esto ocurre especialmente cuando no han transcurrido plazos relevantes o cuando la tramitación sigue su ritmo habitual.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por tanto, la duración por sí sola no permite concluir que exista un problema si se mantiene dentro de lo razonable para ese tipo de solicitud.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo la duración puede indicar una incidencia
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La duración empieza a ser relevante cuando el expediente permanece en trámite sin cambios durante un periodo prolongado, cuando supera los plazos habituales del procedimiento o cuando existen antecedentes de incidencias o requerimientos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, no siempre es evidente si el expediente sigue su curso normal o si la falta de resolución puede tener efectos jurídicos que convenga valorar,
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            como ocurre en determinados supuestos de silencio administrativo en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué no basta con ver que el expediente sigue en trámite
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estado “en trámite” es solo una referencia general. Para interpretar correctamente la situación, es necesario analizar el expediente completo: el tipo de procedimiento, la documentación presentada, la existencia de requerimientos y la evolución de la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Dos expedientes en trámite pueden encontrarse en situaciones completamente distintas, incluso si han transcurrido tiempos similares.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si tu expediente lleva mucho tiempo en trámite
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente permanece en trámite durante un periodo prolongado, lo recomendable no es asumir automáticamente que existe un problema ni continuar esperando sin más. Lo adecuado es analizar si ese tiempo entra dentro de lo razonable o si conviene valorar alguna actuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este punto, puede ser útil revisar el estado completo del expediente para entender en qué fase real se encuentra,
          <Link href="/estado-expediente-extranjeria" className="underline">
            especialmente en relación con cómo interpretar el estado del expediente en extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre la duración de un expediente en trámite, una revisión jurídica permite determinar si el procedimiento sigue su curso normal o si el tiempo transcurrido exige valorar alguna actuación en función del caso concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, la duración puede tener un significado distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, es posible que la tramitación esté siguiendo su curso normal y que no sea necesario actuar de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no existen avances, puede ser necesario analizar si la situación requiere algún tipo de actuación o seguimiento más preciso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen incidencias o dudas sobre la tramitación, conviene revisar el caso con detalle para determinar si la duración refleja una situación normal o un posible problema.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Solicitar revisión de mi caso
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