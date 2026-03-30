import Image from "next/image";
import Link from "next/link";

export default function PorQueDenieganExtranjeriaPage() {
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
          Por qué deniegan en extranjería en España y qué significa en cada caso
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          La denegación de una solicitud de extranjería no suele producirse por un único motivo. En la mayoría de los casos, responde a una combinación de factores relacionados con la documentación presentada, el cumplimiento de requisitos y la forma en que se ha planteado el expediente, aspectos que en muchas ocasiones no resultan evidentes hasta que se recibe la resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Entender por qué se produce una denegación es clave, no solo para conocer qué ha fallado, sino también para determinar si existen opciones para recurrir o si la situación puede corregirse en un nuevo procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Analizar correctamente el motivo de la denegación desde el inicio puede evitar
  errores al decidir cómo actuar y ayudar a no perder opciones que podrían ser
  relevantes en tu caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Motivos más habituales de denegación en extranjería
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Aunque cada expediente es distinto, existen algunos motivos que se repiten con frecuencia en las resoluciones desfavorables.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Falta de cumplimiento de requisitos exigidos por la normativa</li>
          <li>Documentación incompleta, incorrecta o insuficiente</li>
          <li>Incoherencias en la información aportada</li>
          <li>No atender correctamente un requerimiento previo</li>
          <li>Valoración negativa de circunstancias personales o laborales</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Estos motivos no siempre aparecen de forma aislada. En muchos expedientes, la denegación se produce por la combinación de varios factores que, analizados en conjunto, llevan a una valoración negativa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la denegación no se debe únicamente a la falta de un documento concreto, sino a cómo se ha construido el expediente en su conjunto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué una denegación no siempre es evidente antes de que se produzca
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Uno de los problemas más habituales es que el expediente puede parecer correcto durante la tramitación, incluso cuando existen elementos que pueden dar lugar a una resolución desfavorable.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, estos problemas solo se hacen visibles cuando la Administración analiza el fondo del asunto o cuando se valora la documentación presentada en su conjunto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué papel tienen los requerimientos en una posible denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Los requerimientos son una de las fases más importantes del procedimiento. En muchos casos, anticipan posibles problemas en el expediente o señalan aspectos que la Administración considera insuficientes.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No responder correctamente a un requerimiento puede influir directamente en la resolución final,
          <Link href="/expediente-con-requerimiento-extranjeria" className="underline">
            especialmente en relación con cómo afecta un requerimiento al expediente de extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa recibir una resolución denegatoria
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La denegación implica que la Administración considera que no se cumplen los requisitos necesarios para conceder la autorización solicitada. Sin embargo, no todas las denegaciones tienen el mismo alcance ni las mismas consecuencias.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretar correctamente una resolución desfavorable, es necesario analizar el contenido de la resolución,
          <Link href="/denegacion-extranjeria" className="underline">
            especialmente en relación con cómo entender una denegación en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué opciones existen tras una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Tras una denegación, pueden existir distintas vías de actuación, dependiendo del caso concreto. Entre ellas, la posibilidad de presentar un recurso administrativo o, en determinados supuestos, acudir a la vía judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La elección de una u otra opción depende del contenido de la resolución y de la viabilidad de cada alternativa,
          <Link href="/recurso-denegacion-extranjeria" className="underline">
            especialmente en relación con cómo recurrir una denegación en extranjería
          </Link>
          o, en su caso,
          <Link href="/recurso-contencioso-extranjeria" className="underline">
            cuándo acudir a un recurso contencioso en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué es importante analizar el caso antes de actuar
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todas las denegaciones deben tratarse de la misma manera. En algunos casos, puede ser posible corregir el problema en un nuevo procedimiento, mientras que en otros puede ser necesario recurrir la resolución para evitar que la situación se consolide.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una valoración previa permite determinar qué opción es más adecuada en función de las circunstancias del expediente y evita adoptar decisiones que puedan limitar las opciones disponibles.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el motivo de la denegación, las opciones pueden ser distintas
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la denegación se debe a un defecto subsanable, puede ser posible corregirlo en una nueva solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si afecta a la valoración jurídica del expediente, puede ser necesario analizar la viabilidad de un recurso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen dudas sobre el contenido de la resolución, conviene revisar el caso con detalle antes de decidir cómo actuar.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Revisar resolución de mi expediente
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