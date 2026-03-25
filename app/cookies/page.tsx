import Image from "next/image";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="/" aria-label="Ir a la página principal">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              priority
              className="h-[64px] w-auto md:h-[74px]"
            />
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Cookies
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
          <p>
            Esta web utiliza únicamente cookies técnicas necesarias para su
            funcionamiento.
          </p>

          <p>
            No se utilizan cookies publicitarias ni de análisis.
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
    </main>
  );
}