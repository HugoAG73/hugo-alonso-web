import Image from "next/image";
import Link from "next/link";

export default function RecursoContenciosoExtranjeriaPage() {
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
          Recurso contencioso en extranjería: cuándo acudir a la vía judicial y qué implica
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando una denegación en extranjería no se modifica mediante recurso administrativo o cuando se considera que la resolución no es conforme a derecho, puede ser necesario valorar acudir a la vía judicial a través del recurso contencioso-administrativo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este paso supone un cambio relevante: ya no se trata de una revisión interna por la Administración, sino de un procedimiento ante un órgano judicial en el que se analiza la legalidad de la resolución impugnada, lo que exige valorar previamente si el caso presenta base suficiente para sostener la vía judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Iniciar un recurso contencioso sin analizar correctamente la base jurídica del caso o sin valorar los plazos aplicables puede limitar las opciones disponibles o hacer que el procedimiento no tenga el resultado esperado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué implica acudir al recurso contencioso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El recurso contencioso no es una continuación del procedimiento administrativo, sino un proceso judicial con sus propias reglas, plazos y exigencias. Su finalidad es que un juez valore si la resolución administrativa se ajusta o no al ordenamiento jurídico.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esto implica que el análisis debe centrarse en los fundamentos jurídicos del caso, en la correcta aplicación de la normativa y en la valoración de la prueba aportada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser necesario acudir a la vía judicial
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los casos requieren acudir a la vía contenciosa. Sin embargo, puede ser necesario cuando la denegación se basa en una interpretación discutible de la normativa, cuando existen errores en la valoración del expediente o cuando el recurso administrativo no ha permitido modificar la resolución.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En estos supuestos, la vía judicial permite someter la decisión administrativa a control jurisdiccional,
          <Link href="/recurso-denegacion-extranjeria" className="underline">
            especialmente en relación con cuándo puede tener sentido recurrir una denegación en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Por qué no todos los casos son adecuados para un contencioso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Acudir a la vía judicial no siempre es la mejor opción. Se trata de un procedimiento más complejo, con mayor duración y que requiere una base jurídica sólida para que tenga sentido plantearlo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, antes de iniciar un contencioso, es fundamental analizar si el caso presenta fundamentos suficientes para sostener una impugnación ante los tribunales, ya que plantear una vía judicial sin base puede suponer un esfuerzo innecesario sin mejorar el resultado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si no se actúa dentro de plazo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El acceso a la vía judicial está sujeto a plazos. Si no se actúa dentro del tiempo establecido, la posibilidad de impugnar la resolución puede perderse, lo que hace que la situación se consolide y limite las opciones posteriores.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por ello, no se trata solo de valorar si acudir a la vía judicial, sino de hacerlo dentro del plazo y con una estrategia adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer antes de iniciar un recurso contencioso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de acudir a la vía judicial, lo recomendable es analizar la resolución, el expediente completo y las actuaciones previas para determinar si existe base suficiente para sostener el procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este análisis permite valorar no solo la viabilidad del contencioso, sino también si existen alternativas más adecuadas en función del caso concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el caso, el contencioso puede ser una vía adecuada o no
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si existen fundamentos jurídicos sólidos, el recurso contencioso puede ser una vía eficaz para impugnar la resolución y obtener un pronunciamiento judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el caso no presenta una base suficiente, acudir a la vía judicial puede suponer un esfuerzo innecesario sin mejorar el resultado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso, la decisión de acudir a la vía contenciosa debe basarse en un análisis previo del expediente y no únicamente en la existencia de la posibilidad de hacerlo, ya que iniciar un procedimiento judicial sin una estrategia adecuada puede no modificar el resultado y limitar las opciones disponibles.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Evaluar mi caso para contencioso
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