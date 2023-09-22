import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const isAuthPage =
      request.nextUrl.pathname.startsWith("/login")
    if (isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
}

export const matcher = ["/login"]