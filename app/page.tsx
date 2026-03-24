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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%),radial-gradient(circle_at_left,rgba(120,113,108,0.10),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-600 shadow-sm">
              Abogado de extranjería · Regularización en España
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl">
              ¿Puedes conseguir papeles en España en 2026?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Te digo en menos de 24 horas si tu caso es viable o no, con criterio jurídico real.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Abogado de extranjería en Madrid. Análisis individual, sin respuestas genéricas.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-amber-700">
              Procedimiento extraordinario en fase inicial. La preparación del expediente es clave.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg"
              >
                Evaluar mi caso ahora
              </a>

              <a
                href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
              <div>✔ Respuesta en menos de 24h</div>
              <div>✔ Evaluación confidencial</div>
              <div>✔ Sin compromiso inicial</div>
            </div>
          </div>

          <aside
            id="contacto"
            className="self-start rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Comprueba si tu caso puede encajar
            </h2>

            <form
              action="https://formspree.io/f/xlgpqydn"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="_next"
                value="https://www.hugoalonsoabogado.com/gracias"
              />

              <input
                name="nombre"
                placeholder="Nombre y apellidos"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                required
                className="w-full p-3 border rounded-lg"
              />

              <textarea
                name="mensaje"
                placeholder="Describe tu caso"
                required
                className="w-full p-3 border rounded-lg h-32"
              ></textarea>

              <button className="w-full bg-black text-white py-3 rounded-xl">
                Enviar consulta
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