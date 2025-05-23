// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sso-callback(.*)',
  '/api/webhooks(.*)',
  '/api/auth(.*)',
]);

// Define role-based routes
const roleBasedRoutes = {
  '/clients/new': ['manager', 'org_admin', 'admin'],
  '/payrolls/new': ['manager', 'org_admin', 'admin'],
  '/staff': ['manager', 'org_admin', 'admin'],
  '/settings': ['org_admin', 'admin'],
  '/developer': ['admin'],
} as const;

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;
  
  // Skip public routes
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // Get auth state
  const authState = await auth();
  
  // Check if user is authenticated
  if (!authState.userId) {
    // For API routes, return 401
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // For other routes, redirect to sign-in
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  try {
    // Get the Hasura token
    const token = await authState.getToken({ template: 'hasura' });
    
    if (!token) {
      console.error('No Hasura token available');
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Parse the token to get user role
    let userRole = 'viewer'; // default role
    try {
      // Use Buffer.from for Node.js compatibility
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString()
      );
      const hasuraClaims = payload['https://hasura.io/jwt/claims'];
      userRole = hasuraClaims?.['x-hasura-default-role'] || 'viewer';
    } catch (e) {
      console.error('Failed to parse JWT:', e);
    }

    // Check role-based access
    for (const [route, allowedRoles] of Object.entries(roleBasedRoutes)) {
      if (pathname.startsWith(route) && !allowedRoles.includes(userRole as any)) {
        if (pathname.startsWith('/api/')) {
          return NextResponse.json(
            { error: 'Forbidden: Insufficient permissions' },
            { status: 403 }
          );
        }
        // Redirect to dashboard with a message
        return NextResponse.redirect(new URL('/dashboard?error=unauthorized', request.url));
      }
    }

    // Add headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', authState.userId);
    requestHeaders.set('x-user-role', userRole);
    requestHeaders.set('authorization', `Bearer ${token}`);

    return NextResponse.next({
      request: { headers: requestHeaders }
    });

  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};