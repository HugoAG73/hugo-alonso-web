import Image from "next/image";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 lg:px-8">
          <a href="/" aria-label="Ir a la página principal">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              priority
              className="h-[90px] w-auto md:h-[110px]"
            />
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Aviso legal
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
          <p>
            <strong>Titular:</strong> Hugo Alonso
            <br />
            <strong>Nombre comercial o denominación del sitio web:</strong> Hugo Alonso Abogado
            <br />
            <strong>Actividad:</strong> Ejercicio de la abogacía
            <br />
            <strong>Domicilio:</strong> Calle Guillermo de Osma núm. 5, bajo 1, C.P. 28045 Madrid
            <br />
            <strong>Email:</strong> hugoalonso@icam.es
            <br />
            <strong>Teléfono:</strong> 686 310 400
          </p>

          <p>
            Este sitio web tiene finalidad informativa y de contacto. La
            información contenida en él no constituye asesoramiento jurídico y
            requiere análisis individualizado de cada caso.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
          >
            Volver a la web
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Hugo Alonso Abogado. Todos los derechos reservados.</div>
          <div className="flex gap-6">
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