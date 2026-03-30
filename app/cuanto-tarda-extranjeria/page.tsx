import Image from "next/image";
import Link from "next/link";

export default function CuantoTardaExtranjeriaPage() {
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
          Cuánto tarda extranjería en resolver: qué debes revisar y qué hacer si no hay respuesta
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si has presentado una solicitud de extranjería y todavía no has
          recibido respuesta, es normal que te preguntes cuánto puede tardar la
          Administración en resolver y qué significa la falta de resolución en
          tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los procedimientos tienen el mismo plazo ni todas las demoras producen las mismas consecuencias. En algunos casos, una falta de respuesta puede no tener efectos inmediatos, pero en otros puede condicionar las opciones disponibles si no se revisa a tiempo la situación del expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          El plazo de resolución no es igual en todos los procedimientos
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En materia de extranjería, el tiempo de resolución puede variar en
          función del tipo de autorización solicitada, de la carga de trabajo de
          la Administración y de las incidencias que puedan haberse producido en
          el expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso no conviene basarse únicamente en referencias generales o en
          experiencias de otras personas. Lo importante es comprobar qué plazo
          puede resultar aplicable al procedimiento concreto.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué conviene revisar si el expediente tarda
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Antes de sacar conclusiones, conviene revisar varios aspectos que
          pueden influir en el tiempo de tramitación o en la situación del
          expediente.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>La fecha exacta de presentación de la solicitud</li>
          <li>El tipo de procedimiento iniciado</li>
          <li>La existencia de requerimientos o incidencias previas</li>
          <li>La documentación aportada en el expediente</li>
          <li>El estado administrativo real de la solicitud</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Revisar estos elementos permite saber si se trata de una demora normal
          del procedimiento o si conviene valorar alguna actuación adicional.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué pasa si extranjería no responde
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La falta de resolución dentro del plazo no significa siempre lo mismo.
          En algunos procedimientos puede tener una determinada consecuencia
          jurídica; en otros, la situación debe analizarse con más detalle antes
          de decidir cómo actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar qué puede implicar la falta de respuesta en tu
          caso, puedes consultar también la página sobre{" "}
          <Link href="/silencio-administrativo-extranjeria" className="underline">
            silencio administrativo en extranjería
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo una demora puede convertirse en un problema
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En ocasiones, el problema no es solo el tiempo transcurrido, sino no
          saber qué efecto produce la falta de resolución o qué margen existe
          para actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin revisar el expediente puede hacer que se pierda tiempo
          útil, que no se detecten incidencias relevantes o que se retrase una
          actuación que convendría valorar antes.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Demoras frecuentes en solicitudes de regularización o arraigo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Muchas consultas se producen en procedimientos de regularización,
          arraigo o residencia, donde la falta de respuesta genera especial
          incertidumbre por su impacto en la situación administrativa de la
          persona interesada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si tu expediente está relacionado con una vía de arraigo o con otra
          fórmula de regularización, también puedes consultar las páginas sobre{" "}
          <Link href="/arraigo-social" className="underline">
            arraigo social
          </Link>{" "}
          y{" "}
          <Link href="/regularizacion-espana" className="underline">
            regularización en España
          </Link>
          .
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer si el expediente sigue sin resolverse
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ha transcurrido tiempo sin respuesta, lo más prudente es revisar el
          expediente completo antes de decidir si conviene seguir esperando o si
          existe alguna actuación que deba valorarse.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite comprobar si el plazo aplicable ha transcurrido,
          si la falta de resolución produce algún efecto relevante y si la
          estrategia debe mantenerse o replantearse.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos casos, tras un periodo prolongado sin resolución, puede producirse una respuesta desfavorable o ser necesario reaccionar frente a una denegación. Puedes consultar también la página sobre{" "}
          <Link href="/denegacion-extranjeria" className="underline">
    denegación de extranjería
          </Link>{" "}
          para entender qué opciones pueden valorarse en ese tipo de situaciones.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esperar sin revisar la situación puede hacer que se pierda margen de actuación o que se retrase una decisión que podría resultar relevante en el procedimiento.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si has presentado una solicitud de extranjería y no sabes si el tiempo
          transcurrido entra dentro de lo normal o si conviene actuar, es
          importante revisar el procedimiento concreto y la situación real del
          expediente.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Esa revisión permite valorar si la demora es compatible con la
          tramitación del procedimiento o si conviene estudiar otras opciones en
          función del estado del caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar cuánto puede tardar extranjería en resolver tu
          expediente y qué puede hacerse en tu situación, puedes solicitar una
          revisión inicial para valorar las opciones disponibles en tu caso.
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

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
            <br />
            © 2026 Hugo Alonso Abogado. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/despacho">Despacho</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
            <Link href="/politica-privacidad">Política de privacidad</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}