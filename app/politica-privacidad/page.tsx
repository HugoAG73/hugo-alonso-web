import Image from "next/image";
import Link from "next/link";

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 lg:px-8">
          <Link href="/" aria-label="Ir a la página principal">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              priority
              className="h-[70px] w-auto md:h-[85px]"
            />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Política de privacidad
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
          <p>
            <strong>Responsable del tratamiento:</strong> Hugo Alonso
            <br />
            <strong>Email de contacto:</strong> hugoalonso@icam.es
          </p>

          <p>
            Los datos personales facilitados a través de esta web se tratarán con la
  finalidad de atender consultas, responder comunicaciones profesionales y,
  en su caso, mantener el contacto derivado de la solicitud realizada por el usuario.
          </p>

          <p>
            Los datos podrán ser tratados por proveedores de servicios necesarios para el
  funcionamiento de la web y de las comunicaciones, con los que se han suscrito
  los correspondientes contratos de encargo de tratamiento.
          </p>

          <p>
            Los datos se conservarán durante el tiempo necesario para atender la solicitud
  y, en su caso, mientras puedan derivarse responsabilidades legales de la
  relación establecida.
          </p>

          <p>
            La base jurídica del tratamiento es el consentimiento del interesado al
            remitir voluntariamente sus datos mediante el formulario de contacto o
            por cualquier otro medio de comunicación habilitado en la web.
          </p>

          <p>
            Los datos no se cederán a terceros salvo obligación legal o cuando resulte necesario
para la prestación de servicios directamente relacionados con la finalidad del tratamiento.
          </p>

          <p>
            El usuario puede ejercer sus derechos de acceso, rectificación,
            supresión, oposición, limitación del tratamiento y demás derechos
            legalmente previstos mediante comunicación dirigida a la dirección de
            correo electrónico indicada en esta página.
          </p>

          <p>
            Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia
  Española de Protección de Datos si considera que el tratamiento de sus datos
  no se ajusta a la normativa vigente.
          </p>
        </div>

        <div className="mt-10">
          <Link
             href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-stone-300 px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-stone-100"
          >
            Volver a la web
          </Link>
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
            <Link href="/despacho" className="hover:text-slate-800">
              Despacho
            </Link>
            <Link href="/aviso-legal" className="hover:text-slate-800">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="hover:text-slate-800">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="hover:text-slate-800">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}