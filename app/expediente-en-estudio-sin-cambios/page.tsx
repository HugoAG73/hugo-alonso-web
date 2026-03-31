import Image from "next/image";
import Link from "next/link";

export default function ExpedienteEnEstudioSinCambiosPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="flex justify-center py-4">
          <Link href="/">
            <Image src="/logo-header-cropped.png" alt="Hugo Alonso Abogado" width={1180} height={240} className="h-[70px] w-auto md:h-[85px]" priority />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Expediente en estudio sin cambios: qué significa
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Cuando un expediente aparece en estudio sin cambios, es habitual pensar que el procedimiento está detenido. Sin embargo, esta situación no siempre implica un problema real, sino que puede formar parte del curso normal de la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para interpretarlo correctamente, es necesario analizar tanto la fase en la que se encuentra el expediente como el tiempo transcurrido desde la solicitud.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Este estado suele corresponder a la fase en la que el expediente se encuentra{" "}
          <Link href="/expediente-en-estudio-extranjeria" className="underline">
            en estudio
          </Link>, en la que la Administración analiza la documentación presentada.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Además, puede ser útil valorar si el tiempo entra dentro de lo habitual,{" "}
          <Link href="/cuanto-tarda-extranjeria" className="underline">
            en relación con cuánto tarda extranjería en resolver
          </Link>.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          También puede ser útil analizar cuánto suele durar esta fase del procedimiento, especialmente cuando el expediente se mantiene en estudio durante un periodo prolongado,{" "}
          <Link href="/expediente-en-estudio-cuanto-tarda" className="underline">
            en relación con cuánto tarda un expediente en estudio
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede ser normal
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos casos, la ausencia de cambios visibles no implica una paralización, sino que el expediente sigue su curso interno sin actualizaciones en el sistema.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Cuándo puede indicar un problema
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido es elevado o no se aprecia ninguna evolución, puede ser necesario analizar si existe alguna incidencia o si el expediente podría encontrarse{" "}
          <Link href="/expediente-paralizado-extranjeria" className="underline">
            paralizado
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué hacer en estos casos
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para valorar correctamente la situación, puede ser útil revisar{" "}
          <Link href="/que-hacer-si-expediente-extranjeria-no-avanza" className="underline">
            qué hacer si un expediente no avanza
          </Link>.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Según el tiempo transcurrido, puede ser necesario actuar de forma distinta
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los expedientes en estudio sin cambios requieren la misma actuación. La decisión depende principalmente del tiempo transcurrido y de si existen incidencias en la tramitación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el expediente se encuentra dentro de un plazo razonable, lo habitual es continuar el seguimiento sin necesidad de intervenir de inmediato.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el tiempo transcurrido empieza a ser relevante o no se aprecia evolución, puede ser necesario analizar con más detalle la situación para determinar si conviene actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para ello, puede ser útil revisar{" "}
          <Link href="/que-hacer-si-expediente-extranjeria-no-avanza" className="underline">
            qué hacer si un expediente de extranjería no avanza
          </Link>{" "}
          y cómo interpretar correctamente cada caso.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/#contacto" className="rounded-2xl bg-slate-950 px-6 py-4 text-white text-sm font-medium">
            Solicitar revisión de mi caso
          </Link>
          <a href="https://wa.me/34686310400" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-green-600 px-6 py-4 text-white text-sm font-medium">
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