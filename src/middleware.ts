import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/blocked")) {
      // Read the request
  const userAgent = request.headers.get("user-agent") || "";
  const abTestCookie = request.cookies.get("ab-test");
  const authToken = request.cookies.get("auth-token")?.value;
    // Manipulate the response
  const response = NextResponse.next();

  response.headers.set("X-AB-Test-Variant", abTestCookie?.value || "A");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Content-Type-Options", "nosniff");
    return NextResponse.redirect(new URL("/", request.url));
    
  }
  

  return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
  };
