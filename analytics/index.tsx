"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { AnalyticsEvents } from "./events";

export function trackEvent<K extends keyof AnalyticsEvents>(
  eventName: K,
  parameters: AnalyticsEvents[K],
) {
  sendGAEvent("event", eventName, parameters);
}
