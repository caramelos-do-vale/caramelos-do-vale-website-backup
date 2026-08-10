"use client";

import { useEffect, useState } from "react";
import { updateAnalyticsConsent } from "@/analytics/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem("caramelos-cookie-consent");
  });

  if (visible === null || !visible) {
    return null;
  }

  function handleAccept() {
    localStorage.setItem("caramelos-cookie-consent", "accepted");

    updateAnalyticsConsent("granted");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem("caramelos-cookie-consent", "rejected");

    updateAnalyticsConsent("denied");
    setVisible(false);
  }

  return (
    <aside
      aria-label="Preferências de cookies"
      className="border-dark/10 fixed right-0 bottom-0 left-0 z-100 border-t bg-white shadow-[0_-8px_30px_rgba(26,46,56,0.12)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:py-6 lg:px-8">
        <div className="max-w-3xl">
          <h2
            id="cookie-title"
            className="text-dark text-lg font-black md:text-xl"
          >
            Sua privacidade importa
          </h2>

          <p
            id="cookie-description"
            className="text-muted mt-1.5 text-sm leading-relaxed"
          >
            Utilizamos cookies de análise para entender como nosso site é
            utilizado e melhorar sua experiência.
          </p>
        </div>

        <div className="flex shrink-0 flex-col-reverse gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleReject}
            className="border-dark/20 text-dark hover:bg-dark/5 focus-visible:outline-yellow rounded-xl border-2 px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Rejeitar
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="bg-yellow text-dark focus-visible:outline-yellow rounded-xl px-5 py-2.5 text-sm font-bold shadow-[0_4px_14px_rgba(234,183,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(234,183,74,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
