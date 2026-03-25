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
        <div className="mx-auto flex max-w-7xl items-start justify-between px-6 py-3 lg:px-8">
          <a href="/" aria-label="Ir a la página principal">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              priority
              className="h-[64px] w-auto md:h-[74px]"
            />
          </a>

          <a
            href="https://wa.me/34686310400?text=Hola,%20quiero%20saber%20si%20puedo%20regularizar%20mi%20situaci%C3%B3n%20en%20Espa%C3%B1a."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%),radial-gradient(circle_at_left,rgba(120,113,108,0.10),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-600 shadow-sm">
              Abogado de extranjería · Regularización en España
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl">
              ¿Puedes conseguir papeles en España en 2026?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Te digo en menos de 24 horas si tu caso es viable o no, con
              criterio jurídico real.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Abogado de extranjería en Madrid. Análisis individual, sin
              respuestas genéricas.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-amber-700">
              Procedimiento extraordinario en fase inicial. La preparación del
              expediente es clave.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                Evaluar mi caso ahora
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
          </div>

          {/* FORMULARIO */}
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

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Nombre y apellidos"
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                placeholder="Describe tu caso"
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm"
                required
                value={situacion}
                onChange={(e) => setSituacion(e.target.value)}
              />

              <button className="w-full rounded-2xl bg-slate-950 px-5 py-4 text-white">
                Enviar consulta
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* FOOTER NUEVO */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-header-cropped.png"
              alt="Hugo Alonso Abogado"
              width={1180}
              height={240}
              className="h-[40px] w-auto opacity-90"
            />
            <span className="text-xs text-slate-500">
              © 2026 Hugo Alonso Abogado
            </span>
          </div>

          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-slate-800 transition">
              Aviso legal
            </a>
            <a href="#" className="hover:text-slate-800 transition">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-slate-800 transition">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}