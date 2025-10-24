// apps/web/src/components/PostHogProvider.tsx
"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogProvider() {
  useEffect(() => {
    // Só inicializa se a chave existir e ainda não estiver inicializado
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    if (posthog.__loaded) return; // evita duplicação em hot reload

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: "https://app.posthog.com",
      autocapture: true, // captura eventos automáticos (cliques, etc.)
      capture_pageview: true,
    });
  }, []);

  return null; // não renderiza nada visual
}
