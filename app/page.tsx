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
      setError("Debes aceptar la política de privacidad.");
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
        throw new Error(data?.error || "No se pudo enviar.");
      }

      router.push("/gracias");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Error al enviar la consulta.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          <a href="/">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[90px] w-auto md:h-[110px]"
              priority
            />
          </a>

          <a
            href="https://wa.me/34686310400"
            target="_blank"
            className="hidden rounded-2xl bg-slate-950 px-4 py-2.5 text-sm text-white md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Abogado de extranjería · Madrid
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight lg:text-6xl">
            ¿Puedes conseguir papeles en España en 2026?
          </h1>

          <p className="mt-6 text-xl text-slate-800">
            Te digo en menos de 24 horas si tu caso es viable o no.
          </p>

          <p className="mt-2 text-base text-slate-700">
            Y qué puedes hacer exactamente en tu situación.
          </p>

          <p className="mt-4 text-sm text-slate-600">
            Abogado colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM).
            Estudio tu caso personalmente, sin intermediarios.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-2xl bg-slate-950 px-6 py-4 text-white text-sm"
            >
              Evaluar mi caso ahora
            </a>

            <a
              href="https://wa.me/34686310400"
              target="_blank"
              className="rounded-2xl bg-green-600 px-6 py-4 text-white text-sm"
            >
              Consultar por WhatsApp
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-600 space-y-1">
            <div>✔ Respuesta en menos de 24h</div>
            <div>✔ Evaluación confidencial</div>
            <div>✔ Sin compromiso inicial</div>
          </div>
        </div>

        {/* FORMULARIO */}
        <aside
          id="contacto"
          className="rounded-3xl border bg-white p-8 shadow"
        >
          <h2 className="text-2xl font-semibold">
            Comprueba si tu caso puede encajar
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Solo reviso personalmente cada consulta.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border rounded-xl px-4 py-3"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Describe tu caso"
              className="w-full border rounded-xl px-4 py-3"
              rows={4}
              required
              value={situacion}
              onChange={(e) => setSituacion(e.target.value)}
            />

            <p className="text-xs text-slate-500">
              Consulta confidencial. No se compartirán tus datos con terceros.
            </p>

            <label className="text-sm flex gap-2">
              <input
                type="checkbox"
                checked={privacidad}
                onChange={(e) => setPrivacidad(e.target.checked)}
                required
              />
              Acepto la política de privacidad
            </label>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="w-full bg-slate-950 text-white py-3 rounded-xl"
            >
              {loading ? "Enviando..." : "Enviar consulta"}
            </button>

            <p className="text-xs text-slate-500">
              No se crea relación abogado-cliente hasta aceptación del encargo.
            </p>
          </form>
        </aside>
      </section>

      {/* BLOQUE DE CONFIANZA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-slate-700">
        <h2 className="text-3xl font-semibold">
          ¿Cómo trabajo tu caso?
        </h2>

        <div className="mt-6 space-y-4">
          <p>
            Analizo tu situación real, la documentación disponible y el encaje
            jurídico concreto.
          </p>

          <p>
            Si tu caso no es viable, también te lo diré claramente.
          </p>

          <p>
            No trabajo con respuestas genéricas ni soluciones estándar. Cada
            expediente requiere una estrategia distinta.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-stone-50 py-8 text-center text-xs text-slate-500">
        <div>© 2026 Hugo Alonso Abogado</div>
        <div className="mt-2 space-x-4">
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/politica-privacidad">Privacidad</a>
          <a href="/cookies">Cookies</a>
        </div>
      </footer>
    </main>
  );
}