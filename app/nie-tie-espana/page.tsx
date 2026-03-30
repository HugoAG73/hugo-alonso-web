import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NIE y TIE en España: diferencias, cuándo se necesita y qué hacer",
  description:
    "Explicación clara sobre la diferencia entre NIE y TIE en España, cuándo corresponde cada documento, qué implica su caducidad y cuándo conviene revisar jurídicamente el caso.",
  alternates: {
    canonical: "/nie-tie-espana",
  },
  openGraph: {
    title: "NIE y TIE en España: diferencias, cuándo se necesita y qué hacer",
    description:
      "Guía jurídica clara sobre NIE y TIE en España: qué significa cada documento, cuándo procede y qué hacer si hay dudas o incidencias.",
    url: "/nie-tie-espana",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "¿El NIE y la TIE son lo mismo?",
    answer:
      "No. El NIE es un número de identificación de extranjero. La TIE es la tarjeta física que documenta la autorización o el derecho para permanecer en España en determinados supuestos.",
  },
  {
    question: "¿Tener NIE significa tener residencia legal en España?",
    answer:
      "No necesariamente. El NIE por sí solo no equivale a una autorización de residencia. Hay casos en los que existe NIE sin residencia, por lo que conviene revisar la situación concreta.",
  },
  {
    question: "¿Quién tiene que solicitar la TIE?",
    answer:
      "Con carácter general, quien haya obtenido un visado o una autorización para permanecer en España por un período superior a seis meses debe solicitar la TIE personalmente en el plazo legal aplicable.",
  },
  {
    question: "¿Si mi TIE está caducada he perdido automáticamente la residencia?",
    answer:
      "No siempre. La caducidad de la tarjeta y la situación de la autorización no son exactamente lo mismo. Hay que revisar fechas, tipo de autorización y actuaciones realizadas.",
  },
  {
    question: "¿Los ciudadanos de la Unión Europea tienen TIE?",
    answer:
      "No en el régimen general. Habitualmente obtienen certificado de registro. La TIE puede entrar en juego, entre otros supuestos, para familiares extracomunitarios de ciudadano de la Unión.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NieTieEspanaPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-600">
            Extranjería en España
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Diferencia entre NIE y TIE en España y cuándo necesitas cada uno
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Muchas personas usan “NIE” y “TIE” como si fueran lo mismo. No lo
            son. Y esa confusión suele generar errores prácticos: pensar que se
            tiene residencia cuando solo existe un número identificativo,
            retrasar una solicitud documental o no detectar a tiempo que el
            problema real está en la autorización.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Si tu situación depende de una concesión, una renovación o una incidencia
            en tu expediente, confundir NIE, TIE y autorización puede hacer que centres
            el problema en el documento equivocado: a veces no falta una tarjeta, sino
            comprobar una resolución, actuar dentro de plazo o revisar una denegación.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Analizar a tiempo esta diferencia puede evitar actuaciones innecesarias o detectar si el problema real no está en el documento, sino en el expediente.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-semibold text-slate-950">NIE</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Es el número de identidad de extranjero. Sirve para identificar
                a la persona extranjera en sus relaciones con la Administración.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-semibold text-slate-950">TIE</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Es la tarjeta física que documenta la permanencia legal en
                España cuando existe autorización o derecho para permanecer en
                determinados supuestos.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-base font-semibold text-slate-950">
                Qué revisar
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                No basta con identificar el documento. Conviene revisar qué autorización existe,
                si hay resolución favorable, si la tarjeta está caducada o si el problema real
                está en el expediente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            El problema habitual
          </h2>
          <p className="mt-6 leading-8 text-slate-700">
            En consulta es frecuente encontrar situaciones como estas: personas
            que creen que tener NIE equivale a tener residencia; personas con
            resolución favorable que no saben si lo siguiente es pedir la TIE;
            titulares de una tarjeta caducada que no saben si han perdido su
            situación legal; o ciudadanos de la Unión Europea que buscan una TIE
            cuando su régimen documental es distinto.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            El error de base suele ser el mismo: centrar la atención en el
            documento y no en el expediente que lo justifica.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Qué significa cada cosa
          </h2>

          <div className="mt-8 space-y-8">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                Qué es el NIE
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                El NIE es un número personal, único y exclusivo de identificación
                para extranjeros. Puede asignarse en procedimientos de
                extranjería y también en otros supuestos en los que la persona
                se relaciona con España por intereses económicos, profesionales
                o sociales.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Por eso, tener NIE no permite concluir por sí solo que exista
                una autorización de residencia en vigor. El número identifica,
                pero no sustituye la base jurídica de la estancia o residencia.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                Qué es la TIE
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                La TIE es la tarjeta de identidad de extranjero. Acredita la
                permanencia legal en España cuando se ha concedido una
                autorización o se ha reconocido un derecho para permanecer por
                un período superior a seis meses, en los supuestos legalmente
                previstos.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                La tarjeta no crea por sí sola el derecho. Lo documenta. Por eso
                una incidencia en la tarjeta no siempre se resuelve del mismo
                modo que una incidencia en la autorización.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                La diferencia que más importa
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                El NIE responde a una necesidad de identificación. La TIE
                responde a una situación administrativa que permite permanecer en
                España. Confundir ambas cosas lleva a tomar decisiones tarde o en
                la dirección equivocada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Cuándo es relevante de verdad
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  1. Cuando ya tienes una resolución favorable
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  En muchos casos, la pregunta correcta no es si “ya tienes NIE”,
                  sino si ya existe una resolución que te permite permanecer en
                  España y si debes pasar al trámite documental de la tarjeta.
                </p>
                <p className="mt-3 leading-8 text-slate-700">
                  Si todavía estás esperando la resolución, antes de actuar conviene comprobar en qué punto se encuentra el procedimiento,
                  <Link
                    href="/estado-expediente-extranjeria"
                    className="font-medium text-slate-950 underline underline-offset-4"
                  >
                    cómo interpretar el estado de un expediente de extranjería
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  2. Cuando tu tarjeta está caducada
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  Una TIE caducada no siempre significa exactamente lo mismo en
                  todos los casos. A veces el problema es puramente documental;
                  otras veces la cuestión de fondo está en la renovación de la
                  autorización o en la falta de actuación dentro de plazo.
                </p>
                <p className="mt-3 leading-8 text-slate-700">
                  Si la autorización sigue siendo el eje del caso, tratar la tarjeta como un problema aislado puede llevar a un enfoque incorrecto,
                  <Link
                    href="/renovacion-residencia"
                    className="font-medium text-slate-950 underline underline-offset-4"
                  >
                    por lo que conviene revisar si realmente corresponde una renovación de residencia
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  3. Cuando has dejado pasar tiempo
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  Si la actuación llega tarde, la valoración jurídica cambia. No
                  todos los retrasos tienen la misma consecuencia y no todas las
                  oficinas reaccionan igual en la práctica administrativa.
                </p>
                <p className="mt-3 leading-8 text-slate-700">
                  En esos supuestos importa revisar fechas, notificaciones y tipo de autorización antes de decidir el siguiente paso,
                  <Link
                    href="/renovacion-residencia-fuera-de-plazo"
                    className="font-medium text-slate-950 underline underline-offset-4"
                  >
                    especialmente cuando puede tratarse de una renovación fuera de plazo que requiere un análisis más cuidadoso
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  4. Cuando hubo una denegación
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  Si la autorización ha sido denegada, el problema ya no es si
                  corresponde NIE o TIE. El foco pasa a ser la resolución
                  denegatoria, su motivación y el margen real de reacción.
                </p>
                <p className="mt-3 leading-8 text-slate-700">
                  En estos supuestos, la cuestión deja de ser documental y pasa a centrarse en la resolución denegatoria y en su margen de reacción,
                  <Link
                    href="/denegacion-extranjeria"
                    className="font-medium text-slate-950 underline underline-offset-4"
                  >
                    por lo que conviene entender qué implica una denegación de extranjería
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Casos en los que más se confunde
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Tengo NIE, pero no sé si tengo residencia
              </h3>
              <p className="mt-3 leading-8 text-slate-700">
                Es una duda muy habitual. El NIE puede existir sin que ello
                equivalga a una autorización de residencia en vigor. Para saber
                cuál es tu situación real hay que revisar el procedimiento del
                que nace ese número y la documentación que lo acompaña.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                En este supuesto, el problema no es el número en sí, sino determinar si existe o no una autorización que respalde tu situación en España.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Me han concedido algo, pero no sé si ahora toca TIE
              </h3>
              <p className="mt-3 leading-8 text-slate-700">
                Depende del tipo de autorización, del régimen aplicable y del
                tiempo de permanencia autorizado. No todas las concesiones se
                documentan igual ni todos los supuestos pasan por la misma vía.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                Aquí la clave no está en el documento, sino en saber si la resolución exige un paso documental concreto o una actuación adicional.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Soy ciudadano de la Unión Europea y me piden “la TIE”
              </h3>
              <p className="mt-3 leading-8 text-slate-700">
                En muchos casos, esa expresión se usa de forma imprecisa. Para
                ciudadanos UE/EEE el esquema documental ordinario no es el mismo
                que para nacionales de terceros Estados. Y los familiares
                extracomunitarios de ciudadano de la Unión siguen una lógica
                distinta.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                En estos casos es esencial distinguir correctamente el régimen aplicable, ya que no todos los supuestos se documentan de la misma forma.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Mi TIE ha caducado o la he perdido
              </h3>
              <p className="mt-3 leading-8 text-slate-700">
                Antes de actuar conviene separar dos planos: la vigencia de la
                tarjeta y la vigencia de la autorización que la sustenta. A
                veces el problema es de duplicado; otras, de renovación; y en
                otras situaciones el riesgo es haber dejado pasar una actuación
                relevante.
              </p>

              <p className="mt-3 leading-8 text-slate-700">
                La diferencia entre un problema de tarjeta y un problema de autorización puede cambiar completamente la forma de actuar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Qué hacer si no tienes claro si tu problema es NIE, TIE o residencia
            </h2>
            <ol className="mt-8 space-y-4 text-slate-700">
              <li className="rounded-2xl border border-slate-200 bg-white p-5 leading-8">
                <span className="font-semibold text-slate-950">
                  Primero:
                </span>{" "}
                identifica qué resolución, autorización o derecho está detrás de
                tu documentación.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 leading-8">
                <span className="font-semibold text-slate-950">
                  Segundo:
                </span>{" "}
                comprueba fechas clave: entrada en España, notificación,
                concesión, caducidad de tarjeta y, en su caso, plazos de
                renovación.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 leading-8">
                <span className="font-semibold text-slate-950">
                  Tercero:
                </span>{" "}
                no des por hecho que una incidencia documental se resuelve solo
                con cita o con nueva tarjeta. A veces la cuestión de fondo está
                en el expediente.
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white p-5 leading-8">
                <span className="font-semibold text-slate-950">
                  Cuarto:
                </span>{" "}
                si existen dudas reales sobre vigencia, plazos o efectos de una
                denegación, conviene revisar el caso con la documentación
                completa.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Preguntas frecuentes
          </h2>

          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold text-slate-950">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-8 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Revisión jurídica del caso
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            Si no tienes claro si tu situación exige solicitar una TIE, iniciar una renovación,
            reaccionar frente a una denegación o simplemente comprobar la validez de tu situación,
            una revisión jurídica del expediente permite identificar el punto exacto en el que te encuentras
            y qué actuación corresponde en tu caso.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            No todas las incidencias sobre NIE o TIE tienen la misma solución.
            La diferencia suele estar en el tipo de expediente, en las fechas y
            en la documentación disponible.
          </p>

          <div className="mt-8">
            <Link
              href="/#contacto"
              className="inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Solicitar revisión de mi situación
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}