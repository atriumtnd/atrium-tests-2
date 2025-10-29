import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import PostHogProvider from "../components/PostHogProvider"; // 👈 importamos o client component

export const metadata: Metadata = {
  title: "Atrium Tests",
  description: "Plataforma de testes para desenvolvimento pessoal e profissional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        {children}
      </body>
    </html>
  );
}

<footer className="text-sm text-center text-gray-500 p-4 border-t">
  <a href="/legal/termos" className="mx-2 hover:underline">
    Termos de Uso
  </a>
  <a href="/legal/privacidade" className="mx-2 hover:underline">
    Privacidade
  </a>
  <a href="/legal/cookies" className="mx-2 hover:underline">
    Cookies
  </a>
  <p className="mt-2">© {new Date().getFullYear()} AtriumTech</p>
</footer>;
