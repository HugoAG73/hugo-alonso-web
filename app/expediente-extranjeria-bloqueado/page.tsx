import Image from "next/image";
import Link from "next/link";

export default function ExpedienteExtranjeriaBloqueadoPage() {
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
          Expediente de extranjería bloqueado: qué significa y qué hacer
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería parece bloqueado, es habitual que
          surjan dudas sobre si el procedimiento está realmente detenido o si se
          trata de una fase normal de la tramitación. La falta de avances
          visibles durante un tiempo prolongado genera incertidumbre, sobre todo
          cuando no está claro si la Administración está actuando o no sobre el
          expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, no todos los casos en los que un expediente parece
          bloqueado responden a una paralización real. Para interpretar
          correctamente la situación, es necesario analizar el estado del
          expediente, el tiempo transcurrido y las circunstancias concretas del
          procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Actuar sin ese análisis puede llevar a decisiones innecesarias o, por
          el contrario, a dejar pasar el momento en el que sí convendría
          intervenir.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, esta situación se produce cuando el expediente se ha mantenido durante un tiempo prolongado{" "}
          <Link href="/expediente-en-tramite-sin-respuesta" className="underline">
            en trámite sin respuesta
          </Link>, lo que puede generar la percepción de bloqueo.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo un expediente puede parecer bloqueado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos expedientes pasan por fases en las que no se
          reflejan cambios visibles durante un tiempo. Esto puede generar la
          impresión de que el procedimiento está bloqueado, aunque en realidad
          siga su curso interno.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto ocurre, por ejemplo, cuando el expediente se encuentra{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, fases en las que no siempre hay actualizaciones visibles de
          forma inmediata.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede suceder cuando el expediente aparece{" "}
          <Link href="/expediente-sin-cambios-extranjeria" className="underline">
            sin cambios
          </Link>, lo que no implica necesariamente una paralización, sino una
          falta de actualización en el sistema.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para valorar correctamente si la situación es normal o no, también resulta relevante tener en cuenta el tiempo transcurrido desde la solicitud,{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>. En muchos casos, la percepción de bloqueo se produce dentro de plazos que todavía pueden considerarse habituales.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede tratarse de una paralización real
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La situación cambia cuando el expediente permanece sin avances más
          allá de lo habitual o cuando no existe ninguna evolución durante un
          periodo prolongado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser necesario analizar si el expediente se
          encuentra realmente{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>{" "}
          y si existe alguna incidencia que esté afectando a la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto puede ocurrir, por ejemplo, cuando se ha producido un{" "}
          <Link
            href="/expediente-con-requerimiento-extranjeria"
            className="underline"
          >
            requerimiento
          </Link>{" "}
          no atendido o cuando existen problemas en la documentación presentada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar en estos casos
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de concluir que el expediente está bloqueado, conviene analizar
          varios aspectos:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha de presentación de la solicitud</li>
          <li>La fase en la que se encuentra el expediente</li>
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
          <li>El tiempo transcurrido sin avances</li>
          <li>La documentación aportada</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite determinar si la situación entra dentro de lo
          normal o si conviene valorar una actuación en función del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según la situación, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes que parecen bloqueados requieren la misma
          actuación. La decisión depende del tiempo transcurrido, de la fase en
          la que se encuentre el procedimiento y de si existen incidencias.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, lo habitual
          es continuar el seguimiento sin necesidad de intervenir de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no se aprecia
          evolución, puede ser necesario analizar con más detalle la situación
          para determinar si conviene actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además existen incidencias o dudas sobre la tramitación, lo
          recomendable es revisar el expediente de forma completa para valorar
          las opciones disponibles en función del caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si el expediente no avanza
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre la evolución del expediente, puede ser útil
          revisar{" "}
          <Link
            href="/que-hacer-si-expediente-extranjeria-no-avanza"
            className="underline"
          >
            qué hacer si un expediente de extranjería no avanza
          </Link>{" "}
          y cómo valorar correctamente cada situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser recomendable realizar una{" "}
          <Link href="/revision-expediente-extranjeria" className="underline">
            revisión del expediente
          </Link>{" "}
          para determinar si existe alguna incidencia y valorar si conviene adoptar alguna actuación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si el expediente es denegado
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
          y qué opciones existen para impugnar o corregir la situación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería parece bloqueado, la clave no es
          actuar de forma automática, sino entender qué está ocurriendo en cada
          caso.
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