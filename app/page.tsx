export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-start">

        <div>
          <h1 className="text-4xl font-bold mb-6">
            ¿Puedes conseguir papeles en España en 2026?
          </h1>

          <p className="text-lg mb-4">
            Te digo en menos de 24 horas si tu caso es viable o no, con criterio jurídico real.
          </p>

          <p className="text-sm text-gray-600 mb-6">
            Abogado de extranjería en Madrid. Análisis individual, sin respuestas genéricas.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              Evaluar mi caso ahora
            </button>

            <a
              href="https://wa.me/34686310400"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-xl"
            >
              Consultar por WhatsApp
            </a>
          </div>

          <ul className="text-sm text-gray-600 space-y-1">
            <li>✔ Respuesta en menos de 24h</li>
            <li>✔ Evaluación confidencial</li>
            <li>✔ Sin compromiso inicial</li>
          </ul>
        </div>

        {/* FORMULARIO */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Comprueba si tu caso puede encajar
          </h2>

          <form action="https://formspree.io/f/xlgpqydn" method="POST" className="space-y-4">

            <input
              type="text"
              name="nombre"
              placeholder="Nombre y apellidos"
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="tiempo"
              placeholder="¿Desde cuándo estás en España?"
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="mensaje"
              placeholder="Describe tu caso (tiempo en España, situación actual, documentación que tienes)"
              required
              className="w-full p-3 border rounded-lg h-32"
            ></textarea>

            <p className="text-sm text-gray-600">
              Respuesta en menos de 24h. Sin compromiso.
            </p>

            <label className="text-sm flex gap-2">
              <input type="checkbox" required />
              He leído y acepto la política de privacidad
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Enviar consulta
            </button>

            <p className="text-xs text-gray-500">
              No se crea relación abogado-cliente hasta la aceptación del encargo.
            </p>

          </form>
        </div>

      </section>

      {/* BLOQUES DE CONFIANZA */}
      <section className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Análisis previo</h3>
          <p className="text-sm text-gray-600">
            Revisión realista de tu situación y de la documentación disponible.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Estrategia documental</h3>
          <p className="text-sm text-gray-600">
            Preparación ordenada del expediente con criterio jurídico.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Seguimiento directo</h3>
          <p className="text-sm text-gray-600">
            Trabajo de forma individual, sin intermediarios, con revisión directa.
          </p>
        </div>

      </section>

      {/* TEXTO SEO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Abogado de extranjería en Madrid: regularización y obtención de papeles
        </h2>

        <p className="text-gray-700 mb-4">
          Si buscas un abogado de extranjería en Madrid para regularizar tu situación en España,
          es fundamental contar con asesoramiento jurídico individualizado. Cada caso requiere
          un análisis concreto, especialmente en procedimientos de regularización.
        </p>

        <h3 className="font-semibold mb-2">
          ¿Quién puede acceder a la regularización?
        </h3>

        <p className="text-gray-700 mb-4">
          Es necesario estudiar el tiempo de permanencia en España, la documentación disponible
          y la situación personal de cada solicitante. No todos los casos pueden tramitarse del mismo modo.
        </p>

        <h3 className="font-semibold mb-2">
          ¿Qué riesgos existen?
        </h3>

        <p className="text-gray-700">
          Presentar una solicitud sin preparación suficiente puede dar lugar a requerimientos o denegaciones.
          Por ello, es recomendable realizar previamente un análisis jurídico del caso.
        </p>
      </section>

    </main>
  );
}
