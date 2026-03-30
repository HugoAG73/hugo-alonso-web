import Image from "next/image";
import Link from "next/link";

export default function ExpulsionExtranjeriaPage() {
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
          Expulsión en extranjería y orden de salida: qué hacer y cómo actuar en tu caso
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has recibido una orden de salida o una resolución de expulsión, es importante actuar con rapidez, revisar el contenido de la resolución y valorar las posibles actuaciones en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin analizar la resolución o dejar transcurrir los plazos puede hacer que se pierda margen de actuación o que determinadas opciones dejen de estar disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todas las situaciones son iguales ni todas las resoluciones deben
          afrontarse del mismo modo. Antes de actuar, conviene analizar el
          expediente y valorar qué opciones pueden existir en función de tu
          situación concreta.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué implica una orden de salida o expulsión
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este tipo de resoluciones pueden afectar directamente a tu permanencia
          en España y a la posibilidad de regularizar tu situación en el futuro.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante no ignorar la resolución y revisar con precisión
          su contenido antes de tomar decisiones.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Plazos y actuaciones tras la resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Las resoluciones de expulsión u orden de salida establecen plazos
          concretos para actuar. Dejar transcurrir ese plazo puede limitar las
          opciones disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante revisar la resolución cuanto antes y valorar qué
          margen existe para adoptar una respuesta adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Consecuencias de no actuar a tiempo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Dejar transcurrir los plazos sin revisar la resolución o sin adoptar ninguna actuación puede limitar de forma significativa las opciones disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este tipo de situaciones, es especialmente importante analizar el expediente con rapidez para evitar que la situación se agrave o que determinadas vías queden cerradas.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Se puede recurrir una expulsión?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En determinados casos, puede ser posible impugnar la resolución. Sin
          embargo, no siempre es la opción más conveniente ni en todos los
          supuestos existen argumentos suficientes.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, también puede ser necesario actuar con especial rapidez en función del tipo de resolución recibida.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si quieres conocer con más detalle los aspectos relacionados con la
          impugnación, puedes consultar la página sobre{" "}
          <a href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </a>
          , donde se explican los plazos y las consideraciones que conviene tener
          en cuenta.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Problemas frecuentes en este tipo de situaciones
        </h2>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>No revisar correctamente la resolución</li>
          <li>Dejar pasar el plazo sin actuar</li>
          <li>Adoptar decisiones sin analizar el expediente</li>
          <li>Actuar sin una estrategia clara</li>
          <li>No valorar alternativas de regularización</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Evitar estos errores es fundamental para proteger tu situación y no
          limitar opciones futuras.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras opciones que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, puede ser necesario estudiar si existe alguna vía de{" "}
          <a href="/regularizacion-espana" className="underline">
            regularización en España
          </a>{" "}
          o si resulta posible plantear una alternativa como el{" "}
          <a href="/arraigo-social" className="underline">
            arraigo social          
          </a>
          , en función de la situación concreta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser relevante revisar si la resolución guarda relación
          con una denegación previa. En ese caso, puedes consultar la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una orden de salida o una resolución de expulsión,
          conviene revisar el expediente, el plazo disponible y las opciones
          existentes antes de actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si existe margen para recurrir, si es
          posible plantear otra vía o si conviene adoptar una estrategia distinta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar tu situación tras una resolución de expulsión,
          puedes solicitar una revisión inicial para valorar las opciones
          disponibles en tu caso.
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