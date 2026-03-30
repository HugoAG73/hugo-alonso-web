import Image from "next/image";
import Link from "next/link";

export default function AvisoLegalPage() {
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
            <strong>Colegiación:</strong> Colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM), núm. 105.437
            <br />
            <strong>Domicilio profesional:</strong> Calle Guillermo de Osma núm. 5, bajo 1, C.P. 28045 Madrid
            <br />
            <strong>Email:</strong> hugoalonso@icam.es
            <br />
            <strong>Teléfono:</strong> 686 310 400
          </p>

          <p>
            Este sitio web tiene finalidad exclusivamente informativa y de contacto. La información contenida en él no constituye asesoramiento jurídico ni sustituye el análisis individualizado de cada caso concreto.
          </p>
        </div>

      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Hugo Alonso Abogado. Todos los derechos reservados.</div>
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