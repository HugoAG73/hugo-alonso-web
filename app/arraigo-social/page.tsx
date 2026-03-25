import Image from "next/image";

export default function ArraigoSocialPage() {
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
          Arraigo social (arraigo sociolaboral): cómo regularizar tu situación en España
        </h1>

        <p className="mt-6 text-base leading-7 text-slate-700">
          El arraigo social —denominado actualmente arraigo sociolaboral tras la última reforma normativa— es una de las principales vías para obtener papeles en España.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Muchas personas siguen utilizando el término “arraigo social”, aunque en la práctica se refieren al arraigo sociolaboral. Es importante analizar cada caso para determinar si encaja realmente en este tipo de autorización.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los supuestos permiten acceder a esta vía, ni todas las situaciones cumplen los requisitos exigidos por la normativa.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué es el arraigo sociolaboral?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Se trata de una autorización de residencia por circunstancias excepcionales que permite regularizar la situación administrativa de personas extranjeras que llevan tiempo en España y cumplen determinados requisitos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Requisitos principales
        </h2>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Permanencia continuada en España durante el tiempo exigido</li>
          <li>Vínculos o integración en el entorno social</li>
          <li>Posibilidad real de actividad laboral</li>
          <li>Ausencia de antecedentes penales relevantes</li>
        </ul>

        <p className="mt-6 text-base leading-7 text-slate-700">
          Cada caso debe analizarse de forma individual, ya que pequeños detalles pueden determinar la viabilidad o inviabilidad del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otros tipos de arraigo
        </h2>

	<p className="mt-4 text-base leading-7 text-slate-700">
 	  También puedes consultar información sobre la{" "}
 	<a href="/regularizacion-espana" className="underline">
    	regularización en España
  	</a>, ya que en algunos casos puede ser más adecuado analizar esa vía antes de iniciar un procedimiento de arraigo.
	</p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Además del arraigo sociolaboral, existen otras modalidades de arraigo en la normativa de extranjería, como el arraigo laboral o el arraigo familiar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los casos encajan en el mismo tipo, por lo que es fundamental determinar cuál es la vía más adecuada antes de iniciar cualquier solicitud.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Es viable tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar el procedimiento, es recomendable realizar un análisis previo para evitar errores que puedan dar lugar a requerimientos o denegaciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El análisis previo es determinante para definir una estrategia adecuada y evitar actuaciones innecesarias.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Evaluar mi caso en 24h
          </a>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
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
          <div>© 2026 Hugo Alonso Abogado. Todos los derechos reservados.</div>
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