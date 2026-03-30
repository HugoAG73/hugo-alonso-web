import Image from "next/image";
import Link from "next/link";

export default function ArraigoSocialPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[70px] w-auto md:h-[85px]"
              priority
            />
          </Link>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-3xl px-6 py-20">

        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Arraigo social en España: cómo valorar si tu caso es viable
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          El arraigo social es una de las principales vías para regularizar la situación en España, pero no siempre resulta aplicable en todos los casos ni basta con cumplir formalmente determinados requisitos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos supuestos, las dudas no están en saber qué se exige, sino en determinar si la situación concreta puede encajar realmente en esta vía y cómo plantear el expediente para evitar problemas durante la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este tipo de procedimientos, iniciar la solicitud sin analizar previamente el caso puede dar lugar a incidencias o a una denegación que complique futuras opciones de regularización.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué es el arraigo social?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Se trata de una autorización de residencia por circunstancias excepcionales que permite regularizar la situación administrativa de personas extranjeras que llevan tiempo en España y cumplen determinados requisitos, aunque su viabilidad depende de cómo se acrediten estos elementos y de las circunstancias concretas de cada caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Cuándo puede encajar el arraigo social?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esta vía puede resultar adecuada cuando existe una permanencia continuada en España, una posible relación laboral y una base documental suficiente para acreditar la situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No obstante, no todos los casos cumplen los requisitos en el mismo grado, por lo que es necesario revisar cada situación antes de iniciar el procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Problemas frecuentes en el arraigo social
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos expedientes presentan dificultades que pueden afectar al resultado del procedimiento.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Contratos de trabajo que no cumplen los requisitos exigidos</li>
          <li>Pruebas insuficientes de permanencia en España</li>
          <li>Documentación incompleta o mal planteada</li>
          <li>Dudas sobre antecedentes o situaciones previas</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Aunque estos requisitos pueden parecer claros, en la práctica la dificultad suele estar en cómo se acreditan y en cómo se valoran en conjunto dentro del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Estos aspectos deben revisarse previamente antes de iniciar la solicitud para evitar incidencias o denegaciones.
        </p>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cada caso debe valorarse de forma individual, ya que pequeños detalles pueden determinar si el procedimiento puede prosperar.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Requisitos principales del arraigo social
        </h2>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Los requisitos pueden variar en función del caso concreto, por lo que es necesario revisar cada situación antes de iniciar el procedimiento. No obstante, de forma general, suele ser necesario acreditar:
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Permanencia continuada en España durante los dos años anteriores inmediatos a la solicitud</li>
          <li>Disponer de un precontrato u oferta de contrato de trabajo</li>
          <li>Ausencia de antecedentes penales relevantes</li>
          <li>Disponer de pruebas de estancia en España durante el plazo de tiempo exigido para este tipo de residencia</li>
          <li>Integración o vinculación con el entorno social</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La forma en que se acreditan estos requisitos y cómo se presentan dentro del expediente puede influir directamente en el resultado del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo el arraigo social puede no ser la mejor opción
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los casos encajan en esta vía. En determinadas situaciones, puede ser más adecuado valorar otras opciones de regularización o posponer la solicitud hasta contar con una base suficiente, ya que iniciar un expediente sin encaje claro puede dar lugar a una denegación que complique actuaciones posteriores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Iniciar un procedimiento sin cumplir adecuadamente los requisitos puede generar incidencias o dificultar futuras solicitudes.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya has recibido una resolución desfavorable en extranjería, también puedes consultar información sobre la{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </Link>, ya que en algunos casos conviene valorar si resulta más adecuado recurrir o replantear la estrategia.
          </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la resolución desfavorable afecta específicamente a una solicitud de arraigo, puedes consultar también la página sobre{" "}
          <Link href="/denegacion-arraigo-social" className="underline">
            denegación de arraigo social
          </Link>, donde se explican los motivos más frecuentes y qué puede valorarse en ese tipo de situaciones.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otros tipos de arraigo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puedes consultar información sobre la{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>, ya que en algunos casos puede ser más adecuado analizar esa vía antes de iniciar un procedimiento de arraigo.
	</p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Además del arraigo social, existen otras modalidades de arraigo en la normativa de extranjería, como el arraigo laboral o el arraigo familiar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los supuestos encajan en el mismo tipo, por lo que es fundamental determinar cuál es la opción más adecuada antes de iniciar cualquier solicitud.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Es viable tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos es posible acceder al arraigo social. En muchos casos, pequeños detalles pueden determinar si el procedimiento puede iniciarse con garantías.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar el procedimiento, es recomendable revisar la documentación disponible para evitar errores que puedan dar lugar a requerimientos o denegaciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El análisis previo permite identificar si existe una vía viable de regularización y definir la estrategia adecuada en cada caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tienes dudas sobre si cumples los requisitos o sobre cómo plantear el procedimiento, puedes solicitar una revisión inicial de tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando existen dudas sobre si un caso puede encajar en el arraigo social, analizar la situación antes de presentar la solicitud permite evitar errores que pueden afectar al resultado del procedimiento.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Solicitar revisión de mi caso
          </Link>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Consultar por WhatsApp
          </a>

        </div>

      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
  	   Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
 	 <br />
  	   © 2026 Hugo Alonso Abogado. Todos los derechos reservados.
	</div>
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