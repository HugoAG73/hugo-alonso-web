import Image from "next/image";
import Link from "next/link";

export default function CuantoTardaNiePage() {
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
          Cuánto tarda el NIE en España
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Una de las dudas más frecuentes en materia de extranjería es cuánto
          tiempo puede tardar la obtención del NIE. La respuesta no siempre es
          sencilla, porque bajo esa expresión suelen agruparse situaciones
          distintas: la asignación del número, la resolución del procedimiento
          del que deriva y, en su caso, la expedición de la tarjeta física.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de fijar un plazo concreto, conviene distinguir qué
          trámite se está realizando exactamente y en qué fase se encuentra el
          expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este sentido, conviene distinguir entre la asignación del número de identidad de extranjero y la expedición de la tarjeta física, ya que se trata de trámites diferentes que pueden tener tiempos de resolución distintos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, el tiempo de espera no depende solo del tipo de
          solicitud, sino también de la carga de trabajo administrativa, de la
          documentación aportada y de si existe alguna incidencia en la
          tramitación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          De qué depende el tiempo de obtención del NIE
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El tiempo que tarda el NIE no es uniforme. Puede variar según si se
          solicita como parte de un procedimiento de extranjería, si se tramita
          desde España o desde el extranjero y si además debe expedirse una
          tarjeta posterior.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede influir el estado del expediente, especialmente cuando
          aparece{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, ya que esas fases pueden prolongar la percepción de espera
          aunque el procedimiento siga avanzando internamente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuál es el plazo habitual
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Con carácter general, no existe un único plazo aplicable a todos los
          supuestos relacionados con el NIE. En algunos casos la gestión puede
          resolverse en un tiempo relativamente breve y, en otros, la espera se
          prolonga durante varios meses en función del procedimiento del que
          dependa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente esos tiempos, también puede ser útil
          revisar{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            cuánto tarda extranjería en resolver
          </Link>{" "}
          en términos generales y cómo encaja el trámite concreto del NIE dentro
          de esos plazos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además el expediente sigue abierto durante un periodo prolongado,
          puede ser útil valorar cuánto suele durar cada fase, especialmente
          cuando el procedimiento se mantiene{" "}
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            en trámite
          </Link>{" "}
          o cuando permanece{" "}
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            en estudio
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el plazo entra dentro de lo normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos supuestos, que el NIE tarde más de lo esperado no implica
          necesariamente una incidencia. Puede tratarse de una demora propia del
          procedimiento, especialmente cuando todavía no ha transcurrido un
          plazo relevante o cuando la Administración no actualiza de inmediato
          el estado del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de concluir que existe un problema, conviene analizar
          el tipo de solicitud y el tiempo transcurrido en relación con la fase
          concreta en la que se encuentra el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede existir un retraso relevante
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La situación cambia cuando el tiempo transcurrido supera lo que
          normalmente cabría esperar o cuando no se aprecia ninguna evolución
          durante un periodo prolongado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser necesario analizar si existe alguna
          incidencia en la tramitación, si se ha producido un{" "}
          <Link
            href="/expediente-con-requerimiento-extranjeria"
            className="underline"
          >
            requerimiento
          </Link>{" "}
          o si el expediente se encuentra en situaciones como{" "}
          <Link href="/expediente-sin-cambios-extranjeria" className="underline">
            sin cambios
          </Link>{" "}
          o{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También conviene valorar si la falta de resolución puede tener efectos
          jurídicos,{" "}
          <Link
            href="/silencio-administrativo-extranjeria"
            className="underline"
          >
            como ocurre en determinados supuestos de silencio administrativo en
            extranjería
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, la falta de resolución genera dudas sobre si el expediente sigue avanzando correctamente, especialmente cuando se mantiene durante un tiempo prolongado{" "}
          <Link href="/expediente-en-tramite-sin-respuesta" className="underline">
            en trámite sin respuesta
          </Link>{" "}
          o cuando parece estar{" "}
          <Link href="/expediente-extranjeria-bloqueado" className="underline">
            bloqueado
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si el NIE tarda más de lo esperado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el procedimiento se alarga más de lo habitual, no siempre es
          necesario actuar de inmediato. En algunos casos, bastará con continuar
          el seguimiento del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En otros supuestos, puede ser conveniente analizar con más detalle la
          situación para determinar si existe algún problema o si procede
          adoptar alguna medida en función del estado del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para ello, puede ser útil revisar{" "}
          <Link
            href="/que-hacer-si-expediente-extranjeria-no-avanza"
            className="underline"
          >
            qué hacer si un expediente de extranjería no avanza
          </Link>{" "}
          y cómo valorar correctamente cada situación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el tiempo transcurrido, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes relacionados con el NIE que tardan más de lo
          esperado requieren la misma actuación. La decisión depende del tiempo
          transcurrido, de la fase en la que se encuentre el procedimiento y de
          si existen incidencias.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, lo
          habitual es continuar el seguimiento sin necesidad de intervenir de
          inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no se aprecia
          evolución, puede ser necesario analizar con más detalle la situación
          para determinar si conviene actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una revisión adecuada permite determinar si la demora entra dentro de
          lo normal, detectar posibles incidencias en la tramitación y valorar
          si conviene adoptar alguna actuación antes de que la situación se
          prolongue o derive en un problema mayor.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el NIE tarda más de lo esperado, la clave no es actuar de forma
          automática, sino entender qué trámite concreto se está gestionando y
          qué está ocurriendo en el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un análisis adecuado permite distinguir entre una demora normal y una
          situación que requiere intervención, evitando tanto actuar antes de
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