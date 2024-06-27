import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!request.cookies.get("admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
