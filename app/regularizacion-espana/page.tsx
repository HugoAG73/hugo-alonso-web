import Image from "next/image";

export default function RegularizacionPage() {
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
          Regularización en España: cómo obtener papeles y si puedes beneficiarte del nuevo proceso
        </h1>

        <p className="mt-0 text-base leading-7 text-slate-700">
          Muchas personas se preguntan si podrán obtener papeles en España a través de la llamada regularización extraordinaria.
	</p>

        <p className="mt-4 text-base leading-7 text-slate-700">
	  Sin embargo, es importante entender qué se sabe realmente a día de hoy y si esta vía puede aplicarse a tu situación concreta.
        </p>

	<h2 className="mt-12 text-2xl font-semibold text-slate-900">
 	 ¿Puede aplicarse a tu caso?
	</h2>

	<p className="mt-4 text-base leading-7 text-slate-700">
  	  No todas las personas en situación administrativa irregular podrán acogerse a este tipo de regularización.
	</p>

	<p className="mt-4 text-base leading-7 text-slate-700">
  	  La aplicación de este proceso dependerá de factores como el tiempo de permanencia en España, la situación personal y la documentación disponible.
	</p>

	<p className="mt-4 text-base leading-7 text-slate-700">
 	  Por eso es fundamental valorar cada caso de forma individual antes de tomar decisiones.
	</p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué se sabe actualmente sobre la regularización?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La iniciativa plantea la posibilidad de establecer un mecanismo extraordinario para regularizar a personas extranjeras que se encuentren en España y cumplan determinados requisitos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, todavía no existe un procedimiento cerrado ni unas condiciones definitivas aplicables a todos los casos.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Significa esto que puedes obtener papeles?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Depende de tu situación concreta y de los requisitos que finalmente se establezcan.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, existen ya vías de regularización actualmente en vigor (como distintos tipos de arraigo) que pueden ser más adecuadas que esperar a un proceso futuro.
        </p>

	<p className="mt-4 text-base leading-7 text-slate-700">
 	  Entre estas vías se encuentra el{" "}
  	<a href="/arraigo-social" className="underline">
    	  arraigo social (arraigo sociolaboral)
 	</a>, que puede ser una alternativa real en función de la situación concreta.
	</p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En otros casos, puede ser más conveniente esperar y preparar la documentación necesaria con antelación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Riesgos de actuar sin análisis previo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Iniciar trámites sin un estudio previo puede dar lugar a errores que afecten negativamente a tu situación administrativa o limiten futuras opciones de regularización.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cada caso debe valorarse de forma individual para determinar si existe una vía viable y cuál es la mejor estrategia.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué puedo hacer por tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Reviso tu situación concreta para determinar si puedes acogerte a alguna vía de regularización actual o si es conveniente preparar tu caso para posibles cambios normativos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El estudio previo es determinante para evitar errores que puedan dar lugar a incidencias, requerimientos o denegaciones.
        </p>

	<p className="mt-10 text-sm text-slate-600">
 	  He analizado numerosos casos de regularización en distintas situaciones personales y documentales, definiendo la estrategia más adecuada en función de cada caso.
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