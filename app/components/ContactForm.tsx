"use client";

import Link from "next/link";
import { useState } from "react";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "ok"; msg: string }
  | { state: "error"; msg: string };

/**
 * Client-side contact form. Submits to /api/contact which relays the message
 * via SMTP. Keeps the existing .contact-form / .form-grid / .field markup so
 * the design CSS continues to apply.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.state === "submitting") return;
    setStatus({ state: "submitting" });

    const fd = new FormData(e.currentTarget);
    // Honeypot — if filled, the API silently accepts and drops.
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (res.ok && json.ok) {
        setStatus({
          state: "ok",
          msg: "Mesajınız iletildi. En geç 4 saat içinde dönüş yapacağız.",
        });
        e.currentTarget.reset();
      } else {
        setStatus({
          state: "error",
          msg:
            json.error ||
            "Bir aksaklık oluştu. Lütfen birkaç dakika sonra tekrar deneyin.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        msg: "Ağ hatası. Bağlantınızı kontrol edip tekrar deneyin.",
      });
    }
  }

  const isOk = status.state === "ok";
  const isErr = status.state === "error";
  const isSubmitting = status.state === "submitting";

  return (
    <form
      className="contact-form"
      onSubmit={onSubmit}
      aria-labelledby="form-h"
      noValidate
    >
      <h2 id="form-h">
        <span data-tr>
          Form doldurun,{" "}
          <span style={{ color: "var(--accent)" }}>4 saatte arayalım.</span>
        </span>
        <span data-en>
          Fill the form,{" "}
          <span style={{ color: "var(--accent)" }}>
            we&apos;ll call in 4 hours.
          </span>
        </span>
      </h2>
      <p className="lead">
        <span data-tr>
          Binanız hangi aşamada olursa olsun — riskli yapı tespitinden teslime
          kadar — başlangıç noktanızı birlikte belirleyelim.
        </span>
        <span data-en>
          Wherever your building stands — from risk assessment to handover —
          let&apos;s locate your starting point together.
        </span>
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            <span data-tr>Ad Soyad *</span>
            <span data-en>Full name *</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            data-tr-placeholder="Ad Soyad"
            data-en-placeholder="Full name"
            placeholder="Ad Soyad"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">
            <span data-tr>Telefon *</span>
            <span data-en>Phone *</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            data-tr-placeholder="+90 ___ ___ __ __"
            data-en-placeholder="+90 ___ ___ __ __"
            placeholder="+90 ___ ___ __ __"
          />
        </div>
        <div className="field">
          <label htmlFor="email">
            <span data-tr>E-posta</span>
            <span data-en>Email</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            data-tr-placeholder="ornek@eposta.com"
            data-en-placeholder="you@example.com"
            placeholder="ornek@eposta.com"
          />
        </div>
        <div className="field">
          <label htmlFor="service">
            <span data-tr>Hizmet</span>
            <span data-en>Service</span>
          </label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Seçiniz / Select
            </option>
            <option value="kd">Kentsel Dönüşüm / Urban Transformation</option>
            <option value="dg">Değerleme / Valuation</option>
            <option value="ins">İnşaat / Construction</option>
            <option value="yat">Yatırım Danışmanlığı / Investment Advisory</option>
            <option value="other">Diğer / Other</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="address">
            <span data-tr>Binanın adresi (varsa)</span>
            <span data-en>Building address (if any)</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            data-tr-placeholder="Örn: Kadıköy / Caddebostan"
            data-en-placeholder="e.g. Kadıköy / Caddebostan"
            placeholder="Örn: Kadıköy / Caddebostan"
          />
        </div>
        <div className="field full">
          <label htmlFor="msg">
            <span data-tr>Kısaca durum</span>
            <span data-en>Brief description</span>
          </label>
          <textarea
            id="msg"
            name="msg"
            rows={5}
            data-tr-placeholder="Binanız hakkında bildikleriniz (yıl, kat sayısı, hak sahibi sayısı, mevcut durum)…"
            data-en-placeholder="What you know about the building (year, floors, owners, current status)…"
            placeholder="Binanız hakkında bildikleriniz…"
          ></textarea>
        </div>

        {/* Honeypot — hidden from humans, bots typically fill every field. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="field full">
          <label
            htmlFor="kvkk"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              fontSize: 13,
              lineHeight: 1.5,
              cursor: "pointer",
            }}
          >
            <input
              id="kvkk"
              name="kvkk"
              type="checkbox"
              required
              style={{ marginTop: 3 }}
            />
            <span>
              <span data-tr>
                <Link href="/kvkk">KVKK Aydınlatma Metni</Link>&apos;ni okudum;
                kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.
              </span>
              <span data-en>
                I have read the <Link href="/kvkk">KVKK Information Notice</Link>{" "}
                and consent to processing of my personal data for contact
                purposes.
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="submit-row">
        <button
          type="submit"
          className="btn btn-accent"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span data-tr>Gönderiliyor…</span>
              <span data-en>Sending…</span>
            </>
          ) : (
            <>
              <span data-tr>Formu Gönder</span>
              <span data-en>Send Form</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
        <p
          className="form-status"
          data-form-status
          role="status"
          aria-live="polite"
          style={{
            opacity: status.state === "idle" ? 0 : 1,
            color: isErr
              ? "var(--accent)"
              : isOk
              ? "var(--ink)"
              : "var(--muted)",
            transition: "opacity .25s ease",
          }}
        >
          {status.state !== "idle" ? status.msg : ""}
        </p>
      </div>
    </form>
  );
}
