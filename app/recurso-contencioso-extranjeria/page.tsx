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
          Recurso contencioso-administrativo en extranjería: cuándo acudir a la vía judicial
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando una solicitud en materia de extranjería ha sido denegada y la vía administrativa no ha dado una solución, la única vía disponible puede ser acudir a la jurisdicción contencioso-administrativa para revisar la actuación de la Administración.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esta vía permite revisar la actuación de la Administración ante un órgano judicial, pero requiere un análisis previo detallado para determinar si existe base suficiente para sostener la impugnación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          El recurso contencioso como última vía
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El recurso contencioso-administrativo suele ser la última vía disponible cuando no ha sido posible resolver el caso por vía administrativa. En este momento, el análisis jurídico es especialmente importante, ya que la estrategia que se plantee condiciona el desarrollo del procedimiento judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          A diferencia de las fases anteriores, en esta vía no se trata solo de aportar documentación, sino de construir una argumentación jurídica sólida que permita cuestionar la actuación de la Administración.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El recurso contencioso-administrativo puede plantearse cuando se ha dictado una resolución desfavorable y se han agotado las vías administrativas o no resulta conveniente seguir insistiendo en ellas.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser necesario acudir a esta vía cuando la Administración no resuelve en plazo o cuando la resolución presenta defectos relevantes desde el punto de vista jurídico.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Plazo para interponer el recurso contencioso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El plazo para acudir a la vía contencioso-administrativa es limitado y depende del tipo de resolución y del procedimiento seguido previamente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar esta vía, es importante comprobar con precisión el plazo disponible. Puedes consultar también la página sobre{" "}
          <a href="/plazo-recurso-extranjeria" className="underline">
            plazo para recurrir en extranjería
          </a>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Diferencia entre recurso administrativo y contencioso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El recurso administrativo se presenta ante la propia Administración que ha dictado la resolución, mientras que el recurso contencioso se plantea ante un órgano judicial.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por ello, el nivel de exigencia en la argumentación jurídica, en la prueba y en la estrategia procesal es mayor en esta fase.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si quieres conocer cómo funciona la vía administrativa previa, puedes consultar la página sobre{" "}
          <a href="/recurso-denegacion-extranjeria" className="underline">
            recurso de denegación de extranjería
          </a>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Conviene acudir siempre al contencioso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos la vía contencioso-administrativa es la mejor opción. En algunos supuestos, puede resultar más adecuado replantear la solicitud o corregir los problemas detectados en el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Acudir a esta vía sin una base suficiente puede implicar costes y tiempos elevados, además de limitar otras posibles alternativas si no se plantea correctamente desde el inicio.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Importancia del análisis previo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de interponer un recurso contencioso, es fundamental analizar la resolución, el expediente administrativo y las posibles opciones disponibles.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite determinar si existen argumentos jurídicos sólidos y si la vía judicial puede ser adecuada en tu caso concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si te encuentras en una situación en la que la vía administrativa no ha resuelto tu caso, conviene valorar con precisión si procede acudir al recurso contencioso-administrativo.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Una revisión previa permite identificar si existe margen de actuación y definir la estrategia más adecuada en cada caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas valorar si tu caso puede plantearse ante la vía judicial, puedes solicitar una revisión inicial para analizar las opciones disponibles.
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