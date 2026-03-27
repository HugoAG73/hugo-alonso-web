import Image from "next/image";

export default function SilencioAdministrativoExtranjeriaPage() {
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
          Silencio administrativo en extranjería: qué significa y cómo actuar
        </h1>

        <p className="mt-8 text-base leading-7 text-slate-700">
          Si ha transcurrido el plazo sin recibir resolución en tu expediente de
          extranjería, es importante revisar qué efecto puede tener el silencio
          administrativo y qué actuaciones conviene valorar en tu caso.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          No todos los procedimientos producen el mismo efecto ni en todos los
          supuestos conviene actuar del mismo modo. Antes de tomar decisiones,
          resulta necesario analizar el tipo de solicitud presentada, el plazo
          aplicable y la situación concreta del expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué es el silencio administrativo en extranjería
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El silencio administrativo se produce cuando la Administración no dicta
          resolución expresa dentro del plazo previsto para un procedimiento.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En materia de extranjería, ese silencio no siempre tiene la misma
          consecuencia. Su efecto depende del tipo de autorización solicitada, de
          la normativa aplicable y del momento en que se encuentre el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué significa en tu caso
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          El hecho de que haya pasado el plazo sin respuesta no significa por sí
          solo que el procedimiento esté resuelto favorablemente ni que deba
          asumirse automáticamente una denegación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Para saber qué efecto puede tener el silencio administrativo, es
          necesario revisar qué solicitud se presentó, cuándo se presentó, qué
          plazo resulta aplicable y qué documentación obra en el expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          No todos los procedimientos producen el mismo efecto
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En algunos procedimientos, el transcurso del plazo puede producir una determinada consecuencia jurídica; en otros, el efecto
          será distinto y puede requerir actuaciones adicionales.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Por eso es importante no actuar por intuición ni basarse únicamente en
          información genérica. Lo determinante es comprobar el procedimiento
          concreto y el régimen aplicable a ese expediente.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Problemas frecuentes cuando no llega resolución
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En la práctica, muchas incidencias surgen no solo por la falta de
          resolución, sino por errores al interpretar sus efectos o por actuar
          sin una revisión previa suficiente.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Confundir el plazo aplicable al procedimiento</li>
          <li>Asumir un efecto favorable o desfavorable sin base suficiente</li>
          <li>No revisar correctamente la fecha de presentación</li>
          <li>Ignorar requerimientos o incidencias previas del expediente</li>
          <li>Adoptar actuaciones que no resultan adecuadas en ese momento</li>
        </ul>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Detectar estas cuestiones antes de actuar permite evitar errores que
          pueden complicar el expediente o dificultar actuaciones posteriores.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Qué puede hacerse tras el silencio administrativo
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La actuación adecuada dependerá del procedimiento y del efecto que
          pueda producir el silencio en ese caso concreto.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En determinados supuestos, puede ser necesario acreditar la situación
          del expediente, revisar si procede formular nuevas actuaciones o
          valorar si conviene adoptar otra estrategia para proteger la posición
          jurídica del interesado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Importancia de la revisión del expediente
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          La revisión del expediente permite comprobar el tipo de procedimiento,
          el plazo aplicable, la documentación presentada y la situación real del
          caso antes de decidir cómo actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En muchos supuestos, la diferencia entre una actuación jurídicamente
          adecuada y una reacción precipitada está en analizar con precisión el
          expediente antes de iniciar cualquier paso adicional.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Otras situaciones relacionadas
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si el problema deriva de una resolución negativa o de una denegación
          expresa, también puede ser útil consultar la página sobre{" "}
          <a href="/denegacion-extranjeria" className="underline">
            denegación de extranjería
          </a>{" "}
          y, si lo que necesitas es valorar una posible impugnación, la página
          sobre{" "}
          <a
            href="/recurso-denegacion-extranjeria"
            className="underline"
          >
            recurso de denegación de extranjería
          </a>
          .
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          En otros casos, puede resultar útil revisar si existe alguna vía de{" "}
          <a href="/regularizacion-espana" className="underline">
            regularización en España
          </a>{" "}
          o si conviene valorar una autorización concreta, como el{" "}
          <a href="/arraigo-social" className="underline">
            arraigo social o arraigo sociolaboral
          </a>
          , en función de la situación del interesado.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          ¿Qué hacer en tu caso?
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si ha transcurrido el plazo sin resolución en tu expediente de
          extranjería, conviene revisar el procedimiento concreto, la fecha de
          presentación y las actuaciones practicadas antes de decidir cómo
          actuar.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Ese análisis permite valorar si el silencio administrativo produce
          algún efecto relevante, si resulta necesario adoptar nuevas actuaciones
          o si conviene replantear la estrategia para proteger tu situación.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Si necesitas revisar qué puede implicar el silencio administrativo en
          tu expediente de extranjería, puedes solicitar una revisión inicial
          para valorar las opciones disponibles en tu caso.
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