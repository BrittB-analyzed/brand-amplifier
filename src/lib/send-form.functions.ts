import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RECIPIENTS = [
  "groei@expose-your-brand.com",
  "groeimetexposeyourbrand@gmail.com",
];

const schema = z.object({
  formName: z.string().min(1).max(80),
  name: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  url: z.string().trim().url("Ongeldige URL").max(500),
  message: z.string().trim().max(4000).optional().default(""),
  extra: z.record(z.string(), z.string().max(500)).optional().default({}),
  // Honeypot — must be empty. Bots fill hidden inputs.
  _hp: z.string().max(0).optional().default(""),
});

export const sendFormSubmission = createServerFn({ method: "POST" })
  .inputValidator((raw) => schema.parse(raw))
  .handler(async ({ data }) => {
    if (data._hp && data._hp.length > 0) {
      // Silently accept spam
      return { ok: true };
    }

    const apiKey = process.env.LOVABLE_API_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (!apiKey || !resendKey) {
      throw new Error("E-mailservice is niet geconfigureerd.");
    }

    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const extraRows = Object.entries(data.extra ?? {})
      .filter(([, v]) => v && v.trim().length > 0)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;color:#666"><b>${esc(k)}</b></td><td style="padding:6px 12px">${esc(v)}</td></tr>`,
      )
      .join("");

    const html = `
      <div style="font-family:system-ui,sans-serif;color:#111">
        <h2 style="margin:0 0 12px">Nieuwe inzending: ${esc(data.formName)}</h2>
        <table style="border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 12px;color:#666"><b>Naam</b></td><td style="padding:6px 12px">${esc(data.name || "—")}</td></tr>
          <tr><td style="padding:6px 12px;color:#666"><b>E-mail</b></td><td style="padding:6px 12px"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#666"><b>Website</b></td><td style="padding:6px 12px"><a href="${esc(data.url)}">${esc(data.url)}</a></td></tr>
          ${extraRows}
          ${data.message ? `<tr><td style="padding:6px 12px;color:#666;vertical-align:top"><b>Bericht</b></td><td style="padding:6px 12px;white-space:pre-wrap">${esc(data.message)}</td></tr>` : ""}
        </table>
      </div>`;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: "Expose Your Brand <onboarding@resend.dev>",
        to: RECIPIENTS,
        reply_to: data.email,
        subject: `[${data.formName}] ${data.name || data.email}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend send failed", res.status, body);
      throw new Error("Verzenden mislukt. Probeer het later opnieuw.");
    }

    return { ok: true };
  });