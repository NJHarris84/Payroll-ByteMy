// lib/auth.ts
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { HasuraRole, Permission, hasPermission } from '@/lib/roles';

// Check if a user has a specific Hasura role (server-side)
export async function verifyHasuraRole(allowedRoles: HasuraRole[]): Promise<boolean> {
  const { userId, getToken } = auth();
  
  if (!userId) {
    return false;
  }
  
  try {
    const token = await getToken({ template: 'hasura' });
    if (!token) return false;
    
    // Decode the JWT to get the claims
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    const hasuraClaims = payload['https://hasura.io/jwt/claims'];
    
    if (!hasuraClaims) return false;
    
    const userRole = hasuraClaims['x-hasura-default-role'] as HasuraRole;
    
    return allowedRoles.includes(userRole);
  } catch (error) {
    console.error('Error verifying Hasura role:', error);
    return false;
  }
}

// Check if a user has a specific permission (server-side)
export async function verifyPermission(requiredPermission: Permission): Promise<boolean> {
  const { userId, getToken } = auth();
  
  if (!userId) {
    return false;
  }
  
  try {
    const token = await getToken({ template: 'hasura' });
    if (!token) return false;
    
    // Decode the JWT to get the claims
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    const hasuraClaims = payload['https://hasura.io/jwt/claims'];
    
    if (!hasuraClaims) return false;
    
    const userRole = hasuraClaims['x-hasura-default-role'] as HasuraRole;
    
    return hasPermission(userRole, requiredPermission);
  } catch (error) {
    console.error('Error verifying permission:', error);
    return false;
  }
}

// API route middleware for role-based access control
export function withRoleCheck(allowedRoles: HasuraRole[]) {
  return async function middleware(
    req: NextRequest
  ): Promise<NextResponse | void> {
    const hasRole = await verifyHasuraRole(allowedRoles);
    
    if (!hasRole) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }
    
    return NextResponse.next();
  };
}

// API route middleware for permission-based access control
export function withPermissionCheck(requiredPermission: Permission) {
  return async function middleware(
    req: NextRequest
  ): Promise<NextResponse | void> {
    const hasRequiredPermission = await verifyPermission(requiredPermission);
    
    if (!hasRequiredPermission) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 403 }
      );
    }
    
    return NextResponse.next();
  };
}