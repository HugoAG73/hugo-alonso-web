import Image from "next/image";
import Link from "next/link";

export default function ExpedienteEnTramiteExtranjeriaPage() {
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
          Expediente en trámite en extranjería: qué significa y cuándo conviene
          preocuparse
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Ver que un expediente de extranjería aparece “en trámite” no siempre
          aclara la situación real del procedimiento. En muchos casos, ese
          estado solo indica que no existe todavía una resolución final, pero no
          permite saber por sí solo si la tramitación avanza con normalidad o si
          existe ya una demora relevante.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El problema es que muchas personas interpretan ese estado como algo
          automáticamente positivo o, por el contrario, como una señal de
          bloqueo. Ninguna de esas conclusiones debería asumirse sin revisar el
          tipo de procedimiento, la fecha de presentación y el tiempo realmente
          transcurrido.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa que el expediente figure en trámite
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Con carácter general, que un expediente figure en trámite significa
          que el procedimiento no ha finalizado y que la Administración no ha
          dictado todavía una resolución expresa que conste reflejada en la
          consulta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, ese estado no explica por sí solo en qué fase interna se
          encuentra el expediente, si ha existido alguna incidencia, si se ha
          producido un requerimiento o si el procedimiento está ya cerca de
          resolverse.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser un estado normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos procedimientos de extranjería, que el expediente continúe en
          trámite durante un tiempo no es, por sí mismo, una anomalía. Puede
          responder simplemente al curso normal del procedimiento, especialmente
          cuando no ha transcurrido todavía un plazo relevante desde la
          presentación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de extraer conclusiones, conviene valorar si el tiempo
          transcurrido entra dentro de lo razonable para ese tipo de solicitud,
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            especialmente en relación con cuánto tarda extranjería en resolver
          </Link>
          y en qué situaciones un expediente puede permanecer en tramitación durante más tiempo del habitual,
          <Link href="/expediente-en-tramite-cuanto-tarda" className="underline">
            algo que puede analizarse con más detalle cuando se trata de determinar cuánto tarda un expediente en trámite
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo deja de ser un simple estado informativo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estado “en trámite” deja de ser una mera referencia informativa
          cuando el tiempo transcurrido empieza a ser relevante, cuando existen
          incidencias previas o cuando la falta de resolución puede tener
          consecuencias jurídicas en función del procedimiento iniciado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En esos supuestos, seguir esperando sin revisar el expediente puede
          hacer que no se detecte a tiempo una demora relevante o que no se
          valore si se ha producido algún efecto por falta de respuesta,
          <Link
            href="/silencio-administrativo-extranjeria"
            className="underline"
          >
            como ocurre en determinados supuestos de silencio administrativo en
            extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar si tu expediente sigue en trámite
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para saber si ese estado entra dentro de lo normal o si exige una
          valoración más cuidadosa, conviene revisar varios aspectos del
          procedimiento.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha exacta de presentación de la solicitud</li>
          <li>El tipo de autorización o procedimiento iniciado</li>
          <li>La existencia de requerimientos o incidencias anteriores</li>
          <li>La documentación presentada durante la tramitación</li>
          <li>El tiempo transcurrido sin movimientos relevantes</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite distinguir entre una tramitación que sigue su
          curso ordinario y una situación en la que ya conviene estudiar otras
          actuaciones.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el estado en trámite puede convertirse en un problema
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El principal riesgo no siempre es el propio estado “en trámite”, sino
          interpretar ese estado de forma pasiva y no revisar a tiempo si el
          expediente requiere alguna reacción.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, esperar sin comprobar plazos, incidencias o efectos de
          la falta de resolución puede retrasar decisiones útiles y hacer que la
          situación se valore demasiado tarde.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Si el expediente termina resolviéndose de forma desfavorable
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Que un expediente figure en trámite no impide que finalmente termine
          en una resolución negativa. En algunos casos, tras una fase prolongada
          de tramitación, el procedimiento concluye con una denegación que
          obliga a replantear la estrategia.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya existe una resolución desfavorable o necesitas valorar sus
          efectos, el análisis deja de centrarse en el estado del expediente y
          pasa a la resolución dictada,
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente aparece en trámite, lo prudente no es asumir sin más
          que todo va bien ni concluir automáticamente que existe un problema.
          Lo correcto es revisar el procedimiento concreto, la fecha de
          presentación, el tiempo transcurrido y las incidencias que puedan
          haberse producido durante la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esa revisión permite determinar si el expediente sigue un curso
          razonable, si conviene continuar esperando o si resulta necesario
          valorar otras actuaciones en función de la situación concreta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre un expediente que continúa en trámite, una revisión jurídica permite determinar si el estado es compatible con una tramitación normal o si el tiempo transcurrido exige valorar alguna actuación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según tu situación, el estado en trámite puede tener un significado distinto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable y no existen incidencias, es posible que la tramitación esté siguiendo su curso normal y que no sea necesario adoptar ninguna actuación inmediata.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante, puede ser necesario analizar si el expediente ha superado los plazos habituales y si conviene valorar otras opciones en función del procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si además existen requerimientos, incidencias o falta de información clara, el estado en trámite puede no reflejar la situación real del expediente y conviene revisar con más detalle el caso concreto.
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

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            <br />
            © 2026 Hugo Alonso Abogado. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="/despacho" className="hover:text-slate-800">
              Despacho
            </a>
            <a href="/aviso-legal" className="hover:text-slate-800">
              Aviso legal
            </a>
            <a href="/politica-privacidad" className="hover:text-slate-800">
              Política de privacidad
            </a>
            <a href="/cookies" className="hover:text-slate-800">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}