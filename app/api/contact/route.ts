import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
  nombre?: string;
  email?: string;
  telefono?: string;
  tiempo_en_espana?: string;
  situacion?: string;
  aceptaPrivacidad?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    const nombre = body.nombre?.trim() || "";
    const email = body.email?.trim() || "";
    const telefono = body.telefono?.trim() || "";
    const tiempoEnEspana = body.tiempo_en_espana?.trim() || "";
    const situacion = body.situacion?.trim() || "";
    const aceptaPrivacidad = Boolean(body.aceptaPrivacidad);

    if (!nombre || !email || !situacion) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!aceptaPrivacidad) {
      return NextResponse.json(
        { error: "Debes aceptar la política de privacidad." },
        { status: 400 }
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        { error: "Faltan variables SMTP en el servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const destinatario = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    const remitenteMostrado =
      process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

    const subject = `Nueva consulta web - ${nombre}`;

    const text = `
Nueva consulta desde la web de Hugo Alonso Abogado

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || "No facilitado"}
Tiempo en España: ${tiempoEnEspana || "No facilitado"}

Situación:
${situacion}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(telefono || "No facilitado")}</p>
        <p><strong>Tiempo en España:</strong> ${escapeHtml(
          tiempoEnEspana || "No facilitado"
        )}</p>
        <p><strong>Situación:</strong></p>
        <div style="white-space: pre-line; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px;">
          ${escapeHtml(situacion)}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Hugo Alonso Abogado Web" <${remitenteMostrado}>`,
      to: destinatario,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en /api/contact:", error);

    return NextResponse.json(
      {
        error:
          "No se ha podido enviar la consulta. Revisa la configuración del correo.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}