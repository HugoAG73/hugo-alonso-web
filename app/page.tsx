export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
              HA · Hugo Alonso Abogado
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Abogado de extranjería
            </div>
          </div>
          <a
            href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white md:inline-block"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <h1 className="text-4xl font-semibold lg:text-6xl">
              ¿Puedes conseguir papeles en España en 2026?
            </h1>

            <p className="mt-6 text-lg">
              Te digo en menos de 24 horas si tu caso es viable o no.
            </p>

            <a
              href="#contacto"
              className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
            >
              Evaluar mi caso
            </a>
          </div>

          <aside
            id="contacto"
            className="rounded-2xl border p-6 bg-white"
          >
            <h2 className="text-xl font-semibold mb-4">
              Consulta gratuita
            </h2>

            <form
              action="https://formspree.io/f/xlgpqydn"
              method="POST"
              className="space-y-4"
            >
              {/* 🔴 AQUÍ ESTÁ LA CLAVE */}
              <input
                type="hidden"
                name="_redirect"
                value="https://www.hugoalonsoabogado.com/gracias"
              />

              <input
                name="nombre"
                placeholder="Nombre"
                required
                className="w-full border p-3 rounded"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border p-3 rounded"
              />

              <textarea
                name="mensaje"
                placeholder="Cuéntame tu caso"
                required
                className="w-full border p-3 rounded h-32"
              />

              <button className="w-full bg-black text-white py-3 rounded">
                Enviar
              </button>
            </form>
          </aside>
        </div>
      </section>

      <footer className="text-center p-6 text-sm text-gray-500">
        © 2026 Hugo Alonso Abogado
      </footer>
    </main>
  );
}