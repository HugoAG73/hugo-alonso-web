import Image from "next/image";
import Link from "next/link";

export default function CuantoTardaArraigoSocialPage() {
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
          Cuánto tarda el arraigo social en España
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Una de las principales dudas al iniciar un procedimiento de arraigo
          social es cuánto tiempo puede tardar en resolverse. La duración del
          expediente es una cuestión relevante, ya que de ella dependen
          decisiones importantes como mantener la situación actual, preparar
          documentación adicional o valorar posibles alternativas.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, no existe un único plazo aplicable a todos los casos. El
          tiempo de resolución depende de múltiples factores, como la carga de
          trabajo de la Administración, la complejidad del expediente o la fase
          en la que se encuentre el procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, más que fijar un plazo concreto, conviene analizar cómo se
          desarrolla la tramitación y qué situaciones pueden afectar al tiempo
          de resolución.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuál es el plazo habitual de resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Con carácter general, el procedimiento de arraigo social suele
          resolverse en varios meses desde la presentación de la solicitud. No
          obstante, ese plazo puede variar significativamente en función de la
          provincia y de la situación concreta del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente estos tiempos, también puede ser útil
          revisar{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            cuánto tarda extranjería en resolver
          </Link>{" "}
          en términos generales y cómo se sitúa el arraigo social dentro de esos
          plazos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          De qué depende el tiempo de resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El tiempo que tarda el arraigo social no es uniforme. Puede verse
          afectado por distintos factores:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La carga de trabajo de la oficina de extranjería</li>
          <li>La complejidad del expediente</li>
          <li>La existencia de informes o documentación adicional</li>
          <li>La posible emisión de requerimientos</li>
          <li>La fase en la que se encuentra el procedimiento</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Durante la tramitación, el expediente puede pasar por distintas fases,
          como cuando aparece{" "}
          <Link href="/expediente-en-tramite-extranjeria" className="underline">
            en trámite
          </Link>{" "}
          o{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, lo que puede influir en la percepción del tiempo de espera.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el plazo entra dentro de lo normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la falta de resolución durante varios meses entra
          dentro de lo habitual en este tipo de procedimientos. Esto es
          especialmente frecuente cuando el expediente sigue avanzando, aunque
          no se reflejen cambios visibles de forma inmediata.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de considerar que existe un problema, conviene analizar
          si el expediente se encuentra dentro de un plazo razonable en función
          de su estado y del tipo de procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede existir un retraso relevante
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La situación cambia cuando el tiempo transcurrido supera lo habitual o
          cuando el expediente no muestra avances durante un periodo prolongado.
          En estos casos, puede ser necesario analizar si existe alguna
          incidencia que esté afectando a la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto puede ocurrir, por ejemplo, cuando el expediente presenta
          incidencias, cuando ha existido un{" "}
          <Link
            href="/expediente-con-requerimiento-extranjeria"
            className="underline"
          >
            requerimiento
          </Link>{" "}
          o cuando se encuentra en situaciones como{" "}
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

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si el arraigo social tarda más de lo esperado
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
          y cómo valorar correctamente cada situación en función del estado del expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el tiempo transcurrido, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes de arraigo social que tardan más de lo esperado requieren la misma actuación. La decisión depende principalmente del tiempo transcurrido, de la fase en la que se encuentre el procedimiento y de si existen incidencias.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, lo habitual es continuar el seguimiento sin necesidad de intervenir de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no se aprecia evolución, puede ser necesario analizar con más detalle la situación para determinar si conviene actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además existen incidencias o dudas sobre la tramitación, lo recomendable es revisar el expediente de forma completa para valorar las opciones disponibles en función del caso.
        </p>       

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si el expediente es denegado
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si finalmente el procedimiento termina con una resolución
          desfavorable, el análisis debe centrarse en la resolución dictada.
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