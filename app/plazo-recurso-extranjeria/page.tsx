import Image from "next/image";

export default function PlazoRecursoExtranjeriaPage() {
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
          Plazo para recurrir en extranjería: qué debes revisar y cómo actuar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has recibido una resolución desfavorable en un procedimiento de
          extranjería, es importante actuar con rapidez, comprobar qué plazo existe para
          recurrir y qué opciones pueden plantearse en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los procedimientos tienen el mismo plazo ni todas las
          resoluciones deben afrontarse del mismo modo. Antes de actuar,
          conviene revisar la fecha de notificación, el tipo de resolución y la
          vía que puede resultar adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué es importante comprobar el plazo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El plazo para recurrir es determinante porque actuar fuera de tiempo
          puede impedir la revisión de la resolución por la vía correspondiente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante no retrasar el análisis del expediente ni asumir
          que todavía existe margen sin comprobar antes la situación concreta.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede influir en el plazo para recurrir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El plazo aplicable depende de varios factores, entre ellos el tipo de
          resolución dictada, la vía de impugnación que pueda plantearse y el
          momento en que la resolución haya sido notificada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para valorar correctamente el plazo, es necesario revisar la
          documentación recibida y comprobar cómo se ha producido la notificación
          y qué actuación se está valorando.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Consecuencias de actuar fuera de plazo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Dejar transcurrir el plazo sin actuar puede limitar de forma
          significativa las opciones disponibles y dificultar la revisión de la
          resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En este tipo de situaciones, es especialmente importante revisar con
          rapidez el expediente para evitar que una posible vía de impugnación
          quede cerrada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, actuar fuera de plazo puede impedir completamente la revisión de la resolución.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Problemas frecuentes al calcular el plazo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos errores no derivan solo de dejar pasar el
          tiempo, sino de interpretar incorrectamente cuándo empieza a contarse
          el plazo o qué recurso resulta aplicable.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>No revisar correctamente la fecha de notificación</li>
          <li>Confundir la vía administrativa con la judicial</li>
          <li>Asumir un plazo sin comprobar el tipo de resolución</li>
          <li>Esperar demasiado antes de analizar el expediente</li>
          <li>Intentar recurrir sin valorar antes la base del caso</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Detectar estas cuestiones a tiempo permite actuar con mayor seguridad y
          evitar errores que pueden comprometer el procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede valorarse antes de recurrir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de presentar un recurso, no solo debe revisarse el plazo. También
          es necesario comprobar si existen argumentos suficientes, si la prueba
          disponible permite sostener la impugnación y si esa vía puede resultar
          realmente útil en tu situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos recurrir será la opción más adecuada. En algunos
          supuestos, puede resultar más conveniente estudiar otra estrategia.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras páginas que pueden ayudarte
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas una visión general de la resolución negativa, puedes
          consultar la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ya estás valorando la impugnación, también puedes consultar la
          página sobre{" "}
          <a href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </a>{" "}
          y, si el asunto puede requerir acudir a la vía judicial, la de{" "}
          <a href="/recurso-contencioso-extranjeria" className="underline">
            recurso contencioso-administrativo en extranjería
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una resolución desfavorable y necesitas comprobar si
          todavía estás a tiempo para recurrir, conviene revisar la fecha de
          notificación, el contenido de la resolución y las opciones disponibles
          antes de actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar qué plazo puede resultar aplicable, si
          existe margen para recurrir y si conviene plantear esa vía o valorar
          otra alternativa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar el plazo para recurrir en tu expediente de
          extranjería, puedes solicitar una revisión inicial para valorar las
          opciones disponibles en tu caso.
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

      {/* FOOTER */}
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