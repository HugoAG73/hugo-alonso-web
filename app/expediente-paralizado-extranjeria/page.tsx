import Image from "next/image";
import Link from "next/link";

export default function ExpedienteParalizadoExtranjeriaPage() {
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
          Expediente paralizado en extranjería: qué significa y cuándo conviene actuar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando una persona percibe que su expediente de extranjería está paralizado, la preocupación suele ser mayor que en otros supuestos. En muchos casos, la sensación ya no es solo que el procedimiento tarda, sino que no avanza y que puede existir una incidencia que esté impidiendo su evolución normal, una posibilidad que conviene analizar antes de seguir esperando sin más.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, no todo expediente que parece paralizado lo está realmente en sentido jurídico o administrativo. Para saber si existe una paralización relevante, es necesario analizar el tipo de procedimiento, el tiempo transcurrido, la fase en la que se encuentra y si ha habido actuaciones o requerimientos previos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin analizar la situación puede hacer que se pierda margen de actuación o que no se detecte a tiempo una incidencia que esté afectando al expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede hablarse realmente de un expediente paralizado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La idea de expediente paralizado suele utilizarse cuando no se observan cambios durante un tiempo prolongado o cuando el procedimiento parece no avanzar. No obstante, esa percepción debe distinguirse de los supuestos en los que el expediente simplemente sigue en trámite o en estudio dentro de un plazo todavía razonable.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de concluir que existe una paralización, conviene revisar si el expediente se encuentra realmente sin movimiento relevante y si la duración de esa situación supera lo habitual en ese tipo de procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede hacer que un expediente parezca paralizado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un expediente puede parecer paralizado por distintos motivos: retrasos administrativos, ausencia de actualización visible en el estado, incidencias documentales, requerimientos no detectados o simplemente porque la Administración no refleja de inmediato todos los movimientos internos del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, la falta de avances visibles no es más que una fase interna del expediente. En otros, sí puede existir una demora relevante que convenga analizar con más detalle.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser solo una demora y no una paralización real
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No toda espera prolongada equivale a una paralización. En muchos procedimientos, que el expediente siga sin resolverse durante semanas o meses puede formar parte del curso normal de la tramitación, especialmente si todavía no han transcurrido plazos relevantes.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de considerar que el expediente está paralizado, conviene valorar cuánto puede tardar en función de la fase en la que se encuentra,
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            especialmente cuando el expediente sigue en trámite
          </Link>
          o, en su caso,
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            cuando permanece en fase de estudio
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo la paralización puede ser jurídicamente relevante
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La paralización empieza a ser relevante cuando el expediente permanece sin avances más allá de lo razonable, cuando no se aprecia evolución en la tramitación o cuando el tiempo transcurrido obliga a valorar si la falta de resolución puede producir efectos jurídicos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos supuestos, puede ser necesario analizar si el procedimiento sigue realmente abierto en condiciones normales o si la falta de respuesta exige valorar otras vías,
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            como ocurre en determinados supuestos de silencio administrativo en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar si tu expediente parece paralizado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para saber si existe una paralización real, conviene revisar varios aspectos del expediente:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha exacta de presentación de la solicitud</li>
          <li>La fase en la que figura el procedimiento</li>
          <li>La existencia de requerimientos o incidencias previas</li>
          <li>La documentación presentada y su suficiencia</li>
          <li>El tiempo transcurrido sin avances visibles</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite distinguir entre una simple demora, una falta de actualización visible y una situación que realmente pueda requerir actuación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si el expediente no avanza
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente parece paralizado, lo recomendable no es asumir automáticamente que existe un bloqueo definitivo ni continuar esperando indefinidamente. Lo adecuado es revisar primero el estado real del procedimiento y el tiempo transcurrido para determinar si la falta de avances entra dentro de lo normal o si ya conviene valorar alguna actuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este punto, puede ser útil revisar de forma completa la evolución del expediente,
          <Link href="/estado-expediente-extranjeria" className="underline">
            especialmente en relación con cómo interpretar el estado del expediente en extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre una posible paralización, una revisión jurídica permite determinar si el expediente sigue su curso normal, si la demora exige una actuación concreta o si conviene valorar otras opciones en función del caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, la paralización puede tener un significado distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra todavía dentro de un plazo razonable, es posible que la aparente paralización no sea más que una demora propia del procedimiento y que no sea necesario actuar de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser excesivo o no existe ningún avance visible, puede ser necesario analizar si la situación requiere una actuación o una revisión más precisa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además existen incidencias, requerimientos o dudas sobre la tramitación, conviene revisar el caso con detalle para determinar si existe una paralización real y qué opciones se abren a partir de ahí.
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

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            <br />
            © 2026 Hugo Alonso Abogado. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/despacho" className="hover:text-slate-800">
              Despacho
            </Link>
            <Link href="/aviso-legal" className="hover:text-slate-800">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="hover:text-slate-800">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="hover:text-slate-800">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}