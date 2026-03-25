import Image from "next/image";

export default function DespachoPage() {
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
      <section className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Despacho
        </h1>
          <p className="mt-3 text-sm text-slate-600">
            Despacho centrado en Derecho de Extranjería en Madrid.
          </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
          
          <p>
            Abogado ejerciente en Madrid especializado en Derecho de Extranjería,
            con más de 15 años de experiencia en el análisis y tramitación de
            expedientes relacionados con la regularización administrativa.
          </p>

          <p>
            Trabajo de forma directa, sin intermediarios, analizando personalmente
            cada caso para determinar si existe una vía real de actuación.
          </p>

          <p>
            No todos los supuestos pueden tramitarse ni todas las situaciones
            tienen una solución viable. Por eso, el primer paso siempre es un
            análisis jurídico riguroso de la situación concreta.
          </p>

          <p>
            El trabajo se centra en tres aspectos:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Evaluación realista de la situación administrativa</li>
            <li>Definición de una estrategia adecuada al caso concreto</li>
            <li>Preparación y revisión del expediente con criterio jurídico</li>
          </ul>

          <p>
            Cada caso se analiza de forma individual, sin aplicar soluciones estándar.
          </p>

          <p>
            Cada decisión se toma en función de la viabilidad real del
            procedimiento, evitando actuaciones que puedan generar riesgos
            innecesarios.
          </p>

          <p>
            El objetivo no es iniciar procedimientos sin garantías, sino
            identificar si existe una vía razonable y, en su caso, trabajarla
            correctamente desde el inicio.
          </p>

          <p>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            (ICAM), nº 105.437.
          </p>

          <p className="text-sm text-slate-600">
            Licenciado en Derecho por la Universidad Complutense de Madrid y
            formación de acceso a la abogacía en la Escuela de Práctica Jurídica.
          </p>

          <p className="font-medium text-slate-800">
            El objetivo es que tomes decisiones con información clara, evitando
            errores que puedan afectar a tu situación administrativa.
          </p>
        </div>

        {/* BOTONES */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
          >
            Solicitar valoración
          </a>

          <a
            href="https://wa.me/34686310400?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20mi%20situaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5"
          >
            Escribirme por WhatsApp
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