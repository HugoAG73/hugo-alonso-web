"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tiempoEnEspana, setTiempoEnEspana] = useState("");
  const [situacion, setSituacion] = useState("");
  const [privacidad, setPrivacidad] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!privacidad) {
      setError("Debes aceptar la política de privacidad para enviar la consulta.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          tiempo_en_espana: tiempoEnEspana,
          situacion,
          aceptaPrivacidad: privacidad,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "No se pudo enviar la consulta.");
      }

      router.push("/gracias");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Ha ocurrido un error al enviar la consulta.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          <a href="/" aria-label="Ir a la página principal">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              priority
              className="h-[70px] w-auto md:h-[85px]"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="/despacho"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              Despacho
            </a>

            <a
              href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%),radial-gradient(circle_at_left,rgba(120,113,108,0.10),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-600 shadow-sm">
              Abogado de extranjería · Regularización en España
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl">
              ¿Puedes conseguir papeles en España en 2026?
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-800">
              Te digo en menos de 24 horas si tu caso es viable o no.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
              Y, si existe una vía razonable, qué puedes hacer exactamente en tu
              situación.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              Cada caso es distinto. Un error en el planteamiento puede cerrar
              opciones.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Abogado colegiado en el Ilustre Colegio de Abogados de Madrid
              (ICAM).
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Abogado de extranjería en Madrid especializado en regularización de situación administrativa.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Estudio personal de tu caso, sin respuestas genéricas ni
              soluciones estandarizadas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                Evaluar mi caso en 24h
              </a>

              <a
                href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
              <div>✔ Respuesta en menos de 24h</div>
              <div>✔ Evaluación confidencial</div>
              <div>✔ Sin compromiso inicial</div>
            </div>

	    <p className="mt-4 text-sm text-slate-600">
  	      He analizado numerosos casos de regularización en distintas situaciones personales y documentales.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "Análisis previo",
                  "Estudio realista de tu situación y de las opciones disponibles.",
                ],
                [
                  "Estrategia documental",
                  "Preparación del expediente con criterio jurídico y orden.",
                ],
                [
                  "Seguimiento directo",
                  "Atención personal durante todo el proceso, sin intermediarios.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>

           <div className="mt-10 space-y-2 text-sm text-slate-600">
  	     <p>
    	       Puedes ampliar información sobre las principales vías de regularización:
 	     </p>

  	     <div className="flex flex-col gap-1 underline">
    	       <a href="/regularizacion-espana">
      	         Regularización en España: requisitos y viabilidad
   	       </a>

    	       <a href="/arraigo-social">
      	         Arraigo social (arraigo sociolaboral): cómo funciona
    	       </a>
  	     </div>
           </div>
           </div>

          <aside
            id="contacto"
            className="self-start rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl shadow-stone-200/60"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Consulta inicial
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Comprueba si tu caso puede encajar
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Evaluación preliminar orientada a detectar riesgos, documentación
              necesaria y siguientes pasos.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                name="nombre"
                type="text"
                placeholder="Nombre y apellidos"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="telefono"
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <input
                name="tiempo_en_espana"
                type="text"
                placeholder="¿Desde cuándo estás en España?"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                value={tiempoEnEspana}
                onChange={(e) => setTiempoEnEspana(e.target.value)}
              />
              <textarea
                name="situacion"
                placeholder="Describe tu caso (tiempo en España, situación actual, documentación que tienes)"
                rows={5}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:bg-white"
                required
                value={situacion}
                onChange={(e) => setSituacion(e.target.value)}
              />

              <p className="text-sm text-slate-600">
                Respuesta en menos de 24h. Sin compromiso.
              </p>

              <p className="text-xs leading-5 text-slate-500">
                Consulta confidencial. No se compartirán tus datos con terceros
                salvo obligación legal.
              </p>

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  name="privacidad"
                  type="checkbox"
                  className="mt-1"
                  checked={privacidad}
                  onChange={(e) => setPrivacidad(e.target.checked)}
                  required
                />
                He leído y acepto la política de privacidad
              </label>

              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-950 px-5 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Enviar consulta"}
              </button>

              <p className="text-xs text-slate-500">
                No se crea relación abogado-cliente hasta la aceptación expresa
                del encargo profesional.
              </p>
            </form>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Si tu caso no es viable, también te lo diré con claridad.
            </p>
          </aside>
        </div>
      </section>

      <section id="informacion" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-slate-900">
          Regularización de extranjeros en España: requisitos, riesgos y enfoque jurídico
        </h2>

        <p className="mt-6 leading-7 text-slate-700">
          La llamada regularización masiva en España es un proceso
          extraordinario que puede permitir a determinadas personas extranjeras
          regularizar su situación administrativa. El análisis previo es determinante para evitar errores que puedan condicionar el resultado del procedimiento.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          No todos los casos pueden tramitarse del mismo modo. Por eso es
          esencial estudiar la permanencia en España, la documentación
          disponible y el encaje real de cada situación antes de iniciar
          cualquier actuación.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          ¿Quién puede acceder?
        </h3>
        <p className="mt-4 leading-7 text-slate-700">
          Será necesario analizar cada caso de forma individual. La estrategia
          no puede ser idéntica para todos los supuestos ni basarse en
          respuestas genéricas.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          ¿Qué riesgos existen?
        </h3>
        <p className="mt-4 leading-7 text-slate-700">
          Presentar una solicitud sin preparación suficiente puede dar lugar a
          requerimientos, incidencias o denegaciones. Antes de iniciar el
          procedimiento conviene realizar un estudio serio de viabilidad.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          ¿Qué puedo hacer por tu caso?
        </h3>
        <p className="mt-4 leading-7 text-slate-700">
          Reviso la documentación, valoro riesgos y defino una estrategia
          jurídica realista para ayudarte a tomar decisiones informadas y
          reducir errores evitables.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold text-slate-900">
          Abogado de extranjería en Madrid
        </h2>

        <p className="mt-6 leading-7 text-slate-700">
          Asesoramiento en procedimientos de regularización y obtención de autorización de residencia en España.
        </p>

        <p className="mt-6 leading-7 text-slate-700">
          Si buscas un abogado de extranjería en Madrid para regularizar tu
          situación en España, conviene contar con asesoramiento jurídico
          individualizado.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          Cada expediente exige preparación documental, criterio técnico y una
          revisión cuidadosa de los hechos y de la prueba disponible.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Servicios
        </h3>
        <p className="mt-4 leading-7 text-slate-700">
          Análisis de viabilidad, preparación de expedientes y seguimiento en
          procedimientos de extranjería, siempre con estudio individual y sin
          soluciones estandarizadas.
        </p>

        <h3 className="mt-10 text-xl font-semibold text-slate-900">
          Primera valoración
        </h3>
        <p className="mt-4 leading-7 text-slate-700">
          Puedes contactar para una revisión inicial de tu caso y determinar si
          existe una vía razonable para iniciar el procedimiento.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Contacto
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Consulta abogado de extranjería en Madrid
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Si deseas una revisión profesional de tu situación, puedes
              contactar para una primera valoración y definir la mejor
              estrategia de actuación.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-700">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              Email: hugoalonso@icam.es
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              Teléfono: 686 310 400
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              Despacho: Calle Guillermo de Osma núm. 5, bajo 1, C.P. 28045
              Madrid
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              Consulta presencial y online
            </div>
          </div>
        </div>
      </section>

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

      <a
        href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-600 p-4 text-white shadow-lg shadow-green-600/30 transition hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 2a10 10 0 0 0-8.66 15l-1.1 4.02 4.12-1.08A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-2.44.64.65-2.38-.19-.3A8 8 0 1 1 12 20Zm4.38-5.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.17-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.01-.37-.19-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.39 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </main>
  );
}