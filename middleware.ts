// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt", "en", "es"];
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ignora arquivos públicos e API
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) return;

  // já tem locale no caminho?
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return;
  }

  // redireciona para o default
  const url = req.nextUrl.clone();
  url.pathname = `/pt${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|sitemap.xml|robots.txt).*)"],
};
