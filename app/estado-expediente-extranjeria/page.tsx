import Image from "next/image";
import Link from "next/link";

export default function EstadoExpedienteExtranjeriaPage() {
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
          Estado del expediente de extranjería: qué significa y qué hacer en tu caso
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
          Cómo interpretar el estado de tu expediente en la práctica
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Más allá del texto que aparece en la consulta del expediente, lo relevante es entender en qué situación real se encuentra el procedimiento y qué puede implicar ese estado en tu caso concreto.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, pueden darse varias situaciones, como cuando el expediente aparece en trámite, en estudio o ya resuelto, lo que requiere una interpretación distinta en cada caso.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>
            El expediente sigue en tramitación dentro de un plazo razonable, como ocurre en muchos casos en los que figura{" "}
            <Link href="/expediente-en-tramite-extranjeria" className="underline">
              en trámite
            </Link>.
          </li>

          <li>
            Existe una fase de análisis interno que puede generar dudas sobre el avance del procedimiento, especialmente cuando el expediente aparece{" "}
            <Link href="/expediente-en-estudio-extranjeria" className="underline">
              en estudio
            </Link>.
          </li>

          <li>
            La Administración puede haber solicitado documentación o subsanación, como sucede cuando el expediente aparece{" "}
            <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
              con requerimiento
            </Link>.
          </li>

          <li>
            También puede ocurrir que el expediente no muestre avances claros durante un tiempo relevante, algo frecuente cuando figura{" "}
            <Link href="/expediente-paralizado-extranjeria" className="underline">
              paralizado
            </Link>{" "}
            o{" "}
            <Link href="/expediente-sin-cambios-extranjeria" className="underline">
              sin cambios
            </Link>.
          </li>

          <li>
            Se ha producido una falta de resolución en plazo que puede tener efectos jurídicos, como sucede en determinados supuestos de{" "}
            <Link href="/silencio-administrativo-extranjeria" className="underline">
              silencio administrativo en extranjería
            </Link>.
          </li>

          <li>
            El expediente ha sido resuelto, aunque no siempre se haya notificado correctamente, tanto en casos{" "}
            <Link href="/expediente-resuelto-favorable-extranjeria" className="underline">
              favorables
            </Link>{" "}
            como en resoluciones{" "}
            <Link href="/expediente-resuelto-no-favorable-extranjeria" className="underline">
              no favorables
            </Link>.
          </li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cada una de estas situaciones exige una valoración distinta. Interpretar el estado sin tener en cuenta estos factores puede llevar a esperar cuando convendría actuar o a iniciar actuaciones innecesarias.
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
          <li>
            La existencia de{" "}
            <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
              requerimientos
            </Link>{" "}
            o incidencias previas
          </li>
          <li>La documentación aportada durante la tramitación</li>
          <li>El tiempo transcurrido desde la última actuación</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si el expediente sigue una tramitación normal o si conviene revisar con más detalle la situación, especialmente en relación con la{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>{" "}
          o con el tipo de procedimiento iniciado.
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
          Si tienes dudas sobre si el tiempo transcurrido entra dentro de lo normal, conviene valorar primero qué plazos suelen manejarse en este tipo de procedimientos,{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente figura{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, puede ser útil revisar cuánto tiempo suele permanecer en esas fases, tanto cuando el expediente sigue{" "}
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            en trámite
          </Link>{" "}
          como cuando pasa a{" "}
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            estudio
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También conviene analizar qué implica que el expediente figure{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>{" "}
          o{" "}
          <Link href="/expediente-sin-cambios-extranjeria" className="underline">
            sin cambios
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si no hay resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el expediente sigue en tramitación durante un tiempo prolongado sin resolución expresa, puede ser necesario revisar si el plazo aplicable ha transcurrido y qué efectos jurídicos puede producir la falta de respuesta en el procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando no existe resolución en un plazo relevante, puede ser necesario analizar si se ha producido algún efecto jurídico por falta de respuesta,{" "}
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            como ocurre en determinados supuestos de silencio administrativo en extranjería
          </Link>.
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
          Esperar sin revisar el expediente puede hacer que se pierda margen de actuación o que determinadas opciones se valoren demasiado tarde.
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
          Si ya existe una resolución desfavorable o necesitas valorar sus efectos, el análisis debe centrarse en la denegación y en las opciones disponibles,{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>. También puede ser útil revisar{" "}
          <Link href="/por-que-deniegan-extranjeria" className="underline">
            por qué deniegan extranjería
          </Link>{" "}
          en este tipo de procedimientos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, también puede ser necesario valorar si procede un{" "}
          <Link href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación en extranjería
          </Link>{" "}
          tras la resolución desfavorable.
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
          Si tu expediente está relacionado con una vía de arraigo o con otra fórmula de regularización, también puede ser útil revisar el contexto específico de ese procedimiento,{" "}
          <Link href="/arraigo-social" className="underline">
            especialmente en supuestos de arraigo social
          </Link>,{" "}
          así como otras opciones de{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>.
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
          Cuando existen dudas sobre el estado del expediente, una revisión jurídica permite determinar si el procedimiento sigue su curso normal, si ha transcurrido un plazo relevante o si conviene adoptar alguna actuación en función de la situación concreta y del tipo de expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, el siguiente paso puede ser distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra en plazo y sin incidencias, puede ser suficiente con continuar la tramitación y revisar periódicamente su evolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existe una demora relevante, puede ser necesario analizar si el plazo ha transcurrido y si procede valorar otras actuaciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya existe una resolución o una incidencia, la situación cambia y conviene determinar con precisión qué opciones existen en función del tipo de procedimiento. En particular, puede ser necesario revisar si el expediente presenta un{" "}
          <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
            requerimiento
          </Link>{" "}
          o si ya se ha producido una{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </Link>.
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