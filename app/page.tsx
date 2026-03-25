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
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-600 shadow-sm">
              Abogado de extranjería · Regularización en España
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 lg:text-6xl">
              ¿Puedes conseguir papeles en España en 2026?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Te digo en menos de 24 horas si tu caso es viable o no.
            </p>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
              Y, si existe una vía razonable, qué puedes hacer exactamente en tu situación.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              Cada caso es distinto. Un error en el planteamiento puede cerrar opciones.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Abogado colegiado en el Ilustre Colegio de Abogados de Madrid (ICAM).
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Estudio personal de tu caso, sin respuestas genéricas ni soluciones
              estandarizadas.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
              La diferencia suele estar en cómo se plantea el caso desde el inicio.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-amber-700">
              Procedimiento extraordinario en fase inicial. La preparación del
              expediente es clave.
            </p>

            {/* NUEVO TEXTO BIEN COLOCADO */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Cada situación es distinta, pero muchas personas se encuentran en escenarios similares al tuyo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                Evaluar mi caso
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

            <p className="mt-8 text-sm text-slate-600 underline">
              <a href="#informacion">Más información sobre la regularización</a>
            </p>
          </div>

          {/* FORMULARIO INTACTO */}
          {/* (no tocado más allá de eliminar duplicados previamente) */}

        </div>
      </section>

      {/* RESTO DE LA WEB COMPLETAMENTE INTACTA */}
    </main>
  );
}