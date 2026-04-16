import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ConsultationPayload = {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  teamSize?: string;
  challenge?: string;
};

function required(value: string | undefined) {
  return value && value.trim().length > 0;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ConsultationPayload;

  if (!required(body.fullName) || !required(body.businessName) || !required(body.email) || !required(body.phone) || !required(body.challenge)) {
    return NextResponse.json(
      { message: "Please fill all required fields." },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const toEmail = process.env.CONSULTATION_TO_EMAIL;
  const fromEmail = process.env.CONSULTATION_FROM_EMAIL || user;

  if (!host || !user || !pass || !toEmail || !fromEmail) {
    return NextResponse.json(
      { message: "Email is not configured yet. Set SMTP environment variables first." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New consultation request from ${body.businessName}`;
    const text = [
      "New consultation request",
      "",
      `Full name: ${body.fullName}`,
      `Business name: ${body.businessName}`,
      `Email: ${body.email}`,
      `Phone/WhatsApp: ${body.phone}`,
      `Team size: ${body.teamSize || "Not provided"}`,
      "",
      "Main challenge:",
      body.challenge,
    ].join("\n");

    const html = `
      <h2>New consultation request</h2>
      <p><strong>Full name:</strong> ${body.fullName}</p>
      <p><strong>Business name:</strong> ${body.businessName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone/WhatsApp:</strong> ${body.phone}</p>
      <p><strong>Team size:</strong> ${body.teamSize || "Not provided"}</p>
      <p><strong>Main challenge:</strong></p>
      <p>${body.challenge?.replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: body.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Consultation email send failed", error);
    return NextResponse.json(
      { message: "Failed to send consultation request. Please try again." },
      { status: 500 }
    );
  }
}

