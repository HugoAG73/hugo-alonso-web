import Image from "next/image";
import Link from "next/link";

export default function QueHacerSiExpedienteExtranjeriaNoAvanzaPage() {
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
          Qué hacer si tu expediente de extranjería no avanza
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería no avanza, la duda principal suele
          ser si conviene seguir esperando o si ha llegado el momento de actuar.
          En muchos casos, la falta de movimiento genera incertidumbre,
          especialmente cuando no está claro si el procedimiento sigue su curso
          normal o si existe algún problema que esté afectando a su tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, no todas las situaciones en las que un expediente parece
          detenido requieren una actuación inmediata. Para tomar una decisión
          adecuada, es necesario analizar el estado del expediente, el tiempo
          transcurrido y las circunstancias concretas del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Actuar sin ese análisis puede llevar a tomar decisiones innecesarias
          o, por el contrario, a dejar pasar el momento en el que sí sería
          conveniente intervenir.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Antes de decidir, conviene entender qué está ocurriendo realmente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de decidir qué hacer, es fundamental interpretar correctamente
          en qué punto se encuentra el expediente. En la práctica, pueden darse
          distintas situaciones que no siempre tienen el mismo significado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El expediente puede encontrarse en fases normales de tramitación, como
          cuando figura{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, lo que no implica necesariamente un problema si los plazos
          todavía no son excesivos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En otros casos, puede tratarse de situaciones más específicas, como
          cuando el expediente aparece{" "}
          <Link href="/expediente-sin-cambios-extranjeria" className="underline">
            sin cambios
          </Link>{" "}
          o incluso{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>, lo que requiere un análisis más detallado para determinar si
          existe una incidencia real.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente esta situación, también puede ser útil
          revisar cómo se analiza el{" "}
          <Link href="/estado-expediente-extranjeria" className="underline">
            estado del expediente de extranjería
          </Link>{" "}
          en su conjunto y qué puede implicar en función del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser razonable seguir esperando
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos procedimientos, la falta de avances visibles durante un
          tiempo forma parte del curso normal de la tramitación. Esto es
          especialmente frecuente cuando la Administración no actualiza el
          estado del expediente de forma inmediata o cuando los plazos todavía
          no han alcanzado un punto relevante.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de actuar, conviene valorar cuánto tiempo suele tardar
          el procedimiento en función de su tipo y de la fase en la que se
          encuentra,{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser útil revisar cuánto suele durar la fase en la que se
          encuentra el expediente, tanto cuando aparece{" "}
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            en trámite
          </Link>{" "}
          como cuando figura{" "}
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            en estudio
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo empieza a ser un problema real
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La situación cambia cuando el expediente permanece sin avances más
          allá de lo razonable, cuando no se aprecia evolución en la tramitación
          o cuando el tiempo transcurrido impide determinar si el procedimiento
          sigue su curso normal.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser necesario analizar si la falta de respuesta
          puede producir efectos jurídicos o si existen incidencias que estén
          afectando al expediente,{" "}
          <Link
            href="/silencio-administrativo-extranjeria"
            className="underline"
          >
            como ocurre en determinados supuestos de silencio administrativo en
            extranjería
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También conviene comprobar si durante la tramitación se ha producido
          algún{" "}
          <Link
            href="/expediente-con-requerimiento-extranjeria"
            className="underline"
          >
            requerimiento
          </Link>{" "}
          o alguna incidencia que pueda explicar la ausencia de avances.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar antes de decidir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de tomar cualquier decisión, conviene revisar varios aspectos
          del expediente:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha de presentación de la solicitud</li>
          <li>La fase en la que se encuentra el procedimiento</li>
          <li>
            La existencia de{" "}
            <Link
              href="/expediente-con-requerimiento-extranjeria"
              className="underline"
            >
              requerimientos
            </Link>{" "}
            o incidencias
          </li>
          <li>El tiempo transcurrido sin avances visibles</li>
          <li>La documentación aportada y su posible relevancia</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite determinar si la situación entra dentro de lo
          normal o si conviene plantear alguna actuación en función del
          procedimiento y del momento en el que se encuentre el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué opciones pueden existir si el expediente no avanza
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tras el análisis se concluye que el expediente no avanza de forma
          razonable, pueden valorarse distintas opciones según el caso. En unos
          supuestos bastará con continuar el seguimiento; en otros, será
          necesario revisar con más detalle la situación o preparar una
          actuación jurídica adecuada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La elección de una u otra vía depende del tipo de procedimiento, de la fase en la que se encuentre el expediente y de si la falta de avances responde a una demora normal, a una incidencia concreta o a una falta de resolución con posibles efectos jurídicos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Si el expediente termina en una resolución desfavorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si finalmente el expediente termina con una resolución desfavorable,
          el análisis deja de centrarse en la falta de avances y pasa a la
          resolución dictada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En ese caso, conviene revisar{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            qué supone una denegación de extranjería
          </Link>,{" "}
          <Link href="/por-que-deniegan-extranjeria" className="underline">
            por qué deniegan extranjería
          </Link>{" "}
          y qué opciones existen para impugnar o corregir la situación, incluido
          el{" "}
          <Link
            href="/recurso-denegacion-extranjeria"
            className="underline"
          >
            recurso de denegación en extranjería
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según la situación, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes que no avanzan requieren la misma actuación. La decisión depende principalmente del tiempo transcurrido, de la fase en la que se encuentre el procedimiento y de si existen incidencias.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, lo habitual es continuar el seguimiento sin necesidad de intervenir de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no se aprecia ninguna evolución, puede ser necesario analizar con más detalle la situación para determinar si conviene actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además existen incidencias, requerimientos o dudas sobre la tramitación, lo recomendable es revisar el expediente de forma completa para valorar las opciones disponibles en función del caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería no avanza, la clave no es actuar
          de forma automática, sino entender qué está ocurriendo en cada caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un análisis adecuado permite distinguir entre una demora normal y una
          situación que requiere intervención, y evita tanto actuar antes de
          tiempo como dejar pasar una oportunidad de actuación.
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