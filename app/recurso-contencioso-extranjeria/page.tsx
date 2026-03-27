import Image from "next/image";

export default function RecursoContenciosoExtranjeriaPage() {
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
          Recurso contencioso-administrativo en extranjería: cuándo procede y cómo actuar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando una solicitud en materia de extranjería ha sido denegada y las
          vías administrativas no han permitido modificar el resultado, puede
          ser necesario valorar la posibilidad de acudir a la vía judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar un procedimiento contencioso-administrativo, es
          importante analizar el expediente, la resolución dictada y las opciones
          reales del caso.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué es el recurso contencioso-administrativo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Se trata de un procedimiento judicial que permite revisar una
          resolución administrativa ante los tribunales.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En el ámbito de extranjería, puede plantearse cuando una denegación no
          ha sido corregida en vía administrativa o cuando no resulta posible
          continuar por esa vía.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser una opción adecuada
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los casos justifican acudir a la vía judicial. En algunos
          supuestos puede existir base suficiente para plantear un recurso
          contencioso; en otros, puede resultar más adecuado replantear la
          estrategia o valorar otras opciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La decisión depende del contenido de la resolución, de la prueba
          disponible y de la posibilidad real de modificar el resultado mediante
          una actuación judicial.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Plazos para acudir a la vía judicial
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El acceso a la jurisdicción contencioso-administrativa está sujeto a
          plazos concretos. Actuar fuera de plazo puede impedir la revisión
          judicial de la resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante revisar la resolución y el estado del expediente
          con rapidez para determinar si todavía es posible acudir a esta vía.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué se valora antes de iniciar un contencioso
        </h2>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>El contenido de la resolución administrativa</li>
          <li>Los motivos de la denegación</li>
          <li>La documentación aportada en el expediente</li>
          <li>La posibilidad de reforzar la prueba</li>
          <li>Las opciones reales de modificar el resultado</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis previo es fundamental para evitar iniciar un procedimiento
          judicial sin base suficiente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Alternativas que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de acudir a la vía judicial, puede ser conveniente revisar si
          existen otras opciones, como la presentación de una nueva solicitud o
          la posibilidad de acceder a otra vía de regularización.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si aún no has revisado los motivos de la denegación, puedes consultar
          la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>{" "}
          o, si estás valorando una impugnación administrativa, la página sobre{" "}
          <a href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </a>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has recibido una denegación y estás valorando acudir a la vía
          judicial, conviene revisar el expediente completo, la resolución y los
          plazos disponibles antes de iniciar cualquier actuación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si existe base para un recurso
          contencioso-administrativo o si resulta más adecuado plantear una
          alternativa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas valorar si tu caso puede plantearse ante los tribunales,
          puedes solicitar una revisión inicial para analizar las opciones
          disponibles.
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
            <a href="/despacho">Despacho</a>
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-privacidad">Política de privacidad</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}