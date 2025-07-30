// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); // ou seu método de autenticação
  const { pathname } = request.nextUrl;

  // Permitir acesso ao login e arquivos estáticos
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/signUp") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // Se não estiver autenticado, redireciona para login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Se tiver token, deixa passar
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // Protege todas as rotas exceto _next e favicon.ico
};
