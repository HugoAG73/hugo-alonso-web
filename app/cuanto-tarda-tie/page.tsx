import Image from "next/image";
import Link from "next/link";

export default function CuantoTardaTiePage() {
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
          Cuánto tarda la TIE en España
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          El tiempo que tarda la expedición de la TIE (tarjeta de identidad de extranjero) es una de las dudas más habituales tras obtener una resolución favorable en un procedimiento de extranjería. Aunque se trata de una fase posterior a la autorización, la duración del proceso puede variar en función de distintos factores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Conviene tener en cuenta que la TIE es la materialización física de una autorización previamente concedida, por lo que su tramitación depende tanto del procedimiento anterior como de la gestión administrativa posterior.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, para entender correctamente los tiempos, es importante diferenciar entre la resolución del expediente y la expedición de la tarjeta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este sentido, conviene tener en cuenta que la TIE no es un procedimiento autónomo, sino una fase posterior a una autorización ya concedida, lo que explica que sus tiempos dependan en gran medida del proceso previo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, estas dudas suelen aparecer cuando el expediente se mantiene durante un tiempo prolongado{" "}
          <Link href="/expediente-en-tramite-sin-respuesta" className="underline">
            en trámite sin respuesta
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          De qué depende el tiempo de expedición de la TIE
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El tiempo de obtención de la TIE puede verse afectado por distintos factores, como la disponibilidad de citas, la carga de trabajo administrativa o la correcta tramitación de la documentación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Además, este plazo está condicionado por el estado previo del expediente, especialmente cuando ha sido necesario esperar a que se resolviera el procedimiento principal,{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            en relación con cuánto tarda extranjería en resolver
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuál es el plazo habitual
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Con carácter general, la expedición de la TIE puede demorarse varias semanas desde la toma de huellas, aunque el tiempo concreto puede variar según la provincia y la situación administrativa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, la percepción de retraso no se debe a la expedición de la tarjeta en sí, sino a fases previas del procedimiento, como cuando el expediente ha permanecido{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser útil analizar cuánto han durado las fases previas del expediente, especialmente cuando el procedimiento ha permanecido{" "}
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            en estudio
          </Link>{" "}
          durante un periodo prolongado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el plazo entra dentro de lo normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, que la TIE tarde varias semanas entra dentro de lo habitual, especialmente si el procedimiento previo se ha resuelto recientemente o si existen demoras en la asignación de citas.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede existir un retraso relevante
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Puede ser necesario analizar la situación cuando el tiempo transcurrido supera lo habitual o cuando existen incidencias en el procedimiento previo, como la existencia de un{" "}
          <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
            requerimiento
          </Link>{" "}
          o situaciones como{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>{" "}
          o durante un tiempo prolongado{" "}
          <Link href="/expediente-sin-cambios-extranjeria" className="underline">
            sin cambios
          </Link>
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, es habitual cuestionarse si el expediente continúa su tramitación con normalidad, especialmente cuando permanece durante un tiempo prolongado{" "}
          <Link href="/expediente-en-tramite-sin-respuesta" className="underline">
            en trámite sin respuesta
          </Link>{" "}
          o cuando existe la sensación de que el procedimiento está{" "}
          <Link href="/expediente-extranjeria-bloqueado" className="underline">
            bloqueado
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si la TIE tarda más de lo esperado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando la expedición de la TIE se retrasa, no siempre es necesario actuar de inmediato. En muchos casos, bastará con continuar el seguimiento del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En otros supuestos, puede ser útil analizar si existe alguna incidencia en el expediente o si el retraso se encuentra dentro de lo normal en función del caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para ello, puede ser útil revisar{" "}
          <Link href="/que-hacer-si-expediente-extranjeria-no-avanza" className="underline">
            qué hacer si un expediente de extranjería no avanza
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el tiempo transcurrido, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todas las demoras en la expedición de la TIE requieren la misma actuación. La decisión depende del tiempo transcurrido y de las circunstancias del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el plazo entra dentro de lo habitual, lo normal es continuar el seguimiento. Si el retraso empieza a ser relevante, puede ser conveniente analizar el caso con mayor detalle.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una revisión adecuada permite determinar si la demora entra dentro de lo normal, detectar incidencias y valorar si conviene adoptar alguna actuación.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/#contacto" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg">
            Solicitar revisión de mi caso
          </Link>

          <a href="https://wa.me/34686310400" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg">
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:justify-between lg:px-8">
          <div>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            <br />
            © 2026 Hugo Alonso Abogado
          </div>
          <div className="flex gap-6">
            <Link href="/despacho">Despacho</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
            <Link href="/politica-privacidad">Política de privacidad</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}