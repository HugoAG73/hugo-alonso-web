export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-6">
          ¿Puedes conseguir papeles en España en 2026?
        </h1>

        <p className="text-lg mb-3">
          Te digo en menos de 24 horas si tu caso es viable o no.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Abogado de extranjería en Madrid. Análisis real, sin respuestas genéricas.
        </p>

        <div className="flex gap-4 mb-6 flex-wrap">
          <a
            href="#contacto"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Evaluar mi caso ahora
          </a>

          <a
            href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <ul className="text-sm text-gray-600 space-y-1 mb-10">
          <li>✔ Respuesta en menos de 24h</li>
          <li>✔ Evaluación confidencial</li>
          <li>✔ Sin compromiso inicial</li>
        </ul>

      </section>

      {/* FORMULARIO */}
      <section id="contacto" className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Comprueba si tu caso puede encajar
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Describe tu situación y recibirás una valoración jurídica inicial.
        </p>

        <form action="https://formspree.io/f/xlgpqydn" method="POST" className="space-y-4">

          <input
            name="nombre"
            placeholder="Nombre y apellidos"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            name="telefono"
            placeholder="Teléfono"
            className="w-full p-3 border rounded-lg"
          />

          <input
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

          <button className="w-full bg-black text-white py-3 rounded-xl">
            Enviar consulta
          </button>

          <p className="text-xs text-gray-500">
            No se crea relación abogado-cliente hasta la aceptación del encargo.
          </p>

        </form>
      </section>

      {/* BLOQUES DE CONFIANZA */}
      <section className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto p-6">

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Análisis previo</h3>
          <p className="text-sm text-gray-600">
            Revisión realista de tu situación.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Estrategia</h3>
          <p className="text-sm text-gray-600">
            Preparación jurídica del expediente.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Seguimiento directo</h3>
          <p className="text-sm text-gray-600">
            Sin intermediarios.
          </p>
        </div>

      </section>

      {/* CTA FINAL */}
      <section className="text-center mt-16 p-6">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Quieres saber si puedes regularizar tu situación?
        </h2>

        <a
          href="https://wa.me/34686310400"
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Escribirme por WhatsApp
        </a>
      </section>

    </main>
  );
}