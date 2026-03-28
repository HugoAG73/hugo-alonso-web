import Image from "next/image";

export default function RecursoDenegacionExtranjeriaPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <a href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[70px] w-auto md:h-[85px]"
              priority
            />
          </a>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Recurso de denegación de extranjería: plazos, opciones y cómo actuar tras una resolución desfavorable
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has recibido una denegación en un procedimiento de extranjería, es
          importante revisar la resolución, comprobar el plazo disponible y
          valorar si existen fundamentos suficientes para recurrir o si resulta más
          adecuado plantear una nueva vía.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos resulta conveniente recurrir ni todas las denegaciones deben
          afrontarse del mismo modo. Antes de actuar, conviene analizar la causa
          concreta de la resolución y la estrategia más adecuada en tu caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Plazo para recurrir una denegación de extranjería
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Las resoluciones de extranjería establecen plazos concretos para poder
          reaccionar frente a una denegación. Actuar fuera de plazo puede impedir
          cualquier revisión posterior de la resolución por la vía que
          correspondiera.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante revisar cuanto antes la resolución y determinar
          qué margen temporal existe para decidir si conviene recurrir o adoptar
          otra estrategia.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar cualquier recurso, conviene comprobar con precisión el plazo disponible. Puedes consultar la página sobre{" "}
          <a href="/plazo-recurso-extranjeria" className="underline">
            plazo para recurrir en extranjería
          </a>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Conviene recurrir la denegación?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos recurrir es la mejor opción. En algunas
          situaciones puede existir base suficiente para impugnar la resolución;
          en otras, puede resultar más adecuado corregir deficiencias y estudiar
          una nueva solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La decisión depende del motivo de la denegación, de la documentación
          disponible, del tipo de procedimiento afectado y de la posibilidad real
          de modificar el resultado mediante recurso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué tipo de recurso puede interponerse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En función del caso, puede ser posible interponer un recurso
          administrativo o valorar la vía judicial correspondiente. La elección
          no debe hacerse de forma automática, sino en función del contenido de
          la resolución y de las opciones reales del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de decidir qué recurso plantear, conviene revisar si existen
          argumentos sólidos, si la prueba disponible permite sostener la
          impugnación y si esa actuación resulta realmente útil en tu situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la vía administrativa no resulta suficiente o ya se ha agotado, puede ser necesario acudir a la jurisdicción contencioso-administrativa. Puedes consultar la página sobre{" "}
          <a href="/recurso-contencioso-extranjeria" className="underline">
            recurso contencioso-administrativo en extranjería
          </a>, donde se explica cuándo procede esta vía y qué aspectos deben valorarse antes de iniciarla.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Errores frecuentes al recurrir una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos recursos fracasan no solo por el motivo inicial
          de la denegación, sino por errores en la forma de reaccionar frente a
          la resolución.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Recurrir sin analizar adecuadamente la causa de la denegación</li>
          <li>No atacar el motivo concreto que figura en la resolución</li>
          <li>Presentar documentación insuficiente o irrelevante</li>
          <li>Actuar fuera de plazo</li>
          <li>Insistir en una vía que no resulta adecuada en ese momento</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Evitar estos errores es fundamental para no perder tiempo, no debilitar
          la posición jurídica del expediente y no cerrar opciones futuras.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Importancia del análisis previo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El análisis previo permite entender por qué se ha producido la
          denegación, qué margen existe para impugnarla y si conviene recurrir o
          preparar una actuación distinta.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la diferencia entre un recurso útil y una actuación
          que solo prolonga el problema está en revisar con precisión la
          resolución, la documentación aportada y la estrategia disponible.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras vías que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En determinados supuestos, tras una denegación puede resultar más
          conveniente estudiar otras opciones de regularización antes que insistir
          en el mismo procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si todavía no tienes claro por qué se ha producido la resolución
          desfavorable, también puedes consultar la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>
          . Además, en algunos casos puede ser útil valorar vías actualmente en
          vigor, como el{" "}
          <a href="/arraigo-social" className="underline">
            arraigo social o arraigo sociolaboral
          </a>{" "}
          o la{" "}
          <a href="/regularizacion-espana" className="underline">
            regularización en España
          </a>
          , si la situación aconseja replantear la estrategia.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una denegación, conviene revisar la resolución, el
          plazo disponible, la documentación aportada y las opciones reales antes
          de decidir cómo actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si existe margen para recurrir, si
          resulta más adecuado presentar una nueva solicitud o si conviene adoptar
          otra estrategia para evitar nuevos errores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas valorar si procede interponer un recurso frente a una
          denegación de extranjería, puedes solicitar una revisión inicial para
          valorar las opciones disponibles en tu caso.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Solicitar revisión de mi caso
          </a>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Consultar por WhatsApp
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-stone-300 px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-stone-100"
          >
            Volver a la web
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