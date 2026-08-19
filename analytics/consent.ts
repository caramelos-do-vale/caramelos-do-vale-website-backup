export type AnalyticsConsent = "granted" | "denied";

export function updateAnalyticsConsent(consent: AnalyticsConsent) {
  window.gtag("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export const CONSENT_STORAGE_KEY = "caramelos-cookie-consent";

export type ConsentStatus = "pending" | "accepted" | "rejected";

export function saveConsent(status: ConsentStatus) {
  localStorage.setItem(CONSENT_STORAGE_KEY, status);
}
