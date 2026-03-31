import Image from "next/image";
import Link from "next/link";

export default function RevisionExpedienteExtranjeriaPage() {
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
          Revisión de expediente de extranjería: cuándo es recomendable y qué analizar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          En muchos procedimientos de extranjería, llega un momento en el que surgen dudas sobre si el expediente está avanzando correctamente o si existe algún problema que pueda afectar a la resolución. En estas situaciones, puede ser recomendable realizar una revisión del expediente para analizar su estado real y valorar las posibles opciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La revisión no consiste únicamente en comprobar el estado que aparece en el sistema, sino en interpretar el procedimiento en su conjunto, teniendo en cuenta la fase en la que se encuentra, el tiempo transcurrido y la documentación aportada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite detectar posibles incidencias y tomar decisiones con mayor criterio, evitando tanto actuar antes de tiempo como dejar pasar una situación que podría requerir intervención.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, una revisión adecuada no solo permite entender el estado del expediente, sino también anticipar posibles problemas, corregir incidencias a tiempo y valorar si conviene adoptar alguna actuación antes de que se produzca una resolución desfavorable.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este tipo de revisión suele ser especialmente útil en situaciones en las que existen dudas sobre el tiempo de tramitación, como cuando se analiza{" "}
          <Link href="/cuanto-tarda-nie" className="underline">
            cuánto tarda el NIE
          </Link>{" "}
          o{" "}
          <Link href="/cuanto-tarda-tie" className="underline">
            cuánto tarda la TIE
          </Link>, así como cuando el expediente parece no avanzar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También resulta especialmente útil cuando el expediente se mantiene durante un tiempo prolongado{" "}
          <Link href="/expediente-en-tramite-sin-respuesta" className="underline">
            en trámite sin respuesta
          </Link>{" "}
          o cuando existen dudas sobre si el procedimiento está avanzando correctamente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser recomendable revisar un expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La revisión de un expediente de extranjería suele ser especialmente útil cuando existen dudas sobre su evolución o cuando el procedimiento se prolonga más de lo esperado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto puede ocurrir, por ejemplo, cuando el expediente parece{" "}
          <Link href="/expediente-extranjeria-bloqueado" className="underline">
            bloqueado
          </Link>, cuando no se aprecian avances durante un tiempo prolongado o cuando no está claro si la tramitación sigue su curso normal.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser recomendable revisar el expediente cuando se encuentra en determinadas fases, como cuando aparece{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, especialmente si existe incertidumbre sobre el tiempo que puede tardar en resolverse.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente estos plazos, también puede ser útil revisar{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            cuánto tarda extranjería en resolver
          </Link>{" "}
          y cómo se sitúa el expediente dentro de esos tiempos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué aspectos se analizan en una revisión de expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La revisión de un expediente de extranjería implica analizar distintos elementos que pueden influir en su tramitación:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La situación administrativa del solicitante</li>
          <li>La documentación aportada y su adecuación</li>
          <li>
            La existencia de{" "}
            <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
              requerimientos
            </Link>{" "}
            o incidencias
          </li>
          <li>La fase en la que se encuentra el procedimiento</li>
          <li>El tiempo transcurrido desde la solicitud</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite detectar posibles errores, incidencias o situaciones que puedan afectar al resultado del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede detectarse en una revisión
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          A través de una revisión del expediente, es posible identificar distintos escenarios:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Que el expediente se encuentra dentro de un curso normal</li>
          <li>Que existe una incidencia que está afectando a la tramitación</li>
          <li>Que puede producirse un retraso relevante</li>
          <li>Que conviene preparar una actuación en función del estado del procedimiento</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, la revisión permite anticipar posibles problemas antes de que se produzca una resolución desfavorable.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el resultado del análisis, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes requieren la misma actuación. La decisión depende del estado del procedimiento, del tiempo transcurrido y de las incidencias detectadas.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, bastará con continuar el seguimiento del expediente. En otros, puede ser necesario adoptar alguna actuación para evitar que la situación se prolongue o derive en un problema mayor.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para valorar correctamente estas situaciones, también puede ser útil revisar{" "}
          <Link href="/que-hacer-si-expediente-extranjeria-no-avanza" className="underline">
            qué hacer si un expediente de extranjería no avanza
          </Link>{" "}
          y cómo interpretar cada escenario.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si el expediente es denegado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el procedimiento termina con una resolución desfavorable, la revisión del expediente resulta especialmente relevante para analizar las causas de la denegación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En ese caso, conviene revisar{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            qué supone una denegación de extranjería
          </Link>,{" "}
          <Link href="/por-que-deniegan-extranjeria" className="underline">
            por qué deniegan extranjería
          </Link>{" "}
          y qué opciones existen para impugnar o corregir la situación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cada expediente de extranjería presenta circunstancias propias que deben analizarse de forma individual.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una revisión adecuada permite entender qué está ocurriendo en el procedimiento y tomar decisiones con mayor seguridad jurídica, evitando tanto actuaciones innecesarias como la falta de intervención cuando puede ser necesaria.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Solicitar revisión de mi expediente
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