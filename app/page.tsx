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
              className="h-[90px] w-auto md:h-[110px]"
            />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a href="/despacho" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              Despacho
            </a>

            <a
              href="https://wa.me/34686310400"
              target="_blank"
              className="rounded-2xl bg-slate-950 px-4 py-2.5 text-sm text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* IZQUIERDA */}
        <div>
          <h1 className="text-4xl font-semibold">
            ¿Puedes conseguir papeles en España en 2026?
          </h1>

          <p className="mt-4">
            Te digo en menos de 24 horas si tu caso es viable o no.
          </p>

          <p className="mt-4 text-sm text-slate-600">
            Cada situación es distinta, pero muchas personas se encuentran en escenarios similares al tuyo.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#contacto" className="bg-black text-white px-6 py-3 rounded-xl">
              Evaluar mi caso
            </a>

            <a href="https://wa.me/34686310400" className="bg-green-600 text-white px-6 py-3 rounded-xl">
              WhatsApp
            </a>
          </div>
        </div>

        {/* FORMULARIO — CORRECTO */}
        <aside
          id="contacto"
          className="rounded-2xl border bg-white p-6 shadow"
        >
          <h2 className="text-xl font-semibold">Consulta</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              placeholder="Nombre"
              className="w-full border p-2 rounded"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Tu caso"
              className="w-full border p-2 rounded"
              value={situacion}
              onChange={(e) => setSituacion(e.target.value)}
              required
            />

            <label className="text-sm">
              <input
                type="checkbox"
                checked={privacidad}
                onChange={(e) => setPrivacidad(e.target.checked)}
              />
              Acepto privacidad
            </label>

            <button className="w-full bg-black text-white py-3 rounded">
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </aside>
      </section>

      <footer className="border-t mt-20 p-6 text-xs text-slate-500">
        © 2026 Hugo Alonso Abogado
      </footer>
    </main>
  );
}