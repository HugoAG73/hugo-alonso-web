export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-20">
        <div className="w-full rounded-[2rem] border border-stone-200 bg-white p-10 text-center shadow-xl shadow-stone-200/60">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Consulta enviada
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
            Gracias. He recibido tu consulta.
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600">
            Revisaré tu situación y te responderé lo antes posible. Si tu caso es
            urgente, también puedes escribirme directamente por WhatsApp.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
            >
              Volver a la web
            </a>

            <a
              href="https://wa.me/34686310400?text=Hola,%20acabo%20de%20enviar%20el%20formulario%20de%20la%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5"
            >
              Escribirme por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}