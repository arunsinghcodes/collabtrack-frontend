import { NextResponse } from "next/server";

/**
 * CollabTrack Route Protection Middleware
 */
export function middleware(req) {
  const { pathname } = req.nextUrl;

  // access token (set by backend)
  const accessToken = req.cookies.get("accessToken")?.value;

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/auth");

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/tasks") ||
    pathname.startsWith("/settings");

  // 🚫 user not logged in → protected route
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  // 🔁 logged in user → auth pages
  if (isAuthPage && accessToken) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
    "/tasks/:path*",
    "/settings/:path*",
    "/login",
    "/register",
    "/auth/:path*",
  ],
};
