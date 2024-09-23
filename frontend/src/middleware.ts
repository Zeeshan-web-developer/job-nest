import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Middleware triggered");
  // Connect to database

  // Returning `NextResponse.next()` lets the request continue
  // and `NextResponse.redirect()` aborts the request and redirects
  // to the specified URL
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/register", "/login"],
};
