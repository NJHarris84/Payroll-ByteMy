// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Route-role mapping
const ROUTE_PERMISSIONS = {
  '/dashboard': ['viewer', 'consultant', 'manager', 'org_admin', 'admin'],
  '/clients/new': ['manager', 'org_admin', 'admin'],
  '/clients/*/edit': ['manager', 'org_admin', 'admin'],
  '/payrolls/new': ['manager', 'org_admin', 'admin'],
  '/payrolls/*/edit': ['manager', 'org_admin', 'admin'],
  '/staff/*': ['manager', 'org_admin', 'admin'],
  '/settings/*': ['org_admin', 'admin'],
  '/developer/*': ['admin'],
  '/api/cron/*': ['org_admin', 'admin'],
  '/api/user/*': ['manager', 'org_admin', 'admin'],
} as const

export default clerkMiddleware(async (auth, request: NextRequest) => {
  // Skip public routes
  if (isPublicRoute(request.nextUrl.pathname)) {
    return NextResponse.next()
  }
  
  const { userId, getToken } = auth()
  
  // Require authentication
  if (!userId) {
    return redirectToSignIn(request)
  }
  
  // Get and verify token
  try {
    const token = await getToken({ template: 'hasura' })
    if (!token) {
      return redirectToSignIn(request)
    }
    
    // Extract role from token
    const payload = JSON.parse(atob(token.split('.')[1]))
    const hasuraClaims = payload['https://hasura.io/jwt/claims']
    const userRole = hasuraClaims?.['x-hasura-default-role'] || 'viewer'
    
    // Check route permissions
    const requiredRoles = getRequiredRoles(request.nextUrl.pathname)
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      return handleUnauthorized(request)
    }
    
    // Add auth headers for downstream
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-role', userRole)
    requestHeaders.set('x-user-id', userId)
    requestHeaders.set('x-hasura-role', userRole)
    
    return NextResponse.next({
      request: { headers: requestHeaders }
    })
  } catch (error) {
    console.error('Auth verification failed:', error)
    return redirectToSignIn(request)
  }
})

function isPublicRoute(pathname: string): boolean {
  const publicRoutes = ['/', '/sign-in', '/sign-up', '/_next', '/api/webhooks']
  return publicRoutes.some(route => pathname.startsWith(route))
}

function getRequiredRoles(pathname: string): string[] | null {
  for (const [route, roles] of Object.entries(ROUTE_PERMISSIONS)) {
    const pattern = route.replace(/\*/g, '.*')
    if (new RegExp(`^${pattern}$`).test(pathname)) {
      return roles as string[]
    }
  }
  return null
}

function redirectToSignIn(request: NextRequest): NextResponse {
  const signInUrl = new URL('/sign-in', request.url)
  signInUrl.searchParams.set('redirect_url', request.url)
  return NextResponse.redirect(signInUrl)
}

function handleUnauthorized(request: NextRequest): NextResponse {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.json(
      { error: 'Forbidden: Insufficient permissions' },
      { status: 403 }
    )
  }
  return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}