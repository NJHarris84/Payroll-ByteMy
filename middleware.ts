// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/(?!webhooks|auth)(.*)' // Protect all API routes except webhooks and auth
])

// Route-role mapping for role-based access control
const ROUTE_PERMISSIONS = {
  '/dashboard': ['viewer', 'consultant', 'manager', 'org_admin', 'admin'],
  '/clients/new': ['manager', 'org_admin', 'admin'],
  '/clients/[^/]+/edit': ['manager', 'org_admin', 'admin'],
  '/payrolls/new': ['manager', 'org_admin', 'admin'],
  '/payrolls/[^/]+/edit': ['manager', 'org_admin', 'admin'],
  '/staff': ['manager', 'org_admin', 'admin'],
  '/settings': ['org_admin', 'admin'],
  '/developer': ['admin'],
  '/api/cron': ['org_admin', 'admin'],
  '/api/user': ['manager', 'org_admin', 'admin'],
} as const

function getRequiredRoles(pathname: string): string[] | null {
  for (const [route, roles] of Object.entries(ROUTE_PERMISSIONS)) {
    const pattern = route.replace(/\[.*?\]/g, '[^/]+') // Convert [id] to regex pattern
    if (new RegExp(`^${pattern}(/.*)?$`).test(pathname)) {
      return roles as string[]
    }
  }
  return null
}

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl

  // Apply protection to protected routes
  if (isProtectedRoute(request)) {
    await auth.protect()

    // Get user info and token
    const { userId, sessionClaims, getToken } = auth()
    
    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    try {
      // Get Hasura token
      const token = await getToken({ template: 'hasura' })
      
      if (!token) {
        console.error('Failed to get Hasura token')
        return NextResponse.redirect(new URL('/sign-in', request.url))
      }

      // Extract role from token or session claims
      let userRole: string = 'viewer' // default role
      
      try {
        // Try to get role from JWT token first
        const payload = JSON.parse(atob(token.split('.')[1]))
        const hasuraClaims = payload['https://hasura.io/jwt/claims']
        userRole = hasuraClaims?.['x-hasura-default-role'] || 'viewer'
      } catch {
        // Fallback to session claims
        userRole = (sessionClaims?.publicMetadata?.role as string) || 'viewer'
      }

      // Check route permissions
      const requiredRoles = getRequiredRoles(pathname)
      if (requiredRoles && !requiredRoles.includes(userRole)) {
        if (pathname.startsWith('/api/')) {
          return NextResponse.json(
            { error: 'Forbidden: Insufficient permissions' },
            { status: 403 }
          )
        }
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }

      // Add auth headers for downstream services
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-user-id', userId)
      requestHeaders.set('x-user-role', userRole)
      requestHeaders.set('authorization', `Bearer ${token}`)

      return NextResponse.next({
        request: { headers: requestHeaders }
      })

    } catch (error) {
      console.error('Middleware auth error:', error)
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}