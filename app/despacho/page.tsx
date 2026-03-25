import Image from "next/image";

export default function DespachoPage() {
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
          Despacho
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
          <p>
            Soy abogado ejerciente en Madrid y desarrollo mi actividad con enfoque
            individualizado en materia de extranjería, especialmente en el análisis
            de viabilidad, preparación documental y estrategia jurídica de cada caso.
          </p>

          <p>
            Trabajo con atención directa, sin intermediarios, revisando personalmente
            la situación de cada cliente y la documentación disponible antes de
            recomendar cualquier actuación.
          </p>

          <p>
            Estoy colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM), con
            número de colegiación 105.437.
          </p>

          <p>
            Mi forma de trabajo se basa en tres principios: claridad, realismo y
            rigor jurídico. Si un caso presenta dificultades o no resulta viable,
            también lo indico con franqueza.
          </p>

          <p>
            La finalidad del despacho es ofrecer una valoración jurídica seria,
            ordenada y útil, evitando respuestas genéricas y planteamientos que
            puedan perjudicar al interesado por falta de preparación.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
          >
            Solicitar valoración inicial
          </a>

          <a
            href="https://wa.me/34686310400?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20mi%20situaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5"
          >
            Escribirme por WhatsApp
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