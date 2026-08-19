"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/analytics";

export function SponsorshipAnalytics() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent("view_sponsorship", {});

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} aria-hidden="true" />;
}
