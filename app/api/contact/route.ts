import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * POST /api/contact
 *
 * Sends the iletişim form as an email to info@pirangyd.com using SMTP credentials
 * supplied via environment variables. Honeypot field `website` rejects bots silently.
 *
 * Required env vars on Vercel (Project → Settings → Environment Variables):
 *   SMTP_HOST       mail.eksioglugrup.tr
 *   SMTP_PORT       465
 *   SMTP_USER       info@pirangyd.com
 *   SMTP_PASS       <mailbox password>          (encrypted)
 *   CONTACT_TO      info@pirangyd.com           (recipient; defaults to SMTP_USER)
 *   CONTACT_FROM    info@pirangyd.com           (defaults to SMTP_USER)
 *
 * Optional:
 *   SMTP_SECURE     "true" | "false"            (defaults to true on port 465)
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SERVICE_LABELS: Record<string, string> = {
  kd: "Kentsel Dönüşüm",
  dg: "Değerleme",
  ins: "İnşaat",
  yat: "Yatırım Danışmanlığı",
  other: "Diğer",
};

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request): Promise<NextResponse> {
  let payload: Record<string, unknown>;
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      payload = await req.json();
    } else {
      const fd = await req.formData();
      payload = Object.fromEntries(fd.entries());
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request body" },
      { status: 400 }
    );
  }

  // Honeypot — silently accept and drop.
  if (payload.website && String(payload.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const serviceKey = String(payload.service ?? "").trim();
  const address = String(payload.address ?? "").trim();
  const msg = String(payload.msg ?? "").trim();
  const kvkk = payload.kvkk;

  // Basic validation — name and phone are required, both must look sensible.
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json(
      { ok: false, error: "İsim alanı geçersiz." },
      { status: 422 }
    );
  }
  if (phone.length < 7 || phone.length > 30) {
    return NextResponse.json(
      { ok: false, error: "Telefon alanı geçersiz." },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "E-posta adresi geçersiz." },
      { status: 422 }
    );
  }
  if (msg.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Mesaj çok uzun." },
      { status: 422 }
    );
  }
  if (!kvkk) {
    return NextResponse.json(
      { ok: false, error: "KVKK aydınlatma metnini onaylamanız gerekmektedir." },
      { status: 422 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user;
  const from = process.env.CONTACT_FROM ?? user;
  const secure =
    typeof process.env.SMTP_SECURE === "string"
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  if (!host || !user || !pass || !to || !from) {
    // eslint-disable-next-line no-console
    console.error("[contact] missing SMTP env vars");
    return NextResponse.json(
      { ok: false, error: "Mail servisi yapılandırılmadı." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const serviceLabel = SERVICE_LABELS[serviceKey] || serviceKey || "—";
  const now = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

  const html = `<!doctype html>
<html lang="tr"><body style="font-family:-apple-system,Segoe UI,Inter,sans-serif;color:#14140f;background:#efece6;padding:24px;">
  <table style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #d8d3c4;padding:24px;">
    <tr><td>
      <h2 style="margin:0 0 18px;font-size:20px;border-bottom:1px solid #d8d3c4;padding-bottom:10px;">Yeni iletişim formu — pirangyd.com</h2>
      <p style="margin:0 0 4px;color:#6f6957;font-size:12px;">${esc(now)} · Europe/Istanbul</p>
      <table cellpadding="6" style="border-collapse:collapse;width:100%;margin-top:16px;font-size:14px;">
        <tr><td style="border-bottom:1px solid #eee;width:130px;color:#6f6957;">Ad Soyad</td><td style="border-bottom:1px solid #eee;"><strong>${esc(name)}</strong></td></tr>
        <tr><td style="border-bottom:1px solid #eee;color:#6f6957;">Telefon</td><td style="border-bottom:1px solid #eee;"><a href="tel:${esc(phone)}" style="color:#c94a26;">${esc(phone)}</a></td></tr>
        <tr><td style="border-bottom:1px solid #eee;color:#6f6957;">E-posta</td><td style="border-bottom:1px solid #eee;">${email ? `<a href="mailto:${esc(email)}" style="color:#c94a26;">${esc(email)}</a>` : "—"}</td></tr>
        <tr><td style="border-bottom:1px solid #eee;color:#6f6957;">Hizmet</td><td style="border-bottom:1px solid #eee;">${esc(serviceLabel)}</td></tr>
        <tr><td style="border-bottom:1px solid #eee;color:#6f6957;vertical-align:top;">Adres</td><td style="border-bottom:1px solid #eee;">${esc(address) || "—"}</td></tr>
        <tr><td style="color:#6f6957;vertical-align:top;">Mesaj</td><td style="white-space:pre-wrap;">${esc(msg) || "—"}</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    "Yeni iletişim formu — pirangyd.com",
    `Tarih: ${now} (Europe/Istanbul)`,
    "",
    `Ad Soyad : ${name}`,
    `Telefon  : ${phone}`,
    `E-posta  : ${email || "—"}`,
    `Hizmet   : ${serviceLabel}`,
    `Adres    : ${address || "—"}`,
    "",
    "Mesaj:",
    msg || "—",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `Pirangyd İletişim Formu <${from}>`,
      to,
      replyTo: email || undefined,
      subject: `Pirangyd · ${name} · ${serviceLabel}`,
      text,
      html,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { ok: false, error: "Mail gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
