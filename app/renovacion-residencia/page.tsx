import Image from "next/image";
import Link from "next/link";

export default function RenovacionResidenciaPage() {
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
          Renovación de residencia en España: plazos, requisitos y posibles problemas
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          La renovación de residencia en España no siempre es un trámite automático. 
          En muchos casos surgen dudas sobre el plazo, los requisitos o la posibilidad real de renovar, 
          especialmente cuando ha habido cambios en la situación laboral o personal.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Actuar sin revisar estos aspectos puede llevar a presentar una solicitud fuera de plazo, 
          incompleta o con riesgo de denegación. Por eso, antes de iniciar la renovación, conviene 
          analizar con precisión en qué situación se encuentra el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Plazo para renovar la residencia
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La renovación de residencia debe plantearse dentro del plazo previsto
          por la normativa. Actuar con retraso o dejar pasar el tiempo sin
          revisar la situación puede complicar el procedimiento y generar
          problemas evitables.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante comprobar con antelación la fecha de vencimiento
          de la autorización y valorar cuanto antes si se cumplen los requisitos
          exigidos para la renovación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando el plazo se ha superado, la situación cambia y puede requerir una valoración distinta,
          ya que no todos los supuestos fuera de plazo se tratan del mismo modo en la práctica administrativa,
          <Link href="/renovacion-residencia-fuera-de-plazo" className="underline">
            especialmente cuando se plantea una renovación fuera de plazo
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Requisitos para la renovación de residencia
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Los requisitos pueden variar en función del tipo de autorización de
          residencia, de la situación personal y de la trayectoria laboral del
          interesado.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchos problemas en la renovación no surgen porque falte todo,
          sino porque uno o varios requisitos no se cumplen exactamente en la forma en que
          la Administración los valora.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, será necesario revisar la continuidad de la residencia
          en España, la situación de empleo o actividad, los periodos de alta y
          cotización, la documentación disponible y cualquier circunstancia que
          pueda influir en la renovación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Problemas habituales en la renovación de residencia
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchas incidencias en la renovación no derivan de un
          único problema, sino de pequeños errores o de una revisión insuficiente
          del expediente antes de presentar la solicitud.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Presentación fuera de plazo</li>
          <li>Documentación incompleta o mal preparada</li>
          <li>Periodos de cotización insuficientes o situación laboral irregular</li>
          <li>Cambios personales o profesionales no valorados correctamente</li>
          <li>Falta de revisión previa del tipo de renovación aplicable</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Estos problemas no siempre se identifican a simple vista. En muchos casos,
          la solicitud se presenta pensando que todo está correcto y es posteriormente
          cuando surgen requerimientos o resoluciones desfavorables.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Detectar estos problemas antes de presentar la solicitud permite anticipar incidencias,
          evitar requerimientos y reducir el riesgo de una resolución desfavorable.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué ocurre si no cumples todos los requisitos
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No en todos los casos la falta de un requisito implica automáticamente
          la imposibilidad de renovar. En determinadas situaciones, puede ser
          necesario valorar con detalle si existe margen para sostener la
          renovación o si conviene estudiar otra alternativa.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de iniciar el procedimiento, es importante analizar si la
          situación permite plantear la renovación con base suficiente o si
          resulta más adecuado adoptar otra estrategia para evitar una posible
          denegación.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Importancia del análisis previo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El análisis previo permite comprobar si la renovación puede plantearse
          correctamente, qué documentación conviene preparar y qué aspectos deben
          revisarse antes de presentar la solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la diferencia entre una renovación bien preparada y un
          procedimiento que genera problemas está en revisar con tiempo la
          situación concreta y la estrategia más adecuada.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras situaciones que pueden valorarse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si la renovación presenta dificultades, puede ser necesario valorar si existe otra vía
          de regularización o si conviene replantear la estrategia antes de iniciar actuaciones,
          <Link href="/regularizacion-espana" className="underline">
            como ocurre en determinados supuestos de regularización en España
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Cuando ya existe una resolución negativa, el análisis cambia y pasa a centrarse en la
          denegación y en las opciones de reacción,
          <Link href="/denegacion-extranjeria" className="underline">
            lo que implica entender qué supone una denegación de extranjería
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tienes que renovar tu residencia, conviene revisar la fecha de
          vencimiento, la documentación disponible y los requisitos aplicables
          antes de presentar la solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite valorar si la renovación puede plantearse con
          seguridad, si existe algún riesgo que deba corregirse previamente o si
          resulta más adecuado estudiar otra estrategia.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de presentar la solicitud, una revisión jurídica permite comprobar si la renovación puede plantearse con base suficiente o si existe algún aspecto que convenga corregir previamente.
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