import Image from "next/image";

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 lg:px-8">
    <a href="/" aria-label="Ir a la página principal">
      <Image
        src="/logo-header.png"
        alt="Hugo Alonso Abogado"
        width={260}
        height={60}
        className="h-[50px] w-auto"
        priority
      />
    </a>
  </div>
</header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Política de privacidad
        </h1>

        <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
          <p>
            Responsable: Hugo Alonso Abogado (hugoalonso@icam.es).
          </p>

          <p>
            Los datos que puedan facilitarse a través de esta web se tratarán
            para atender consultas y comunicaciones profesionales. La base legal
            del tratamiento es el consentimiento del interesado.
          </p>

          <p>
            No se cederán datos a terceros salvo obligación legal.
          </p>

          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión,
            oposición y demás legalmente previstos mediante comunicación a la
            dirección de correo indicada.
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