// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { AuthObject } from '@clerk/nextjs/server';

// Define public paths
const publicPaths = [
  "/sign-in*", 
  "/sign-up*", 
  "/api/webhooks*"
];

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: publicPaths,
  
  // Custom logic for specific routes
  afterAuth(auth: AuthObject, req: NextRequest) {
    // If the user is not signed in and the route is not public, redirect to sign-in
    if (!auth.userId && !publicPaths.some(pattern => {
      const regex = new RegExp(`^${pattern.replace('*', '.*')}$`);
      return regex.test(req.nextUrl.pathname);
    })) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Allow all authenticated users to access any route
    return NextResponse.next();
  }
});

// Stop Middleware from running on static files and API routes
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};