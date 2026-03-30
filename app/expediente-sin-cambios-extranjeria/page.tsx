import Image from "next/image";
import Link from "next/link";

export default function ExpedienteSinCambiosExtranjeriaPage() {
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
          Expediente de extranjería sin cambios: qué significa y cuándo puede indicar una incidencia relevante
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente de extranjería permanece sin cambios durante un periodo prolongado, es habitual pensar que algo no está funcionando correctamente. En algunos casos, esta percepción puede estar justificada, aunque la ausencia de movimiento en el estado del expediente no siempre indica por sí sola la existencia de un problema.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos expedientes pasan por fases en las que no se reflejan cambios visibles, lo que puede hacer difícil determinar si el procedimiento sigue su curso normal o si existe alguna incidencia, especialmente cuando el expediente figura{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin analizar la situación puede hacer que se pierda margen de actuación o que no se detecte a tiempo una incidencia que esté afectando al expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente esta situación, también puede ser útil revisar cómo se analiza el{" "}
          <Link href="/estado-expediente-extranjeria" className="underline">
            estado del expediente de extranjería
          </Link>{" "}
          en su conjunto y qué puede implicar en función del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué un expediente puede no mostrar cambios
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La ausencia de cambios en el estado del expediente no significa necesariamente que no se esté tramitando. En muchos casos, la Administración continúa analizando el expediente sin actualizar el estado de forma inmediata.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto puede ocurrir tanto en fases iniciales como en fases más avanzadas del procedimiento, dependiendo del tipo de solicitud y de la carga de trabajo administrativa.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede considerarse una situación normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En determinados supuestos, que el expediente no muestre cambios durante un tiempo forma parte del curso normal del procedimiento. Esto suele ocurrir cuando los plazos todavía no han alcanzado un punto relevante o cuando la tramitación interna no se refleja en la consulta del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de interpretar la falta de cambios como un problema, conviene valorar el tiempo transcurrido y el tipo de procedimiento,{" "}
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            especialmente en relación con cuánto puede tardar un expediente en trámite
          </Link>
          o, en su caso,
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            cuánto puede durar la fase de estudio
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo la falta de cambios puede indicar un problema
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La falta de cambios empieza a ser relevante cuando se prolonga más allá de los plazos habituales, especialmente cuando el expediente permanece en la misma fase sin avances o cuando el tiempo transcurrido dificulta determinar si el procedimiento sigue su curso normal.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser necesario analizar si la ausencia de movimiento refleja una situación normal o si puede tener efectos jurídicos que convenga valorar,
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            como ocurre en determinados supuestos de silencio administrativo en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué no basta con mirar si el expediente cambia o no
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El hecho de que el expediente no cambie es solo un indicador parcial. Para interpretar correctamente la situación, es necesario analizar el procedimiento completo, el tipo de solicitud, la documentación presentada y la evolución real del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Dos expedientes sin cambios pueden encontrarse en situaciones completamente distintas.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, la falta de cambios puede ir más allá de una simple ausencia de actualización y reflejar una situación distinta, como cuando el expediente aparece{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>, lo que requiere un análisis más específico.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si tu expediente no muestra cambios
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente no muestra cambios durante un tiempo prolongado, lo recomendable no es asumir automáticamente que existe un problema ni continuar esperando sin más. Lo adecuado es analizar si la falta de movimiento entra dentro de lo normal o si conviene valorar alguna actuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este punto, puede ser útil revisar el estado completo del expediente para entender en qué fase real se encuentra,
          <Link href="/estado-expediente-extranjeria" className="underline">
            especialmente en relación con cómo interpretar el estado del expediente en extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre la falta de cambios en un expediente, una revisión jurídica permite determinar si el procedimiento sigue su curso normal o si la situación requiere algún tipo de actuación en función del caso concreto.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si finalmente el expediente termina con una resolución desfavorable, el análisis deja de centrarse en la falta de cambios y pasa a la resolución dictada,{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>. También puede ser útil revisar{" "}
          <Link href="/por-que-deniegan-extranjeria" className="underline">
            por qué deniegan extranjería
          </Link>{" "}
          en este tipo de procedimientos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, la falta de cambios puede tener un significado distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, es posible que la ausencia de cambios forme parte del procedimiento normal y que no sea necesario actuar de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no existen avances, puede ser necesario analizar si la situación requiere algún tipo de actuación o seguimiento más preciso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen incidencias o dudas sobre la tramitación, conviene revisar el caso con detalle para determinar si la falta de cambios refleja una situación normal o un posible problema.
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