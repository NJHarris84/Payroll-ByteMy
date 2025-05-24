// lib/auth/auth.server.ts - SERVER ONLY
import 'server-only'; // Explicitly mark this as server-only code
import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { HasuraRole, Permission, hasPermission } from "@/lib/auth/roles";
import { getHasuraClaims } from '@/lib/utils/jwt-utils';
// Remove duplicate import - use only the local roles import

// Check if a user has a specific Hasura role (server-side)
export async function verifyHasuraRole(allowedRoles: HasuraRole[]): Promise<boolean> {
  const { userId, getToken } = auth();
  
  if (!userId) {
    return false;
  }
  
  try {
    const token = await getToken({ template: 'hasura' });
    if (!token) return false;
    
    const userRole = getUserRole(token);
    
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
    
    const userRole = getUserRole(token);
    
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
        { error: "Not authorised" },
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
        { error: "Not authorised" },
        { status: 403 }
      );
    }
    
    return NextResponse.next();
  };
}

export function getUserRole(token: string): HasuraRole {
  const hasuraClaims = getHasuraClaims(token);
  return hasuraClaims['x-hasura-default-role'] as HasuraRole;
}