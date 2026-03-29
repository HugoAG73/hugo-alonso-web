import Image from "next/image";
import Link from "next/link";

export default function DenegacionArraigoSocialPage() {
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
          Denegación de arraigo social: qué hacer y cómo actuar tras una resolución desfavorable
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has recibido una denegación en tu solicitud de arraigo social, es
          importante actuar con rapidez, revisar los motivos de la resolución y
          valorar qué opciones pueden existir en tu caso antes de adoptar cualquier decisión.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Tras las últimas modificaciones en la normativa de extranjería, es importante analizar cada caso con precisión y no basarse únicamente en formulaciones generales, ya que una valoración incorrecta puede condicionar las opciones disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todas las denegaciones de arraigo deben afrontarse del mismo modo.
          En algunos supuestos puede ser posible recurrir; en otros, puede resultar
          más adecuado corregir las deficiencias y plantear una nueva solicitud.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Motivos frecuentes de denegación del arraigo social
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Muchas denegaciones de arraigo social se producen por problemas de documentación,
          insuficiencia de prueba o incumplimiento de requisitos específicos del
          procedimiento.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Informes de inserción social desfavorables o insuficientes</li>
          <li>Contratos de trabajo que no cumplen los requisitos exigidos</li>
          <li>Falta de acreditación suficiente de permanencia en España</li>
          <li>Problemas con antecedentes penales o su interpretación</li>
          <li>Errores en la preparación o planteamiento del expediente</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, estos problemas no se detectan antes de presentar la solicitud, lo que puede dar lugar a una denegación que podría haberse evitado con una revisión previa del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Identificar correctamente el motivo de la denegación es fundamental
          para no repetir errores y para valorar qué actuación puede resultar
          más adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Se puede recurrir una denegación de arraigo social?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, puede ser posible recurrir una denegación de arraigo social. Sin embargo, no siempre es la opción más conveniente, ya que recurrir sin una base suficiente puede prolongar el procedimiento sin mejorar el resultado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de decidir si recurres, es importante comprobar qué plazo tienes
          para hacerlo y si todavía estás a tiempo de actuar. Puedes consultar la
          página sobre{" "}
          <Link href="/plazo-recurso-extranjeria" className="underline">
            plazo para recurrir en extranjería
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si quieres conocer con más detalle cómo funciona la impugnación, puedes
          consultar la página sobre{" "}
          <Link href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Consecuencias de no actuar a tiempo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Dejar transcurrir el plazo sin revisar la resolución o sin adoptar ninguna actuación puede limitar de forma significativa las opciones disponibles y hacer que determinadas vías dejen de ser viables.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este tipo de situaciones, es especialmente importante analizar el
          expediente con rapidez para evitar que la situación se complique o que
          determinadas vías queden cerradas.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, dejar pasar el plazo puede impedir completamente la revisión de la resolución.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede no ser conveniente recurrir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos el recurso es la mejor opción. En determinadas
          situaciones, puede resultar más adecuado corregir los problemas del
          expediente y presentar una nueva solicitud de arraigo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Recurrir sin una base suficiente puede prolongar el problema sin aportar
          una solución real. Por eso es importante valorar con criterio qué opción
          conviene en cada caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras opciones que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, puede ser necesario replantear la estrategia y valorar
          otras vías de regularización.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Puedes consultar también la página sobre{" "}
          <Link href="/arraigo-social" className="underline">
            arraigo social
          </Link>{" "}
          y sobre la{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una denegación de arraigo social, conviene revisar la
          resolución, la documentación aportada y las opciones disponibles antes
          de actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si existe margen para recurrir, si
          resulta más adecuado presentar una nueva solicitud o si conviene adoptar
          una estrategia distinta para evitar nuevos errores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando se recibe una denegación de arraigo social, analizar el caso con precisión permite valorar si existe margen de actuación o si conviene replantear la estrategia antes de que la situación se consolide.
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

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-stone-300 px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-stone-100"
          >
            Volver a la web
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
            <a href="/despacho">Despacho</a>
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-privacidad">Política de privacidad</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}