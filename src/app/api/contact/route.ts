import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ message: "Missing RESEND_API_KEY in the environment." }, { status: 500 });
  }

  if (!recipient) {
    return NextResponse.json({ message: "Missing CONTACT_TO_EMAIL in the environment." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ message: "Please correct the form fields and try again." }, { status: 400 });
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  }

  const { name, email, message } = parsed.data;
  const subject = `Portfolio contact form: ${name}`;
  const text = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      subject,
      text,
      html,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as { message?: string } | null;
    return NextResponse.json(
      { message: errorBody?.message || "Resend rejected the message. Check your sender and recipient settings." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your message was sent successfully." });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
