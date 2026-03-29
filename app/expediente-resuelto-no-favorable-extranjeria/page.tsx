import Image from "next/image";
import Link from "next/link";

export default function ExpedienteResueltoNoFavorableExtranjeriaPage() {
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
          Expediente resuelto no favorable en extranjería: qué significa y qué
          hacer ahora
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Ver que un expediente de extranjería aparece como “resuelto no
          favorable” suele generar incertidumbre inmediata. En ese momento, el
          problema ya no está en interpretar un estado intermedio del
          procedimiento, sino en entender el alcance real de la resolución y
          valorar con precisión qué opciones existen a partir de ahí.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El error más frecuente es reaccionar de forma automática: asumir que
          ya no puede hacerse nada o, por el contrario, iniciar actuaciones sin
          haber revisado antes el contenido de la resolución, su motivación y el
          margen real de actuación en ese caso concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa que el expediente figure como resuelto no favorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Con carácter general, que un expediente figure como resuelto no
          favorable significa que la Administración ha dictado una resolución
          negativa respecto de la solicitud presentada. Es decir, el
          procedimiento ya no está simplemente en tramitación o en estudio, sino
          que existe una decisión administrativa desfavorable.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          A partir de ese momento, lo relevante ya no es tanto el estado del
          expediente como el contenido de la resolución, las razones en las que
          se apoya y los efectos que puede producir en la situación
          administrativa del interesado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué no basta con ver el estado del expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El texto “resuelto no favorable” permite saber que existe una decisión
          negativa, pero no explica por sí solo cuál ha sido el motivo de la
          denegación ni qué margen existe para reaccionar. Dos resoluciones
          desfavorables pueden requerir respuestas muy distintas según el tipo
          de procedimiento, la motivación y la documentación del caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de decidir qué hacer, conviene revisar si la resolución
          ya ha sido notificada correctamente, cuál es su fundamento y qué plazo
          de reacción puede estar abierto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar inmediatamente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando un expediente aparece como resuelto no favorable, conviene
          revisar cuanto antes varios aspectos básicos de la resolución:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha exacta de la resolución</li>
          <li>La fecha y forma de la notificación, si ya se ha producido</li>
          <li>El motivo concreto de la denegación</li>
          <li>El tipo de procedimiento afectado</li>
          <li>Los plazos disponibles para reaccionar</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis es esencial porque la estrategia posterior no depende
          solo de que exista una resolución negativa, sino de cómo se haya
          dictado y de qué margen jurídico exista en ese caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el problema pasa a ser una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este punto, el problema deja de ser una cuestión de seguimiento del
          expediente y pasa a centrarse en la resolución desfavorable. Eso
          exige analizar la denegación en sí misma, su motivación y sus efectos,
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin revisar la resolución o limitarse a consultar el estado
          del expediente puede hacer que se pierda un tiempo valioso para decidir
          correctamente la siguiente actuación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué opciones pueden abrirse tras una resolución no favorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos una resolución no favorable conduce a la misma
          respuesta. En algunos supuestos puede ser necesario valorar una
          impugnación administrativa; en otros, estudiar si existe otra vía de
          regularización o si conviene replantear la estrategia desde un punto
          de vista distinto.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando la resolución desfavorable presenta margen de reacción, puede
          ser necesario analizar si procede impugnarla,
          <Link
            href="/recurso-denegacion-extranjeria"
            className="underline"
          >
            especialmente mediante un recurso frente a la denegación en
            extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Y cuando la vía administrativa ya no resulta suficiente o la
          estrategia lo exige, puede ser necesario valorar una respuesta en sede
          judicial,
          <Link
            href="/recurso-contencioso-extranjeria"
            className="underline"
          >
            como ocurre en determinados supuestos de recurso contencioso en
            extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué riesgos existen si no se actúa a tiempo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El principal riesgo tras una resolución no favorable no suele ser solo la propia denegación, sino dejar transcurrir los plazos sin haber valorado correctamente la estrategia, lo que puede limitar o incluso impedir determinadas opciones de actuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, cuando ya existe una resolución negativa, el aspecto más
          importante no es volver a comprobar el estado del expediente, sino
          identificar con precisión qué actuación corresponde y dentro de qué
          plazo debe plantearse.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer tras una resolución no favorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente figura como resuelto no favorable, lo recomendable es
          revisar de inmediato la resolución, su motivación, la forma en la que
          se ha notificado y el margen real de reacción que existe en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esta revisión permite determinar si conviene impugnar la resolución,
          estudiar otra vía o replantear la estrategia en función del tipo de
          procedimiento y de la situación concreta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre una resolución no favorable, una revisión
          jurídica permite identificar si existe margen para reaccionar y cuál
          es la opción más adecuada antes de que transcurran plazos relevantes.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este punto, la decisión no es solo si actuar o no, sino qué tipo de actuación resulta adecuada en función de la resolución y del momento en el que te encuentres.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, el siguiente paso puede ser distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la resolución contiene una motivación discutible o existen defectos
          en la tramitación, puede ser necesario valorar una impugnación dentro
          del plazo aplicable.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la denegación responde a problemas de fondo en la solicitud,
          puede ser más útil analizar si existe otra estrategia o una vía
          distinta para regularizar la situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si todavía no está claro el alcance de la resolución o la forma en que
          ha sido notificada, conviene revisar el caso con detalle antes de
          decidir cualquier actuación.
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