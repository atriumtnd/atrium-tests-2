// apps/web/src/components/PostHogProvider.tsx
"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

type Props = { children: React.ReactNode };

export default function PostHogProvider({ children }: Props) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return; // evita erro em dev se a env não estiver setada
    posthog.init(key, {
      api_host: "https://app.posthog.com",
      capture_pageview: true,
      persistence: "localStorage+cookie",
    });
  }, []);

  return <>{children}</>;
}
