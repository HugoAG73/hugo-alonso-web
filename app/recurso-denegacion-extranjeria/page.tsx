import Image from "next/image";
import Link from "next/link";

export default function RecursoDenegacionExtranjeriaPage() {
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
          Recurso de denegación en extranjería: cuándo merece la pena y qué implica
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Tras recibir una denegación en extranjería, una de las primeras dudas es si conviene presentar un recurso. Aunque en muchos casos existe esta posibilidad, no todas las resoluciones son igualmente recurribles ni todos los recursos tienen la misma viabilidad.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La decisión de recurrir no depende solo de la existencia de un plazo, sino del contenido de la resolución y de las posibilidades reales de que el recurso pueda modificar el resultado del expediente, ya que no todas las denegaciones ofrecen el mismo margen de revisión.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Presentar un recurso sin analizar correctamente el contenido de la resolución o sin valorar su viabilidad puede hacer que se pierdan opciones que podrían ser más adecuadas en el caso concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa recurrir una denegación
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Presentar un recurso implica solicitar a la Administración que revise la resolución dictada. Esto puede hacerse sobre la base de errores en la valoración del expediente, en la interpretación de la normativa o en la apreciación de los hechos.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Sin embargo, el recurso no consiste únicamente en discrepar con la denegación, sino en fundamentar jurídicamente por qué la resolución debería modificarse.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede tener sentido presentar un recurso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Un recurso puede presentar viabilidad cuando existen elementos que permiten cuestionar la resolución: documentación que no ha sido correctamente valorada, interpretación discutible de los requisitos o aspectos que no han sido tenidos en cuenta en el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, el recurso puede abrir la posibilidad de revisar la decisión adoptada y modificar el resultado del procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede no ser la mejor opción
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No siempre es recomendable recurrir. En algunos supuestos, la denegación se basa en la falta clara de requisitos o en circunstancias que difícilmente pueden modificarse mediante un recurso administrativo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos casos, puede ser más adecuado valorar otras opciones, como iniciar un nuevo procedimiento con una base más sólida o analizar si existe alguna alternativa diferente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué es importante analizar la viabilidad antes de recurrir
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Presentar un recurso sin un análisis previo puede no solo resultar ineficaz, sino también retrasar otras opciones que podrían ser más adecuadas en el caso concreto o incluso hacer que se pierdan oportunidades que convendría haber valorado a tiempo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de recurrir, es importante valorar si la resolución presenta margen de impugnación,{" "}
          <Link href="/denegacion-extranjeria" className="underline">
            especialmente en relación con cómo interpretar una denegación en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si el recurso no prospera
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el recurso es desestimado, puede ser necesario valorar otras vías, como acudir a la vía judicial en determinados supuestos,{" "}
          <Link href="/recurso-contencioso-extranjeria" className="underline">
            especialmente en relación con cuándo puede ser necesario acudir al recurso contencioso en extranjería
          </Link>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La estrategia a seguir dependerá del contenido de la resolución y de las circunstancias del expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer antes de presentar un recurso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de recurrir, lo recomendable es analizar en detalle la resolución, los motivos en los que se basa y la documentación del expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite determinar si el recurso tiene posibilidades reales o si conviene optar por una alternativa diferente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el caso, recurrir puede ser una oportunidad o un error
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen fundamentos sólidos para cuestionar la resolución, el recurso puede ser una vía adecuada para intentar modificar el resultado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si no hay margen real de impugnación, recurrir puede prolongar el procedimiento sin mejorar la situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, la decisión de recurrir debe basarse en un análisis previo del expediente y no únicamente en la existencia de la posibilidad formal de hacerlo, ya que elegir una vía inadecuada puede condicionar el resultado y limitar las opciones posteriores.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Revisar viabilidad de mi recurso
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