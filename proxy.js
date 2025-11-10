import { createServerClient } from "@supabase/ssr"
import { NextResponse } from "next/server"
import { authMiddleware } from "./lib/supabase/middleware";

export async function proxy(req) {
  return authMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
