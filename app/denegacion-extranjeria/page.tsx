import Image from "next/image";

export default function DenegacionExtranjeriaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <a href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[70px] w-auto md:h-[85px]"
              priority
            />
          </a>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Denegación de extranjería: qué hacer tras una resolución desfavorable
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has recibido una denegación en tu solicitud de residencia,
          regularización o arraigo, es importante revisar la resolución y
          valorar con precisión qué opciones existen en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todas las denegaciones deben afrontarse del mismo modo. En algunos
          supuestos puede ser posible recurrir; en otros, puede ser más
          conveniente estudiar una nueva solicitud o replantear la estrategia.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer tras una denegación de extranjería
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Tras recibir una resolución desfavorable, lo primero es analizar los
          motivos concretos de la denegación y comprobar qué plazo existe para
          reaccionar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de tomar cualquier decisión, conviene revisar la resolución, la
          documentación presentada y los posibles errores o carencias del
          expediente. Ese análisis previo permite determinar si resulta más
          adecuado recurrir o preparar una nueva vía.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Motivos frecuentes de denegación en extranjería
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchas denegaciones se producen por cuestiones
          documentales, problemas de prueba o deficiencias en el planteamiento
          del expediente.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Documentación insuficiente o incorrectamente presentada</li>
          <li>Falta de acreditación suficiente de permanencia en España</li>
          <li>Contratos de trabajo que no cumplen los requisitos exigidos</li>
          <li>Antecedentes penales o dudas sobre su relevancia</li>
          <li>Errores en la preparación o en la estrategia del expediente</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Identificar correctamente el motivo de la denegación es fundamental
          para no repetir errores y para valorar si existe una respuesta jurídica
          adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          No todas las denegaciones son iguales
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La viabilidad de una respuesta depende del procedimiento afectado, de
          la causa concreta de la denegación y del momento en que se encuentre el
          expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No es lo mismo una denegación en un procedimiento de arraigo que una
          resolución desfavorable en otro tipo de autorización de residencia. Por
          eso es importante revisar cada caso de forma individual.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Se puede recurrir una denegación?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, sí puede ser posible recurrir una denegación. Sin
          embargo, no siempre es la opción más conveniente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de interponer un recurso, conviene valorar si existen argumentos
          sólidos, si la documentación permite sostener la impugnación y si esa
          vía ofrece una posibilidad real de mejorar la situación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede no ser conveniente recurrir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos el recurso es la mejor solución. En determinadas
          situaciones, puede resultar más adecuado preparar una nueva solicitud o
          corregir previamente las deficiencias del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Interponer un recurso sin una base suficiente puede prolongar el
          problema sin aportar una solución real. Por eso es importante valorar
          con criterio qué opción conviene en cada caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Importancia de la revisión del expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La revisión del expediente permite entender por qué se ha producido la
          denegación, detectar errores en la documentación o en la estrategia y
          ordenar correctamente los siguientes pasos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos supuestos, la diferencia entre insistir en una vía que no
          conviene y plantear una solución jurídicamente adecuada está en ese
          análisis previo.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras vías que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, tras una denegación puede resultar más conveniente
          estudiar otras opciones de regularización antes que insistir en el
          mismo procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Puedes consultar también información sobre el{" "}
          <a href="/arraigo-social" className="underline">
            arraigo social o arraigo sociolaboral
          </a>{" "}
          y sobre la{" "}
          <a href="/regularizacion-espana" className="underline">
            regularización en España
          </a>
          , ya que en determinados supuestos puede ser más adecuado replantear la
          vía antes de continuar.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una denegación, conviene revisar la resolución, la
          documentación aportada y las opciones disponibles antes de actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El análisis previo permite determinar si existe margen para recurrir,
          si resulta preferible preparar una nueva solicitud o si conviene
          adoptar otra estrategia para evitar nuevos errores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas valorar qué puede hacerse tras una denegación de
          extranjería, puedes solicitar una revisión inicial de tu caso.
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