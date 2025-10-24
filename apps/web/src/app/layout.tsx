import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import PostHogProvider from "@/components/PostHogProvider"; // 👈 importamos o client component

export const metadata: Metadata = {
  title: "Atrium Tests",
  description: "Plataforma de testes para desenvolvimento pessoal e profissional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Inicializa o PostHog apenas no lado do cliente */}
        <PostHogProvider />
        {children}
      </body>
    </html>
  );
}
