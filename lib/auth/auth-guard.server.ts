// lib/api/auth-guard.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export function withAuth(
  handler: (req: NextRequest, context: any) => Promise<NextResponse>,
  options?: {
    roles?: string[]
    permissions?: string[]
  }
) {
  return async (req: NextRequest, context: any) => {
    const { userId, sessionClaims } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const userRole = sessionClaims?.publicMetadata?.role || 'viewer'
    
    // Check roles
    if (options?.roles && !options.roles.includes(userRole as string)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
    
    // Add auth context
    context.auth = { userId, userRole }
    
    return handler(req, context)
  }
}

// Usage:
export const GET = withAuth(
  async (req, { params, auth }) => {
    // Handler has access to auth.userId and auth.userRole
    return NextResponse.json({ data: 'protected' })
  },
  { roles: ['admin', 'manager'] }
)