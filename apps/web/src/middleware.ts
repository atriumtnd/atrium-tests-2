import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Crie a resposta já com os headers da request (importante p/ cookies)
  const res = NextResponse.next({
    request: { headers: req.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Deve retornar todos os cookies atuais
        getAll() {
          // Next 13+/App Router: req.cookies.getAll() retorna { name, value }[]
          return req.cookies.getAll().map(({ name, value }) => ({ name, value }));
        },
        // Deve aplicar TODOS os cookies que o Supabase quer setar/atualizar
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Exemplo de proteção de rota
  if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return res;
}

// (Opcional) limite o middleware a rotas específicas
// export const config = { matcher: ["/dashboard/:path*"] };
