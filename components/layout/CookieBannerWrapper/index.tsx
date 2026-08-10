"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () => import("@/components/ui/CookieBanner").then((mod) => mod.CookieBanner),
  {
    ssr: false,
  },
);

export function CookieBannerWrapper() {
  return <CookieBanner />;
}
